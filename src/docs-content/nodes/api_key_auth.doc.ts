import type { NodeDoc } from '../types';

export const apiKeyAuthDoc: NodeDoc = {
  "slug": "api_key_auth",
  "displayName": "API Key Auth",
  "category": "Utility",
  "logoUrl": "/icons/nodes/api_key_auth.svg",
  "description": "Provides an API key for authentication Use this node when a workflow needs api key auth behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "API Key Auth is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the API Key Auth node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key Name",
              "internalKey": "apiKeyName",
              "type": "password",
              "required": true,
              "description": "Name of the stored API key",
              "example": "openai",
              "placeholder": "openai",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "apiKey": "apiKey"
          },
          "outputDescription": "success: Value returned by the API Key Auth node.\napiKey: Value returned by the API Key Auth node.",
          "usageExample": {
            "scenario": "Use API Key Auth in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Api Key Name": "openai"
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
