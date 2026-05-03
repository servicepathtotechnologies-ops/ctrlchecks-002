import type { NodeDoc } from '../types';

export const tryCatchDoc: NodeDoc = {
  "slug": "try_catch",
  "displayName": "Try/Catch",
  "category": "Logic",
  "logoUrl": "/icons/nodes/try_catch.svg",
  "description": "Executes a branch and catches errors, routing to error handler Use this node when a workflow needs try/catch behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Try/Catch is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Try/Catch node using the configured input fields.",
          "fields": [],
          "outputExample": {
            "success": true,
            "error": "error"
          },
          "outputDescription": "success: Value returned by the Try/Catch node.\nerror: Value returned by the Try/Catch node.",
          "usageExample": {
            "scenario": "Use Try/Catch in a workflow and pass upstream data into configure.",
            "inputValues": {},
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
    "function",
    "function_item",
    "if_else",
    "switch",
    "merge"
  ]
};
