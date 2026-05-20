import type { NodeDoc } from '../types';

export const discordDoc: NodeDoc = {
  "slug": "discord",
  "displayName": "Discord",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord.svg",
  "description": "Send messages to Discord channels or users via Discord Bot API",
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
      "description": "Discord is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to a Discord channel via a bot.",
          "fields": [
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "description": "Discord channel ID (required for Bot Token mode)",
              "example": "123456789012345678",
              "placeholder": "123456789012345678"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text to send",
              "example": "Hello from workflow!",
              "placeholder": "Hello from workflow!"
            },
            {
              "name": "Bot Token",
              "internalKey": "botToken",
              "type": "string",
              "description": "Discord bot token (stored as credential)"
            },
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "description": "Discord webhook URL — alternative to Bot Token, no channelId needed",
              "example": "https://discord.com/api/webhooks/...",
              "placeholder": "https://discord.com/api/webhooks/..."
            }
          ],
          "outputExample": {
            "id": "1234567890123456789",
            "channelId": "9876543210987654321",
            "content": "Build #42 passed ✅",
            "timestamp": "2025-01-15T11:00:00.000000+00:00"
          },
          "outputDescription": "id: Discord message ID. channelId: The channel it was sent to. content: The message text. timestamp: When the message was sent.",
          "usageExample": {
            "scenario": "Post CI/CD build status to a #ci-notifications Discord channel",
            "inputValues": {
              "channelId": "{{$env.DISCORD_CI_CHANNEL_ID}}",
              "content": "{{$json.status === \"pass\" ? \"✅\" : \"❌\"}} Build #{{$json.buildNumber}} — {{$json.status}}"
            },
            "expectedOutput": "Message appears in the Discord channel. Use `{{$json.id}}` to track or edit the message."
          },
          "externalDocsUrl": "https://discord.com/developers/docs/intro"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Discord node."
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
