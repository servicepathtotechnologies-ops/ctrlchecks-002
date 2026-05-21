import type { NodeDoc } from '../types';

export const sortDoc: NodeDoc = {
  "slug": "sort",
  "displayName": "Sort",
  "category": "Data",
  "logoUrl": "/icons/nodes/sort.svg",
  "description": "Sort arrays",
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
              "required": false,
              "description": "Field to sort by",
              "helpText": "What this field is: Field to sort by for Sort / Execute.\nHow to fill it: Enter the field value requested by Sort, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.field}} or pick the value from the data picker.",
              "placeholder": "name",
              "example": "name"
            },
            {
              "name": "Direction",
              "internalKey": "direction",
              "type": "string",
              "required": false,
              "description": "Sort direction: asc, desc",
              "helpText": "What this field is: Sort direction: asc, desc for Sort / Execute.\nHow to fill it: Enter the direction value requested by Sort, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.direction}} or pick the value from the data picker.",
              "placeholder": "asc",
              "example": "asc",
              "defaultValue": "asc"
            },
            {
              "name": "Type",
              "internalKey": "type",
              "type": "string",
              "required": false,
              "description": "Value type: auto, number, string, date",
              "helpText": "What this field is: Value type: auto, number, string, date for Sort / Execute.\nHow to fill it: Enter the type value requested by Sort, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.type}} or pick the value from the data picker.",
              "placeholder": "auto",
              "example": "auto",
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
