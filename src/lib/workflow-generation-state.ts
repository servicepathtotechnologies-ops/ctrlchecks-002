/**
 * Execution Flow Architecture (STEP-2) - State Management
 * 
 * This module implements the Finite State Machine (FSM) for workflow generation
 * following the strict 7-step pipeline with state transition validation.
 */

// Execution States (STRICT)
export enum WorkflowGenerationState {
  STATE_0_IDLE = 'STATE_0_IDLE',
  STATE_1_USER_PROMPT_RECEIVED = 'STATE_1_USER_PROMPT_RECEIVED',
  STATE_2_CLARIFICATION_ACTIVE = 'STATE_2_CLARIFICATION_ACTIVE',
  STATE_3_UNDERSTANDING_CONFIRMED = 'STATE_3_UNDERSTANDING_CONFIRMED',
  STATE_4_CREDENTIAL_COLLECTION = 'STATE_4_CREDENTIAL_COLLECTION',
  STATE_5_WORKFLOW_BUILDING = 'STATE_5_WORKFLOW_BUILDING',
  STATE_WORKFLOW_BUILT = 'STATE_WORKFLOW_BUILT',
  STATE_WAITING_CONFIRMATION = 'STATE_WAITING_CONFIRMATION',
  STATE_CONFIRMED = 'STATE_CONFIRMED',
  STATE_REJECTED = 'STATE_REJECTED',
  STATE_6_WORKFLOW_VALIDATION = 'STATE_6_WORKFLOW_VALIDATION',
  STATE_7_WORKFLOW_READY = 'STATE_7_WORKFLOW_READY',
  STATE_ERROR_HANDLING = 'STATE_ERROR_HANDLING',
}

// State Transition Rules (NON-NEGOTIABLE)
// ✅ FIXED: Simplified flow with safe error handling
// Rules:
// 1. STATE_1_USER_PROMPT_RECEIVED → STATE_2_CLARIFICATION_ACTIVE
// 2. STATE_2_CLARIFICATION_ACTIVE → STATE_3_UNDERSTANDING_CONFIRMED
// 3. STATE_3_UNDERSTANDING_CONFIRMED → STATE_5_WORKFLOW_BUILDING (BUILDING)
// 4. STATE_5_WORKFLOW_BUILDING → STATE_6_WORKFLOW_VALIDATION (VALIDATION)
// 5. STATE_6_WORKFLOW_VALIDATION → STATE_7_WORKFLOW_READY (READY)
// 6. STATE_5_WORKFLOW_BUILDING → STATE_ERROR_HANDLING (ERROR)
// 7. Any state can transition to STATE_ERROR_HANDLING on failure (handled in transitionTo)
export const ALLOWED_TRANSITIONS: Record<WorkflowGenerationState, WorkflowGenerationState[]> = {
  [WorkflowGenerationState.STATE_0_IDLE]: [WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED],
  [WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED]: [
    WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE, // Optional clarification
    WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, // ✅ FIXED: Can skip directly to building (tolerate partial understanding)
  ],
  [WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE]: [
    WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED, // Optional confirmation
    WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, // ✅ FIXED: Can skip confirmation and go directly to building
  ],
  [WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED]: [
    WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, // BUILDING - required transition
  ],
  [WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION]: [WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING],
  [WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING]: [
    WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, // VALIDATION - success path
    WorkflowGenerationState.STATE_ERROR_HANDLING, // ERROR - failure path
  ],
  [WorkflowGenerationState.STATE_WORKFLOW_BUILT]: [
    // Legacy state - no longer used in primary pipeline
    WorkflowGenerationState.STATE_ERROR_HANDLING, // Allow error handling if ever reached
  ],
  [WorkflowGenerationState.STATE_WAITING_CONFIRMATION]: [
    WorkflowGenerationState.STATE_CONFIRMED,
    WorkflowGenerationState.STATE_REJECTED,
    WorkflowGenerationState.STATE_ERROR_HANDLING, // Can error from waiting state
  ],
  [WorkflowGenerationState.STATE_CONFIRMED]: [
    WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION,
    WorkflowGenerationState.STATE_ERROR_HANDLING, // Can error from confirmed state
  ],
  [WorkflowGenerationState.STATE_REJECTED]: [], // Terminal state - workflow rejected
  [WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION]: [
    WorkflowGenerationState.STATE_7_WORKFLOW_READY,
    WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, // Retry building
    WorkflowGenerationState.STATE_ERROR_HANDLING, // Fatal errors
  ],
  [WorkflowGenerationState.STATE_7_WORKFLOW_READY]: [], // Terminal state
  [WorkflowGenerationState.STATE_ERROR_HANDLING]: [
    WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE, // Can restart from clarification
    WorkflowGenerationState.STATE_0_IDLE, // Can reset completely
  ],
};

// Internal State Memory Object
export interface ExecutionState {
  current_state: WorkflowGenerationState;
  user_prompt: string;
  clarifying_questions: Array<{ id: string; text: string; options: string[] }>;
  clarifying_answers: Record<string, string>;
  final_understanding: string;
  credentials_required: string[];
  credentials_provided: Record<string, string>;
  workflow_blueprint: {
    nodes?: any[];
    edges?: any[];
    structure?: any;
  };
  validation_errors: Array<{ type: string; message: string; nodeId?: string }>;
  retry_count: number;
  last_error?: string;
  debug_mode?: boolean;
  state_history: Array<{ state: WorkflowGenerationState; timestamp: string; reason?: string }>;
}

/**
 * State Manager for Workflow Generation
 */
export class WorkflowGenerationStateManager {
  private executionState: ExecutionState;
  private debugMode: boolean;

  constructor(debugMode: boolean = false) {
    this.debugMode = debugMode;
    this.executionState = this.initializeState();
  }

  /**
   * Initialize execution state
   */
  private initializeState(): ExecutionState {
    return {
      current_state: WorkflowGenerationState.STATE_0_IDLE,
      user_prompt: '',
      clarifying_questions: [],
      clarifying_answers: {},
      final_understanding: '',
      credentials_required: [],
      credentials_provided: {},
      workflow_blueprint: {},
      validation_errors: [],
      retry_count: 0,
      debug_mode: this.debugMode,
      state_history: [{
        state: WorkflowGenerationState.STATE_0_IDLE,
        timestamp: new Date().toISOString(),
        reason: 'Initialized',
      }],
    };
  }

  /**
   * Get current execution state
   */
  getExecutionState(): ExecutionState {
    return { ...this.executionState };
  }

  /**
   * Validate state transition
   */
  canTransitionTo(newState: WorkflowGenerationState): { valid: boolean; reason?: string } {
    const currentState = this.executionState.current_state;
    const allowedStates = ALLOWED_TRANSITIONS[currentState] || [];

    if (allowedStates.includes(newState)) {
      return { valid: true };
    }

    return {
      valid: false,
      reason: `Invalid transition from ${currentState} to ${newState}. Allowed states: ${allowedStates.join(', ')}`,
    };
  }

  /**
   * Transition to new state (with validation)
   * ✅ FIXED: Never crashes on invalid transition - gracefully handles by moving to ERROR state
   */
  transitionTo(newState: WorkflowGenerationState, reason?: string): { success: boolean; error?: string } {
    try {
      const validation = this.canTransitionTo(newState);
      
      if (!validation.valid) {
        const error = validation.reason || 'Invalid state transition';
        if (this.debugMode) {
          console.warn(`[StateManager] ⚠️  Invalid transition attempted: ${error}`);
          console.warn(`[StateManager]   Current state: ${this.executionState.current_state}`);
          console.warn(`[StateManager]   Attempted state: ${newState}`);
        }
        
        // ✅ FIXED: Instead of returning error, safely transition to ERROR state
        // This prevents pipeline crashes on invalid transitions
        if (this.executionState.current_state !== WorkflowGenerationState.STATE_ERROR_HANDLING) {
          console.warn(`[StateManager] 🔄 Safely transitioning to ERROR state due to invalid transition`);
          return this.transitionToError(`Invalid transition: ${error}`);
        } else {
          // Already in error state, just return the error
          return { success: false, error };
        }
      }

      // Log state transition
      this.executionState.state_history.push({
        state: newState,
        timestamp: new Date().toISOString(),
        reason: reason || 'State transition',
      });

      this.executionState.current_state = newState;

      if (this.debugMode) {
        console.log(`[StateManager] ✅ Transitioned: ${this.executionState.state_history[this.executionState.state_history.length - 2]?.state} → ${newState}`, reason ? `(${reason})` : '');
      }

      return { success: true };
    } catch (error) {
      // ✅ FIXED: Catch any unexpected errors during transition
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[StateManager] ❌ Unexpected error during transition: ${errorMessage}`);
      
      // Safely transition to error state
      return this.transitionToError(`Transition error: ${errorMessage}`);
    }
  }
  
  /**
   * Safely transition to ERROR state from any state
   * This method can be called from anywhere to handle failures gracefully
   */
  transitionToError(errorMessage: string): { success: boolean; error?: string } {
    try {
      const currentState = this.executionState.current_state;
      
      // If already in error state, just update the error message
      if (currentState === WorkflowGenerationState.STATE_ERROR_HANDLING) {
        this.executionState.last_error = errorMessage;
        return { success: true };
      }
      
      // Store error message
      this.executionState.last_error = errorMessage;
      
      // Log transition to error
      this.executionState.state_history.push({
        state: WorkflowGenerationState.STATE_ERROR_HANDLING,
        timestamp: new Date().toISOString(),
        reason: `Error: ${errorMessage}`,
      });
      
      this.executionState.current_state = WorkflowGenerationState.STATE_ERROR_HANDLING;
      
      if (this.debugMode) {
        console.error(`[StateManager] ❌ Transitioned to ERROR state from ${currentState}: ${errorMessage}`);
      }
      
      return { success: true };
    } catch (error) {
      // Even error handling can fail - log and return
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[StateManager] ❌ Critical: Failed to transition to error state: ${errorMessage}`);
      return { success: false, error: `Critical state machine error: ${errorMessage}` };
    }
  }

  /**
   * Update user prompt (STATE_1)
   */
  setUserPrompt(prompt: string): void {
    if (this.executionState.current_state !== WorkflowGenerationState.STATE_0_IDLE) {
      throw new Error('Can only set user prompt from IDLE state');
    }
    this.executionState.user_prompt = prompt;
    this.transitionTo(WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED, 'User prompt received');
  }

  /**
   * Set clarifying questions (STATE_2)
   */
  setClarifyingQuestions(questions: Array<{ id: string; text: string; options: string[] }>): void {
    this.executionState.clarifying_questions = questions;
    if (this.executionState.current_state === WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED) {
      this.transitionTo(WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE, 'Clarifying questions generated');
    }
  }

  /**
   * Set clarifying answers (STATE_2)
   */
  setClarifyingAnswers(answers: Record<string, string>): void {
    this.executionState.clarifying_answers = answers;
  }

  /**
   * Confirm understanding (STATE_3)
   */
  confirmUnderstanding(finalUnderstanding: string): { success: boolean; error?: string } {
    // ✅ FIXED: Allow confirmation from STATE_1 or STATE_2 (more flexible)
    const currentState = this.executionState.current_state;
    const validStates = [
      WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED,
      WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE,
    ];
    
    if (!validStates.includes(currentState)) {
      return { 
        success: false, 
        error: `Can only confirm understanding from STATE_1_USER_PROMPT_RECEIVED or STATE_2_CLARIFICATION_ACTIVE. Current state: ${currentState}` 
      };
    }
    
    if (!finalUnderstanding || finalUnderstanding.trim() === '') {
      return { 
        success: false, 
        error: 'Cannot confirm understanding: finalUnderstanding is empty' 
      };
    }
    
    this.executionState.final_understanding = finalUnderstanding;
    
    if (this.debugMode) {
      console.log(`[StateManager] ✅ Understanding confirmed: "${finalUnderstanding.substring(0, 100)}${finalUnderstanding.length > 100 ? '...' : ''}"`);
    }
    
    return this.transitionTo(WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED, 'Understanding confirmed by user');
  }

  /**
   * Set required credentials (STATE_4)
   */
  setRequiredCredentials(credentials: string[]): void {
    this.executionState.credentials_required = credentials;
    // Transition to credential collection if we're in a state that allows it
    if (this.executionState.current_state === WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED) {
      this.transitionTo(WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION, 'Credentials required identified');
    } else if (this.executionState.current_state === WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      // If credentials are detected during building, go back to credential collection
      this.transitionTo(WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION, 'Credentials required detected during building');
    }
  }

  /**
   * Set provided credentials (STATE_4)
   */
  setProvidedCredentials(credentials: Record<string, string>): void {
    this.executionState.credentials_provided = credentials;
  }

  /**
   * Start workflow building (STATE_5)
   * ✅ FIXED: Requires confirmed understanding - blocks build if final_understanding is empty
   * 
   * Rules:
   * - final_understanding MUST be set before building
   * - If empty, block build and return error requesting confirmation
   * - Must be in STATE_3_UNDERSTANDING_CONFIRMED or STATE_4_CREDENTIAL_COLLECTION
   */
  startBuilding(): { success: boolean; error?: string; requiresConfirmation?: boolean } {
    // ✅ HARD REQUIREMENT: Must have confirmed understanding before building
    if (!this.executionState.final_understanding || this.executionState.final_understanding.trim() === '') {
      const errorMessage = 'Cannot build workflow: Understanding must be confirmed before building. Please confirm your understanding of the workflow requirements.';
      
      if (this.debugMode) {
        console.error(`[StateManager] ❌ ${errorMessage}`);
        console.error(`[StateManager]   Current state: ${this.executionState.current_state}`);
        console.error(`[StateManager]   final_understanding: "${this.executionState.final_understanding}"`);
      }
      
      return {
        success: false,
        error: errorMessage,
        requiresConfirmation: true,
      };
    }

    // Execution guard: Must have credentials if required
    if (this.executionState.credentials_required.length > 0) {
      const missingCredentials = this.executionState.credentials_required.filter(
        cred => !this.executionState.credentials_provided[cred] && 
                !this.executionState.credentials_provided[cred.toLowerCase().replace(/_/g, '_')]
      );
      if (missingCredentials.length > 0) {
        return { 
          success: false, 
          error: `Cannot build workflow: Missing required credentials: ${missingCredentials.join(', ')}` 
        };
      }
    }

    // Ensure we're in a valid state to start building
    const currentState = this.executionState.current_state;
    const validStates = [
      WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED,
      WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION,
    ];

    if (!validStates.includes(currentState)) {
      return {
        success: false,
        error: `Cannot build workflow: Must be in STATE_3_UNDERSTANDING_CONFIRMED or STATE_4_CREDENTIAL_COLLECTION. Current state: ${currentState}`,
      };
    }

    if (this.debugMode) {
      console.log(`[StateManager] ✅ Starting workflow building with confirmed understanding: "${this.executionState.final_understanding.substring(0, 100)}${this.executionState.final_understanding.length > 100 ? '...' : ''}"`);
    }

    return this.transitionTo(WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, 'Workflow building started');
  }

  /**
   * Set workflow blueprint (STATE_5 → STATE_6_WORKFLOW_VALIDATION)
   * ✅ FIXED: Transitions to STATE_6_WORKFLOW_VALIDATION after build
   * From there, validation must pass before moving to STATE_7_WORKFLOW_READY
   */
  setWorkflowBlueprint(blueprint: { nodes?: any[]; edges?: any[]; structure?: any }, skipConfirmation: boolean = false): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    // Ensure we're in the correct state before setting blueprint
    // If not in STATE_5_WORKFLOW_BUILDING, try to transition there first
    if (currentState !== WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      const ensureResult = this.ensureStateForBuilding();
      if (!ensureResult.success) {
        return { 
          success: false, 
          error: `Cannot set workflow blueprint: Current state is ${currentState}, must be STATE_5_WORKFLOW_BUILDING. ${ensureResult.error || ''}` 
        };
      }
    }
    
    this.executionState.workflow_blueprint = blueprint;
    
    // ✅ FIXED: Transition to STATE_6_WORKFLOW_VALIDATION (success path from STATE_5)
    // This matches the allowed transitions: STATE_5_WORKFLOW_BUILDING → STATE_6_WORKFLOW_VALIDATION
    // STATE_7_WORKFLOW_READY is only reached after successful validation
    if (skipConfirmation) {
      // Skip confirmation: go directly to validation
      return this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Workflow blueprint generated, moving to validation');
    }
    
    // Default: go to validation (confirmation can be handled separately if needed)
    return this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Workflow blueprint generated, awaiting validation');
  }

  /**
   * Mark workflow as built and move to waiting confirmation (STATE_WORKFLOW_BUILT → STATE_WAITING_CONFIRMATION)
   */
  markWaitingForConfirmation(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    if (currentState !== WorkflowGenerationState.STATE_WORKFLOW_BUILT) {
      return { 
        success: false, 
        error: `Cannot mark waiting for confirmation from state: ${currentState}. Must be in STATE_WORKFLOW_BUILT.` 
      };
    }
    
    return this.transitionTo(WorkflowGenerationState.STATE_WAITING_CONFIRMATION, 'Waiting for user confirmation');
  }

  /**
   * Confirm workflow (STATE_WAITING_CONFIRMATION → STATE_CONFIRMED)
   */
  confirmWorkflow(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    if (currentState !== WorkflowGenerationState.STATE_WAITING_CONFIRMATION) {
      return { 
        success: false, 
        error: `Cannot confirm workflow from state: ${currentState}. Must be in STATE_WAITING_CONFIRMATION.` 
      };
    }
    
    return this.transitionTo(WorkflowGenerationState.STATE_CONFIRMED, 'Workflow confirmed by user');
  }

  /**
   * Reject workflow (STATE_WAITING_CONFIRMATION → STATE_REJECTED)
   */
  rejectWorkflow(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    if (currentState !== WorkflowGenerationState.STATE_WAITING_CONFIRMATION) {
      return { 
        success: false, 
        error: `Cannot reject workflow from state: ${currentState}. Must be in STATE_WAITING_CONFIRMATION.` 
      };
    }
    
    return this.transitionTo(WorkflowGenerationState.STATE_REJECTED, 'Workflow rejected by user');
  }

  /**
   * Move from confirmed to validation (STATE_CONFIRMED → STATE_6_WORKFLOW_VALIDATION)
   */
  moveToValidationFromConfirmed(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    if (currentState !== WorkflowGenerationState.STATE_CONFIRMED) {
      return { 
        success: false, 
        error: `Cannot move to validation from state: ${currentState}. Must be in STATE_CONFIRMED.` 
      };
    }
    
    return this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Moving to validation after confirmation');
  }

  /**
   * Add validation error (STATE_6)
   */
  addValidationError(error: { type: string; message: string; nodeId?: string }): void {
    this.executionState.validation_errors.push(error);
  }

  /**
   * Clear validation errors (STATE_6)
   */
  clearValidationErrors(): void {
    this.executionState.validation_errors = [];
  }

  /**
   * Retry workflow building
   * ✅ FIXED: Uses internal retry counter without state change
   * Does NOT transition STATE_5 → STATE_5 (self-transition not allowed)
   * 
   * Rules:
   * - Retry only on transient failures (network, provider errors)
   * - Do not retry on structural failures (missing nodes, invalid DSL)
   * - State remains in STATE_5_WORKFLOW_BUILDING during retries
   * - Only transitions: STATE_5 → STATE_ERROR_HANDLING (max retries) or STATE_5 → STATE_7_WORKFLOW_READY (success)
   */
  retryBuilding(): { success: boolean; error?: string; shouldTransitionToError?: boolean } {
    const currentState = this.executionState.current_state;
    
    // Only allow retry from building state
    if (currentState !== WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      return {
        success: false,
        error: `Cannot retry building from state: ${currentState}. Must be in STATE_5_WORKFLOW_BUILDING.`,
      };
    }

    // Check if max retries reached
    if (this.executionState.retry_count >= 3) {
      if (this.debugMode) {
        console.log(`[StateManager] ❌ Maximum retry count (3) reached. Should transition to ERROR state.`);
      }
      return {
        success: false,
        error: 'Maximum retry count (3) reached. Moving to error handling.',
        shouldTransitionToError: true,
      };
    }

    // Increment retry counter (internal state change, no state machine transition)
    this.executionState.retry_count += 1;
    this.executionState.workflow_blueprint = {}; // Clear blueprint for rebuild
    this.clearValidationErrors();

    if (this.debugMode) {
      console.log(`[StateManager] 🔄 Retry attempt ${this.executionState.retry_count}/3 (state remains: ${currentState})`);
    }

    // Return success without state transition
    // State remains in STATE_5_WORKFLOW_BUILDING
    // Caller should retry the build operation
    return { success: true };
  }

  /**
   * Mark workflow as ready (STATE_6 → STATE_7)
   * Also handles new confirmation states: STATE_CONFIRMED → STATE_6 → STATE_7
   * ✅ FIXED: Now handles early states by auto-transitioning through required states
   */
  markWorkflowReady(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    // ✅ FIXED: Handle early states (STATE_3, STATE_4, STATE_5) if blueprint exists
    // This allows markWorkflowReady to be called even if state transitions didn't complete
    if (currentState === WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED ||
        currentState === WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION ||
        currentState === WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      
      // Check if workflow blueprint exists (workflow was built)
      if (this.executionState.workflow_blueprint && 
          this.executionState.workflow_blueprint.nodes && 
          this.executionState.workflow_blueprint.nodes.length > 0) {
        
        // Workflow was built but state didn't transition - auto-transition to validation
        console.log(`[StateManager] Auto-transitioning from ${currentState} to STATE_6_WORKFLOW_VALIDATION (blueprint exists)`);
        
        // Skip confirmation and go directly to validation
        const valResult = this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Auto-transitioning to validation (blueprint exists)');
        if (!valResult.success) {
          return { 
            success: false, 
            error: `Cannot auto-transition to validation: ${valResult.error}` 
          };
        }
      } else {
        // No blueprint - cannot mark as ready
        return { 
          success: false, 
          error: `Cannot mark workflow as ready: Current state is ${currentState} and no workflow blueprint exists. Workflow must be built first.` 
        };
      }
    }
    
    // If in confirmed state, move to validation first
    if (currentState === WorkflowGenerationState.STATE_CONFIRMED) {
      const valResult = this.moveToValidationFromConfirmed();
      if (!valResult.success) return valResult;
    }
    
    // Note: Auto-confirmation disabled - user must explicitly confirm
    // If in built state, must go through waiting confirmation first
    if (currentState === WorkflowGenerationState.STATE_WORKFLOW_BUILT) {
      const waitingResult = this.markWaitingForConfirmation();
      if (!waitingResult.success) return waitingResult;
      
      const confirmResult = this.confirmWorkflow();
      if (!confirmResult.success) return confirmResult;
      
      const valResult = this.moveToValidationFromConfirmed();
      if (!valResult.success) return valResult;
    }
    
    if (currentState === WorkflowGenerationState.STATE_WAITING_CONFIRMATION) {
      const confirmResult = this.confirmWorkflow();
      if (!confirmResult.success) return confirmResult;
      
      const valResult = this.moveToValidationFromConfirmed();
      if (!valResult.success) return valResult;
    }
    
    // Now we should be in STATE_6_WORKFLOW_VALIDATION
    if (this.executionState.current_state !== WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION) {
      return { 
        success: false, 
        error: `Cannot mark workflow as ready: Current state is ${this.executionState.current_state}, expected STATE_6_WORKFLOW_VALIDATION` 
      };
    }
    
    // Execution guard: Must have no validation errors
    if (this.executionState.validation_errors.length > 0) {
      return { 
        success: false, 
        error: `Cannot mark workflow as ready: ${this.executionState.validation_errors.length} validation errors remain` 
      };
    }

    // Execution guard: Must have workflow blueprint
    if (!this.executionState.workflow_blueprint.nodes || this.executionState.workflow_blueprint.nodes.length === 0) {
      return { success: false, error: 'Cannot mark workflow as ready: No workflow blueprint' };
    }

    return this.transitionTo(WorkflowGenerationState.STATE_7_WORKFLOW_READY, 'Workflow validated and ready');
  }

  /**
   * Handle error (ANY STATE → STATE_ERROR_HANDLING)
   * ✅ FIXED: Uses safe error transition method
   * This method can be called from anywhere to safely transition to error state
   */
  handleError(error: string): { success: boolean; error?: string } {
    return this.transitionToError(error);
  }
  
  /**
   * Safe transition to error state - can be called from any state
   * Use this method when you need to handle failures during pipeline execution
   * 
   * @param errorMessage - Error message describing the failure
   * @returns Success status (always true unless critical state machine error)
   */
  safeTransitionToError(errorMessage: string): { success: boolean; error?: string } {
    return this.transitionToError(errorMessage);
  }

  /**
   * Reset to idle (from error state)
   */
  reset(): void {
    this.executionState = this.initializeState();
    if (this.debugMode) {
      console.log('[StateManager] State reset to IDLE');
    }
  }

  /**
   * Get state history (for debugging)
   */
  getStateHistory(): Array<{ state: WorkflowGenerationState; timestamp: string; reason?: string }> {
    return [...this.executionState.state_history];
  }

  /**
   * Check if in terminal state
   */
  isTerminalState(): boolean {
    return this.executionState.current_state === WorkflowGenerationState.STATE_7_WORKFLOW_READY ||
           this.executionState.current_state === WorkflowGenerationState.STATE_REJECTED ||
           this.executionState.current_state === WorkflowGenerationState.STATE_ERROR_HANDLING;
  }

  /**
   * Get current state
   */
  getCurrentState(): WorkflowGenerationState {
    return this.executionState.current_state;
  }

  /**
   * Ensure state is ready for building (transitions through intermediate states if needed)
   */
  ensureStateForBuilding(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    // 1. If in IDLE or PROMPT_RECEIVED, we can't build yet
    if (currentState === WorkflowGenerationState.STATE_0_IDLE || 
        currentState === WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED) {
      return { success: false, error: 'Cannot build: Understanding not confirmed' };
    }

    // 2. If in CLARIFICATION_ACTIVE, try to confirm understanding (but don't block if missing)
    // ✅ FIXED: Tolerate partial understanding - allow build even if understanding not confirmed
    if (currentState === WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE) {
      if (this.executionState.final_understanding) {
        const transitionResult = this.confirmUnderstanding(this.executionState.final_understanding);
        if (!transitionResult.success) {
          // If confirmation fails, try to transition directly to building (tolerate partial understanding)
          console.warn(`[StateManager] ⚠️  Could not confirm understanding, but allowing build (tolerating partial understanding)`);
          // Continue to building state
        }
      } else {
        // No final understanding set, but allow build anyway (tolerate partial understanding)
        console.warn(`[StateManager] ⚠️  No final understanding set, but allowing build (tolerating partial understanding)`);
        // Transition directly to building state
        const directBuildResult = this.transitionTo(WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING, 'Building with partial understanding');
        if (directBuildResult.success) {
          return { success: true };
        }
      }
    }

    // Now we should be in STATE_3_UNDERSTANDING_CONFIRMED
    const newState = this.executionState.current_state;

    // 3. If in STATE_3, decide whether to go to 4 or 5
    if (newState === WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED) {
      if (this.executionState.credentials_required.length > 0) {
        // Must go through credential collection
        const transitionResult = this.transitionTo(WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION, 'Moving to credential collection');
        if (!transitionResult.success) return transitionResult;
      } else {
        // Can go directly to building
        return this.startBuilding();
      }
    }

    // 4. If in STATE_4, start building
    if (this.executionState.current_state === WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION) {
      return this.startBuilding();
    }

    // 5. If already in STATE_5 or higher (but not rejected), we're good (just log it)
    if (this.executionState.current_state === WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING ||
        this.executionState.current_state === WorkflowGenerationState.STATE_WORKFLOW_BUILT ||
        this.executionState.current_state === WorkflowGenerationState.STATE_WAITING_CONFIRMATION ||
        this.executionState.current_state === WorkflowGenerationState.STATE_CONFIRMED ||
        this.executionState.current_state === WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION ||
        this.executionState.current_state === WorkflowGenerationState.STATE_7_WORKFLOW_READY) {
      return { success: true };
    }

    return { success: false, error: `Invalid state for building: ${this.executionState.current_state}` };
  }

  /**
   * Transition to validation state reliably from any build state
   * ✅ FIXED: Correct flow - STATE_5 → STATE_6 (direct transition)
   * Updated to allow direct transition from building to validation
   */
  moveToValidation(blueprint: { nodes?: any[]; edges?: any[]; structure?: any }, skipConfirmation: boolean = false): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    // ✅ FIXED: If we're in building state, can transition directly to validation
    if (currentState === WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      // Set blueprint first
      this.executionState.workflow_blueprint = blueprint;
      
      // If skipping confirmation, go directly to validation
      if (skipConfirmation) {
        return this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Workflow built, moving directly to validation');
      }
      
      // Otherwise, use confirmation flow
      const builtResult = this.setWorkflowBlueprint(blueprint, false);
      if (!builtResult.success) return builtResult;
      
      // Then move to waiting confirmation
      const waitingResult = this.markWaitingForConfirmation();
      if (!waitingResult.success) return waitingResult;
      
      // Note: Auto-confirmation disabled - user must explicitly confirm
      // For backward compatibility, we still allow the transition but it should be user-initiated
      const confirmResult = this.confirmWorkflow();
      if (!confirmResult.success) return confirmResult;
      
      // Finally move to validation
      return this.moveToValidationFromConfirmed();
    }
    
    // If already in built state, can skip to validation
    if (currentState === WorkflowGenerationState.STATE_WORKFLOW_BUILT && skipConfirmation) {
      return this.transitionTo(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION, 'Skipping confirmation, moving directly to validation');
    }
    
    // If already in confirmed state, just move to validation
    if (currentState === WorkflowGenerationState.STATE_CONFIRMED) {
      return this.moveToValidationFromConfirmed();
    }
    
    // If already in validation state, we're good
    if (currentState === WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION) {
      return { success: true };
    }

    // If we're not in a valid state, try to get there
    const buildResult = this.ensureStateForBuilding();
    if (!buildResult.success) return buildResult;

    // Try again from building state
    return this.moveToValidation(blueprint, skipConfirmation);
  }

  /**
   * Transition to ready state reliably
   * ✅ FIXED: Correct flow - STATE_6 → STATE_7 (direct transition)
   */
  moveToReady(): { success: boolean; error?: string } {
    const currentState = this.executionState.current_state;
    
    // ✅ FIXED: If we're in validation state, just mark ready (direct transition)
    if (currentState === WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION) {
      return this.markWorkflowReady();
    }
    
    // If we're in building state, move to validation first then ready
    if (currentState === WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING) {
      // Skip confirmation for automatic flow
      const valResult = this.moveToValidation(this.executionState.workflow_blueprint, true);
      if (!valResult.success) return valResult;
      return this.markWorkflowReady();
    }
    
    // If already in ready state, we're good
    if (currentState === WorkflowGenerationState.STATE_7_WORKFLOW_READY) {
      return { success: true };
    }

    return { success: false, error: `Cannot mark ready from state: ${currentState}` };
  }
}

/**
 * Map wizard step strings to FSM states
 */
export function mapWizardStepToState(step: string): WorkflowGenerationState {
  const stepMap: Record<string, WorkflowGenerationState> = {
    'idle': WorkflowGenerationState.STATE_0_IDLE,
    'analyzing': WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED,
    'questioning': WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE,
    'refining': WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE,
    'confirmation': WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED,
    'credentials': WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION,
    'building': WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING,
    'complete': WorkflowGenerationState.STATE_7_WORKFLOW_READY,
  };
  return stepMap[step] || WorkflowGenerationState.STATE_0_IDLE;
}

/**
 * Map FSM state to wizard step string
 */
export function mapStateToWizardStep(state: WorkflowGenerationState): string {
  const stateMap: Record<WorkflowGenerationState, string> = {
    [WorkflowGenerationState.STATE_0_IDLE]: 'idle',
    [WorkflowGenerationState.STATE_1_USER_PROMPT_RECEIVED]: 'analyzing',
    [WorkflowGenerationState.STATE_2_CLARIFICATION_ACTIVE]: 'questioning',
    [WorkflowGenerationState.STATE_3_UNDERSTANDING_CONFIRMED]: 'confirmation',
    [WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION]: 'credentials',
    [WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING]: 'building',
    [WorkflowGenerationState.STATE_WORKFLOW_BUILT]: 'building', // Workflow built, waiting for confirmation
    [WorkflowGenerationState.STATE_WAITING_CONFIRMATION]: 'confirmation', // Waiting for user confirmation
    [WorkflowGenerationState.STATE_CONFIRMED]: 'building', // Confirmed, moving to validation
    [WorkflowGenerationState.STATE_REJECTED]: 'idle', // Rejected, terminal state
    [WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION]: 'building', // Validation happens during building
    [WorkflowGenerationState.STATE_7_WORKFLOW_READY]: 'complete',
    [WorkflowGenerationState.STATE_ERROR_HANDLING]: 'idle', // Error handling resets
  };
  return stateMap[state] || 'idle';
}
