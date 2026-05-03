import type { NodeDoc } from '../types';

export const cacheGetDoc: NodeDoc = {
  "slug": "cache_get",
  "displayName": "Cache Get",
  "category": "Utility",
  "logoUrl": "/icons/nodes/cache_get.svg",
  "description": "Retrieve a value from cache by key Use this node when a workflow needs cache get behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Cache Get is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Cache Get node using the configured input fields.",
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
              "name": "Default Value",
              "internalKey": "defaultValue",
              "type": "json",
              "required": false,
              "description": "Value to return if key not found",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "success": true,
            "found": true,
            "value": "value"
          },
          "outputDescription": "success: Value returned by the Cache Get node.\nfound: Value returned by the Cache Get node.\nvalue: Value returned by the Cache Get node.",
          "usageExample": {
            "scenario": "Use Cache Get in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Key": "user:123",
              "Default Value": "{\"key\":\"value\"}"
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
