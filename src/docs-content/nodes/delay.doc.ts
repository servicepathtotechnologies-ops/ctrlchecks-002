import type { NodeDoc } from '../types';

export const delayDoc: NodeDoc = {
  "slug": "delay",
  "displayName": "Delay",
  "category": "Utility",
  "logoUrl": "/icons/nodes/delay.svg",
  "description": "Pause the workflow execution for a specified amount of time Use this node when a workflow needs delay behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Delay is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Delay node using the configured input fields.",
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
              "required": false,
              "description": "Unit of time (milliseconds, seconds, minutes)",
              "example": "milliseconds",
              "defaultValue": "milliseconds",
              "options": [
                "Milliseconds",
                "Seconds",
                "Minutes"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "waitedMs": 1,
            "originalInput": {}
          },
          "outputDescription": "success: Value returned by the Delay node.\nwaitedMs: Value returned by the Delay node.\noriginalInput: Value returned by the Delay node.",
          "usageExample": {
            "scenario": "Use Delay in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Duration": "1000",
              "Unit": "milliseconds"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "queue_push",
    "queue_consume"
  ]
};
