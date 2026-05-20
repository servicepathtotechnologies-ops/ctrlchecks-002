import type { NodeDoc } from '../types';

export const webhookResponseDoc: NodeDoc = {
  "slug": "webhook_response",
  "displayName": "Webhook Response",
  "category": "Utility",
  "logoUrl": "/icons/nodes/webhook_response.svg",
  "description": "Send response to webhook request",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Webhook Response is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Webhook Response node.",
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
              "type": "textarea",
              "description": "Response body",
              "example": "{{$json.result}}",
              "placeholder": "{{$json.result}}"
            }
          ],
          "outputExample": {},
          "outputDescription": "",
          "usageExample": {
            "scenario": "Use Webhook Response to execute in a workflow.",
            "inputValues": {
              "Response Code": "200",
              "Body": "{{$json.result}}"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
