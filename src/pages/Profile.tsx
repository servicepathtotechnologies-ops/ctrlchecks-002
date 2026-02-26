import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { Loader2, Save, CheckCircle, AlertCircle, RefreshCw, ArrowLeft, User as UserIcon, Moon, Sun, LogOut } from "lucide-react";
import ConnectionsPanel from "@/components/ConnectionsPanel";
import { useTheme } from "@/hooks/useTheme";

interface ConnectionStatus {
  connected: boolean;
  checking: boolean;
  connecting: boolean;
  expiresAt?: string | null;
}

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    avatar_url: "",
  });

  // Connection states
  const [connections, setConnections] = useState<{
    google: ConnectionStatus;
    linkedin: ConnectionStatus;
    github: ConnectionStatus;
    facebook: ConnectionStatus;
    notion: ConnectionStatus;
  }>({
    google: { connected: false, checking: true, connecting: false },
    linkedin: { connected: false, checking: true, connecting: false },
    github: { connected: false, checking: true, connecting: false },
    facebook: { connected: false, checking: true, connecting: false },
    notion: { connected: false, checking: true, connecting: false },
  });

  const loadProfile = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) throw error;
      if (data) {
        setProfile({
          full_name: data.full_name || "",
          email: data.email || user.email || "",
          avatar_url: data.avatar_url || "",
        });
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const checkConnections = useCallback(async () => {
    if (!user) {
      Object.keys(connections).forEach((key) => {
        setConnections((prev) => ({
          ...prev,
          [key]: { ...prev[key as keyof typeof prev], checking: false },
        }));
      });
      return;
    }

    try {
      // Check Google connection
      const { data: googleData } = await supabase
        .from('google_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .single();

      setConnections((prev) => ({
        ...prev,
        google: {
          connected: googleData ? (googleData.expires_at ? new Date(googleData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
          expiresAt: googleData?.expires_at || null,
        },
      }));

      // Check LinkedIn connection
      const { data: linkedInData, error: linkedInError } = await supabase
        .from('linkedin_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .maybeSingle();

      if (linkedInError && linkedInError.code !== 'PGRST116' && !linkedInError.message?.includes('406')) {
        console.error('Error checking LinkedIn connection:', linkedInError);
      }

      setConnections((prev) => ({
        ...prev,
        linkedin: {
          connected: linkedInData ? (linkedInData.expires_at ? new Date(linkedInData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
          expiresAt: linkedInData?.expires_at || null,
        },
      }));

      // Check GitHub connection
      const { data: githubData, error: githubError } = await supabase
        .from('social_tokens')
        .select('id, expires_at')
        .eq('user_id', user.id)
        .eq('provider', 'github')
        .maybeSingle();

      if (githubError && githubError.code !== 'PGRST116' && !githubError.message?.includes('406')) {
        console.error('Error checking GitHub connection:', githubError);
      }

      setConnections((prev) => ({
        ...prev,
        github: {
          connected: githubData ? (githubData.expires_at ? new Date(githubData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
          expiresAt: githubData?.expires_at || null,
        },
      }));

      // Check Facebook connection
      const { data: facebookData, error: facebookError } = await supabase
        .from('social_tokens')
        .select('id, expires_at')
        .eq('user_id', user.id)
        .eq('provider', 'facebook')
        .maybeSingle();

      if (facebookError && facebookError.code !== 'PGRST116' && !facebookError.message?.includes('406')) {
        console.error('Error checking Facebook connection:', facebookError);
      }

      setConnections((prev) => ({
        ...prev,
        facebook: {
          connected: facebookData ? (facebookData.expires_at ? new Date(facebookData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
          expiresAt: facebookData?.expires_at || null,
        },
      }));

      // Check Notion connection
      const { data: notionData, error: notionError } = await supabase
        .from('notion_oauth_tokens' as any)
        .select('id, expires_at')
        .eq('user_id', user.id)
        .maybeSingle();

      if (notionError && notionError.code !== 'PGRST116' && !notionError.message?.includes('406')) {
        console.error('Error checking Notion connection:', notionError);
      }

      setConnections((prev) => ({
        ...prev,
        notion: {
          connected: notionData ? (notionData.expires_at ? new Date(notionData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
          expiresAt: notionData?.expires_at || null,
        },
      }));
    } catch (error) {
      console.error('Error checking connections:', error);
      Object.keys(connections).forEach((key) => {
        setConnections((prev) => ({
          ...prev,
          [key]: { ...prev[key as keyof typeof prev], connected: false, checking: false },
        }));
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      loadProfile();
      checkConnections();
    }
  }, [user, loadProfile, checkConnections]);

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: profile.full_name,
          avatar_url: profile.avatar_url,
        })
        .eq("user_id", user.id);

      if (error) throw error;
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Error saving profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleConnect = async (service: 'google' | 'linkedin' | 'github' | 'facebook' | 'notion') => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in first',
        variant: 'destructive',
      });
      return;
    }

    setConnections((prev) => ({
      ...prev,
      [service]: { ...prev[service], connecting: true },
    }));

    try {
      if (service === 'google') {
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
      } else if (service === 'linkedin') {
        const redirectUrl = `${window.location.origin}/auth/linkedin/callback`;
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'linkedin_oidc',
          options: {
            redirectTo: redirectUrl,
            queryParams: {
              scope: 'openid profile email w_member_social',
            },
          },
        });
        if (error) throw error;
      } else if (service === 'github') {
        const redirectUrl = `${window.location.origin}/auth/github/callback`;
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            redirectTo: redirectUrl,
            scopes: 'repo user read:org',
          },
        });
        if (error) throw error;
      } else if (service === 'facebook') {
        const redirectUrl = `${window.location.origin}/auth/facebook/callback`;
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'facebook',
          options: {
            redirectTo: redirectUrl,
            scopes: 'email,public_profile,pages_manage_posts,pages_read_engagement',
          },
        });
        if (error) throw error;
      } else if (service === 'notion') {
        const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        const redirectUrl = `${window.location.origin}/auth/notion/callback`;
        window.location.href = `${backendUrl}/api/oauth/notion/authorize?redirect_uri=${encodeURIComponent(redirectUrl)}`;
        return;
      }

      toast({
        title: 'Redirecting...',
        description: `Please authorize access to ${service}`,
      });
    } catch (error) {
      console.error(`${service} OAuth error:`, error);
      toast({
        title: 'Authentication Failed',
        description: error instanceof Error ? error.message : `Failed to initiate ${service} authentication`,
        variant: 'destructive',
      });
      setConnections((prev) => ({
        ...prev,
        [service]: { ...prev[service], connecting: false },
      }));
    }
  };

  const handleDisconnect = async (service: 'google' | 'linkedin' | 'github' | 'facebook' | 'notion') => {
    if (!user) return;

    try {
      if (service === 'google' || service === 'linkedin' || service === 'notion') {
        const tableName = service === 'google' ? 'google_oauth_tokens' : 
                         service === 'linkedin' ? 'linkedin_oauth_tokens' : 
                         'notion_oauth_tokens';
        const { error } = await supabase
          .from(tableName as any)
          .delete()
          .eq('user_id', user.id);
        if (error) throw error;
      } else if (service === 'github' || service === 'facebook') {
        const authToken = (await supabase.auth.getSession()).data.session?.access_token;
        if (!authToken) {
          throw new Error('No authentication token');
        }
        const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        const response = await fetch(`${backendUrl}/api/connections/${service}/disconnect`, {
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
      }

      setConnections((prev) => ({
        ...prev,
        [service]: { ...prev[service], connected: false },
      }));

      toast({
        title: 'Disconnected',
        description: `${service} account disconnected successfully`,
      });
      checkConnections();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: 'Error',
        description: `Failed to disconnect ${service} account`,
        variant: 'destructive',
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out",
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const userInitials = profile.full_name?.slice(0, 2).toUpperCase() ||
    profile.email?.slice(0, 2).toUpperCase() || "U";

  const totalConnected = Object.values(connections).filter(c => c.connected).length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  const ConnectionCard = ({ 
    service, 
    icon, 
    name, 
    bgColor 
  }: { 
    service: 'google' | 'linkedin' | 'github' | 'facebook' | 'notion';
    icon: React.ReactNode;
    name: string;
    bgColor: string;
  }) => {
    const status = connections[service];
    return (
      <div className="flex items-center justify-between rounded-lg border p-2.5">
        <div className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${bgColor}`}>
            {icon}
          </div>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">
              {status.checking ? 'Checking...' : status.connected ? 'Connected' : 'Not connected'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {status.checking ? (
            <RefreshCw className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
          ) : status.connected ? (
            <>
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDisconnect(service)}
                disabled={status.connecting}
                className="h-7 text-xs px-2"
              >
                Disconnect
              </Button>
            </>
          ) : (
            <>
              <AlertCircle className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
              <Button
                variant="default"
                size="sm"
                onClick={() => handleConnect(service)}
                disabled={status.connecting}
                className="h-7 text-xs px-2"
              >
                {status.connecting ? (
                  <>
                    <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
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
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
              className="rounded-full h-8 w-8"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex h-7 w-7 items-center justify-center">
              <img src="/favicon.ico" alt="logo" className="h-full w-full" />
            </div>
            <span className="text-lg font-bold">CtrlChecks</span>
          </div>
          <div className="flex items-center gap-2">
            <ConnectionsPanel />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-8 w-8"
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="space-y-4">
          {/* Page Header */}
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              Profile & Connections
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your profile information and connected accounts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Profile Details Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Profile Details</CardTitle>
                <CardDescription className="text-xs">Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={profile.avatar_url} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium">Profile Picture</p>
                    <p className="text-xs text-muted-foreground">
                      Update your avatar URL below
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="full_name" className="text-xs">Full Name</Label>
                    <Input
                      id="full_name"
                      value={profile.full_name}
                      onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                      placeholder="Enter your full name"
                      className="h-8 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs">Email</Label>
                    <Input
                      id="email"
                      value={profile.email}
                      disabled
                      className="bg-muted h-8 text-sm"
                    />
                    <p className="text-xs text-muted-foreground">
                      Email cannot be changed
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="avatar_url" className="text-xs">Avatar URL</Label>
                    <Input
                      id="avatar_url"
                      value={profile.avatar_url}
                      onChange={(e) => setProfile({ ...profile, avatar_url: e.target.value })}
                      placeholder="https://example.com/avatar.jpg"
                      className="h-8 text-sm"
                    />
                  </div>
                </div>

                <Button onClick={handleSave} disabled={saving} className="w-full h-8 text-sm">
                  {saving ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-3 w-3" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Connections Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Connections</span>
                  {totalConnected > 0 && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {totalConnected} Connected
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-xs">
                  Connect your accounts to use in workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ConnectionCard
                  service="google"
                  name="Google"
                  bgColor="bg-red-50 dark:bg-red-950"
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
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
                  }
                />

                <ConnectionCard
                  service="linkedin"
                  name="LinkedIn"
                  bgColor="bg-blue-50 dark:bg-blue-950"
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .771 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                />

                <ConnectionCard
                  service="github"
                  name="GitHub"
                  bgColor="bg-gray-50 dark:bg-gray-950"
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                />

                <ConnectionCard
                  service="facebook"
                  name="Facebook"
                  bgColor="bg-blue-50 dark:bg-blue-950"
                  icon={
                    <svg className="h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  }
                />

                <ConnectionCard
                  service="notion"
                  name="Notion"
                  bgColor="bg-gray-50 dark:bg-gray-950"
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.459 4.208c.746.606 1.026.56 2.547.56l.09-.002h10.396c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27zm15.04 1.67c-.746.606-1.025.56-2.546.56l-10.396.001c-1.521 0-1.8-.046-2.547-.56-.747-.606-.747-1.664 0-2.27.746-.606 1.025-.56 2.546-.56l10.396.001c1.521 0 1.8-.046 2.547.56.747.606.747 1.664 0 2.27zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001z"/>
                    </svg>
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Sign Out Section */}
          <Card className="border-destructive/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-destructive">Account</CardTitle>
              <CardDescription className="text-xs">Sign out of your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="destructive"
                onClick={handleSignOut}
                disabled={loading || saving}
                className="w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
