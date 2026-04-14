import { describe, it, expect } from 'vitest';
import { shouldRunAttachCredentialsAfterAttachInputs } from '@/lib/workflow-phase-contract';

describe('workflow-phase-contract', () => {
  it('allows attach-credentials only in ownership/configuring phases', () => {
    expect(shouldRunAttachCredentialsAfterAttachInputs('ready_for_ownership')).toBe(true);
    expect(shouldRunAttachCredentialsAfterAttachInputs('READY_FOR_OWNERSHIP')).toBe(true);
    expect(shouldRunAttachCredentialsAfterAttachInputs('configuring_credentials')).toBe(true);
    expect(shouldRunAttachCredentialsAfterAttachInputs('ready_for_execution')).toBe(false);
    expect(shouldRunAttachCredentialsAfterAttachInputs('')).toBe(false);
    expect(shouldRunAttachCredentialsAfterAttachInputs(null)).toBe(false);
    expect(shouldRunAttachCredentialsAfterAttachInputs(undefined)).toBe(false);
  });
});
