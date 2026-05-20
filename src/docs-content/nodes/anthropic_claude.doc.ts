import type { NodeDoc } from '../types';

export const anthropicClaudeDoc: NodeDoc = {
  "slug": "anthropic_claude",
  "displayName": "Claude",
  "category": "AI",
  "logoUrl": "/icons/nodes/anthropic_claude.svg",
  "description": "Anthropic Claude chat completion",
  "credentialType": "Anthropic API Key",
  "credentialSetupSteps": [
    "Go to https://console.anthropic.com/settings/keys.",
    "Click \"Create Key\", give it a name, and copy the key.",
    "In CtrlChecks, open Connections → Add Connection → Anthropic Claude → paste the API key → Save."
  ],
  "credentialDocsUrl": "https://docs.anthropic.com/en/api/getting-started",
  "resources": [
    {
      "name": "Configuration",
      "description": "Claude is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Claude node.",
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
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Anthropic API key (node-level, required for this node to run)",
              "example": "anthropic-key-...",
              "placeholder": "anthropic-key-...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Messages",
              "internalKey": "messages",
              "type": "json",
              "required": true,
              "description": "Chat messages",
              "example": "[\"{{$json.messages}}\"]",
              "placeholder": "[\"{{$json.messages}}\"]"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Claude to execute in a workflow.",
            "inputValues": {
              "Model": "claude-3-opus",
              "Api Key": "anthropic-key-...",
              "Messages": "[\"{{$json.messages}}\"]"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.anthropic.com/en/api/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Claude node."
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
