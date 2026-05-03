import type { NodeDoc } from '../types';

export const googleBigqueryDoc: NodeDoc = {
  "slug": "google_bigquery",
  "displayName": "Google BigQuery",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_bigquery.svg",
  "description": "Query Google BigQuery data warehouse Use this node when a workflow needs google bigquery behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Google BigQuery is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Google BigQuery node using the configured input fields.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": true,
              "description": "SQL query",
              "example": "SELECT * FROM dataset.table LIMIT 10",
              "placeholder": "SELECT * FROM dataset.table LIMIT 10"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": true,
              "description": "Project ID",
              "example": "my-project",
              "placeholder": "my-project"
            },
            {
              "name": "Use Legacy Sql",
              "internalKey": "useLegacySql",
              "type": "boolean",
              "required": false,
              "description": "Whether to use BigQuery legacy SQL. Defaults to false.",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google BigQuery node.\nstructure: Value returned by the Google BigQuery node.\nconvertible: Value returned by the Google BigQuery node.\ndefaultValue: Value returned by the Google BigQuery node.",
          "usageExample": {
            "scenario": "Use Google BigQuery in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Query": "SELECT * FROM dataset.table LIMIT 10",
              "Project Id": "my-project",
              "Use Legacy Sql": "false"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://cloud.google.com/bigquery/docs/reference/rest"
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
