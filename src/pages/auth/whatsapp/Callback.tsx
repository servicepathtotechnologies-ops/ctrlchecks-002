import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/aws/client';
import { useToast } from '@/hooks/use-toast';
import { getBackendUrl } from '@/lib/api/getBackendUrl';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resolveOAuthReturnTo } from '@/lib/oauth-return';

export default function WhatsAppAuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Processing WhatsApp authentication...');
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

        if (errorParam) {
          throw new Error(`WhatsApp OAuth cancelled or denied: ${errorParam}`);
        }
        if (!code) {
          throw new Error('No authorization code received');
        }

        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session) {
          throw new Error('Not authenticated. Please sign in first.');
        }

        // Retrieve phone_number_id / business_account_id stored before redirect
        const phoneNumberId = sessionStorage.getItem('wa_phone_number_id') ?? undefined;
        const businessAccountId = sessionStorage.getItem('wa_business_account_id') ?? undefined;

        setStatus('Exchanging code for access token...');

        const backendUrl = getBackendUrl();
        const redirectUri = `${window.location.origin}/auth/whatsapp/callback`;

        const response = await fetch(`${backendUrl}/api/oauth/whatsapp/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            code,
            redirect_uri: redirectUri,
            phone_number_id: phoneNumberId,
            business_account_id: businessAccountId,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP ${response.status}`);
        }

        const tokenData = await response.json();
        if (!tokenData.access_token) {
          throw new Error('No access token received');
        }

        setStatus('Saving WhatsApp connection...');

        const { error: dbError } = await supabase
          .from('whatsapp_oauth_tokens' as any)
          .upsert({
            user_id: session.user.id,
            access_token: tokenData.access_token,
            expires_at: tokenData.expires_at ?? null,
            scope: tokenData.scope ?? null,
            phone_number_id: tokenData.phone_number_id ?? null,
            business_account_id: tokenData.business_account_id ?? null,
            phone_number: tokenData.phone_number ?? null,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'user_id' });

        if (dbError) throw dbError;

        // Mirror to user_credentials vault
        await supabase
          .from('user_credentials' as any)
          .upsert({
            user_id: session.user.id,
            service: 'whatsapp',
            credentials: {
              accessToken: tokenData.access_token,
              expiresAt: tokenData.expires_at,
              phoneNumberId: tokenData.phone_number_id,
              businessAccountId: tokenData.business_account_id,
              phoneNumber: tokenData.phone_number,
            },
          }, { onConflict: 'user_id,service' });

        // Clean up sessionStorage
        sessionStorage.removeItem('wa_phone_number_id');
        sessionStorage.removeItem('wa_business_account_id');

        toast({
          title: 'WhatsApp Connected',
          description: tokenData.phone_number
            ? `Connected: ${tokenData.phone_number}`
            : 'WhatsApp Business account connected successfully',
        });

        navigate(returnTo);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to connect WhatsApp';
        setError(msg);
        toast({ title: 'Connection Failed', description: msg, variant: 'destructive' });
        setTimeout(() => navigate(returnTo), 4000);
      }
    };

    processCallback();
  }, [navigate, toast, searchParams]);

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-destructive font-semibold text-lg">WhatsApp Connection Failed</div>
        <p className="text-muted-foreground max-w-md">{error}</p>
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
