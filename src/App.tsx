import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { WorkflowAuthProvider } from "@/contexts/WorkflowAuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AdminRoute } from "./components/admin/AdminRoute";
import SchedulerInitializer from "./components/workflow/SchedulerInitializer";
import { ConnectionStatus } from "./components/ConnectionStatus";

const Chatbot = lazy(() => import("@/components/ui/Chatbot"));
const Index = lazy(() => import("./pages/Index"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Workflows = lazy(() => import("./pages/Workflows"));
const WorkflowBuilder = lazy(() => import("./pages/WorkflowBuilder"));
const WorkflowCreationChoice = lazy(() => import("./pages/WorkflowCreationChoice"));
const AIWorkflowBuilder = lazy(() => import("./pages/AIWorkflowBuilder"));
const Executions = lazy(() => import("./pages/Executions"));
const ExecutionDetail = lazy(() => import("./pages/ExecutionDetail"));
const Templates = lazy(() => import("./pages/Templates"));
const TemplatesManager = lazy(() => import("./pages/admin/TemplatesManager"));
const TemplateEditor = lazy(() => import("./pages/admin/TemplateEditor"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GoogleAuthCallback = lazy(() => import("./pages/auth/google/Callback"));
const LinkedInAuthCallback = lazy(() => import("./pages/auth/linkedin/Callback"));
const FacebookAuthCallback = lazy(() => import("./pages/auth/facebook/Callback"));
const GitHubAuthCallback = lazy(() => import("./pages/auth/github/Callback"));
const NotionAuthCallback = lazy(() => import("./pages/auth/notion/Callback"));
const TwitterAuthCallback = lazy(() => import("./pages/auth/twitter/Callback"));
const FormTrigger = lazy(() => import("./pages/FormTrigger"));
const ChatTrigger = lazy(() => import("./pages/ChatTrigger"));
const ModelTestingDashboard = lazy(() => import("./pages/ModelTestingDashboard"));
const ModelTestPage = lazy(() => import("./pages/ModelTestPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Profile = lazy(() => import("./pages/Profile"));

// Component to conditionally render Chatbot only on landing page
const ConditionalChatbot = () => {
  const location = useLocation();

  // Only show chatbot on the landing page (pre-login pages)
  const showChatbot = location.pathname === "/";

  if (!showChatbot) return null;

  return (
    <Suspense fallback={null}>
      <Chatbot />
    </Suspense>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <WorkflowAuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <SchedulerInitializer />
              <Suspense
                fallback={
                  <div className="flex h-screen w-full items-center justify-center text-sm text-muted-foreground">
                    Loading page...
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/workflows" element={<Workflows />} />
                  <Route path="/workflow/create" element={<WorkflowCreationChoice />} />
                  <Route path="/workflow/ai" element={<AIWorkflowBuilder />} />
                  <Route path="/workflow/:id" element={<WorkflowBuilder />} />
                  <Route path="/executions" element={<Executions />} />
                  <Route path="/execution/:id" element={<ExecutionDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/admin/dashboard"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/templates"
                    element={
                      <AdminRoute>
                        <TemplatesManager />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/template/:id/edit"
                    element={
                      <AdminRoute>
                        <TemplateEditor />
                      </AdminRoute>
                    }
                  />
                  <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
                  <Route path="/auth/linkedin/callback" element={<LinkedInAuthCallback />} />
                  <Route path="/auth/facebook/callback" element={<FacebookAuthCallback />} />
                  <Route path="/auth/github/callback" element={<GitHubAuthCallback />} />
                  <Route path="/auth/notion/callback" element={<NotionAuthCallback />} />
                  <Route path="/auth/twitter/callback" element={<TwitterAuthCallback />} />
                  <Route path="/form/:workflowId/:nodeId" element={<FormTrigger />} />
                  <Route path="/chat/:workflowId/:nodeId" element={<ChatTrigger />} />
                  <Route path="/model-testing" element={<ModelTestingDashboard />} />
                  <Route path="/model-testing/:category/:model" element={<ModelTestPage />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <ConditionalChatbot />
              <ConnectionStatus />
            </BrowserRouter>
          </TooltipProvider>
          </WorkflowAuthProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;