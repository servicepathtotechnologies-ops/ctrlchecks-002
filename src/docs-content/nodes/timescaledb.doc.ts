import type { NodeDoc } from '../types';

export const timescaledbDoc: NodeDoc = {
  "slug": "timescaledb",
  "displayName": "TimescaleDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/timescaledb.svg",
  "description": "Connect to and query TimescaleDB time-series databases (PostgreSQL extension).",
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
      "description": "TimescaleDB exposes operation choices directly.",
      "operations": [
        {
          "name": "ExecuteQuery",
          "value": "executeQuery",
          "description": "ExecuteQuery using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / ExecuteQuery.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / ExecuteQuery.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / ExecuteQuery.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
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
            "scenario": "Process incoming TimescaleDB data with execute query after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured execute query data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / Insert.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / Insert.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / Insert.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / Insert.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / Insert.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / Insert.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / Insert.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / Insert.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / Insert.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / Insert.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / Insert.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
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
            "scenario": "Process incoming TimescaleDB data with insert after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured insert data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / Update.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / Update.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / Update.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / Update.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / Update.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / Update.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / Update.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / Update.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / Update.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / Update.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
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
            "scenario": "Process incoming TimescaleDB data with update after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / Delete.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / Delete.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / Delete.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / Delete.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / Delete.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / Delete.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / Delete.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / Delete.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / Delete.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
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
            "scenario": "Process incoming TimescaleDB data with delete after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "TimeBucket",
          "value": "timeBucket",
          "description": "TimeBucket using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / TimeBucket.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / TimeBucket.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / TimeBucket.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / TimeBucket.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / TimeBucket.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / TimeBucket.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / TimeBucket.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / TimeBucket.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / TimeBucket.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / TimeBucket.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / TimeBucket.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "timeBucket",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming TimescaleDB data with time bucket after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured time bucket data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "First",
          "value": "first",
          "description": "First using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / First.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / First.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / First.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / First.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / First.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / First.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / First.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / First.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / First.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / First.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / First.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "first",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming TimescaleDB data with first after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured first data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Last",
          "value": "last",
          "description": "Last using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "helpText": "What this field is: TimescaleDB hostname for TimescaleDB / Last.\nHow to fill it: Enter the host value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.host}} or pick the value from the data picker.",
              "placeholder": "Enter Host"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "TimescaleDB port",
              "helpText": "What this field is: A number used for port in TimescaleDB / Last.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.port}} or pick the value from the data picker.",
              "placeholder": "5432",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "helpText": "What this field is: TimescaleDB username for TimescaleDB / Last.\nHow to fill it: Enter the username value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
              "helpText": "What this field is: TimescaleDB password for TimescaleDB / Last.\nHow to fill it: Enter the password value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Database",
              "internalKey": "database",
              "type": "string",
              "required": true,
              "description": "Database name",
              "helpText": "What this field is: Database name for TimescaleDB / Last.\nHow to fill it: Enter the database value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.database}} or pick the value from the data picker.",
              "placeholder": "Enter Database"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
              "helpText": "What this field is: An on/off choice for ssl in TimescaleDB / Last.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want TimescaleDB to use this optional behavior.",
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
              "helpText": "What this field is: SQL query for TimescaleDB / Last.\nHow to fill it: Enter the search, filter, SQL, or API query that tells TimescaleDB which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "helpText": "What this field is: Table name for TimescaleDB / Last.\nHow to fill it: Enter the table value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.table}} or pick the value from the data picker.",
              "placeholder": "customers"
            },
            {
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "helpText": "What this field is: Time column for timeBucket/first/last for TimescaleDB / Last.\nHow to fill it: Enter the time column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Time Column"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "helpText": "What this field is: Time interval for TimescaleDB / Last.\nHow to fill it: Enter the interval value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.interval}} or pick the value from the data picker.",
              "placeholder": "Enter Interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "helpText": "What this field is: Value column for first/last for TimescaleDB / Last.\nHow to fill it: Enter the value column value requested by TimescaleDB, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.valueColumn}} or pick the value from the data picker.",
              "placeholder": "Enter Value Column"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "last",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming TimescaleDB data with last after a related upstream event is received",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "TimescaleDB returns structured last data that downstream nodes can reference with {{$json.fieldName}}."
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
