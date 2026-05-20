import type { NodeDoc } from '../types';

export const firebaseDoc: NodeDoc = {
  "slug": "firebase",
  "displayName": "Firebase",
  "category": "Data",
  "logoUrl": "/icons/nodes/firebase.svg",
  "description": "Interact with Firebase Firestore and Realtime Database",
  "credentialType": "Firebase Credential",
  "credentialSetupSteps": [
    "In the Firebase Console, go to Project Settings → Service Accounts.",
    "Click \"Generate new private key\" and download the JSON file.",
    "Copy the content of the JSON file.",
    "In CtrlChecks, open Connections → Add Connection → Firebase → paste the service account JSON → Save."
  ],
  "credentialDocsUrl": "https://firebase.google.com/docs/admin/setup",
  "resources": [
    {
      "name": "Configuration",
      "description": "Firebase is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Firebase node.",
          "fields": [
            {
              "name": "Collection",
              "internalKey": "collection",
              "type": "string",
              "description": "Firestore collection name"
            },
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "description": "Document ID for get/update/delete",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data for add/update/realtime_set",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "description": "Query filter conditions",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max documents to return for query",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Database Url",
              "internalKey": "databaseUrl",
              "type": "url",
              "description": "Realtime Database URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
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
            "scenario": "Use Firebase to execute in a workflow.",
            "inputValues": {
              "Collection": "",
              "Document Id": "abc123",
              "Data": "{\"key\":\"value\"}",
              "Filter": "{\"key\":\"value\"}",
              "Limit": "10"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://firebase.google.com/docs/reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Firebase node."
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
