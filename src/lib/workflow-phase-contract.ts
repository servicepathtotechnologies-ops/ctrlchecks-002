/**
 * Workflow phase strings aligned with the worker attach-inputs / attach-credentials contract.
 * Worker: attach-credentials accepts only workflows in `inputs_applied` after attach-inputs.
 * See worker/src/api/attach-credentials.ts phase guard.
 */

export const PHASE_INPUTS_APPLIED = 'inputs_applied' as const;
export const PHASE_CONFIGURING_CREDENTIALS = 'configuring_credentials' as const;
export const PHASE_READY_FOR_EXECUTION = 'ready_for_execution' as const;

const PHASES_THAT_ALLOW_ATTACH_CREDENTIALS = new Set<string>([
  PHASE_INPUTS_APPLIED,
  PHASE_CONFIGURING_CREDENTIALS,
]);

/**
 * Whether the client should run the attach-credentials step after a successful attach-inputs response.
 * Do not use `ready_for_execution`: attach-inputs sets that when no credential step is needed, and
 * attach-credentials rejects phases other than `inputs_applied`.
 */
export function shouldRunAttachCredentialsAfterAttachInputs(phase: string | undefined | null): boolean {
  const p = String(phase ?? '').toLowerCase().trim();
  return PHASES_THAT_ALLOW_ATTACH_CREDENTIALS.has(p);
}
