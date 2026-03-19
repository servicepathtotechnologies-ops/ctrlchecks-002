import { motion } from "framer-motion";
import { Cpu, Code2, Library, Puzzle } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Workflow engine",
    body: "Core components that compile intent into durable, observable execution graphs.",
  },
  {
    icon: Code2,
    title: "SDKs & dev tools",
    body: "Meet teams where they build — automate creation, testing, and promotion of workflows.",
  },
  {
    icon: Library,
    title: "Integration frameworks",
    body: "Connection libraries that standardize how enterprise systems plug into the OS.",
  },
  {
    icon: Puzzle,
    title: "Agent templates",
    body: "Reusable patterns so every squad launches consistent, governed automations.",
  },
];

export function OpenCoreSection() {
  return (
    <section id="open-core" className="py-20 sm:py-32" aria-labelledby="open-core-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="open-core-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Open core ·{" "}
            <span className="text-gradient">infinite innovation</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Give developers the primitives to extend CtrlChecks AI-OS — accelerate global
            adoption and make the platform the default choice for serious automation teams.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <item.icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
