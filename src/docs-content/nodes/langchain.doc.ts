import type { NodeDoc } from '../types';

export const langchainDoc: NodeDoc = {
  "slug": "langchain",
  "displayName": "LangChain",
  "category": "AI",
  "logoUrl": "/icons/nodes/langchain.svg",
  "description": "Orchestrate AI chains and agents using LangChain with configurable LLM providers and tools.",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "required": false,
              "description": "LLM provider",
              "helpText": "What this field is: LLM provider for LangChain / Run chain.\nWhere to find it: Open the item in LangChain and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "openai",
              "example": "openai",
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
              "description": "Input prompt or task description",
              "helpText": "What this field is: Input prompt or task description for LangChain / Run chain.\nHow to fill it: Type the message, prompt, or content you want LangChain to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Summarize {{$json.text}}"
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "required": false,
              "description": "Tool definitions for agent mode",
              "helpText": "What this field is: Tool definitions for agent mode for LangChain / Run chain.\nHow to fill it: Enter valid JSON in the format LangChain expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.tools}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "required": false,
              "description": "Enable conversation memory",
              "helpText": "What this field is: An on/off choice for memory in LangChain / Run chain.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LangChain to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "API key for LLM provider",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access LangChain.\nWhere to get it: Open the LangChain dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "run_chain",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming LangChain data with run chain after a related upstream event is received",
            "inputValues": {
              "Provider": "openai",
              "Prompt": "",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": ""
            },
            "expectedOutput": "LangChain returns structured run chain data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "LLM provider",
              "helpText": "What this field is: LLM provider for LangChain / Run agent.\nWhere to find it: Open the item in LangChain and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "openai",
              "example": "openai",
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
              "description": "Input prompt or task description",
              "helpText": "What this field is: Input prompt or task description for LangChain / Run agent.\nHow to fill it: Type the message, prompt, or content you want LangChain to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Summarize {{$json.text}}"
            },
            {
              "name": "Tools",
              "internalKey": "tools",
              "type": "json",
              "required": false,
              "description": "Tool definitions for agent mode",
              "helpText": "What this field is: Tool definitions for agent mode for LangChain / Run agent.\nHow to fill it: Enter valid JSON in the format LangChain expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.tools}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "boolean",
              "required": false,
              "description": "Enable conversation memory",
              "helpText": "What this field is: An on/off choice for memory in LangChain / Run agent.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LangChain to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "API key for LLM provider",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access LangChain.\nWhere to get it: Open the LangChain dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "run_agent",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming LangChain data with run agent after a related upstream event is received",
            "inputValues": {
              "Provider": "openai",
              "Prompt": "",
              "Tools": "[]",
              "Memory": "false",
              "Api Key": ""
            },
            "expectedOutput": "LangChain returns structured run agent data that downstream nodes can reference with {{$json.fieldName}}."
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
