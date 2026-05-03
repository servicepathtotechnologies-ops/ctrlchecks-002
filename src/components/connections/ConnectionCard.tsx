import { useState } from 'react';
import { MoreHorizontal, RefreshCw, Trash2, Pencil, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ConnectionStatusBadge } from './ConnectionStatusBadge';
import { useTestConnection, useDeleteConnection } from '@/hooks/useConnections';
import { useOAuthFlow } from '@/hooks/useOAuthFlow';
import { useCredentialType } from '@/hooks/useCredentialTypes';
import { useToast } from '@/hooks/use-toast';
import type { ConnectionRecord } from '@/lib/api/connections';
import { ProviderLogo } from './ProviderLogo';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  connection: ConnectionRecord;
  onEdit?: (connection: ConnectionRecord) => void;
}

export function ConnectionCard({ connection, onEdit }: Props) {
  const { toast } = useToast();
  const credType = useCredentialType(connection.credentialTypeId);
  const testMut = useTestConnection();
  const deleteMut = useDeleteConnection();
  const oauthFlow = useOAuthFlow();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const lastUsed = connection.lastUsedAt
    ? formatDistanceToNow(new Date(connection.lastUsedAt), { addSuffix: true })
    : null;

  async function handleTest() {
    try {
      const result = await testMut.mutateAsync(connection.id);
      toast({
        title: result.ok ? 'Connection OK' : 'Connection failed',
        description: result.message,
        variant: result.ok ? 'default' : 'destructive',
      });
    } catch {
      toast({ title: 'Test failed', variant: 'destructive' });
    }
  }

  async function handleReconnect() {
    try {
      await oauthFlow.reconnect(connection.id);
      toast({ title: 'Reconnected successfully' });
    } catch {
      toast({ title: 'Reconnect failed', description: oauthFlow.error ?? undefined, variant: 'destructive' });
    }
  }

  async function handleDelete() {
    try {
      await deleteMut.mutateAsync(connection.id);
      toast({ title: 'Connection deleted' });
    } catch {
      toast({ title: 'Delete failed', variant: 'destructive' });
    }
    setConfirmDelete(false);
  }

  const isOAuth = connection.authType === 'oauth2';
  const isBusy = testMut.isPending || deleteMut.isPending || oauthFlow.isLoading;

  return (
    <>
      <Card className="group hover:shadow-md transition-shadow">
        <CardContent className="flex items-center gap-4 p-4">
          <ProviderLogo provider={connection.provider} size={40} />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm truncate">{connection.name}</span>
              <ConnectionStatusBadge status={connection.status} />
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {credType?.displayName ?? connection.credentialTypeId}
              {lastUsed && <span className="ml-2 opacity-60">· used {lastUsed}</span>}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {connection.status === 'expired' && isOAuth && (
              <Button size="sm" variant="outline" onClick={handleReconnect} disabled={isBusy}>
                {oauthFlow.isLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <RefreshCw className="h-3.5 w-3.5" />}
                <span className="ml-1.5">Reconnect</span>
              </Button>
            )}
            {connection.status === 'error' && (
              <Button size="sm" variant="outline" onClick={handleTest} disabled={isBusy}>
                {testMut.isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                <span className="ml-1.5">Test</span>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleTest} disabled={testMut.isPending}>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Test connection
                </DropdownMenuItem>
                {onEdit && (
                  <DropdownMenuItem onClick={() => onEdit(connection)}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                )}
                {isOAuth && (
                  <DropdownMenuItem onClick={handleReconnect} disabled={oauthFlow.isLoading}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reconnect
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setConfirmDelete(true)}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete connection?</AlertDialogTitle>
            <AlertDialogDescription>
              <strong>{connection.name}</strong> will be permanently deleted. Any workflows using
              this connection will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMut.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
