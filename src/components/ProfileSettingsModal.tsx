import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Linkedin, LogOut, CheckCircle2, XCircle, RefreshCw, AlertCircle, Github, Facebook } from 'lucide-react';
import { X } from 'lucide-react';

interface ProfileSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ConnectionStatus {
  connected: boolean;
  checking: boolean;
  connecting: boolean;
}

export function ProfileSettingsModal({ open, onOpenChange }: ProfileSettingsModalProps) {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    full_name: '',
    email: '',
    avatar_url: '',
  });

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

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading profile:', error);
      }
      
      if (data) {
        setProfile({
          full_name: data.full_name || user.user_metadata?.full_name || '',
          email: data.email || user.email || '',
          avatar_url: data.avatar_url || '',
        });
      } else {
        // Fallback to user metadata
        setProfile({
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || '',
          email: user.email || '',
          avatar_url: user.user_metadata?.avatar_url || '',
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
        .maybeSingle();

      setConnections((prev) => ({
        ...prev,
        google: {
          connected: googleData ? (googleData.expires_at ? new Date(googleData.expires_at) > new Date() : true) : false,
          checking: false,
          connecting: false,
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
    if (open && user) {
      loadProfile();
      checkConnections();
    }
  }, [open, user, loadProfile, checkConnections]);

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          user_id: user.id,
          email: profile.email,
          full_name: profile.full_name,
          avatar_url: profile.avatar_url,
        }, {
          onConflict: 'user_id'
        });

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

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onOpenChange(false);
    window.location.href = '/';
  };

  const userInitials = profile.full_name?.slice(0, 2).toUpperCase() ||
    profile.email?.slice(0, 2).toUpperCase() || "U";

  const ConnectionSection = ({ 
    service, 
    icon, 
    name, 
    serviceKey 
  }: { 
    service: 'google' | 'linkedin' | 'github' | 'facebook' | 'notion';
    icon: React.ReactNode;
    name: string;
    serviceKey: 'google' | 'linkedin' | 'github' | 'facebook' | 'notion';
  }) => {
    const status = connections[serviceKey];
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{name} Integration</h3>
        </div>

        {status.checking ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span className="text-sm">Checking connection...</span>
          </div>
        ) : status.connected ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-medium">{name} Connected</span>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDisconnect(serviceKey)}
              disabled={loading}
            >
              <XCircle className="mr-2 h-4 w-4" />
              Disconnect {name}
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            onClick={() => handleConnect(serviceKey)}
            disabled={loading || status.connecting}
            className="w-full"
          >
            {status.connecting ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                {icon}
                <span className="ml-2">Connect {name} Account</span>
              </>
            )}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>
            Manage your profile information and integration credentials
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* User Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={profile.avatar_url} />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{profile.full_name || user?.email?.split('@')[0] || 'User'}</h3>
                <p className="text-sm text-muted-foreground">{profile.email || user?.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  value={profile.email}
                  disabled
                  className="bg-muted"
                />
              </div>
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="avatar_url">Avatar URL</Label>
              <Input
                id="avatar_url"
                value={profile.avatar_url}
                onChange={(e) => setProfile({ ...profile, avatar_url: e.target.value })}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <Button onClick={handleSave} disabled={saving} className="w-full">
              {saving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>

          <Separator />

          {/* LinkedIn Integration */}
          <ConnectionSection
            service="linkedin"
            serviceKey="linkedin"
            name="LinkedIn"
            icon={<Linkedin className="h-5 w-5 text-[#0077b5]" />}
          />

          <Separator />

          {/* Google Integration */}
          <ConnectionSection
            service="google"
            serviceKey="google"
            name="Google"
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
          />

          <Separator />

          {/* GitHub Integration */}
          <ConnectionSection
            service="github"
            serviceKey="github"
            name="GitHub"
            icon={<Github className="h-5 w-5" />}
          />

          <Separator />

          {/* Facebook Integration */}
          <ConnectionSection
            service="facebook"
            serviceKey="facebook"
            name="Facebook"
            icon={
              <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            }
          />

          <Separator />

          {/* Notion Integration */}
          <ConnectionSection
            service="notion"
            serviceKey="notion"
            name="Notion"
            icon={
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.459 4.208c.746.606 1.026.56 2.547.56l.09-.002h10.396c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27zm15.04 1.67c-.746.606-1.025.56-2.546.56l-10.396.001c-1.521 0-1.8-.046-2.547-.56-.747-.606-.747-1.664 0-2.27.746-.606 1.025-.56 2.546-.56l10.396.001c1.521 0 1.8-.046 2.547.56.747.606.747 1.664 0 2.27zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001zm-2.546 3.39c1.521 0 1.8.046 2.546-.56.747-.606.747-1.664 0-2.27-.746-.606-1.025-.56-2.546-.56l-10.396.001c-1.521 0-1.8-.046-2.547.56-.747.606-.747 1.664 0 2.27.746.606 1.025.56 2.546.56l10.396-.001z"/>
              </svg>
            }
          />

          <Separator />

          {/* Sign Out Button */}
          <div className="flex justify-end">
            <Button
              variant="destructive"
              onClick={handleSignOut}
              disabled={loading}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
