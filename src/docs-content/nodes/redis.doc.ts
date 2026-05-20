import type { NodeDoc } from '../types';

export const redisDoc: NodeDoc = {
  "slug": "redis",
  "displayName": "Redis",
  "category": "Data",
  "logoUrl": "/icons/nodes/redis.svg",
  "description": "Redis cache operations",
  "credentialType": "Redis Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://redis.io/docs/latest/commands/",
  "resources": [
    {
      "name": "Operations",
      "description": "Redis exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Redis node.",
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
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Redis to get in a workflow.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
        },
        {
          "name": "Set",
          "value": "set",
          "description": "Set using the Redis node.",
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
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Redis to set in a workflow.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node executes set and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Redis node.",
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
              "description": "Value (for set)",
              "example": "{{$json.value}}",
              "placeholder": "{{$json.value}}"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Redis to delete in a workflow.",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://redis.io/docs/latest/commands/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Redis node."
    },
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
