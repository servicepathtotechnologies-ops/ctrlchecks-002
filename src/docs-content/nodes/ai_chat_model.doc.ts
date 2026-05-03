import type { NodeDoc } from '../types';

export const aiChatModelDoc: NodeDoc = {
  "slug": "ai_chat_model",
  "displayName": "AI Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_chat_model.svg",
  "description": "Call Gemini 1.5 Flash directly to generate a response (uses GEMINI_API_KEY) Use this node when a workflow needs ai chat model behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "AI Chat Model is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the AI Chat Model node using the configured input fields.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "string",
              "required": true,
              "description": "User prompt to send to the model",
              "example": "{{$json.prompt}}",
              "placeholder": "{{$json.prompt}}"
            },
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "required": false,
              "description": "Creativity (0.0 - 1.0)",
              "example": "0.2",
              "placeholder": "0.2",
              "defaultValue": "0.7"
            },
            {
              "name": "System Prompt",
              "internalKey": "systemPrompt",
              "type": "string",
              "required": false,
              "description": "System prompt (optional)",
              "example": "You are a helpful assistant.",
              "placeholder": "You are a helpful assistant."
            },
            {
              "name": "Response Format",
              "internalKey": "responseFormat",
              "type": "string",
              "required": false,
              "description": "Preferred response format",
              "example": "text",
              "placeholder": "text",
              "defaultValue": "text"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AI Chat Model node.\nstructure: Value returned by the AI Chat Model node.\nconvertible: Value returned by the AI Chat Model node.\ndefaultValue: Value returned by the AI Chat Model node.",
          "usageExample": {
            "scenario": "Use AI Chat Model in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Prompt": "{{$json.prompt}}",
              "Temperature": "0.2",
              "System Prompt": "You are a helpful assistant.",
              "Response Format": "text"
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
    "openai_gpt",
    "anthropic_claude",
    "google_gemini",
    "ollama"
  ]
};
