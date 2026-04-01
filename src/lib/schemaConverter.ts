/**
 * Schema Converter
 * 
 * Converts backend NodeDefinition inputSchema to frontend ConfigField format.
 * This bridges the gap between backend schema format and frontend UI requirements.
 * 
 * WORLD-CLASS: Intelligent field type detection
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
  
  if (keyLower.includes('operation') || keyLower.includes('action')) {
    return value.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  }
  
  if (keyLower.includes('method')) return value.toUpperCase();
  
  if (keyLower.includes('format') || keyLower.includes('type')) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  if (keyLower.includes('level') || keyLower.includes('severity') || keyLower.includes('priority')) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  return value.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
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
  const isRequired = requiredInputs.includes(fieldKey);

  let frontendType: ConfigField['type'] = 'text';
  switch (fieldSchema.type) {
    case 'string':
      if (
        fieldSchema.description.toLowerCase().includes('cron') ||
        fieldSchema.description.toLowerCase().includes('schedule')
      ) {
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

  const isUserProvidedTextField =
    keyLower.includes('url') ||
    keyLower.includes('endpoint') ||
    (keyLower.includes('api') &&
      (keyLower.includes('key') || keyLower.includes('token') || keyLower.includes('secret'))) ||
    keyLower.includes('spreadsheet') ||
    (keyLower.includes('table') && keyLower.includes('name')) ||
    (keyLower.includes('file') && keyLower.includes('name')) ||
    (keyLower.includes('database') && keyLower.includes('name')) ||
    (keyLower.includes('sheet') && keyLower.includes('id')) ||
    (keyLower.includes('id') && !keyLower.includes('credential') && !keyLower.includes('model')) ||
    keyLower.includes('secret') ||
    keyLower.includes('password') ||
    keyLower.includes('token') ||
    keyLower.includes('auth') ||
    keyLower.includes('prompt') ||
    keyLower.includes('message') ||
    keyLower.includes('body') ||
    keyLower.includes('content') ||
    (keyLower.includes('text') && !keyLower.includes('format'));

  const isDropdownWorthyField =
    keyLower.includes('model') ||
    keyLower.includes('provider') ||
    keyLower.includes('operation') ||
    keyLower.includes('resource') ||
    keyLower.includes('action') ||
    keyLower.includes('method') ||
    keyLower.includes('mode') ||
    (keyLower.includes('type') && !keyLower.includes('input') && !keyLower.includes('output')) ||
    keyLower.includes('format') ||
    keyLower.includes('level') ||
    keyLower.includes('severity') ||
    keyLower.includes('priority') ||
    keyLower.includes('channel') ||
    keyLower.includes('granularity') ||
    keyLower.includes('framework') ||
    keyLower.includes('strategy') ||
    keyLower.includes('rule') ||
    keyLower.includes('audience') ||
    keyLower.includes('direction') ||
    keyLower.includes('approvaltype') ||
    keyLower.includes('defaultaction') ||
    keyLower.includes('responseformat') ||
    (keyLower.includes('task') && keyLower.includes('type'));

  let options: { label: string; value: string }[] | undefined = undefined;

  if (isUserProvidedTextField) {
    frontendType = 'text';
  } else if (fieldSchema.ui?.options && fieldSchema.ui.options.length > 0) {
    frontendType = 'select';
    options = fieldSchema.ui.options;
  } else if (
    isDropdownWorthyField &&
    fieldSchema.examples &&
    Array.isArray(fieldSchema.examples) &&
    fieldSchema.examples.length > 0
  ) {
    const validExamples = fieldSchema.examples.filter((ex: any) => {
      if (typeof ex === 'string') {
        if (ex.includes('{{') || ex.includes('$json') || ex.includes('$node')) return false;
        if (ex.startsWith('http://') || ex.startsWith('https://')) return false;
        return true;
      }
      return typeof ex === 'number' || typeof ex === 'boolean';
    });

    if (validExamples.length >= 2 && validExamples.length <= 50) {
      frontendType = 'select';
      const uniqueValues = Array.from(new Set(validExamples.map((ex: any) => String(ex))));
      options = uniqueValues.map((value) => ({
        label: generateFriendlyLabel(value, fieldKey),
        value,
      }));
    } else if (validExamples.length === 1) {
      const value = String(validExamples[0]);
      frontendType = 'select';
      options = [{ label: generateFriendlyLabel(value, fieldKey), value }];
    }
  }

  if (fieldSchema.type === 'boolean' && !isUserProvidedTextField) {
    frontendType = 'boolean';
  }

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

  // Use short, actionable placeholders instead of the full description text.
  // The full description is already shown above the field as helpText.
  // Showing it again as placeholder makes the field look pre-filled when it is empty.
  const shortPlaceholderMap: Record<string, string> = {
    recipientEmails: 'e.g. alice@example.com, bob@example.com',
    spreadsheetId: 'e.g. 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    sheetName: 'e.g. Sheet1',
    range: 'e.g. A2:D100 (optional)',
    subject: 'e.g. Hello from the workflow',
    body: 'e.g. Hi, your message here...',
    query: 'e.g. from:example@gmail.com',
    messageId: 'e.g. abc123def456',
    from: 'e.g. your-email@gmail.com (optional)',
  };
  const firstExample =
    fieldSchema.examples && Array.isArray(fieldSchema.examples) && fieldSchema.examples.length > 0
      ? String(fieldSchema.examples[0])
      : undefined;
  const placeholderText =
    frontendType === 'select'
      ? `Select ${friendlyLabel}`
      : shortPlaceholderMap[fieldKey] || (firstExample ? `e.g. ${firstExample}` : undefined);

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

  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    // Skip credential-owned fields — managed by the credential system, not user text input.
    if ((fieldSchema as any).ownership === 'credential') continue;

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

  for (const requiredField of nodeDefinition.requiredInputs) {
    if (
      !(requiredField in inputs) ||
      inputs[requiredField] === null ||
      inputs[requiredField] === undefined ||
      inputs[requiredField] === ''
    ) {
      errors.push({ field: requiredField, message: `${requiredField} is required` });
    }
  }

  // Conditional required fields (schema-driven)
  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    const requiredIf = (fieldSchema as any)?.ui?.requiredIf as
      | { field: string; equals: any }
      | undefined;
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
      errors.push({ field: fieldKey, message: `${fieldKey} is required` });
    }
  }

  for (const [fieldKey, fieldSchema] of Object.entries(nodeDefinition.inputSchema)) {
    const value = inputs[fieldKey];

    if ((value === null || value === undefined || value === '') && !fieldSchema.required) {
      continue;
    }

    if (fieldSchema.validation) {
      const validationResult = fieldSchema.validation(value);
      if (validationResult !== true) {
        errors.push({
          field: fieldKey,
          message:
            typeof validationResult === 'string' ? validationResult : `${fieldKey} is invalid`,
        });
      }
    }

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
          let parsedValue = value;
          if (typeof value === 'string' && value.trim() !== '') {
            try {
              parsedValue = JSON.parse(value);
            } catch {
              errors.push({ field: fieldKey, message: `${fieldKey} must be valid JSON` });
              break;
            }
          }
          if (typeof parsedValue !== 'object' || parsedValue === null || Array.isArray(parsedValue)) {
            errors.push({ field: fieldKey, message: `${fieldKey} must be an object` });
          }
          break;
        }
      }
    }
  }

  return { valid: errors.length === 0, errors };
}
