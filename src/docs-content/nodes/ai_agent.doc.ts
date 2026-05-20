import type { NodeDoc } from '../types';

export const aiAgentDoc: NodeDoc = {
  "slug": "ai_agent",
  "displayName": "AI Agent",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_agent.svg",
  "description": "AI service node for prompt-based text generation and reasoning",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "AI Agent is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the AI Agent node.",
          "fields": [
            {
              "name": "User Input",
              "internalKey": "userInput",
              "type": "string",
              "description": "User input or prompt for the AI node",
              "example": "Process this data",
              "placeholder": "Process this data"
            },
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "description": "LLM model selection",
              "example": "gemini-2.5-flash",
              "placeholder": "gemini-2.5-flash",
              "defaultValue": "gemini-2.5-flash"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "json",
              "description": "Optional memory configuration (disabled by default)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Tool",
              "internalKey": "tool",
              "type": "json",
              "description": "Optional tool configuration (disabled by default)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use AI Agent to execute in a workflow.",
            "inputValues": {
              "User Input": "Process this data",
              "Model": "gemini-2.5-flash",
              "Memory": "{\"key\":\"value\"}",
              "Tool": "{\"key\":\"value\"}"
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
