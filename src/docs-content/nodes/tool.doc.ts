import type { NodeDoc } from '../types';

export const toolDoc: NodeDoc = {
  "slug": "tool",
  "displayName": "Tool",
  "category": "AI",
  "logoUrl": "/icons/nodes/tool.svg",
  "description": "Tool connector for AI Agent to use external functions Use this node when a workflow needs tool behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Tool is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Tool node using the configured input fields.",
          "fields": [
            {
              "name": "Tool Name",
              "internalKey": "toolName",
              "type": "string",
              "required": true,
              "description": "Tool name",
              "example": "http_request",
              "placeholder": "http_request"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Tool node.\nstructure: Value returned by the Tool node.",
          "usageExample": {
            "scenario": "Use Tool in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Tool Name": "http_request"
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
