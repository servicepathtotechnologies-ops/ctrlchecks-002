import type { NodeDoc } from '../types';

export const memoryDoc: NodeDoc = {
  "slug": "memory",
  "displayName": "Memory",
  "category": "AI",
  "logoUrl": "/icons/nodes/memory.svg",
  "description": "Memory storage for AI Agent context Use this node when a workflow needs memory behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Memory is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Memory node using the configured input fields.",
          "fields": [
            {
              "name": "Context",
              "internalKey": "context",
              "type": "string",
              "required": false,
              "description": "Memory context",
              "example": "{{$json.context}}",
              "placeholder": "{{$json.context}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Memory node.\nstructure: Value returned by the Memory node.",
          "usageExample": {
            "scenario": "Use Memory in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Context": "{{$json.context}}"
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
