import type { NodeDoc } from '../types';

export const instagramTriggerDoc: NodeDoc = {
  "slug": "instagram_trigger",
  "displayName": "Instagram Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/instagram_trigger.svg",
  "description": "Trigger workflows on Instagram events: new DM, comment, mention, postback Use this node when a workflow needs instagram trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Instagram Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Instagram Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Event",
              "internalKey": "event",
              "type": "string",
              "required": true,
              "description": "Instagram event type to listen for",
              "example": "message.received",
              "placeholder": "message.received",
              "defaultValue": "message.received"
            },
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID to listen on (optional)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            }
          ],
          "outputExample": {
            "senderId": "senderId",
            "messageId": "messageId",
            "text": "text",
            "timestamp": "timestamp"
          },
          "outputDescription": "senderId: Value returned by the Instagram Trigger node.\nmessageId: Value returned by the Instagram Trigger node.\ntext: Value returned by the Instagram Trigger node.\ntimestamp: Value returned by the Instagram Trigger node.",
          "usageExample": {
            "scenario": "Use Instagram Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Event": "message.received",
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}"
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
    "chat_trigger"
  ]
};
