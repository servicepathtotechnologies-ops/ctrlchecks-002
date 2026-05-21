import type { NodeDoc } from '../types';

export const oracleDatabaseDoc: NodeDoc = {
  "slug": "oracle_database",
  "displayName": "Oracle Database",
  "category": "Data",
  "logoUrl": "/icons/nodes/oracle_database.svg",
  "description": "Execute SQL and perform select, insert, update, upsert, and delete operations on Oracle Database.",
  "credentialType": "Oracle Credential",
  "credentialSetupSteps": [
    "What this is: Oracle uses an OAuth connection so CtrlChecks can safely access your Oracle account.",
    "Ask your Oracle database administrator for the connection details: Host (server address), Port (default 1521), Service Name or SID, Username, and Password.",
    "Make sure the Oracle server firewall allows connections from CtrlChecks on port 1521.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Oracle Database -> enter Host, Port, Service Name, Username, Password -> Test Connection -> Save.",
    "Run a simple SELECT query to confirm CtrlChecks can read from your Oracle database.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Select.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Select.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Select.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Select.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Select.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Select.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Select.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "select",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Oracle Database data with select after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured select data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Insert.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Insert.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Insert.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Insert.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Insert.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Insert.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Insert.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "insert",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Oracle Database data with insert after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured insert data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Update.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Update.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Update.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Update.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Update.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Update.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "update",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Oracle Database data with update after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Insert or update.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Insert or update.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Insert or update.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Insert or update.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Insert or update.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Insert or update.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Insert or update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "insert_or_update",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Oracle Database data with insert or update after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured insert or update data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Delete.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Delete.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Delete.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Delete.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Delete.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Delete.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
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
            "scenario": "Process incoming Oracle Database data with delete after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Oracle username",
              "helpText": "What this field is: Oracle username for Oracle Database / Execute sql.\nHow to fill it: Enter the user value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.user}} or pick the value from the data picker.",
              "placeholder": "Enter User"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Oracle password",
              "helpText": "What this field is: Oracle password for Oracle Database / Execute sql.\nHow to fill it: Enter the password value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": true,
              "description": "Oracle connection string",
              "helpText": "What this field is: Oracle connection string for Oracle Database / Execute sql.\nHow to fill it: Enter the connection string value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "Enter Connection String"
            },
            {
              "name": "Schema",
              "internalKey": "schema",
              "type": "string",
              "required": false,
              "description": "Oracle schema",
              "helpText": "What this field is: Oracle schema for Oracle Database / Execute sql.\nHow to fill it: Enter the schema value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.schema}} or pick the value from the data picker.",
              "placeholder": "Enter Schema"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for Oracle Database / Execute sql.\nHow to fill it: Enter the table value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Statement",
              "internalKey": "statement",
              "type": "string",
              "required": false,
              "description": "SQL statement for execute_sql",
              "helpText": "What this field is: SQL statement for execute_sql for Oracle Database / Execute sql.\nHow to fill it: Enter the statement value requested by Oracle Database, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.statement}} or pick the value from the data picker.",
              "placeholder": "Enter Statement"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max rows to return",
              "helpText": "What this field is: A number used for limit in Oracle Database / Execute sql.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "execute_sql",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Oracle Database data with execute sql after a related upstream event is received",
            "inputValues": {
              "User": "",
              "Password": "",
              "Connection String": "",
              "Schema": "",
              "Table": ""
            },
            "expectedOutput": "Oracle Database returns structured execute sql data that downstream nodes can reference with {{$json.fieldName}}."
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
