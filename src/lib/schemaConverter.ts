/**
 * Schema Converter
 * 
 * Converts backend NodeDefinition inputSchema to frontend ConfigField format.
 * This bridges the gap between backend schema format and frontend UI requirements.
 */

import { InputFieldSchema, NodeDefinition } from '@/services/nodeSchemaService';
import { ConfigField } from '@/components/workflow/nodeTypes';

/**
 * Convert backend InputFieldSchema to frontend ConfigField
 */
export function convertSchemaToConfigField(
  fieldKey: string,
  fieldSchema: InputFieldSchema,
  requiredInputs: string[]
): ConfigField {
  // Determine if field is required
  const isRequired = requiredInputs.includes(fieldKey);

  // Map backend type to frontend type
  let frontendType: ConfigField['type'] = 'text';
  switch (fieldSchema.type) {
    case 'string':
      // Check if it's a cron expression (heuristic: description contains "cron" or "schedule")
      if (fieldSchema.description.toLowerCase().includes('cron') || 
          fieldSchema.description.toLowerCase().includes('schedule')) {
        frontendType = 'cron';
      } else {
        frontendType = 'text';
      }
      break;
    case 'number':
      frontendType = 'number';
      break;
    case 'boolean':
      frontendType = 'boolean';
      break;
    case 'array':
    case 'object':
    case 'json':
      frontendType = 'json';
      break;
    default:
      frontendType = 'text';
  }

  const keyLower = fieldKey.toLowerCase();
  const isEmailLikeField = keyLower.includes('email') || keyLower.includes('recipient');

  // ✅ WORLD-CLASS: Identify fields that MUST be text input (user-provided values)
  // These should NEVER be dropdowns, even if they have examples or options
  // This matches the credential section logic for consistency
  const isUserProvidedTextField = 
    keyLower.includes('url') || // webhookUrl, apiUrl, baseUrl, endpoint, etc.
    keyLower.includes('endpoint') ||
    (keyLower.includes('api') && (keyLower.includes('key') || keyLower.includes('token') || keyLower.includes('secret'))) || // apiKey, api_key, apiToken, apiSecret
    keyLower.includes('spreadsheet') || // spreadsheetId
    (keyLower.includes('table') && keyLower.includes('name')) || // tableName
    (keyLower.includes('file') && keyLower.includes('name')) || // fileName
    (keyLower.includes('database') && keyLower.includes('name')) || // databaseName
    (keyLower.includes('sheet') && keyLower.includes('id')) || // sheetId
    (keyLower.includes('id') && !keyLower.includes('credential')) || // Any ID field (but not credentialId)
    keyLower.includes('secret') || // secret keys
    keyLower.includes('password') || // password fields
    keyLower.includes('token') || // access tokens
    keyLower.includes('auth'); // authentication fields

  // ✅ WORLD-CLASS: Only use dropdowns for operation/resource fields with explicit options
  // Examples are just hints for users, not selectable dropdown options
  let options: { label: string; value: string }[] | undefined = undefined;

  // Force text input for user-provided fields (URLs, IDs, API keys, etc.)
  if (isUserProvidedTextField) {
    frontendType = 'text';
    // Don't set options for these fields - they're user-provided text inputs
  } else if (fieldSchema.ui?.options && fieldSchema.ui.options.length > 0) {
    // Check if this is an operation/resource field (should be dropdown)
    const isOperationOrResourceField = 
      keyLower.includes('operation') ||
      keyLower.includes('resource') ||
      keyLower.includes('action');
    
    if (isOperationOrResourceField) {
      frontendType = 'select';
      options = fieldSchema.ui.options;
    } else {
      // For non-operation/resource fields with options, still use text input
      // Options might be examples, not actual selectable values
      frontendType = 'text';
    }
  }
  // Note: We no longer convert examples to dropdowns - examples are just hints

  // Backend widget hints (e.g., multi_email)
  if (fieldSchema.ui?.widget === 'multi_email') {
    frontendType = 'textarea';
  }

  // Create ConfigField
  const configField: ConfigField = {
    key: fieldKey,
    label: fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, ' $1').trim(),
    type: frontendType,
    required: isRequired,
    defaultValue: fieldSchema.default,
    placeholder: fieldSchema.description || undefined,
    helpText: fieldSchema.description || undefined,
    options,
  };

  return configField;
}

/**
 * Convert backend NodeDefinition to frontend ConfigField array
 */
export function convertNodeDefinitionToConfigFields(
  nodeDefinition: NodeDefinition
): ConfigField[] {
  const configFields: ConfigField[] = [];

  // Convert each field in inputSchema
  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    const configField = convertSchemaToConfigField(
      fieldKey,
      fieldSchema,
      nodeDefinition.requiredInputs
    );
    configFields.push(configField);
  }

  return configFields;
}

/**
 * Validate node inputs against schema and return errors
 */
export function validateNodeInputsAgainstSchema(
  nodeDefinition: NodeDefinition,
  inputs: Record<string, any>
): { valid: boolean; errors: Array<{ field: string; message: string }> } {
  const errors: Array<{ field: string; message: string }> = [];

  // Check required fields
  for (const requiredField of nodeDefinition.requiredInputs) {
    if (!(requiredField in inputs) || inputs[requiredField] === null || inputs[requiredField] === undefined || inputs[requiredField] === '') {
      errors.push({
        field: requiredField,
        message: `${requiredField} is required`,
      });
    }
  }

  // ✅ Systematic UI: conditional required fields (schema-driven)
  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    const requiredIf = (fieldSchema as any)?.ui?.requiredIf as { field: string; equals: any } | undefined;
    if (!requiredIf) continue;
    const depValue = (inputs as any)?.[requiredIf.field];
    if (depValue !== requiredIf.equals) continue;

    const value = (inputs as any)?.[fieldKey];
    const missing =
      value === undefined ||
      value === null ||
      value === '' ||
      (Array.isArray(value) && value.length === 0);
    if (missing) {
      errors.push({
        field: fieldKey,
        message: `${fieldKey} is required`,
      });
    }
  }

  // Validate each field using schema validation
  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    const value = inputs[fieldKey];

    // Skip validation if field is not provided and not required
    if ((value === null || value === undefined || value === '') && !fieldSchema.required) {
      continue;
    }

    // Run custom validation if available
    if (fieldSchema.validation) {
      const validationResult = fieldSchema.validation(value);
      if (validationResult !== true) {
        errors.push({
          field: fieldKey,
          message: typeof validationResult === 'string' ? validationResult : `${fieldKey} is invalid`,
        });
      }
    }

    // Type validation
    if (value !== null && value !== undefined && value !== '') {
      switch (fieldSchema.type) {
        case 'string':
          if (typeof value !== 'string') {
            errors.push({ field: fieldKey, message: `${fieldKey} must be a string` });
          }
          break;
        case 'number':
          if (typeof value !== 'number' && isNaN(Number(value))) {
            errors.push({ field: fieldKey, message: `${fieldKey} must be a number` });
          }
          break;
        case 'boolean':
          if (typeof value !== 'boolean') {
            errors.push({ field: fieldKey, message: `${fieldKey} must be a boolean` });
          }
          break;
        case 'array':
          if (!Array.isArray(value)) {
            errors.push({ field: fieldKey, message: `${fieldKey} must be an array` });
          }
          break;
        case 'object':
        case 'json':
          // ✅ UNIVERSAL FIX: Handle JSON strings from textarea inputs
          // Users type JSON in textarea, which is stored as string
          // Try to parse JSON string before validation
          let parsedValue = value;
          if (typeof value === 'string' && value.trim() !== '') {
            try {
              parsedValue = JSON.parse(value);
            } catch (parseError) {
              // If JSON parse fails, it's invalid JSON
              errors.push({ field: fieldKey, message: `${fieldKey} must be valid JSON` });
              break; // Don't continue validation if JSON is invalid
            }
          }
          
          // Now validate the parsed value
          if (typeof parsedValue !== 'object' || parsedValue === null || Array.isArray(parsedValue)) {
            errors.push({ field: fieldKey, message: `${fieldKey} must be an object` });
          }
          break;
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
