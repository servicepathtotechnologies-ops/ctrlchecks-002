import type { NodeDoc } from '../types';

export const functionItemDoc: NodeDoc = {
  "slug": "function_item",
  "displayName": "Function Item",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function_item.svg",
  "description": "Execute a function for each item in an array Use this node when a workflow needs function item behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Function Item is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Function Item node using the configured input fields.",
          "fields": [
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": true,
              "description": "Description of what should be done for each item",
              "example": "Process each contact",
              "placeholder": "Process each contact"
            },
            {
              "name": "Items",
              "internalKey": "items",
              "type": "json",
              "required": false,
              "description": "Array of items to process",
              "example": "{{$json.items}}",
              "placeholder": "{{$json.items}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Function Item node.\nitemType: Value returned by the Function Item node.\nconvertible: Value returned by the Function Item node.\ndefaultValue: Value returned by the Function Item node.",
          "usageExample": {
            "scenario": "Use Function Item in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Description": "Process each contact",
              "Items": "{{$json.items}}"
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
    "if_else",
    "switch",
    "merge",
    "error_handler"
  ]
};
