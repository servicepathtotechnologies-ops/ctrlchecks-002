import type { NodeDoc } from '../types';

export const errorHandlerDoc: NodeDoc = {
  "slug": "error_handler",
  "displayName": "Error Handler",
  "category": "Logic",
  "logoUrl": "/icons/nodes/error_handler.svg",
  "description": "Handle errors with retry logic and fallback values",
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
      "description": "Error Handler is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Handle errors in a workflow branch with retry logic and fallback values.",
          "fields": [
            {
              "name": "Continue On Fail",
              "internalKey": "continueOnFail",
              "type": "boolean",
              "required": false,
              "description": "Continue workflow after error",
              "helpText": "What this field is: An on/off choice for continue on fail in Error Handler / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Error Handler to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry failed node",
              "helpText": "What this field is: An on/off choice for retry on fail in Error Handler / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Error Handler to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in Error Handler / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            },
            {
              "name": "Retry Delay",
              "internalKey": "retryDelay",
              "type": "number",
              "required": false,
              "description": "Delay between retries (ms)",
              "helpText": "What this field is: A number used for retry delay in Error Handler / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.retryDelay}} or pick the value from the data picker.",
              "placeholder": "5000",
              "example": "5000",
              "defaultValue": "5000"
            }
          ],
          "outputExample": {
            "handled": true,
            "error": {
              "message": "Connection timeout",
              "code": "ECONNRESET"
            },
            "fallback": {
              "status": "error_handled"
            }
          },
          "outputDescription": "handled: true if the error was caught. error: The original error object. fallback: The fallback value configured.",
          "usageExample": {
            "scenario": "Catch HTTP request failures and return a fallback value instead of stopping the workflow",
            "inputValues": {
              "fallbackValue": "{\"status\": \"unavailable\"}",
              "maxRetries": "3"
            },
            "expectedOutput": "On error, `{{$json.fallback}}` is passed to the next node instead of terminating."
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
