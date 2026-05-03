import type { NodeDoc } from '../types';

export const timeoutDoc: NodeDoc = {
  "slug": "timeout",
  "displayName": "Timeout",
  "category": "Logic",
  "logoUrl": "/icons/nodes/timeout.svg",
  "description": "Fails the workflow if execution takes longer than specified time Use this node when a workflow needs timeout behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Timeout is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Timeout node using the configured input fields.",
          "fields": [
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": true,
              "description": "Maximum allowed time (in milliseconds)",
              "example": "5000",
              "placeholder": "5000"
            }
          ],
          "outputExample": {
            "success": true,
            "timedOut": true,
            "elapsedMs": 1
          },
          "outputDescription": "success: Value returned by the Timeout node.\ntimedOut: Value returned by the Timeout node.\nelapsedMs: Value returned by the Timeout node.",
          "usageExample": {
            "scenario": "Use Timeout in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Limit": "5000"
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
