import type { NodeDoc } from '../types';

export const telegramDoc: NodeDoc = {
  "slug": "telegram",
  "displayName": "Telegram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/telegram.svg",
  "description": "Send messages to Telegram chats using Telegram Bot API",
  "credentialType": "Telegram Bot Token",
  "credentialSetupSteps": [
    "Open Telegram and search for @BotFather.",
    "Send /newbot, give your bot a name, then a username ending in \"bot\".",
    "BotFather will reply with your Bot Token (e.g. 123456:ABC-DEF…).",
    "In CtrlChecks, open Connections → Add Connection → Telegram → paste the Bot Token → Save."
  ],
  "credentialDocsUrl": "https://core.telegram.org/bots/tutorial",
  "resources": [
    {
      "name": "Configuration",
      "description": "Telegram is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to a Telegram chat, group, or channel via a bot.",
          "fields": [
            {
              "name": "Bot Token",
              "internalKey": "botToken",
              "type": "string",
              "description": "Telegram Bot Token (stored as credential, not user input at runtime)"
            },
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
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Message text (required when messageType is \"text\")"
            },
            {
              "name": "Parse Mode",
              "internalKey": "parseMode",
              "type": "string",
              "description": "Text formatting mode: none, HTML, Markdown, MarkdownV2",
              "example": "HTML",
              "placeholder": "HTML",
              "defaultValue": "HTML"
            },
            {
              "name": "Disable Web Page Preview",
              "internalKey": "disableWebPagePreview",
              "type": "boolean",
              "description": "Disable automatic link previews",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL for photo/video/document/audio/animation message types",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Caption for media messages"
            },
            {
              "name": "Reply To Message Id",
              "internalKey": "replyToMessageId",
              "type": "number",
              "description": "Message ID to reply to",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Reply Markup",
              "internalKey": "replyMarkup",
              "type": "json",
              "description": "Reply markup JSON (inline keyboard, reply keyboard, etc.)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Disable Notification",
              "internalKey": "disableNotification",
              "type": "boolean",
              "description": "Send message silently without notification",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Protect Content",
              "internalKey": "protectContent",
              "type": "textarea",
              "description": "Protect content from being forwarded or saved",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Allow Sending Without Reply",
              "internalKey": "allowSendingWithoutReply",
              "type": "boolean",
              "description": "Allow sending even if replied-to message is missing",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "ok": true,
            "result": {
              "message_id": 101,
              "from": {
                "username": "my_bot"
              },
              "chat": {
                "id": -100123456
              },
              "text": "Alert: server CPU above 90%"
            }
          },
          "outputDescription": "ok: true if message was sent. result.message_id: Telegram message ID. result.chat.id: The chat ID the message was sent to. result.text: The message text.",
          "usageExample": {
            "scenario": "Send a server alert to a monitoring group when CPU exceeds a threshold",
            "inputValues": {
              "chatId": "-100123456",
              "text": "🚨 Alert: {{$json.serverName}} CPU is {{$json.cpuPercent}}%\nTime: {{$now}}"
            },
            "expectedOutput": "Message appears in the Telegram chat. Use `{{$json.result.message_id}}` to track or reply to the message."
          },
          "externalDocsUrl": "https://core.telegram.org/bots/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Telegram node."
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
