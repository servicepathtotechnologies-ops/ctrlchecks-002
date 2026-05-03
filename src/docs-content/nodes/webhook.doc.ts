import type { NodeDoc } from '../types';

export const webhookDoc: NodeDoc = {
  "slug": "webhook",
  "displayName": "Webhook Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/webhook.svg",
  "description": "Executes workflow when HTTP request is received Use this node when a workflow needs webhook trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Webhook Token",
  "credentialSetupSteps": [
    "Open the Webhook Trigger developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Webhook Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Webhook Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Webhook Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": true,
              "description": "URL path for webhook",
              "example": "/webhook",
              "placeholder": "/webhook"
            },
            {
              "name": "Http Method",
              "internalKey": "httpMethod",
              "type": "string",
              "required": false,
              "description": "HTTP method to accept",
              "example": "GET",
              "placeholder": "GET",
              "defaultValue": "POST"
            },
            {
              "name": "Response Mode",
              "internalKey": "responseMode",
              "type": "string",
              "required": false,
              "description": "How to respond to webhook caller",
              "example": "responseNode",
              "placeholder": "responseNode",
              "defaultValue": "responseNode"
            },
            {
              "name": "Verify Signature",
              "internalKey": "verifySignature",
              "type": "boolean",
              "required": false,
              "description": "Whether to verify webhook signatures (if supported by the sender)",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "false"
            },
            {
              "name": "Secret Token",
              "internalKey": "secretToken",
              "type": "password",
              "required": false,
              "description": "Secret token used for signature verification (if verifySignature is enabled)",
              "example": "{{ENV.WEBHOOK_SECRET}}",
              "placeholder": "{{ENV.WEBHOOK_SECRET}}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Webhook Trigger node.\nstructure: Value returned by the Webhook Trigger node.",
          "usageExample": {
            "scenario": "Use Webhook Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Path": "/webhook",
              "Http Method": "GET",
              "Response Mode": "responseNode",
              "Verify Signature": "true",
              "Secret Token": "{{ENV.WEBHOOK_SECRET}}"
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
    "schedule",
    "manual_trigger",
    "interval",
    "chat_trigger",
    "form"
  ]
};
