/**
 * Credentials step: show only rows that match backend "missing" credential resolution.
 * Mirrors worker/src/services/ai/unified-readiness.ts preference for credentialStatuses.
 */

export type CredentialStatusRow = {
  nodeId?: string;
  credentialId?: string;
  displayName?: string;
  status?: string;
};

function norm(s: unknown): string {
  return String(s ?? '').trim().toLowerCase();
}

/** Ids on a credential question that can match resolution.credentialId / vaultKey. */
export function credentialIdCandidatesFromQuestion(q: Record<string, unknown>): string[] {
  const c = (q.credential as Record<string, unknown> | undefined) || undefined;
  const out = new Set<string>();
  const add = (x: unknown) => {
    const t = norm(x);
    if (t) out.add(t);
  };
  add(q.fieldName);
  add(c?.vaultKey);
  add(c?.credentialId);
  return [...out];
}

export function buildCompositeKey(nodeId: string, credentialId: string): string {
  return `${String(nodeId || '').trim()}::${norm(credentialId)}`;
}

function missingKeysFromStatuses(statuses: CredentialStatusRow[]): Set<string> {
  const keys = new Set<string>();
  for (const s of statuses) {
    if (String(s.status || '') !== 'required_missing') continue;
    const nid = String(s.nodeId || '').trim();
    const cid = norm(s.credentialId);
    if (!nid || !cid || cid === 'none') continue;
    keys.add(buildCompositeKey(nid, cid));
  }
  return keys;
}

function missingKeysFromUnifiedMissing(missing: Array<Record<string, unknown>>): Set<string> {
  const keys = new Set<string>();
  for (const m of missing) {
    const cid = norm(m.credentialId ?? m.vaultKey);
    if (!cid) continue;
    const nodeIds = Array.isArray(m.nodeIds) ? m.nodeIds : [];
    if (nodeIds.length > 0) {
      for (const nid of nodeIds) {
        const n = String(nid || '').trim();
        if (n) keys.add(buildCompositeKey(n, cid));
      }
    } else {
      const n = String(m.nodeId || '').trim();
      if (n) keys.add(buildCompositeKey(n, cid));
    }
  }
  return keys;
}

function isDiscoveryEntryMissing(c: Record<string, unknown>): boolean {
  const status = String(c?.status || '').toLowerCase();
  if (status) return status.includes('missing') || status === 'required';
  if (typeof c.satisfied === 'boolean') return !c.satisfied;
  return true;
}

function missingKeysFromDiscovered(discovered: Array<Record<string, unknown>>): Set<string> {
  const keys = new Set<string>();
  for (const c of discovered) {
    if (!isDiscoveryEntryMissing(c)) continue;
    const cid = norm(c.credentialId ?? c.vaultKey);
    if (!cid) continue;
    const nodeIds = Array.isArray(c.nodeIds) ? c.nodeIds : [];
    if (nodeIds.length > 0) {
      for (const nid of nodeIds) {
        const n = String(nid || '').trim();
        if (n) keys.add(buildCompositeKey(n, cid));
      }
    }
  }
  return keys;
}

function questionMatchesKeySet(q: Record<string, unknown>, keys: Set<string>): boolean {
  const nodeId = String(q.nodeId || '').trim();
  if (!nodeId) return false;
  const candidates = credentialIdCandidatesFromQuestion(q);
  for (const cid of candidates) {
    if (keys.has(buildCompositeKey(nodeId, cid))) return true;
  }
  return false;
}

function dedupeQuestions<T extends Record<string, unknown>>(questions: T[]): T[] {
  const seen = new Map<string, T>();
  for (const q of questions) {
    const c = (q.credential as Record<string, unknown> | undefined) || undefined;
    const key = `cred:${String(q.nodeId || 'global')}:${norm(c?.vaultKey ?? c?.credentialId ?? q.fieldName)}`;
    if (!seen.has(key)) seen.set(key, q);
  }
  return [...seen.values()];
}

export type FilterCredentialQuestionsParams = {
  questions: Array<Record<string, unknown>>;
  credentialStatuses?: CredentialStatusRow[] | null;
  unifiedCredentialsMissing?: Array<Record<string, unknown>> | null;
  discoveredCredentials?: Array<Record<string, unknown>> | null;
};

/**
 * Filters vault credential questions to those the user must still satisfy.
 *
 * - If `credentialStatuses` is a non-empty array: use `required_missing` rows only.
 *   When there are no `required_missing` rows, returns [] (nothing to collect).
 * - If `credentialStatuses` is empty/missing: fall back to `unifiedCredentialsMissing`,
 *   then `discoveredCredentials` (missing-style), then return all `questions`.
 */
export function filterCredentialQuestionsForStep(
  params: FilterCredentialQuestionsParams
): Array<Record<string, unknown>> {
  const { questions, credentialStatuses, unifiedCredentialsMissing, discoveredCredentials } = params;
  const base = Array.isArray(questions) ? questions : [];

  const statuses = Array.isArray(credentialStatuses) ? credentialStatuses : [];
  if (statuses.length > 0) {
    const keys = missingKeysFromStatuses(statuses);
    if (keys.size === 0) return [];
    const filtered = base.filter((q) => questionMatchesKeySet(q, keys));
    // Defensive: if resolution says missing but keys don't align with question shapes, show base list.
    if (filtered.length === 0 && keys.size > 0) return dedupeQuestions(base);
    return dedupeQuestions(filtered);
  }

  const unified = Array.isArray(unifiedCredentialsMissing) ? unifiedCredentialsMissing : [];
  if (unified.length > 0) {
    const keys = missingKeysFromUnifiedMissing(unified);
    if (keys.size === 0) return dedupeQuestions(base);
    const filtered = base.filter((q) => questionMatchesKeySet(q, keys));
    return dedupeQuestions(filtered.length > 0 ? filtered : base);
  }

  const discovered = Array.isArray(discoveredCredentials) ? discoveredCredentials : [];
  const discKeys = missingKeysFromDiscovered(discovered);
  if (discKeys.size > 0) {
    const filtered = base.filter((q) => questionMatchesKeySet(q, discKeys));
    return dedupeQuestions(filtered.length > 0 ? filtered : base);
  }

  return dedupeQuestions(base);
}
