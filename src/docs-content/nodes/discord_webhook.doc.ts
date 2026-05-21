import type { NodeDoc } from '../types';

export const discordWebhookDoc: NodeDoc = {
  "slug": "discord_webhook",
  "displayName": "Discord Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord_webhook.svg",
  "description": "Send messages via Discord webhook",
  "credentialType": "Discord Bot Token",
  "credentialSetupSteps": [
    "What this is: Discord Bot uses an API key or account connection so CtrlChecks can safely access your Discord Bot account.",
    "Go to discord.com/developers/applications and sign in with your Discord account.",
    "Click \"New Application\" -> give it a name (e.g. CtrlChecks Bot) -> Create.",
    "Click \"Bot\" in the left menu -> \"Add Bot\" -> Yes, do it! Then click \"Reset Token\" and copy the token - keep it secret.",
    "Enable Developer Mode in Discord: Settings -> Advanced -> Developer Mode ON. Then right-click any channel -> Copy ID to get the channel ID for use in the node.",
    "In the OAuth2 -> URL Generator panel: select \"bot\" scope + \"Send Messages\" permission. Copy the URL, open it in a browser, and add the bot to your Discord server.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Discord -> paste the bot token -> Save.",
    "Run a test step to confirm the bot posts to the chosen channel.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Discord Bot node and select the saved connection."
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
              "helpText": "What this field is: A special URL that lets CtrlChecks post messages to a specific Discord channel without needing a bot.\nWhere to find it: In Discord → right-click the channel → Edit Channel → Integrations → Webhooks → New Webhook → Copy Webhook URL.\nExample: https://discord.com/api/webhooks/1234567890/xxxx...\nNote: Keep this URL private — anyone with it can post to your channel.",
              "placeholder": "https://discord.com/api/webhooks/...",
              "example": "https://discord.com/api/webhooks/..."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "helpText": "What this field is: Message text for Discord Webhook / Execute.\nHow to fill it: Type the message, prompt, or content you want Discord Webhook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
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
