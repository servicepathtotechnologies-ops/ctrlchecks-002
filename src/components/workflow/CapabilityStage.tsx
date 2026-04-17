/**
 * Capability Stage UI Component
 *
 * Displays all Capability_Containers simultaneously and collects exactly one
 * Node_Selection per container before enabling Continue.
 *
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 8.6
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowLeft, ArrowRight, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import type {
  CapabilityContainer,
  CandidateNode,
  NodeSelectionMap,
} from '../../types/capability-selection';

// ─── Props ────────────────────────────────────────────────────────────────────

interface CapabilityStageProps {
  containers: CapabilityContainer[];
  onComplete: (selections: NodeSelectionMap) => void;
  onBack?: () => void;
}

// ─── Credential Badge ─────────────────────────────────────────────────────────

function CredentialBadge({ hasCredentials }: { hasCredentials: boolean }) {
  if (hasCredentials) {
    return (
      <Badge
        variant="secondary"
        className="gap-1 bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      >
        <Wifi className="h-3 w-3" />
        Connected
      </Badge>
    );
  }
  return (
    <Badge
      variant="outline"
      className="gap-1 text-muted-foreground"
    >
      <WifiOff className="h-3 w-3" />
      Not connected
    </Badge>
  );
}

// ─── Candidate Option ─────────────────────────────────────────────────────────

interface CandidateOptionProps {
  candidate: CandidateNode;
  isSelected: boolean;
  onSelect: () => void;
}

function CandidateOption({ candidate, isSelected, onSelect }: CandidateOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        'w-full text-left rounded-lg border p-4 transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isSelected
          ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm'
          : 'border-border/60 bg-background hover:border-primary/50 hover:bg-accent/5',
      ].join(' ')}
      aria-pressed={isSelected}
    >
      <div className="flex items-start gap-3">
        {/* Radio indicator */}
        <div
          className={[
            'mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 transition-colors',
            isSelected
              ? 'border-primary bg-primary'
              : 'border-muted-foreground/40',
          ].join(' ')}
          aria-hidden="true"
        >
          {isSelected && (
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="font-medium text-sm leading-tight">{candidate.label}</span>
            <CredentialBadge hasCredentials={candidate.hasCredentials} />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{candidate.description}</p>
        </div>

        {/* Selected checkmark */}
        {isSelected && (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
        )}
      </div>
    </button>
  );
}

// ─── Container Card ───────────────────────────────────────────────────────────

interface ContainerCardProps {
  container: CapabilityContainer;
  selectedNodeType: string | undefined;
  onSelect: (nodeType: string) => void;
  index: number;
}

function ContainerCard({ container, selectedNodeType, onSelect, index }: ContainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
    >
      <Card className="border-border/80">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="text-base">{container.label}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {container.useCaseUnit.description}
              </CardDescription>
            </div>
            {selectedNodeType && (
              <Badge variant="secondary" className="shrink-0 text-xs">
                Selected
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {container.candidates.map((candidate) => (
            <CandidateOption
              key={candidate.nodeType}
              candidate={candidate}
              isSelected={selectedNodeType === candidate.nodeType}
              onSelect={() => onSelect(candidate.nodeType)}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Capability Stage ─────────────────────────────────────────────────────────

export function CapabilityStage({ containers, onComplete, onBack }: CapabilityStageProps) {
  const [selections, setSelections] = useState<NodeSelectionMap>({});

  // Req 3.4, 3.6 — at least one container must have a selection; not all containers need to be filled
  const isComplete = Object.keys(selections).length >= 1;

  // Req 3.5 — selecting a node replaces any prior selection in that container
  // Clicking an already-selected node deselects it (toggle off)
  // Req 3.8 — no backend call on selection change
  function handleSelect(containerId: string, nodeType: string) {
    setSelections((prev) => {
      if (prev[containerId] === nodeType) {
        const next = { ...prev };
        delete next[containerId];
        return next;
      }
      return { ...prev, [containerId]: nodeType };
    });
  }

  // Req 3.7 — Continue is the only action that triggers downstream processing
  function handleContinue() {
    if (isComplete) {
      onComplete(selections);
    }
  }

  // Req 3.1 — render containers in useCaseUnit.orderIndex order
  const sortedContainers = [...containers].sort(
    (a, b) => a.useCaseUnit.orderIndex - b.useCaseUnit.orderIndex,
  );

  const selectedCount = Object.keys(selections).length;
  const totalCount = containers.length;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 pb-24">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Choose your integrations</h2>
        <p className="text-sm text-muted-foreground">
          Select the integrations you want to use — skip any you don't need.{' '}
          <span className="font-medium text-foreground">
            {selectedCount} of {totalCount}
          </span>{' '}
          selected.
        </p>
      </div>

      {/* Container list — Req 3.1, 3.2, 3.3 — natural flow, no inner scroll */}
      <div className="space-y-4">
        {sortedContainers.map((container, index) => (
          <ContainerCard
            key={container.containerId}
            container={container}
            selectedNodeType={selections[container.containerId]}
            onSelect={(nodeType) => handleSelect(container.containerId, nodeType)}
            index={index}
          />
        ))}
      </div>

      {/* Sticky action bar — always visible at bottom of viewport */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t px-4 py-3 flex gap-3">
        {/* Req 3.8 — Go Back calls onBack with no state change */}
        {onBack && (
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        )}

        {/* Req 3.4, 3.6 — disabled until isComplete */}
        <Button
          onClick={handleContinue}
          disabled={!isComplete}
          className="ml-auto gap-2"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
