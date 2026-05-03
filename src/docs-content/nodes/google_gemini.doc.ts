import type { NodeDoc } from '../types';

export const googleGeminiDoc: NodeDoc = {
  "slug": "google_gemini",
  "displayName": "Gemini",
  "category": "AI",
  "logoUrl": "/icons/nodes/google_gemini.svg",
  "description": "Google Gemini chat completion Use this node when a workflow needs gemini behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Open the Gemini developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Google Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://ai.google.dev/api",
  "resources": [
    {
      "name": "Configuration",
      "description": "Gemini is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Gemini node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "example": "gemini-2.5-pro",
              "placeholder": "gemini-2.5-pro"
            },
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
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Gemini API key (node-level, required for this node to run)",
              "example": "AIza...",
              "placeholder": "AIza...",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Gemini node.\nconvertible: Value returned by the Gemini node.\ndefaultValue: Value returned by the Gemini node.",
          "usageExample": {
            "scenario": "Use Gemini in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Model": "gemini-2.5-pro",
              "Prompt": "{{$json.prompt}}",
              "Api Key": "AIza..."
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://ai.google.dev/api"
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
    "openai_gpt",
    "anthropic_claude",
    "ollama"
  ]
};
