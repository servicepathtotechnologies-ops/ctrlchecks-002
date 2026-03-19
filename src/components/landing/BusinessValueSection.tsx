import { motion } from "framer-motion";
import { Timer, Boxes } from "lucide-react";

export function BusinessValueSection() {
  return (
    <section
      id="business-value"
      className="py-20 sm:py-32 bg-muted/30"
      aria-labelledby="value-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-8 text-center sm:p-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Timer className="h-7 w-7 text-primary" aria-hidden />
          </div>
          <h2
            id="value-heading"
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Immediate business value
          </h2>
          <p className="mt-4 text-xl font-semibold text-gradient sm:text-2xl">
            Go live in hours, not months.
          </p>
          <p className="mt-4 text-muted-foreground">
            Pre-built AI agents and templates accelerate deployment across core business
            functions — sales, ops, support, finance — without forcing every team to become an
            integration expert.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Boxes className="h-4 w-4 text-primary" aria-hidden />
            Start with intelligence, scale with the OS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
