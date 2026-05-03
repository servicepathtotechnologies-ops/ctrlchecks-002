import type { NodeDoc } from '../types';

export const chatModelDoc: NodeDoc = {
  "slug": "chat_model",
  "displayName": "Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/chat_model.svg",
  "description": "Chat model connector for AI Agent node (uses Gemini 1.5 Flash by default) Use this node when a workflow needs chat model behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Chat Model is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Chat Model node using the configured input fields.",
          "fields": [
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "required": false,
              "description": "Creativity/temperature (0.0 - 1.0)",
              "example": "0.2",
              "placeholder": "0.2",
              "defaultValue": "0.7"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Chat Model node.\nstructure: Value returned by the Chat Model node.",
          "usageExample": {
            "scenario": "Use Chat Model in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Temperature": "0.2"
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
    "ai_agent",
    "ai_chat_model",
    "openai_gpt",
    "anthropic_claude",
    "google_gemini"
  ]
};
