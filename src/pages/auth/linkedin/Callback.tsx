import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { resolveOAuthReturnTo } from '@/lib/oauth-return';

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

export default function LinkedInAuthCallback() {
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
    const name = params.get('name');

    if (oauthError) {
      setError(oauthError);
      toast({ title: 'LinkedIn connection failed', description: oauthError, variant: 'destructive' });
      setTimeout(() => navigate(returnTo, { replace: true }), 3000);
      return;
    }

    if (success) {
      toast({
        title: 'LinkedIn connected',
        description: name ? `Connected ${name}` : 'LinkedIn account connected successfully.',
      });
      navigate(returnTo, { replace: true });
      return;
    }

    setError('LinkedIn connection did not complete.');
    toast({ title: 'Connection failed', description: 'LinkedIn connection did not complete.', variant: 'destructive' });
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
      <p className="text-muted-foreground">Completing LinkedIn connection...</p>
    </div>
  );
}
