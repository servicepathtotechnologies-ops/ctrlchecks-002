import type { NodeDoc } from '../types';

export const langchainDoc: NodeDoc = {
  "slug": "langchain",
  "displayName": "LangChain",
  "category": "AI",
  "logoUrl": "/icons/nodes/langchain.svg",
  "description": "Orchestrate AI chains and agents using LangChain with configurable LLM providers and tools.",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "LangChain exposes operation choices directly.",
      "operations": [
        {
          "name": "Run chain",
          "value": "run_chain",
          "description": "Run chain using the LangChain node.",
          "fields": [
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "description": "LLM provider",
              "example": "openai",
              "placeholder": "openai",
              "defaultValue": "openai",
              "options": [
                "OpenAI",
                "Anthropic / Claude"
              ]
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Input prompt or task description"
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "description": "Tool definitions for agent mode",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "description": "Enable conversation memory",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "API key for LLM provider",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LangChain to run chain in a workflow.",
            "inputValues": {
              "Provider": "openai",
              "Prompt": "",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": ""
            },
            "expectedOutput": "The node executes run chain and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Run agent",
          "value": "run_agent",
          "description": "Run agent using the LangChain node.",
          "fields": [
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "description": "LLM provider",
              "example": "openai",
              "placeholder": "openai",
              "defaultValue": "openai",
              "options": [
                "OpenAI",
                "Anthropic / Claude"
              ]
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Input prompt or task description"
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "description": "Tool definitions for agent mode",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "description": "Enable conversation memory",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "API key for LLM provider",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LangChain to run agent in a workflow.",
            "inputValues": {
              "Provider": "openai",
              "Prompt": "",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": ""
            },
            "expectedOutput": "The node executes run agent and exposes its result for downstream nodes."
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
