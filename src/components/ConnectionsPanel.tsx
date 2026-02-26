import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CheckCircle, AlertCircle, Plug, RefreshCw } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ZohoConnectionStatus from './ZohoConnectionStatus';

export default function ConnectionsPanel() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [googleConnected, setGoogleConnected] = useState(false);
  const [linkedInConnected, setLinkedInConnected] = useState(false);
  const [githubConnected, setGithubConnected] = useState(false);
  const [facebookConnected, setFacebookConnected] = useState(false);
  const [notionConnected, setNotionConnected] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);
  const [zohoConnected, setZohoConnected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isGoogleConnecting, setIsGoogleConnecting] = useState(false);
  const [isLinkedInConnecting, setIsLinkedInConnecting] = useState(false);
  const [isGithubConnecting, setIsGithubConnecting] = useState(false);
  const [isFacebookConnecting, setIsFacebookConnecting] = useState(false);
  const [isNotionConnecting, setIsNotionConnecting] = useState(false);
  const [isTwitterConnecting, setIsTwitterConnecting] = useState(false);
  const [isZohoConnecting, setIsZohoConnecting] = useState(false);

  const checkConnections = useCallback(async () => {
    if (!user) {
      setIsChecking(false);
      return;
    }

    try {
      // Check Google connection
      const { data: googleData } = await supabase
        .from('google_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .single();

      if (googleData) {
        const expiresAt = googleData.expires_at ? new Date(googleData.expires_at) : null;
        const now = new Date();
        setGoogleConnected(expiresAt ? expiresAt > now : true);
      } else {
        setGoogleConnected(false);
      }

      // Check LinkedIn connection
      const { data: linkedInData, error: linkedInError } = await supabase
        .from('linkedin_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .maybeSingle(); // Use maybeSingle() to handle empty results gracefully

      // Handle 406 errors gracefully (RLS blocking when no tokens exist)
      if (linkedInError && linkedInError.code !== 'PGRST116' && !linkedInError.message?.includes('406')) {
        console.error('Error checking LinkedIn connection:', linkedInError);
        setLinkedInConnected(false);
      } else if (linkedInData) {
        const expiresAt = linkedInData.expires_at ? new Date(linkedInData.expires_at) : null;
        const now = new Date();
        setLinkedInConnected(expiresAt ? expiresAt > now : true);
      } else {
        setLinkedInConnected(false);
      }

      // Check GitHub connection
      const { data: githubData, error: githubError } = await supabase
        .from('social_tokens')
        .select('id, expires_at')
        .eq('user_id', user.id)
        .eq('provider', 'github')
        .maybeSingle();

      if (githubError && githubError.code !== 'PGRST116' && !githubError.message?.includes('406')) {
        console.error('Error checking GitHub connection:', githubError);
        setGithubConnected(false);
      } else if (githubData) {
        const expiresAt = githubData.expires_at ? new Date(githubData.expires_at) : null;
        const now = new Date();
        setGithubConnected(expiresAt ? expiresAt > now : true);
      } else {
        setGithubConnected(false);
      }

      // Check Facebook connection
      const { data: facebookData, error: facebookError } = await supabase
        .from('social_tokens')
        .select('id, expires_at')
        .eq('user_id', user.id)
        .eq('provider', 'facebook')
        .maybeSingle();

      if (facebookError && facebookError.code !== 'PGRST116' && !facebookError.message?.includes('406')) {
        console.error('Error checking Facebook connection:', facebookError);
        setFacebookConnected(false);
      } else if (facebookData) {
        const expiresAt = facebookData.expires_at ? new Date(facebookData.expires_at) : null;
        const now = new Date();
        setFacebookConnected(expiresAt ? expiresAt > now : true);
      } else {
        setFacebookConnected(false);
      }

      // Check Notion connection
      const { data: notionData, error: notionError } = await supabase
        .from('notion_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .maybeSingle();

      if (notionError && notionError.code !== 'PGRST116' && !notionError.message?.includes('406')) {
        console.error('Error checking Notion connection:', notionError);
        setNotionConnected(false);
      } else if (notionData) {
        const expiresAt = notionData.expires_at ? new Date(notionData.expires_at) : null;
        const now = new Date();
        setNotionConnected(expiresAt ? expiresAt > now : true);
      } else {
        setNotionConnected(false);
      }

      // Check Twitter connection
      const { data: twitterData, error: twitterError } = await supabase
        .from('twitter_oauth_tokens' as any)
        .select('id, expires_at, username')
        .eq('user_id', user.id)
        .maybeSingle();

      if (twitterError && twitterError.code !== 'PGRST116' && !twitterError.message?.includes('406')) {
        console.error('Error checking Twitter connection:', twitterError);
        setTwitterConnected(false);
      } else if (twitterData) {
        const expiresAt = twitterData.expires_at ? new Date(twitterData.expires_at) : null;
        const now = new Date();
        setTwitterConnected(expiresAt ? expiresAt > now : true);
      } else {
        setTwitterConnected(false);
      }

      // Check Zoho connection
      const { data: zohoData, error: zohoError } = await supabase
        .from('zoho_oauth_tokens' as any)
        .select('id, expires_at, region')
        .eq('user_id', user.id)
        .maybeSingle();

      if (zohoError && zohoError.code !== 'PGRST116' && !zohoError.message?.includes('406')) {
        console.error('Error checking Zoho connection:', zohoError);
        setZohoConnected(false);
      } else if (zohoData) {
        const expiresAt = zohoData.expires_at ? new Date(zohoData.expires_at) : null;
        const now = new Date();
        setZohoConnected(expiresAt ? expiresAt > now : true);
      } else {
        setZohoConnected(false);
      }
    } catch (error) {
      console.error('Error checking connections:', error);
      setGoogleConnected(false);
      setLinkedInConnected(false);
      setGithubConnected(false);
      setFacebookConnected(false);
      setNotionConnected(false);
      setTwitterConnected(false);
      setZohoConnected(false);
    } finally {
      setIsChecking(false);
    }
  }, [user]);

  useEffect(() => {
    checkConnections();
  }, [checkConnections]);

  useEffect(() => {
    // Refresh when panel opens
    if (open) {
      checkConnections();
    }
  }, [open, checkConnections]);

  const handleGoogleConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsGoogleConnecting(true);

    try {
      const redirectUrl = `${window.location.origin}/auth/google/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/contacts email profile',
          },
        },
      });

      if (error) throw error;

      setOpen(false);
      toast({
        title: 'Redirecting to Google...',
        description: 'Please authorize access to Google services',
      });
    } catch (error) {
      console.error('Google OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate Google authentication',
        variant: 'destructive',
      });
      setIsGoogleConnecting(false);
    }
  };

  const handleGoogleDisconnect = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('google_oauth_tokens' as any)
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setGoogleConnected(false);
      toast({
        title: 'Disconnected',
        description: 'Google account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect Google account',
        variant: 'destructive',
      });
    }
  };

  const handleLinkedInConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsLinkedInConnecting(true);

    try {
      const redirectUrl = `${window.location.origin}/auth/linkedin/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        // Supabase settings: linkedin=false, linkedin_oidc=true
        provider: 'linkedin_oidc',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            // LinkedIn OIDC scopes + posting permission
            scope: 'openid profile email w_member_social',
          },
        },
      });

      if (error) throw error;

      setOpen(false);
      toast({
        title: 'Redirecting to LinkedIn...',
        description: 'Please authorize access to LinkedIn services',
      });
    } catch (error) {
      console.error('LinkedIn OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate LinkedIn authentication',
        variant: 'destructive',
      });
      setIsLinkedInConnecting(false);
    }
  };

  const handleLinkedInDisconnect = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('linkedin_oauth_tokens' as any)
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setLinkedInConnected(false);
      toast({
        title: 'Disconnected',
        description: 'LinkedIn account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect LinkedIn account',
        variant: 'destructive',
      });
    }
  };

  const handleGithubConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsGithubConnecting(true);

    try {
      const redirectUrl = `${window.location.origin}/auth/github/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: redirectUrl,
          scopes: 'repo user read:org',
        },
      });

      if (error) throw error;

      setOpen(false);
      toast({
        title: 'Redirecting to GitHub...',
        description: 'Please authorize access to GitHub services',
      });
    } catch (error) {
      console.error('GitHub OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate GitHub authentication',
        variant: 'destructive',
      });
      setIsGithubConnecting(false);
    }
  };

  const handleGithubDisconnect = async () => {
    if (!user) return;

    try {
      const authToken = (await supabase.auth.getSession()).data.session?.access_token;
      if (!authToken) {
        throw new Error('No authentication token');
      }

      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/connections/github/disconnect`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Failed to disconnect');
      }

      setGithubConnected(false);
      toast({
        title: 'Disconnected',
        description: 'GitHub account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect GitHub account',
        variant: 'destructive',
      });
    }
  };

  const handleFacebookConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsFacebookConnecting(true);

    try {
      const redirectUrl = `${window.location.origin}/auth/facebook/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: redirectUrl,
          scopes: 'email,public_profile,pages_manage_posts,pages_read_engagement',
        },
      });

      if (error) throw error;

      setOpen(false);
      toast({
        title: 'Redirecting to Facebook...',
        description: 'Please authorize access to Facebook services',
      });
    } catch (error) {
      console.error('Facebook OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate Facebook authentication',
        variant: 'destructive',
      });
      setIsFacebookConnecting(false);
    }
  };

  const handleFacebookDisconnect = async () => {
    if (!user) return;

    try {
      const authToken = (await supabase.auth.getSession()).data.session?.access_token;
      if (!authToken) {
        throw new Error('No authentication token');
      }

      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/connections/facebook/disconnect`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Failed to disconnect');
      }

      setFacebookConnected(false);
      toast({
        title: 'Disconnected',
        description: 'Facebook account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect Facebook account',
        variant: 'destructive',
      });
    }
  };

  const handleNotionConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsNotionConnecting(true);

    try {
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const redirectUrl = `${window.location.origin}/auth/notion/callback`;
      
      window.location.href = `${backendUrl}/api/oauth/notion/authorize?redirect_uri=${encodeURIComponent(redirectUrl)}`;
    } catch (error) {
      console.error('Notion OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate Notion authentication',
        variant: 'destructive',
      });
      setIsNotionConnecting(false);
    }
  };

  const handleNotionDisconnect = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('notion_oauth_tokens' as any)
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setNotionConnected(false);
      toast({
        title: 'Disconnected',
        description: 'Notion account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect Notion account',
        variant: 'destructive',
      });
    }
  };

  const handleTwitterConnect = async () => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setIsTwitterConnecting(true);

    try {
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const redirectUrl = `${window.location.origin}/auth/twitter/callback`;
      
      window.location.href = `${backendUrl}/api/oauth/twitter/authorize?redirect_uri=${encodeURIComponent(redirectUrl)}`;
    } catch (error) {
      console.error('Twitter OAuth error:', error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : 'Failed to initiate Twitter authentication',
        variant: 'destructive',
      });
      setIsTwitterConnecting(false);
    }
  };

  const handleTwitterDisconnect = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('twitter_oauth_tokens' as any)
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setTwitterConnected(false);
      toast({
        title: 'Disconnected',
        description: 'Twitter account disconnected successfully',
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: 'Failed to disconnect Twitter account',
        variant: 'destructive',
      });
    }
  };

  const totalConnected = (googleConnected ? 1 : 0) + (linkedInConnected ? 1 : 0) + (githubConnected ? 1 : 0) + (facebookConnected ? 1 : 0) + (notionConnected ? 1 : 0) + (twitterConnected ? 1 : 0) + (zohoConnected ? 1 : 0);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
        >
          <Plug className="h-4 w-4" />
          <span className="hidden sm:inline">Connections</span>
          {totalConnected > 0 && (
            <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
              {totalConnected}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Integrations</h4>
            <p className="text-sm text-muted-foreground">
              Connect your accounts to use in workflows
            </p>
          </div>

          <div className="space-y-3">
            {/* Google Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 dark:bg-red-950">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.54 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Google</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : googleConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : googleConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGoogleDisconnect}
                      disabled={isGoogleConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleGoogleConnect}
                      disabled={isGoogleConnecting}
                      className="h-8"
                    >
                      {isGoogleConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* LinkedIn Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .771 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : linkedInConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : linkedInConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLinkedInDisconnect}
                      disabled={isLinkedInConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleLinkedInConnect}
                      disabled={isLinkedInConnecting}
                      className="h-8"
                    >
                      {isLinkedInConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* GitHub Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-950">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : githubConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : githubConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGithubDisconnect}
                      disabled={isGithubConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleGithubConnect}
                      disabled={isGithubConnecting}
                      className="h-8"
                    >
                      {isGithubConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Facebook Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                  <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Facebook</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : facebookConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : facebookConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleFacebookDisconnect}
                      disabled={isFacebookConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleFacebookConnect}
                      disabled={isFacebookConnecting}
                      className="h-8"
                    >
                      {isFacebookConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Notion Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-950">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.547.56l.09-.002h10.396c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27zm15.04 1.67c-.746.606-1.025.56-2.546.56l-10.396.001c-1.521 0-1.8-.046-2.547-.56-.747-.606-.747-1.664 0-2.27.746-.606 1.025-.56 2.546-.56l10.396.001c1.521 0 1.8-.046 2.547.56.747.606.747 1.664 0 2.27zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Notion</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : notionConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : notionConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNotionDisconnect}
                      disabled={isNotionConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleNotionConnect}
                      disabled={isNotionConnecting}
                      className="h-8"
                    >
                      {isNotionConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Twitter Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1DA1F2]/10 dark:bg-[#1DA1F2]/20">
                  <svg className="h-5 w-5" fill="#1DA1F2" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Twitter/X</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : twitterConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
                ) : twitterConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleTwitterDisconnect}
                      disabled={isTwitterConnecting}
                      className="h-8"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleTwitterConnect}
                      disabled={isTwitterConnecting}
                      className="h-8"
                    >
                      {isTwitterConnecting ? (
                        <>
                          <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Zoho Connection */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E42529]/10 dark:bg-[#E42529]/20">
                  <svg className="h-5 w-5" fill="#E42529" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 0-.315.063-.441.189l-1.431 1.431-2.819 2.819-1.431 1.431c-.126.126-.272.189-.441.189s-.315-.063-.441-.189l-1.431-1.431-2.819-2.819-1.431-1.431c-.126-.126-.272-.189-.441-.189s-.315.063-.441.189l-1.431 1.431c-.126.126-.189.272-.189.441s.063.315.189.441l1.431 1.431 2.819 2.819-2.819 2.819-1.431 1.431c-.126.126-.189.272-.189.441s.063.315.189.441l1.431 1.431c.126.126.272.189.441.189s.315-.063.441-.189l1.431-1.431 2.819-2.819 1.431-1.431c.126-.126.272-.189.441-.189s.315.063.441.189l1.431 1.431 2.819 2.819 1.431 1.431c.126.126.272.189.441.189s.315-.063.441-.189l1.431-1.431c.126-.126.189-.272.189-.441s-.063-.315-.189-.441l-1.431-1.431-2.819-2.819 2.819-2.819 1.431-1.431c.126-.126.189-.272.189-.441s-.063-.315-.189-.441l-1.431-1.431c-.126-.126-.272-.189-.441-.189z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Zoho</div>
                  <div className="text-xs text-muted-foreground">
                    {isChecking ? 'Checking...' : zohoConnected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ZohoConnectionStatus
                  onConnect={() => {
                    setZohoConnected(true);
                    checkConnections();
                  }}
                  onDisconnect={() => {
                    setZohoConnected(false);
                    checkConnections();
                  }}
                  compact={false}
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
