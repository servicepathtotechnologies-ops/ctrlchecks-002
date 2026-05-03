import type { NodeDoc } from '../types';

export const stopAndErrorDoc: NodeDoc = {
  "slug": "stop_and_error",
  "displayName": "Stop And Error",
  "category": "Logic",
  "logoUrl": "/icons/nodes/stop_and_error.svg",
  "description": "Stop workflow execution with error message Use this node when a workflow needs stop and error behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Stop And Error is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Stop And Error node using the configured input fields.",
          "fields": [
            {
              "name": "Error Message",
              "internalKey": "errorMessage",
              "type": "string",
              "required": true,
              "description": "Error message",
              "example": "Validation failed",
              "placeholder": "Validation failed"
            }
          ],
          "outputExample": {
            "type": "type"
          },
          "outputDescription": "type: Value returned by the Stop And Error node.",
          "usageExample": {
            "scenario": "Use Stop And Error in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Error Message": "Validation failed"
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
