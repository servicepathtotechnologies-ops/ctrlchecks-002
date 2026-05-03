import type { NodeDoc } from '../types';

export const switchDoc: NodeDoc = {
  "slug": "switch",
  "displayName": "Switch",
  "category": "Logic",
  "logoUrl": "/icons/nodes/switch.svg",
  "description": "Multi-path conditional logic based on value matching Use this node when a workflow needs switch behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Switch is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Switch node using the configured input fields.",
          "fields": [
            {
              "name": "Expression",
              "internalKey": "expression",
              "type": "string",
              "required": true,
              "description": "Expression or template evaluated to a scalar (e.g. {{$json.status}}). Must match one of cases[].value.",
              "example": "{{$json.status}}",
              "placeholder": "{{$json.status}}"
            },
            {
              "name": "Cases",
              "internalKey": "cases",
              "type": "json",
              "required": true,
              "description": "Case definitions; each value becomes an outgoing port name. Example: [{ value: \"active\", label: \"Active\" }]",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            },
            {
              "name": "Routing Type",
              "internalKey": "routingType",
              "type": "string",
              "required": false,
              "description": "Optional hint: how expression is interpreted (e.g. expression, string, number)",
              "example": "expression",
              "placeholder": "expression"
            },
            {
              "name": "Rules",
              "internalKey": "rules",
              "type": "json",
              "required": false,
              "description": "Deprecated alias for cases; migrated automatically to cases",
              "example": "[\"value\"]"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Switch node.\nconvertible: Value returned by the Switch node.",
          "usageExample": {
            "scenario": "Use Switch in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Expression": "{{$json.status}}",
              "Cases": "[object Object],[object Object]",
              "Routing Type": "expression",
              "Rules": "[\"value\"]"
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
    "merge",
    "error_handler"
  ]
};
