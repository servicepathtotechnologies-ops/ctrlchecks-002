import type { NodeDoc } from '../types';

export const ollamaDoc: NodeDoc = {
  "slug": "ollama",
  "displayName": "AI Chat (Gemini)",
  "category": "AI",
  "logoUrl": "/icons/nodes/ollama.svg",
  "description": "AI chat completion using Gemini 1.5 Flash (default LLM) Use this node when a workflow needs ai chat (gemini) behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "AI Chat (Gemini) is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the AI Chat (Gemini) node using the configured input fields.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "string",
              "required": true,
              "description": "Prompt text",
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
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AI Chat (Gemini) node.\nconvertible: Value returned by the AI Chat (Gemini) node.\ndefaultValue: Value returned by the AI Chat (Gemini) node.",
          "usageExample": {
            "scenario": "Use AI Chat (Gemini) in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Prompt": "{{$json.prompt}}",
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
