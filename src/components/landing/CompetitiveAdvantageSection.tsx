import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const wins = [
  "Autonomous workflow creation from intent",
  "Self-repairing automation graphs",
  "Dynamic node registry & extensibility",
  "Multi-LLM orchestration out of the box",
  "Enterprise-grade automation engine",
];

export function CompetitiveAdvantageSection() {
  return (
    <section
      id="advantage"
      className="py-20 sm:py-32"
      aria-labelledby="advantage-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="advantage-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Why CtrlChecks AI-OS{" "}
            <span className="text-gradient">stands out globally</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CtrlChecks brings together autonomous creation, resilient execution, and a modern
            architecture that teams around the world can extend and govern with confidence.
          </p>
        </motion.div>

        <ul className="mx-auto mt-12 grid max-w-2xl gap-4">
          {wins.map((line, index) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
              <span className="font-medium">{line}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
