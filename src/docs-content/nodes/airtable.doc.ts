import type { NodeDoc } from '../types';

export const airtableDoc: NodeDoc = {
  "slug": "airtable",
  "displayName": "Airtable",
  "category": "Data",
  "logoUrl": "/icons/nodes/airtable.svg",
  "description": "Read, write, update, or delete records in Airtable bases and tables Use this node when a workflow needs airtable behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Airtable Credential, Airtable Token, Airtable Credential",
  "credentialSetupSteps": [
    "Open the Airtable developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Airtable Credential, Airtable Token, Airtable Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://airtable.com/developers/web/api/introduction",
  "resources": [
    {
      "name": "Operations",
      "description": "Airtable exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Airtable node using the configured input fields.",
          "fields": [
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Airtable credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Airtable node.\nstructure: Value returned by the Airtable node.\nconvertible: Value returned by the Airtable node.\ndefaultValue: Value returned by the Airtable node.",
          "usageExample": {
            "scenario": "Use Airtable in a workflow and pass upstream data into read.",
            "inputValues": {
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Record Id": "recXXXXXXXXXXXXXX",
              "Fields": "[object Object]"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Airtable node using the configured input fields.",
          "fields": [
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Airtable credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Airtable node.\nstructure: Value returned by the Airtable node.\nconvertible: Value returned by the Airtable node.\ndefaultValue: Value returned by the Airtable node.",
          "usageExample": {
            "scenario": "Use Airtable in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Record Id": "recXXXXXXXXXXXXXX",
              "Fields": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Airtable node using the configured input fields.",
          "fields": [
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Airtable credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Airtable node.\nstructure: Value returned by the Airtable node.\nconvertible: Value returned by the Airtable node.\ndefaultValue: Value returned by the Airtable node.",
          "usageExample": {
            "scenario": "Use Airtable in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Record Id": "recXXXXXXXXXXXXXX",
              "Fields": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Airtable node using the configured input fields.",
          "fields": [
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Airtable credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Airtable node.\nstructure: Value returned by the Airtable node.\nconvertible: Value returned by the Airtable node.\ndefaultValue: Value returned by the Airtable node.",
          "usageExample": {
            "scenario": "Use Airtable in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Record Id": "recXXXXXXXXXXXXXX",
              "Fields": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
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
