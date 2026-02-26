import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';

interface ZohoConnectionStatusProps {
  onConnect?: () => void;
  onDisconnect?: () => void;
  compact?: boolean;
}

export default function ZohoConnectionStatus({ 
  onConnect, 
  onDisconnect,
  compact = false 
}: ZohoConnectionStatusProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [region, setRegion] = useState<string>('US');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [accountLabel, setAccountLabel] = useState<string | null>(null);

  const checkAuthStatus = useCallback(async () => {
    if (!user) {
      setIsAuthenticated(false);
      setIsCheckingAuth(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('zoho_oauth_tokens' as any)
        .select('id, expires_at, region')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        if (error.code === 'PGRST116' || error.message?.includes('406')) {
          setIsAuthenticated(false);
        } else {
          console.error('Error checking Zoho auth status:', error);
          setIsAuthenticated(false);
        }
      } else if (!data) {
        setIsAuthenticated(false);
      } else {
        const tokenData = data as unknown as { id: string; expires_at?: string | null; region?: string };
        const expiresAt = tokenData.expires_at ? new Date(tokenData.expires_at) : null;
        const now = new Date();
        setIsAuthenticated(expiresAt ? expiresAt > now : true);
        if (tokenData.region) {
          setRegion(tokenData.region);
        }
      }

      // Fetch additional metadata via backend status endpoint
      try {
        const authToken = (await supabase.auth.getSession()).data.session?.access_token;
        if (authToken) {
          const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
          const resp = await fetch(`${backendUrl}/api/connections/zoho/status`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          if (resp.ok) {
            const json = await resp.json();
            if (json.connected && json.metadata?.region) {
              setAccountLabel(`Zoho Connected (${json.metadata.region})`);
            } else if (json.connected) {
              setAccountLabel('Zoho Connected');
            } else {
              setAccountLabel(null);
            }
          }
        }
      } catch (metaErr) {
        console.warn('Zoho status metadata fetch failed (non-fatal):', metaErr);
      }
    } catch (error) {
      console.error('Error checking Zoho auth status:', error);
      setIsAuthenticated(false);
    } finally {
      setIsCheckingAuth(false);
    }
  }, [user]);

  useEffect(() => {
    checkAuthStatus();
    const interval = setInterval(checkAuthStatus, 30000);
    
    const handleFocus = () => {
      checkAuthStatus();
    };
    window.addEventListener('focus', handleFocus);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [user, checkAuthStatus]);

  const handleConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    if (!clientId || !clientSecret || !accessToken) {
      toast({
        title: 'Validation Error',
        description: 'Client ID, Client Secret, and Access Token are required',
        variant: 'destructive',
      });
      return;
    }

    setIsConnecting(true);

    try {
      const authToken = (await supabase.auth.getSession()).data.session?.access_token;
      if (!authToken) {
        throw new Error('No authentication token');
      }

      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/connections/zoho/connect`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId,
          clientSecret,
          accessToken,
          refreshToken: refreshToken || undefined,
          region: region || 'US',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Failed to connect Zoho account');
      }

      const result = await response.json();
      
      setIsDialogOpen(false);
      setIsAuthenticated(true);
      setAccountLabel(`Zoho Connected (${region})`);
      
      // Clear form
      setClientId('');
      setClientSecret('');
      setAccessToken('');
      setRefreshToken('');

      if (onConnect) {
        onConnect();
      }

      toast({
        title: 'Success',
        description: 'Zoho account connected successfully',
      });

      // Refresh status
      await checkAuthStatus();
    } catch (error) {
      console.error('Zoho connection error:', error);
      toast({
        title: 'Connection Failed',
        description: error instanceof Error ? error.message : 'Failed to connect Zoho account',
        variant: 'destructive',
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    if (!user) return;

    try {
      const authToken = (await supabase.auth.getSession()).data.session?.access_token;
      if (!authToken) {
        throw new Error('No authentication token');
      }

      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/connections/zoho`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to disconnect');
      }

      setIsAuthenticated(false);
      setAccountLabel(null);
      
      if (onDisconnect) {
        onDisconnect();
      }
      
      toast({
        title: 'Disconnected',
        description: 'Zoho account disconnected successfully',
      });

      await checkAuthStatus();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect Zoho account',
        variant: 'destructive',
      });
    }
  };

  if (isCheckingAuth && !compact) {
    return (
      <div className="flex items-center gap-2">
        <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
        ) : (
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isAuthenticated ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDisconnect}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950"
        >
          <CheckCircle className="h-4 w-4" />
          <span className="hidden sm:inline">{accountLabel || 'Zoho Connected'}</span>
        </Button>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
            >
              <AlertCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Connect Zoho</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Connect Zoho Account</DialogTitle>
              <DialogDescription>
                Enter your Zoho OAuth credentials to connect your account. You can get these from your Zoho Developer Console.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="region">Region *</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States (US)</SelectItem>
                    <SelectItem value="EU">Europe (EU)</SelectItem>
                    <SelectItem value="IN">India (IN)</SelectItem>
                    <SelectItem value="AU">Australia (AU)</SelectItem>
                    <SelectItem value="CN">China (CN)</SelectItem>
                    <SelectItem value="JP">Japan (JP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientId">Client ID *</Label>
                <Input
                  id="clientId"
                  type="text"
                  placeholder="1000.xxxxxxxxxxxxx"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  disabled={isConnecting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientSecret">Client Secret *</Label>
                <Input
                  id="clientSecret"
                  type="password"
                  placeholder="Enter your client secret"
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)}
                  disabled={isConnecting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessToken">Access Token *</Label>
                <Input
                  id="accessToken"
                  type="text"
                  placeholder="1000.xxxxxxxxxxxxx"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  disabled={isConnecting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refreshToken">Refresh Token (Optional)</Label>
                <Input
                  id="refreshToken"
                  type="text"
                  placeholder="1000.xxxxxxxxxxxxx"
                  value={refreshToken}
                  onChange={(e) => setRefreshToken(e.target.value)}
                  disabled={isConnecting}
                />
                <p className="text-xs text-muted-foreground">
                  Refresh token is recommended for automatic token renewal
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isConnecting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConnect}
                  disabled={isConnecting || !clientId || !clientSecret || !accessToken}
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    'Connect'
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
