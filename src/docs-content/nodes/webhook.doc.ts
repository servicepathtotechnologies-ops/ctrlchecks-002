import type { NodeDoc } from '../types';

export const webhookDoc: NodeDoc = {
  "slug": "webhook",
  "displayName": "Webhook Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/webhook.svg",
  "description": "Executes workflow when HTTP request is received",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Webhook Trigger is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Start the workflow when an HTTP request hits the generated webhook URL.",
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
              "description": "HTTP method to accept",
              "example": "GET",
              "placeholder": "GET",
              "defaultValue": "POST"
            },
            {
              "name": "Response Mode",
              "internalKey": "responseMode",
              "type": "string",
              "description": "How to respond to webhook caller",
              "example": "responseNode",
              "placeholder": "responseNode",
              "defaultValue": "responseNode"
            },
            {
              "name": "Verify Signature",
              "internalKey": "verifySignature",
              "type": "boolean",
              "description": "Whether to verify webhook signatures (if supported by the sender)",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "false"
            },
            {
              "name": "Secret Token",
              "internalKey": "secretToken",
              "type": "password",
              "description": "Secret token used for signature verification (if verifySignature is enabled)",
              "example": "{{ENV.WEBHOOK_SECRET}}",
              "placeholder": "{{ENV.WEBHOOK_SECRET}}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "body": {
              "event": "user.created",
              "userId": "u_123",
              "email": "alice@example.com"
            },
            "headers": {
              "content-type": "application/json"
            },
            "method": "POST",
            "query": {}
          },
          "outputDescription": "body: The parsed request body sent by the caller. headers: HTTP headers from the request. method: HTTP method used (POST, GET, etc.). query: URL query parameters.",
          "usageExample": {
            "scenario": "Receive a Stripe payment webhook and store the order in a database",
            "inputValues": {
              "method": "POST",
              "path": "/webhooks/stripe-payment"
            },
            "expectedOutput": "The workflow receives `{{$json.body.type}}` (e.g. payment_intent.succeeded) and `{{$json.body.data.object.amount}}` from Stripe."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
