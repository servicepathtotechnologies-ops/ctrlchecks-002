import type { NodeDoc } from '../types';

export const sqlServerDoc: NodeDoc = {
  "slug": "sql_server",
  "displayName": "SQL Server",
  "category": "Data",
  "logoUrl": "/icons/nodes/sql_server.svg",
  "description": "Connect to and query Microsoft SQL Server databases.",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "SQL Server exposes operation choices directly.",
      "operations": [
        {
          "name": "ExecuteQuery",
          "value": "executeQuery",
          "description": "ExecuteQuery using the SQL Server node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "SQL Server port",
              "example": "1433",
              "placeholder": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "description": "Enable encryption",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "description": "Trust server certificate",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "SQL query"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "description": "Stored procedure name"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use SQL Server to executequery in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes executequery and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert using the SQL Server node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "SQL Server port",
              "example": "1433",
              "placeholder": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "description": "Enable encryption",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "description": "Trust server certificate",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "SQL query"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "description": "Stored procedure name"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use SQL Server to insert in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes insert and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the SQL Server node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "SQL Server port",
              "example": "1433",
              "placeholder": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "description": "Enable encryption",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "description": "Trust server certificate",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "SQL query"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "description": "Stored procedure name"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use SQL Server to update in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the SQL Server node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "SQL Server port",
              "example": "1433",
              "placeholder": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "description": "Enable encryption",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "description": "Trust server certificate",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "SQL query"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "description": "Stored procedure name"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use SQL Server to delete in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "StoredProcedure",
          "value": "storedProcedure",
          "description": "StoredProcedure using the SQL Server node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SQL Server hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "SQL Server port",
              "example": "1433",
              "placeholder": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "description": "Enable encryption",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "description": "Trust server certificate",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "SQL query"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "description": "Table name"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "description": "Stored procedure name"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use SQL Server to storedprocedure in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes storedprocedure and exposes its result for downstream nodes."
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
