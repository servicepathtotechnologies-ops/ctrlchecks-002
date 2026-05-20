import type { NodeDoc } from '../types';

export const returnDoc: NodeDoc = {
  "slug": "return",
  "displayName": "Return",
  "category": "Logic",
  "logoUrl": "/icons/nodes/return.svg",
  "description": "Stops workflow execution and returns the specified data",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Return is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Stop the current workflow and return a specified value to the caller.",
          "fields": [
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "description": "Value to return (can be a template or static value)",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Include Input",
              "internalKey": "includeInput",
              "type": "boolean",
              "description": "Include the input data in the return value",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "returned": true,
            "value": {
              "success": true,
              "orderId": "ord_123"
            }
          },
          "outputDescription": "returned: true if the return was executed. value: The data returned to the caller.",
          "usageExample": {
            "scenario": "Return a success response from a sub-workflow to the parent workflow",
            "inputValues": {
              "value": "{\"success\": true, \"recordId\": \"{{$json.id}}\"}"
            },
            "expectedOutput": "The parent workflow receives `{{$json.value}}` from the Execute Workflow node."
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
