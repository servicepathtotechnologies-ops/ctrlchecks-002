import type { NodeDoc } from '../types';

export const slackMessageDoc: NodeDoc = {
  "slug": "slack_message",
  "displayName": "Slack",
  "category": "Communication",
  "logoUrl": "/icons/nodes/slack_message.svg",
  "description": "Send messages to Slack channels or users Use this node when a workflow needs slack behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Slack is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Slack node using the configured input fields.",
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
              "required": false,
              "description": "Slack channel or user ID",
              "example": "#general",
              "placeholder": "#general"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Message text to send to Slack",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Blocks",
              "internalKey": "blocks",
              "type": "string",
              "required": false,
              "description": "Slack blocks JSON (optional)",
              "example": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]",
              "placeholder": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text (alias for message)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bot username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Icon Emoji",
              "internalKey": "iconEmoji",
              "type": "string",
              "required": false,
              "description": "Icon emoji",
              "example": "{{ $json.iconEmoji }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Slack node.\nconvertible: Value returned by the Slack node.\ndefaultValue: Value returned by the Slack node.",
          "usageExample": {
            "scenario": "Use Slack in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Webhook Url": "https://hooks.slack.com/services/...",
              "Channel": "#general",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Blocks": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Hello\"}}]",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Username": "{{ $json.username }}",
              "Icon Emoji": "{{ $json.iconEmoji }}"
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
    "email",
    "log_output",
    "telegram"
  ]
};
