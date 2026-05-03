import type { NodeDoc } from '../types';

export const scheduleDoc: NodeDoc = {
  "slug": "schedule",
  "displayName": "Schedule Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/schedule.svg",
  "description": "Executes workflow on a time-based schedule using cron expressions Use this node when a workflow needs schedule trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Schedule Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Schedule Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Cron",
              "internalKey": "cron",
              "type": "string",
              "required": true,
              "description": "Cron expression (e.g., \"0 9 * * *\" for daily at 9 AM)",
              "example": "0 9 * * *",
              "placeholder": "0 9 * * *"
            },
            {
              "name": "Timezone",
              "internalKey": "timezone",
              "type": "date",
              "required": false,
              "description": "Timezone for schedule",
              "example": "UTC",
              "placeholder": "UTC",
              "defaultValue": "UTC"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Schedule Trigger node.\nstructure: Value returned by the Schedule Trigger node.",
          "usageExample": {
            "scenario": "Use Schedule Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Cron": "0 9 * * *",
              "Timezone": "UTC"
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
    "webhook",
    "manual_trigger",
    "interval",
    "chat_trigger",
    "form"
  ]
};
