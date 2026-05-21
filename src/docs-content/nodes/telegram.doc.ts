import type { NodeDoc } from '../types';

export const telegramDoc: NodeDoc = {
  "slug": "telegram",
  "displayName": "Telegram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/telegram.svg",
  "description": "Send messages to Telegram chats using Telegram Bot API",
  "credentialType": "Telegram Bot Token",
  "credentialSetupSteps": [
    "What this is: Telegram Bot uses an API key or account connection so CtrlChecks can safely access your Telegram Bot account.",
    "Open the Telegram app on your phone or at web.telegram.org.",
    "Search for @BotFather in the search bar and start a chat with it.",
    "Type /newbot and press Send. BotFather will ask for a display name (e.g. My Company Bot) and then a username ending in \"bot\" (e.g. mycompany_bot).",
    "BotFather will send you a token - it looks like 123456789:ABCdef_GHIjkl-MNOpqr. Copy the entire token.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Telegram -> paste the bot token -> Save.",
    "To find a chat ID to send messages to: start a chat with your bot on Telegram, then search for @userinfobot and forward it a message from your chat - it will show you the chat ID.",
    "Run a test step to send a message and confirm it arrives in Telegram.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Telegram Bot node and select the saved connection."
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
              "required": false,
              "description": "Telegram Bot Token (stored as credential, not user input at runtime)",
              "helpText": "What this field is: The secret token that identifies your Telegram bot.\nWhere to get it: Open Telegram, search for @BotFather, and start a chat. Type /newbot, follow the steps (give it a name and a username ending in \"bot\"). BotFather will send you the token — it looks like 123456789:ABCdef-GHIjkl.\nKeep it private — anyone with this token can control your bot.",
              "placeholder": "token_..."
            },
            {
              "name": "Chat Id",
              "internalKey": "chatId",
              "type": "string",
              "required": true,
              "description": "Target chat or channel ID (numeric, can be negative for channels)",
              "helpText": "What this field is: The ID of the Telegram chat, group, or channel to send the message to.\nWhere to find it:\n  Personal chat: Open Telegram Web (web.telegram.org), click the conversation — the number in the browser URL is the chat ID.\n  Group or channel: Add your bot to the group, send a message, then open this URL in your browser: https://api.telegram.org/bot{YOUR_TOKEN}/getUpdates — look for \"chat\":{\"id\": in the response.\n  Quick way: Message @userinfobot in Telegram — it replies with your user ID.\nFormat: A plain number, positive for personal chats (e.g. 987654321), negative for groups (e.g. -100123456789).\nExample: 987654321 (personal) or -100123456789 (group)",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Message Type",
              "internalKey": "messageType",
              "type": "string",
              "required": true,
              "description": "Telegram message type",
              "helpText": "What this field is: Telegram message type for Telegram / Execute.\nHow to fill it: Type the message, prompt, or content you want Telegram to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "text",
              "example": "text",
              "defaultValue": "text"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text (required when messageType is \"text\")",
              "helpText": "What this field is: Message text (required when messageType is \"text\") for Telegram / Execute.\nHow to fill it: Type the message, prompt, or content you want Telegram to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Parse Mode",
              "internalKey": "parseMode",
              "type": "string",
              "required": false,
              "description": "Text formatting mode: none, HTML, Markdown, MarkdownV2",
              "helpText": "What this field is: Text formatting mode: none, HTML, Markdown, MarkdownV2 for Telegram / Execute.\nHow to fill it: Enter the parse mode value requested by Telegram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.parseMode}} or pick the value from the data picker.",
              "placeholder": "HTML",
              "example": "HTML",
              "defaultValue": "HTML"
            },
            {
              "name": "Disable Web Page Preview",
              "internalKey": "disableWebPagePreview",
              "type": "boolean",
              "required": false,
              "description": "Disable automatic link previews",
              "helpText": "What this field is: An on/off choice for disable web page preview in Telegram / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Telegram to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL for photo/video/document/audio/animation message types",
              "helpText": "What this field is: Media URL for photo/video/document/audio/animation message types for Telegram / Execute.\nHow to fill it: Paste the full web address Telegram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Caption for media messages",
              "helpText": "What this field is: Caption for media messages for Telegram / Execute.\nHow to fill it: Enter the caption value requested by Telegram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "Enter Caption"
            },
            {
              "name": "Reply To Message Id",
              "internalKey": "replyToMessageId",
              "type": "number",
              "required": false,
              "description": "Message ID to reply to",
              "helpText": "What this field is: Message ID to reply to for Telegram / Execute.\nHow to fill it: Type the message, prompt, or content you want Telegram to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Reply Markup",
              "internalKey": "replyMarkup",
              "type": "json",
              "required": false,
              "description": "Reply markup JSON (inline keyboard, reply keyboard, etc.)",
              "helpText": "What this field is: Reply markup JSON (inline keyboard, reply keyboard, etc.) for Telegram / Execute.\nHow to fill it: Enter valid JSON in the format Telegram expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.replyMarkup}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Disable Notification",
              "internalKey": "disableNotification",
              "type": "boolean",
              "required": false,
              "description": "Send message silently without notification",
              "helpText": "What this field is: An on/off choice for disable notification in Telegram / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Telegram to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Protect Content",
              "internalKey": "protectContent",
              "type": "textarea",
              "required": false,
              "description": "Protect content from being forwarded or saved",
              "helpText": "What this field is: Protect content from being forwarded or saved for Telegram / Execute.\nHow to fill it: Type the message, prompt, or content you want Telegram to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Allow Sending Without Reply",
              "internalKey": "allowSendingWithoutReply",
              "type": "boolean",
              "required": false,
              "description": "Allow sending even if replied-to message is missing",
              "helpText": "What this field is: An on/off choice for allow sending without reply in Telegram / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Telegram to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
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
