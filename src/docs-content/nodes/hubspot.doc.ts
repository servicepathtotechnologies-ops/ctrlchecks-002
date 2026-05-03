import type { NodeDoc } from '../types';

export const hubspotDoc: NodeDoc = {
  "slug": "hubspot",
  "displayName": "HubSpot",
  "category": "Data",
  "logoUrl": "/icons/nodes/hubspot.svg",
  "description": "HubSpot CRM operations - create, update, retrieve, or search contacts, companies, deals, tickets, and other objects Use this node when a workflow needs hubspot behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Hubspot Credential, Hubspot Token, Hubspot Credential",
  "credentialSetupSteps": [
    "Open the HubSpot developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Hubspot Credential, Hubspot Token, Hubspot Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.hubspot.com/docs/api/overview",
  "resources": [
    {
      "name": "Contact",
      "description": "Contact is a HubSpot resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Get Many",
          "value": "getMany",
          "description": "Get Many with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        }
      ]
    },
    {
      "name": "Company",
      "description": "Company is a HubSpot resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Get Many",
          "value": "getMany",
          "description": "Get Many with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        }
      ]
    },
    {
      "name": "Deal",
      "description": "Deal is a HubSpot resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Get Many",
          "value": "getMany",
          "description": "Get Many with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        }
      ]
    },
    {
      "name": "Ticket",
      "description": "Ticket is a HubSpot resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Get Many",
          "value": "getMany",
          "description": "Get Many with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the HubSpot node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored HubSpot credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HubSpot node.\nstructure: Value returned by the HubSpot node.\nconvertible: Value returned by the HubSpot node.\ndefaultValue: Value returned by the HubSpot node.",
          "usageExample": {
            "scenario": "Use HubSpot in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Id": "123456789",
              "Object Id": "123456789",
              "Properties": "[object Object]",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
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
