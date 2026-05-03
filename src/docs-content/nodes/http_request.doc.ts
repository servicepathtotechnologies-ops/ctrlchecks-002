import type { NodeDoc } from '../types';

export const httpRequestDoc: NodeDoc = {
  "slug": "http_request",
  "displayName": "HTTP Request",
  "category": "Utility",
  "logoUrl": "/icons/nodes/http_request.svg",
  "description": "Makes HTTP requests to external APIs or services Use this node when a workflow needs http request behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "HTTP Request is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the HTTP Request node using the configured input fields.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "example": "https://api.example.com/data",
              "placeholder": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "example": "GET",
              "placeholder": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "date",
              "required": false,
              "description": "Request timeout in milliseconds",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
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
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the HTTP Request node.\nstructure: Value returned by the HTTP Request node.\nconvertible: Value returned by the HTTP Request node.",
          "usageExample": {
            "scenario": "Use HTTP Request in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Url": "https://api.example.com/data",
              "Method": "GET",
              "Headers": "[object Object]",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Qs": "{\"key\":\"value\"}",
              "Timeout": "10000",
              "Retry On Fail": "true",
              "Max Retries": "3"
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
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push",
    "queue_consume"
  ]
};
