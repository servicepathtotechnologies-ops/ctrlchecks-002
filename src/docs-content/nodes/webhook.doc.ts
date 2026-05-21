import type { NodeDoc } from '../types';

export const webhookDoc: NodeDoc = {
  "slug": "webhook",
  "displayName": "Webhook Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/webhook.svg",
  "description": "Executes workflow when HTTP request is received",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: The web address path where external services send data to start this workflow.\nHow to fill it: Type a short path starting with /. Keep it descriptive.\nExample: /new-order or /form-submit or /stripe-payment\nAfter saving, CtrlChecks shows you the full URL (e.g. https://yourapp.com/webhook/new-order). Copy that and paste it into the external service's webhook settings.",
              "placeholder": "/webhook",
              "example": "/webhook"
            },
            {
              "name": "Http Method",
              "internalKey": "httpMethod",
              "type": "string",
              "required": false,
              "description": "HTTP method to accept",
              "helpText": "What this field is: HTTP method to accept for Webhook Trigger / Execute.\nHow to fill it: Enter the http method value requested by Webhook Trigger, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.httpMethod}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "POST"
            },
            {
              "name": "Response Mode",
              "internalKey": "responseMode",
              "type": "string",
              "required": false,
              "description": "How to respond to webhook caller",
              "helpText": "What this field is: How to respond to webhook caller for Webhook Trigger / Execute.\nHow to fill it: Enter the response mode value requested by Webhook Trigger, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.responseMode}} or pick the value from the data picker.",
              "placeholder": "responseNode",
              "example": "responseNode",
              "defaultValue": "responseNode"
            },
            {
              "name": "Verify Signature",
              "internalKey": "verifySignature",
              "type": "boolean",
              "required": false,
              "description": "Whether to verify webhook signatures (if supported by the sender)",
              "helpText": "What this field is: An on/off choice for verify signature in Webhook Trigger / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Webhook Trigger to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "false"
            },
            {
              "name": "Secret Token",
              "internalKey": "secretToken",
              "type": "password",
              "required": false,
              "description": "Secret token used for signature verification (if verifySignature is enabled)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Webhook Trigger.\nWhere to get it: Open the Webhook Trigger dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "{{ENV.WEBHOOK_SECRET}}",
              "example": "{{ENV.WEBHOOK_SECRET}}",
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
