import type { NodeDoc } from '../types';

export const noopDoc: NodeDoc = {
  "slug": "noop",
  "displayName": "NoOp",
  "category": "Logic",
  "logoUrl": "/icons/nodes/noop.svg",
  "description": "Pass through node - no operation Use this node when a workflow needs noop behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "NoOp is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the NoOp node using the configured input fields.",
          "fields": [],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the NoOp node.\nconvertible: Value returned by the NoOp node.",
          "usageExample": {
            "scenario": "Use NoOp in a workflow and pass upstream data into configure.",
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
