import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/lib/auth";
import { isAdmin } from "@/lib/roles";
import { useToast } from "@/hooks/use-toast";
import { AppBrand } from "@/components/brand/AppBrand";
import { GoogleLogo } from "@/components/icons/GoogleLogo";

const GoogleIcon = () => <GoogleLogo size="md" />;
const GitHubIcon = () => (
  <img src="/integrations-logos/Github.svg" alt="GitHub" className="h-5 w-5 object-contain" />
);
const FacebookIcon = () => (
  <img src="/integrations-logos/facebook.svg" alt="Facebook" className="h-5 w-5 object-contain" />
);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginAsAdmin, setLoginAsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);

  const { signIn, signInWithGoogle, signInWithGitHub, signInWithFacebook, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error: authError } = await signIn(email, password);
    if (authError) {
      setLoading(false);
      toast({ title: "Authentication Failed", description: authError.message, variant: "destructive" });
      return;
    }
    if (loginAsAdmin) {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        const userIsAdmin = await isAdmin();
        if (!userIsAdmin) {
          await signOut();
          setLoading(false);
          toast({ title: "Unauthorized", description: "You do not have admin privileges.", variant: "destructive" });
          return;
        }
        setLoading(false);
        navigate("/admin/dashboard");
        return;
      } catch {
        await signOut();
        setLoading(false);
        toast({ title: "Error", description: "Failed to verify admin role.", variant: "destructive" });
        return;
      }
    }
    setLoading(false);
    navigate("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await signInWithGoogle();
      if (error) { setGoogleLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setGoogleLoading(false); toast({ title: "Error", description: "Failed to sign in with Google.", variant: "destructive" }); }
  };

  const handleGitHubSignIn = async () => {
    setGithubLoading(true);
    try {
      const { error } = await signInWithGitHub();
      if (error) { setGithubLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setGithubLoading(false); toast({ title: "Error", description: "Failed to sign in with GitHub.", variant: "destructive" }); }
  };

  const handleFacebookSignIn = async () => {
    setFacebookLoading(true);
    try {
      const { error } = await signInWithFacebook();
      if (error) { setFacebookLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setFacebookLoading(false); toast({ title: "Error", description: "Failed to sign in with Facebook.", variant: "destructive" }); }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Decorative */}
      <div className="hidden lg:flex lg:flex-1 gradient-primary items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <h2 className="text-3xl font-bold leading-tight">Welcome Back</h2>
          <p className="mt-4 text-white/80 leading-relaxed">Pick up right where you left off. Your automations are running - sign in to manage them.</p>
        </div>
      </div>

      {/* Right — Sign In */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="flex justify-center">
              <AppBrand context="marketing" className="justify-center" />
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">Sign in to continue to your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="admin-login" checked={loginAsAdmin} onCheckedChange={(c) => setLoginAsAdmin(c === true)} />
              <Label htmlFor="admin-login" className="text-sm font-normal cursor-pointer flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" /> Login as Admin
              </Label>
            </div>
            <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Social sign-in — below main CTA */}
            <div className="space-y-2 pt-1">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading || loading}
                  aria-label="Sign in with Google"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {googleLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <GoogleIcon />}
                </button>
                <button
                  type="button"
                  onClick={handleGitHubSignIn}
                  disabled={githubLoading || loading}
                  aria-label="Sign in with GitHub"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {githubLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <GitHubIcon />}
                </button>
                <button
                  type="button"
                  onClick={handleFacebookSignIn}
                  disabled={facebookLoading || loading}
                  aria-label="Sign in with Facebook"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {facebookLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <FacebookIcon />}
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground">Or sign in with Google, GitHub or Facebook</p>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
