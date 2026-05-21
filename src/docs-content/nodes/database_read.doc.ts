import type { NodeDoc } from '../types';

export const databaseReadDoc: NodeDoc = {
  "slug": "database_read",
  "displayName": "Database Read",
  "category": "Data",
  "logoUrl": "/icons/nodes/database_read.svg",
  "description": "Read data from database using SQL queries",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Database Read is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Run a SELECT query on the configured database.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for Database Read / Execute.\nHow to fill it: Enter the connection string value requested by Database Read, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SELECT query",
              "helpText": "What this field is: SELECT query for Database Read / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Database Read which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "SELECT * FROM users WHERE status = $1",
              "example": "SELECT * FROM users WHERE status = $1"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "helpText": "What this field is: Query parameters for Database Read / Execute.\nHow to fill it: Enter valid JSON in the format Database Read expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.parameters}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "id": 1,
                "name": "Alice",
                "value": 100
              }
            ],
            "rowCount": 1
          },
          "outputDescription": "rows: Array of result objects with column names as keys. rowCount: Total rows returned.",
          "usageExample": {
            "scenario": "Read records from any SQL database",
            "inputValues": {
              "query": "SELECT * FROM orders WHERE status = $1",
              "parameters": "[\"pending\"]"
            },
            "expectedOutput": "Returns matching rows as JavaScript objects."
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
