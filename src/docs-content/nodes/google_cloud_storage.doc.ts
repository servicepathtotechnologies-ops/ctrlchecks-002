import type { NodeDoc } from '../types';

export const googleCloudStorageDoc: NodeDoc = {
  "slug": "google_cloud_storage",
  "displayName": "Google Cloud Storage",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_cloud_storage.svg",
  "description": "Interact with Google Cloud Storage buckets (upload, download, delete, list)",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
  "resources": [
    {
      "name": "Configuration",
      "description": "Google Cloud Storage is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Google Cloud Storage node.",
          "fields": [
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "description": "File name/path in bucket"
            },
            {
              "name": "File Content",
              "internalKey": "fileContent",
              "type": "textarea",
              "description": "File content for upload"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "Prefix filter for list operations"
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
            "scenario": "Use Google Cloud Storage to execute in a workflow.",
            "inputValues": {
              "File Name": "",
              "File Content": "",
              "Filter": ""
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://cloud.google.com/storage/docs/json_api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Cloud Storage node."
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
