import type { NodeDoc } from '../types';

export const mergeDoc: NodeDoc = {
  "slug": "merge",
  "displayName": "Merge",
  "category": "Logic",
  "logoUrl": "/icons/nodes/merge.svg",
  "description": "Merge multiple branches of data Use this node when a workflow needs merge behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Merge is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Merge node using the configured input fields.",
          "fields": [
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "string",
              "required": true,
              "description": "Merge mode",
              "example": "append",
              "placeholder": "append"
            },
            {
              "name": "Join By",
              "internalKey": "joinBy",
              "type": "string",
              "required": false,
              "description": "Field to join on (for join mode)",
              "example": "{{ $json.joinBy }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Merge node.\nitemType: Value returned by the Merge node.\nconvertible: Value returned by the Merge node.\ndefaultValue: Value returned by the Merge node.",
          "usageExample": {
            "scenario": "Use Merge in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Mode": "append",
              "Join By": "{{ $json.joinBy }}"
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
    "error_handler"
  ]
};
