import type { NodeDoc } from '../types';

export const databaseWriteDoc: NodeDoc = {
  "slug": "database_write",
  "displayName": "Database Write",
  "category": "Data",
  "logoUrl": "/icons/nodes/database_write.svg",
  "description": "Execute SQL queries on database (INSERT, UPDATE, DELETE)",
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
      "description": "Database Write is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute an INSERT, UPDATE, or DELETE query on the configured database.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for Database Write / Execute.\nHow to fill it: Enter the connection string value requested by Database Write, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query to execute",
              "helpText": "What this field is: SQL query to execute for Database Write / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Database Write which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "example": "INSERT INTO users (name, email) VALUES ($1, $2)"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "helpText": "What this field is: Query parameters for Database Write / Execute.\nHow to fill it: Enter valid JSON in the format Database Write expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.parameters}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "rowCount": 1
          },
          "outputDescription": "rowCount: Number of rows affected by the query.",
          "usageExample": {
            "scenario": "Insert a new record into any SQL database",
            "inputValues": {
              "query": "INSERT INTO logs (message, created_at) VALUES ($1, NOW())",
              "parameters": "[\"{{$json.message}}\"]"
            },
            "expectedOutput": "`rowCount: 1` confirms the row was inserted."
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
