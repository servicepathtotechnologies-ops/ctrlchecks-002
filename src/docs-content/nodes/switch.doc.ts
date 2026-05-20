import type { NodeDoc } from '../types';

export const switchDoc: NodeDoc = {
  "slug": "switch",
  "displayName": "Switch",
  "category": "Logic",
  "logoUrl": "/icons/nodes/switch.svg",
  "description": "Multi-path conditional logic based on value matching",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Switch is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Branch the workflow into multiple paths based on a value match.",
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
              "example": "[{\"value\":\"active\",\"label\":\"Active\"},{\"value\":\"pending\",\"label\":\"Pending\"}]",
              "placeholder": "[{\"value\":\"active\",\"label\":\"Active\"},{\"value\":\"pending\",\"label\":\"Pending\"}]"
            },
            {
              "name": "Routing Type",
              "internalKey": "routingType",
              "type": "string",
              "description": "Optional hint: how expression is interpreted (e.g. expression, string, number)",
              "example": "expression",
              "placeholder": "expression"
            },
            {
              "name": "Rules",
              "internalKey": "rules",
              "type": "json",
              "description": "Deprecated alias for cases; migrated automatically to cases",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            }
          ],
          "outputExample": {
            "matched": "billing",
            "value": "billing",
            "branch": 1
          },
          "outputDescription": "matched: The case that was matched. value: The actual value evaluated. branch: The index of the matched case (1-based).",
          "usageExample": {
            "scenario": "Route a support ticket to the right team based on the category",
            "inputValues": {
              "value": "{{$json.category}}",
              "cases": "[\"billing\", \"technical\", \"general\"]"
            },
            "expectedOutput": "Connect different downstream nodes to the \"billing\", \"technical\", and \"general\" output ports."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an upstream expression resolved to an empty value.",
      "fix": "Open the node, fill every required field, and verify the upstream node output before running."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node documentation."
    }
  ],
  "relatedNodes": []
};
