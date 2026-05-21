import type { NodeDoc } from '../types';

export const sqlServerDoc: NodeDoc = {
  "slug": "sql_server",
  "displayName": "SQL Server",
  "category": "Data",
  "logoUrl": "/icons/nodes/sql_server.svg",
  "description": "Connect to and query Microsoft SQL Server databases.",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "description": "SQL Server hostname",
              "helpText": "What this field is: SQL Server hostname for SQL Server / ExecuteQuery.\nHow to fill it: Enter the host value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "helpText": "What this field is: A number used for port in SQL Server / ExecuteQuery.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "1433",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "helpText": "What this field is: SQL Server username for SQL Server / ExecuteQuery.\nHow to fill it: Enter the username value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "helpText": "What this field is: SQL Server password for SQL Server / ExecuteQuery.\nHow to fill it: Enter the password value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for SQL Server / ExecuteQuery.\nHow to fill it: Enter the database value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "helpText": "What this field is: An on/off choice for encrypt in SQL Server / ExecuteQuery.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "helpText": "What this field is: An on/off choice for trust server certificate in SQL Server / ExecuteQuery.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for SQL Server / ExecuteQuery.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SQL Server which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for SQL Server / ExecuteQuery.\nHow to fill it: Enter the table value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "helpText": "What this field is: Stored procedure name for SQL Server / ExecuteQuery.\nHow to fill it: Enter the procedure name value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.procedureName}} or pick the value from the data picker.",
              "placeholder": "Enter Procedure Name"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "executeQuery",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming SQL Server data with execute query after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "SQL Server returns structured execute query data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "SQL Server hostname",
              "helpText": "What this field is: SQL Server hostname for SQL Server / Insert.\nHow to fill it: Enter the host value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "helpText": "What this field is: A number used for port in SQL Server / Insert.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "1433",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "helpText": "What this field is: SQL Server username for SQL Server / Insert.\nHow to fill it: Enter the username value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "helpText": "What this field is: SQL Server password for SQL Server / Insert.\nHow to fill it: Enter the password value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for SQL Server / Insert.\nHow to fill it: Enter the database value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "helpText": "What this field is: An on/off choice for encrypt in SQL Server / Insert.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "helpText": "What this field is: An on/off choice for trust server certificate in SQL Server / Insert.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for SQL Server / Insert.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SQL Server which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for SQL Server / Insert.\nHow to fill it: Enter the table value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "helpText": "What this field is: Stored procedure name for SQL Server / Insert.\nHow to fill it: Enter the procedure name value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.procedureName}} or pick the value from the data picker.",
              "placeholder": "Enter Procedure Name"
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
            "scenario": "Process incoming SQL Server data with insert after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "SQL Server returns structured insert data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "SQL Server hostname",
              "helpText": "What this field is: SQL Server hostname for SQL Server / Update.\nHow to fill it: Enter the host value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "helpText": "What this field is: A number used for port in SQL Server / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "1433",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "helpText": "What this field is: SQL Server username for SQL Server / Update.\nHow to fill it: Enter the username value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "helpText": "What this field is: SQL Server password for SQL Server / Update.\nHow to fill it: Enter the password value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for SQL Server / Update.\nHow to fill it: Enter the database value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "helpText": "What this field is: An on/off choice for encrypt in SQL Server / Update.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "helpText": "What this field is: An on/off choice for trust server certificate in SQL Server / Update.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for SQL Server / Update.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SQL Server which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for SQL Server / Update.\nHow to fill it: Enter the table value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "helpText": "What this field is: Stored procedure name for SQL Server / Update.\nHow to fill it: Enter the procedure name value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.procedureName}} or pick the value from the data picker.",
              "placeholder": "Enter Procedure Name"
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
            "scenario": "Process incoming SQL Server data with update after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "SQL Server returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "SQL Server hostname",
              "helpText": "What this field is: SQL Server hostname for SQL Server / Delete.\nHow to fill it: Enter the host value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "helpText": "What this field is: A number used for port in SQL Server / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "1433",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "helpText": "What this field is: SQL Server username for SQL Server / Delete.\nHow to fill it: Enter the username value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "helpText": "What this field is: SQL Server password for SQL Server / Delete.\nHow to fill it: Enter the password value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for SQL Server / Delete.\nHow to fill it: Enter the database value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "helpText": "What this field is: An on/off choice for encrypt in SQL Server / Delete.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "helpText": "What this field is: An on/off choice for trust server certificate in SQL Server / Delete.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for SQL Server / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SQL Server which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for SQL Server / Delete.\nHow to fill it: Enter the table value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "helpText": "What this field is: Stored procedure name for SQL Server / Delete.\nHow to fill it: Enter the procedure name value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.procedureName}} or pick the value from the data picker.",
              "placeholder": "Enter Procedure Name"
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
            "scenario": "Process incoming SQL Server data with delete after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "SQL Server returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "SQL Server hostname",
              "helpText": "What this field is: SQL Server hostname for SQL Server / StoredProcedure.\nHow to fill it: Enter the host value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "SQL Server port",
              "helpText": "What this field is: A number used for port in SQL Server / StoredProcedure.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "1433",
              "example": "1433",
              "defaultValue": "1433"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SQL Server username",
              "helpText": "What this field is: SQL Server username for SQL Server / StoredProcedure.\nHow to fill it: Enter the username value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "SQL Server password",
              "helpText": "What this field is: SQL Server password for SQL Server / StoredProcedure.\nHow to fill it: Enter the password value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for SQL Server / StoredProcedure.\nHow to fill it: Enter the database value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Encrypt",
              "internalKey": "encrypt",
              "type": "boolean",
              "required": false,
              "description": "Enable encryption",
              "helpText": "What this field is: An on/off choice for encrypt in SQL Server / StoredProcedure.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Trust Server Certificate",
              "internalKey": "trustServerCertificate",
              "type": "boolean",
              "required": false,
              "description": "Trust server certificate",
              "helpText": "What this field is: An on/off choice for trust server certificate in SQL Server / StoredProcedure.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want SQL Server to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for SQL Server / StoredProcedure.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SQL Server which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for SQL Server / StoredProcedure.\nHow to fill it: Enter the table value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Procedure Name",
              "internalKey": "procedureName",
              "type": "string",
              "required": false,
              "description": "Stored procedure name",
              "helpText": "What this field is: Stored procedure name for SQL Server / StoredProcedure.\nHow to fill it: Enter the procedure name value requested by SQL Server, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.procedureName}} or pick the value from the data picker.",
              "placeholder": "Enter Procedure Name"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "storedProcedure",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming SQL Server data with stored procedure after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "1433",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "SQL Server returns structured stored procedure data that downstream nodes can reference with {{$json.fieldName}}."
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
