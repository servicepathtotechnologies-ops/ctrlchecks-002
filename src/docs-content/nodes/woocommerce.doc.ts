import type { NodeDoc } from '../types';

export const woocommerceDoc: NodeDoc = {
  "slug": "woocommerce",
  "displayName": "WooCommerce",
  "category": "Data",
  "logoUrl": "/icons/nodes/woocommerce.svg",
  "description": "WooCommerce store operations Use this node when a workflow needs woocommerce behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Woocommerce Credential, Woocommerce Credential",
  "credentialSetupSteps": [
    "Open the WooCommerce developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Woocommerce Credential, Woocommerce Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
  "resources": [
    {
      "name": "Product",
      "description": "Product is a WooCommerce resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        }
      ]
    },
    {
      "name": "Order",
      "description": "Order is a WooCommerce resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        }
      ]
    },
    {
      "name": "Customer",
      "description": "Customer is a WooCommerce resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the WooCommerce node using the configured input fields.",
          "fields": [
            {
              "name": "Store Url",
              "internalKey": "storeUrl",
              "type": "url",
              "required": false,
              "description": "WooCommerce store base URL (e.g., https://example.com)",
              "example": "https://example.com",
              "placeholder": "https://example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer key (optional if stored in vault under key \"woocommerce\")",
              "example": "ck_...",
              "placeholder": "ck_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Secret",
              "internalKey": "apiSecret",
              "type": "password",
              "required": false,
              "description": "WooCommerce consumer secret (optional if stored in vault under key \"woocommerce\")",
              "example": "cs_...",
              "placeholder": "cs_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (for get/update/delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "List page size",
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
          "outputDescription": "type: Value returned by the WooCommerce node.\nstructure: Value returned by the WooCommerce node.\nconvertible: Value returned by the WooCommerce node.\ndefaultValue: Value returned by the WooCommerce node.",
          "usageExample": {
            "scenario": "Use WooCommerce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Store Url": "https://example.com",
              "Api Key": "ck_...",
              "Api Secret": "cs_...",
              "Id": "123",
              "Data": "{\"key\":\"value\"}",
              "Per Page": "50"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
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
