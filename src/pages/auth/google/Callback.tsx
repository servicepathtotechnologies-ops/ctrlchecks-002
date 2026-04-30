/**
 * Google OAuth Callback
 *
 * Handles TWO separate flows that both land at /auth/google/callback:
 *
 * A. AMPLIFY LOGIN REDIRECT (Google or Facebook sign-in via Cognito Hosted UI)
 *    The URL has ?code=... (no "success" or "error" query param).
 *    Amplify exchanges the code for tokens automatically; we just wait for
 *    the Hub "signedIn" event and navigate to /dashboard.
 *
 * B. GOOGLE WORKFLOW CONNECTION (user connects Google Drive/Sheets to a workflow)
 *    The worker redirects here with ?success=true&email=...  or ?error=...
 *    We show a toast and navigate back to the return_to path.
 */

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Hub } from 'aws-amplify/utils';
import { resolveOAuthReturnTo } from '@/lib/oauth-return';
import { supabase } from '@/integrations/aws/client';

function safeReturnTo(params: URLSearchParams) {
  const raw = params.get('return_to');
  if (raw) {
    try {
      const decoded = decodeURIComponent(raw);
      if (decoded.startsWith('/') && !decoded.startsWith('//')) return decoded;
    } catch {
      if (raw.startsWith('/') && !raw.startsWith('//')) return raw;
    }
  }
  return resolveOAuthReturnTo(params, '/workflows');
}

export default function GoogleAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const handled = useRef(false);
  const params = new URLSearchParams(window.location.search);
  const returnTo = safeReturnTo(params);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const success      = params.get('success') === 'true';
    const oauthError   = params.get('error_description') || params.get('error');
    const email        = params.get('email');
    const hasCode      = params.has('code');   // Amplify OAuth callback
    const hasState     = params.has('state');  // Amplify OAuth callback

    // ── B: Workflow connection callback ────────────────────────────────────
    if (oauthError && !hasCode) {
      setError(oauthError);
      toast({ title: 'Google connection failed', description: oauthError, variant: 'destructive' });
      setTimeout(() => navigate(returnTo, { replace: true }), 3000);
      return;
    }

    if (success) {
      toast({
        title: 'Google connected',
        description: email ? `Connected ${email}` : 'Google account connected successfully.',
      });
      navigate(returnTo, { replace: true });
      return;
    }

    // ── A: Amplify OAuth login callback (code + state present) ─────────────
    if (hasCode && hasState) {
      // Amplify processes the code automatically on page load.
      // Listen for the signedIn event; fall back to polling getSession().
      let done = false;
      const TIMEOUT_MS = 15_000;

      const finish = (succeeded: boolean, message?: string) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        hubUnsubscribe();

        if (succeeded) {
          toast({ title: 'Signed in', description: 'Welcome back.' });
          navigate('/dashboard', { replace: true });
        } else {
          const msg = message || 'Sign-in did not complete. Please try again.';
          setError(msg);
          toast({ title: 'Sign-in failed', description: msg, variant: 'destructive' });
          setTimeout(() => navigate('/signin', { replace: true }), 3000);
        }
      };

      const timer = setTimeout(() => finish(false, 'Sign-in timed out.'), TIMEOUT_MS);

      const hubUnsubscribe = Hub.listen('auth', ({ payload }) => {
        if (payload.event === 'signedIn') {
          finish(true);
        } else if (
          payload.event === 'signInWithRedirect_failure' ||
          payload.event === 'tokenRefresh_failure'
        ) {
          finish(false, 'OAuth sign-in failed.');
        }
      });

      // Also check immediately — Amplify may have already stored the session
      // before this component mounted.
      supabase.auth.getSession().then(({ data }) => {
        if (data?.session) finish(true);
      }).catch(() => {});

      return;
    }

    // ── Fallback: no code, no success → unknown state ─────────────────────
    setError('Google connection did not complete.');
    toast({ title: 'Connection failed', description: 'Google connection did not complete.', variant: 'destructive' });
    setTimeout(() => navigate(returnTo, { replace: true }), 3000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="font-semibold text-destructive">Connection Failed</div>
        <p className="text-muted-foreground">{error}</p>
        <Button onClick={() => navigate('/signin', { replace: true })} variant="outline">
          Back to Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">Completing sign-in…</p>
    </div>
  );
}
