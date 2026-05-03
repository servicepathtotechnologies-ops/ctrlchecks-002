import type { NodeDoc } from '../types';

export const mysqlDoc: NodeDoc = {
  "slug": "mysql",
  "displayName": "MySQL",
  "category": "Data",
  "logoUrl": "/icons/nodes/mysql.svg",
  "description": "MySQL database operations Use this node when a workflow needs mysql behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "MySQL is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the MySQL node using the configured input fields.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": true,
              "description": "SQL query",
              "example": "SELECT * FROM users WHERE id = ?",
              "placeholder": "SELECT * FROM users WHERE id = ?"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Query parameters",
              "example": "1,value",
              "placeholder": "1,value"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the MySQL node.\nstructure: Value returned by the MySQL node.\nconvertible: Value returned by the MySQL node.\ndefaultValue: Value returned by the MySQL node.",
          "usageExample": {
            "scenario": "Use MySQL in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Query": "SELECT * FROM users WHERE id = ?",
              "Parameters": "1,value"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://dev.mysql.com/doc/"
        }
      ]
    }
  ],
  "commonErrors": [
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
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
