import type { NodeDoc } from '../types';

export const slackMessageDoc: NodeDoc = {
  "slug": "slack_message",
  "displayName": "Slack",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_message.svg",
  "description": "Send messages to Slack channels or users",
  "credentialType": "Slack OAuth",
  "credentialSetupSteps": [
    "What this is: Slack uses an OAuth connection so CtrlChecks can safely access your Slack account.",
    "Go to api.slack.com/apps and sign in with your Slack account.",
    "Click \"Create New App\" -> \"From scratch\" -> give it a name (e.g. CtrlChecks Bot) -> pick your workspace -> Create App.",
    "In the left menu, click \"OAuth & Permissions\" -> scroll to \"Scopes\" -> \"Bot Token Scopes\" -> Add: chat:write (to post messages), channels:read (to list channels).",
    "Scroll up and click \"Install to Workspace\" -> Allow.",
    "Copy the \"Bot User OAuth Token\" - it starts with xoxb-. This is your Slack credential.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Slack -> paste the xoxb- token -> Save.",
    "In your Slack workspace, open the channel you want to post to -> type /invite @YourBotName -> Enter. Then run a test step in CtrlChecks to confirm.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Slack node and select the saved connection."
  ],
  "credentialDocsUrl": "https://api.slack.com/authentication/basics",
  "resources": [
    {
      "name": "Configuration",
      "description": "Slack is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to a Slack channel or direct message.",
          "fields": [
            {
              "name": "Channel",
              "internalKey": "channel",
              "type": "string",
              "required": true,
              "description": "Slack channel or user ID",
              "helpText": "What this field is: The Slack channel where the message will be posted.\nHow to fill it: Use the channel name with # like #general, or the channel ID like C01234567.\nWhere to find the channel ID: Right-click the channel name in Slack → View channel details → scroll to the bottom — the ID is shown there. It is safer to use the ID in case the channel is renamed.\nExample: #notifications or C01234567",
              "placeholder": "#general",
              "example": "#general"
            },
            {
              "name": "Blocks",
              "internalKey": "blocks",
              "type": "string",
              "required": false,
              "description": "Slack blocks JSON (optional)",
              "helpText": "What this field is: Slack blocks JSON (optional) for Slack / Execute.\nHow to fill it: Enter the blocks value requested by Slack, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.blocks}} or pick the value from the data picker.",
              "placeholder": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]",
              "example": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Message text (alias for message)",
              "helpText": "What this field is: The message text that will appear in the Slack channel.\nExample: New lead from {{$json.name}} ({{$json.email}}) — signed up at {{$json.createdAt}}.\nFormatting tips: *bold text*, _italic text_, `code`, and line breaks work in Slack messages.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bot username",
              "helpText": "What this field is: Bot username for Slack / Execute.\nHow to fill it: Enter the username value requested by Slack, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Icon Emoji",
              "internalKey": "iconEmoji",
              "type": "string",
              "required": false,
              "description": "Icon emoji",
              "helpText": "What this field is: Icon emoji for Slack / Execute.\nHow to fill it: Enter the icon emoji value requested by Slack, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.iconEmoji}} or pick the value from the data picker.",
              "placeholder": "Enter Icon Emoji"
            }
          ],
          "outputExample": {
            "ok": true,
            "ts": "1704067200.123456",
            "channel": "C01234ABCDE",
            "message": {
              "text": "Deployment complete ✅",
              "user": "U01234"
            }
          },
          "outputDescription": "ok: true if the message was sent successfully. ts: Message timestamp (Slack message ID). channel: The channel ID where the message was sent. message.text: The message text that was posted.",
          "usageExample": {
            "scenario": "Alert the #deployments channel when a workflow completes or fails",
            "inputValues": {
              "channel": "#deployments",
              "text": "✅ Deploy complete for `{{$json.version}}` at {{$now}}"
            },
            "expectedOutput": "The message appears in the specified channel. Use `{{$json.ts}}` to reference or thread the message later."
          },
          "externalDocsUrl": "https://api.slack.com/messaging/webhooks"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Slack node."
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
