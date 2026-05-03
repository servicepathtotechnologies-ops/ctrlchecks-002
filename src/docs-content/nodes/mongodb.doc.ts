import type { NodeDoc } from '../types';

export const mongodbDoc: NodeDoc = {
  "slug": "mongodb",
  "displayName": "MongoDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/mongodb.svg",
  "description": "MongoDB database operations Use this node when a workflow needs mongodb behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "MongoDB exposes operation choices directly.",
      "operations": [
        {
          "name": "Find",
          "value": "find",
          "description": "Find with the MongoDB node using the configured input fields.",
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
              "type": "json",
              "required": false,
              "description": "MongoDB query",
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
          "outputDescription": "type: Value returned by the MongoDB node.\nstructure: Value returned by the MongoDB node.\nconvertible: Value returned by the MongoDB node.\ndefaultValue: Value returned by the MongoDB node.",
          "usageExample": {
            "scenario": "Use MongoDB in a workflow and pass upstream data into find.",
            "inputValues": {
              "Collection": "users",
              "Query": "[object Object]"
            },
            "expectedOutput": "The node runs find and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert with the MongoDB node using the configured input fields.",
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
              "type": "json",
              "required": false,
              "description": "MongoDB query",
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
          "outputDescription": "type: Value returned by the MongoDB node.\nstructure: Value returned by the MongoDB node.\nconvertible: Value returned by the MongoDB node.\ndefaultValue: Value returned by the MongoDB node.",
          "usageExample": {
            "scenario": "Use MongoDB in a workflow and pass upstream data into insert.",
            "inputValues": {
              "Collection": "users",
              "Query": "[object Object]"
            },
            "expectedOutput": "The node runs insert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the MongoDB node using the configured input fields.",
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
              "type": "json",
              "required": false,
              "description": "MongoDB query",
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
          "outputDescription": "type: Value returned by the MongoDB node.\nstructure: Value returned by the MongoDB node.\nconvertible: Value returned by the MongoDB node.\ndefaultValue: Value returned by the MongoDB node.",
          "usageExample": {
            "scenario": "Use MongoDB in a workflow and pass upstream data into update.",
            "inputValues": {
              "Collection": "users",
              "Query": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the MongoDB node using the configured input fields.",
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
              "type": "json",
              "required": false,
              "description": "MongoDB query",
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
          "outputDescription": "type: Value returned by the MongoDB node.\nstructure: Value returned by the MongoDB node.\nconvertible: Value returned by the MongoDB node.\ndefaultValue: Value returned by the MongoDB node.",
          "usageExample": {
            "scenario": "Use MongoDB in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Collection": "users",
              "Query": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.mongodb.com/docs/drivers/node/current/"
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
