import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Workflow, Zap, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";

const valuePillars = [
  { label: "Intent → production", sub: "One prompt, full graphs" },
  { label: "Self-host + cloud", sub: "Your infra, your rules" },
  { label: "Local + cloud LLMs", sub: "Private inference (e.g. Ollama)" },
  { label: "Fault-tolerant engine", sub: "Built for real workloads" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-glow blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Beta
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              CtrlChecks AI-OS
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-sm font-medium tracking-wide text-primary sm:text-base"
          >
            Intent · Intelligence · Execution
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            The autonomous{" "}
            <span className="text-gradient">AI automation OS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Describe the outcome in natural language — we turn it into intent, agents
            assemble the workflow, and you ship faster.{" "}
            <span className="font-medium text-foreground">
              Hybrid prompt + visual editing
            </span>{" "}
            when you want full control.{" "}
            <span className="italic text-foreground/90">
              Your vision. Our AI. Real results.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              asChild
              className="gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            >
              <Link to="/signup">
                Join the beta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Watch overview
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {valuePillars.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/80 bg-card/40 px-3 py-4 text-center backdrop-blur-sm"
              >
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-warning/60" />
                <div className="h-3 w-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground">
                ctrlchecks.ai/workflow/builder
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 p-6 sm:p-8">
              <div className="mx-auto flex max-w-3xl justify-center">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="flex w-full items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-4 py-2.5"
                >
                  <MessageSquareText className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-left text-xs text-muted-foreground sm:text-sm">
                    <span className="font-medium text-foreground">Prompt: </span>
                    On new leads, enrich, score, and notify sales in Slack…
                  </span>
                </motion.div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1.1fr)]">
                <div className="rounded-lg border border-border bg-card p-3 sm:p-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-6 rounded bg-primary/10 sm:h-8" />
                    <div className="h-4 rounded bg-muted sm:h-6" />
                    <div className="h-4 rounded bg-muted sm:h-6" />
                    <div className="h-4 rounded bg-muted sm:h-6" />
                    <div className="h-6 rounded bg-secondary/10 sm:h-8" />
                    <div className="h-4 rounded bg-muted sm:h-6" />
                  </div>
                </div>

                <div className="relative min-h-[200px] rounded-lg border border-border bg-card/70">
                  <div className="flex h-full items-center justify-center px-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        className="flex h-12 min-w-[112px] items-center gap-2 rounded-lg border-2 border-primary bg-card px-3 shadow-md sm:h-14"
                      >
                        <div className="rounded bg-primary/20 p-1.5">
                          <Zap className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                        </div>
                        <div className="text-[11px] font-medium sm:text-xs">Trigger</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.05 }}
                        className="h-px w-8 rounded bg-primary/40 sm:w-10 md:w-12"
                        aria-hidden
                      />

                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                        className="flex h-12 min-w-[120px] items-center gap-2 rounded-lg border-2 border-accent bg-card px-3 shadow-md sm:h-14"
                      >
                        <div className="rounded bg-accent/20 p-1.5">
                          <Sparkles className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                        </div>
                        <div className="text-[11px] font-medium sm:text-xs">AI graph</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.15 }}
                        className="h-px w-8 rounded bg-accent/40 sm:w-10 md:w-12"
                        aria-hidden
                      />

                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 }}
                        className="flex h-12 min-w-[112px] items-center gap-2 rounded-lg border-2 border-secondary bg-card px-3 shadow-md sm:h-14"
                      >
                        <div className="rounded bg-secondary/20 p-1.5">
                          <Workflow className="h-3 w-3 text-secondary sm:h-4 sm:w-4" />
                        </div>
                        <div className="text-[11px] font-medium sm:text-xs">Outputs</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-3 sm:p-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-4 w-16 rounded bg-muted sm:h-6 sm:w-20" />
                    <div className="h-8 rounded border border-border bg-muted/50 sm:h-10" />
                    <div className="h-4 w-14 rounded bg-muted sm:h-6" />
                    <div className="h-16 rounded border border-border bg-muted/50 sm:h-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
