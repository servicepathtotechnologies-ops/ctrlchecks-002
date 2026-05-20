import type { NodeDoc } from '../types';

export const slackWebhookDoc: NodeDoc = {
  "slug": "slack_webhook",
  "displayName": "Slack Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_webhook.svg",
  "description": "Send messages via Slack webhook",
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
      "description": "Slack Webhook is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to Slack using an Incoming Webhook URL — no OAuth required.",
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
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            }
          ],
          "outputExample": {
            "success": true,
            "status": 200,
            "response": "ok"
          },
          "outputDescription": "success: true if Slack accepted the message. status: HTTP response code. response: \"ok\" indicates success.",
          "usageExample": {
            "scenario": "Post a quick alert to Slack without setting up a full bot integration",
            "inputValues": {
              "webhookUrl": "{{$env.SLACK_WEBHOOK_URL}}",
              "text": "🔔 New sign-up: {{$json.email}} at {{$now}}"
            },
            "expectedOutput": "Message appears in the configured channel. This is the simplest way to send Slack messages."
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
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Slack Webhook node."
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
