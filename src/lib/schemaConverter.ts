/**
 * Schema Converter
 * 
 * Converts backend NodeDefinition inputSchema to frontend ConfigField format.
 * This bridges the gap between backend schema format and frontend UI requirements.
 * 
 * ✅ WORLD-CLASS: Intelligent field type detection
 * - Automatically converts dropdown-worthy fields (model, provider, operation, etc.) to select dropdowns
 * - Converts examples to dropdown options when appropriate
 * - Preserves text inputs for user-provided fields (URLs, API keys, prompts, etc.)
 */

import { InputFieldSchema, NodeDefinition } from '@/services/nodeSchemaService';
import { ConfigField } from '@/components/workflow/nodeTypes';

/**
 * Generate friendly label from value
 * Converts technical values to readable labels for dropdowns
 */
function generateFriendlyLabel(value: string, fieldKey: string): string {
  const keyLower = fieldKey.toLowerCase();
  
  // Model names - keep as-is but format nicely
  if (keyLower.includes('model')) {
    // Format model names: "qwen2.5:14b-instruct-q4_K_M" -> "Qwen 2.5 14B (Instruct Q4)"
    if (value.includes(':')) {
      const [name, variant] = value.split(':');
      const formattedName = name
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\d+/g, (match) => ` ${match}`)
        .trim();
      const formattedVariant = variant
        .replace(/_/g, ' ')
        .replace(/\bq(\d+)\b/gi, 'Q$1')
        .trim();
      return `${formattedName} (${formattedVariant})`;
    }
    return value.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  }
  
  // Provider names - capitalize properly
  if (keyLower.includes('provider')) {
    const providerMap: Record<string, string> = {
      'ollama': 'Ollama (Local)',
      'openai': 'OpenAI',
      'anthropic': 'Anthropic Claude',
      'claude': 'Anthropic Claude',
      'gemini': 'Google Gemini',
      'azure': 'Azure OpenAI',
    };
    return providerMap[value.toLowerCase()] || value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  // Operation names - format nicely
  if (keyLower.includes('operation') || keyLower.includes('action')) {
    return value
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }
  
  // HTTP methods - uppercase
  if (keyLower.includes('method')) {
    return value.toUpperCase();
  }
  
  // Format/Type - capitalize
  if (keyLower.includes('format') || keyLower.includes('type')) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  // Level/Severity - capitalize
  if (keyLower.includes('level') || keyLower.includes('severity') || keyLower.includes('priority')) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  // Default: capitalize first letter, replace underscores with spaces
  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * Convert backend InputFieldSchema to frontend ConfigField
 */
export function convertSchemaToConfigField(
  fieldKey: string,
  fieldSchema: InputFieldSchema,
  requiredInputs: string[],
  nodeType?: string
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
    (keyLower.includes('id') && !keyLower.includes('credential') && !keyLower.includes('model')) || // Any ID field (but not credentialId or modelId)
    keyLower.includes('secret') || // secret keys
    keyLower.includes('password') || // password fields
    keyLower.includes('token') || // access tokens
    keyLower.includes('auth') || // authentication fields
    keyLower.includes('prompt') || // prompts are user-provided
    keyLower.includes('message') || // messages are user-provided
    keyLower.includes('body') || // body content is user-provided
    keyLower.includes('content') || // content is user-provided
    keyLower.includes('text') && !keyLower.includes('format'); // text fields (but not textFormat)

  // ✅ WORLD-CLASS: Identify fields that SHOULD be dropdowns (predefined values)
  // These fields have limited, predefined options that users should select from
  const isDropdownWorthyField = 
    keyLower.includes('model') || // AI model selection
    keyLower.includes('provider') || // AI provider selection
    keyLower.includes('operation') || // Operation type (create, read, update, delete)
    keyLower.includes('resource') || // Resource type (contact, company, etc.)
    keyLower.includes('action') || // Action type
    keyLower.includes('method') || // HTTP method (GET, POST, etc.)
    keyLower.includes('mode') || // Execution mode
    keyLower.includes('type') && !keyLower.includes('input') && !keyLower.includes('output') || // Type selection (but not inputType/outputType)
    keyLower.includes('format') || // Format selection (json, text, etc.)
    keyLower.includes('level') || // Log level, severity level
    keyLower.includes('severity') || // Severity level
    keyLower.includes('priority') || // Priority level
    keyLower.includes('channel') || // Communication channel
    keyLower.includes('granularity') || // Granularity options
    keyLower.includes('framework') || // Framework selection
    keyLower.includes('strategy') || // Strategy selection
    keyLower.includes('rule') || // Rule selection
    keyLower.includes('audience') || // Target audience
    keyLower.includes('direction') || // Sort direction
    keyLower.includes('approvaltype') || // Approval type
    keyLower.includes('defaultaction') || // Default action
    keyLower.includes('responseformat') || // Response format
    keyLower.includes('task') && keyLower.includes('type'); // Task type

  // ✅ WORLD-CLASS: Convert examples to dropdown options for dropdown-worthy fields
  // Examples become selectable options when the field is meant to be a dropdown
  let options: { label: string; value: string }[] | undefined = undefined;

  // Force text input for user-provided fields (URLs, IDs, API keys, etc.)
  if (isUserProvidedTextField) {
    frontendType = 'text';
    // Don't set options for these fields - they're user-provided text inputs
  } else if (fieldSchema.ui?.options && fieldSchema.ui.options.length > 0) {
    // ✅ PRIORITY 1: Use explicit ui.options if available (most reliable)
    frontendType = 'select';
    options = fieldSchema.ui.options;
  } else if (isDropdownWorthyField && fieldSchema.examples && Array.isArray(fieldSchema.examples) && fieldSchema.examples.length > 0) {
    // ✅ PRIORITY 2: Convert examples to dropdown options for dropdown-worthy fields
    // Only convert if examples are strings or simple values (not complex objects or template expressions)
    const validExamples = fieldSchema.examples.filter((ex: any) => {
      if (typeof ex === 'string') {
        // Exclude template expressions (they're not selectable values)
        if (ex.includes('{{') || ex.includes('$json') || ex.includes('$node')) {
          return false;
        }
        // Exclude URLs (they're user-provided)
        if (ex.startsWith('http://') || ex.startsWith('https://')) {
          return false;
        }
        return true;
      }
      return typeof ex === 'number' || typeof ex === 'boolean';
    });
    
    // Only create dropdown if we have valid examples (2-50 options is ideal)
    if (validExamples.length >= 2 && validExamples.length <= 50) {
      frontendType = 'select';
      // Remove duplicates while preserving order
      const uniqueValues = Array.from(new Set(validExamples.map((ex: any) => String(ex))));
      options = uniqueValues.map((value) => {
        // Generate friendly label from value
        const label = generateFriendlyLabel(value, fieldKey);
        return { label, value };
      });
    } else if (validExamples.length === 1) {
      // Single example - might be a default, but still show as dropdown for consistency
      const value = String(validExamples[0]);
      frontendType = 'select';
      options = [{ label: generateFriendlyLabel(value, fieldKey), value }];
    }
  }

  // ✅ WORLD-CLASS: Special handling for boolean fields
  if (fieldSchema.type === 'boolean' && !isUserProvidedTextField) {
    frontendType = 'boolean'; // Use switch component, not dropdown
  }

  // Backend widget hints (e.g., multi_email)
  if (fieldSchema.ui?.widget === 'multi_email') {
    frontendType = 'textarea';
  }

  let friendlyLabel =
    fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, ' $1').trim();
  if (nodeType === 'google_gmail') {
    const gmailLabels: Record<string, string> = {
      spreadsheetId: 'Spreadsheet ID (fallback)',
      sheetName: 'Sheet name',
      range: 'Range (optional)',
      useAiRecipientMapping: 'Scan all cells for emails',
    };
    if (gmailLabels[fieldKey]) friendlyLabel = gmailLabels[fieldKey];
  }

  // Short placeholder for selects — full description stays in helpText / tooltips (avoids “filled with lorem” UX).
  const placeholderText =
    frontendType === 'select'
      ? `Select ${friendlyLabel}`
      : fieldSchema.description || undefined;

  // Create ConfigField
  const configField: ConfigField = {
    key: fieldKey,
    label: friendlyLabel,
    type: frontendType,
    required: isRequired,
    defaultValue: fieldSchema.default,
    placeholder: placeholderText,
    helpText: fieldSchema.description || undefined,
    options,
    helpCategory: fieldSchema.helpCategory,
    docsUrl: fieldSchema.docsUrl,
    exampleValue: fieldSchema.exampleValue,
    contextHints: fieldSchema.ui?.contextHints,
    visibleIf: fieldSchema.ui?.visibleIf,
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
      nodeDefinition.requiredInputs,
      nodeDefinition.type
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
        case 'json': {
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
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
