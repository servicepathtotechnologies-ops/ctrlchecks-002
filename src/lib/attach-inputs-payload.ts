/**
 * Shared helpers for POST /api/workflows/:id/attach-inputs body shape.
 * Worker accepts flat keys (`config_<nodeId>_<field>`) or nested `{ [nodeId]: { field: value } }`.
 */

/** Meta keys under `node.data.config` that must persist with attach-inputs (ownership / fill mode). */
export const ATTACH_INPUTS_PERSISTABLE_META_KEYS = new Set([
  '_fillMode',
  '_ownershipUnlock',
  '_fieldEnabled',
]);

export function extractNodeConfigForAttachInputs(
  nodeConfig: Record<string, unknown>,
  options?: { includeOwnershipMeta?: boolean }
): Record<string, unknown> {
  const includeMeta = options?.includeOwnershipMeta !== false;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(nodeConfig)) {
    if (value === undefined || value === null) continue;
    if (key.startsWith('_')) {
      if (includeMeta && ATTACH_INPUTS_PERSISTABLE_META_KEYS.has(key)) {
        out[key] = value;
      }
      continue;
    }
    out[key] = value;
  }
  return out;
}

/**
 * Build nested `inputs` object: `{ [nodeId]: { ...configFields } }` for all nodes that have payload.
 */
export function buildNestedAttachInputsFromNodes(
  nodes: Array<{ id: string; data?: { config?: Record<string, unknown> } }>,
  options?: { includeOwnershipMeta?: boolean }
): Record<string, Record<string, unknown>> {
  const out: Record<string, Record<string, unknown>> = {};
  for (const node of nodes) {
    const cfg = node.data?.config || {};
    const extracted = extractNodeConfigForAttachInputs(cfg as Record<string, unknown>, options);
    if (Object.keys(extracted).length > 0) {
      out[node.id] = extracted;
    }
  }
  return out;
}
