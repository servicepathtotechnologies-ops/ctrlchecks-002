import type { NodeDoc } from '../types';

export const loopDoc: NodeDoc = {
  "slug": "loop",
  "displayName": "Loop",
  "category": "Logic",
  "logoUrl": "/icons/nodes/loop.svg",
  "description": "Iterate over array items with max iterations limit",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Loop is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Loop over an array of items and run the connected branch for each one.",
          "fields": [
            {
              "name": "Items",
              "internalKey": "items",
              "type": "json",
              "required": true,
              "description": "Array to iterate over",
              "example": "{{$json.items}}",
              "placeholder": "{{$json.items}}"
            },
            {
              "name": "Max Iterations",
              "internalKey": "maxIterations",
              "type": "number",
              "description": "Maximum iterations",
              "example": "100",
              "placeholder": "100",
              "defaultValue": "100"
            }
          ],
          "outputExample": {
            "processedCount": 3,
            "results": [
              {
                "id": 1,
                "sent": true
              },
              {
                "id": 2,
                "sent": true
              },
              {
                "id": 3,
                "sent": true
              }
            ]
          },
          "outputDescription": "processedCount: How many items were processed. results: Array of outputs from each iteration.",
          "usageExample": {
            "scenario": "Send a personalised email to each user in a list",
            "inputValues": {
              "items": "{{$json.users}}"
            },
            "expectedOutput": "The connected branch runs once per user. Each iteration receives `{{$item}}` as the current user."
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
