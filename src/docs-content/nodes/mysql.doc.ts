import type { NodeDoc } from '../types';

export const mysqlDoc: NodeDoc = {
  "slug": "mysql",
  "displayName": "MySQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/mysql.svg",
  "description": "MySQL database operations",
  "credentialType": "MySQL Credential",
  "credentialSetupSteps": [
    "What this is: MySQL uses an OAuth connection so CtrlChecks can safely access your MySQL account.",
    "Make sure your MySQL server is running and accessible from the internet (or your local network).",
    "You need: server hostname (or IP address), port (default is 3306), database name, username, and password.",
    "For AWS RDS MySQL: go to AWS Console -> RDS -> your database -> Connectivity & security. The \"Endpoint\" is your hostname.",
    "Make sure the MySQL server allows remote connections and the firewall allows port 3306 from CtrlChecks.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> MySQL -> enter Host, Port, Database, Username, Password -> Test Connection -> Save.",
    "Run a simple SELECT query to confirm CtrlChecks can read from your database.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
  ],
  "credentialDocsUrl": "https://dev.mysql.com/doc/refman/8.0/en/",
  "resources": [
    {
      "name": "Configuration",
      "description": "MySQL is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the MySQL node.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for MySQL / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells MySQL which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "SELECT * FROM users WHERE id = ?",
              "example": "SELECT * FROM users WHERE id = ?"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "helpText": "What this field is: Query parameters for MySQL / Execute.\nHow to fill it: Enter valid JSON in the format MySQL expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.parameters}} or pick the value from the data picker.",
              "placeholder": "[1,\"value\"]",
              "example": "[1,\"value\"]"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming MySQL data with execute after a related upstream event is received",
            "inputValues": {
              "Query": "SELECT * FROM users WHERE id = ?",
              "Parameters": "[1,\"value\"]"
            },
            "expectedOutput": "MySQL returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://dev.mysql.com/doc/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the MySQL node."
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
