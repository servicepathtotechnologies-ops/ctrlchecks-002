import type { NodeDoc } from '../types';

export const xeroDoc: NodeDoc = {
  "slug": "xero",
  "displayName": "Xero",
  "category": "Utility",
  "logoUrl": "/icons/nodes/xero.svg",
  "description": "Create, fetch, update, and search Xero accounting records (contacts, invoices, items, payments, accounts).",
  "credentialType": "Xero Credential",
  "credentialSetupSteps": [
    "What this is: Xero uses an OAuth connection so CtrlChecks can safely access your Xero account.",
    "Go to developer.xero.com/app/manage and sign in with your Xero account.",
    "Click \"New app\" -> give it a name (e.g. CtrlChecks) -> select \"Web app\" -> fill in company and website URL.",
    "In the \"Redirect URIs\" field, enter: http://localhost:3001/api/oauth/xero/callback -> Create app.",
    "Copy the Client ID and Client Secret from the app configuration page.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Xero -> click \"Connect with Xero\" -> sign in -> allow access.",
    "Run a test step (e.g. list invoices) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Xero node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developer.xero.com/documentation/getting-started-guide",
  "resources": [
    {
      "name": "Operations",
      "description": "Xero exposes operation choices directly.",
      "operations": [
        {
          "name": "Get many",
          "value": "get_many",
          "description": "Get many using the Xero node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Xero.\nWhere to get it: Open the Xero dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "helpText": "What this field is: Your Xero organisation (tenant) ID.\nWhere to find it: After connecting to Xero, the tenant ID is returned in the OAuth response. It is a UUID like 550e8400-e29b-41d4-a716-446655440000.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "helpText": "What this field is: Resource chooses the kind of Xero item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Xero.\nExample: In Xero, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "invoices",
              "example": "invoices",
              "defaultValue": "invoices",
              "options": [
                "Contacts",
                "Invoices",
                "Items",
                "Payments",
                "Accounts"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "helpText": "What this field is: Record ID for get_by_id or update for Xero / Get many.\nWhere to find it: Open the item in Xero and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Xero / Get many.\nHow to fill it: Enter valid JSON in the format Xero expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "helpText": "What this field is: Xero WHERE filter for Xero / Get many.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Xero which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.where}} or pick the value from the data picker.",
              "placeholder": "Enter Where"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "helpText": "What this field is: Sort order for Xero / Get many.\nHow to fill it: Enter the order value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.order}} or pick the value from the data picker.",
              "placeholder": "Enter Order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "helpText": "What this field is: A number used for page in Xero / Get many.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.page}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "helpText": "What this field is: ISO date — only records modified after for Xero / Get many.\nHow to fill it: Enter the modified after value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.modifiedAfter}} or pick the value from the data picker.",
              "placeholder": "Enter Modified After"
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
            "scenario": "Process incoming Xero data with get many after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Xero returns structured get many data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get by id",
          "value": "get_by_id",
          "description": "Get by id using the Xero node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Xero.\nWhere to get it: Open the Xero dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "helpText": "What this field is: Your Xero organisation (tenant) ID.\nWhere to find it: After connecting to Xero, the tenant ID is returned in the OAuth response. It is a UUID like 550e8400-e29b-41d4-a716-446655440000.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "helpText": "What this field is: Resource chooses the kind of Xero item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Xero.\nExample: In Xero, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "invoices",
              "example": "invoices",
              "defaultValue": "invoices",
              "options": [
                "Contacts",
                "Invoices",
                "Items",
                "Payments",
                "Accounts"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "helpText": "What this field is: Record ID for get_by_id or update for Xero / Get by id.\nWhere to find it: Open the item in Xero and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Xero / Get by id.\nHow to fill it: Enter valid JSON in the format Xero expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "helpText": "What this field is: Xero WHERE filter for Xero / Get by id.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Xero which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.where}} or pick the value from the data picker.",
              "placeholder": "Enter Where"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "helpText": "What this field is: Sort order for Xero / Get by id.\nHow to fill it: Enter the order value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.order}} or pick the value from the data picker.",
              "placeholder": "Enter Order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "helpText": "What this field is: A number used for page in Xero / Get by id.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.page}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "helpText": "What this field is: ISO date — only records modified after for Xero / Get by id.\nHow to fill it: Enter the modified after value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.modifiedAfter}} or pick the value from the data picker.",
              "placeholder": "Enter Modified After"
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
            "scenario": "Process incoming Xero data with get by id after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Xero returns structured get by id data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Xero node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Xero.\nWhere to get it: Open the Xero dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "helpText": "What this field is: Your Xero organisation (tenant) ID.\nWhere to find it: After connecting to Xero, the tenant ID is returned in the OAuth response. It is a UUID like 550e8400-e29b-41d4-a716-446655440000.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "helpText": "What this field is: Resource chooses the kind of Xero item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Xero.\nExample: In Xero, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "invoices",
              "example": "invoices",
              "defaultValue": "invoices",
              "options": [
                "Contacts",
                "Invoices",
                "Items",
                "Payments",
                "Accounts"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "helpText": "What this field is: Record ID for get_by_id or update for Xero / Create.\nWhere to find it: Open the item in Xero and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Xero / Create.\nHow to fill it: Enter valid JSON in the format Xero expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "helpText": "What this field is: Xero WHERE filter for Xero / Create.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Xero which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.where}} or pick the value from the data picker.",
              "placeholder": "Enter Where"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "helpText": "What this field is: Sort order for Xero / Create.\nHow to fill it: Enter the order value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.order}} or pick the value from the data picker.",
              "placeholder": "Enter Order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "helpText": "What this field is: A number used for page in Xero / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.page}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "helpText": "What this field is: ISO date — only records modified after for Xero / Create.\nHow to fill it: Enter the modified after value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.modifiedAfter}} or pick the value from the data picker.",
              "placeholder": "Enter Modified After"
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
            "scenario": "Process incoming Xero data with create after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Xero returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Xero node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Xero.\nWhere to get it: Open the Xero dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "helpText": "What this field is: Your Xero organisation (tenant) ID.\nWhere to find it: After connecting to Xero, the tenant ID is returned in the OAuth response. It is a UUID like 550e8400-e29b-41d4-a716-446655440000.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "helpText": "What this field is: Resource chooses the kind of Xero item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Xero.\nExample: In Xero, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "invoices",
              "example": "invoices",
              "defaultValue": "invoices",
              "options": [
                "Contacts",
                "Invoices",
                "Items",
                "Payments",
                "Accounts"
              ]
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "helpText": "What this field is: Record ID for get_by_id or update for Xero / Update.\nWhere to find it: Open the item in Xero and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "helpText": "What this field is: Request body for create/update for Xero / Update.\nHow to fill it: Enter valid JSON in the format Xero expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "helpText": "What this field is: Xero WHERE filter for Xero / Update.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Xero which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.where}} or pick the value from the data picker.",
              "placeholder": "Enter Where"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "helpText": "What this field is: Sort order for Xero / Update.\nHow to fill it: Enter the order value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.order}} or pick the value from the data picker.",
              "placeholder": "Enter Order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "helpText": "What this field is: A number used for page in Xero / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.page}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "helpText": "What this field is: ISO date — only records modified after for Xero / Update.\nHow to fill it: Enter the modified after value requested by Xero, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.modifiedAfter}} or pick the value from the data picker.",
              "placeholder": "Enter Modified After"
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
            "scenario": "Process incoming Xero data with update after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Xero returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Xero node."
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
