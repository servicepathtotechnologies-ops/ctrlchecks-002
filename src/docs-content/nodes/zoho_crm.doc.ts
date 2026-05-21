import type { NodeDoc } from '../types';

export const zohoCrmDoc: NodeDoc = {
  "slug": "zoho_crm",
  "displayName": "Zoho CRM",
  "category": "Data",
  "logoUrl": "/icons/nodes/zoho_crm.svg",
  "description": "Zoho CRM operations - work with modules, records, and related lists",
  "credentialType": "Zoho Credential",
  "credentialSetupSteps": [
    "What this is: Zoho uses an OAuth connection so CtrlChecks can safely access your Zoho account.",
    "Go to api-console.zoho.com and sign in with your Zoho account.",
    "Click \"+ Add Client\" -> select \"Server-based Applications\".",
    "Fill in client name (e.g. CtrlChecks), homepage URL, and set Authorized Redirect URI to: http://localhost:3001/api/oauth/zoho/callback -> Create.",
    "Copy the Client ID and Client Secret shown.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Zoho CRM -> click \"Connect with Zoho\" -> sign in -> allow access.",
    "Run a test step (e.g. list contacts) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Zoho node and select the saved connection."
  ],
  "credentialDocsUrl": "https://www.zoho.com/crm/developer/docs/api/v3/oauth-overview.html",
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
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-oauth-access-token",
              "example": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-refresh-token",
              "example": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "helpText": "What this field is: Resource chooses the kind of Zoho CRM item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Zoho CRM.\nExample: In Zoho CRM, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Leads",
              "example": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "helpText": "What this field is: Record ID (required for get, update, delete) for Zoho CRM / Get.\nWhere to find it: Open the item in Zoho CRM and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "helpText": "What this field is: Search criteria (optional, used for search operation) for Zoho CRM / Get.\nHow to fill it: Enter the criteria value requested by Zoho CRM, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.criteria}} or pick the value from the data picker.",
              "placeholder": "(Email:equals:test@example.com)",
              "example": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Record data for create/update",
              "helpText": "What this field is: Record data for create/update for Zoho CRM / Get.\nHow to fill it: Enter valid JSON in the format Zoho CRM expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Zoho CRM data with get after a related upstream event is received",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "Zoho CRM returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-oauth-access-token",
              "example": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-refresh-token",
              "example": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "helpText": "What this field is: Resource chooses the kind of Zoho CRM item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Zoho CRM.\nExample: In Zoho CRM, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Leads",
              "example": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "helpText": "What this field is: Record ID (required for get, update, delete) for Zoho CRM / Create.\nWhere to find it: Open the item in Zoho CRM and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "helpText": "What this field is: Search criteria (optional, used for search operation) for Zoho CRM / Create.\nHow to fill it: Enter the criteria value requested by Zoho CRM, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.criteria}} or pick the value from the data picker.",
              "placeholder": "(Email:equals:test@example.com)",
              "example": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Record data for create/update",
              "helpText": "What this field is: The record data as a JSON object using Zoho CRM field names.\nContact example: {\"First_Name\":\"Alice\",\"Last_Name\":\"Kumar\",\"Email\":\"alice@example.com\",\"Phone\":\"+14155552671\",\"Lead_Source\":\"Web Site\"}\nLead example: {\"First_Name\":\"Bob\",\"Last_Name\":\"Smith\",\"Company\":\"Acme Corp\",\"Email\":\"bob@acme.com\",\"Lead_Status\":\"New\"}",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Zoho CRM data with create after a related upstream event is received",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "Zoho CRM returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-oauth-access-token",
              "example": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-refresh-token",
              "example": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "helpText": "What this field is: Resource chooses the kind of Zoho CRM item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Zoho CRM.\nExample: In Zoho CRM, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Leads",
              "example": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "helpText": "What this field is: Record ID (required for get, update, delete) for Zoho CRM / Update.\nWhere to find it: Open the item in Zoho CRM and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "helpText": "What this field is: Search criteria (optional, used for search operation) for Zoho CRM / Update.\nHow to fill it: Enter the criteria value requested by Zoho CRM, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.criteria}} or pick the value from the data picker.",
              "placeholder": "(Email:equals:test@example.com)",
              "example": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Record data for create/update",
              "helpText": "What this field is: Record data for create/update for Zoho CRM / Update.\nHow to fill it: Enter valid JSON in the format Zoho CRM expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Zoho CRM data with update after a related upstream event is received",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "Zoho CRM returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-oauth-access-token",
              "example": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-refresh-token",
              "example": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "helpText": "What this field is: Resource chooses the kind of Zoho CRM item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Zoho CRM.\nExample: In Zoho CRM, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Leads",
              "example": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "helpText": "What this field is: Record ID (required for get, update, delete) for Zoho CRM / Delete.\nWhere to find it: Open the item in Zoho CRM and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "helpText": "What this field is: Search criteria (optional, used for search operation) for Zoho CRM / Delete.\nHow to fill it: Enter the criteria value requested by Zoho CRM, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.criteria}} or pick the value from the data picker.",
              "placeholder": "(Email:equals:test@example.com)",
              "example": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Record data for create/update",
              "helpText": "What this field is: Record data for create/update for Zoho CRM / Delete.\nHow to fill it: Enter valid JSON in the format Zoho CRM expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Zoho CRM data with delete after a related upstream event is received",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "Zoho CRM returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Zoho CRM OAuth access token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-oauth-access-token",
              "example": "your-zoho-oauth-access-token"
            },
            {
              "name": "Refresh Token",
              "internalKey": "refreshToken",
              "type": "string",
              "required": false,
              "description": "Zoho CRM OAuth refresh token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoho CRM.\nWhere to get it: Open the Zoho CRM dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-zoho-refresh-token",
              "example": "your-zoho-refresh-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Zoho CRM module: Leads, Contacts, Accounts, Deals, etc.",
              "helpText": "What this field is: Resource chooses the kind of Zoho CRM item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Zoho CRM.\nExample: In Zoho CRM, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Leads",
              "example": "Leads",
              "defaultValue": "Contacts"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for get, update, delete)",
              "helpText": "What this field is: Record ID (required for get, update, delete) for Zoho CRM / Search.\nWhere to find it: Open the item in Zoho CRM and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Criteria",
              "internalKey": "criteria",
              "type": "string",
              "required": false,
              "description": "Search criteria (optional, used for search operation)",
              "helpText": "What this field is: Search criteria (optional, used for search operation) for Zoho CRM / Search.\nHow to fill it: Enter the criteria value requested by Zoho CRM, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.criteria}} or pick the value from the data picker.",
              "placeholder": "(Email:equals:test@example.com)",
              "example": "(Email:equals:test@example.com)"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Record data for create/update",
              "helpText": "What this field is: Record data for create/update for Zoho CRM / Search.\nHow to fill it: Enter valid JSON in the format Zoho CRM expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"First_Name\":\"John\",\"Last_Name\":\"Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Zoho CRM data with search after a related upstream event is received",
            "inputValues": {
              "Access Token": "your-zoho-oauth-access-token",
              "Refresh Token": "your-zoho-refresh-token",
              "Resource": "Leads",
              "Record Id": "123456789",
              "Criteria": "(Email:equals:test@example.com)"
            },
            "expectedOutput": "Zoho CRM returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
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
