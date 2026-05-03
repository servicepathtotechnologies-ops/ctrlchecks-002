import type { NodeDoc } from '../types';

export const firebaseDoc: NodeDoc = {
  "slug": "firebase",
  "displayName": "Firebase",
  "category": "Data",
  "logoUrl": "/icons/nodes/firebase.svg",
  "description": "Interact with Firebase Firestore and Realtime Database Use this node when a workflow needs firebase behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Firebase Credential, Firebase Credential",
  "credentialSetupSteps": [
    "Open the Firebase developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Firebase Credential, Firebase Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://firebase.google.com/docs/reference",
  "resources": [
    {
      "name": "Configuration",
      "description": "Firebase is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Firebase node using the configured input fields.",
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
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "required": false,
              "description": "Firestore collection name",
              "example": "{{ $json.collection }}"
            },
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "required": false,
              "description": "Document ID for get/update/delete",
              "example": "{{ $json.documentId }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data for add/update/realtime_set",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Query filter conditions",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max documents to return for query",
              "example": "25"
            },
            {
              "name": "Database Url",
              "internalKey": "databaseUrl",
              "type": "url",
              "required": false,
              "description": "Realtime Database URL",
              "example": "https://api.example.com/resource"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Firebase node.\nstructure: Value returned by the Firebase node.\nconvertible: Value returned by the Firebase node.\ndefaultValue: Value returned by the Firebase node.",
          "usageExample": {
            "scenario": "Use Firebase in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Project Id": "{{ $json.projectId }}",
              "Client Email": "{{ $json.email }}",
              "Private Key": "{{ $json.privateKey }}",
              "Operation": "{{ $json.operation }}",
              "Collection": "{{ $json.collection }}",
              "Document Id": "{{ $json.documentId }}",
              "Data": "{\"key\":\"value\"}",
              "Filter": "{\"key\":\"value\"}",
              "Limit": "25",
              "Database Url": "https://api.example.com/resource"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://firebase.google.com/docs/reference"
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
