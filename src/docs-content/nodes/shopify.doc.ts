import type { NodeDoc } from '../types';

export const shopifyDoc: NodeDoc = {
  "slug": "shopify",
  "displayName": "Shopify",
  "category": "Data",
  "logoUrl": "/icons/nodes/shopify.svg",
  "description": "Shopify store operations",
  "credentialType": "Shopify API Key",
  "credentialSetupSteps": [
    "What this is: Shopify uses an API key or account connection so CtrlChecks can safely access your Shopify account.",
    "In your Shopify admin (yourstore.myshopify.com/admin), go to Settings -> Apps and sales channels.",
    "Click \"Develop apps\" -> Allow custom app development (if prompted) -> Create an app. Give it a name like CtrlChecks.",
    "Click the app name -> go to \"Configuration\" tab -> Admin API integration -> click Edit -> select the access scopes you need (e.g. read_orders, write_orders, read_products, write_products).",
    "Go to \"API credentials\" tab -> click \"Install app\" -> Install. Copy the \"Admin API access token\" shown - it starts with shpat_ and is only shown once.",
    "Note your shop domain - it is the part before .myshopify.com (e.g. if URL is mystore.myshopify.com, domain is mystore).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Shopify -> enter shop domain and access token -> Save.",
    "Run a test step (e.g. list products) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Shopify node and select the saved connection."
  ],
  "credentialDocsUrl": "https://shopify.dev/docs/apps/auth/admin-app-access-tokens",
  "resources": [
    {
      "name": "Operations",
      "description": "Shopify exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Shopify node.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "helpText": "What this field is: Your Shopify store's subdomain — just the part before .myshopify.com.\nExample: If your store is at mystore.myshopify.com, enter: mystore\nDo NOT include https:// or .myshopify.com — just the store name.",
              "placeholder": "my-store.myshopify.com",
              "example": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Shopify.\nWhere to get it: Open the Shopify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "shpat_...",
              "example": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of Shopify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Shopify.\nExample: In Shopify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "helpText": "What this field is: Resource ID (for get/update/delete). Alias for productId/orderId/customerId. for Shopify / Get.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "helpText": "What this field is: Product ID for Shopify / Get.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.productId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "helpText": "What this field is: The Shopify order number.\nWhere to find it: Shopify Admin → Orders — the # column shows order IDs.\nExample: 1234 or gid://shopify/Order/1234",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Shopify / Get.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "helpText": "What this field is: Payload for create/update (resource wrapper is added automatically) for Shopify / Get.\nHow to fill it: Enter valid JSON in the format Shopify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"New product\"}",
              "example": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "helpText": "What this field is: A number used for limit in Shopify / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
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
            "scenario": "Process incoming Shopify data with get after a related upstream event is received",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "Shopify returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Shopify node.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "helpText": "What this field is: Your Shopify store's subdomain — just the part before .myshopify.com.\nExample: If your store is at mystore.myshopify.com, enter: mystore\nDo NOT include https:// or .myshopify.com — just the store name.",
              "placeholder": "my-store.myshopify.com",
              "example": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Shopify.\nWhere to get it: Open the Shopify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "shpat_...",
              "example": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of Shopify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Shopify.\nExample: In Shopify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "helpText": "What this field is: Resource ID (for get/update/delete). Alias for productId/orderId/customerId. for Shopify / Create.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "helpText": "What this field is: Product ID for Shopify / Create.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.productId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "helpText": "What this field is: Order ID for Shopify / Create.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.orderId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Shopify / Create.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "helpText": "What this field is: Payload for create/update (resource wrapper is added automatically) for Shopify / Create.\nHow to fill it: Enter valid JSON in the format Shopify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"New product\"}",
              "example": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "helpText": "What this field is: A number used for limit in Shopify / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
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
            "scenario": "Process incoming Shopify data with create after a related upstream event is received",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "Shopify returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Shopify node.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "helpText": "What this field is: Your Shopify store's subdomain — just the part before .myshopify.com.\nExample: If your store is at mystore.myshopify.com, enter: mystore\nDo NOT include https:// or .myshopify.com — just the store name.",
              "placeholder": "my-store.myshopify.com",
              "example": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Shopify.\nWhere to get it: Open the Shopify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "shpat_...",
              "example": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of Shopify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Shopify.\nExample: In Shopify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "helpText": "What this field is: Resource ID (for get/update/delete). Alias for productId/orderId/customerId. for Shopify / Update.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "helpText": "What this field is: Product ID for Shopify / Update.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.productId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "helpText": "What this field is: Order ID for Shopify / Update.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.orderId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Shopify / Update.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "helpText": "What this field is: Payload for create/update (resource wrapper is added automatically) for Shopify / Update.\nHow to fill it: Enter valid JSON in the format Shopify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"New product\"}",
              "example": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "helpText": "What this field is: A number used for limit in Shopify / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
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
            "scenario": "Process incoming Shopify data with update after a related upstream event is received",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "Shopify returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Shopify node.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "helpText": "What this field is: Your Shopify store's subdomain — just the part before .myshopify.com.\nExample: If your store is at mystore.myshopify.com, enter: mystore\nDo NOT include https:// or .myshopify.com — just the store name.",
              "placeholder": "my-store.myshopify.com",
              "example": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Shopify.\nWhere to get it: Open the Shopify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "shpat_...",
              "example": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "helpText": "What this field is: Resource chooses the kind of Shopify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Shopify.\nExample: In Shopify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "product",
              "example": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "helpText": "What this field is: Resource ID (for get/update/delete). Alias for productId/orderId/customerId. for Shopify / Delete.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "helpText": "What this field is: Product ID for Shopify / Delete.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.productId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "helpText": "What this field is: Order ID for Shopify / Delete.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.orderId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Shopify / Delete.\nWhere to find it: Open the item in Shopify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "1234567890",
              "example": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "helpText": "What this field is: Payload for create/update (resource wrapper is added automatically) for Shopify / Delete.\nHow to fill it: Enter valid JSON in the format Shopify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"New product\"}",
              "example": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "helpText": "What this field is: A number used for limit in Shopify / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
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
            "scenario": "Process incoming Shopify data with delete after a related upstream event is received",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "Shopify returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Shopify node."
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
