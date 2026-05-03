import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ServicePickerGrid } from './ServicePickerGrid';
import { CredentialFormRenderer } from './CredentialFormRenderer';
import { OAuthConnectButton } from './OAuthConnectButton';
import { ProviderLogo } from './ProviderLogo';
import { useCreateConnection } from '@/hooks/useConnections';
import { useCredentialTypes } from '@/hooks/useCredentialTypes';
import { useToast } from '@/hooks/use-toast';
import type { CredentialTypeDefinition } from '@/lib/api/connections';

type Step = 'pick' | 'form';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedCredentialTypeId?: string;
}

export function NewConnectionModal({ open, onOpenChange, preselectedCredentialTypeId }: Props) {
  const { toast } = useToast();
  const { data: types = [] } = useCredentialTypes();
  const createMut = useCreateConnection();

  const [step, setStep] = useState<Step>('pick');
  const [selectedType, setSelectedType] = useState<CredentialTypeDefinition | null>(null);
  const [connectionName, setConnectionName] = useState('');

  // When types load and a preset is given, jump straight to the form step
  useEffect(() => {
    if (!open || !preselectedCredentialTypeId || types.length === 0) return;
    const found = types.find((t) => t.id === preselectedCredentialTypeId);
    if (found && step === 'pick') {
      setSelectedType(found);
      setConnectionName(`My ${found.displayName}`);
      setStep('form');
    }
  }, [open, preselectedCredentialTypeId, types, step]);

  function handleSelect(type: CredentialTypeDefinition) {
    setSelectedType(type);
    setConnectionName(`My ${type.displayName}`);
    setStep('form');
  }

  function handleBack() {
    setStep('pick');
    setSelectedType(null);
    setConnectionName('');
  }

  async function handleCredentialSubmit(credentials: Record<string, string>) {
    if (!selectedType) return;
    try {
      await createMut.mutateAsync({
        name: connectionName || `My ${selectedType.displayName}`,
        credentialTypeId: selectedType.id,
        credentials,
      });
      toast({ title: 'Connection saved', description: `${connectionName} is ready to use.` });
      onOpenChange(false);
      reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to save connection';
      toast({ title: 'Save failed', description: msg, variant: 'destructive' });
    }
  }

  function handleOAuthSuccess() {
    toast({ title: 'Connected!', description: `${selectedType?.displayName} connected successfully.` });
    onOpenChange(false);
    reset();
  }

  function reset() {
    setStep('pick');
    setSelectedType(null);
    setConnectionName('');
  }

  function handleOpenChange(val: boolean) {
    if (!val) reset();
    onOpenChange(val);
  }

  const isOAuth = selectedType?.authType === 'oauth2';
  const hasFields = (selectedType?.inputFields?.length ?? 0) > 0;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {step === 'form' && !preselectedCredentialTypeId && (
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            {selectedType && <ProviderLogo provider={selectedType.provider} size={28} />}
            <DialogTitle>
              {step === 'pick' ? 'Choose a service' : `Connect ${selectedType?.displayName ?? ''}`}
            </DialogTitle>
          </div>
        </DialogHeader>

        {step === 'pick' && <ServicePickerGrid onSelect={handleSelect} />}

        {step === 'form' && selectedType && (
          <div className="space-y-5 pt-1">
            {/* Connection name */}
            <div className="space-y-1.5">
              <Label htmlFor="conn-name">Connection Name</Label>
              <Input
                id="conn-name"
                value={connectionName}
                onChange={(e) => setConnectionName(e.target.value)}
                placeholder={`My ${selectedType.displayName}`}
              />
            </div>

            {/* OAuth flow */}
            {isOAuth && (
              <div className="space-y-3">
                {hasFields && (
                  <CredentialFormRenderer
                    credentialType={selectedType}
                    onSubmit={handleCredentialSubmit}
                    isSubmitting={createMut.isPending}
                  />
                )}
                <OAuthConnectButton
                  credentialType={selectedType}
                  onSuccess={handleOAuthSuccess}
                  className="w-full"
                />
              </div>
            )}

            {/* API key / manual flow */}
            {!isOAuth && hasFields && (
              <CredentialFormRenderer
                credentialType={selectedType}
                onSubmit={handleCredentialSubmit}
                isSubmitting={createMut.isPending}
                submitLabel={selectedType.form.submitLabel ?? 'Save & Test Connection'}
              />
            )}

            {!isOAuth && !hasFields && (
              <p className="text-sm text-muted-foreground">
                No additional configuration required for this connection type.
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
