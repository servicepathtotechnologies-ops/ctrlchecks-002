import type { NodeDoc } from '../types';

export const waitDoc: NodeDoc = {
  "slug": "wait",
  "displayName": "Wait",
  "category": "Logic",
  "logoUrl": "/icons/nodes/wait.svg",
  "description": "Pause workflow execution Use this node when a workflow needs wait behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Wait is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Wait node using the configured input fields.",
          "fields": [
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": true,
              "description": "Wait duration value",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Unit",
              "internalKey": "unit",
              "type": "string",
              "required": false,
              "description": "Duration unit",
              "example": "milliseconds",
              "placeholder": "milliseconds",
              "defaultValue": "milliseconds"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Wait node.\nstructure: Value returned by the Wait node.",
          "usageExample": {
            "scenario": "Use Wait in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Duration": "1000",
              "Unit": "milliseconds"
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
    "function",
    "function_item",
    "if_else",
    "switch",
    "merge"
  ]
};
