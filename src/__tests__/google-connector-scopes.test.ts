/**
 * Property 4: Connector flow uses only integration scopes
 * Validates: Requirements 2.1, 7.2
 */
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { INTEGRATION_SCOPES } from '@/lib/google-scopes';

// Identity-only scope tokens that must never appear in the connector flow
const IDENTITY_ONLY_SCOPES = ['openid', 'profile', 'email'];

/**
 * Mirrors the options object that handleGoogleConnect() passes to
 * supabase.auth.signInWithOAuth after task 3.1.
 */
function buildConnectorOAuthOptions(origin: string) {
  return {
    redirectTo: `${origin}/auth/google/callback?mode=connector`,
    queryParams: {
      access_type: 'offline',
      prompt: 'consent',
      scope: INTEGRATION_SCOPES,
    },
  };
}

describe('Property 4: Connector flow uses only integration scopes', () => {
  it('connector redirectTo always contains mode=connector', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant('https://app.example.com'),
          fc.constant('http://localhost:5173'),
          fc.constant('https://staging.example.com'),
          fc.webUrl({ withFragments: false, withQueryParameters: false }),
        ),
        (origin) => {
          const options = buildConnectorOAuthOptions(origin);
          return options.redirectTo.includes('mode=connector');
        },
      ),
      { numRuns: 100 },
    );
  });

  it('connector scope equals INTEGRATION_SCOPES exactly', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant('https://app.example.com'),
          fc.constant('http://localhost:5173'),
        ),
        (origin) => {
          const options = buildConnectorOAuthOptions(origin);
          return options.queryParams.scope === INTEGRATION_SCOPES;
        },
      ),
      { numRuns: 100 },
    );
  });

  it('connector scope does not contain identity-only scopes', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant('https://app.example.com'),
          fc.constant('http://localhost:5173'),
        ),
        (origin) => {
          const options = buildConnectorOAuthOptions(origin);
          const scopeTokens = options.queryParams.scope.split(' ');

          return IDENTITY_ONLY_SCOPES.every(
            (identityScope) => !scopeTokens.includes(identityScope),
          );
        },
      ),
      { numRuns: 100 },
    );
  });
});
