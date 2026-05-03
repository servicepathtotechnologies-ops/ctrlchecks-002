import type { NodeDoc } from '../types';

export const shopifyDoc: NodeDoc = {
  "slug": "shopify",
  "displayName": "Shopify",
  "category": "Data",
  "logoUrl": "/icons/nodes/shopify.svg",
  "description": "Shopify store operations Use this node when a workflow needs shopify behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Shopify Credential",
  "credentialSetupSteps": [
    "Open the Shopify developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Shopify Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://shopify.dev/docs/api/admin-rest",
  "resources": [
    {
      "name": "Product",
      "description": "Product is a Shopify resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into get.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into create.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into update.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        }
      ]
    },
    {
      "name": "Order",
      "description": "Order is a Shopify resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into get.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into create.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into update.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        }
      ]
    },
    {
      "name": "Customer",
      "description": "Customer is a Shopify resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into get.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into create.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into update.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Shopify node using the configured input fields.",
          "fields": [
            {
              "name": "Shop Domain",
              "internalKey": "shopDomain",
              "type": "string",
              "required": false,
              "description": "Shopify shop domain (e.g., your-store.myshopify.com)",
              "example": "my-store.myshopify.com",
              "placeholder": "my-store.myshopify.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Shopify Admin API access token (optional if stored in vault under key \"shopify\")",
              "example": "shpat_...",
              "placeholder": "shpat_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete). Alias for productId/orderId/customerId.",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Product Id",
              "internalKey": "productId",
              "type": "string",
              "required": false,
              "description": "Product ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Order Id",
              "internalKey": "orderId",
              "type": "string",
              "required": false,
              "description": "Order ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "1234567890",
              "placeholder": "1234567890"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update (resource wrapper is added automatically)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "List limit (for list operation)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Shopify node.\nstructure: Value returned by the Shopify node.\nconvertible: Value returned by the Shopify node.\ndefaultValue: Value returned by the Shopify node.",
          "usageExample": {
            "scenario": "Use Shopify in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Shop Domain": "my-store.myshopify.com",
              "Api Key": "shpat_...",
              "Id": "1234567890",
              "Product Id": "1234567890",
              "Order Id": "1234567890",
              "Customer Id": "1234567890",
              "Data": "[object Object]",
              "Limit": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://shopify.dev/docs/api/admin-rest"
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
