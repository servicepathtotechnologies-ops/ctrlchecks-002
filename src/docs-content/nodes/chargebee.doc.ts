import type { NodeDoc } from '../types';

export const chargebeeDoc: NodeDoc = {
  "slug": "chargebee",
  "displayName": "Chargebee",
  "category": "Communication",
  "logoUrl": "/icons/nodes/chargebee.svg",
  "description": "Create customers, manage subscriptions, and automate billing with Chargebee. Use this node when a workflow needs chargebee behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Api Key Credential",
  "credentialSetupSteps": [
    "Open the Chargebee developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Api Key Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://apidocs.chargebee.com/docs/api",
  "resources": [
    {
      "name": "Operations",
      "description": "Chargebee exposes operation choices directly.",
      "operations": [
        {
          "name": "Create Customer",
          "value": "create_customer",
          "description": "Create Customer with the Chargebee node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "example": "{{ $json.site }}",
              "defaultValue": ""
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "{{ $json.customerId }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "example": "{{ $json.planId }}",
              "defaultValue": ""
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "example": "{{ $json.subscriptionId }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "chargebee"
          },
          "outputDescription": "success: Indicates that the Chargebee node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Chargebee in a workflow and pass upstream data into create customer.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Site": "{{ $json.site }}",
              "Customer Id": "{{ $json.customerId }}",
              "Email": "{{ $json.email }}",
              "Plan Id": "{{ $json.planId }}",
              "Subscription Id": "{{ $json.subscriptionId }}"
            },
            "expectedOutput": "The node runs create customer and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Create Subscription",
          "value": "create_subscription",
          "description": "Create Subscription with the Chargebee node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "example": "{{ $json.site }}",
              "defaultValue": ""
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "{{ $json.customerId }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "example": "{{ $json.planId }}",
              "defaultValue": ""
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "example": "{{ $json.subscriptionId }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "chargebee"
          },
          "outputDescription": "success: Indicates that the Chargebee node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Chargebee in a workflow and pass upstream data into create subscription.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Site": "{{ $json.site }}",
              "Customer Id": "{{ $json.customerId }}",
              "Email": "{{ $json.email }}",
              "Plan Id": "{{ $json.planId }}",
              "Subscription Id": "{{ $json.subscriptionId }}"
            },
            "expectedOutput": "The node runs create subscription and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Get Customer",
          "value": "get_customer",
          "description": "Get Customer with the Chargebee node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "example": "{{ $json.site }}",
              "defaultValue": ""
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "{{ $json.customerId }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "example": "{{ $json.planId }}",
              "defaultValue": ""
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "example": "{{ $json.subscriptionId }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "chargebee"
          },
          "outputDescription": "success: Indicates that the Chargebee node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Chargebee in a workflow and pass upstream data into get customer.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Site": "{{ $json.site }}",
              "Customer Id": "{{ $json.customerId }}",
              "Email": "{{ $json.email }}",
              "Plan Id": "{{ $json.planId }}",
              "Subscription Id": "{{ $json.subscriptionId }}"
            },
            "expectedOutput": "The node runs get customer and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Cancel Subscription",
          "value": "cancel_subscription",
          "description": "Cancel Subscription with the Chargebee node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "example": "{{ $json.site }}",
              "defaultValue": ""
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "example": "{{ $json.customerId }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "example": "{{ $json.planId }}",
              "defaultValue": ""
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "example": "{{ $json.subscriptionId }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "chargebee"
          },
          "outputDescription": "success: Indicates that the Chargebee node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Chargebee in a workflow and pass upstream data into cancel subscription.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Site": "{{ $json.site }}",
              "Customer Id": "{{ $json.customerId }}",
              "Email": "{{ $json.email }}",
              "Plan Id": "{{ $json.planId }}",
              "Subscription Id": "{{ $json.subscriptionId }}"
            },
            "expectedOutput": "The node runs cancel subscription and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
