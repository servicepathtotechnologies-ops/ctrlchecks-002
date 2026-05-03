import type { NodeDoc } from '../types';

export const errorHandlerDoc: NodeDoc = {
  "slug": "error_handler",
  "displayName": "Error Handler",
  "category": "Logic",
  "logoUrl": "/icons/nodes/error_handler.svg",
  "description": "Handle errors with retry logic and fallback values Use this node when a workflow needs error handler behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Error Handler is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Error Handler node using the configured input fields.",
          "fields": [
            {
              "name": "Continue On Fail",
              "internalKey": "continueOnFail",
              "type": "boolean",
              "required": false,
              "description": "Continue workflow after error",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry failed node",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "example": "3",
              "defaultValue": "3"
            },
            {
              "name": "Retry Delay",
              "internalKey": "retryDelay",
              "type": "number",
              "required": false,
              "description": "Delay between retries (ms)",
              "example": "5000",
              "defaultValue": "5000"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Error Handler node.\nconvertible: Value returned by the Error Handler node.",
          "usageExample": {
            "scenario": "Use Error Handler in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Continue On Fail": "false",
              "Retry On Fail": "true",
              "Max Retries": "3",
              "Retry Delay": "5000"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an expression resolved to an empty value.",
      "fix": "Open the node, fill the required field, and inspect upstream output before running again."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node."
    }
  ],
  "relatedNodes": [
    "function",
    "function_item",
    "if_else",
    "switch",
    "merge"
  ]
};
