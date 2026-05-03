import type { NodeDoc } from '../types';

export const retryDoc: NodeDoc = {
  "slug": "retry",
  "displayName": "Retry",
  "category": "Logic",
  "logoUrl": "/icons/nodes/retry.svg",
  "description": "Retries a branch on failure up to a maximum number of attempts Use this node when a workflow needs retry behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Retry is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Retry node using the configured input fields.",
          "fields": [
            {
              "name": "Max Attempts",
              "internalKey": "maxAttempts",
              "type": "number",
              "required": true,
              "description": "Maximum number of retry attempts",
              "example": "3",
              "placeholder": "3",
              "defaultValue": "3"
            },
            {
              "name": "Delay Between",
              "internalKey": "delayBetween",
              "type": "number",
              "required": false,
              "description": "Delay between retries (in milliseconds)",
              "example": "1000",
              "defaultValue": "1000"
            },
            {
              "name": "Backoff",
              "internalKey": "backoff",
              "type": "select",
              "required": false,
              "description": "Backoff strategy (none, linear, exponential)",
              "example": "none",
              "defaultValue": "none",
              "options": [
                "None",
                "Linear",
                "Exponential"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "attempts": 1,
            "lastError": "lastError"
          },
          "outputDescription": "success: Value returned by the Retry node.\nattempts: Value returned by the Retry node.\nlastError: Value returned by the Retry node.",
          "usageExample": {
            "scenario": "Use Retry in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Max Attempts": "3",
              "Delay Between": "1000",
              "Backoff": "none"
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
