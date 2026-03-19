import { motion } from "framer-motion";
import { CheckCircle2, Brain, GitBranch, Sparkles } from "lucide-react";

const engines = [
  "Requirement analysis engine",
  "Intelligent logic engine",
  "AI that orchestrates AI",
  "End-to-end workflow automation",
];

const contrasts = [
  { label: "No manual node setup", ok: true },
  { label: "AI-managed architecture", ok: true },
  { label: "From prompt to production — fast", ok: true },
  { label: "Operational safety built in", ok: true },
];

export function AutonomySection() {
  return (
    <section
      id="autonomy"
      className="py-20 sm:py-32"
      aria-labelledby="autonomy-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Watch workflows build themselves
            </p>
            <h2
              id="autonomy-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              This is not automation —{" "}
              <span className="text-gradient">this is autonomy</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Software that engineers its own workflows. CtrlChecks curates validated logic
              paths and production-ready graphs for complex operations.
            </p>
            <ul className="mt-8 space-y-3">
              {engines.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <GitBranch className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 border-b border-border pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Intelligence before automation</h3>
                <p className="text-sm text-muted-foreground">
                  Reason · validate · confirm
                </p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              CtrlChecks focuses on curation — higher accuracy, production-ready outputs, and
              reduced risk.
            </p>
            <ul className="mt-6 space-y-3">
              {contrasts.map((row) => (
                <li key={row.label} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-hidden />
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary shrink-0" />
              Automatic execution · faster development · fewer fragile scripts
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
