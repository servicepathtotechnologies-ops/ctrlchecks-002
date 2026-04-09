import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getBackendUrl } from "@/lib/api/getBackendUrl";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Demo purpose. Try the product and validate your flow.",
    features: [
      "2 workflows",
      "200 tokens/month",
      "Community support",
      "Basic integrations",
    ],
    cta: "Try Free",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For creators and teams scaling automation.",
    features: [
      "20 workflows",
      "10,000 tokens/month",
      "Priority support",
      "Advanced integrations",
      "Faster workflow runs",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Enterprise-level usage and governance.",
    features: [
      "Unlimited workflows",
      "100,000+ tokens/month",
      "Dedicated support",
      "SSO and enterprise controls",
      "Custom onboarding",
    ],
    cta: "Go Enterprise",
    popular: false,
  },
] as const;

type PlanCurrency = "USD" | "INR";

const planDisplayPricing: Record<Exclude<(typeof plans)[number]["id"], "free">, Record<PlanCurrency, string>> = {
  pro: { USD: "$20", INR: "Rs 1,660" },
  enterprise: { USD: "$99", INR: "Rs 8,220" },
};

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function Pricing() {
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<PlanCurrency>("INR");

  const handleCheckout = async (planId: "pro" | "enterprise") => {
    setLoadingPlanId(planId);
    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded || !window.Razorpay) {
        toast.error("Razorpay checkout could not be loaded.");
        return;
      }

      const backendUrl = getBackendUrl();
      const createOrderRes = await fetch(`${backendUrl}/api/payments/razorpay/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, currency }),
      });

      const createOrderData = await createOrderRes.json();
      if (!createOrderRes.ok || !createOrderData?.success) {
        throw new Error(createOrderData?.error || "Failed to create payment order.");
      }

      const order = createOrderData.order;
      const plan = createOrderData.plan;
      const checkoutCapabilities = createOrderData.checkoutCapabilities ?? {};
      const isInrCheckout = order.currency === "INR";
      const rzp = new window.Razorpay({
        key: createOrderData.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "CtrlChecks",
        description: `${plan.label} Subscription`,
        order_id: order.id,
        method: {
          card: checkoutCapabilities.cards ?? true,
          upi: checkoutCapabilities.upi ?? isInrCheckout,
          netbanking: checkoutCapabilities.netbanking ?? isInrCheckout,
          wallet: checkoutCapabilities.wallets ?? isInrCheckout,
          emi: checkoutCapabilities.emi ?? isInrCheckout,
          paylater: checkoutCapabilities.paylater ?? isInrCheckout,
        },
        config: isInrCheckout
          ? {
              display: {
                blocks: {
                  upi: { name: "Pay using UPI", instruments: [{ method: "upi" }] },
                  cards: { name: "Pay using cards", instruments: [{ method: "card" }] },
                  netbanking: {
                    name: "Pay using netbanking",
                    instruments: [{ method: "netbanking" }],
                  },
                  wallets: { name: "Pay using wallets", instruments: [{ method: "wallet" }] },
                  paylater: {
                    name: "Pay using pay later",
                    instruments: [{ method: "paylater" }],
                  },
                },
                sequence: ["block.upi", "block.cards", "block.netbanking", "block.wallets", "block.paylater"],
                preferences: {
                  show_default_blocks: false,
                },
              },
            }
          : undefined,
        handler: async (response: Record<string, string>) => {
          const verifyRes = await fetch(`${backendUrl}/api/payments/razorpay/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              planId,
              currency,
            }),
          });
          const verifyData = await verifyRes.json();
          if (!verifyRes.ok || !verifyData?.success || !verifyData?.verified) {
            toast.error(verifyData?.error || "Payment verification failed.");
            return;
          }

          toast.success(`Payment successful. ${plan.label} is now active.`);
        },
        theme: { color: "#6D28D9" },
      });

      rzp.open();
    } catch (error: any) {
      toast.error(error?.message || "Checkout failed.");
    } finally {
      setLoadingPlanId(null);
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Starter to enterprise plans
          </div>
          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Pick your <span className="text-gradient">automation growth plan</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start on free tokens, then upgrade as your team needs more workflows and execution
            capacity.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border bg-background p-1">
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={cn(
                "rounded-full px-3 py-1 text-sm transition-colors",
                currency === "USD" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              )}
            >
              USD
            </button>
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={cn(
                "rounded-full px-3 py-1 text-sm transition-colors",
                currency === "INR" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              )}
            >
              INR
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            UPI, wallets, netbanking, EMI and pay-later appear in checkout when supported for the
            selected currency and your Razorpay account settings.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            For UPI flows, keep currency as INR.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl border bg-card p-8",
                plan.popular ? "border-primary shadow-xl shadow-primary/10" : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full gradient-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">
                    {plan.id === "free" ? plan.price : planDisplayPricing[plan.id][currency]}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.id === "free" ? (
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      plan.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/signup">{plan.cta}</Link>
                  </Button>
                ) : (
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""
                    )}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleCheckout(plan.id)}
                    disabled={loadingPlanId === plan.id}
                  >
                    {loadingPlanId === plan.id ? "Opening checkout..." : plan.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
