import { motion, useReducedMotion } from "framer-motion";
import { landingViewport, springSoft } from "@/components/landing/landing-motion";

type IntegrationLogo = {
  name: string;
  src: string;
};

const integrations: IntegrationLogo[] = [
  { name: "Anthropic", src: "/integrations-logos/Anthropic.svg" },
  { name: "Claude", src: "/integrations-logos/claude.svg" },
  { name: "Salesforce", src: "/integrations-logos/salesforce.svg.svg" },
  { name: "Shopify", src: "/integrations-logos/shopify.svg" },
  { name: "Slack", src: "/integrations-logos/slack.svg" },
  { name: "Stripe", src: "/integrations-logos/stripe.svg" },
  { name: "Supabase", src: "/integrations-logos/supabase.svg" },
  { name: "Telegram", src: "/integrations-logos/telegram.svg" },
  { name: "Twilio", src: "/integrations-logos/twilio.svg" },
  { name: "Twitter/X", src: "/integrations-logos/twitter.svg" },
  { name: "WhatsApp", src: "/integrations-logos/whatsapp.svg" },
  { name: "WooCommerce", src: "/integrations-logos/woocommerce.svg" },
  { name: "YouTube", src: "/integrations-logos/youtube.svg" },
  { name: "Zoho CRM", src: "/integrations-logos/zoho.svg" },
];

function LogoTile({ item }: { item: IntegrationLogo }) {
  return (
    <div className="w-36 shrink-0 rounded-xl border border-border/50 bg-background/70 px-4 py-4 text-center backdrop-blur-sm sm:w-40 dark:bg-white/5">
      <img
        src={item.src}
        alt={item.name}
        loading="lazy"
        className="mx-auto h-12 w-12 object-contain sm:h-14 sm:w-14"
      />
      <p className="mt-3 line-clamp-2 min-h-10 text-xs font-medium text-muted-foreground sm:text-sm">
        {item.name}
      </p>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: IntegrationLogo[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function IntegrationsMarqueeSection() {
  const reduceMotion = useReducedMotion();
  const firstRow = integrations.slice(0, Math.ceil(integrations.length / 2));
  const secondRow = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <section
      id="integrations"
      className="relative py-8 sm:py-10"
      aria-labelledby="integrations-heading"
    >
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={landingViewport}
          transition={reduceMotion ? { duration: 0.35 } : springSoft}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Integrate Instantly
          </h2>
          <p className="mt-4 text-muted-foreground">
            CtrlChecks connects with modern tools your teams already use across communication, CRM, commerce, and data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={landingViewport}
          transition={reduceMotion ? { duration: 0.35 } : { ...springSoft, delay: 0.08 }}
          className="relative mx-auto mt-10 max-w-6xl rounded-2xl border border-border/50 bg-background/10 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-6"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          {reduceMotion ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {integrations.map((item) => (
                <LogoTile key={item.name} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <MarqueeRow items={firstRow} />
              <MarqueeRow items={secondRow} reverse />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
