import type { NodeDoc } from '../types';

export const sqlServerDoc: NodeDoc = {
  "slug": "sql_server",
  "displayName": "SQL Server",
  "category": "Data",
  "logoUrl": "/icons/nodes/sql_server.svg",
  "description": "Connect to and query Microsoft SQL Server databases. Use this node when a workflow needs sql server behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Password Credential",
  "credentialSetupSteps": [
    "Open the SQL Server developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Password Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "SQL Server exposes operation choices directly.",
      "operations": [
        {
          "name": "Execute Query",
          "value": "executeQuery",
          "description": "Execute Query with the SQL Server node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "example": "{{ $json.database }}",
              "defaultValue": ""
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "SQL query",
              "example": "status:open",
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
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "example": "{{ $json.procedureName }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "sql_server"
          },
          "outputDescription": "success: Indicates that the SQL Server node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use SQL Server in a workflow and pass upstream data into execute query.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "1433",
              "Encrypt": "true",
              "Trust Server Certificate": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Procedure Name": "{{ $json.procedureName }}"
            },
            "expectedOutput": "The node runs execute query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert with the SQL Server node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "example": "{{ $json.database }}",
              "defaultValue": ""
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "SQL query",
              "example": "status:open",
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
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "example": "{{ $json.procedureName }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "sql_server"
          },
          "outputDescription": "success: Indicates that the SQL Server node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use SQL Server in a workflow and pass upstream data into insert.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "1433",
              "Encrypt": "true",
              "Trust Server Certificate": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Procedure Name": "{{ $json.procedureName }}"
            },
            "expectedOutput": "The node runs insert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the SQL Server node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "example": "{{ $json.database }}",
              "defaultValue": ""
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "SQL query",
              "example": "status:open",
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
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "example": "{{ $json.procedureName }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "sql_server"
          },
          "outputDescription": "success: Indicates that the SQL Server node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use SQL Server in a workflow and pass upstream data into update.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "1433",
              "Encrypt": "true",
              "Trust Server Certificate": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Procedure Name": "{{ $json.procedureName }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the SQL Server node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "example": "{{ $json.database }}",
              "defaultValue": ""
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "SQL query",
              "example": "status:open",
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
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "example": "{{ $json.procedureName }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "sql_server"
          },
          "outputDescription": "success: Indicates that the SQL Server node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use SQL Server in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "1433",
              "Encrypt": "true",
              "Trust Server Certificate": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Procedure Name": "{{ $json.procedureName }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Stored Procedure",
          "value": "storedProcedure",
          "description": "Stored Procedure with the SQL Server node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "example": "{{ $json.database }}",
              "defaultValue": ""
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "SQL query",
              "example": "status:open",
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
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "example": "{{ $json.procedureName }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "sql_server"
          },
          "outputDescription": "success: Indicates that the SQL Server node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use SQL Server in a workflow and pass upstream data into stored procedure.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "1433",
              "Encrypt": "true",
              "Trust Server Certificate": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Procedure Name": "{{ $json.procedureName }}"
            },
            "expectedOutput": "The node runs stored procedure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
