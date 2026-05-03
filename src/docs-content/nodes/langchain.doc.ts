import type { NodeDoc } from '../types';

export const langchainDoc: NodeDoc = {
  "slug": "langchain",
  "displayName": "LangChain",
  "category": "AI",
  "logoUrl": "/icons/nodes/langchain.svg",
  "description": "Orchestrate AI chains and agents using LangChain with configurable LLM providers and tools. Use this node when a workflow needs langchain behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Api Key Credential",
  "credentialSetupSteps": [
    "Open the LangChain developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Api Key Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "LangChain exposes operation choices directly.",
      "operations": [
        {
          "name": "Run Chain",
          "value": "run_chain",
          "description": "Run Chain with the LangChain node using the configured input fields.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "string",
              "required": true,
              "description": "Input prompt or task description",
              "example": "{{ $json.prompt }}",
              "defaultValue": ""
            },
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "required": false,
              "description": "LLM provider",
              "example": "openai",
              "defaultValue": "openai",
              "options": [
                "OpenAI",
                "Anthropic / Claude"
              ]
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "required": false,
              "description": "Tool definitions for agent mode",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "required": false,
              "description": "Enable conversation memory",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "API key for LLM provider",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "langchain"
          },
          "outputDescription": "success: Indicates that the LangChain node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use LangChain in a workflow and pass upstream data into run chain.",
            "inputValues": {
              "Prompt": "{{ $json.prompt }}",
              "Provider": "openai",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": "{{ $json.apiKey }}"
            },
            "expectedOutput": "The node runs run chain and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Run Agent",
          "value": "run_agent",
          "description": "Run Agent with the LangChain node using the configured input fields.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "string",
              "required": true,
              "description": "Input prompt or task description",
              "example": "{{ $json.prompt }}",
              "defaultValue": ""
            },
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "required": false,
              "description": "LLM provider",
              "example": "openai",
              "defaultValue": "openai",
              "options": [
                "OpenAI",
                "Anthropic / Claude"
              ]
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "required": false,
              "description": "Tool definitions for agent mode",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "required": false,
              "description": "Enable conversation memory",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "API key for LLM provider",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "langchain"
          },
          "outputDescription": "success: Indicates that the LangChain node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use LangChain in a workflow and pass upstream data into run agent.",
            "inputValues": {
              "Prompt": "{{ $json.prompt }}",
              "Provider": "openai",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": "{{ $json.apiKey }}"
            },
            "expectedOutput": "The node runs run agent and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
    "google_gemini"
  ]
};
