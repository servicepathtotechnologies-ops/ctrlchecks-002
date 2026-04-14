import { Sparkles, PlugZap, ShieldAlert, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { GuidedStatusTone } from '@/lib/workflow-guidance';

interface GuidedStatusCardProps {
  title: string;
  description: string;
  resolution?: string;
  details?: string;
  tone?: GuidedStatusTone;
  onDismiss?: () => void;
}

const toneStyles: Record<GuidedStatusTone, { ring: string; bg: string; iconClass: string }> = {
  configuration: {
    ring: 'ring-indigo-500/30',
    bg: 'from-indigo-500/12 via-violet-500/8 to-transparent',
    iconClass: 'text-indigo-300',
  },
  connection: {
    ring: 'ring-cyan-500/30',
    bg: 'from-cyan-500/12 via-sky-500/8 to-transparent',
    iconClass: 'text-cyan-300',
  },
  attention: {
    ring: 'ring-amber-500/30',
    bg: 'from-amber-500/12 via-orange-500/8 to-transparent',
    iconClass: 'text-amber-300',
  },
  success: {
    ring: 'ring-emerald-500/30',
    bg: 'from-emerald-500/12 via-green-500/8 to-transparent',
    iconClass: 'text-emerald-300',
  },
};

function ToneIcon({ tone }: { tone: GuidedStatusTone }) {
  if (tone === 'connection') return <PlugZap className="h-4 w-4" />;
  if (tone === 'attention') return <ShieldAlert className="h-4 w-4" />;
  if (tone === 'success') return <CheckCircle2 className="h-4 w-4" />;
  return <Sparkles className="h-4 w-4" />;
}

export function GuidedStatusCard({
  title,
  description,
  resolution,
  details,
  tone = 'configuration',
  onDismiss,
}: GuidedStatusCardProps) {
  const style = toneStyles[tone];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-border/50 bg-background/80 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.18)]',
        'ring-1 backdrop-blur-sm transition-all duration-300',
        style.ring
      )}
      role="status"
      aria-live="polite"
    >
      <div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 animate-pulse', style.bg)} />
      <div className="relative flex items-start justify-between gap-2">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className={cn('inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/70', style.iconClass)}>
              <ToneIcon tone={tone} />
            </span>
            <p className="text-sm font-semibold text-foreground/95">{title}</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          {resolution && <p className="text-xs text-foreground/85">{resolution}</p>}
          {details && <p className="text-[11px] text-muted-foreground/80 line-clamp-2">Details: {details}</p>}
        </div>
        {onDismiss && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-6 w-6 text-muted-foreground/70 hover:text-foreground"
            onClick={onDismiss}
            aria-label="Dismiss guidance"
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    </div>
  );
}

