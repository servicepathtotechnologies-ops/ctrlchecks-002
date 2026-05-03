import type { NodeDoc } from '../types';

export const openaiGptDoc: NodeDoc = {
  "slug": "openai_gpt",
  "displayName": "OpenAI GPT",
  "category": "AI",
  "logoUrl": "/icons/nodes/openai_gpt.svg",
  "description": "OpenAI GPT chat completion (GPT-4, GPT-3.5) Use this node when a workflow needs openai gpt behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Openai Credential",
  "credentialSetupSteps": [
    "Open the OpenAI GPT developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Openai Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://platform.openai.com/docs/api-reference",
  "resources": [
    {
      "name": "Configuration",
      "description": "OpenAI GPT is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the OpenAI GPT node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "example": "gpt-4",
              "placeholder": "gpt-4"
            },
            {
              "name": "Messages",
              "internalKey": "messages",
              "type": "json",
              "required": true,
              "description": "Chat messages",
              "example": "{{$json.messages}}",
              "placeholder": "{{$json.messages}}"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "OpenAI API key (node-level, required for this node to run)",
              "example": "sk-...",
              "placeholder": "sk-...",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the OpenAI GPT node.\nconvertible: Value returned by the OpenAI GPT node.\ndefaultValue: Value returned by the OpenAI GPT node.",
          "usageExample": {
            "scenario": "Use OpenAI GPT in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Model": "gpt-4",
              "Messages": "{{$json.messages}}",
              "Api Key": "sk-..."
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://platform.openai.com/docs/api-reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
    "anthropic_claude",
    "google_gemini",
    "ollama"
  ]
};
