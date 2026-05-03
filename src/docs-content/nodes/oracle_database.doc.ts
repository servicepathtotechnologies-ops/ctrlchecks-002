import type { NodeDoc } from '../types';

export const oracleDatabaseDoc: NodeDoc = {
  "slug": "oracle_database",
  "displayName": "Oracle Database",
  "category": "Data",
  "logoUrl": "/icons/nodes/oracle_database.svg",
  "description": "Execute SQL and perform select, insert, update, upsert, and delete operations on Oracle Database. Use this node when a workflow needs oracle database behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Password Credential",
  "credentialSetupSteps": [
    "Open the Oracle Database developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Password Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/",
  "resources": [
    {
      "name": "Operations",
      "description": "Oracle Database exposes operation choices directly.",
      "operations": [
        {
          "name": "Select",
          "value": "select",
          "description": "Select with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into select.",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs select and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into insert.",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs insert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into update.",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Insert or Update (Upsert)",
          "value": "insert_or_update",
          "description": "Insert or Update (Upsert) with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into insert or update (upsert).",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs insert or update (upsert) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into delete.",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Execute SQL",
          "value": "execute_sql",
          "description": "Execute SQL with the Oracle Database node using the configured input fields.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username",
              "example": "{{ $json.user }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "example": "{{ $json.connectionString }}",
              "defaultValue": ""
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "example": "{{ $json.schema }}",
              "defaultValue": ""
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": false,
              "description": "Table name",
              "example": "{{ $json.table }}",
              "defaultValue": ""
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "example": "{{ $json.statement }}",
              "defaultValue": ""
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "oracle_database"
          },
          "outputDescription": "success: Indicates that the Oracle Database node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Oracle Database in a workflow and pass upstream data into execute sql.",
            "inputValues": {
              "User": "{{ $json.user }}",
              "Password": "{{ $json.password }}",
              "Connection String": "{{ $json.connectionString }}",
              "Schema": "{{ $json.schema }}",
              "Table": "{{ $json.table }}",
              "Statement": "{{ $json.statement }}",
              "Limit": "50"
            },
            "expectedOutput": "The node runs execute sql and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
