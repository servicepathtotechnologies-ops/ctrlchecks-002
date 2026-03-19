import { motion } from "framer-motion";
import {
  Wand2,
  Server,
  Network,
  Eye,
  Shield,
  Puzzle,
  Activity,
  Layers,
} from "lucide-react";

const pillars = [
  {
    icon: Wand2,
    title: "One-prompt workflow creation",
    description:
      "Describe outcomes in natural language. The OS translates intent into executable graphs — with hybrid prompt + visual editing when you need precision.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Server,
    title: "Local LLMs & private inference",
    description:
      "Run with Ollama and private models so sensitive workloads can stay on your infrastructure. Cloud LLMs when you want them.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Network,
    title: "Distributed, fault-tolerant engine",
    description:
      "Built for production: horizontal scaling, resilient workers, and an architecture designed for large-scale, real-world workloads.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Activity,
    title: "Real-time tracking & auto-recovery",
    description:
      "Watch executions live, inspect runs, and lean on built-in recovery paths instead of brittle manual retries.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Layers,
    title: "Open core · one platform, every tool",
    description:
      "Plugin-ready architecture connecting CRMs, ERPs, SaaS, and enterprise stacks — Zoho and more — without losing a unified control plane.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Eye,
    title: "Transparency by design",
    description:
      "Every graph exposes triggers, logic, branches, outputs, and error handling so autonomy never means a black box.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Shield,
    title: "Enterprise-ready security",
    description:
      "Security is foundational: isolated credentials, compliance-ready patterns, and standardized workflows for governed teams.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Puzzle,
    title: "SDKs, APIs & agent templates",
    description:
      "Extend the OS with developer tooling, integration frameworks, and reusable agent patterns for consistent delivery across regions and teams.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Platform with a{" "}
            <span className="text-gradient">difference</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything in CtrlChecks AI-OS is built around autonomous execution, transparent
            graphs, and extensibility — rather than adding isolated AI steps on top of existing
            tools.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgColor}`}
              >
                <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
