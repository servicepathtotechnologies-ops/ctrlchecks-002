import type { NodeDoc } from '../types';

export const googleContactsDoc: NodeDoc = {
  "slug": "google_contacts",
  "displayName": "Google Contacts",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_contacts.svg",
  "description": "Manage Google Contacts Use this node when a workflow needs google contacts behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Contacts exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Google Contacts node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Phone",
              "internalKey": "phone",
              "type": "string",
              "required": false,
              "description": "Contact phone number",
              "example": "{{ $json.phone }}"
            },
            {
              "name": "Contact Data",
              "internalKey": "contactData",
              "type": "json",
              "required": false,
              "description": "Raw Google People API person payload",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Contacts node.\nstructure: Value returned by the Google Contacts node.\nconvertible: Value returned by the Google Contacts node.\ndefaultValue: Value returned by the Google Contacts node.",
          "usageExample": {
            "scenario": "Use Google Contacts in a workflow and pass upstream data into create.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Name": "{{ $json.name }}",
              "Email": "{{ $json.email }}",
              "Phone": "{{ $json.phone }}",
              "Contact Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Google Contacts node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Phone",
              "internalKey": "phone",
              "type": "string",
              "required": false,
              "description": "Contact phone number",
              "example": "{{ $json.phone }}"
            },
            {
              "name": "Contact Data",
              "internalKey": "contactData",
              "type": "json",
              "required": false,
              "description": "Raw Google People API person payload",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Contacts node.\nstructure: Value returned by the Google Contacts node.\nconvertible: Value returned by the Google Contacts node.\ndefaultValue: Value returned by the Google Contacts node.",
          "usageExample": {
            "scenario": "Use Google Contacts in a workflow and pass upstream data into read.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Name": "{{ $json.name }}",
              "Email": "{{ $json.email }}",
              "Phone": "{{ $json.phone }}",
              "Contact Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Google Contacts node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Phone",
              "internalKey": "phone",
              "type": "string",
              "required": false,
              "description": "Contact phone number",
              "example": "{{ $json.phone }}"
            },
            {
              "name": "Contact Data",
              "internalKey": "contactData",
              "type": "json",
              "required": false,
              "description": "Raw Google People API person payload",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Contacts node.\nstructure: Value returned by the Google Contacts node.\nconvertible: Value returned by the Google Contacts node.\ndefaultValue: Value returned by the Google Contacts node.",
          "usageExample": {
            "scenario": "Use Google Contacts in a workflow and pass upstream data into update.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Name": "{{ $json.name }}",
              "Email": "{{ $json.email }}",
              "Phone": "{{ $json.phone }}",
              "Contact Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Google Contacts node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID (for update/delete)",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Phone",
              "internalKey": "phone",
              "type": "string",
              "required": false,
              "description": "Contact phone number",
              "example": "{{ $json.phone }}"
            },
            {
              "name": "Contact Data",
              "internalKey": "contactData",
              "type": "json",
              "required": false,
              "description": "Raw Google People API person payload",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Contacts node.\nstructure: Value returned by the Google Contacts node.\nconvertible: Value returned by the Google Contacts node.\ndefaultValue: Value returned by the Google Contacts node.",
          "usageExample": {
            "scenario": "Use Google Contacts in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Name": "{{ $json.name }}",
              "Email": "{{ $json.email }}",
              "Phone": "{{ $json.phone }}",
              "Contact Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/people/api/rest"
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
