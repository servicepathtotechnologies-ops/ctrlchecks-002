import { useState, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { startOAuth, reconnectOAuth } from '@/lib/api/connections';
import { invalidateAfterConnectionChange } from '@/lib/queryInvalidation';
import { getBackendUrl } from '@/lib/api/getBackendUrl';

type OAuthStatus = 'idle' | 'opening' | 'waiting' | 'success' | 'error';

export function useOAuthFlow() {
  const qc = useQueryClient();
  const [status, setStatus] = useState<OAuthStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const openOAuthPopup = useCallback((url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const popup = window.open(url, 'oauth-connect', 'width=600,height=700,left=200,top=100');
      if (!popup) {
        reject(new Error('Popup was blocked. Please allow popups for this site.'));
        return;
      }

      let settled = false;

      const cleanup = () => {
        window.removeEventListener('message', onMessage);
        clearTimeout(timeout);
        clearInterval(closedInterval);
      };

      const finish = (callback: () => void) => {
        if (settled) return;
        settled = true;
        cleanup();
        callback();
      };

      const timeout = window.setTimeout(() => {
        finish(() => reject(new Error('OAuth window timed out. Please try connecting again.')));
      }, 5 * 60_000);

      const allowedOrigins = new Set([
        window.location.origin,
        new URL(getBackendUrl()).origin,
      ]);

      // Listen for postMessage from callback page
      const onMessage = (event: MessageEvent) => {
        if (!allowedOrigins.has(event.origin)) return;
        if (event.data?.type === 'oauth-success') {
          finish(resolve);
        } else if (event.data?.type === 'oauth-error') {
          finish(() => reject(new Error(event.data.message || 'OAuth failed')));
        }
      };
      window.addEventListener('message', onMessage);

      // Poll for the popup being closed without posting a success/error message.
      // This catches the case where the user manually closes the popup window.
      const closedInterval = window.setInterval(() => {
        try {
          if (popup.closed) {
            finish(() => reject(new Error('Connection cancelled')));
          }
        } catch {
          // Cross-Origin-Opener-Policy can block popup.closed while OAuth is on
          // the provider domain. Keep waiting for the callback postMessage.
        }
      }, 500);
    });
  }, []);

  const connect = useCallback(
    async (credentialTypeId: string, opts?: { connectionId?: string; scopes?: string[]; returnTo?: string }) => {
      setStatus('opening');
      setError(null);
      try {
        const { authorizationUrl } = await startOAuth(credentialTypeId, {
          returnTo: `${window.location.origin}/connections`,
          ...opts,
        });
        setStatus('waiting');
        await openOAuthPopup(authorizationUrl);
        setStatus('success');
        invalidateAfterConnectionChange(qc);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'OAuth connection failed';
        setError(msg);
        setStatus('error');
        throw err;
      }
    },
    [openOAuthPopup, qc],
  );

  const reconnect = useCallback(
    async (connectionId: string) => {
      setStatus('opening');
      setError(null);
      try {
        const { authorizationUrl } = await reconnectOAuth(connectionId, {
          returnTo: `${window.location.origin}/connections`,
        });
        setStatus('waiting');
        await openOAuthPopup(authorizationUrl);
        setStatus('success');
        invalidateAfterConnectionChange(qc);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Reconnect failed';
        setError(msg);
        setStatus('error');
        throw err;
      }
    },
    [openOAuthPopup, qc],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return { status, error, connect, reconnect, reset, isLoading: status === 'opening' || status === 'waiting' };
}
