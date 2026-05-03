import type { NodeDoc } from '../types';

export const returnDoc: NodeDoc = {
  "slug": "return",
  "displayName": "Return",
  "category": "Logic",
  "logoUrl": "/icons/nodes/return.svg",
  "description": "Stops workflow execution and returns the specified data Use this node when a workflow needs return behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Return is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Return node using the configured input fields.",
          "fields": [
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value to return (can be a template or static value)",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Include Input",
              "internalKey": "includeInput",
              "type": "boolean",
              "required": false,
              "description": "Include the input data in the return value",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "value": "value",
            "input": {}
          },
          "outputDescription": "value: Value returned by the Return node.\ninput: Value returned by the Return node.",
          "usageExample": {
            "scenario": "Use Return in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Value": "{{$json}}",
              "Include Input": "false"
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
