import type { NodeDoc } from '../types';

export const woocommerceDoc: NodeDoc = {
  "slug": "woocommerce",
  "displayName": "WooCommerce",
  "category": "Data",
  "logoUrl": "/icons/nodes/woocommerce.svg",
  "description": "WooCommerce store operations",
  "credentialType": "WooCommerce API Key",
  "credentialSetupSteps": [
    "What this is: WooCommerce uses an API key or account connection so CtrlChecks can safely access your WooCommerce account.",
    "In your WordPress admin dashboard, go to WooCommerce -> Settings.",
    "Click the \"Advanced\" tab -> REST API -> Add key.",
    "Give it a description (e.g. CtrlChecks), set User to your admin account, and set Permissions to \"Read/Write\".",
    "Click \"Generate API key\". Copy both the Consumer Key (starts with ck_) and Consumer Secret (starts with cs_) - they are only shown once.",
    "Note your WooCommerce store URL (e.g. https://yourstore.com).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> WooCommerce -> enter store URL, Consumer Key, and Consumer Secret -> Save.",
    "Run a test step (e.g. list orders) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the WooCommerce node and select the saved connection."
  ],
  "credentialDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication",
  "resources": [
    {
      "name": "Operations",
      "description": "WooCommerce exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the WooCommerce node.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "helpText": "What this field is: WooCommerce store base URL (e.g., https://example.com) for WooCommerce / Get.\nHow to fill it: Paste the full web address WooCommerce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.storeUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com",
              "example": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ck_...",
              "example": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "cs_...",
              "example": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of WooCommerce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by WooCommerce.\nExample: In WooCommerce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "helpText": "What this field is: Resource ID (for get/update/delete) for WooCommerce / Get.\nWhere to find it: Open the item in WooCommerce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for WooCommerce / Get.\nHow to fill it: Enter valid JSON in the format WooCommerce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
              "helpText": "What this field is: A number used for per page in WooCommerce / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.perPage}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
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
            "scenario": "Process incoming WooCommerce data with get after a related upstream event is received",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "WooCommerce returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the WooCommerce node.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "helpText": "What this field is: WooCommerce store base URL (e.g., https://example.com) for WooCommerce / Create.\nHow to fill it: Paste the full web address WooCommerce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.storeUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com",
              "example": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ck_...",
              "example": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "cs_...",
              "example": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of WooCommerce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by WooCommerce.\nExample: In WooCommerce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "helpText": "What this field is: Resource ID (for get/update/delete) for WooCommerce / Create.\nWhere to find it: Open the item in WooCommerce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for WooCommerce / Create.\nHow to fill it: Enter valid JSON in the format WooCommerce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
              "helpText": "What this field is: A number used for per page in WooCommerce / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.perPage}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
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
            "scenario": "Process incoming WooCommerce data with create after a related upstream event is received",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "WooCommerce returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the WooCommerce node.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "helpText": "What this field is: WooCommerce store base URL (e.g., https://example.com) for WooCommerce / Update.\nHow to fill it: Paste the full web address WooCommerce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.storeUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com",
              "example": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ck_...",
              "example": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "cs_...",
              "example": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of WooCommerce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by WooCommerce.\nExample: In WooCommerce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "helpText": "What this field is: Resource ID (for get/update/delete) for WooCommerce / Update.\nWhere to find it: Open the item in WooCommerce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for WooCommerce / Update.\nHow to fill it: Enter valid JSON in the format WooCommerce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
              "helpText": "What this field is: A number used for per page in WooCommerce / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.perPage}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
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
            "scenario": "Process incoming WooCommerce data with update after a related upstream event is received",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "WooCommerce returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the WooCommerce node.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "helpText": "What this field is: WooCommerce store base URL (e.g., https://example.com) for WooCommerce / Delete.\nHow to fill it: Paste the full web address WooCommerce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.storeUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com",
              "example": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ck_...",
              "example": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access WooCommerce.\nWhere to get it: Open the WooCommerce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "cs_...",
              "example": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of WooCommerce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by WooCommerce.\nExample: In WooCommerce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "helpText": "What this field is: Resource ID (for get/update/delete) for WooCommerce / Delete.\nWhere to find it: Open the item in WooCommerce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for WooCommerce / Delete.\nHow to fill it: Enter valid JSON in the format WooCommerce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
              "helpText": "What this field is: A number used for per page in WooCommerce / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.perPage}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
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
            "scenario": "Process incoming WooCommerce data with delete after a related upstream event is received",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "WooCommerce returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the WooCommerce node."
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
