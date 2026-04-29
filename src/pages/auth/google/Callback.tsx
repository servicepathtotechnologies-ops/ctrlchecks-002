import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
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

    const success = params.get('success') === 'true';
    const oauthError = params.get('error_description') || params.get('error');
    const email = params.get('email');

    if (oauthError) {
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

    const isConnectorCallback = params.get('mode') === 'connector' || params.has('returnTo') || params.has('return_to');
    if (!isConnectorCallback) {
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          toast({ title: 'Signed in', description: 'Welcome back.' });
          navigate('/dashboard', { replace: true });
          return;
        }

        setError('Google sign-in did not complete.');
        toast({ title: 'Google sign-in failed', description: 'Google sign-in did not complete.', variant: 'destructive' });
        setTimeout(() => navigate('/login', { replace: true }), 3000);
      });
      return;
    }

    setError('Google connection did not complete.');
    toast({ title: 'Connection failed', description: 'Google connection did not complete.', variant: 'destructive' });
    setTimeout(() => navigate(returnTo, { replace: true }), 3000);
  }, [navigate, params, returnTo, toast]);

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="font-semibold text-destructive">Connection Failed</div>
        <p className="text-muted-foreground">{error}</p>
        <Button onClick={() => navigate(returnTo, { replace: true })} variant="outline">
          Return to Workflows
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">Completing Google connection...</p>
    </div>
  );
}
