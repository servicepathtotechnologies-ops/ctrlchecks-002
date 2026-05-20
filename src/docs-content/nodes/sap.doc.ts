import type { NodeDoc } from '../types';

export const sapDoc: NodeDoc = {
  "slug": "sap",
  "displayName": "SAP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sap.svg",
  "description": "Interact with SAP systems via OData/REST APIs — read and write business objects such as sales orders, purchase orders, materials, customers, and more.",
  "credentialType": "SAP Credential",
  "credentialSetupSteps": [
    "In your SAP system, create a Communication User with the required roles.",
    "In SAP Communication Arrangements, set up the API (OData or REST) with Basic Auth.",
    "Note the base URL, username, and password (or client certificate).",
    "In CtrlChecks, open Connections → Add Connection → SAP → enter Base URL, Username, and Password → Save."
  ],
  "credentialDocsUrl": "https://help.sap.com/docs/",
  "resources": [
    {
      "name": "Operations",
      "description": "SAP exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the SAP node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
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
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "SAP Basic Auth username (used when no OAuth token is provided)"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Response format preference",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
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
            "scenario": "Use SAP to get in a workflow.",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Post",
          "value": "post",
          "description": "Post using the SAP node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
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
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "SAP Basic Auth username (used when no OAuth token is provided)"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Response format preference",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
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
            "scenario": "Use SAP to post in a workflow.",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "The node executes post and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Put",
          "value": "put",
          "description": "Put using the SAP node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
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
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "SAP Basic Auth username (used when no OAuth token is provided)"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Response format preference",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
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
            "scenario": "Use SAP to put in a workflow.",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "The node executes put and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Patch",
          "value": "patch",
          "description": "Patch using the SAP node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
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
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "SAP Basic Auth username (used when no OAuth token is provided)"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Response format preference",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
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
            "scenario": "Use SAP to patch in a workflow.",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "The node executes patch and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the SAP node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "example": "https://sap.example.com:44300",
              "placeholder": "https://sap.example.com:44300"
            },
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
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for POST/PUT/PATCH operations",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "example": "$top=10&$select=SalesOrder,SoldToParty",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "description": "SAP Basic Auth username (used when no OAuth token is provided)"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Response format preference",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json",
              "options": [
                "JSON",
                "XML"
              ]
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
            "scenario": "Use SAP to delete in a workflow.",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the SAP node."
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
