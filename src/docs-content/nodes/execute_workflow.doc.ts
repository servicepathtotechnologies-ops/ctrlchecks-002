import type { NodeDoc } from '../types';

export const executeWorkflowDoc: NodeDoc = {
  "slug": "execute_workflow",
  "displayName": "Execute Workflow",
  "category": "Logic",
  "logoUrl": "/icons/nodes/execute_workflow.svg",
  "description": "Executes another workflow and returns its result",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: ID of the workflow to execute for Execute Workflow / Execute.\nWhere to find it: Open the item in Execute Workflow and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "123e4567-e89b-12d3-a456-426614174000",
              "example": "123e4567-e89b-12d3-a456-426614174000"
            },
            {
              "name": "Input",
              "internalKey": "input",
              "type": "json",
              "required": false,
              "description": "Input data to pass to the sub-workflow",
              "helpText": "What this field is: Input data to pass to the sub-workflow for Execute Workflow / Execute.\nHow to fill it: Enter valid JSON in the format Execute Workflow expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.input}} or pick the value from the data picker.",
              "placeholder": "{{$json}}",
              "example": "{{$json}}"
            },
            {
              "name": "Wait For Completion",
              "internalKey": "waitForCompletion",
              "type": "boolean",
              "required": false,
              "description": "Wait for the sub-workflow to finish",
              "helpText": "What this field is: An on/off choice for wait for completion in Execute Workflow / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Execute Workflow to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
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
