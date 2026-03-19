import { motion } from "framer-motion";
import { Lock, Scale, LayoutTemplate, ServerCog } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Secured",
    body: "Credential isolation, encryption in transit and at rest, and least-privilege patterns across integrations.",
  },
  {
    icon: Scale,
    title: "Compliance-ready",
    body: "Architecture and workflows designed for teams that need auditability, policy, and standardized rollout.",
  },
  {
    icon: LayoutTemplate,
    title: "Standardized",
    body: "Repeatable graph contracts so security and ops teams review once, then scale with confidence.",
  },
  {
    icon: ServerCog,
    title: "Scalable security",
    body: "Security grows with your deployment model — self-hosted, private cloud, or managed paths.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-20 sm:py-32" aria-labelledby="security-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="security-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Enterprise-ready{" "}
            <span className="text-gradient">security</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground">
            Security is foundational — not an afterthought.
          </p>
          <p className="mt-2 text-muted-foreground">
            CtrlChecks AI-OS bakes governance into how graphs are authored, executed, and
            observed — so autonomy does not trade away control.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {points.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p.icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
