import type { NodeDoc } from '../types';

export const functionDoc: NodeDoc = {
  "slug": "function",
  "displayName": "Function",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function.svg",
  "description": "Execute a custom function with input parameters Use this node when a workflow needs function behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Function is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Function node using the configured input fields.",
          "fields": [
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": true,
              "description": "Description of what this function should do",
              "example": "Transform contact data",
              "placeholder": "Transform contact data"
            },
            {
              "name": "Code",
              "internalKey": "code",
              "type": "string",
              "required": false,
              "description": "Optional JavaScript code for the function",
              "example": "return { ...$json, processed: true };",
              "placeholder": "return { ...$json, processed: true };"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "date",
              "required": false,
              "description": "Execution timeout in milliseconds (max 30000)",
              "example": "5000",
              "placeholder": "5000",
              "defaultValue": "10000"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Function node.\nconvertible: Value returned by the Function node.",
          "usageExample": {
            "scenario": "Use Function in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Description": "Transform contact data",
              "Code": "return { ...$json, processed: true };",
              "Timeout": "5000"
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
    "function_item",
    "if_else",
    "switch",
    "merge",
    "error_handler"
  ]
};
