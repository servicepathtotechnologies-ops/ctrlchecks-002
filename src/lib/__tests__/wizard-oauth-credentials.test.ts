import { describe, it, expect } from 'vitest';
import {
  oauthRequirementCandidates,
  filterStillBlockingOAuth,
  oauthRowNeedsGoogleConnect,
} from '../wizard-oauth-credentials';

describe('oauthRequirementCandidates', () => {
  it('includes unsatisfied oauth from discoveredCredentials', () => {
    const out = oauthRequirementCandidates(
      [
        {
          type: 'oauth',
          provider: 'google',
          vaultKey: 'google',
          satisfied: false,
        },
      ],
      []
    );
    expect(out).toHaveLength(1);
    expect((out[0] as any).vaultKey).toBe('google');
  });

  it('ignores satisfied oauth in discovery', () => {
    const out = oauthRequirementCandidates(
      [{ type: 'oauth', vaultKey: 'google', satisfied: true }],
      []
    );
    expect(out).toHaveLength(0);
  });

  it('adds Google from required_missing status when discovery omits oauth row', () => {
    const out = oauthRequirementCandidates(
      [],
      [{ nodeId: 'n1', credentialId: 'google', status: 'required_missing', displayName: 'Gmail' }]
    );
    expect(out).toHaveLength(1);
    expect((out[0] as any).type).toBe('oauth');
    expect((out[0] as any).credentialId).toBe('google');
  });

  it('dedupes google from both discovery and status', () => {
    const out = oauthRequirementCandidates(
      [{ type: 'oauth', vaultKey: 'google', satisfied: false }],
      [{ nodeId: 'n1', credentialId: 'google', status: 'required_missing' }]
    );
    expect(out).toHaveLength(1);
  });
});

describe('filterStillBlockingOAuth', () => {
  const googleRow = { type: 'oauth', vaultKey: 'google', credentialId: 'google' };

  it('clears google when live token connected', () => {
    const blocking = filterStillBlockingOAuth([googleRow], [], true);
    expect(blocking).toHaveLength(0);
  });

  it('clears when credentialStatuses shows resolved_connected', () => {
    const blocking = filterStillBlockingOAuth(
      [googleRow],
      [{ nodeId: 'n1', credentialId: 'google', status: 'resolved_connected' }],
      false
    );
    expect(blocking).toHaveLength(0);
  });

  it('blocks when no token and no resolved status', () => {
    const blocking = filterStillBlockingOAuth([googleRow], [], false);
    expect(blocking).toHaveLength(1);
  });
});

describe('oauthRowNeedsGoogleConnect', () => {
  it('detects google vault key', () => {
    expect(oauthRowNeedsGoogleConnect({ vaultKey: 'google' })).toBe(true);
  });
  it('detects gmail alias', () => {
    expect(oauthRowNeedsGoogleConnect({ credentialId: 'gmail' })).toBe(true);
  });
});
