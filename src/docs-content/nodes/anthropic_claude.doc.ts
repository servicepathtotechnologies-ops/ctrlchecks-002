import type { NodeDoc } from '../types';

export const anthropicClaudeDoc: NodeDoc = {
  "slug": "anthropic_claude",
  "displayName": "Claude",
  "category": "AI",
  "logoUrl": "/icons/nodes/anthropic_claude.svg",
  "description": "Anthropic Claude chat completion Use this node when a workflow needs claude behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Anthropic Credential",
  "credentialSetupSteps": [
    "Open the Claude developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Anthropic Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.anthropic.com/en/api/overview",
  "resources": [
    {
      "name": "Configuration",
      "description": "Claude is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Claude node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "example": "claude-3-opus",
              "placeholder": "claude-3-opus"
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
              "description": "Anthropic API key (node-level, required for this node to run)",
              "example": "anthropic-key-...",
              "placeholder": "anthropic-key-...",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Claude node.\nconvertible: Value returned by the Claude node.\ndefaultValue: Value returned by the Claude node.",
          "usageExample": {
            "scenario": "Use Claude in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Model": "claude-3-opus",
              "Messages": "{{$json.messages}}",
              "Api Key": "anthropic-key-..."
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.anthropic.com/en/api/overview"
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
    "google_gemini",
    "ollama"
  ]
};
