import type { NodeDoc } from '../types';

export const limitDoc: NodeDoc = {
  "slug": "limit",
  "displayName": "Limit",
  "category": "Data",
  "logoUrl": "/icons/nodes/limit.svg",
  "description": "Limit array size",
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
      "description": "Limit is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Take only the first N items from an array.",
          "fields": [
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": true,
              "description": "Maximum items",
              "helpText": "What this field is: A number used for limit in Limit / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Array",
              "internalKey": "array",
              "type": "json",
              "required": false,
              "description": "Array to limit",
              "helpText": "What this field is: Array to limit for Limit / Execute.\nHow to fill it: Enter valid JSON in the format Limit expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.array}} or pick the value from the data picker.",
              "placeholder": "{{$json.items}}",
              "example": "{{$json.items}}"
            }
          ],
          "outputExample": {
            "items": [
              {
                "id": 1
              },
              {
                "id": 2
              },
              {
                "id": 3
              }
            ],
            "total": 10,
            "returned": 3
          },
          "outputDescription": "items: The truncated array. total: Original array length. returned: Number of items after limiting.",
          "usageExample": {
            "scenario": "Take only the top 5 results from a large dataset",
            "inputValues": {
              "items": "{{$json.results}}",
              "limit": "5"
            },
            "expectedOutput": "First 5 items in `{{$json.items}}`."
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
