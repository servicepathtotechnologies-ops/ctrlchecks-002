import type { NodeDoc } from '../types';

export const discordWebhookDoc: NodeDoc = {
  "slug": "discord_webhook",
  "displayName": "Discord Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord_webhook.svg",
  "description": "Send messages via Discord webhook",
  "credentialType": "Discord Bot Token",
  "credentialSetupSteps": [
    "Go to https://discord.com/developers/applications → click \"New Application\".",
    "Under \"Bot\", click \"Add Bot\" → \"Yes, do it!\".",
    "Click \"Reset Token\" and copy the bot token.",
    "Under \"OAuth2 → URL Generator\", select \"bot\" scope + \"Send Messages\" permission, copy the URL, and add the bot to your server.",
    "In CtrlChecks, open Connections → Add Connection → Discord → paste the Bot Token → Save."
  ],
  "credentialDocsUrl": "https://discord.com/developers/docs/getting-started",
  "resources": [
    {
      "name": "Configuration",
      "description": "Discord Webhook is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to a Discord channel using a Webhook URL — no bot required.",
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
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            }
          ],
          "outputExample": {
            "success": true,
            "status": 204
          },
          "outputDescription": "success: true if the message was accepted. status: HTTP 204 means Discord accepted the webhook payload.",
          "usageExample": {
            "scenario": "Post GitHub commit notifications to a Discord channel",
            "inputValues": {
              "webhookUrl": "{{$env.DISCORD_WEBHOOK_URL}}",
              "content": "📦 New commit by {{$json.author}}: {{$json.message}}\n{{$json.url}}"
            },
            "expectedOutput": "Message appears in the Discord channel. No bot setup required — just the webhook URL."
          },
          "externalDocsUrl": "https://discord.com/developers/docs/resources/webhook"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Discord Webhook node."
    },
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
