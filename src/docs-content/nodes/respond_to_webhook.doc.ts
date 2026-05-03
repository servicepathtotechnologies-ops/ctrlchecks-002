import type { NodeDoc } from '../types';

export const respondToWebhookDoc: NodeDoc = {
  "slug": "respond_to_webhook",
  "displayName": "Respond to Webhook",
  "category": "Utility",
  "logoUrl": "/icons/nodes/respond_to_webhook.svg",
  "description": "Sends HTTP response back to webhook caller Use this node when a workflow needs respond to webhook behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Respond to Webhook is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Respond to Webhook node using the configured input fields.",
          "fields": [
            {
              "name": "Response Code",
              "internalKey": "responseCode",
              "type": "number",
              "required": false,
              "description": "HTTP status code",
              "example": "200",
              "placeholder": "200",
              "defaultValue": "200"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "Response headers",
              "example": "{\"Content-Type\":\"application/json\"}",
              "defaultValue": "{\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "json",
              "required": false,
              "description": "Response body data",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type"
          },
          "outputDescription": "type: Value returned by the Respond to Webhook node.",
          "usageExample": {
            "scenario": "Use Respond to Webhook in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Response Code": "200",
              "Headers": "{\"Content-Type\":\"application/json\"}",
              "Body": "Created from workflow data: {{ $json.summary }}"
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
    "http_request",
    "clickup",
    "delay",
    "queue_push",
    "queue_consume"
  ]
};
