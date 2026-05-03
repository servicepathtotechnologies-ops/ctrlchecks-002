import type { NodeDoc } from '../types';

export const discordDoc: NodeDoc = {
  "slug": "discord",
  "displayName": "Discord",
  "category": "Communication",
  "logoUrl": "/icons/nodes/discord.svg",
  "description": "Send messages to Discord channels or users via Discord Bot API Use this node when a workflow needs discord behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Discord Token",
  "credentialSetupSteps": [
    "Open the Discord developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Discord Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://discord.com/developers/docs/intro",
  "resources": [
    {
      "name": "Configuration",
      "description": "Discord is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Discord node using the configured input fields.",
          "fields": [
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": true,
              "description": "Discord channel ID",
              "example": "123456789012345678",
              "placeholder": "123456789012345678"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": true,
              "description": "Message text to send",
              "example": "Hello from workflow!",
              "placeholder": "Hello from workflow!"
            },
            {
              "name": "Bot Token",
              "internalKey": "botToken",
              "type": "password",
              "required": false,
              "description": "Discord bot token (stored as credential)",
              "example": "{{ $json.botToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Discord node.\nconvertible: Value returned by the Discord node.\ndefaultValue: Value returned by the Discord node.",
          "usageExample": {
            "scenario": "Use Discord in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Channel Id": "123456789012345678",
              "Message": "Hello from workflow!",
              "Bot Token": "{{ $json.botToken }}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://discord.com/developers/docs/intro"
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
