import type { NodeDoc } from '../types';

export const httpRequestDoc: NodeDoc = {
  "slug": "http_request",
  "displayName": "HTTP Request",
  "category": "Utility",
  "logoUrl": "/icons/nodes/http_request.svg",
  "description": "Makes HTTP requests to external APIs or services",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "HTTP Request is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
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
              "description": "HTTP method",
              "example": "GET",
              "placeholder": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "description": "HTTP headers to send",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Request body for POST/PUT/PATCH",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "description": "Query string parameters",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "description": "Request timeout in milliseconds",
              "example": "10000",
              "placeholder": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "description": "Retry on failure",
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
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
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
