import type { NodeDoc } from '../types';

export const zohoCrmDoc: NodeDoc = {
  "slug": "zoho_crm",
  "displayName": "Zoho CRM",
  "category": "Data",
  "logoUrl": "/icons/nodes/zoho_crm.svg",
  "description": "Zoho CRM operations - work with modules, records, and related lists Use this node when a workflow needs zoho crm behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Zoho Token, Zoho Token, Zoho Credential",
  "credentialSetupSteps": [
    "Open the Zoho CRM developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Zoho Token, Zoho Token, Zoho Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/",
  "resources": [
    {
      "name": "Contacts",
      "description": "Contacts is a Zoho CRM resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into get.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into search.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        }
      ]
    },
    {
      "name": "Leads",
      "description": "Leads is a Zoho CRM resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into get.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into search.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        }
      ]
    },
    {
      "name": "Accounts",
      "description": "Accounts is a Zoho CRM resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into get.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into search.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        }
      ]
    },
    {
      "name": "Deals",
      "description": "Deals is a Zoho CRM resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into get.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Zoho CRM node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "password",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Zoho CRM credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Record data for create/update",
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
          "outputDescription": "type: Value returned by the Zoho CRM node.\nstructure: Value returned by the Zoho CRM node.\nconvertible: Value returned by the Zoho CRM node.\ndefaultValue: Value returned by the Zoho CRM node.",
          "usageExample": {
            "scenario": "Use Zoho CRM in a workflow and pass upstream data into search.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Credential Id": "cred_123",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
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
