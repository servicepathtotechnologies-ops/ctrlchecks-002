import type { NodeDoc } from '../types';

export const executeWorkflowDoc: NodeDoc = {
  "slug": "execute_workflow",
  "displayName": "Execute Workflow",
  "category": "Logic",
  "logoUrl": "/icons/nodes/execute_workflow.svg",
  "description": "Executes another workflow and returns its result",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Execute Workflow is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Call another workflow and wait for its result.",
          "fields": [
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": true,
              "description": "ID of the workflow to execute",
              "example": "123e4567-e89b-12d3-a456-426614174000",
              "placeholder": "123e4567-e89b-12d3-a456-426614174000"
            },
            {
              "name": "Input",
              "internalKey": "input",
              "type": "json",
              "description": "Input data to pass to the sub-workflow",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Wait For Completion",
              "internalKey": "waitForCompletion",
              "type": "boolean",
              "description": "Wait for the sub-workflow to finish",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "result": {
              "success": true,
              "processedCount": 42
            },
            "calledWorkflowId": "wf_sub123",
            "duration": 1250
          },
          "outputDescription": "result: The data returned by the called workflow's Return node. calledWorkflowId: The ID of the sub-workflow. duration: How long the sub-workflow took in milliseconds.",
          "usageExample": {
            "scenario": "Call a reusable \"send-notification\" sub-workflow from multiple workflows",
            "inputValues": {
              "workflowId": "{{$env.NOTIFY_WORKFLOW_ID}}",
              "inputData": "{\"userId\": \"{{$json.userId}}\", \"message\": \"{{$json.message}}\"}"
            },
            "expectedOutput": "The sub-workflow runs and returns its result in `{{$json.result}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an upstream expression resolved to an empty value.",
      "fix": "Open the node, fill every required field, and verify the upstream node output before running."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node documentation."
    }
  ],
  "relatedNodes": []
};
