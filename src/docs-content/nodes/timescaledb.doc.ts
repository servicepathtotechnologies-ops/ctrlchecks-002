import type { NodeDoc } from '../types';

export const timescaledbDoc: NodeDoc = {
  "slug": "timescaledb",
  "displayName": "TimescaleDB",
  "category": "Data",
  "logoUrl": "/icons/nodes/timescaledb.svg",
  "description": "Connect to and query TimescaleDB time-series databases (PostgreSQL extension).",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to executequery in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
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
          "description": "Insert using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to insert in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
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
          "description": "Update using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to update in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
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
          "description": "Delete using the TimescaleDB node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to delete in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to timebucket in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes timebucket and exposes its result for downstream nodes."
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
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to first in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes first and exposes its result for downstream nodes."
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
              "description": "TimescaleDB hostname"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "description": "TimescaleDB port",
              "example": "5432",
              "placeholder": "5432",
              "defaultValue": "5432"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "TimescaleDB username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "TimescaleDB password",
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
              "name": "Ssl",
              "internalKey": "ssl",
              "type": "boolean",
              "description": "Enable SSL",
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
              "name": "Time Column",
              "internalKey": "timeColumn",
              "type": "string",
              "description": "Time column for timeBucket/first/last"
            },
            {
              "name": "Interval",
              "internalKey": "interval",
              "type": "string",
              "description": "Time interval"
            },
            {
              "name": "Value Column",
              "internalKey": "valueColumn",
              "type": "string",
              "description": "Value column for first/last"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use TimescaleDB to last in a workflow.",
            "inputValues": {
              "Host": "",
              "Port": "5432",
              "Username": "",
              "Password": "",
              "Database": ""
            },
            "expectedOutput": "The node executes last and exposes its result for downstream nodes."
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
