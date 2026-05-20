import type { NodeDoc } from '../types';

export const postgresqlDoc: NodeDoc = {
  "slug": "postgresql",
  "displayName": "PostgreSQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/postgresql.svg",
  "description": "Execute SQL queries on PostgreSQL database",
  "credentialType": "PostgreSQL Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://www.postgresql.org/docs/current/",
  "resources": [
    {
      "name": "Configuration",
      "description": "PostgreSQL is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the PostgreSQL node.",
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
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use PostgreSQL to execute in a workflow.",
            "inputValues": {
              "Connection String": "postgresql://user:pass@host:5432/dbname",
              "Query": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "Parameters": "[\"item\"]"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.postgresql.org/docs/current/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the PostgreSQL node."
    },
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
