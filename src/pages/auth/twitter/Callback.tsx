import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/aws/client';
import { useToast } from '@/hooks/use-toast';
import { getBackendUrl } from '@/lib/api/getBackendUrl';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resolveOAuthReturnTo } from '@/lib/oauth-return';

export default function TwitterAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<string>('Processing authentication...');
  const [error, setError] = useState<string | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    const returnTo = resolveOAuthReturnTo(searchParams, '/workflows');

    const processCallback = async () => {
      try {
        processedRef.current = true;
        setStatus('Processing Twitter authentication...');

        // Get code and state from URL
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const errorParam = searchParams.get('error');

        if (errorParam) {
          throw new Error(`Twitter OAuth error: ${errorParam}`);
        }

        if (!code) {
          throw new Error('No authorization code received from Twitter');
        }

        if (!state) {
          throw new Error('No state parameter received from Twitter');
        }

        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session) {
          throw new Error('Not authenticated. Please sign in first.');
        }

        setStatus('Exchanging authorization code for access token...');

        // Exchange code for token via backend
        const backendUrl = getBackendUrl();
        const redirectUri = `${window.location.origin}/auth/twitter/callback`;
        
        const response = await fetch(`${backendUrl}/api/oauth/twitter/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            code,
            state,
            redirect_uri: redirectUri,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        const tokenData = await response.json();

        if (!tokenData.access_token) {
          throw new Error('No access token received from Twitter');
        }

        setStatus('Verifying Twitter connection...');

        toast({
          title: 'Success',
          description: `Twitter connected successfully${tokenData.username ? ` as @${tokenData.username}` : ''}!`,
        });

        navigate(returnTo);
      } catch (err) {
        console.error('Error in Twitter callback processing:', err);
        setError(err instanceof Error ? err.message : 'Failed to save Twitter connection');
        toast({
          title: 'Connection Failed',
          description: err instanceof Error ? err.message : 'Failed to save connection',
          variant: 'destructive',
        });
        setTimeout(() => navigate(returnTo), 3000);
      }
    };

    processCallback();
  }, [navigate, toast, searchParams]);

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-destructive font-semibold">Connection Failed</div>
        <p className="text-muted-foreground">{error}</p>
        <div className="bg-muted p-4 rounded text-xs font-mono text-left max-w-lg overflow-auto">
          <p>Debug Info:</p>
          <p>URL: {window.location.href}</p>
          <p>Status: {status}</p>
        </div>
        <Button onClick={() => navigate(returnTo)} variant="outline">
          Return to Workflows
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">{status}</p>
      <p className="text-xs text-muted-foreground max-w-md text-center">
        Waiting for Twitter to complete the handshake...
      </p>
    </div>
  );
}
