import { motion } from "framer-motion";
import { Target, Bot, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Target,
    title: "Describe the outcome",
    description:
      "Turn natural language into intent. You focus on the business result — the OS captures requirements and structure.",
  },
  {
    number: "2",
    icon: Bot,
    title: "Agents execute",
    description:
      "Infrastructure builds itself: intelligent logic, orchestrated LLMs, and multi-agent paths wired for production — not demos.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Immediate value",
    description:
      "Faster innovation and instant deployment. Refine in the hybrid builder whenever you want hands-on control.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-32 bg-muted/30"
      aria-labelledby="how-heading"
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
            id="how-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            One prompt{" "}
            <span className="text-gradient">changes everything</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The interface fades into the background. Organizations move from manual workflow
            design to intelligent generation — with optional visual refinement at any step.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent lg:block"
                  aria-hidden
                />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card shadow-lg">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
