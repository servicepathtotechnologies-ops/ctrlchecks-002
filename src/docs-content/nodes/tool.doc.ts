import type { NodeDoc } from '../types';

export const toolDoc: NodeDoc = {
  "slug": "tool",
  "displayName": "Tool",
  "category": "AI",
  "logoUrl": "/icons/nodes/tool.svg",
  "description": "Tool connector for AI Agent to use external functions",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Tool is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Tool node.",
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
            "name": "",
            "description": "",
            "parameters": {}
          },
          "outputDescription": "name: Value returned by this node.\ndescription: Value returned by this node.\nparameters: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Tool to execute in a workflow.",
            "inputValues": {
              "Tool Name": "http_request"
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
