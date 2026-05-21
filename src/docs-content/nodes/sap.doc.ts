import type { NodeDoc } from '../types';

export const sapDoc: NodeDoc = {
  "slug": "sap",
  "displayName": "SAP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sap.svg",
  "description": "Interact with SAP systems via OData/REST APIs — read and write business objects such as sales orders, purchase orders, materials, customers, and more.",
  "credentialType": "SAP Credential",
  "credentialSetupSteps": [
    "What this is: SAP uses an OAuth connection so CtrlChecks can safely access your SAP account.",
    "In your SAP system, ask your SAP administrator to create a Communication User with the required roles for the APIs you need.",
    "In SAP Communication Management, set up a Communication Arrangement for the API (OData or REST endpoint) with Basic Authentication.",
    "Note the base URL for your SAP system (e.g. https://yoursystem.sap.com), the username, and password.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> SAP -> enter Base URL, Username, and Password -> Test Connection -> Save.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
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
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "helpText": "What this field is: SAP system base URL (e.g. https://your-sap-host:44300) for SAP / Get.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://sap.example.com:44300",
              "example": "https://sap.example.com:44300"
            },
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "helpText": "What this field is: OData or REST endpoint path (relative to base URL) for SAP / Get.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "helpText": "What this field is: Request body for POST/PUT/PATCH operations for SAP / Get.\nHow to fill it: Enter valid JSON in the format SAP expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "helpText": "What this field is: OData query string parameters (e.g. $top=10&$filter=...) for SAP / Get.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SAP which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.queryParams}} or pick the value from the data picker.",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty",
              "example": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth username (used when no OAuth token is provided) for SAP / Get.\nHow to fill it: Enter the username value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth password (used when no OAuth token is provided) for SAP / Get.\nHow to fill it: Enter the password value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "helpText": "What this field is: A list of allowed choices for format in SAP / Get.\nHow to fill it: Pick the option that matches what SAP should do. Do not type a custom value unless the UI allows it.\nAvailable choices: JSON (json), XML (xml).",
              "placeholder": "json",
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
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming SAP data with get after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "SAP returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "helpText": "What this field is: SAP system base URL (e.g. https://your-sap-host:44300) for SAP / Post.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://sap.example.com:44300",
              "example": "https://sap.example.com:44300"
            },
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "helpText": "What this field is: OData or REST endpoint path (relative to base URL) for SAP / Post.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "helpText": "What this field is: Request body for POST/PUT/PATCH operations for SAP / Post.\nHow to fill it: Enter valid JSON in the format SAP expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "helpText": "What this field is: OData query string parameters (e.g. $top=10&$filter=...) for SAP / Post.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SAP which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.queryParams}} or pick the value from the data picker.",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty",
              "example": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth username (used when no OAuth token is provided) for SAP / Post.\nHow to fill it: Enter the username value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth password (used when no OAuth token is provided) for SAP / Post.\nHow to fill it: Enter the password value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "helpText": "What this field is: A list of allowed choices for format in SAP / Post.\nHow to fill it: Pick the option that matches what SAP should do. Do not type a custom value unless the UI allows it.\nAvailable choices: JSON (json), XML (xml).",
              "placeholder": "json",
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
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming SAP data with post after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "SAP returns structured post data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "helpText": "What this field is: SAP system base URL (e.g. https://your-sap-host:44300) for SAP / Put.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://sap.example.com:44300",
              "example": "https://sap.example.com:44300"
            },
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "helpText": "What this field is: OData or REST endpoint path (relative to base URL) for SAP / Put.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "helpText": "What this field is: Request body for POST/PUT/PATCH operations for SAP / Put.\nHow to fill it: Enter valid JSON in the format SAP expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "helpText": "What this field is: OData query string parameters (e.g. $top=10&$filter=...) for SAP / Put.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SAP which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.queryParams}} or pick the value from the data picker.",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty",
              "example": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth username (used when no OAuth token is provided) for SAP / Put.\nHow to fill it: Enter the username value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth password (used when no OAuth token is provided) for SAP / Put.\nHow to fill it: Enter the password value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "helpText": "What this field is: A list of allowed choices for format in SAP / Put.\nHow to fill it: Pick the option that matches what SAP should do. Do not type a custom value unless the UI allows it.\nAvailable choices: JSON (json), XML (xml).",
              "placeholder": "json",
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
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming SAP data with put after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "SAP returns structured put data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "helpText": "What this field is: SAP system base URL (e.g. https://your-sap-host:44300) for SAP / Patch.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://sap.example.com:44300",
              "example": "https://sap.example.com:44300"
            },
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "helpText": "What this field is: OData or REST endpoint path (relative to base URL) for SAP / Patch.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "helpText": "What this field is: Request body for POST/PUT/PATCH operations for SAP / Patch.\nHow to fill it: Enter valid JSON in the format SAP expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "helpText": "What this field is: OData query string parameters (e.g. $top=10&$filter=...) for SAP / Patch.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SAP which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.queryParams}} or pick the value from the data picker.",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty",
              "example": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth username (used when no OAuth token is provided) for SAP / Patch.\nHow to fill it: Enter the username value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth password (used when no OAuth token is provided) for SAP / Patch.\nHow to fill it: Enter the password value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "helpText": "What this field is: A list of allowed choices for format in SAP / Patch.\nHow to fill it: Pick the option that matches what SAP should do. Do not type a custom value unless the UI allows it.\nAvailable choices: JSON (json), XML (xml).",
              "placeholder": "json",
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
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming SAP data with patch after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "SAP returns structured patch data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "SAP system base URL (e.g. https://your-sap-host:44300)",
              "helpText": "What this field is: SAP system base URL (e.g. https://your-sap-host:44300) for SAP / Delete.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://sap.example.com:44300",
              "example": "https://sap.example.com:44300"
            },
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "OData or REST endpoint path (relative to base URL)",
              "helpText": "What this field is: OData or REST endpoint path (relative to base URL) for SAP / Delete.\nHow to fill it: Paste the full web address SAP should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "example": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for POST/PUT/PATCH operations",
              "helpText": "What this field is: Request body for POST/PUT/PATCH operations for SAP / Delete.\nHow to fill it: Enter valid JSON in the format SAP expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "example": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}"
            },
            {
              "name": "Query Params",
              "internalKey": "queryParams",
              "type": "string",
              "required": false,
              "description": "OData query string parameters (e.g. $top=10&$filter=...)",
              "helpText": "What this field is: OData query string parameters (e.g. $top=10&$filter=...) for SAP / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells SAP which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.queryParams}} or pick the value from the data picker.",
              "placeholder": "$top=10&$select=SalesOrder,SoldToParty",
              "example": "$top=10&$select=SalesOrder,SoldToParty"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 / SAML bearer token for SAP authentication (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "SAP Basic Auth username (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth username (used when no OAuth token is provided) for SAP / Delete.\nHow to fill it: Enter the username value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SAP Basic Auth password (used when no OAuth token is provided)",
              "helpText": "What this field is: SAP Basic Auth password (used when no OAuth token is provided) for SAP / Delete.\nHow to fill it: Enter the password value requested by SAP, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Csrf Token",
              "internalKey": "csrfToken",
              "type": "string",
              "required": false,
              "description": "X-CSRF-Token value (required for POST/PUT/PATCH/DELETE on OData v2 services)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access SAP.\nWhere to get it: Open the SAP dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Response format preference",
              "helpText": "What this field is: A list of allowed choices for format in SAP / Delete.\nHow to fill it: Pick the option that matches what SAP should do. Do not type a custom value unless the UI allows it.\nAvailable choices: JSON (json), XML (xml).",
              "placeholder": "json",
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
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming SAP data with delete after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://sap.example.com:44300",
              "Endpoint": "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder",
              "Payload": "{\"SalesOrderType\":\"OR\",\"SoldToParty\":\"{{$json.customerId}}\"}",
              "Query Params": "$top=10&$select=SalesOrder,SoldToParty",
              "Access Token": ""
            },
            "expectedOutput": "SAP returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
