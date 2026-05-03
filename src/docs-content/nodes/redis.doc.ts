import type { NodeDoc } from '../types';

export const redisDoc: NodeDoc = {
  "slug": "redis",
  "displayName": "Redis",
  "category": "Data",
  "logoUrl": "/icons/nodes/redis.svg",
  "description": "Redis cache operations Use this node when a workflow needs redis behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Redis exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Redis node using the configured input fields.",
          "fields": [
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": true,
              "description": "Redis key",
              "example": "user:123",
              "placeholder": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Redis node.\nstructure: Value returned by the Redis node.\nconvertible: Value returned by the Redis node.\ndefaultValue: Value returned by the Redis node.",
          "usageExample": {
            "scenario": "Use Redis in a workflow and pass upstream data into get.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
        },
        {
          "name": "Set",
          "value": "set",
          "description": "Set with the Redis node using the configured input fields.",
          "fields": [
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": true,
              "description": "Redis key",
              "example": "user:123",
              "placeholder": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Redis node.\nstructure: Value returned by the Redis node.\nconvertible: Value returned by the Redis node.\ndefaultValue: Value returned by the Redis node.",
          "usageExample": {
            "scenario": "Use Redis in a workflow and pass upstream data into set.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node runs set and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Redis node using the configured input fields.",
          "fields": [
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": true,
              "description": "Redis key",
              "example": "user:123",
              "placeholder": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Redis node.\nstructure: Value returned by the Redis node.\nconvertible: Value returned by the Redis node.\ndefaultValue: Value returned by the Redis node.",
          "usageExample": {
            "scenario": "Use Redis in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
