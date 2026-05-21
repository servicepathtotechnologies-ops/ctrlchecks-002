import type { NodeDoc } from '../types';

export const pineconeDoc: NodeDoc = {
  "slug": "pinecone",
  "displayName": "Pinecone",
  "category": "Data",
  "logoUrl": "/icons/nodes/pinecone.svg",
  "description": "Upsert, query, and delete vectors in a Pinecone vector database index.",
  "credentialType": "Pinecone API Key",
  "credentialSetupSteps": [
    "What this is: Pinecone uses an API key or account connection so CtrlChecks can safely access your Pinecone account.",
    "Go to app.pinecone.io and sign in (or create a free account).",
    "Click \"API Keys\" in the left sidebar -> \"Create API Key\".",
    "Give it a name (e.g. CtrlChecks) and copy the key.",
    "Also note your Pinecone environment (e.g. us-east-1-aws or gcp-starter) - shown on your index page.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Pinecone -> paste the API key and enter your environment -> Save.",
    "Run a test step (e.g. list indexes) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Pinecone node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.pinecone.io/guides/getting-started/quickstart",
  "resources": [
    {
      "name": "Operations",
      "description": "Pinecone exposes operation choices directly.",
      "operations": [
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "helpText": "What this field is: Pinecone index name or host URL for Pinecone / Upsert.\nHow to fill it: Enter the index value requested by Pinecone, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.index}} or pick the value from the data picker.",
              "placeholder": "Enter Index"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pinecone.\nWhere to get it: Open the Pinecone dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "helpText": "What this field is: Embedding array of floats for Pinecone / Upsert.\nHow to fill it: Enter valid JSON in the format Pinecone expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.vector}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "helpText": "What this field is: A number used for top k in Pinecone / Upsert.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.topK}} or pick the value from the data picker.",
              "placeholder": "5",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "helpText": "What this field is: Vector ID for Pinecone / Upsert.\nWhere to find it: Open the item in Pinecone and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "helpText": "What this field is: Key-value metadata for upsert for Pinecone / Upsert.\nHow to fill it: Enter valid JSON in the format Pinecone expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.metadata}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "helpText": "What this field is: An optional namespace to organize vectors within an index.\nLeave blank to use the default namespace. Example: production or test",
              "placeholder": "Enter Namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "upsert",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Pinecone data with upsert after a related upstream event is received",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "Pinecone returns structured upsert data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "helpText": "What this field is: Pinecone index name or host URL for Pinecone / Query.\nHow to fill it: Enter the index value requested by Pinecone, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.index}} or pick the value from the data picker.",
              "placeholder": "Enter Index"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pinecone.\nWhere to get it: Open the Pinecone dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "helpText": "What this field is: The query vector — an array of numbers representing your search query.\nExample: [0.1,0.2,0.3,...] — usually generated by an AI embedding model from your search text.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "helpText": "What this field is: How many similar results to return.\nExample: 5 returns the 5 most similar vectors.",
              "placeholder": "5",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "helpText": "What this field is: Vector ID for Pinecone / Query.\nWhere to find it: Open the item in Pinecone and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "helpText": "What this field is: Key-value metadata for upsert for Pinecone / Query.\nHow to fill it: Enter valid JSON in the format Pinecone expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.metadata}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "helpText": "What this field is: An optional namespace to organize vectors within an index.\nLeave blank to use the default namespace. Example: production or test",
              "placeholder": "Enter Namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "query",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Pinecone data with query after a related upstream event is received",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "Pinecone returns structured query data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "helpText": "What this field is: Pinecone index name or host URL for Pinecone / Delete.\nHow to fill it: Enter the index value requested by Pinecone, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.index}} or pick the value from the data picker.",
              "placeholder": "Enter Index"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pinecone.\nWhere to get it: Open the Pinecone dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "helpText": "What this field is: Embedding array of floats for Pinecone / Delete.\nHow to fill it: Enter valid JSON in the format Pinecone expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.vector}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "helpText": "What this field is: A number used for top k in Pinecone / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.topK}} or pick the value from the data picker.",
              "placeholder": "5",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "helpText": "What this field is: Vector ID for Pinecone / Delete.\nWhere to find it: Open the item in Pinecone and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "helpText": "What this field is: Key-value metadata for upsert for Pinecone / Delete.\nHow to fill it: Enter valid JSON in the format Pinecone expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.metadata}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "helpText": "What this field is: An optional namespace to organize vectors within an index.\nLeave blank to use the default namespace. Example: production or test",
              "placeholder": "Enter Namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "delete",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Pinecone data with delete after a related upstream event is received",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "Pinecone returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Pinecone node."
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
