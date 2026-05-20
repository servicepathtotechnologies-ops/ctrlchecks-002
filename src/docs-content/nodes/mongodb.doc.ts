import type { NodeDoc } from '../types';

export const mongodbDoc: NodeDoc = {
  "slug": "mongodb",
  "displayName": "MongoDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/mongodb.svg",
  "description": "MongoDB database operations",
  "credentialType": "MongoDB Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/",
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
              "example": "users",
              "placeholder": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "MongoDB query",
              "example": "{\"name\":\"John\"}",
              "placeholder": "{\"name\":\"John\"}"
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
            "scenario": "Use MongoDB to find in a workflow.",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "The node executes find and exposes its result for downstream nodes."
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
              "example": "users",
              "placeholder": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "MongoDB query",
              "example": "{\"name\":\"John\"}",
              "placeholder": "{\"name\":\"John\"}"
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
            "scenario": "Use MongoDB to insert in a workflow.",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "The node executes insert and exposes its result for downstream nodes."
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
              "example": "users",
              "placeholder": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "MongoDB query",
              "example": "{\"name\":\"John\"}",
              "placeholder": "{\"name\":\"John\"}"
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
            "scenario": "Use MongoDB to update in a workflow.",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "example": "users",
              "placeholder": "users"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "MongoDB query",
              "example": "{\"name\":\"John\"}",
              "placeholder": "{\"name\":\"John\"}"
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
            "scenario": "Use MongoDB to delete in a workflow.",
            "inputValues": {
              "Collection": "users",
              "Query": "{\"name\":\"John\"}"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
