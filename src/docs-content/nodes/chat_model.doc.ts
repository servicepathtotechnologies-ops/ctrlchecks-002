import type { NodeDoc } from '../types';

export const chatModelDoc: NodeDoc = {
  "slug": "chat_model",
  "displayName": "Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/chat_model.svg",
  "description": "Chat model connector for AI Agent node (uses Gemini 1.5 Flash by default)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Chat Model is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Chat Model node.",
          "fields": [
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "description": "Creativity/temperature (0.0 - 1.0)",
              "example": "0.2",
              "placeholder": "0.2",
              "defaultValue": "0.7"
            }
          ],
          "outputExample": {
            "provider": "abc123",
            "model": "",
            "apiKey": ""
          },
          "outputDescription": "provider: Value returned by this node.\nmodel: Value returned by this node.\napiKey: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Chat Model to execute in a workflow.",
            "inputValues": {
              "Temperature": "0.2"
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
