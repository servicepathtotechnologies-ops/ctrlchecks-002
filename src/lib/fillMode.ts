export type FieldFillMode = 'manual_static' | 'runtime_ai' | 'buildtime_ai_once';

type InputSchemaField = {
  fillMode?: {
    default?: FieldFillMode;
    supportsRuntimeAI?: boolean;
    supportsBuildtimeAI?: boolean;
  };
};

export function resolveEffectiveFieldFillMode(
  fieldName: string,
  inputSchema?: Record<string, InputSchemaField>,
  config?: Record<string, unknown>
): FieldFillMode {
  const explicit = (config?._fillMode as Record<string, FieldFillMode> | undefined)?.[fieldName];
  if (explicit === 'manual_static' || explicit === 'runtime_ai' || explicit === 'buildtime_ai_once') {
    return explicit;
  }

  const schemaDefault = inputSchema?.[fieldName]?.fillMode?.default;
  if (
    schemaDefault === 'manual_static' ||
    schemaDefault === 'runtime_ai' ||
    schemaDefault === 'buildtime_ai_once'
  ) {
    return schemaDefault;
  }

  return 'manual_static';
}

export function supportsRuntimeAI(
  fieldName: string,
  inputSchema?: Record<string, InputSchemaField>
): boolean {
  return !!inputSchema?.[fieldName]?.fillMode?.supportsRuntimeAI;
}

/**
 * Wizard ownership step: resolve effective fill mode when state may omit untouched rows.
 * Mirrors worker `resolveEffectiveFieldFillMode` for explicit override + schema default.
 */
export function resolveWizardFieldFillMode(
  wizardExplicit: string | undefined,
  questionDefault: FieldFillMode | undefined
): FieldFillMode {
  if (
    wizardExplicit === 'manual_static' ||
    wizardExplicit === 'runtime_ai' ||
    wizardExplicit === 'buildtime_ai_once'
  ) {
    return wizardExplicit;
  }
  if (
    questionDefault === 'manual_static' ||
    questionDefault === 'runtime_ai' ||
    questionDefault === 'buildtime_ai_once'
  ) {
    return questionDefault;
  }
  return 'manual_static';
}
