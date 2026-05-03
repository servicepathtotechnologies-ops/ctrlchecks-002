import { useState, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { startOAuth, reconnectOAuth } from '@/lib/api/connections';

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

      const poll = setInterval(() => {
        try {
          if (popup.closed) {
            clearInterval(poll);
            resolve();
          }
        } catch {
          // cross-origin: ignore
        }
      }, 500);

      // Listen for postMessage from callback page
      const onMessage = (event: MessageEvent) => {
        if (event.data?.type === 'oauth-success') {
          clearInterval(poll);
          window.removeEventListener('message', onMessage);
          popup.close();
          resolve();
        } else if (event.data?.type === 'oauth-error') {
          clearInterval(poll);
          window.removeEventListener('message', onMessage);
          popup.close();
          reject(new Error(event.data.message || 'OAuth failed'));
        }
      };
      window.addEventListener('message', onMessage);
    });
  }, []);

  const connect = useCallback(
    async (credentialTypeId: string, opts?: { connectionId?: string; scopes?: string[]; returnTo?: string }) => {
      setStatus('opening');
      setError(null);
      try {
        const { authorizationUrl } = await startOAuth(credentialTypeId, opts);
        setStatus('waiting');
        await openOAuthPopup(authorizationUrl);
        setStatus('success');
        qc.invalidateQueries({ queryKey: ['connections'] });
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
        const { authorizationUrl } = await reconnectOAuth(connectionId);
        setStatus('waiting');
        await openOAuthPopup(authorizationUrl);
        setStatus('success');
        qc.invalidateQueries({ queryKey: ['connections'] });
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
