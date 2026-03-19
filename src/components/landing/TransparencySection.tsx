import { motion } from "framer-motion";
import {
  PlayCircle,
  Split,
  GitMerge,
  FileOutput,
  AlertTriangle,
  ListChecks,
} from "lucide-react";

const facets = [
  { icon: PlayCircle, label: "Trigger", desc: "What kicks off the graph" },
  { icon: GitMerge, label: "Logic", desc: "Decisions and orchestration" },
  { icon: Split, label: "Conditional paths", desc: "True/false and branch clarity" },
  { icon: FileOutput, label: "Outputs", desc: "Every destination is explicit" },
  { icon: AlertTriangle, label: "Error handling", desc: "Recovery paths you can trust" },
  { icon: ListChecks, label: "Actions", desc: "Step-by-step visibility" },
];

export function TransparencySection() {
  return (
    <section
      id="transparency"
      className="py-20 sm:py-32 bg-muted/30"
      aria-labelledby="transparency-heading"
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
            id="transparency-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Transparent AI{" "}
            <span className="text-gradient">builds trust</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Autonomy with visibility. CtrlChecks surfaces complete workflow detail so teams can
            audit, explain, and govern what runs in production.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facets.map((facet, index) => (
            <motion.div
              key={facet.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <facet.icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 font-semibold">{facet.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{facet.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
