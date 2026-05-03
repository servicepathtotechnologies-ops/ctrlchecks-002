import type { NodeDoc } from '../types';

export const googleCloudStorageDoc: NodeDoc = {
  "slug": "google_cloud_storage",
  "displayName": "Google Cloud Storage",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_cloud_storage.svg",
  "description": "Interact with Google Cloud Storage buckets (upload, download, delete, list) Use this node when a workflow needs google cloud storage behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Google Cloud Storage Credential",
  "credentialSetupSteps": [
    "Open the Google Cloud Storage developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Google Cloud Storage Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://cloud.google.com/storage/docs/json_api",
  "resources": [
    {
      "name": "Configuration",
      "description": "Google Cloud Storage is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Google Cloud Storage node using the configured input fields.",
          "fields": [
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": true,
              "description": "projectId field",
              "example": "{{ $json.projectId }}"
            },
            {
              "name": "Client Email",
              "internalKey": "clientEmail",
              "type": "email",
              "required": true,
              "description": "clientEmail field",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Private Key",
              "internalKey": "privateKey",
              "type": "string",
              "required": true,
              "description": "privateKey field",
              "example": "{{ $json.privateKey }}"
            },
            {
              "name": "Operation",
              "internalKey": "operation",
              "type": "string",
              "required": true,
              "description": "operation field",
              "example": "{{ $json.operation }}"
            },
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "bucket field",
              "example": "{{ $json.bucket }}"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name/path in bucket",
              "example": "{{ $json.fileName }}"
            },
            {
              "name": "File Content",
              "internalKey": "fileContent",
              "type": "string",
              "required": false,
              "description": "File content for upload",
              "example": "{{ $json.fileContent }}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "Prefix filter for list operations",
              "example": "{{ $json.filter }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Cloud Storage node.\nstructure: Value returned by the Google Cloud Storage node.\nconvertible: Value returned by the Google Cloud Storage node.\ndefaultValue: Value returned by the Google Cloud Storage node.",
          "usageExample": {
            "scenario": "Use Google Cloud Storage in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Project Id": "{{ $json.projectId }}",
              "Client Email": "{{ $json.email }}",
              "Private Key": "{{ $json.privateKey }}",
              "Operation": "{{ $json.operation }}",
              "Bucket": "{{ $json.bucket }}",
              "File Name": "{{ $json.fileName }}",
              "File Content": "{{ $json.fileContent }}",
              "Filter": "{{ $json.filter }}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://cloud.google.com/storage/docs/json_api"
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
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
