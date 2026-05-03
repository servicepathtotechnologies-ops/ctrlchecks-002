import type { NodeDoc } from '../types';

export const databaseReadDoc: NodeDoc = {
  "slug": "database_read",
  "displayName": "Database Read",
  "category": "Data",
  "logoUrl": "/icons/nodes/database_read.svg",
  "description": "Read data from database using SQL queries Use this node when a workflow needs database read behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Postgresql Credential",
  "credentialSetupSteps": [
    "Open the Database Read developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Postgresql Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Database Read is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Database Read node using the configured input fields.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": true,
              "description": "SELECT query",
              "example": "SELECT * FROM users WHERE status = $1",
              "placeholder": "SELECT * FROM users WHERE status = $1"
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
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Database Read node.\nitemType: Value returned by the Database Read node.\nconvertible: Value returned by the Database Read node.\ndefaultValue: Value returned by the Database Read node.",
          "usageExample": {
            "scenario": "Use Database Read in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Query": "SELECT * FROM users WHERE status = $1",
              "Connection String": "postgresql://user:pass@host:5432/dbname",
              "Parameters": "[\"value\"]"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
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
    "database_write",
    "google_sheets",
    "google_doc"
  ]
};
