import type { NodeDoc } from '../types';

export const executeWorkflowDoc: NodeDoc = {
  "slug": "execute_workflow",
  "displayName": "Execute Workflow",
  "category": "Logic",
  "logoUrl": "/icons/nodes/execute_workflow.svg",
  "description": "Executes another workflow and returns its result Use this node when a workflow needs execute workflow behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Execute Workflow is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Execute Workflow node using the configured input fields.",
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
              "required": false,
              "description": "Input data to pass to the sub-workflow",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Wait For Completion",
              "internalKey": "waitForCompletion",
              "type": "boolean",
              "required": false,
              "description": "Wait for the sub-workflow to finish",
              "example": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "success": true,
            "result": "result",
            "workflowId": "workflowId"
          },
          "outputDescription": "success: Value returned by the Execute Workflow node.\nresult: Value returned by the Execute Workflow node.\nworkflowId: Value returned by the Execute Workflow node.",
          "usageExample": {
            "scenario": "Use Execute Workflow in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Workflow Id": "123e4567-e89b-12d3-a456-426614174000",
              "Input": "{{$json}}",
              "Wait For Completion": "true"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an expression resolved to an empty value.",
      "fix": "Open the node, fill the required field, and inspect upstream output before running again."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node."
    }
  ],
  "relatedNodes": [
    "function",
    "function_item",
    "if_else",
    "switch",
    "merge"
  ]
};
