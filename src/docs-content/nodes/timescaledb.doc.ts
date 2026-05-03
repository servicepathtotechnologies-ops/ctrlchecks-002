import type { NodeDoc } from '../types';

export const timescaledbDoc: NodeDoc = {
  "slug": "timescaledb",
  "displayName": "TimescaleDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/timescaledb.svg",
  "description": "Connect to and query TimescaleDB time-series databases (PostgreSQL extension). Use this node when a workflow needs timescaledb behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Password Credential",
  "credentialSetupSteps": [
    "Open the TimescaleDB developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Password Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "TimescaleDB exposes operation choices directly.",
      "operations": [
        {
          "name": "Execute Query",
          "value": "executeQuery",
          "description": "Execute Query with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into execute query.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs execute query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into insert.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs insert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into update.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Time Bucket",
          "value": "timeBucket",
          "description": "Time Bucket with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into time bucket.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs time bucket and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "First",
          "value": "first",
          "description": "First with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into first.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs first and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Last",
          "value": "last",
          "description": "Last with the TimescaleDB node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname",
              "example": "{{ $json.host }}",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "description": "TimescaleDB port",
              "example": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "required": false,
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "date",
              "required": false,
              "description": "Time column for timeBucket/first/last",
              "example": "{{ $json.timeColumn }}",
              "defaultValue": ""
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "required": false,
              "description": "Time interval",
              "example": "{{ $json.interval }}",
              "defaultValue": ""
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "required": false,
              "description": "Value column for first/last",
              "example": "{{ $json.valueColumn }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "timescaledb"
          },
          "outputDescription": "success: Indicates that the TimescaleDB node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use TimescaleDB in a workflow and pass upstream data into last.",
            "inputValues": {
              "Host": "{{ $json.host }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Database": "{{ $json.database }}",
              "Port": "5432",
              "Ssl": "false",
              "Query": "status:open",
              "Table": "{{ $json.table }}",
              "Time Column": "{{ $json.timeColumn }}",
              "Interval": "{{ $json.interval }}"
            },
            "expectedOutput": "The node runs last and exposes its result in the output panel for the next node."
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
