import { motion, useReducedMotion } from "framer-motion";
import {
  cardHoverTap,
  landingViewport,
  springSoft,
} from "@/components/landing/landing-motion";

/** Slide 9 — developer / open-core path only (embedding lives in Plugins & APIs). */
const blocks = [
  { title: "Workflow engine", item: "Core components you can inspect and extend" },
  { title: "SDKs", item: "First-class developer tooling" },
  { title: "Integration frameworks", item: "Connection libraries for your stack" },
  { title: "Agent templates", item: "Reusable patterns to ship faster" },
];

const developerPath = [
  "Self-host or use cloud—keep data and LLM access under your policy.",
  "Fork-friendly core: debug, extend nodes, and contribute back where it fits.",
  "Ship custom agents and internal tools without rebuilding an automation OS from scratch.",
];

export function OpenCoreSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="open-core" className="py-20 sm:py-32" aria-labelledby="open-core-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={landingViewport}
          transition={reduceMotion ? { duration: 0.45 } : springSoft}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="open-core-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Open core for{" "}
            <span className="text-gradient">developers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The engine, SDKs, frameworks, and templates you use to build—not the same story as
            embedding CtrlChecks inside another product (see Plugins & APIs).
          </p>
        </motion.div>

        <ul className="mx-auto mt-10 max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {developerPath.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={landingViewport}
              transition={
                reduceMotion ? { duration: 0.3, delay: i * 0.05 } : { ...springSoft, delay: i * 0.07 }
              }
              className="flex gap-2"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {blocks.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={landingViewport}
              transition={
                reduceMotion
                  ? { duration: 0.35, delay: index * 0.05 }
                  : { ...springSoft, delay: index * 0.08 }
              }
              {...(reduceMotion ? {} : cardHoverTap)}
              className="rounded-2xl border border-border/50 bg-background/10 p-6 shadow-none backdrop-blur-md transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
