import type { NodeDoc } from '../types';

export const slackWebhookDoc: NodeDoc = {
  "slug": "slack_webhook",
  "displayName": "Slack Webhook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_webhook.svg",
  "description": "Send messages via Slack webhook",
  "credentialType": "Slack Webhook URL",
  "credentialSetupSteps": [
    "What this is: Slack Webhook uses an API key or account connection so CtrlChecks can safely access your Slack Webhook account.",
    "Go to api.slack.com/apps and sign in. Select your existing app, or click \"Create New App\" -> \"From scratch\".",
    "In the left menu, click \"Incoming Webhooks\" -> toggle \"Activate Incoming Webhooks\" to ON.",
    "Click \"Add New Webhook to Workspace\" -> select the channel you want messages posted to -> Allow.",
    "Copy the Webhook URL shown - it starts with https://hooks.slack.com/services/. This URL is your credential.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Slack Webhook -> paste the webhook URL -> Save.",
    "Run a test step in CtrlChecks to confirm a message appears in the selected channel.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Slack Webhook node and select the saved connection."
  ],
  "credentialDocsUrl": "https://api.slack.com/messaging/webhooks",
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
              "helpText": "What this field is: Slack webhook URL for Slack Webhook / Execute.\nHow to fill it: Paste the full web address Slack Webhook should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.webhookUrl}} or pick the value from the data picker.",
              "placeholder": "https://hooks.slack.com/services/...",
              "example": "https://hooks.slack.com/services/..."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "helpText": "What this field is: Message text for Slack Webhook / Execute.\nHow to fill it: Type the message, prompt, or content you want Slack Webhook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
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
