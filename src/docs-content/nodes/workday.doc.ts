import type { NodeDoc } from '../types';

export const workdayDoc: NodeDoc = {
  "slug": "workday",
  "displayName": "Workday",
  "category": "Utility",
  "logoUrl": "/icons/nodes/workday.svg",
  "description": "Read and manage Workday HR, staffing, and organizational data through the Workday REST APIs.",
  "credentialType": "Workday Credential",
  "credentialSetupSteps": [
    "What this is: Workday uses an OAuth connection so CtrlChecks can safely access your Workday account.",
    "Log in to your Workday tenant as an administrator.",
    "Search for \"Register API Client\" in the Workday search bar -> open it.",
    "Fill in the Client Name (e.g. CtrlChecks), set the Redirect URI to: http://localhost:3001/api/oauth/workday/callback",
    "Select the required functional areas (scopes) such as Staffing or Human Resources.",
    "Save the configuration - Workday will show you a Client ID and Client Secret. Copy both.",
    "Note your Workday tenant URL (e.g. https://wd2.myworkday.com/yourcompany).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Workday -> enter Client ID, Secret, Tenant, and Instance URL -> authorize.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Workday node and select the saved connection."
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
              "required": false,
              "description": "Workday REST API base URL",
              "helpText": "What this field is: Workday REST API base URL for Workday / Get many.\nHow to fill it: Paste the full web address Workday should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "helpText": "What this field is: Workday tenant identifier for Workday / Get many.\nHow to fill it: Enter the tenant value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tenant}} or pick the value from the data picker.",
              "placeholder": "Enter Tenant"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "helpText": "What this field is: A list of allowed choices for auth type in Workday / Get many.\nHow to fill it: Pick the option that matches what Workday should do. Do not type a custom value unless the UI allows it.\nAvailable choices: OAuth 2.0 (oauth2), Basic Auth (basic).",
              "placeholder": "oauth2",
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
              "type": "string",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Workday.\nWhere to get it: Open the Workday dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "helpText": "What this field is: Basic auth username for Workday / Get many.\nHow to fill it: Enter the username value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "helpText": "What this field is: Basic auth password for Workday / Get many.\nHow to fill it: Enter the password value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "helpText": "What this field is: Resource chooses the kind of Workday item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Workday.\nExample: In Workday, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "workers",
              "example": "workers",
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
              "required": false,
              "description": "Record ID",
              "helpText": "What this field is: Record ID for Workday / Get many.\nWhere to find it: Open the item in Workday and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Workday / Get many.\nHow to fill it: Enter valid JSON in the format Workday expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "helpText": "What this field is: A number used for limit in Workday / Get many.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "helpText": "What this field is: A number used for offset in Workday / Get many.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_many",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Workday data with get many after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "Workday returns structured get many data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workday REST API base URL",
              "helpText": "What this field is: Workday REST API base URL for Workday / Get by id.\nHow to fill it: Paste the full web address Workday should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "helpText": "What this field is: Workday tenant identifier for Workday / Get by id.\nHow to fill it: Enter the tenant value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tenant}} or pick the value from the data picker.",
              "placeholder": "Enter Tenant"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "helpText": "What this field is: A list of allowed choices for auth type in Workday / Get by id.\nHow to fill it: Pick the option that matches what Workday should do. Do not type a custom value unless the UI allows it.\nAvailable choices: OAuth 2.0 (oauth2), Basic Auth (basic).",
              "placeholder": "oauth2",
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
              "type": "string",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Workday.\nWhere to get it: Open the Workday dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "helpText": "What this field is: Basic auth username for Workday / Get by id.\nHow to fill it: Enter the username value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "helpText": "What this field is: Basic auth password for Workday / Get by id.\nHow to fill it: Enter the password value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "helpText": "What this field is: Resource chooses the kind of Workday item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Workday.\nExample: In Workday, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "workers",
              "example": "workers",
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
              "required": false,
              "description": "Record ID",
              "helpText": "What this field is: Record ID for Workday / Get by id.\nWhere to find it: Open the item in Workday and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Workday / Get by id.\nHow to fill it: Enter valid JSON in the format Workday expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "helpText": "What this field is: A number used for limit in Workday / Get by id.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "helpText": "What this field is: A number used for offset in Workday / Get by id.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_by_id",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Workday data with get by id after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "Workday returns structured get by id data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workday REST API base URL",
              "helpText": "What this field is: Workday REST API base URL for Workday / Create.\nHow to fill it: Paste the full web address Workday should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "helpText": "What this field is: Workday tenant identifier for Workday / Create.\nHow to fill it: Enter the tenant value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tenant}} or pick the value from the data picker.",
              "placeholder": "Enter Tenant"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "helpText": "What this field is: A list of allowed choices for auth type in Workday / Create.\nHow to fill it: Pick the option that matches what Workday should do. Do not type a custom value unless the UI allows it.\nAvailable choices: OAuth 2.0 (oauth2), Basic Auth (basic).",
              "placeholder": "oauth2",
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
              "type": "string",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Workday.\nWhere to get it: Open the Workday dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "helpText": "What this field is: Basic auth username for Workday / Create.\nHow to fill it: Enter the username value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "helpText": "What this field is: Basic auth password for Workday / Create.\nHow to fill it: Enter the password value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "helpText": "What this field is: Resource chooses the kind of Workday item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Workday.\nExample: In Workday, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "workers",
              "example": "workers",
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
              "required": false,
              "description": "Record ID",
              "helpText": "What this field is: Record ID for Workday / Create.\nWhere to find it: Open the item in Workday and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Workday / Create.\nHow to fill it: Enter valid JSON in the format Workday expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "helpText": "What this field is: A number used for limit in Workday / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "helpText": "What this field is: A number used for offset in Workday / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Workday data with create after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "Workday returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workday REST API base URL",
              "helpText": "What this field is: Workday REST API base URL for Workday / Update.\nHow to fill it: Paste the full web address Workday should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Tenant",
              "internalKey": "tenant",
              "type": "string",
              "required": false,
              "description": "Workday tenant identifier",
              "helpText": "What this field is: Workday tenant identifier for Workday / Update.\nHow to fill it: Enter the tenant value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tenant}} or pick the value from the data picker.",
              "placeholder": "Enter Tenant"
            },
            {
              "name": "Auth Type",
              "internalKey": "authType",
              "type": "select",
              "required": false,
              "description": "Auth method: oauth2 or basic",
              "helpText": "What this field is: A list of allowed choices for auth type in Workday / Update.\nHow to fill it: Pick the option that matches what Workday should do. Do not type a custom value unless the UI allows it.\nAvailable choices: OAuth 2.0 (oauth2), Basic Auth (basic).",
              "placeholder": "oauth2",
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
              "type": "string",
              "required": false,
              "description": "OAuth 2.0 Bearer token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Workday.\nWhere to get it: Open the Workday dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Basic auth username",
              "helpText": "What this field is: Basic auth username for Workday / Update.\nHow to fill it: Enter the username value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "Basic auth password",
              "helpText": "What this field is: Basic auth password for Workday / Update.\nHow to fill it: Enter the password value requested by Workday, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Workday resource",
              "helpText": "What this field is: Resource chooses the kind of Workday item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Workday.\nExample: In Workday, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "workers",
              "example": "workers",
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
              "required": false,
              "description": "Record ID",
              "helpText": "What this field is: Record ID for Workday / Update.\nWhere to find it: Open the item in Workday and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Workday / Update.\nHow to fill it: Enter valid JSON in the format Workday expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records",
              "helpText": "What this field is: A number used for limit in Workday / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Records to skip",
              "helpText": "What this field is: A number used for offset in Workday / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "update",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Workday data with update after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://api.example.com",
              "Tenant": "",
              "Auth Type": "oauth2",
              "Access Token": "",
              "Username": ""
            },
            "expectedOutput": "Workday returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
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
