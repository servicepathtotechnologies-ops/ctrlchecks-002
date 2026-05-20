import type { NodeDoc } from '../types';

export const javascriptDoc: NodeDoc = {
  "slug": "javascript",
  "displayName": "JavaScript",
  "category": "Data",
  "logoUrl": "/icons/nodes/javascript.svg",
  "description": "Execute custom JavaScript code",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "JavaScript is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute custom JavaScript code to transform data or perform calculations.",
          "fields": [
            {
              "name": "Code",
              "internalKey": "code",
              "type": "string",
              "required": true,
              "description": "JavaScript code to execute",
              "example": "return { ...$json, fullName: $json.firstName + \" \" + $json.lastName };",
              "placeholder": "return { ...$json, fullName: $json.firstName + \" \" + $json.lastName };"
            }
          ],
          "outputExample": {
            "result": {
              "totalRevenue": 12450,
              "averageOrderValue": 207.5,
              "orderCount": 60
            },
            "executionMs": 3
          },
          "outputDescription": "result: Whatever your script returns. executionMs: How long the script took to run.",
          "usageExample": {
            "scenario": "Calculate revenue statistics from an array of orders",
            "inputValues": {
              "code": "const orders = $json.orders;\nconst total = orders.reduce((sum, o) => sum + o.amount, 0);\nreturn { totalRevenue: total, averageOrderValue: total / orders.length, orderCount: orders.length };"
            },
            "expectedOutput": "`{{$json.result.totalRevenue}}` holds the computed total. Use in downstream email or Slack notifications."
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
