export interface CanonicalFormField {
  id: string;
  key: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: Array<{ label: string; value: string }>;
  placeholder?: string;
  defaultValue?: string;
}

const MAX_KEY_LENGTH = 32;
const MAX_LABEL_LENGTH = 40;
const RESERVED_KEYS = new Set(['input', 'json', '$json', 'data', 'meta', 'files', 'submitted_at']);

function toSnakeCase(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function simpleHash(value: string): string {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return Math.abs(hash >>> 0).toString(16).slice(0, 6);
}

function shortenLabel(input: string): string {
  const normalized = input.replace(/\s+/g, ' ').trim();
  if (normalized.length <= MAX_LABEL_LENGTH) return normalized;
  return `${normalized.slice(0, MAX_LABEL_LENGTH - 1).trimEnd()}…`;
}

function ensureKey(raw: string, used: Set<string>): string {
  let key = toSnakeCase(raw) || 'field';
  if (key.length > MAX_KEY_LENGTH) {
    key = `${key.slice(0, MAX_KEY_LENGTH - 7)}_${simpleHash(key)}`;
  }
  if (RESERVED_KEYS.has(key) || used.has(key)) {
    key = `${key.slice(0, Math.max(1, MAX_KEY_LENGTH - 7))}_${simpleHash(raw)}`;
  }
  while (used.has(key)) {
    key = `${key.slice(0, Math.max(1, MAX_KEY_LENGTH - 7))}_${simpleHash(`${raw}_${key}`)}`;
  }
  used.add(key);
  return key;
}

export function normalizeFormFieldIdentity(
  field: Record<string, unknown>,
  used: Set<string>
): CanonicalFormField {
  const sourceLabel = String(field.label || field.name || field.key || 'Field');
  const sourceKey = String(field.key || field.name || sourceLabel);
  const key = ensureKey(sourceKey, used);
  return {
    id: String(field.id || `field_${key}`),
    key,
    name: key,
    label: shortenLabel(sourceLabel),
    type: String(field.type || 'text'),
    required: field.required !== false,
    options: Array.isArray(field.options) ? (field.options as any) : undefined,
    placeholder: typeof field.placeholder === 'string' ? field.placeholder : undefined,
    defaultValue: typeof field.defaultValue === 'string' ? field.defaultValue : undefined,
  };
}

export function normalizeFormFieldsIdentity(fields: Array<Record<string, unknown>>): CanonicalFormField[] {
  const used = new Set<string>();
  return fields.map((field) => normalizeFormFieldIdentity(field, used));
}
