import type { NodeDoc } from '../types';

export const webhookResponseDoc: NodeDoc = {
  "slug": "webhook_response",
  "displayName": "Webhook Response",
  "category": "Utility",
  "logoUrl": "/icons/nodes/webhook_response.svg",
  "description": "Send response to webhook request Use this node when a workflow needs webhook response behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Webhook Response is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Webhook Response node using the configured input fields.",
          "fields": [
            {
              "name": "Response Code",
              "internalKey": "responseCode",
              "type": "number",
              "required": true,
              "description": "HTTP response code",
              "example": "200",
              "placeholder": "200",
              "defaultValue": "200"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "json",
              "required": false,
              "description": "Response body",
              "example": "{{$json.result}}",
              "placeholder": "{{$json.result}}"
            }
          ],
          "outputExample": {
            "type": "type"
          },
          "outputDescription": "type: Value returned by the Webhook Response node.",
          "usageExample": {
            "scenario": "Use Webhook Response in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Response Code": "200",
              "Body": "{{$json.result}}"
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
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
