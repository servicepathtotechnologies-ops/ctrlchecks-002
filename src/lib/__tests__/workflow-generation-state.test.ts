/**
 * Tests for WorkflowGenerationStateManager
 */

import { 
  WorkflowGenerationState, 
  WorkflowGenerationStateManager,
  ALLOWED_TRANSITIONS 
} from '../workflow-generation-state';

describe('WorkflowGenerationStateManager', () => {
  let stateManager: WorkflowGenerationStateManager;

  beforeEach(() => {
    stateManager = new WorkflowGenerationStateManager(true); // Enable debug mode
  });

  describe('New State Transitions', () => {
    it('should transition from STATE_5_WORKFLOW_BUILDING to STATE_WORKFLOW_BUILT', () => {
      // Setup: Move to building state
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();

      // Test: Set workflow blueprint should move to STATE_WORKFLOW_BUILT
      const result = stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_WORKFLOW_BUILT);
    });

    it('should transition from STATE_WORKFLOW_BUILT to STATE_WAITING_CONFIRMATION', () => {
      // Setup: Move to built state
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });

      // Test: Mark waiting for confirmation
      const result = stateManager.markWaitingForConfirmation();
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_WAITING_CONFIRMATION);
    });

    it('should transition from STATE_WAITING_CONFIRMATION to STATE_CONFIRMED', () => {
      // Setup: Move to waiting confirmation state
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });
      stateManager.markWaitingForConfirmation();

      // Test: Confirm workflow
      const result = stateManager.confirmWorkflow();
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_CONFIRMED);
    });

    it('should transition from STATE_WAITING_CONFIRMATION to STATE_REJECTED', () => {
      // Setup: Move to waiting confirmation state
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });
      stateManager.markWaitingForConfirmation();

      // Test: Reject workflow
      const result = stateManager.rejectWorkflow();
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_REJECTED);
      expect(stateManager.isTerminalState()).toBe(true);
    });

    it('should transition from STATE_CONFIRMED to STATE_6_WORKFLOW_VALIDATION', () => {
      // Setup: Move to confirmed state
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });
      stateManager.markWaitingForConfirmation();
      stateManager.confirmWorkflow();

      // Test: Move to validation
      const result = stateManager.moveToValidationFromConfirmed();
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION);
    });
  });

  describe('Invalid Transitions', () => {
    it('should reject transition from STATE_WORKFLOW_BUILT to STATE_CONFIRMED (must go through STATE_WAITING_CONFIRMATION)', () => {
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });

      // Try to confirm directly from built state (should fail)
      const result = stateManager.confirmWorkflow();
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('Must be in STATE_WAITING_CONFIRMATION');
    });

    it('should reject transition from STATE_WAITING_CONFIRMATION to STATE_6_WORKFLOW_VALIDATION (must go through STATE_CONFIRMED)', () => {
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();
      stateManager.setWorkflowBlueprint({ nodes: [], edges: [] });
      stateManager.markWaitingForConfirmation();

      // Try to move to validation directly from waiting (should fail)
      const result = stateManager.moveToValidationFromConfirmed();
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('Must be in STATE_CONFIRMED');
    });
  });

  describe('State Transition Rules', () => {
    it('should have correct allowed transitions for STATE_5_WORKFLOW_BUILDING', () => {
      const allowed = ALLOWED_TRANSITIONS[WorkflowGenerationState.STATE_5_WORKFLOW_BUILDING];
      
      expect(allowed).toContain(WorkflowGenerationState.STATE_WORKFLOW_BUILT);
      expect(allowed).toContain(WorkflowGenerationState.STATE_4_CREDENTIAL_COLLECTION);
      expect(allowed).not.toContain(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION);
    });

    it('should have correct allowed transitions for STATE_WORKFLOW_BUILT', () => {
      const allowed = ALLOWED_TRANSITIONS[WorkflowGenerationState.STATE_WORKFLOW_BUILT];
      
      expect(allowed).toContain(WorkflowGenerationState.STATE_WAITING_CONFIRMATION);
      expect(allowed.length).toBe(1);
    });

    it('should have correct allowed transitions for STATE_WAITING_CONFIRMATION', () => {
      const allowed = ALLOWED_TRANSITIONS[WorkflowGenerationState.STATE_WAITING_CONFIRMATION];
      
      expect(allowed).toContain(WorkflowGenerationState.STATE_CONFIRMED);
      expect(allowed).toContain(WorkflowGenerationState.STATE_REJECTED);
      expect(allowed.length).toBe(2);
    });

    it('should have correct allowed transitions for STATE_CONFIRMED', () => {
      const allowed = ALLOWED_TRANSITIONS[WorkflowGenerationState.STATE_CONFIRMED];
      
      expect(allowed).toContain(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION);
      expect(allowed.length).toBe(1);
    });

    it('should have STATE_REJECTED as terminal state', () => {
      const allowed = ALLOWED_TRANSITIONS[WorkflowGenerationState.STATE_REJECTED];
      
      expect(allowed.length).toBe(0);
    });
  });

  describe('Complete Flow', () => {
    it('should complete full flow: BUILDING → BUILT → WAITING → CONFIRMED → VALIDATION', () => {
      // Setup
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();

      // Step 1: BUILDING → BUILT
      let result = stateManager.setWorkflowBlueprint({ nodes: [{ id: '1' }], edges: [] });
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_WORKFLOW_BUILT);

      // Step 2: BUILT → WAITING
      result = stateManager.markWaitingForConfirmation();
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_WAITING_CONFIRMATION);

      // Step 3: WAITING → CONFIRMED
      result = stateManager.confirmWorkflow();
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_CONFIRMED);

      // Step 4: CONFIRMED → VALIDATION
      result = stateManager.moveToValidationFromConfirmed();
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION);
    });

    it('should handle rejection flow: BUILDING → BUILT → WAITING → REJECTED', () => {
      // Setup
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();

      // Step 1: BUILDING → BUILT
      let result = stateManager.setWorkflowBlueprint({ nodes: [{ id: '1' }], edges: [] });
      expect(result.success).toBe(true);

      // Step 2: BUILT → WAITING
      result = stateManager.markWaitingForConfirmation();
      expect(result.success).toBe(true);

      // Step 3: WAITING → REJECTED
      result = stateManager.rejectWorkflow();
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_REJECTED);
      expect(stateManager.isTerminalState()).toBe(true);
    });
  });

  describe('moveToValidation backward compatibility', () => {
    it('should handle moveToValidation from STATE_5_WORKFLOW_BUILDING', () => {
      // Setup
      stateManager.setUserPrompt('test prompt');
      stateManager.setClarifyingQuestions([]);
      stateManager.confirmUnderstanding('test understanding');
      stateManager.startBuilding();

      // Test: moveToValidation should handle the full flow
      const result = stateManager.moveToValidation({ nodes: [{ id: '1' }], edges: [] });
      
      expect(result.success).toBe(true);
      expect(stateManager.getCurrentState()).toBe(WorkflowGenerationState.STATE_6_WORKFLOW_VALIDATION);
    });
  });
});
