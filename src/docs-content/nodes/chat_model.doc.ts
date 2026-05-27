import type { NodeDoc } from '../types';

export const chatModelDoc: NodeDoc = {
  "slug": "chat_model",
  "displayName": "Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/chat_model.svg",
  "description": "Chat model connector for AI Agent node (uses Gemini 3.5 Flash by default)",
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
              "required": false,
              "description": "Creativity/temperature (0.0 - 1.0)",
              "helpText": "What this field is: A number used for temperature in Chat Model / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.temperature}} or pick the value from the data picker.",
              "placeholder": "0.2",
              "example": "0.2",
              "defaultValue": "0.7"
            }
          ],
          "outputExample": {
            "provider": "abc123",
            "model": "",
            "apiKey": ""
          },
          "outputDescription": "provider: Value returned by this operation.\nmodel: Value returned by this operation.\napiKey: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Chat Model data with execute after a related upstream event is received",
            "inputValues": {
              "Temperature": "0.2"
            },
            "expectedOutput": "Chat Model returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
