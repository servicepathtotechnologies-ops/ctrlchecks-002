import type { NodeDoc } from '../types';

export const logOutputDoc: NodeDoc = {
  "slug": "log_output",
  "displayName": "Log Output",
  "category": "Communication",
  "logoUrl": "/icons/nodes/log_output.svg",
  "description": "Log data to console or file Use this node when a workflow needs log output behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Log Output is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Log Output node using the configured input fields.",
          "fields": [
            {
              "name": "Level",
              "internalKey": "level",
              "type": "string",
              "required": false,
              "description": "Log level",
              "example": "info",
              "placeholder": "info",
              "defaultValue": "info"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Log message",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type"
          },
          "outputDescription": "type: Value returned by the Log Output node.",
          "usageExample": {
            "scenario": "Use Log Output in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Level": "info",
              "Message": "Created from workflow data: {{ $json.summary }}"
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "telegram"
  ]
};
