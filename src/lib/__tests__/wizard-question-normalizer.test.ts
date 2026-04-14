import { describe, expect, it } from 'vitest';
import { normalizeAndDedupeQuestions } from '../wizard-question-normalizer';

describe('normalizeAndDedupeQuestions', () => {
    it('dedupes credential rows with same vault key', () => {
        const rows = normalizeAndDedupeQuestions([
            {
                id: 'a',
                nodeId: 'n1',
                fieldName: 'webhookUrl',
                category: 'credential',
                isVaultCredential: true,
                credential: { vaultKey: 'slack_webhook_url' },
                type: 'text',
            },
            {
                id: 'b',
                nodeId: 'n1',
                fieldName: 'webhookUrl',
                category: 'credential',
                isVaultCredential: true,
                credential: { vaultKey: 'slack_webhook_url' },
                type: 'select',
                options: [{ label: 'x', value: 'x' }],
            },
        ]);

        expect(rows).toHaveLength(1);
        expect(rows[0].id).toBe('b');
    });

    it('dedupes field rows by nodeId+fieldName with trimmed keys', () => {
        const rows = normalizeAndDedupeQuestions([
            {
                id: 'plain',
                nodeId: ' n1 ',
                fieldName: ' timeout ',
                category: 'configuration',
                type: 'text',
            },
            {
                id: 'rich',
                nodeId: 'n1',
                fieldName: 'timeout',
                category: 'configuration',
                type: 'number',
                description: 'Timeout in milliseconds',
            },
        ]);

        expect(rows).toHaveLength(1);
        expect(rows[0].id).toBe('rich');
        expect(rows[0].nodeId).toBe('n1');
        expect(rows[0].fieldName).toBe('timeout');
    });
});

