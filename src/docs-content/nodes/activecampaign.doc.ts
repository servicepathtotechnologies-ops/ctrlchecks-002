import type { NodeDoc } from '../types';

export const activecampaignDoc: NodeDoc = {
  "slug": "activecampaign",
  "displayName": "ActiveCampaign",
  "category": "Data",
  "logoUrl": "/icons/nodes/activecampaign.svg",
  "description": "ActiveCampaign marketing automation Use this node when a workflow needs activecampaign behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Activecampaign Credential",
  "credentialSetupSteps": [
    "Open the ActiveCampaign developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Activecampaign Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.activecampaign.com/reference/overview",
  "resources": [
    {
      "name": "Operations",
      "description": "ActiveCampaign exposes operation choices directly.",
      "operations": [
        {
          "name": "Add",
          "value": "add",
          "description": "Add with the ActiveCampaign node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Api Url",
              "internalKey": "apiUrl",
              "type": "url",
              "required": true,
              "description": "ActiveCampaign API URL, e.g. https://account.api-us1.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "ActiveCampaign API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email address",
              "example": "{{ $json.email }}"
            },
            {
              "name": "First Name",
              "internalKey": "firstName",
              "type": "string",
              "required": false,
              "description": "Contact first name",
              "example": "{{ $json.firstName }}"
            },
            {
              "name": "Last Name",
              "internalKey": "lastName",
              "type": "string",
              "required": false,
              "description": "Contact last name",
              "example": "{{ $json.lastName }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw ActiveCampaign contact payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ActiveCampaign node.\nstructure: Value returned by the ActiveCampaign node.\nconvertible: Value returned by the ActiveCampaign node.\ndefaultValue: Value returned by the ActiveCampaign node.",
          "usageExample": {
            "scenario": "Use ActiveCampaign in a workflow and pass upstream data into add.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Api Url": "https://api.example.com/resource",
              "Api Key": "{{ $json.apiKey }}",
              "Email": "{{ $json.email }}",
              "First Name": "{{ $json.firstName }}",
              "Last Name": "{{ $json.lastName }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs add and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the ActiveCampaign node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Api Url",
              "internalKey": "apiUrl",
              "type": "url",
              "required": true,
              "description": "ActiveCampaign API URL, e.g. https://account.api-us1.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "ActiveCampaign API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email address",
              "example": "{{ $json.email }}"
            },
            {
              "name": "First Name",
              "internalKey": "firstName",
              "type": "string",
              "required": false,
              "description": "Contact first name",
              "example": "{{ $json.firstName }}"
            },
            {
              "name": "Last Name",
              "internalKey": "lastName",
              "type": "string",
              "required": false,
              "description": "Contact last name",
              "example": "{{ $json.lastName }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw ActiveCampaign contact payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ActiveCampaign node.\nstructure: Value returned by the ActiveCampaign node.\nconvertible: Value returned by the ActiveCampaign node.\ndefaultValue: Value returned by the ActiveCampaign node.",
          "usageExample": {
            "scenario": "Use ActiveCampaign in a workflow and pass upstream data into update.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Api Url": "https://api.example.com/resource",
              "Api Key": "{{ $json.apiKey }}",
              "Email": "{{ $json.email }}",
              "First Name": "{{ $json.firstName }}",
              "Last Name": "{{ $json.lastName }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the ActiveCampaign node using the configured input fields.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
            },
            {
              "name": "Api Url",
              "internalKey": "apiUrl",
              "type": "url",
              "required": true,
              "description": "ActiveCampaign API URL, e.g. https://account.api-us1.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "ActiveCampaign API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Contact email address",
              "example": "{{ $json.email }}"
            },
            {
              "name": "First Name",
              "internalKey": "firstName",
              "type": "string",
              "required": false,
              "description": "Contact first name",
              "example": "{{ $json.firstName }}"
            },
            {
              "name": "Last Name",
              "internalKey": "lastName",
              "type": "string",
              "required": false,
              "description": "Contact last name",
              "example": "{{ $json.lastName }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw ActiveCampaign contact payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ActiveCampaign node.\nstructure: Value returned by the ActiveCampaign node.\nconvertible: Value returned by the ActiveCampaign node.\ndefaultValue: Value returned by the ActiveCampaign node.",
          "usageExample": {
            "scenario": "Use ActiveCampaign in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Contact Id": "contact-id",
              "Api Url": "https://api.example.com/resource",
              "Api Key": "{{ $json.apiKey }}",
              "Email": "{{ $json.email }}",
              "First Name": "{{ $json.firstName }}",
              "Last Name": "{{ $json.lastName }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
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
