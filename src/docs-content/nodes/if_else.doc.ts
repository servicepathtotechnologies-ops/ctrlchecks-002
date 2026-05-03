import type { NodeDoc } from '../types';

export const ifElseDoc: NodeDoc = {
  "slug": "if_else",
  "displayName": "If/Else",
  "category": "Logic",
  "logoUrl": "/icons/nodes/if_else.svg",
  "description": "Conditional branching based on true/false condition Use this node when a workflow needs if/else behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "If/Else is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the If/Else node using the configured input fields.",
          "fields": [
            {
              "name": "Conditions",
              "internalKey": "conditions",
              "type": "json",
              "required": true,
              "description": "Conditions to evaluate. Each condition should have: field (string), operator (equals|not_equals|greater_than|less_than|greater_than_or_equal|less_than_or_equal|contains|not_contains), value (string|number|boolean)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Combine Operation",
              "internalKey": "combineOperation",
              "type": "string",
              "required": false,
              "description": "How to combine conditions",
              "example": "AND",
              "placeholder": "AND",
              "defaultValue": "AND"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the If/Else node.\nconvertible: Value returned by the If/Else node.",
          "usageExample": {
            "scenario": "Use If/Else in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Conditions": "[object Object]",
              "Combine Operation": "AND"
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
    "switch",
    "merge",
    "error_handler"
  ]
};
