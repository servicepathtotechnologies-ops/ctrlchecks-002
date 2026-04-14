export type GuidedStatusTone = 'configuration' | 'connection' | 'attention' | 'success';

export interface GuidedStatusContent {
  title: string;
  description: string;
  resolution?: string;
  details?: string;
  tone: GuidedStatusTone;
}

type WorkflowIssueInput = unknown;

const VALID_PHASE_CODES = new Set(['PHASE_LOCKED', 'INVALID_PHASE', 'WORKFLOW_INVALID_PHASE']);

function toRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function humanizePhase(phase: string): string {
  if (!phase) return 'workflow setup';
  return phase
    .split('_')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function mapWorkflowIssueToGuidance(input: WorkflowIssueInput): GuidedStatusContent {
  if (typeof input === 'string') {
    return {
      title: 'Configuration needs one more step',
      description: input,
      resolution: 'Review required fields and continue setup from the workflow panel.',
      tone: 'configuration',
    };
  }

  const payload = toRecord(input);
  const code = getString(payload.code).toUpperCase();
  const message = getString(payload.message) || getString(payload.error) || 'Configuration update is pending.';
  const currentPhase = getString(payload.currentPhase) || getString(payload.phase);
  const normalizedMessage = message.toLowerCase();

  if (
    VALID_PHASE_CODES.has(code) ||
    normalizedMessage.includes('valid phase') ||
    normalizedMessage.includes('attach-inputs first') ||
    normalizedMessage.includes('must be "ready_for_ownership"')
  ) {
    return {
      title: 'Configuration step needed',
      description:
        'Your workflow is safe. This field update needs the setup sequence to finish before it can sync.',
      resolution: currentPhase
        ? `Current stage: ${humanizePhase(currentPhase)}. Complete the required setup step, then save again.`
        : 'Complete required inputs and credentials in order, then save again.',
      details: message,
      tone: 'configuration',
    };
  }

  if (
    code === 'UNAUTHORIZED' ||
    code === 'FORBIDDEN' ||
    normalizedMessage.includes('unauthorized') ||
    normalizedMessage.includes('token') ||
    normalizedMessage.includes('session')
  ) {
    return {
      title: 'Connection refresh needed',
      description: 'Please refresh your sign-in session to continue syncing workflow changes.',
      resolution: 'Reconnect your account in this tab and retry.',
      details: message,
      tone: 'connection',
    };
  }

  return {
    title: 'Let us finish this setup smoothly',
    description: 'We could not sync this change yet, but your progress is preserved.',
    resolution: 'Retry after a moment, or continue with manual configuration and save again.',
    details: message,
    tone: 'attention',
  };
}

