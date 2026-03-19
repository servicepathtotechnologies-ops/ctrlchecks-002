import { motion } from "framer-motion";
import { ArrowRight, Workflow, Bot } from "lucide-react";

export function MarketPositionSection() {
  return (
    <section id="market" className="py-20 sm:py-32" aria-labelledby="market-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="market-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Where CtrlChecks AI-OS <span className="text-gradient">fits</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Classic automation tools orchestrate apps. Agent frameworks orchestrate models.
            CtrlChecks AI-OS is the bridge —{" "}
            <span className="font-medium text-foreground">
              AI automation infrastructure for both worlds.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-[1fr_auto_1fr]"
        >
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <Workflow className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
            <h3 className="mt-4 font-semibold">Automation platforms</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Orchestrate applications and workflows
            </p>
            <p className="mt-3 text-sm">
              Reliable integrations, visual builders, SaaS-first ergonomics.
            </p>
          </div>

          <div className="hidden items-center justify-center lg:flex" aria-hidden>
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center lg:col-start-3">
            <Bot className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
            <h3 className="mt-4 font-semibold">AI agent frameworks</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Orchestrate language models and agents
            </p>
            <p className="mt-3 text-sm">
              Model orchestration, agents, and code-first flexibility.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-8 text-center lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              CtrlChecks AI-OS
            </p>
            <p className="mt-2 text-xl font-bold sm:text-2xl">
              Native prompt-to-workflow · distributed engine · open core · enterprise guardrails
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
