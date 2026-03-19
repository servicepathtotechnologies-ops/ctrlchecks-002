import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 sm:py-32" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-8 sm:p-16"
        >
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">CtrlChecks AI-OS · Beta</span>
            </div>

            <h2
              id="cta-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to see the automation OS?
            </h2>

            <p className="mt-4 text-lg text-white/85">
              Get early access, explore hybrid prompt + visual workflows, and help shape the
              platform. No credit card required to start.
            </p>

            <p className="mt-2 text-sm text-white/70">
              <a
                href="https://ctrlchecks.ai"
                className="font-medium underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                www.ctrlchecks.ai
              </a>
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/signup">
                  Request beta access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/signin">Sign in</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
