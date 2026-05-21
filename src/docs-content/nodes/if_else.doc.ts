import type { NodeDoc } from '../types';

export const ifElseDoc: NodeDoc = {
  "slug": "if_else",
  "displayName": "If/Else",
  "category": "Logic",
  "logoUrl": "/icons/nodes/if_else.svg",
  "description": "Conditional branching based on true/false condition",
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
              "helpText": "What this field is: The rule that decides which path (TRUE or FALSE) the workflow takes after this step.\nFormat: JSON array of condition objects. Each condition has:\n  field    →  the value to check (use {{$json.fieldName}} to check a value from the previous step)\n  operator →  how to compare (equals, not_equals, greater_than, less_than, contains, not_contains, is_empty)\n  value    →  what to compare against\nExample (single condition): [{\"field\":\"{{$json.orderTotal}}\",\"operator\":\"greater_than\",\"value\":100}]\nThis means: if the order total is greater than 100, go down the TRUE path. Otherwise go down the FALSE path.\nExample (multiple): [{\"field\":\"{{$json.country}}\",\"operator\":\"equals\",\"value\":\"US\"},{\"field\":\"{{$json.plan}}\",\"operator\":\"equals\",\"value\":\"pro\"}]\nUse the \"Combine Operation\" field to set AND (all must match) or OR (any one match is enough).",
              "placeholder": "[{\"field\":\"$json.age\",\"operator\":\"greater_than_or_equal\",\"value\":18}]",
              "example": "[{\"field\":\"$json.age\",\"operator\":\"greater_than_or_equal\",\"value\":18}]"
            },
            {
              "name": "Combine Operation",
              "internalKey": "combineOperation",
              "type": "string",
              "required": false,
              "description": "How to combine conditions",
              "helpText": "What this field is: How to combine multiple conditions (when you have more than one condition in the list).\nAND = ALL conditions must be true for the workflow to take the TRUE path.\nOR  = ANY one condition being true sends the workflow down the TRUE path.\nExample: AND — use when you need the order to be BOTH over $100 AND from a US customer.",
              "placeholder": "AND",
              "example": "AND",
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
