import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export type HelpText =
  | string
  | {
      title: string;
      description: string;
      example?: string;
    };

function normalizeHelpText(helpText: HelpText): { title?: string; description: string; example?: string } {
  if (typeof helpText === 'string') {
    return { description: helpText };
  }
  return helpText;
}

export function HelpTooltip({
  helpText,
  ariaLabel = 'Help',
  side = 'top',
  className,
}: {
  helpText: HelpText;
  ariaLabel?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}) {
  const normalized = normalizeHelpText(helpText);
  const description = (normalized.description || '').trim();
  if (!description) return null;

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={ariaLabel}
            className={className || 'inline-flex items-center justify-center ml-2 text-muted-foreground hover:text-foreground'}
            onClick={(e) => {
              // On mobile, tap-to-focus helps show the tooltip; prevent label click side effects.
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <HelpCircle className="h-3.5 w-3.5" />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-[360px] space-y-1.5 p-3">
          {normalized.title ? <div className="text-sm font-semibold">{normalized.title}</div> : null}
          <div className="text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap">{description}</div>
          {normalized.example ? (
            <div className="text-[11px] leading-relaxed">
              <span className="font-medium">Example:</span> <span className="text-muted-foreground">{normalized.example}</span>
            </div>
          ) : null}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

