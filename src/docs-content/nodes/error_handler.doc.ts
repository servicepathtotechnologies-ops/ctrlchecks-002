import type { NodeDoc } from '../types';

export const errorHandlerDoc: NodeDoc = {
  "slug": "error_handler",
  "displayName": "Error Handler",
  "category": "Logic",
  "logoUrl": "/icons/nodes/error_handler.svg",
  "description": "Handle errors with retry logic and fallback values",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "description": "Continue workflow after error",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "description": "Retry failed node",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "description": "Maximum retry attempts",
              "example": "3",
              "placeholder": "3",
              "defaultValue": "3"
            },
            {
              "name": "Retry Delay",
              "internalKey": "retryDelay",
              "type": "number",
              "description": "Delay between retries (ms)",
              "example": "5000",
              "placeholder": "5000",
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
