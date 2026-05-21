import type { NodeDoc } from '../types';

export const redisDoc: NodeDoc = {
  "slug": "redis",
  "displayName": "Redis",
  "category": "Data",
  "logoUrl": "/icons/nodes/redis.svg",
  "description": "Redis cache operations",
  "credentialType": "Redis Credential",
  "credentialSetupSteps": [
    "What this is: Redis uses an OAuth connection so CtrlChecks can safely access your Redis account.",
    "Make sure your Redis server is running (default port is 6379).",
    "Your Redis connection URL format: redis://localhost:6379 (local, no password) or redis://:yourpassword@yourhost:6379 (with password).",
    "For Redis Cloud (Upstash, Redis Cloud): log in and copy the connection URL from your database settings.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Redis -> paste the Redis URL -> Save.",
    "Run a test step (e.g. set a key with a short TTL) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Redis node and select the saved connection."
  ],
  "credentialDocsUrl": "https://redis.io/docs/connect/clients/nodejs/",
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
              "helpText": "What this field is: The exact name of the stored value to retrieve.\nMust match the key used when the value was stored — exactly, including capitalization.\nExample: user:1234:session\nTip: Use user:{{$json.userId}}:session to look up the key for the current user.",
              "placeholder": "user:123",
              "example": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "helpText": "What this field is: Value (for set) for Redis / Get.\nHow to fill it: Enter the value value requested by Redis, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.value}} or pick the value from the data picker.",
              "placeholder": "{{$json.value}}",
              "example": "{{$json.value}}"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Redis data with get after a related upstream event is received",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "Redis returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The name you are giving to this stored value — like a label on a jar.\nNaming tip: Use colons to organize keys by category.\nExamples:\n  user:1234:session       →  session data for user 1234\n  cart:abc123:items       →  shopping cart items\n  rate_limit:192.168.1.1  →  rate limit counter for an IP\nExample: user:{{$json.userId}}:lastLogin",
              "placeholder": "user:123",
              "example": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "helpText": "What this field is: The data to store in Redis.\nCan be: plain text (active), a number (42), or JSON ({\"cartItems\":3,\"total\":99.99}).\nExample: {\"theme\":\"dark\",\"language\":\"en\",\"notifications\":true}\nTip: Use {{$json.userPreferences}} to store data from an earlier step.",
              "placeholder": "{{$json.value}}",
              "example": "{{$json.value}}"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Redis data with set after a related upstream event is received",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "Redis returns structured set data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Redis key for Redis / Delete.\nHow to fill it: Enter the key value requested by Redis, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.key}} or pick the value from the data picker.",
              "placeholder": "user:123",
              "example": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Value (for set)",
              "helpText": "What this field is: Value (for set) for Redis / Delete.\nHow to fill it: Enter the value value requested by Redis, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.value}} or pick the value from the data picker.",
              "placeholder": "{{$json.value}}",
              "example": "{{$json.value}}"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Redis data with delete after a related upstream event is received",
            "inputValues": {
              "Key": "user:123",
              "Value": "{{$json.value}}"
            },
            "expectedOutput": "Redis returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
