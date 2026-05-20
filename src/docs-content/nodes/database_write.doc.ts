import type { NodeDoc } from '../types';

export const databaseWriteDoc: NodeDoc = {
  "slug": "database_write",
  "displayName": "Database Write",
  "category": "Data",
  "logoUrl": "/icons/nodes/database_write.svg",
  "description": "Execute SQL queries on database (INSERT, UPDATE, DELETE)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "example": "postgresql://user:pass@host:5432/dbname",
              "placeholder": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query to execute",
              "example": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "placeholder": "INSERT INTO users (name, email) VALUES ($1, $2)"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "description": "Query parameters",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
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
