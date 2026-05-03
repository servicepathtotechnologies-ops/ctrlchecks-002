import type { NodeDoc } from '../types';

export const aiAgentDoc: NodeDoc = {
  "slug": "ai_agent",
  "displayName": "AI Agent",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_agent.svg",
  "description": "AI service node for prompt-based text generation and reasoning Use this node when a workflow needs ai agent behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "AI Agent is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the AI Agent node using the configured input fields.",
          "fields": [
            {
              "name": "User Input",
              "internalKey": "userInput",
              "type": "string",
              "required": false,
              "description": "User input or prompt for the AI node",
              "example": "Process this data",
              "placeholder": "Process this data"
            },
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": false,
              "description": "LLM model selection",
              "example": "gemini-2.5-flash",
              "placeholder": "gemini-2.5-flash",
              "defaultValue": "gemini-2.5-flash"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "json",
              "required": false,
              "description": "Optional memory configuration (disabled by default)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Tool",
              "internalKey": "tool",
              "type": "json",
              "required": false,
              "description": "Optional tool configuration (disabled by default)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Chat Model",
              "internalKey": "chat_model",
              "type": "json",
              "required": false,
              "description": "Optional chat model configuration",
              "example": "{\"provider\":\"gemini\",\"model\":\"gemini-2.5-flash\"}",
              "defaultValue": "{\"provider\":\"gemini\",\"model\":\"gemini-2.5-flash\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AI Agent node.\nconvertible: Value returned by the AI Agent node.\ndefaultValue: Value returned by the AI Agent node.",
          "usageExample": {
            "scenario": "Use AI Agent in a workflow and pass upstream data into configure.",
            "inputValues": {
              "User Input": "Process this data",
              "Model": "gemini-2.5-flash",
              "Memory": "{\"key\":\"value\"}",
              "Tool": "{\"key\":\"value\"}",
              "Chat Model": "{\"provider\":\"gemini\",\"model\":\"gemini-2.5-flash\"}"
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
    "ai_chat_model",
    "openai_gpt",
    "anthropic_claude",
    "google_gemini",
    "ollama"
  ]
};
