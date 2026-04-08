/**
 * Supabase GoTrue Facebook provider (server) always prepends scope "email" and splits
 * the `scopes` query param on **commas only** — not spaces. A string like "email public_profile"
 * becomes a single invalid permission. Use comma-separated values, and omit "email" here to avoid
 * duplicates (see github.com/supabase/auth internal/provider/facebook.go).
 *
 * Login for Business: Meta often requires at least one extra supported permission in the
 * configuration *and* in the OAuth scope — set VITE_META_FACEBOOK_EXTRA_SCOPES e.g. pages_show_list
 */
export function getFacebookOAuthScopeString(): string {
  const extra = import.meta.env.VITE_META_FACEBOOK_EXTRA_SCOPES?.trim() ?? '';
  const base = 'public_profile';
  return extra ? `${base},${extra}` : base;
}

/**
 * Meta "Facebook Login for Business" often requires `config_id` on the authorize URL.
 * Set VITE_META_FACEBOOK_CONFIG_ID from: Meta Developer → Facebook Login for Business → Configurations.
 * Supabase Auth forwards unknown query params to Facebook (see GetExternalProviderRedirectURL).
 */
export function getFacebookSupabaseOAuthOptions(redirectUrl: string) {
  const raw = import.meta.env.VITE_META_FACEBOOK_CONFIG_ID;
  const configId = typeof raw === 'string' ? raw.trim() : '';

  return {
    redirectTo: redirectUrl,
    scopes: getFacebookOAuthScopeString(),
    ...(configId ? { queryParams: { config_id: configId } } : {}),
  };
}
