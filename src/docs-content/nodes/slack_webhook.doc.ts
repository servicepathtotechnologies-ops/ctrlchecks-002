import type { NodeDoc } from '../types';

export const slackWebhookDoc: NodeDoc = {
  "slug": "slack_webhook",
  "displayName": "Slack Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_webhook.svg",
  "description": "Send messages via Slack webhook Use this node when a workflow needs slack webhook behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Slack Webhook is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Slack Webhook node using the configured input fields.",
          "fields": [
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": true,
              "description": "Slack webhook URL",
              "example": "https://hooks.slack.com/services/...",
              "placeholder": "https://hooks.slack.com/services/..."
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
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Slack Webhook node.\nstructure: Value returned by the Slack Webhook node.\nconvertible: Value returned by the Slack Webhook node.\ndefaultValue: Value returned by the Slack Webhook node.",
          "usageExample": {
            "scenario": "Use Slack Webhook in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Webhook Url": "https://hooks.slack.com/services/...",
              "Message": "{{$json.message}}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://api.slack.com/messaging/webhooks"
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
