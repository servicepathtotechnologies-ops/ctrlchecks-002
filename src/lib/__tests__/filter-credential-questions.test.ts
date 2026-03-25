import { describe, it, expect } from 'vitest';
import {
  filterCredentialQuestionsForStep,
  buildCompositeKey,
  credentialIdCandidatesFromQuestion,
} from '../filter-credential-questions';

const slackQ = {
  id: 'n1_slack',
  nodeId: 'n1',
  category: 'credential',
  isVaultCredential: true,
  fieldName: 'slack',
  credential: { vaultKey: 'slack', credentialId: 'slack' },
};

const smtpQ = {
  id: 'n1_smtp',
  nodeId: 'n1',
  category: 'credential',
  isVaultCredential: true,
  fieldName: 'smtp',
  credential: { vaultKey: 'smtp', credentialId: 'smtp' },
};

describe('filterCredentialQuestionsForStep', () => {
  it('with credentialStatuses: keeps only required_missing rows (same node)', () => {
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, smtpQ],
      credentialStatuses: [
        {
          nodeId: 'n1',
          credentialId: 'slack',
          status: 'required_missing',
        },
        {
          nodeId: 'n1',
          credentialId: 'smtp',
          status: 'resolved_connected',
        },
      ],
    });
    expect(out).toHaveLength(1);
    expect((out[0] as any).fieldName).toBe('slack');
  });

  it('with credentialStatuses: no required_missing returns empty list', () => {
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, smtpQ],
      credentialStatuses: [
        { nodeId: 'n1', credentialId: 'slack', status: 'resolved_connected' },
        { nodeId: 'n1', credentialId: 'smtp', status: 'resolved_connected' },
      ],
    });
    expect(out).toHaveLength(0);
  });

  it('empty credentialStatuses falls back to all questions', () => {
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, smtpQ],
      credentialStatuses: [],
    });
    expect(out).toHaveLength(2);
  });

  it('undefined credentialStatuses uses unifiedCredentialsMissing when present', () => {
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, smtpQ],
      credentialStatuses: undefined,
      unifiedCredentialsMissing: [{ nodeIds: ['n1'], credentialId: 'slack' }],
    });
    expect(out).toHaveLength(1);
    expect((out[0] as any).fieldName).toBe('slack');
  });

  it('uses discoveredCredentials when statuses and unified are absent', () => {
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, smtpQ],
      credentialStatuses: undefined,
      unifiedCredentialsMissing: undefined,
      discoveredCredentials: [
        { nodeIds: ['n1'], vaultKey: 'slack', status: 'required_missing' },
      ],
    });
    expect(out).toHaveLength(1);
    expect((out[0] as any).fieldName).toBe('slack');
  });

  it('dedupes duplicate keys', () => {
    const dup = { ...slackQ, id: 'dup' };
    const out = filterCredentialQuestionsForStep({
      questions: [slackQ, dup],
      credentialStatuses: [
        { nodeId: 'n1', credentialId: 'slack', status: 'required_missing' },
      ],
    });
    expect(out).toHaveLength(1);
  });
});

describe('helpers', () => {
  it('buildCompositeKey normalizes case', () => {
    expect(buildCompositeKey('N1', 'Slack')).toBe('N1::slack');
  });

  it('credentialIdCandidatesFromQuestion collects field and credential ids', () => {
    const c = credentialIdCandidatesFromQuestion({
      fieldName: 'webhook_url',
      credential: { vaultKey: 'slack', credentialId: 'slack' },
    });
    expect(c).toContain('webhook_url');
    expect(c).toContain('slack');
  });
});
