import type { NodeDoc } from '../types';

export const chatTriggerDoc: NodeDoc = {
  "slug": "chat_trigger",
  "displayName": "Chat Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/chat_trigger.svg",
  "description": "Trigger workflow from chat/AI interactions Use this node when a workflow needs chat trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Chat Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Chat Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Channel",
              "internalKey": "channel",
              "type": "string",
              "required": false,
              "description": "Optional channel/context to filter incoming chat events",
              "example": "#support",
              "placeholder": "#support"
            },
            {
              "name": "Allowed Senders",
              "internalKey": "allowedSenders",
              "type": "json",
              "required": false,
              "description": "Optional allowlist of senders/usernames/IDs",
              "example": "user1,user2",
              "placeholder": "user1,user2"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Incoming chat message",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Chat Trigger node.\nstructure: Value returned by the Chat Trigger node.",
          "usageExample": {
            "scenario": "Use Chat Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Channel": "#support",
              "Allowed Senders": "user1,user2",
              "Message": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
    "schedule",
    "webhook",
    "manual_trigger",
    "interval",
    "form"
  ]
};
