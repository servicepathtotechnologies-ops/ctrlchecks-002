import type { NodeDoc } from '../types';

export const respondToWebhookDoc: NodeDoc = {
  "slug": "respond_to_webhook",
  "displayName": "Respond to Webhook",
  "category": "Utility",
  "logoUrl": "/icons/nodes/respond_to_webhook.svg",
  "description": "Sends HTTP response back to webhook caller",
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
              "required": false,
              "description": "HTTP status code",
              "helpText": "What this field is: A number used for response code in Respond to Webhook / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.responseCode}} or pick the value from the data picker.",
              "placeholder": "200",
              "example": "200",
              "defaultValue": "200"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "Response headers",
              "helpText": "What this field is: Response headers for Respond to Webhook / Execute.\nHow to fill it: Enter valid JSON in the format Respond to Webhook expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.headers}} or pick the value from the data picker.",
              "placeholder": "{\"Content-Type\":\"application/json\"}",
              "example": "{\"Content-Type\":\"application/json\"}",
              "defaultValue": "{\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Response body data",
              "helpText": "What this field is: The data to send back as the webhook response — what the calling service receives.\nFormat: JSON object or a simple value.\nExample: {\"success\":true,\"message\":\"Order received\",\"orderId\":\"{{$json.orderId}}\"}",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
