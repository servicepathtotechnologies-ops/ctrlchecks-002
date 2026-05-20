import type { NodeDoc } from '../types';

export const openaiGptDoc: NodeDoc = {
  "slug": "openai_gpt",
  "displayName": "OpenAI GPT",
  "category": "AI",
  "logoUrl": "/icons/nodes/openai_gpt.svg",
  "description": "OpenAI GPT chat completion (GPT-4, GPT-3.5)",
  "credentialType": "OpenAI API Key",
  "credentialSetupSteps": [
    "Go to https://platform.openai.com/api-keys.",
    "Click \"Create new secret key\", give it a name, and click \"Create secret key\".",
    "Copy the key immediately — it will only be shown once.",
    "In CtrlChecks, open Connections → Add Connection → OpenAI → paste the API key → Save."
  ],
  "credentialDocsUrl": "https://platform.openai.com/docs/api-reference/authentication",
  "resources": [
    {
      "name": "Configuration",
      "description": "OpenAI GPT is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the OpenAI GPT node.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "example": "gpt-4o",
              "placeholder": "gpt-4o"
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "User message or prompt to send to OpenAI",
              "example": "Summarize {{$json.text}}",
              "placeholder": "Summarize {{$json.text}}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use OpenAI GPT to execute in a workflow.",
            "inputValues": {
              "Model": "gpt-4o",
              "Prompt": "Summarize {{$json.text}}"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://platform.openai.com/docs/api-reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the OpenAI GPT node."
    },
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
