import type { NodeDoc } from '../types';

export const sortDoc: NodeDoc = {
  "slug": "sort",
  "displayName": "Sort",
  "category": "Data",
  "logoUrl": "/icons/nodes/sort.svg",
  "description": "Sort arrays",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Sort is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Sort an array of items by a field in ascending or descending order.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to sort by",
              "example": "name",
              "placeholder": "name"
            },
            {
              "name": "Direction",
              "internalKey": "direction",
              "type": "string",
              "description": "Sort direction: asc, desc",
              "example": "asc",
              "placeholder": "asc",
              "defaultValue": "asc"
            },
            {
              "name": "Type",
              "internalKey": "type",
              "type": "string",
              "description": "Value type: auto, number, string, date",
              "example": "auto",
              "placeholder": "auto",
              "defaultValue": "auto"
            }
          ],
          "outputExample": {
            "sorted": [
              {
                "name": "Alice",
                "score": 95
              },
              {
                "name": "Bob",
                "score": 80
              },
              {
                "name": "Carol",
                "score": 72
              }
            ],
            "field": "score",
            "direction": "desc"
          },
          "outputDescription": "sorted: The items array after sorting. field: The field used for sorting. direction: \"asc\" or \"desc\".",
          "usageExample": {
            "scenario": "Sort a leaderboard by score descending before displaying it",
            "inputValues": {
              "items": "{{$json.players}}",
              "field": "score",
              "direction": "desc"
            },
            "expectedOutput": "Top scores first in `{{$json.sorted}}`."
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
