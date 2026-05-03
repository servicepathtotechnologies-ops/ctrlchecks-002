import type { NodeDoc } from '../types';

export const sapDoc: NodeDoc = {
  "slug": "sap",
  "displayName": "SAP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sap.svg",
  "description": "Interact with SAP systems via OData/REST APIs — read and write business objects such as sales orders, purchase orders, materials, customers, and more. Use this node when a workflow needs sap behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Sap Token, Sap Credential, Sap Credential, Sap Token",
  "credentialSetupSteps": [
    "Open the SAP developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Sap Token, Sap Credential, Sap Credential, Sap Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "SAP exposes operation choices directly.",
      "operations": [
        {
          "name": "GET (Read)",
          "value": "get",
          "description": "GET (Read) with the SAP node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "password",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "example": "{{ $json.csrfToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "example": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "count": 1,
            "statusCode": 1
          },
          "outputDescription": "success: Value returned by the SAP node.\ndata: SAP API response data (d.results for OData v2)\ncount: Number of records returned (for GET list operations)\nstatusCode: HTTP status code from SAP",
          "usageExample": {
            "scenario": "Use SAP in a workflow and pass upstream data into get (read).",
            "inputValues": {
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Base Url": "https://sap.example.com:44300",
              "Payload": "[object Object]",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Csrf Token": "{{ $json.csrfToken }}",
              "Format": "json"
            },
            "expectedOutput": "The node runs get (read) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "POST (Create)",
          "value": "post",
          "description": "POST (Create) with the SAP node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "password",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "example": "{{ $json.csrfToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "example": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "count": 1,
            "statusCode": 1
          },
          "outputDescription": "success: Value returned by the SAP node.\ndata: SAP API response data (d.results for OData v2)\ncount: Number of records returned (for GET list operations)\nstatusCode: HTTP status code from SAP",
          "usageExample": {
            "scenario": "Use SAP in a workflow and pass upstream data into post (create).",
            "inputValues": {
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Base Url": "https://sap.example.com:44300",
              "Payload": "[object Object]",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Csrf Token": "{{ $json.csrfToken }}",
              "Format": "json"
            },
            "expectedOutput": "The node runs post (create) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "PUT (Replace)",
          "value": "put",
          "description": "PUT (Replace) with the SAP node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "password",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "example": "{{ $json.csrfToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "example": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "count": 1,
            "statusCode": 1
          },
          "outputDescription": "success: Value returned by the SAP node.\ndata: SAP API response data (d.results for OData v2)\ncount: Number of records returned (for GET list operations)\nstatusCode: HTTP status code from SAP",
          "usageExample": {
            "scenario": "Use SAP in a workflow and pass upstream data into put (replace).",
            "inputValues": {
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Base Url": "https://sap.example.com:44300",
              "Payload": "[object Object]",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Csrf Token": "{{ $json.csrfToken }}",
              "Format": "json"
            },
            "expectedOutput": "The node runs put (replace) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "PATCH (Update)",
          "value": "patch",
          "description": "PATCH (Update) with the SAP node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "password",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "example": "{{ $json.csrfToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "example": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "count": 1,
            "statusCode": 1
          },
          "outputDescription": "success: Value returned by the SAP node.\ndata: SAP API response data (d.results for OData v2)\ncount: Number of records returned (for GET list operations)\nstatusCode: HTTP status code from SAP",
          "usageExample": {
            "scenario": "Use SAP in a workflow and pass upstream data into patch (update).",
            "inputValues": {
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Base Url": "https://sap.example.com:44300",
              "Payload": "[object Object]",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Csrf Token": "{{ $json.csrfToken }}",
              "Format": "json"
            },
            "expectedOutput": "The node runs patch (update) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "DELETE (Remove)",
          "value": "delete",
          "description": "DELETE (Remove) with the SAP node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "password",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "example": "{{ $json.csrfToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "example": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "count": 1,
            "statusCode": 1
          },
          "outputDescription": "success: Value returned by the SAP node.\ndata: SAP API response data (d.results for OData v2)\ncount: Number of records returned (for GET list operations)\nstatusCode: HTTP status code from SAP",
          "usageExample": {
            "scenario": "Use SAP in a workflow and pass upstream data into delete (remove).",
            "inputValues": {
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Base Url": "https://sap.example.com:44300",
              "Payload": "[object Object]",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": "{{ $json.accessToken }}",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Csrf Token": "{{ $json.csrfToken }}",
              "Format": "json"
            },
            "expectedOutput": "The node runs delete (remove) and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
