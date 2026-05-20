import type { NodeDoc } from '../types';

export const googleContactsDoc: NodeDoc = {
  "slug": "google_contacts",
  "displayName": "Google Contacts",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_contacts.svg",
  "description": "Manage Google Contacts",
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
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
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
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use Google Contacts to read in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
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
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use Google Contacts to update in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use Google Contacts to delete in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
