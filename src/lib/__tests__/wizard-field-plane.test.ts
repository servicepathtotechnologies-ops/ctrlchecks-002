import { describe, expect, it } from 'vitest';
import {
    buildFieldPlaneRows,
    explainWizardOwnershipRow,
    selectOwnershipQuestionsFromPlane,
    WIZARD_OWNERSHIP_LOCK_COPY,
} from '../wizard-field-plane';

describe('explainWizardOwnershipRow', () => {
  it('suggests AI build when runtime is disabled but buildtime is allowed', () => {
    const text = explainWizardOwnershipRow(
      { supportsRuntimeAI: false, supportsBuildtimeAI: true },
      { locked: false, aiDisabled: true }
    );
    expect(text).toContain('AI (build)');
    expect(text).toContain('You');
  });

  it('uses generic no-runtime copy when buildtime is also disallowed', () => {
    const text = explainWizardOwnershipRow(
      { supportsRuntimeAI: false, supportsBuildtimeAI: false },
      { locked: false, aiDisabled: true }
    );
    expect(text).toBe(WIZARD_OWNERSHIP_LOCK_COPY.no_runtime_ai);
  });

  it('returns locked copy when locked with reason key', () => {
    const text = explainWizardOwnershipRow(
      { ownershipLockReason: 'structural' },
      { locked: true, aiDisabled: false }
    );
    expect(text).toBe(WIZARD_OWNERSHIP_LOCK_COPY.structural);
  });
});

// Bug C fix: credential questions must not appear in the ComprehensiveQuestions (field-ownership) step
describe('selectOwnershipQuestionsFromPlane — Bug C filter', () => {
    const normalQ = {
        nodeId: 'n1',
        fieldName: 'subject',
        category: 'content',
        ownershipClass: 'structural',
        isVaultCredential: false,
    };

    // type: 'credentialId' — pipeline credential question shape
    const credentialIdTypeQ = {
        nodeId: 'n1',
        fieldName: 'credentialId',
        type: 'credentialId',
        category: 'content',
        isVaultCredential: false,
    };

    // category: 'credentials' (plural) — workflow-analyzer question shape
    const credentialsCategoryQ = {
        nodeId: 'n1',
        fieldName: 'apiKey',
        category: 'credentials',
        isVaultCredential: false,
    };

    // Standard vault credential (isVaultCredential + category: 'credential')
    const vaultCredQ = {
        nodeId: 'n1',
        fieldName: 'webhookUrl',
        category: 'credential',
        ownershipClass: 'credential',
        isVaultCredential: true,
    };

    function makeRows(questions: Record<string, any>[]) {
        return buildFieldPlaneRows(questions, undefined);
    }

    it('excludes questions with type === credentialId from ownership step', () => {
        const rows = makeRows([normalQ, credentialIdTypeQ]);
        const result = selectOwnershipQuestionsFromPlane(rows);
        expect(result).toHaveLength(1);
        expect(result[0].fieldName).toBe('subject');
    });

    it('excludes questions with category === credentials (plural) from ownership step', () => {
        const rows = makeRows([normalQ, credentialsCategoryQ]);
        const result = selectOwnershipQuestionsFromPlane(rows);
        expect(result).toHaveLength(1);
        expect(result[0].fieldName).toBe('subject');
    });

    it('excludes standard vault credential questions from ownership step', () => {
        const rows = makeRows([normalQ, vaultCredQ]);
        const result = selectOwnershipQuestionsFromPlane(rows);
        expect(result).toHaveLength(1);
        expect(result[0].fieldName).toBe('subject');
    });

    it('keeps normal non-credential questions in ownership step', () => {
        const rows = makeRows([normalQ]);
        const result = selectOwnershipQuestionsFromPlane(rows);
        expect(result).toHaveLength(1);
        expect(result[0].fieldName).toBe('subject');
    });

    it('returns empty when all questions are credential type', () => {
        const rows = makeRows([credentialIdTypeQ, credentialsCategoryQ, vaultCredQ]);
        const result = selectOwnershipQuestionsFromPlane(rows);
        expect(result).toHaveLength(0);
    });
});

describe('buildFieldPlaneRows deduplication', () => {
    it('keeps one row per node/field and prefers richer schema question', () => {
        const duplicatePlain = {
            id: 'q_plain',
            nodeId: 'n_function',
            fieldName: 'timeout',
            type: 'text',
            category: 'configuration',
            description: 'Input field timeout',
            ownershipClass: 'value',
        };
        const duplicateRich = {
            id: 'q_rich',
            nodeId: 'n_function',
            fieldName: 'timeout',
            type: 'number',
            category: 'configuration',
            description: 'Timeout in milliseconds (optional)',
            ownershipClass: 'value',
        };

        const rows = buildFieldPlaneRows([duplicatePlain, duplicateRich], undefined);
        expect(rows).toHaveLength(1);
        expect(rows[0].question.id).toBe('q_rich');
        expect(rows[0].question.type).toBe('number');
    });
});
