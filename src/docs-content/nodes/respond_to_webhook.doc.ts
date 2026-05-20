import type { NodeDoc } from '../types';

export const respondToWebhookDoc: NodeDoc = {
  "slug": "respond_to_webhook",
  "displayName": "Respond to Webhook",
  "category": "Utility",
  "logoUrl": "/icons/nodes/respond_to_webhook.svg",
  "description": "Sends HTTP response back to webhook caller",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Respond to Webhook is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send an HTTP response back to the caller of a Webhook Trigger node.",
          "fields": [
            {
              "name": "Response Code",
              "internalKey": "responseCode",
              "type": "number",
              "description": "HTTP status code",
              "example": "200",
              "placeholder": "200",
              "defaultValue": "200"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "description": "Response headers",
              "example": "{\"Content-Type\":\"application/json\"}",
              "placeholder": "{\"Content-Type\":\"application/json\"}",
              "defaultValue": "{\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Response body data",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "sent": true,
            "statusCode": 200,
            "body": {
              "success": true,
              "message": "Processed"
            }
          },
          "outputDescription": "sent: true if the response was dispatched. statusCode: The HTTP status code returned. body: The response body sent.",
          "usageExample": {
            "scenario": "Respond to a Stripe webhook with a 200 OK to acknowledge receipt",
            "inputValues": {
              "statusCode": "200",
              "body": "{\"received\": true}",
              "headers": "{\"Content-Type\": \"application/json\"}"
            },
            "expectedOutput": "Stripe receives the 200 response and stops retrying."
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
