import type { NodeDoc } from '../types';

export const discordWebhookDoc: NodeDoc = {
  "slug": "discord_webhook",
  "displayName": "Discord Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord_webhook.svg",
  "description": "Send messages via Discord webhook Use this node when a workflow needs discord webhook behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Discord Webhook is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Discord Webhook node using the configured input fields.",
          "fields": [
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": true,
              "description": "Discord webhook URL",
              "example": "https://discord.com/api/webhooks/...",
              "placeholder": "https://discord.com/api/webhooks/..."
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
          "outputDescription": "type: Value returned by the Discord Webhook node.\nstructure: Value returned by the Discord Webhook node.\nconvertible: Value returned by the Discord Webhook node.\ndefaultValue: Value returned by the Discord Webhook node.",
          "usageExample": {
            "scenario": "Use Discord Webhook in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Webhook Url": "https://discord.com/api/webhooks/...",
              "Message": "{{$json.message}}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://discord.com/developers/docs/resources/webhook"
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
