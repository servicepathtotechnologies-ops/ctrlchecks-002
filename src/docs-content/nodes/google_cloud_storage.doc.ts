import type { NodeDoc } from '../types';

export const googleCloudStorageDoc: NodeDoc = {
  "slug": "google_cloud_storage",
  "displayName": "Google Cloud Storage",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_cloud_storage.svg",
  "description": "Interact with Google Cloud Storage buckets (upload, download, delete, list)",
  "credentialType": "Google Cloud Storage Credential",
  "credentialSetupSteps": [
    "What this is: Google Cloud Storage uses an OAuth connection so CtrlChecks can safely access your Google Cloud Storage account.",
    "Go to console.cloud.google.com and sign in -> open your project (or create one).",
    "Go to IAM & Admin -> Service Accounts -> Create Service Account.",
    "Give it a name (e.g. ctrlchecks-storage) -> click Create and Continue.",
    "Under \"Grant this service account access to project\", select role: Storage Object Admin -> Continue -> Done.",
    "Click the service account you just created -> Keys tab -> Add Key -> Create new key -> JSON -> Create. A JSON file downloads.",
    "Open the JSON file and copy its entire contents.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Cloud Storage -> paste the JSON key content -> Save.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Cloud Storage node and select the saved connection."
  ],
  "credentialDocsUrl": "https://cloud.google.com/storage/docs/authentication",
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
              "required": false,
              "description": "File name/path in bucket",
              "helpText": "What this field is: File name/path in bucket for Google Cloud Storage / Execute.\nHow to fill it: Enter the file name value requested by Google Cloud Storage, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fileName}} or pick the value from the data picker.",
              "placeholder": "Enter File Name"
            },
            {
              "name": "File Content",
              "internalKey": "fileContent",
              "type": "textarea",
              "required": false,
              "description": "File content for upload",
              "helpText": "What this field is: File content for upload for Google Cloud Storage / Execute.\nHow to fill it: Type the message, prompt, or content you want Google Cloud Storage to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter File Content"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "Prefix filter for list operations",
              "helpText": "What this field is: Prefix filter for list operations for Google Cloud Storage / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Google Cloud Storage which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "Enter Filter"
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
            "scenario": "Process incoming Google Cloud Storage data with execute after a related upstream event is received",
            "inputValues": {
              "File Name": "",
              "File Content": "",
              "Filter": ""
            },
            "expectedOutput": "Google Cloud Storage returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
