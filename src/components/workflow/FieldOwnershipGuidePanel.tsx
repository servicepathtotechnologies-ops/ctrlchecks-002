import { useEffect, useMemo, useState } from "react";
import { Bot, Loader2, Send } from "lucide-react";
import { ENDPOINTS } from "@/config/endpoints";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackFieldOwnershipGuideEvent } from "@/lib/field-ownership-guide-telemetry";
import { supabase } from "@/integrations/supabase/client";

type GuideReply = {
  whatThisFieldDoes: string;
  ifYouChooseYou: string;
  ifYouChooseAIBuild: string;
  ifYouChooseAIRuntime: string;
  isActuallyRequired: string;
  whereToGetValue: string;
  nextStepExpectations: string;
};

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

type Props = {
  enabled: boolean;
  isVisible: boolean;
  contextPayload: Record<string, unknown>;
  selectedFieldLabel?: string;
  onQuickAction?: (label: string) => void;
  floating?: boolean;
};

const QUICK_ACTIONS = [
  "Explain this field",
  "What happens if I choose AI runtime?",
  "Where do I get this credential?",
];

function formatGuideReply(r: GuideReply): string {
  return [
    `What this field does: ${r.whatThisFieldDoes}`,
    `If you choose You: ${r.ifYouChooseYou}`,
    `If you choose AI (build): ${r.ifYouChooseAIBuild}`,
    `If you choose AI (runtime): ${r.ifYouChooseAIRuntime}`,
    `Is this required: ${r.isActuallyRequired}`,
    `Where to get it: ${r.whereToGetValue}`,
    `What happens next: ${r.nextStepExpectations}`,
  ].join("\n\n");
}

export default function FieldOwnershipGuidePanel({
  enabled,
  isVisible,
  contextPayload,
  selectedFieldLabel,
  onQuickAction,
  floating = false,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const canRequest = enabled && isVisible;
  const endpoint = useMemo(() => `${ENDPOINTS.itemBackend}/api/ai/field-ownership-guide`, []);

  const send = async (question: string, source: "bootstrap" | "quick_action" | "manual") => {
    if (!canRequest || !question.trim()) return;
    setLoading(true);
    if (source !== "bootstrap") {
      setMessages((prev) => [...prev, { id: `u_${Date.now()}`, role: "user", content: question }]);
    }
    try {
      const session = (await supabase.auth.getSession()).data.session;
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (session?.access_token) headers.Authorization = `Bearer ${session.access_token}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          question,
          context: contextPayload,
        }),
      });
      if (!response.ok) {
        throw new Error(`Guide API failed (${response.status})`);
      }
      const data = await response.json();
      const reply: GuideReply = data?.guidance || data;
      setMessages((prev) => [
        ...prev,
        { id: `a_${Date.now()}`, role: "assistant", content: formatGuideReply(reply) },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `a_err_${Date.now()}`,
          role: "assistant",
          content:
            "I could not fetch live guidance right now. You can still continue: choose You for manual entry, AI (build) for one-time generation, or AI (runtime) for per-run generation where supported.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!canRequest) return;
    if (messages.length > 0) return;
    trackFieldOwnershipGuideEvent("panel_opened", { selectedFieldLabel: selectedFieldLabel || null });
    void send(
      "Guide me for credentials and ownership on this workflow. Explain You vs AI build vs AI runtime and what happens next.",
      "bootstrap"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRequest]);

  useEffect(() => {
    if (!canRequest || !selectedFieldLabel) return;
    trackFieldOwnershipGuideEvent("field_help_viewed", { selectedFieldLabel });
  }, [canRequest, selectedFieldLabel]);

  useEffect(() => {
    if (!isVisible) setOpen(false);
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  const panelBody = (
    <>
      <div className="p-3 border-b border-border/50 flex items-center gap-2">
        <Bot className="h-4 w-4 text-primary" />
        <p className="text-sm font-semibold">Credential Guide</p>
      </div>
      <div className="p-3 space-y-2">
        {selectedFieldLabel ? (
          <p className="text-xs text-muted-foreground">Focused field: {selectedFieldLabel}</p>
        ) : (
          <p className="text-xs text-muted-foreground">Ask anything about credentials and fill modes.</p>
        )}
        <div className="flex flex-wrap gap-2">
          {QUICK_ACTIONS.map((label) => (
            <Button
              key={label}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                trackFieldOwnershipGuideEvent("suggestion_clicked", { label });
                onQuickAction?.(label);
                void send(label, "quick_action");
              }}
            >
              {label}
            </Button>
          ))}
        </div>
        <ScrollArea className="h-64 rounded border border-border/40 p-2">
          <div className="space-y-2">
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "text-right" : ""}>
                <div
                  className={
                    m.role === "user"
                      ? "inline-block rounded bg-primary text-primary-foreground px-2 py-1 text-xs"
                      : "inline-block rounded bg-muted px-2 py-1 text-xs whitespace-pre-wrap text-left"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                <Loader2 className="h-3 w-3 animate-spin" /> Analyzing field ownership...
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={input}
            placeholder="Ask about this field..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                trackFieldOwnershipGuideEvent("question_asked", { length: input.trim().length });
                void send(input, "manual");
                setInput("");
              }
            }}
          />
          <Button
            type="button"
            size="icon"
            onClick={() => {
              trackFieldOwnershipGuideEvent("question_asked", { length: input.trim().length });
              void send(input, "manual");
              setInput("");
            }}
            disabled={!input.trim() || loading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );

  if (floating) {
    return (
      <div className="fixed bottom-5 right-5 z-[70]">
        {open ? (
          <div className="mb-3 w-[min(92vw,420px)] rounded-lg border border-border/60 bg-card shadow-xl">
            {panelBody}
          </div>
        ) : null}
        <Button
          type="button"
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setOpen((v) => !v)}
          title={open ? "Hide credential guide" : "Open credential guide"}
        >
          <Bot className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded border border-border/60 bg-card">
      {panelBody}
    </div>
  );
}
