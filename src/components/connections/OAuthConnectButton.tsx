import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOAuthFlow } from '@/hooks/useOAuthFlow';
import { ProviderLogo } from './ProviderLogo';
import type { CredentialTypeDefinition } from '@/lib/api/connections';
import { useToast } from '@/hooks/use-toast';

interface Props {
  credentialType: CredentialTypeDefinition;
  onSuccess?: () => void;
  className?: string;
}

export function OAuthConnectButton({ credentialType, onSuccess, className }: Props) {
  const { toast } = useToast();
  const oauthFlow = useOAuthFlow();

  async function handleClick() {
    try {
      await oauthFlow.connect(credentialType.id);
      onSuccess?.();
    } catch {
      toast({
        title: 'Connection failed',
        description: oauthFlow.error ?? 'OAuth flow did not complete',
        variant: 'destructive',
      });
    }
  }

  return (
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={oauthFlow.isLoading}
    >
      {oauthFlow.isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin mr-2" />
      ) : (
        <ProviderLogo provider={credentialType.provider} size={18} className="mr-2 rounded" />
      )}
      {credentialType.form.oauthButtonLabel ?? `Connect ${credentialType.provider}`}
    </Button>
  );
}
