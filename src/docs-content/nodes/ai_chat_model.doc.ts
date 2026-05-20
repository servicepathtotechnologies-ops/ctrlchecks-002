import type { NodeDoc } from '../types';

export const aiChatModelDoc: NodeDoc = {
  "slug": "ai_chat_model",
  "displayName": "AI Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_chat_model.svg",
  "description": "Call Gemini 1.5 Flash directly to generate a response (uses GEMINI_API_KEY)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "AI Chat Model is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the AI Chat Model node.",
          "fields": [
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "description": "Creativity (0.0 - 1.0)",
              "example": "0.2",
              "placeholder": "0.2",
              "defaultValue": "0.7"
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "User prompt to send to the model",
              "example": "{{$json.prompt}}",
              "placeholder": "{{$json.prompt}}"
            },
            {
              "name": "System Prompt",
              "internalKey": "systemPrompt",
              "type": "string",
              "description": "System prompt (optional)",
              "example": "You are a helpful assistant.",
              "placeholder": "You are a helpful assistant."
            },
            {
              "name": "Response Format",
              "internalKey": "responseFormat",
              "type": "string",
              "description": "Preferred response format",
              "example": "text",
              "placeholder": "text",
              "defaultValue": "text"
            }
          ],
          "outputExample": {
            "response": "",
            "text": "",
            "output": {},
            "provider": "abc123",
            "model": ""
          },
          "outputDescription": "response: Value returned by this node.\ntext: Value returned by this node.\noutput: Value returned by this node.\nprovider: Value returned by this node.\nmodel: Value returned by this node.",
          "usageExample": {
            "scenario": "Use AI Chat Model to execute in a workflow.",
            "inputValues": {
              "Temperature": "0.2",
              "Prompt": "{{$json.prompt}}",
              "System Prompt": "You are a helpful assistant.",
              "Response Format": "text"
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
