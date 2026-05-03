import type { NodeDoc } from '../types';

export const whatsappTriggerDoc: NodeDoc = {
  "slug": "whatsapp_trigger",
  "displayName": "WhatsApp Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/whatsapp_trigger.svg",
  "description": "Trigger workflows on WhatsApp events: message received, delivered, read, conversation created Use this node when a workflow needs whatsapp trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "WhatsApp Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the WhatsApp Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Event",
              "internalKey": "event",
              "type": "string",
              "required": true,
              "description": "WhatsApp event type to listen for",
              "example": "message.received",
              "placeholder": "message.received",
              "defaultValue": "message.received"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID to listen on (optional)",
              "example": "{{ $json.phoneNumberId }}"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "from": "from",
            "timestamp": "timestamp",
            "type": "type",
            "text": "text",
            "phoneNumberId": "phoneNumberId"
          },
          "outputDescription": "messageId: Value returned by the WhatsApp Trigger node.\nfrom: Value returned by the WhatsApp Trigger node.\ntimestamp: Value returned by the WhatsApp Trigger node.\ntype: Value returned by the WhatsApp Trigger node.\ntext: Value returned by the WhatsApp Trigger node.\nphoneNumberId: Value returned by the WhatsApp Trigger node.",
          "usageExample": {
            "scenario": "Use WhatsApp Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Event": "message.received",
              "Phone Number Id": "{{ $json.phoneNumberId }}"
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
