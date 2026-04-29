import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/aws/client';
import { useToast } from '@/hooks/use-toast';
import { getBackendUrl } from '@/lib/api/getBackendUrl';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resolveOAuthReturnTo } from '@/lib/oauth-return';

export default function InstagramAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Processing Instagram authentication...');
  const [error, setError] = useState<string | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    const returnTo = resolveOAuthReturnTo(searchParams, '/profile');

    const processCallback = async () => {
      try {
        processedRef.current = true;

        const code = searchParams.get('code');
        const errorParam = searchParams.get('error');
        const errorReason = searchParams.get('error_reason');

        if (errorParam) {
          if (errorReason === 'user_denied') {
            throw new Error('You cancelled the Instagram connection. You can try again anytime.');
          }
          throw new Error(`Instagram OAuth error: ${errorParam}`);
        }
        if (!code) {
          throw new Error('No authorization code received from Instagram');
        }

        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session) {
          throw new Error('Not authenticated. Please sign in first.');
        }

        setStatus('Exchanging code for access token...');

        const backendUrl = getBackendUrl();
        const redirectUri = `${window.location.origin}/auth/instagram/callback`;

        const response = await fetch(`${backendUrl}/api/oauth/instagram/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ code, redirect_uri: redirectUri }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP ${response.status}`);
        }

        const tokenData = await response.json();
        if (!tokenData.access_token) {
          throw new Error('No access token received from Instagram');
        }

        if (!tokenData.ig_user_id) {
          // ig_user_id couldn't be resolved from Facebook Pages at connect time.
          // This is OK — it will be auto-resolved at workflow execution time
          // via getInstagramBusinessAccountId() in the token manager.
          // Common reason: Instagram account not linked to a Facebook Page,
          // or pages_show_list permission not granted.
          console.warn('[InstagramCallback] ig_user_id not resolved at connect time — will auto-resolve at execution');
        }

        setStatus('Saving Instagram connection...');

        // Delete existing row first, then insert fresh (avoids upsert RLS issues)
        await supabase
          .from('instagram_oauth_tokens' as any)
          .delete()
          .eq('user_id', session.user.id);

        const { error: dbError } = await supabase
          .from('instagram_oauth_tokens' as any)
          .insert({
            user_id: session.user.id,
            access_token: tokenData.access_token,
            expires_at: tokenData.expires_at ?? null,
            scope: tokenData.scope ?? null,
            ig_user_id: tokenData.ig_user_id ?? null,
            username: tokenData.username ?? null,
            name: tokenData.name ?? null,
            profile_picture_url: tokenData.profile_picture_url ?? null,
          });

        if (dbError) {
          console.error('[InstagramCallback] DB error:', dbError);
          throw new Error(`Failed to save token: ${dbError.message}`);
        }

        // Mirror to user_credentials vault for node executor fallback (non-critical)
        try {
          await supabase
            .from('user_credentials' as any)
            .delete()
            .eq('user_id', session.user.id)
            .eq('service', 'instagram');

          await supabase
            .from('user_credentials' as any)
            .insert({
              user_id: session.user.id,
              service: 'instagram',
              credentials: {
                accessToken: tokenData.access_token,
                expiresAt: tokenData.expires_at,
                igUserId: tokenData.ig_user_id,
                username: tokenData.username,
                name: tokenData.name,
              },
            });
        } catch { /* non-fatal — primary token is already saved */ }

        const displayName = tokenData.username
          ? `@${tokenData.username}`
          : tokenData.name ?? 'your account';

        toast({
          title: 'Instagram Connected',
          description: `Connected as ${displayName}`,
        });

        navigate(returnTo);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to connect Instagram';
        setError(msg);
        toast({ title: 'Connection Failed', description: msg, variant: 'destructive' });
        setTimeout(() => navigate(returnTo), 5000);
      }
    };

    processCallback();
  }, [navigate, toast, searchParams]);

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-destructive font-semibold text-lg">Instagram Connection Failed</div>
        <p className="text-muted-foreground max-w-md">{error}</p>
        <p className="text-xs text-muted-foreground">Redirecting back in 5 seconds...</p>
        <Button onClick={() => navigate(returnTo)} variant="outline">
          Back to Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">{status}</p>
    </div>
  );
}
