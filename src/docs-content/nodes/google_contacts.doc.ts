import type { NodeDoc } from '../types';

export const googleContactsDoc: NodeDoc = {
  "slug": "google_contacts",
  "displayName": "Google Contacts",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_contacts.svg",
  "description": "Manage Google Contacts",
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
      "name": "Operations",
      "description": "Google Contacts exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new contact in Google Contacts.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "helpText": "What this field is: Contact ID (for update/delete) for Google Contacts / Create.\nWhere to find it: Open the item in Google Contacts and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
            }
          ],
          "outputExample": {
            "resourceName": "people/newContact456",
            "names": [
              {
                "displayName": "Bob Jones"
              }
            ],
            "emailAddresses": [
              {
                "value": "bob@example.com"
              }
            ]
          },
          "outputDescription": "resourceName: The new contact's resource name. names[0].displayName: Full name. emailAddresses[0].value: Primary email.",
          "usageExample": {
            "scenario": "Add form respondents as Google Contacts",
            "inputValues": {
              "givenName": "{{$json.firstName}}",
              "familyName": "{{$json.lastName}}",
              "email": "{{$json.email}}"
            },
            "expectedOutput": "Contact created. Use `{{$json.resourceName}}` to look up later."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Google Contacts node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "helpText": "What this field is: Contact ID (for update/delete) for Google Contacts / Read.\nWhere to find it: Open the item in Google Contacts and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming Google Contacts data with read after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "Google Contacts returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Google Contacts node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "helpText": "What this field is: Contact ID (for update/delete) for Google Contacts / Update.\nWhere to find it: Open the item in Google Contacts and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming Google Contacts data with update after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "Google Contacts returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Google Contacts node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "helpText": "What this field is: Contact ID (for update/delete) for Google Contacts / Delete.\nWhere to find it: Open the item in Google Contacts and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming Google Contacts data with delete after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "Google Contacts returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Contacts node."
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
