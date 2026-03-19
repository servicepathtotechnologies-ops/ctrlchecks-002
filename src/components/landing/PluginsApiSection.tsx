import { motion } from "framer-motion";
import { Plug, CloudCog, Blocks } from "lucide-react";

export function PluginsApiSection() {
  return (
    <section
      id="plugins-api"
      className="py-20 sm:py-32 bg-muted/30"
      aria-labelledby="plugins-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="plugins-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Plugins & API
            </h2>
            <p className="mt-2 text-lg font-medium text-primary">
              An intelligence layer behind modern software
            </p>
            <p className="mt-4 text-muted-foreground">
              Embed CtrlChecks into the tools your company already runs. Generate workflows
              internally, power them with AI agents, and let every product surface become a
              little more autonomous.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["CRMs", "ERPs", "SaaS platforms", "Enterprise tools"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              {
                icon: CloudCog,
                title: "Scalable infrastructure",
                body: "APIs and workers that grow with traffic, tenants, and graph complexity.",
              },
              {
                icon: Blocks,
                title: "Developer-friendly APIs",
                body: "Predictable contracts for provisioning, executing, and observing workflows.",
              },
              {
                icon: Plug,
                title: "Plugin SDK & enterprise integration",
                body: "Ship connectors once, reuse everywhere across your stack.",
              },
            ].map((row) => (
              <div
                key={row.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <row.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="font-semibold">{row.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{row.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
