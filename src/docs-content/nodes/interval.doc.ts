import type { NodeDoc } from '../types';

export const intervalDoc: NodeDoc = {
  "slug": "interval",
  "displayName": "Interval Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/interval.svg",
  "description": "Trigger workflow at fixed intervals Use this node when a workflow needs interval trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Interval Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Interval Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "number",
              "required": true,
              "description": "Interval value",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Unit",
              "internalKey": "unit",
              "type": "string",
              "required": true,
              "description": "Interval unit",
              "example": "seconds",
              "placeholder": "seconds"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Interval Trigger node.\nstructure: Value returned by the Interval Trigger node.",
          "usageExample": {
            "scenario": "Use Interval Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Interval": "1",
              "Unit": "seconds"
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
    "manual_trigger",
    "chat_trigger",
    "form"
  ]
};
