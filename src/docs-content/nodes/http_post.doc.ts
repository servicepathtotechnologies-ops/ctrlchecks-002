import type { NodeDoc } from '../types';

export const httpPostDoc: NodeDoc = {
  "slug": "http_post",
  "displayName": "HTTP POST",
  "category": "Utility",
  "logoUrl": "/icons/nodes/http_post.svg",
  "description": "Send POST requests with JSON data Use this node when a workflow needs http post behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "HTTP POST is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the HTTP POST node using the configured input fields.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "URL to POST to",
              "example": "https://api.example.com/data",
              "placeholder": "https://api.example.com/data"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "json",
              "required": true,
              "description": "POST body data",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HTTP POST node.\nstructure: Value returned by the HTTP POST node.\nconvertible: Value returned by the HTTP POST node.\ndefaultValue: Value returned by the HTTP POST node.",
          "usageExample": {
            "scenario": "Use HTTP POST in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Url": "https://api.example.com/data",
              "Body": "{{$json.data}}",
              "Headers": "[object Object]"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
