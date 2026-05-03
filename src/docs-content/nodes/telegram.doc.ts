import type { NodeDoc } from '../types';

export const telegramDoc: NodeDoc = {
  "slug": "telegram",
  "displayName": "Telegram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/telegram.svg",
  "description": "Send messages to Telegram chats using Telegram Bot API Use this node when a workflow needs telegram behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Telegram Token, Telegram Credential",
  "credentialSetupSteps": [
    "Open the Telegram developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Telegram Token, Telegram Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://core.telegram.org/bots/api",
  "resources": [
    {
      "name": "Configuration",
      "description": "Telegram is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Telegram node using the configured input fields.",
          "fields": [
            {
              "name": "Chat Id",
              "internalKey": "chatId",
              "type": "string",
              "required": true,
              "description": "Target chat or channel ID (numeric, can be negative for channels)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Message Type",
              "internalKey": "messageType",
              "type": "string",
              "required": true,
              "description": "Telegram message type",
              "example": "text",
              "placeholder": "text",
              "defaultValue": "text"
            },
            {
              "name": "Bot Token",
              "internalKey": "botToken",
              "type": "password",
              "required": false,
              "description": "Telegram Bot Token (stored as credential, not user input at runtime)",
              "example": "{{ $json.botToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference for Telegram bot token",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Message text (required when messageType is \"text\")",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Parse Mode",
              "internalKey": "parseMode",
              "type": "string",
              "required": false,
              "description": "Text formatting mode: none, HTML, Markdown, MarkdownV2",
              "example": "HTML",
              "defaultValue": "HTML"
            },
            {
              "name": "Disable Web Page Preview",
              "internalKey": "disableWebPagePreview",
              "type": "boolean",
              "required": false,
              "description": "Disable automatic link previews",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL for photo/video/document/audio/animation message types",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Caption for media messages",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Reply To Message Id",
              "internalKey": "replyToMessageId",
              "type": "number",
              "required": false,
              "description": "Message ID to reply to",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Reply Markup",
              "internalKey": "replyMarkup",
              "type": "json",
              "required": false,
              "description": "Reply markup JSON (inline keyboard, reply keyboard, etc.)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Disable Notification",
              "internalKey": "disableNotification",
              "type": "boolean",
              "required": false,
              "description": "Send message silently without notification",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Protect Content",
              "internalKey": "protectContent",
              "type": "boolean",
              "required": false,
              "description": "Protect content from being forwarded or saved",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Allow Sending Without Reply",
              "internalKey": "allowSendingWithoutReply",
              "type": "boolean",
              "required": false,
              "description": "Allow sending even if replied-to message is missing",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Telegram node.\nconvertible: Value returned by the Telegram node.\ndefaultValue: Value returned by the Telegram node.",
          "usageExample": {
            "scenario": "Use Telegram in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Chat Id": "123456789",
              "Message Type": "text",
              "Bot Token": "{{ $json.botToken }}",
              "Credential Id": "cred_123",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Parse Mode": "HTML",
              "Disable Web Page Preview": "false",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Reply To Message Id": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://core.telegram.org/bots/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
