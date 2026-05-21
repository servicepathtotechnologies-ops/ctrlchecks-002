import type { NodeDoc } from '../types';

export const switchDoc: NodeDoc = {
  "slug": "switch",
  "displayName": "Switch",
  "category": "Logic",
  "logoUrl": "/icons/nodes/switch.svg",
  "description": "Multi-path conditional logic based on value matching",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: Expression or template evaluated to a scalar (e.g. {{$json.status}}). Must match one of cases[].value. for Switch / Execute.\nHow to fill it: Enter the expression value requested by Switch, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.expression}} or pick the value from the data picker.",
              "placeholder": "{{$json.status}}",
              "example": "{{$json.status}}"
            },
            {
              "name": "Cases",
              "internalKey": "cases",
              "type": "json",
              "required": true,
              "description": "Case definitions; each value becomes an outgoing port name. Example: [{ value: \"active\", label: \"Active\" }]",
              "helpText": "What this field is: The list of branches — each with a value to match and a label.\nFormat: JSON array of case objects with value and label.\nExample: [{\"value\":\"approved\",\"label\":\"Approved\"},{\"value\":\"rejected\",\"label\":\"Rejected\"},{\"value\":\"pending\",\"label\":\"Pending Review\"}]\nThe workflow takes the branch whose value matches the input. If no branch matches, it takes the \"default\" path.",
              "placeholder": "[{\"value\":\"active\",\"label\":\"Active\"},{\"value\":\"pending\",\"label\":\"Pending\"}]",
              "example": "[{\"value\":\"active\",\"label\":\"Active\"},{\"value\":\"pending\",\"label\":\"Pending\"}]"
            },
            {
              "name": "Routing Type",
              "internalKey": "routingType",
              "type": "string",
              "required": false,
              "description": "Optional hint: how expression is interpreted (e.g. expression, string, number)",
              "helpText": "What this field is: Optional hint: how expression is interpreted (e.g. expression, string, number) for Switch / Execute.\nHow to fill it: Enter the routing type value requested by Switch, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.routingType}} or pick the value from the data picker.",
              "placeholder": "expression",
              "example": "expression"
            },
            {
              "name": "Rules",
              "internalKey": "rules",
              "type": "json",
              "required": false,
              "description": "Deprecated alias for cases; migrated automatically to cases",
              "helpText": "What this field is: Deprecated alias for cases; migrated automatically to cases for Switch / Execute.\nHow to fill it: Enter valid JSON in the format Switch expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.rules}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
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
