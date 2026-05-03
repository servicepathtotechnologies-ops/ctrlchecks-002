import type { NodeDoc } from '../types';

export const xeroDoc: NodeDoc = {
  "slug": "xero",
  "displayName": "Xero",
  "category": "Utility",
  "logoUrl": "/icons/nodes/xero.svg",
  "description": "Create, fetch, update, and search Xero accounting records (contacts, invoices, items, payments, accounts). Use this node when a workflow needs xero behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Access Token Credential",
  "credentialSetupSteps": [
    "Open the Xero developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Access Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview",
  "resources": [
    {
      "name": "Contacts",
      "description": "Contacts is a Xero resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        }
      ]
    },
    {
      "name": "Invoices",
      "description": "Invoices is a Xero resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        }
      ]
    },
    {
      "name": "Items",
      "description": "Items is a Xero resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        }
      ]
    },
    {
      "name": "Payments",
      "description": "Payments is a Xero resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        }
      ]
    },
    {
      "name": "Accounts",
      "description": "Accounts is a Xero resource available in this node.",
      "operations": [
        {
          "name": "Get Many",
          "value": "get_many",
          "description": "Get Many with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get many.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get many and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Get By ID",
          "value": "get_by_id",
          "description": "Get By ID with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into get by id.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs get by id and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into create.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Xero node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Xero OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Tenant Id",
              "internalKey": "tenantId",
              "type": "string",
              "required": true,
              "description": "Xero tenant ID",
              "example": "{{ $json.tenantId }}",
              "defaultValue": ""
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID for get_by_id or update",
              "example": "{{ $json.recordId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create/update",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Where",
              "internalKey": "where",
              "type": "string",
              "required": false,
              "description": "Xero WHERE filter",
              "example": "{{ $json.where }}",
              "defaultValue": ""
            },
            {
              "name": "Order",
              "internalKey": "order",
              "type": "string",
              "required": false,
              "description": "Sort order",
              "example": "{{ $json.order }}",
              "defaultValue": ""
            },
            {
              "name": "Page",
              "internalKey": "page",
              "type": "number",
              "required": false,
              "description": "Page number",
              "example": "1",
              "defaultValue": "1"
            },
            {
              "name": "Modified After",
              "internalKey": "modifiedAfter",
              "type": "string",
              "required": false,
              "description": "ISO date — only records modified after",
              "example": "{{ $json.modifiedAfter }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "xero"
          },
          "outputDescription": "success: Indicates that the Xero node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Xero in a workflow and pass upstream data into update.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Tenant Id": "{{ $json.tenantId }}",
              "Record Id": "{{ $json.recordId }}",
              "Payload": "{}",
              "Where": "{{ $json.where }}",
              "Order": "{{ $json.order }}",
              "Page": "1",
              "Modified After": "{{ $json.modifiedAfter }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.xero.com/documentation/api/accounting/overview"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
