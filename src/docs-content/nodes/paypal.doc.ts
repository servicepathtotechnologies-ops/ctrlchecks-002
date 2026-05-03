import type { NodeDoc } from '../types';

export const paypalDoc: NodeDoc = {
  "slug": "paypal",
  "displayName": "PayPal",
  "category": "Data",
  "logoUrl": "/icons/nodes/paypal.svg",
  "description": "PayPal payment processing Use this node when a workflow needs paypal behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Paypal Token",
  "credentialSetupSteps": [
    "Open the PayPal developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Paypal Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.paypal.com/api/rest/",
  "resources": [
    {
      "name": "Operations",
      "description": "PayPal exposes operation choices directly.",
      "operations": [
        {
          "name": "Charge",
          "value": "charge",
          "description": "Charge with the PayPal node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "PayPal environment",
              "example": "sandbox",
              "placeholder": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: USD)",
              "example": "USD",
              "placeholder": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Description for the payment/order",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "required": false,
              "description": "PayPal capture ID (for refund)",
              "example": "3C12345678901234A",
              "placeholder": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "required": false,
              "description": "If true, capture immediately after creating order",
              "example": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the PayPal node.\nstructure: Value returned by the PayPal node.\nconvertible: Value returned by the PayPal node.\ndefaultValue: Value returned by the PayPal node.",
          "usageExample": {
            "scenario": "Use PayPal in a workflow and pass upstream data into charge.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": "{{ $json.description }}",
              "Payment Id": "3C12345678901234A",
              "Auto Capture": "true"
            },
            "expectedOutput": "The node runs charge and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.paypal.com/api/rest/"
        },
        {
          "name": "Refund",
          "value": "refund",
          "description": "Refund with the PayPal node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "PayPal environment",
              "example": "sandbox",
              "placeholder": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: USD)",
              "example": "USD",
              "placeholder": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Description for the payment/order",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "required": false,
              "description": "PayPal capture ID (for refund)",
              "example": "3C12345678901234A",
              "placeholder": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "required": false,
              "description": "If true, capture immediately after creating order",
              "example": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the PayPal node.\nstructure: Value returned by the PayPal node.\nconvertible: Value returned by the PayPal node.\ndefaultValue: Value returned by the PayPal node.",
          "usageExample": {
            "scenario": "Use PayPal in a workflow and pass upstream data into refund.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": "{{ $json.description }}",
              "Payment Id": "3C12345678901234A",
              "Auto Capture": "true"
            },
            "expectedOutput": "The node runs refund and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.paypal.com/api/rest/"
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
