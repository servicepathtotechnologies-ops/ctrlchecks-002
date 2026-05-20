import type { NodeDoc } from '../types';

export const xeroDoc: NodeDoc = {
  "slug": "xero",
  "displayName": "Xero",
  "category": "Utility",
  "logoUrl": "/icons/nodes/xero.svg",
  "description": "Create, fetch, update, and search Xero accounting records (contacts, invoices, items, payments, accounts).",
  "credentialType": "Xero Credential",
  "credentialSetupSteps": [
    "Go to https://developer.xero.com/app/manage → click \"New app\".",
    "Set redirect URI to http://localhost:3001/api/oauth/xero/callback.",
    "Copy Client ID and Client Secret.",
    "In CtrlChecks, open Connections → Add Connection → Xero → click \"Connect with Xero\" → authorize."
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
              "description": "Xero OAuth 2.0 access token"
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "example": "invoices",
              "placeholder": "invoices",
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
              "description": "Record ID for get_by_id or update",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "description": "Xero WHERE filter"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "description": "Sort order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "description": "Page number",
              "example": "1",
              "placeholder": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "description": "ISO date — only records modified after"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Xero to get many in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes get many and exposes its result for downstream nodes."
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
              "description": "Xero OAuth 2.0 access token"
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "example": "invoices",
              "placeholder": "invoices",
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
              "description": "Record ID for get_by_id or update",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "description": "Xero WHERE filter"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "description": "Sort order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "description": "Page number",
              "example": "1",
              "placeholder": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "description": "ISO date — only records modified after"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Xero to get by id in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes get by id and exposes its result for downstream nodes."
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
              "description": "Xero OAuth 2.0 access token"
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "example": "invoices",
              "placeholder": "invoices",
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
              "description": "Record ID for get_by_id or update",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "description": "Xero WHERE filter"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "description": "Sort order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "description": "Page number",
              "example": "1",
              "placeholder": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "description": "ISO date — only records modified after"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Xero to create in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "description": "Xero OAuth 2.0 access token"
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Xero resource",
              "example": "invoices",
              "placeholder": "invoices",
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
              "description": "Record ID for get_by_id or update",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create/update",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "description": "Xero WHERE filter"
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "description": "Sort order"
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "description": "Page number",
              "example": "1",
              "placeholder": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "description": "ISO date — only records modified after"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Xero to update in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Tenant Id": "abc123",
              "Resource": "invoices",
              "Record Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
