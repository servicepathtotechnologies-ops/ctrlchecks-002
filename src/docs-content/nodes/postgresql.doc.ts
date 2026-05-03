import type { NodeDoc } from '../types';

export const postgresqlDoc: NodeDoc = {
  "slug": "postgresql",
  "displayName": "PostgreSQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/postgresql.svg",
  "description": "Execute SQL queries on PostgreSQL database Use this node when a workflow needs postgresql behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Postgresql Credential",
  "credentialSetupSteps": [
    "Open the PostgreSQL developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Postgresql Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.postgresql.org/docs/current/",
  "resources": [
    {
      "name": "Configuration",
      "description": "PostgreSQL is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the PostgreSQL node using the configured input fields.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": true,
              "description": "SQL query to execute",
              "example": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "placeholder": "INSERT INTO users (name, email) VALUES ($1, $2)"
            },
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "example": "postgresql://user:pass@host:5432/dbname",
              "placeholder": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "example": "[\"value\"]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the PostgreSQL node.\nstructure: Value returned by the PostgreSQL node.\nconvertible: Value returned by the PostgreSQL node.\ndefaultValue: Value returned by the PostgreSQL node.",
          "usageExample": {
            "scenario": "Use PostgreSQL in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Query": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "Connection String": "postgresql://user:pass@host:5432/dbname",
              "Parameters": "[\"value\"]"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.postgresql.org/docs/current/"
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
    "supabase",
    "database_read",
    "database_write",
    "google_sheets",
    "google_doc"
  ]
};
