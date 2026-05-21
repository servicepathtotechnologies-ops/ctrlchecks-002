import type { NodeDoc } from '../types';

export const returnDoc: NodeDoc = {
  "slug": "return",
  "displayName": "Return",
  "category": "Logic",
  "logoUrl": "/icons/nodes/return.svg",
  "description": "Stops workflow execution and returns the specified data",
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
              "required": false,
              "description": "Value to return (can be a template or static value)",
              "helpText": "What this field is: Value to return (can be a template or static value) for Return / Execute.\nHow to fill it: Enter the value value requested by Return, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.value}} or pick the value from the data picker.",
              "placeholder": "{{$json}}",
              "example": "{{$json}}"
            },
            {
              "name": "Include Input",
              "internalKey": "includeInput",
              "type": "boolean",
              "required": false,
              "description": "Include the input data in the return value",
              "helpText": "What this field is: An on/off choice for include input in Return / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Return to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
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
