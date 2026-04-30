/**
 * Facebook OAuth Callback — Workflow Connection only
 *
 * This route (/auth/facebook/callback) is reached when a user connects
 * Facebook as a WORKFLOW SERVICE (e.g. post to Facebook Page).  The worker
 * redirects here with ?success=true  or  ?error=...
 *
 * Facebook SIGN-IN (primary login via Cognito Hosted UI) goes through
 * /auth/google/callback  because Amplify's redirectSignIn URL is shared
 * across all providers.  See pages/auth/google/Callback.tsx.
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

export default function FacebookAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const handled = useRef(false);
  const params = new URLSearchParams(window.location.search);
  const returnTo = safeReturnTo(params);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const success    = params.get('success') === 'true';
    const oauthError = params.get('error_description') || params.get('error');
    const name       = params.get('name');
    const hasCode    = params.has('code');
    const hasState   = params.has('state');

    // ── Workflow connection callback ───────────────────────────────────────
    if (oauthError && !hasCode) {
      setError(oauthError);
      toast({ title: 'Facebook connection failed', description: oauthError, variant: 'destructive' });
      setTimeout(() => navigate(returnTo, { replace: true }), 3000);
      return;
    }

    if (success) {
      toast({
        title: 'Facebook connected',
        description: name ? `Connected ${name}` : 'Facebook account connected successfully.',
      });
      navigate(returnTo, { replace: true });
      return;
    }

    // ── Amplify login redirect (code + state) — same handling as Google ────
    if (hasCode && hasState) {
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

      supabase.auth.getSession().then(({ data }) => {
        if (data?.session) finish(true);
      }).catch(() => {});

      return;
    }

    // ── Fallback ──────────────────────────────────────────────────────────
    setError('Facebook connection did not complete.');
    toast({ title: 'Connection failed', description: 'Facebook connection did not complete.', variant: 'destructive' });
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
      <p className="text-muted-foreground">Completing Facebook sign-in…</p>
    </div>
  );
}
