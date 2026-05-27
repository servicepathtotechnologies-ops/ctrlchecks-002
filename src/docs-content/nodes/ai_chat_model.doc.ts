import type { NodeDoc } from '../types';

export const aiChatModelDoc: NodeDoc = {
  "slug": "ai_chat_model",
  "displayName": "AI Chat Model",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_chat_model.svg",
  "description": "Call Gemini 3.5 Flash directly to generate a response (uses GEMINI_API_KEY)",
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
              "required": false,
              "description": "Creativity (0.0 - 1.0)",
              "helpText": "What this field is: A number used for temperature in AI Chat Model / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.temperature}} or pick the value from the data picker.",
              "placeholder": "0.2",
              "example": "0.2",
              "defaultValue": "0.7"
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "User prompt to send to the model",
              "helpText": "What this field is: User prompt to send to the model for AI Chat Model / Execute.\nHow to fill it: Type the message, prompt, or content you want AI Chat Model to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.prompt}}",
              "example": "{{$json.prompt}}"
            },
            {
              "name": "System Prompt",
              "internalKey": "systemPrompt",
              "type": "string",
              "required": false,
              "description": "System prompt (optional)",
              "helpText": "What this field is: System prompt (optional) for AI Chat Model / Execute.\nHow to fill it: Enter the system prompt value requested by AI Chat Model, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.systemPrompt}} or pick the value from the data picker.",
              "placeholder": "You are a helpful assistant.",
              "example": "You are a helpful assistant."
            },
            {
              "name": "Response Format",
              "internalKey": "responseFormat",
              "type": "string",
              "required": false,
              "description": "Preferred response format",
              "helpText": "What this field is: Preferred response format for AI Chat Model / Execute.\nHow to fill it: Enter the response format value requested by AI Chat Model, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.responseFormat}} or pick the value from the data picker.",
              "placeholder": "text",
              "example": "text",
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
          "outputDescription": "response: Value returned by this operation.\ntext: Value returned by this operation.\noutput: Value returned by this operation.\nprovider: Value returned by this operation.\nmodel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming AI Chat Model data with execute after a related upstream event is received",
            "inputValues": {
              "Temperature": "0.2",
              "Prompt": "{{$json.prompt}}",
              "System Prompt": "You are a helpful assistant.",
              "Response Format": "text"
            },
            "expectedOutput": "AI Chat Model returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
