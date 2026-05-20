import type { NodeDoc } from '../types';

export const mysqlDoc: NodeDoc = {
  "slug": "mysql",
  "displayName": "MySQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/mysql.svg",
  "description": "MySQL database operations",
  "credentialType": "MySQL Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://dev.mysql.com/doc/",
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
              "example": "SELECT * FROM users WHERE id = ?",
              "placeholder": "SELECT * FROM users WHERE id = ?"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "description": "Query parameters",
              "example": "[1,\"value\"]",
              "placeholder": "[1,\"value\"]"
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
            "scenario": "Use MySQL to execute in a workflow.",
            "inputValues": {
              "Query": "SELECT * FROM users WHERE id = ?",
              "Parameters": "[1,\"value\"]"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
