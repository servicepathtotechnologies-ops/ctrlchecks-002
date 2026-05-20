import type { NodeDoc } from '../types';

export const shopifyDoc: NodeDoc = {
  "slug": "shopify",
  "displayName": "Shopify",
  "category": "Data",
  "logoUrl": "/icons/nodes/shopify.svg",
  "description": "Shopify store operations",
  "credentialType": "Shopify API Key",
  "credentialSetupSteps": [
    "In your Shopify admin, go to Settings → Apps and sales channels → Develop apps.",
    "Click \"Create an app\", give it a name, and click \"Create app\".",
    "Under \"Configuration\", set the Admin API access scopes you need.",
    "Under \"API credentials\", click \"Install app\", then copy the Admin API access token.",
    "In CtrlChecks, open Connections → Add Connection → Shopify → enter your store domain and access token → Save."
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
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "example": "product",
              "placeholder": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "{\"title\":\"New product\"}",
              "placeholder": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "List limit (for list operation)",
              "example": "50",
              "placeholder": "50",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Shopify to get in a workflow.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
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
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "example": "product",
              "placeholder": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "{\"title\":\"New product\"}",
              "placeholder": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "List limit (for list operation)",
              "example": "50",
              "placeholder": "50",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Shopify to create in a workflow.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "example": "product",
              "placeholder": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "{\"title\":\"New product\"}",
              "placeholder": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "List limit (for list operation)",
              "example": "50",
              "placeholder": "50",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Shopify to update in a workflow.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: product, order, customer",
              "example": "product",
              "placeholder": "product",
              "defaultValue": "product"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "{\"title\":\"New product\"}",
              "placeholder": "{\"title\":\"New product\"}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "List limit (for list operation)",
              "example": "50",
              "placeholder": "50",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Shopify to delete in a workflow.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Resource": "product",
              "Id": "1234567890",
              "Product Id": "1234567890"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
