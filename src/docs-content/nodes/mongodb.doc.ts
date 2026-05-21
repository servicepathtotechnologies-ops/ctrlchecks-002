import type { NodeDoc } from '../types';

export const mongodbDoc: NodeDoc = {
  "slug": "mongodb",
  "displayName": "MongoDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/mongodb.svg",
  "description": "MongoDB database operations",
  "credentialType": "MongoDB Credential",
  "credentialSetupSteps": [
    "What this is: MongoDB uses an OAuth connection so CtrlChecks can safely access your MongoDB account.",
    "For MongoDB Atlas (cloud): go to cloud.mongodb.com and sign in -> open your cluster -> click \"Connect\" -> \"Connect your application\".",
    "Copy the connection string - it looks like: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/databasename",
    "Replace \"password\" in the string with your actual database user password.",
    "For local MongoDB: use the connection string: mongodb://localhost:27017/yourdatabasename",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> MongoDB -> paste the connection string -> Save.",
    "Run a test step (e.g. find documents in a collection) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the MongoDB node and select the saved connection."
  ],
  "credentialDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/",
  "resources": [
    {
      "name": "Operations",
      "description": "MongoDB exposes operation choices directly.",
      "operations": [
        {
          "name": "Find",
          "value": "find",
          "description": "Find using the MongoDB node.",
          "fields": [
            {
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "required": true,
              "description": "Collection name",
              "helpText": "What this field is: The MongoDB collection to work with — like a table in a regular database.\nExample: users or orders or products or event_logs\nTip: Collection names are case-sensitive.",
              "placeholder": "users",
              "example": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "MongoDB query",
              "helpText": "What this field is: MongoDB query for MongoDB / Find.\nHow to fill it: Enter the search, filter, SQL, or API query that tells MongoDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"John\"}",
              "example": "{\"name\":\"John\"}"
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
            "scenario": "Process incoming MongoDB data with find after a related upstream event is received",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "MongoDB returns structured find data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert using the MongoDB node.",
          "fields": [
            {
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "required": true,
              "description": "Collection name",
              "helpText": "What this field is: The MongoDB collection to work with — like a table in a regular database.\nExample: users or orders or products or event_logs\nTip: Collection names are case-sensitive.",
              "placeholder": "users",
              "example": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "MongoDB query",
              "helpText": "What this field is: MongoDB query for MongoDB / Insert.\nHow to fill it: Enter the search, filter, SQL, or API query that tells MongoDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"John\"}",
              "example": "{\"name\":\"John\"}"
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
            "scenario": "Process incoming MongoDB data with insert after a related upstream event is received",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "MongoDB returns structured insert data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the MongoDB node.",
          "fields": [
            {
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "required": true,
              "description": "Collection name",
              "helpText": "What this field is: The MongoDB collection to work with — like a table in a regular database.\nExample: users or orders or products or event_logs\nTip: Collection names are case-sensitive.",
              "placeholder": "users",
              "example": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "MongoDB query",
              "helpText": "What this field is: MongoDB query for MongoDB / Update.\nHow to fill it: Enter the search, filter, SQL, or API query that tells MongoDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"John\"}",
              "example": "{\"name\":\"John\"}"
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
            "scenario": "Process incoming MongoDB data with update after a related upstream event is received",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "MongoDB returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the MongoDB node.",
          "fields": [
            {
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "required": true,
              "description": "Collection name",
              "helpText": "What this field is: The MongoDB collection to work with — like a table in a regular database.\nExample: users or orders or products or event_logs\nTip: Collection names are case-sensitive.",
              "placeholder": "users",
              "example": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "MongoDB query",
              "helpText": "What this field is: MongoDB query for MongoDB / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells MongoDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"John\"}",
              "example": "{\"name\":\"John\"}"
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
            "scenario": "Process incoming MongoDB data with delete after a related upstream event is received",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "MongoDB returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the MongoDB node."
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
