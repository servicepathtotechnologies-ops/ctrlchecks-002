import type { NodeDoc } from '../types';

export const firebaseDoc: NodeDoc = {
  "slug": "firebase",
  "displayName": "Firebase",
  "category": "Data",
  "logoUrl": "/icons/nodes/firebase.svg",
  "description": "Interact with Firebase Firestore and Realtime Database",
  "credentialType": "Firebase Credential",
  "credentialSetupSteps": [
    "What this is: Firebase uses an OAuth connection so CtrlChecks can safely access your Firebase account.",
    "Go to console.firebase.google.com and sign in -> open your project.",
    "Click the gear icon (top left) -> Project Settings -> Service Accounts tab.",
    "Click \"Generate new private key\" -> Generate key -> confirm. A JSON file downloads to your computer.",
    "Open the JSON file and copy its entire contents (the whole JSON object from { to }).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Firebase -> paste the service account JSON -> Save.",
    "Run a test step (e.g. read a document from Firestore) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Firebase node and select the saved connection."
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
              "required": false,
              "description": "Firestore collection name",
              "helpText": "What this field is: The Firestore collection name — like a folder of related documents.\nExample: users or orders or messages or products",
              "placeholder": "Enter Collection"
            },
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "required": false,
              "description": "Document ID for get/update/delete",
              "helpText": "What this field is: The unique ID of a specific document in the collection.\nWhere to find it: Firebase Console → Firestore Database → click your collection → click a document — the ID is shown at the top.\nExample: abc123xyz or user_12345 or order_2025_001",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Data for add/update/realtime_set",
              "helpText": "What this field is: Data for add/update/realtime_set for Firebase / Execute.\nHow to fill it: Enter valid JSON in the format Firebase expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Query filter conditions",
              "helpText": "What this field is: Query filter conditions for Firebase / Execute.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Firebase which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max documents to return for query",
              "helpText": "What this field is: A number used for limit in Firebase / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Database Url",
              "internalKey": "databaseUrl",
              "type": "url",
              "required": false,
              "description": "Realtime Database URL",
              "helpText": "What this field is: Realtime Database URL for Firebase / Execute.\nHow to fill it: Paste the full web address Firebase should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.databaseUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
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
            "scenario": "Process incoming Firebase data with execute after a related upstream event is received",
            "inputValues": {
              "Collection": "",
              "Document Id": "abc123",
              "Data": "{\"key\":\"value\"}",
              "Filter": "{\"key\":\"value\"}",
              "Limit": "10"
            },
            "expectedOutput": "Firebase returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
