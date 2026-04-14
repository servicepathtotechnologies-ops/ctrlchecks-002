import { isVaultCredentialQuestion } from './wizard-field-plane';

function norm(value: unknown): string {
    return String(value ?? '').trim().toLowerCase();
}

function scoreQuestion(candidate: Record<string, any>): number {
    let score = 0;
    if (candidate?.credential?.vaultKey) score += 100;
    if (candidate?.type === 'select' || (Array.isArray(candidate?.options) && candidate.options.length > 0))
        score += 10;
    if (
        candidate?.type === 'textarea' ||
        candidate?.type === 'number' ||
        candidate?.type === 'password'
    )
        score += 5;
    if (
        typeof candidate?.description === 'string' &&
        !candidate.description.startsWith('Input field ')
    )
        score += 2;
    return score;
}

export function normalizeAndDedupeQuestions(input: any[]): any[] {
    const list = Array.isArray(input) ? input : [];
    const dedupe = new Map<string, Record<string, any>>();

    for (const raw of list) {
        if (!raw || typeof raw !== 'object') continue;
        const q = raw as Record<string, any>;
        const nodeId = String(q.nodeId ?? '').trim();
        const fieldName = String(q.fieldName ?? '').trim();
        if (!nodeId || !fieldName) continue;

        const normalized = {
            ...q,
            nodeId,
            fieldName,
            id: String(q.id || `${nodeId}_${fieldName}`),
            category: String(q.category || '').trim() || 'configuration',
            ownershipClass: String(q.ownershipClass || '').trim() || undefined,
        };

        const isCredential = isVaultCredentialQuestion(normalized);
        const credKey = norm(
            normalized.credential?.vaultKey || normalized.credential?.credentialId || fieldName
        );
        const key = isCredential ? `cred:${nodeId}:${credKey}` : `field:${nodeId}:${norm(fieldName)}`;

        const existing = dedupe.get(key);
        if (!existing) {
            dedupe.set(key, normalized);
            continue;
        }

        if (scoreQuestion(normalized) > scoreQuestion(existing)) {
            dedupe.set(key, normalized);
        }
    }

    return Array.from(dedupe.values());
}

