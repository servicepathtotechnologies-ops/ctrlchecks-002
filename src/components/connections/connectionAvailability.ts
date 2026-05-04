const COMING_SOON_PROVIDERS = new Set([
  'microsoft',
  'twitter',
  'instagram',
  'dropbox',
  'stripe',
  'paypal',
  'quickbooks',
  'xero',
  'shopify',
  'woocommerce',
  'typeform',
]);

export function isComingSoonProvider(provider?: string): boolean {
  return COMING_SOON_PROVIDERS.has((provider ?? '').toLowerCase());
}
