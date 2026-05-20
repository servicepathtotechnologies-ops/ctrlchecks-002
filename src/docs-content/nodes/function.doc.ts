import type { NodeDoc } from '../types';

export const functionDoc: NodeDoc = {
  "slug": "function",
  "displayName": "Function",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function.svg",
  "description": "Execute a custom function with input parameters",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Function is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Function node.",
          "fields": [
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": true,
              "description": "Description of what this function should do",
              "example": "Transform contact data",
              "placeholder": "Transform contact data"
            },
            {
              "name": "Code",
              "internalKey": "code",
              "type": "string",
              "description": "Optional JavaScript code for the function",
              "example": "return { ...$json, processed: true };",
              "placeholder": "return { ...$json, processed: true };"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "description": "Execution timeout in milliseconds (max 30000)",
              "example": "5000",
              "placeholder": "5000",
              "defaultValue": "10000"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Function to execute in a workflow.",
            "inputValues": {
              "Description": "Transform contact data",
              "Code": "return { ...$json, processed: true };",
              "Timeout": "5000"
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
