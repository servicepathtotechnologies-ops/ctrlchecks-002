import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FieldFillMode = 'manual_static' | 'buildtime_ai_once' | 'runtime_ai';

type FieldOwnershipCopy = {
    what: string;
    you: string;
    aiBuild: string;
    aiRun: string;
    example: string;
    toggleOff: string;
    requiredText: string;
    dataImpact: string;
};

type OwnershipChoiceCardsProps = {
    selectedMode: string;
    showBuildButton: boolean;
    showRuntimeButton: boolean;
    you: string;
    aiBuild: string;
    aiRun: string;
    onModeChange: (mode: FieldFillMode) => void;
};

const CARD_CONFIGS = [
    {
        mode: 'manual_static' as FieldFillMode,
        label: 'You',
        alwaysAvailable: true,
        border: 'border-border/50',
        activeBorder: 'border-primary/60 ring-1 ring-primary/20',
        bg: 'bg-muted/5',
        activeBg: 'bg-primary/5',
        labelColor: 'text-foreground/80',
        activeLabelColor: 'text-primary',
    },
    {
        mode: 'buildtime_ai_once' as FieldFillMode,
        label: 'AI Build',
        alwaysAvailable: false,
        border: 'border-sky-500/30',
        activeBorder: 'border-sky-400/60 ring-1 ring-sky-400/20',
        bg: 'bg-sky-500/5',
        activeBg: 'bg-sky-500/10',
        labelColor: 'text-sky-300/80',
        activeLabelColor: 'text-sky-300',
    },
    {
        mode: 'runtime_ai' as FieldFillMode,
        label: 'AI Runtime',
        alwaysAvailable: false,
        border: 'border-amber-500/30',
        activeBorder: 'border-amber-400/60 ring-1 ring-amber-400/20',
        bg: 'bg-amber-500/5',
        activeBg: 'bg-amber-500/10',
        labelColor: 'text-amber-300/80',
        activeLabelColor: 'text-amber-300',
    },
] as const;

function OwnershipChoiceCards({
    selectedMode,
    showBuildButton,
    showRuntimeButton,
    you,
    aiBuild,
    aiRun,
    onModeChange,
}: OwnershipChoiceCardsProps) {
    const descriptions: Record<FieldFillMode, string> = {
        manual_static: you,
        buildtime_ai_once: aiBuild,
        runtime_ai: aiRun,
    };

    const availability: Record<FieldFillMode, boolean> = {
        manual_static: true,
        buildtime_ai_once: showBuildButton,
        runtime_ai: showRuntimeButton,
    };

    return (
        <div className="space-y-1.5">
            <p className="text-[11px] font-medium text-foreground/85">Choose who owns this field</p>
            {CARD_CONFIGS.map((card) => {
                const isSelected = selectedMode === card.mode;
                const isAvailable = availability[card.mode];
                return (
                    <div
                        key={card.mode}
                        className={cn(
                            'rounded border p-2 transition-colors',
                            isSelected
                                ? `${card.activeBorder} ${card.activeBg}`
                                : `${card.border} ${card.bg}`,
                            !isAvailable && 'opacity-50',
                        )}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1 space-y-0.5">
                                <p className={cn(
                                    'text-[11px] font-semibold',
                                    isSelected ? card.activeLabelColor : card.labelColor,
                                )}>
                                    {card.label}
                                    {isSelected && (
                                        <span className="ml-1.5 text-[10px] font-normal opacity-60">
                                            (selected)
                                        </span>
                                    )}
                                </p>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">
                                    {isAvailable
                                        ? descriptions[card.mode]
                                        : 'Not available for this field.'}
                                </p>
                            </div>
                            <Button
                                type="button"
                                size="sm"
                                variant={isSelected ? 'default' : 'outline'}
                                disabled={!isAvailable}
                                className="shrink-0 h-6 px-2 text-[10px]"
                                onClick={() => isAvailable && onModeChange(card.mode)}
                            >
                                {isSelected ? 'Selected' : 'Select'}
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export type FieldOwnershipHelpPanelProps = {
    fieldHelpOpen: boolean;
    isLoading: boolean;
    hasAiData: boolean;
    fieldEnabled: boolean;
    locked: boolean;
    selectedMode: string;
    showBuildButton: boolean;
    showRuntimeButton: boolean;
    ownershipFooterText: string | null;
    fieldOwnershipCopy: FieldOwnershipCopy;
    onModeChange: (mode: FieldFillMode) => void;
};

export function FieldOwnershipHelpPanel({
    fieldHelpOpen,
    isLoading,
    hasAiData,
    fieldEnabled,
    locked,
    selectedMode,
    showBuildButton,
    showRuntimeButton,
    ownershipFooterText,
    fieldOwnershipCopy,
    onModeChange,
}: FieldOwnershipHelpPanelProps) {
    if (!fieldHelpOpen) return null;

    return (
        <div className="px-3 py-3 border-t border-border/20 bg-indigo-500/5 space-y-2">
            {isLoading && !hasAiData ? (
                <div className="space-y-2">
                    <div className="h-3 w-5/6 rounded bg-muted/40 animate-pulse" />
                    <div className="h-3 w-2/3 rounded bg-muted/40 animate-pulse" />
                </div>
            ) : (
                <>
                    <div>
                        <p className="text-[11px] font-medium text-foreground/85">
                            What this field does in this workflow
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {fieldOwnershipCopy.what}
                        </p>
                    </div>

                    <div className="rounded border border-border/40 bg-background/40 p-2">
                        <p className="text-[11px] font-medium text-foreground/85">Do you need it?</p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {fieldOwnershipCopy.requiredText}
                        </p>
                    </div>

                    {fieldEnabled && !locked && (
                        <OwnershipChoiceCards
                            selectedMode={selectedMode}
                            showBuildButton={showBuildButton}
                            showRuntimeButton={showRuntimeButton}
                            you={fieldOwnershipCopy.you}
                            aiBuild={fieldOwnershipCopy.aiBuild}
                            aiRun={fieldOwnershipCopy.aiRun}
                            onModeChange={onModeChange}
                        />
                    )}

                    {locked && ownershipFooterText && (
                        <div className="rounded border border-muted p-2">
                            <p className="text-[11px] text-muted-foreground">
                                {ownershipFooterText}
                            </p>
                        </div>
                    )}

                    <div>
                        <p className="text-[11px] font-medium text-foreground/85">
                            How this changes the data
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {fieldOwnershipCopy.dataImpact}
                        </p>
                    </div>

                    <p className="text-[10px] text-muted-foreground/60 font-mono">
                        {fieldOwnershipCopy.example}
                    </p>
                    <p className="text-[10px] text-muted-foreground/55">
                        {fieldOwnershipCopy.toggleOff}
                    </p>
                </>
            )}
        </div>
    );
}
