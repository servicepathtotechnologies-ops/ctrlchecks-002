import type { NodeDoc } from '../types';

export const cacheSetDoc: NodeDoc = {
  "slug": "cache_set",
  "displayName": "Cache Set",
  "category": "Utility",
  "logoUrl": "/icons/nodes/cache_set.svg",
  "description": "Store a value in cache with optional TTL Use this node when a workflow needs cache set behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Cache Set is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Cache Set node using the configured input fields.",
          "fields": [
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": true,
              "description": "Cache key",
              "example": "user:123",
              "placeholder": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "json",
              "required": true,
              "description": "Value to store (will be JSON stringified)",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Ttl",
              "internalKey": "ttl",
              "type": "number",
              "required": false,
              "description": "Time-to-live in seconds (0 = no expiration)",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true
          },
          "outputDescription": "success: Value returned by the Cache Set node.",
          "usageExample": {
            "scenario": "Use Cache Set in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json}}",
              "Ttl": "0"
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
