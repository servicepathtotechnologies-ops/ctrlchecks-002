import type { NodeDoc } from '../types';

export const woocommerceDoc: NodeDoc = {
  "slug": "woocommerce",
  "displayName": "WooCommerce",
  "category": "Data",
  "logoUrl": "/icons/nodes/woocommerce.svg",
  "description": "WooCommerce store operations",
  "credentialType": "WooCommerce API Key",
  "credentialSetupSteps": [
    "In your WordPress admin, go to WooCommerce → Settings → Advanced → REST API.",
    "Click \"Add Key\", set permissions to \"Read/Write\", and click \"Generate API Key\".",
    "Copy the Consumer Key and Consumer Secret.",
    "In CtrlChecks, open Connections → Add Connection → WooCommerce → enter your store URL, Consumer Key, and Consumer Secret → Save."
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
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
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
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "description": "List page size",
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
            "scenario": "Use WooCommerce to get in a workflow.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
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
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
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
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "description": "List page size",
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
            "scenario": "Use WooCommerce to create in a workflow.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
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
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "description": "List page size",
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
            "scenario": "Use WooCommerce to update in a workflow.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
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
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "description": "List page size",
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
            "scenario": "Use WooCommerce to delete in a workflow.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Resource": "product",
              "Id": "123"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
