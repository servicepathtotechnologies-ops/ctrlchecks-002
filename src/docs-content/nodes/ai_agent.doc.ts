import type { NodeDoc } from '../types';

export const aiAgentDoc: NodeDoc = {
  "slug": "ai_agent",
  "displayName": "AI Agent",
  "category": "AI",
  "logoUrl": "/icons/nodes/ai_agent.svg",
  "description": "AI service node for prompt-based text generation and reasoning",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "required": false,
              "description": "User input or prompt for the AI node",
              "helpText": "What this field is: User input or prompt for the AI node for AI Agent / Execute.\nHow to fill it: Enter the user input value requested by AI Agent, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.userInput}} or pick the value from the data picker.",
              "placeholder": "Process this data",
              "example": "Process this data"
            },
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": false,
              "description": "LLM model selection",
              "helpText": "What this field is: LLM model selection for AI Agent / Execute.\nHow to fill it: Enter the model value requested by AI Agent, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.model}} or pick the value from the data picker.",
              "placeholder": "gemini-2.5-flash",
              "example": "gemini-2.5-flash",
              "defaultValue": "gemini-2.5-flash"
            },
            {
              "name": "Memory",
              "internalKey": "memory",
              "type": "json",
              "required": false,
              "description": "Optional memory configuration (disabled by default)",
              "helpText": "What this field is: Optional memory configuration (disabled by default) for AI Agent / Execute.\nHow to fill it: Enter valid JSON in the format AI Agent expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.memory}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Tool",
              "internalKey": "tool",
              "type": "json",
              "required": false,
              "description": "Optional tool configuration (disabled by default)",
              "helpText": "What this field is: Optional tool configuration (disabled by default) for AI Agent / Execute.\nHow to fill it: Enter valid JSON in the format AI Agent expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.tool}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "text": "The order is ready to ship and the customer has been notified.",
            "length": 62
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming AI Agent data with execute after a related upstream event is received",
            "inputValues": {
              "User Input": "Process this data",
              "Model": "gemini-2.5-flash",
              "Memory": "{\"key\":\"value\"}",
              "Tool": "{\"key\":\"value\"}"
            },
            "expectedOutput": "AI Agent returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
