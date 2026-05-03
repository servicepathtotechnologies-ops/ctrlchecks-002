import type { NodeDoc } from '../types';

export const loopDoc: NodeDoc = {
  "slug": "loop",
  "displayName": "Loop",
  "category": "Logic",
  "logoUrl": "/icons/nodes/loop.svg",
  "description": "Iterate over array items with max iterations limit Use this node when a workflow needs loop behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Loop is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Loop node using the configured input fields.",
          "fields": [
            {
              "name": "Items",
              "internalKey": "items",
              "type": "json",
              "required": true,
              "description": "Array to iterate over",
              "example": "{{$json.items}}",
              "placeholder": "{{$json.items}}"
            },
            {
              "name": "Max Iterations",
              "internalKey": "maxIterations",
              "type": "number",
              "required": false,
              "description": "Maximum iterations",
              "example": "100",
              "placeholder": "100",
              "defaultValue": "100"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Loop node.\nitemType: Value returned by the Loop node.\nconvertible: Value returned by the Loop node.\ndefaultValue: Value returned by the Loop node.",
          "usageExample": {
            "scenario": "Use Loop in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Items": "{{$json.items}}",
              "Max Iterations": "100"
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
