import type { NodeDoc } from '../types';

export const ifElseDoc: NodeDoc = {
  "slug": "if_else",
  "displayName": "If/Else",
  "category": "Logic",
  "logoUrl": "/icons/nodes/if_else.svg",
  "description": "Conditional branching based on true/false condition",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "If/Else is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Branch the workflow: if the condition is true, the \"true\" path runs; otherwise the \"false\" path runs.",
          "fields": [
            {
              "name": "Conditions",
              "internalKey": "conditions",
              "type": "json",
              "required": true,
              "description": "Conditions to evaluate. Each condition should have: field (string), operator (equals|not_equals|greater_than|less_than|greater_than_or_equal|less_than_or_equal|contains|not_contains), value (string|number|boolean)",
              "example": "[{\"field\":\"$json.age\",\"operator\":\"greater_than_or_equal\",\"value\":18}]",
              "placeholder": "[{\"field\":\"$json.age\",\"operator\":\"greater_than_or_equal\",\"value\":18}]"
            },
            {
              "name": "Combine Operation",
              "internalKey": "combineOperation",
              "type": "string",
              "description": "How to combine conditions",
              "example": "AND",
              "placeholder": "AND",
              "defaultValue": "AND"
            }
          ],
          "outputExample": {
            "condition": true,
            "branch": "true",
            "value": "premium",
            "expression": "{{$json.plan}} === \"premium\""
          },
          "outputDescription": "condition: The evaluated boolean result. branch: \"true\" or \"false\" indicating which path was taken. value: The value that was evaluated.",
          "usageExample": {
            "scenario": "Route premium users to a VIP welcome email and free users to a trial email",
            "inputValues": {
              "condition": "{{$json.plan === \"premium\"}}"
            },
            "expectedOutput": "If `condition` is true, the \"true\" output path runs (connect a Gmail Send node). Otherwise the \"false\" path runs (connect a different email node)."
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
