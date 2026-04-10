import { useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/lib/auth-context";

/** Supabase Auth ban (e.g. admin suspension); blocks new sessions and refresh. */
function isAccountBanned(user: User | null | undefined): boolean {
    if (!user?.banned_until) return false;
    const t = new Date(user.banned_until).getTime();
    return !Number.isNaN(t) && t > Date.now();
}

/**
 * Avoid re-renders when Supabase emits the same logical session/user with new object references
 * (e.g. duplicate SIGNED_IN, INITIAL_SESSION + SIGNED_IN). Prevents full-app "refresh" loops.
 */
function mergeSession(prev: Session | null, next: Session | null): Session | null {
    if (!next) return null;
    if (prev && prev.access_token === next.access_token && prev.expires_at === next.expires_at) {
        return prev;
    }
    return next;
}

function mergeUser(prev: User | null, next: User | null): User | null {
    if (!next) return null;
    if (prev && prev.id === next.id) return prev;
    return next;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up auth state listener FIRST
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, nextSession) => {
                void (async () => {
                    if (import.meta.env.DEV) {
                        console.log('Auth state changed:', event, nextSession?.user?.email);
                    }

                    let effective = nextSession;
                    if (nextSession?.user && isAccountBanned(nextSession.user)) {
                        await supabase.auth.signOut();
                        effective = null;
                        toast.error('This account has been suspended. You have been signed out.');
                    }

                    setSession((prev) => mergeSession(prev, effective));
                    setUser((prev) => mergeUser(prev, effective?.user ?? null));
                    setLoading(false);
                })();
            }
        );

        // Check for existing session
        supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
            let s = currentSession;
            if (currentSession?.user && isAccountBanned(currentSession.user)) {
                await supabase.auth.signOut();
                s = null;
                toast.error('This account has been suspended. You have been signed out.');
            }
            setSession((prev) => mergeSession(prev, s));
            setUser((prev) => mergeUser(prev, s?.user ?? null));
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signUp = async (email: string, password: string, fullName?: string, role: "user" | "admin" = "user") => {
        const redirectUrl = `${window.location.origin}/`;

        // Create auth user with role in metadata
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: redirectUrl,
                data: {
                    full_name: fullName,
                    role: role, // Store role in metadata for trigger
                },
            },
        });

        if (authError) {
            return { error: authError as Error | null };
        }

        // Wait for user to be created and trigger to run
        if (authData.user) {
            // Wait for the trigger to create the profile and set initial role
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Manually set role as fallback (in case trigger doesn't work or sets wrong role)
            // This ensures role is always set correctly based on user selection
            const { error: roleError } = await supabase
                .from('user_roles')
                .upsert({
                    user_id: authData.user.id,
                    role: role,
                }, {
                    onConflict: 'user_id,role'
                });

            if (roleError) {
                console.error('Error setting user role:', roleError);
                // Try alternative: delete existing and insert new
                await supabase
                    .from('user_roles')
                    .delete()
                    .eq('user_id', authData.user.id);

                const { error: insertError } = await supabase
                    .from('user_roles')
                    .insert({ user_id: authData.user.id, role: role });

                if (insertError) {
                    console.error('Failed to set role even after retry:', insertError);
                } else {
                    console.log(`Role '${role}' set for user ${authData.user.id} (after retry)`);
                }
            } else {
                console.log(`Role '${role}' successfully set for user ${authData.user.id}`);
            }
        }

        return { error: null };
    };

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return { error: error as Error | null };
        }

        if (data.user && isAccountBanned(data.user)) {
            await supabase.auth.signOut();
            return {
                error: new Error(
                    'This account has been suspended. Contact support if you need help.'
                ),
            };
        }

        return { error: null };
    };

    const signInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/dashboard`,
                },
            });

            if (error) {
                console.error('Google OAuth error:', error);
                return { error: error as Error | null };
            }

            // OAuth redirect will happen automatically
            // The error will be null if redirect is successful
            return { error: null };
        } catch (err) {
            console.error('Google sign-in exception:', err);
            return { error: err as Error };
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                loading,
                signUp,
                signIn,
                signInWithGoogle,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
