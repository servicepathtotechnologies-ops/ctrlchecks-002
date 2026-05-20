import type { NodeDoc } from '../types';

export const slackMessageDoc: NodeDoc = {
  "slug": "slack_message",
  "displayName": "Slack",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_message.svg",
  "description": "Send messages to Slack channels or users",
  "credentialType": "Slack Credential",
  "credentialSetupSteps": [
    "Go to https://api.slack.com/apps → click \"Create New App\" → \"From scratch\".",
    "Under \"OAuth & Permissions\", add the Bot Token Scopes you need (e.g. chat:write, channels:read).",
    "Click \"Install to Workspace\" and allow the permissions.",
    "Copy the Bot User OAuth Token (starts with xoxb-).",
    "In CtrlChecks, open Connections → Add Connection → Slack → paste the Bot Token → Save."
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
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": true,
              "description": "Slack incoming webhook URL",
              "example": "https://hooks.slack.com/services/...",
              "placeholder": "https://hooks.slack.com/services/..."
            },
            {
              "name": "Channel",
              "internalKey": "channel",
              "type": "string",
              "description": "Slack channel or user ID",
              "example": "#general",
              "placeholder": "#general"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Message text to send to Slack"
            },
            {
              "name": "Blocks",
              "internalKey": "blocks",
              "type": "string",
              "description": "Slack blocks JSON (optional)",
              "example": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]",
              "placeholder": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text (alias for message)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "Bot username"
            },
            {
              "name": "Icon Emoji",
              "internalKey": "iconEmoji",
              "type": "string",
              "description": "Icon emoji"
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
