import type { NodeDoc } from '../types';

export const delayDoc: NodeDoc = {
  "slug": "delay",
  "displayName": "Delay",
  "category": "Utility",
  "logoUrl": "/icons/nodes/delay.svg",
  "description": "Pause the workflow execution for a specified amount of time",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Delay is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Pause workflow execution for a fixed number of seconds.",
          "fields": [
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": true,
              "description": "Time to delay (in milliseconds)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Unit",
              "internalKey": "unit",
              "type": "select",
              "description": "Unit of time (milliseconds, seconds, minutes)",
              "example": "milliseconds",
              "placeholder": "milliseconds",
              "defaultValue": "milliseconds",
              "options": [
                "Milliseconds",
                "Seconds",
                "Minutes"
              ]
            }
          ],
          "outputExample": {
            "delayed": true,
            "delayMs": 5000,
            "resumedAt": "2025-01-15T10:00:05.000Z"
          },
          "outputDescription": "delayed: true after the delay completes. delayMs: How long the workflow paused in milliseconds. resumedAt: ISO timestamp when execution resumed.",
          "usageExample": {
            "scenario": "Wait 5 seconds after sending a webhook before polling for the result",
            "inputValues": {
              "delay": "5000"
            },
            "expectedOutput": "Workflow pauses for 5 seconds, then continues to the next node."
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
