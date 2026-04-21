import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { AppBrand } from "@/components/brand/AppBrand";
import { GoogleLogo } from "@/components/icons/GoogleLogo";
import { z } from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["user", "admin"], { required_error: "Please select a role" }),
});

const GoogleIcon = () => <GoogleLogo size="md" />;
const GitHubIcon = () => (
  <img src="/integrations-logos/Github.svg" alt="GitHub" className="h-5 w-5 object-contain" />
);
const FacebookIcon = () => (
  <img src="/integrations-logos/facebook.svg" alt="Facebook" className="h-5 w-5 object-contain" />
);

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { signUp, signInWithGoogle, signInWithGitHub, signInWithFacebook } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    const result = signUpSchema.safeParse({ fullName, email, password, role });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    const { error } = await signUp(email, password, fullName, role);
    setLoading(false);
    if (error) {
      if (error.message.includes("already registered")) {
        toast({ title: "Account exists", description: "Please sign in instead.", variant: "destructive" });
      } else {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      }
      return;
    }
    toast({ title: "Welcome!", description: "Your account has been created." });
    navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await signInWithGoogle();
      if (error) { setGoogleLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setGoogleLoading(false); toast({ title: "Error", description: "Failed to sign in with Google.", variant: "destructive" }); }
  };

  const handleGitHubSignUp = async () => {
    setGithubLoading(true);
    try {
      const { error } = await signInWithGitHub();
      if (error) { setGithubLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setGithubLoading(false); toast({ title: "Error", description: "Failed to sign in with GitHub.", variant: "destructive" }); }
  };

  const handleFacebookSignUp = async () => {
    setFacebookLoading(true);
    try {
      const { error } = await signInWithFacebook();
      if (error) { setFacebookLoading(false); toast({ title: "Error", description: error.message, variant: "destructive" }); }
    } catch { setFacebookLoading(false); toast({ title: "Error", description: "Failed to sign in with Facebook.", variant: "destructive" }); }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Sign Up */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-6"
        >
          <div className="text-center">
            <div className="flex justify-center">
              <AppBrand context="marketing" className="justify-center" />
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight">Create your account</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Join thousands of teams automating their workflows with AI
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="fullName" placeholder="John Doe" className="pl-10" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="confirmPassword" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
            </div>
            <div className="space-y-2">
              <Label>Account Type <span className="text-destructive">*</span></Label>
              <RadioGroup value={role} onValueChange={(v) => setRole(v as "user" | "admin")} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="user" id="role-user" />
                  <Label htmlFor="role-user" className="font-normal cursor-pointer flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> User
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="admin" id="role-admin" />
                  <Label htmlFor="role-admin" className="font-normal cursor-pointer flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5" /> Admin
                  </Label>
                </div>
              </RadioGroup>
              {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
            </div>
            <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>

            {/* Social sign-up — below main CTA */}
            <div className="space-y-2 pt-1">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  disabled={googleLoading || loading}
                  aria-label="Sign up with Google"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {googleLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <GoogleIcon />}
                </button>
                <button
                  type="button"
                  onClick={handleGitHubSignUp}
                  disabled={githubLoading || loading}
                  aria-label="Sign up with GitHub"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {githubLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <GitHubIcon />}
                </button>
                <button
                  type="button"
                  onClick={handleFacebookSignUp}
                  disabled={facebookLoading || loading}
                  aria-label="Sign up with Facebook"
                  className="flex flex-1 items-center justify-center rounded-lg border border-border bg-background py-2.5 transition-colors hover:bg-muted disabled:opacity-50"
                >
                  {facebookLoading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" /> : <FacebookIcon />}
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground">Or sign up with Google, GitHub or Facebook</p>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="font-semibold text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>

      {/* Right — Decorative */}
      <div className="hidden lg:flex lg:flex-1 gradient-primary items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <h2 className="text-3xl font-bold leading-tight">Build workflows that work while you sleep</h2>
          <p className="mt-4 text-white/80 leading-relaxed">Connect your tools, define your logic, and let AI handle the rest. No code required.</p>
        </div>
      </div>
    </div>
  );
}
