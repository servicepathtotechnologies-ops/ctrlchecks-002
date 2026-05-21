import type { NodeDoc } from '../types';

export const discordDoc: NodeDoc = {
  "slug": "discord",
  "displayName": "Discord",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord.svg",
  "description": "Send messages to Discord channels or users via Discord Bot API",
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
              "required": false,
              "description": "Discord channel ID (required for Bot Token mode)",
              "helpText": "What this field is: The unique ID of the Discord channel where the message will be posted.\nWhere to find it:\n  Step 1: Open Discord → User Settings (gear icon at bottom left) → Advanced → turn on \"Developer Mode\".\n  Step 2: Right-click the channel name → Copy ID.\nThe ID is a 17–19 digit number.\nExample: 1234567890123456789",
              "placeholder": "123456789012345678",
              "example": "123456789012345678"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text to send",
              "helpText": "What this field is: Message text to send for Discord / Execute.\nHow to fill it: Type the message, prompt, or content you want Discord to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello from workflow!",
              "example": "Hello from workflow!"
            },
            {
              "name": "Bot Token",
              "internalKey": "botToken",
              "type": "string",
              "required": false,
              "description": "Discord bot token (stored as credential)",
              "helpText": "What this field is: Your Discord Bot Token — the secret that gives CtrlChecks permission to post as your bot.\nWhere to get it: discord.com/developers/applications → click your app → Bot → click \"Reset Token\" → copy the token.\nKeep it absolutely secret — anyone with this token can control your bot.",
              "placeholder": "token_..."
            },
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": false,
              "description": "Discord webhook URL — alternative to Bot Token, no channelId needed",
              "helpText": "What this field is: Discord webhook URL — alternative to Bot Token, no channelId needed for Discord / Execute.\nHow to fill it: Paste the full web address Discord should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.webhookUrl}} or pick the value from the data picker.",
              "placeholder": "https://discord.com/api/webhooks/...",
              "example": "https://discord.com/api/webhooks/..."
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
