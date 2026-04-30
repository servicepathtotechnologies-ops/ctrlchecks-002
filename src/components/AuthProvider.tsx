import { useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/aws/client";
import { AuthContext, AuthUser, AuthSession } from "@/lib/auth-context";

function mergeSession(prev: AuthSession | null, next: AuthSession | null): AuthSession | null {
  if (!next) return null;
  if (prev && prev.access_token === next.access_token) return prev;
  return next;
}

function mergeUser(prev: AuthUser | null, next: AuthUser | null): AuthUser | null {
  if (!next) return null;
  if (prev && prev.id === next.id) {
    return {
      ...prev,
      ...next,
      email: next.email || prev.email,
      user_metadata: {
        ...(prev.user_metadata || {}),
        ...(next.user_metadata || {}),
      },
    };
  }
  return next;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: string, nextSession: AuthSession | null) => {
        setSession((prev) => mergeSession(prev, nextSession));
        setUser((prev) => mergeUser(prev, nextSession?.user ?? null));
        setLoading(false);
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  const syncUserRole = async (role: "user" | "admin") => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;

    const { error } = await supabase
      .from('user_roles')
      .upsert({ user_id: data.user.id, role }, { onConflict: 'user_id,role' });

    if (error) {
      console.warn('[Auth] Failed to sync user role:', error.message || error);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string, role: "user" | "admin" = "user") => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role } },
    });
    if (error) return { error: new Error(error.message) };
    window.localStorage.setItem(`ctrlchecks:signup-role:${email.toLowerCase()}`, role);
    return { error: null };
  };

  const confirmSignUp = async (email: string, code: string) => {
    const { error } = await (supabase.auth as any).confirmSignUp({ email, code });
    if (error) return { error: new Error(error.message) };
    return { error: null };
  };

  const resendSignUpCode = async (email: string) => {
    const { error } = await (supabase.auth as any).resendSignUpCode({ email });
    if (error) return { error: new Error(error.message) };
    return { error: null };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: new Error(error.message) };
    if (!data.user) return { error: new Error("Sign-in failed — no user returned") };

    const pendingRoleKey = `ctrlchecks:signup-role:${email.toLowerCase()}`;
    const pendingRole = window.localStorage.getItem(pendingRoleKey);
    if (pendingRole === 'admin' || pendingRole === 'user') {
      await syncUserRole(pendingRole);
      window.localStorage.removeItem(pendingRoleKey);
    }

    return { error: null };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/google/callback` },
    });
    return { error: error ? new Error(error.message) : null };
  };

  const signInWithGitHub = async () => {
    // GitHub does not support OIDC — Cognito cannot federate it directly.
    // The worker handles the full OAuth exchange and creates/finds the Cognito user.
    const apiUrl   = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const returnTo = encodeURIComponent(window.location.origin + '/dashboard');
    window.location.href = `${apiUrl}/api/oauth/github/start-login?redirect_to=${returnTo}`;
    return { error: null };
  };

  const signInWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: { redirectTo: `${window.location.origin}/auth/facebook/callback` },
    });
    return { error: error ? new Error(error.message) : null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signUp, confirmSignUp, resendSignUpCode, signIn, signInWithGoogle, signInWithGitHub, signInWithFacebook, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
