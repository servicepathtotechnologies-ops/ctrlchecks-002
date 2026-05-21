import type { NodeDoc } from '../types';

export const cacheSetDoc: NodeDoc = {
  "slug": "cache_set",
  "displayName": "Cache Set",
  "category": "Utility",
  "logoUrl": "/icons/nodes/cache_set.svg",
  "description": "Store a value in cache with optional TTL",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Cache Set is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Store a value in the Redis cache with an optional expiry (TTL).",
          "fields": [
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": true,
              "description": "Cache key",
              "helpText": "What this field is: The name to give this cached value — like a label.\nUse descriptive names with colons as separators.\nExample: user:{{$json.userId}}:lastLogin or session:{{$json.sessionId}} or rate_limit:{{$json.ip}}",
              "placeholder": "user:123",
              "example": "user:123"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "json",
              "required": true,
              "description": "Value to store (will be JSON stringified)",
              "helpText": "What this field is: The data to cache (store temporarily for quick access later).\nExample: {\"theme\":\"dark\",\"language\":\"en\",\"timezone\":\"America/New_York\"} or {{$json.userPreferences}}",
              "placeholder": "{{$json}}",
              "example": "{{$json}}"
            },
            {
              "name": "Ttl",
              "internalKey": "ttl",
              "type": "number",
              "required": false,
              "description": "Time-to-live in seconds (0 = no expiration)",
              "helpText": "What this field is: How many seconds until this cached value expires automatically.\nExamples: 300 = 5 minutes, 3600 = 1 hour, 86400 = 24 hours.\nLeave blank to cache forever (until manually deleted).",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "key": "user:u_123:profile",
            "set": true,
            "ttl": 3600
          },
          "outputDescription": "key: The cache key. set: true if stored successfully. ttl: The TTL set in seconds.",
          "usageExample": {
            "scenario": "Cache a user profile for 1 hour after fetching from the database",
            "inputValues": {
              "key": "user:{{$json.userId}}:profile",
              "value": "{{$json.profile}}",
              "ttl": "3600"
            },
            "expectedOutput": "`set: true` confirms the value is cached."
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
