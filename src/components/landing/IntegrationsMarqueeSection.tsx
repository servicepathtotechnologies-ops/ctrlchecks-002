import { motion, useReducedMotion } from "framer-motion";
import { landingViewport, springSoft } from "@/components/landing/landing-motion";

type IntegrationLogo = {
  name: string;
  src: string;
};

const integrationFiles = [
  "ActiveCampaign.svg",
  "airtable.svg",
  "Anthropic.svg",
  "AWS S3.svg",
  "bitbucket.svg",
  "ClickUp.svg",
  "claude.svg",
  "Discord.svg",
  "Dropbox.svg",
  "facebook.svg",
  "Freshdesk.svg",
  "FTP.svg",
  "github-sign.svg",
  "gmail.svg",
  "Google-Contacts.svg",
  "google-calendar.svg",
  "google-docs.svg",
  "Google-Drive.svg",
  "Google-Gemini.svg",
  "google.svg",
  "instagram.svg",
  "Intercom.svg",
  "jenkins.svg",
  "Jira.svg",
  "linkedin.svg",
  "Mailchimp.svg",
  "Microsoft Teams.svg",
  "MongoDB.svg",
  "MySQL.svg",
  "Notion.svg",
  "Ollama.svg",
  "OneDrive.svg",
  "OpenAI GPT.svg",
  "Outlook.svg",
  "PayPal.svg",
  "Pipedrive.svg",
  "postgre.svg",
  "Redis.svg",
  "Salesforce.svg",
  "SFTP.svg",
  "shopify.svg",
  "Slack.svg",
  "Stripe.svg",
  "Supabase.svg",
  "Telegram.svg",
  "twitter.svg",
  "WooCommerce.svg",
  "youtube.svg",
  "Zoho CRM.svg",
  "Zoho.svg",
];

const formatNameFromFile = (file: string) =>
  file
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const displayNameByFile: Record<string, string> = {
  "github-sign.svg": "GitHub",
  "gmail.svg": "Gmail",
  "Google-Contacts.svg": "Google Contacts",
  "google-calendar.svg": "Google Calendar",
  "google-docs.svg": "Google Docs",
  "Google-Drive.svg": "Google Drive",
  "Google-Gemini.svg": "Google Gemini",
  "google.svg": "Google",
  "MongoDB.svg": "MongoDB",
  "MySQL.svg": "MySQL",
  "OpenAI GPT.svg": "OpenAI GPT",
  "WooCommerce.svg": "WooCommerce",
  "twitter.svg": "Twitter/X",
  "Zoho CRM.svg": "Zoho CRM",
  "AWS S3.svg": "AWS S3",
  "SFTP.svg": "SFTP",
  "FTP.svg": "FTP",
  "OneDrive.svg": "OneDrive",
};

const integrations: IntegrationLogo[] = integrationFiles.map((file) => ({
  name: displayNameByFile[file] ?? formatNameFromFile(file),
  src: `/integrations-logos/${file}`,
}));

const splitIntoRows = <T,>(items: T[], rowCount: number): T[][] => {
  const perRow = Math.ceil(items.length / rowCount);
  const rows: T[][] = [];
  for (let i = 0; i < rowCount; i += 1) {
    const rowItems = items.slice(i * perRow, (i + 1) * perRow);
    if (rowItems.length > 0) rows.push(rowItems);
  }
  return rows;
};

const rowDirections = [false, true, false];
const rowDurations = [34, 38, 36];

function normalizeDisplayName(name: string) {
  if (name === "postgre") return "PostgreSQL";
  return name;
}

const normalizedIntegrations = integrations.map((item) => ({
  ...item,
  name: normalizeDisplayName(item.name),
}));

const normalizedRows = splitIntoRows(normalizedIntegrations, 3);

function LogoTile({ item }: { item: IntegrationLogo }) {
  return (
    <div className="w-36 shrink-0 rounded-xl border border-border/50 bg-background/70 px-4 py-4 text-center backdrop-blur-sm sm:w-40 dark:bg-white/5">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/5 sm:h-18 sm:w-18 dark:bg-white dark:ring-white/10">
        <img
          src={encodeURI(item.src)}
          alt={item.name}
          loading="lazy"
          className="h-12 w-12 object-contain [image-rendering:-webkit-optimize-contrast] sm:h-14 sm:w-14"
        />
      </div>
      <p className="mt-3 line-clamp-2 min-h-10 text-xs font-medium text-muted-foreground sm:text-sm">
        {item.name}
      </p>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 30,
}: {
  items: IntegrationLogo[];
  reverse?: boolean;
  duration?: number;
}) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
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
              {normalizedIntegrations.map((item) => (
                <LogoTile key={item.name} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {normalizedRows.map((row, index) => (
                <MarqueeRow
                  key={`row-${index}`}
                  items={row}
                  reverse={rowDirections[index] ?? false}
                  duration={rowDurations[index] ?? 34}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
