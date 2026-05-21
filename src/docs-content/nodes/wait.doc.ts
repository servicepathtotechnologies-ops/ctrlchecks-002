import type { NodeDoc } from '../types';

export const waitDoc: NodeDoc = {
  "slug": "wait",
  "displayName": "Wait",
  "category": "Logic",
  "logoUrl": "/icons/nodes/wait.svg",
  "description": "Pause workflow execution",
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
      "description": "Wait is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Pause the workflow until a specific condition is met or a timeout expires.",
          "fields": [
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": true,
              "description": "Wait duration value",
              "helpText": "What this field is: How long to pause the workflow.\nExample: 60 seconds = 1 minute pause before continuing.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Unit",
              "internalKey": "unit",
              "type": "string",
              "required": false,
              "description": "Duration unit",
              "helpText": "What this field is: Duration unit for Wait / Execute.\nHow to fill it: Enter the unit value requested by Wait, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.unit}} or pick the value from the data picker.",
              "placeholder": "milliseconds",
              "example": "milliseconds",
              "defaultValue": "milliseconds"
            }
          ],
          "outputExample": {
            "resumed": true,
            "reason": "condition_met",
            "waitedMs": 3500
          },
          "outputDescription": "resumed: true when the wait is over. reason: Why it resumed (condition_met or timeout). waitedMs: How long it actually waited.",
          "usageExample": {
            "scenario": "Wait until a payment status changes to \"paid\" before sending a receipt",
            "inputValues": {
              "condition": "{{$json.status}} === \"paid\"",
              "pollIntervalMs": "1000",
              "timeoutMs": "30000"
            },
            "expectedOutput": "Workflow resumes when `status` becomes \"paid\" or times out after 30 seconds."
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
