import type { NodeDoc } from '../types';

export const postgresqlDoc: NodeDoc = {
  "slug": "postgresql",
  "displayName": "PostgreSQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/postgresql.svg",
  "description": "Execute SQL queries on PostgreSQL database",
  "credentialType": "PostgreSQL Credential",
  "credentialSetupSteps": [
    "What this is: PostgreSQL uses an OAuth connection so CtrlChecks can safely access your PostgreSQL account.",
    "Make sure your PostgreSQL database is running and can be reached from the internet (or your local network).",
    "You need: the server address (hostname or IP), port (default is 5432), database name, username, and password.",
    "For AWS RDS: go to AWS Console -> RDS -> your database -> Connectivity & security. The \"Endpoint\" field is your hostname.",
    "Make sure the database firewall allows connections from CtrlChecks. For AWS RDS: add the server IP to the security group inbound rules on port 5432.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> PostgreSQL -> enter Host, Port, Database name, Username, Password -> Test Connection -> Save.",
    "Run a simple SELECT query in the PostgreSQL node to confirm CtrlChecks can read from your database.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
  ],
  "credentialDocsUrl": "https://www.postgresql.org/docs/current/tutorial-accessdb.html",
  "resources": [
    {
      "name": "Operations",
      "description": "PostgreSQL exposes operation choices directly.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Execute a SQL SELECT query against a PostgreSQL database.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for PostgreSQL / Query.\nHow to fill it: Enter the connection string value requested by PostgreSQL, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query to execute",
              "helpText": "What this field is: The SQL query to run against your database.\nExample: SELECT * FROM customers WHERE status = 'active' AND created_at > '2025-01-01'\nUse $1, $2 for variable values (safer): SELECT * FROM orders WHERE user_id = $1 AND status = $2\nThen put the actual values in the \"Parameters\" field below.\nWarning: Never put passwords or user-entered values directly in the query text — always use parameters.",
              "placeholder": "INSERT INTO users (name, email) VALUES ($1, $2)",
              "example": "INSERT INTO users (name, email) VALUES ($1, $2)"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "helpText": "What this field is: The values for $1, $2 etc. placeholders in your SQL query.\nFormat: JSON array — one value per placeholder in order.\nExample: [\"active\",\"2025-01-01\"] for a query with WHERE status = $1 AND date > $2\nWhy use it: Prevents SQL injection attacks — much safer than building the query string yourself.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "id": 1,
                "name": "Alice",
                "email": "alice@example.com",
                "created_at": "2024-01-01T00:00:00Z"
              }
            ],
            "rowCount": 1
          },
          "outputDescription": "rows: Array of result row objects. rowCount: Number of rows returned.",
          "usageExample": {
            "scenario": "Fetch all users who signed up in the last 7 days",
            "inputValues": {
              "query": "SELECT id, name, email, created_at FROM users WHERE created_at >= NOW() - INTERVAL '7 days' ORDER BY created_at DESC",
              "parameters": "[]"
            },
            "expectedOutput": "Returns matching rows as objects. Iterate with a Loop node to process each user."
          },
          "externalDocsUrl": "https://www.postgresql.org/docs/current/"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert a new row into a PostgreSQL table.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for PostgreSQL / Insert.\nHow to fill it: Enter the connection string value requested by PostgreSQL, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Database table name",
              "helpText": "What this field is: The name of the database table to insert a new record into.\nExample: customers or orders or public.user_events (use schema.table if not in the default schema)",
              "placeholder": "customers"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Row data to write as JSON",
              "helpText": "What this field is: The new record as a JSON object. Keys must exactly match your database column names.\nExample: {\"name\":\"Alice Kumar\",\"email\":\"alice@example.com\",\"status\":\"active\",\"plan\":\"pro\"}\nTip: Use {{$json}} or {{$json.formData}} to pass data from an earlier node.",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "id": 42,
                "name": "Bob",
                "email": "bob@example.com",
                "created_at": "2025-01-15T10:00:00Z"
              }
            ],
            "rowCount": 1
          },
          "outputDescription": "rows: The inserted row(s) with all columns including auto-generated fields like id and created_at. rowCount: Number of rows inserted.",
          "usageExample": {
            "scenario": "Save a webhook event payload to a PostgreSQL events table",
            "inputValues": {
              "query": "INSERT INTO events (type, payload, created_at) VALUES ($1, $2, NOW()) RETURNING *",
              "parameters": "[\"{{$json.event_type}}\", \"{{$json.payload}}\"]"
            },
            "expectedOutput": "Row is inserted. `{{$json.rows[0].id}}` is the new record's primary key."
          },
          "externalDocsUrl": "https://www.postgresql.org/docs/current/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update rows in a PostgreSQL table.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for PostgreSQL / Update.\nHow to fill it: Enter the connection string value requested by PostgreSQL, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Database table name",
              "helpText": "What this field is: The database table where you want to update records.\nExample: customers",
              "placeholder": "customers"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Row data to write as JSON",
              "helpText": "What this field is: The new values to set, as a JSON object.\nExample: {\"status\":\"premium\",\"updated_at\":\"2025-01-15\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "json",
              "required": false,
              "description": "Filter condition for update/delete",
              "helpText": "What this field is: The condition that identifies which rows to update.\nExample: {\"id\": 42} updates the single row where id = 42.\nExample: {\"email\": \"alice@example.com\"} updates the row with that email.\nWarning: Without a specific where condition, ALL rows in the table could be updated.",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "id": 42,
                "status": "fulfilled",
                "updated_at": "2025-01-15T11:00:00Z"
              }
            ],
            "rowCount": 1
          },
          "outputDescription": "rows: The updated row(s). rowCount: Number of rows affected.",
          "usageExample": {
            "scenario": "Mark an order as fulfilled when a payment webhook is received",
            "inputValues": {
              "query": "UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
              "parameters": "[\"fulfilled\", \"{{$json.orderId}}\"]"
            },
            "expectedOutput": "Row is updated. `{{$json.rows[0].status}}` confirms the new value."
          },
          "externalDocsUrl": "https://www.postgresql.org/docs/current/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete rows from a PostgreSQL table.",
          "fields": [
            {
              "name": "Connection String",
              "internalKey": "connectionString",
              "type": "string",
              "required": false,
              "description": "Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment.",
              "helpText": "What this field is: Database connection string (PostgreSQL). If omitted, uses DATABASE_URL from environment. for PostgreSQL / Delete.\nHow to fill it: Enter the connection string value requested by PostgreSQL, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.connectionString}} or pick the value from the data picker.",
              "placeholder": "postgresql://user:pass@host:5432/dbname",
              "example": "postgresql://user:pass@host:5432/dbname"
            },
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Database table name",
              "helpText": "What this field is: The database table to delete from.\nExample: old_sessions",
              "placeholder": "customers"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "json",
              "required": false,
              "description": "Filter condition for update/delete",
              "helpText": "What this field is: The condition that identifies which rows to delete.\nExample: {\"id\": 42} deletes only the row where id = 42.\nWarning: Without a specific where condition, ALL rows in the table could be deleted.",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "rowCount": 1
          },
          "outputDescription": "rowCount: Number of rows deleted. 0 means no matching rows were found.",
          "usageExample": {
            "scenario": "Delete expired session tokens from the database",
            "inputValues": {
              "query": "DELETE FROM sessions WHERE expires_at < NOW()",
              "parameters": "[]"
            },
            "expectedOutput": "`{{$json.rowCount}}` rows were deleted. Log this for audit purposes."
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
