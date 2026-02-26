import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TwitterAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<string>('Processing authentication...');
  const [error, setError] = useState<string | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;

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
        const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
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

        setStatus('Saving Twitter connection...');

        // Save to database
        const { error: dbError } = await supabase
          .from('twitter_oauth_tokens' as any)
          .upsert({
            user_id: session.user.id,
            access_token: tokenData.access_token,
            refresh_token: tokenData.refresh_token || null,
            expires_at: tokenData.expires_at || null,
            token_type: tokenData.token_type || 'Bearer',
            scope: tokenData.scope || null,
            user_id_twitter: tokenData.user_id_twitter || null,
            username: tokenData.username || null,
            name: tokenData.name || null,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'user_id',
          });

        if (dbError) throw dbError;

        // Mirror into user_credentials vault
        const { error: vaultError } = await supabase
          .from('user_credentials' as any)
          .upsert({
            user_id: session.user.id,
            service: 'twitter',
            credentials: {
              accessToken: tokenData.access_token,
              refreshToken: tokenData.refresh_token || null,
              expiresAt: tokenData.expires_at || null,
              scope: tokenData.scope,
              userIdTwitter: tokenData.user_id_twitter,
              username: tokenData.username,
              name: tokenData.name,
            },
          }, {
            onConflict: 'user_id,service',
          });

        if (vaultError) {
          console.warn('Failed to save to user_credentials vault (non-fatal):', vaultError);
        }

        toast({
          title: 'Success',
          description: `Twitter connected successfully${tokenData.username ? ` as @${tokenData.username}` : ''}!`,
        });

        navigate('/workflows');
      } catch (err) {
        console.error('Error in Twitter callback processing:', err);
        setError(err instanceof Error ? err.message : 'Failed to save Twitter connection');
        toast({
          title: 'Connection Failed',
          description: err instanceof Error ? err.message : 'Failed to save connection',
          variant: 'destructive',
        });
        setTimeout(() => navigate('/workflows'), 3000);
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
        <Button onClick={() => navigate('/workflows')} variant="outline">
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
