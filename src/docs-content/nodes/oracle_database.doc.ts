import type { NodeDoc } from '../types';

export const oracleDatabaseDoc: NodeDoc = {
  "slug": "oracle_database",
  "displayName": "Oracle Database",
  "category": "Data",
  "logoUrl": "/icons/nodes/oracle_database.svg",
  "description": "Execute SQL and perform select, insert, update, upsert, and delete operations on Oracle Database.",
  "credentialType": "Oracle Credential",
  "credentialSetupSteps": [
    "Obtain the Oracle connection details: Host, Port (default 1521), Service Name, Username, Password.",
    "Ensure the Oracle Instant Client is installed on the worker host if required.",
    "In CtrlChecks, open Connections → Add Connection → Oracle Database → enter connection details → Save."
  ],
  "credentialDocsUrl": "https://docs.oracle.com/en/database/oracle/oracle-database/19/netag/index.html",
  "resources": [
    {
      "name": "Operations",
      "description": "Oracle Database exposes operation choices directly.",
      "operations": [
        {
          "name": "Select",
          "value": "select",
          "description": "Select using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to select in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes select and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to insert in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes insert and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to update in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Insert or update",
          "value": "insert_or_update",
          "description": "Insert or update using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to insert or update in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes insert or update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to delete in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        },
        {
          "name": "Execute sql",
          "value": "execute_sql",
          "description": "Execute sql using the Oracle Database node.",
          "fields": [
            {
              "name": "User",
              "internalKey": "user",
              "type": "string",
              "required": true,
              "description": "Oracle username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "description": "Oracle schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "description": "SQL statement for execute_sql"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max rows to return",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Oracle Database to execute sql in a workflow.",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "The node executes execute sql and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://node-oracledb.readthedocs.io/en/latest/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Oracle Database node."
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
