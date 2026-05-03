import type { NodeDoc } from '../types';

export const workdayDoc: NodeDoc = {
  "slug": "workday",
  "displayName": "Workday",
  "category": "Utility",
  "logoUrl": "/icons/nodes/workday.svg",
  "description": "Read and manage Workday HR, staffing, and organizational data through the Workday REST APIs. Use this node when a workflow needs workday behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Access Token Credential",
  "credentialSetupSteps": [
    "Open the Workday developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Access Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html",
  "resources": [
    {
      "name": "Workers",
      "description": "Workers is a Workday resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        }
      ]
    },
    {
      "name": "Jobs",
      "description": "Jobs is a Workday resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        }
      ]
    },
    {
      "name": "Organizations",
      "description": "Organizations is a Workday resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        }
      ]
    },
    {
      "name": "Supervisory Organizations",
      "description": "Supervisory Organizations is a Workday resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        }
      ]
    },
    {
      "name": "Positions",
      "description": "Positions is a Workday resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Workday node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Workday REST API base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "example": "{{ $json.tenant }}",
              "defaultValue": ""
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "example": "oauth2",
              "defaultValue": "oauth2",
              "options": [
                "OAuth 2.0",
                "Basic Auth"
              ]
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "workday"
          },
          "outputDescription": "success: Indicates that the Workday node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Workday in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://api.example.com/resource",
              "Tenant": "{{ $json.tenant }}",
              "Auth Type": "oauth2",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Limit": "50",
              "Offset": "0"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://community.workday.com/sites/default/files/file-hosting/restapi/index.html"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
