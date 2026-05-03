import type { NodeDoc } from '../types';

export const manualTriggerDoc: NodeDoc = {
  "slug": "manual_trigger",
  "displayName": "Manual Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/manual_trigger.svg",
  "description": "Workflow executes when user manually triggers it Use this node when a workflow needs manual trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Manual Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Manual Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Input Data",
              "internalKey": "inputData",
              "type": "json",
              "required": false,
              "description": "Optional input data when triggered manually",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Manual Trigger node.\nstructure: Value returned by the Manual Trigger node.\ndefaultValue: Value returned by the Manual Trigger node.",
          "usageExample": {
            "scenario": "Use Manual Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Input Data": "{\"key\":\"value\"}"
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
    "schedule",
    "webhook",
    "interval",
    "chat_trigger",
    "form"
  ]
};
