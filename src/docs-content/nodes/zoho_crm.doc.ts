import type { NodeDoc } from '../types';

export const zohoCrmDoc: NodeDoc = {
  "slug": "zoho_crm",
  "displayName": "Zoho CRM",
  "category": "Data",
  "logoUrl": "/icons/nodes/zoho_crm.svg",
  "description": "Zoho CRM operations - work with modules, records, and related lists",
  "credentialType": "Zoho Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/",
  "resources": [
    {
      "name": "Operations",
      "description": "Zoho CRM exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Zoho CRM node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "example": "Leads",
              "placeholder": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Record data for create/update",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Zoho CRM to get in a workflow.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Zoho CRM node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "example": "Leads",
              "placeholder": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Record data for create/update",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Zoho CRM to create in a workflow.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Zoho CRM node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "example": "Leads",
              "placeholder": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Record data for create/update",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Zoho CRM to update in a workflow.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Zoho CRM node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "example": "Leads",
              "placeholder": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Record data for create/update",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Zoho CRM to delete in a workflow.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Zoho CRM node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "example": "your-zoho-oauth-access-token",
              "placeholder": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "description": "Zoho CRM OAuth refresh token",
              "example": "your-zoho-refresh-token",
              "placeholder": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "example": "Leads",
              "placeholder": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "description": "Search criteria (optional, used for search operation)",
              "example": "(Email:equals:test@example.com)",
              "placeholder": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Record data for create/update",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Zoho CRM to search in a workflow.",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v6/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Zoho CRM node."
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
