import { getBackendUrl } from '@/lib/api/getBackendUrl';
import { getCurrentPathWithQuery, rememberOAuthReturnTo } from '@/lib/oauth-return';

function isSafeInternalPath(path: string | undefined): path is string {
  return Boolean(path && path.startsWith('/') && !path.startsWith('//'));
}

export function buildGoogleConnectorOAuthStartUrl(
  userId: string,
  returnTo = getCurrentPathWithQuery(),
  backendUrl = getBackendUrl(),
): string {
  if (!userId) {
    throw new Error('User id is required to connect Google.');
  }

  const url = new URL('/api/oauth/google/start', backendUrl);
  url.searchParams.set('user_id', userId);
  url.searchParams.set('redirect_to', isSafeInternalPath(returnTo) ? returnTo : '/workflows');
  return url.toString();
}

export function startGoogleConnectorOAuth(userId: string, returnTo?: string): void {
  const safeReturnTo = isSafeInternalPath(returnTo) ? returnTo : getCurrentPathWithQuery();
  rememberOAuthReturnTo(safeReturnTo);
  window.location.href = buildGoogleConnectorOAuthStartUrl(userId, safeReturnTo);
}
