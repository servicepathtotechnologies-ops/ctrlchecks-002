import { describe, expect, it } from 'vitest';
import { explainWizardOwnershipRow, WIZARD_OWNERSHIP_LOCK_COPY } from '../wizard-field-plane';

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
