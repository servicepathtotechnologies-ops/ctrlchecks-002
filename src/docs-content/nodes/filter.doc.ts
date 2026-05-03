import type { NodeDoc } from '../types';

export const filterDoc: NodeDoc = {
  "slug": "filter",
  "displayName": "Filter",
  "category": "Logic",
  "logoUrl": "/icons/nodes/filter.svg",
  "description": "Filter array items by condition Use this node when a workflow needs filter behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Filter is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Filter node using the configured input fields.",
          "fields": [
            {
              "name": "Condition",
              "internalKey": "condition",
              "type": "string",
              "required": true,
              "description": "Filter condition",
              "example": "{{$json.age}} >= 18",
              "placeholder": "{{$json.age}} >= 18"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Filter node.\nitemType: Value returned by the Filter node.\nconvertible: Value returned by the Filter node.\ndefaultValue: Value returned by the Filter node.",
          "usageExample": {
            "scenario": "Use Filter in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Condition": "{{$json.age}} >= 18"
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
