import type { NodeDoc } from '../types';

export const ollamaDoc: NodeDoc = {
  "slug": "ollama",
  "displayName": "AI Chat (Gemini)",
  "category": "AI",
  "logoUrl": "/icons/nodes/ollama.svg",
  "description": "AI chat completion using Gemini 1.5 Flash (default LLM)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "{{$json.prompt}}",
              "placeholder": "{{$json.prompt}}"
            },
            {
              "name": "Temperature",
              "internalKey": "temperature",
              "type": "number",
              "description": "Creativity (0.0 - 1.0)",
              "example": "0.2",
              "placeholder": "0.2",
              "defaultValue": "0.7"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use AI Chat (Gemini) to execute in a workflow.",
            "inputValues": {
              "Prompt": "{{$json.prompt}}",
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
