import type { NodeDoc } from '../types';

export const googleBigqueryDoc: NodeDoc = {
  "slug": "google_bigquery",
  "displayName": "Google BigQuery",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_bigquery.svg",
  "description": "Query Google BigQuery data warehouse",
  "credentialType": "Google OAuth",
  "credentialSetupSteps": [
    "What this is: Google uses an OAuth connection so CtrlChecks can safely access your Google account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Required Google Workspace API scopes.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
  "resources": [
    {
      "name": "Configuration",
      "description": "Google BigQuery is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Google BigQuery node.",
          "fields": [
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "SQL query",
              "helpText": "What this field is: SQL query for Google BigQuery / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Google BigQuery which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "SELECT * FROM dataset.table LIMIT 10",
              "example": "SELECT * FROM dataset.table LIMIT 10"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID",
              "helpText": "What this field is: Project ID for Google BigQuery / Execute.\nWhere to find it: Open the item in Google BigQuery and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.projectId}} or pick the value from the data picker.",
              "placeholder": "my-project",
              "example": "my-project"
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
            "scenario": "Process incoming Google BigQuery data with execute after a related upstream event is received",
            "inputValues": {
              "Query": "SELECT * FROM dataset.table LIMIT 10",
              "Project Id": "my-project"
            },
            "expectedOutput": "Google BigQuery returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://cloud.google.com/bigquery/docs/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google BigQuery node."
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
