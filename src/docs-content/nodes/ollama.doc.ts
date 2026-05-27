import type { NodeDoc } from '../types';

export const ollamaDoc: NodeDoc = {
  "slug": "ollama",
  "displayName": "AI Chat (Gemini)",
  "category": "AI",
  "logoUrl": "/icons/nodes/ollama.svg",
  "description": "AI chat completion using Gemini 3.5 Flash (default LLM)",
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
      "description": "AI Chat (Gemini) is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the AI Chat (Gemini) node.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Prompt text",
              "helpText": "What this field is: The instruction for your local AI model.\nExample: Classify this customer review as positive, negative, or neutral. Reply with just one word: {{$json.review}}",
              "placeholder": "{{$json.prompt}}",
              "example": "{{$json.prompt}}"
            },
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "required": false,
              "description": "Creativity (0.0 - 1.0)",
              "helpText": "What this field is: A number used for temperature in AI Chat (Gemini) / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.temperature}} or pick the value from the data picker.",
              "placeholder": "0.2",
              "example": "0.2",
              "defaultValue": "0.7"
            }
          ],
          "outputExample": {
            "text": "Local model generated a response for the prompt.",
            "length": 48
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming AI Chat (Gemini) data with execute after a related upstream event is received",
            "inputValues": {
              "Prompt": "{{$json.prompt}}",
              "Temperature": "0.2"
            },
            "expectedOutput": "AI Chat (Gemini) returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
