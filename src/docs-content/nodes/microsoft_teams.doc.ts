import type { NodeDoc } from '../types';

export const microsoftTeamsDoc: NodeDoc = {
  "slug": "microsoft_teams",
  "displayName": "Microsoft Teams",
  "category": "Communication",
  "logoUrl": "/icons/nodes/microsoft_teams.svg",
  "description": "Send messages to Microsoft Teams Use this node when a workflow needs microsoft teams behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Microsoft Teams is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Microsoft Teams node using the configured input fields.",
          "fields": [
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": true,
              "description": "Teams webhook URL",
              "example": "https://outlook.office.com/webhook/...",
              "placeholder": "https://outlook.office.com/webhook/..."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": true,
              "description": "Message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Microsoft Teams node.\nconvertible: Value returned by the Microsoft Teams node.\ndefaultValue: Value returned by the Microsoft Teams node.",
          "usageExample": {
            "scenario": "Use Microsoft Teams in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Webhook Url": "https://outlook.office.com/webhook/...",
              "Message": "{{$json.message}}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using"
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
    "log_output"
  ]
};
