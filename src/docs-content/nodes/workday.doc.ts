import type { NodeDoc } from '../types';

export const workdayDoc: NodeDoc = {
  "slug": "workday",
  "displayName": "Workday",
  "category": "Utility",
  "logoUrl": "/icons/nodes/workday.svg",
  "description": "Read and manage Workday HR, staffing, and organizational data through the Workday REST APIs.",
  "credentialType": "Workday Credential",
  "credentialSetupSteps": [
    "In Workday, go to Setup → System → API Clients → Register API Client.",
    "Set Redirect URI to http://localhost:3001/api/oauth/workday/callback.",
    "Select the required scopes (e.g. Staffing, Human Resources).",
    "Copy the Client ID and Client Secret.",
    "In CtrlChecks, open Connections → Add Connection → Workday → enter Client ID, Secret, Tenant, and Instance URL → authorize."
  ],
  "credentialDocsUrl": "https://community.workday.com/articles/1084547",
  "resources": [
    {
      "name": "Operations",
      "description": "Workday exposes operation choices directly.",
      "operations": [
        {
          "name": "Get many",
          "value": "get_many",
          "description": "Get many using the Workday node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "Workday REST API base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "description": "Workday tenant identifier"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "placeholder": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth 2.0 Bearer token"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "Basic auth username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "Basic auth password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "example": "workers",
              "placeholder": "workers",
              "defaultValue": "workers",
              "options": [
                "Workers",
                "Jobs",
                "Organizations",
                "Supervisory Organizations",
                "Positions"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Records to skip",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Workday to get many in a workflow.",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "The node executes get many and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get by id",
          "value": "get_by_id",
          "description": "Get by id using the Workday node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "Workday REST API base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "description": "Workday tenant identifier"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "placeholder": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth 2.0 Bearer token"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "Basic auth username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "Basic auth password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "example": "workers",
              "placeholder": "workers",
              "defaultValue": "workers",
              "options": [
                "Workers",
                "Jobs",
                "Organizations",
                "Supervisory Organizations",
                "Positions"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Records to skip",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Workday to get by id in a workflow.",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "The node executes get by id and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Workday node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "Workday REST API base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "description": "Workday tenant identifier"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "placeholder": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth 2.0 Bearer token"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "Basic auth username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "Basic auth password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "example": "workers",
              "placeholder": "workers",
              "defaultValue": "workers",
              "options": [
                "Workers",
                "Jobs",
                "Organizations",
                "Supervisory Organizations",
                "Positions"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Records to skip",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Workday to create in a workflow.",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Workday node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "Workday REST API base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "description": "Workday tenant identifier"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "placeholder": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth 2.0 Bearer token"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "Basic auth username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "Basic auth password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "example": "workers",
              "placeholder": "workers",
              "defaultValue": "workers",
              "options": [
                "Workers",
                "Jobs",
                "Organizations",
                "Supervisory Organizations",
                "Positions"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Records to skip",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Workday to update in a workflow.",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Workday node."
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
