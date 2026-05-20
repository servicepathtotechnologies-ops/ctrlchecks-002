import type { NodeDoc } from '../types';

export const paypalDoc: NodeDoc = {
  "slug": "paypal",
  "displayName": "PayPal",
  "category": "Data",
  "logoUrl": "/icons/nodes/paypal.svg",
  "description": "PayPal payment processing",
  "credentialType": "PayPal Credential",
  "credentialSetupSteps": [
    "Go to https://developer.paypal.com/dashboard/ → My Apps & Credentials.",
    "Create a new app to get a Client ID and Secret.",
    "Use the Sandbox credentials for testing, Live credentials for production.",
    "In CtrlChecks, open Connections → Add Connection → PayPal → paste Client ID and Secret → Save."
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
          "description": "Charge using the PayPal node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "PayPal environment",
              "example": "sandbox",
              "placeholder": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Payment amount",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "description": "Currency (default: USD)",
              "example": "USD",
              "placeholder": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Description for the payment/order"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "description": "PayPal capture ID (for refund)",
              "example": "3C12345678901234A",
              "placeholder": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "description": "If true, capture immediately after creating order",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
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
            "scenario": "Use PayPal to charge in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": ""
            },
            "expectedOutput": "The node executes charge and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.paypal.com/api/rest/"
        },
        {
          "name": "Refund",
          "value": "refund",
          "description": "Refund using the PayPal node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "PayPal environment",
              "example": "sandbox",
              "placeholder": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Payment amount",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "description": "Currency (default: USD)",
              "example": "USD",
              "placeholder": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Description for the payment/order"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "description": "PayPal capture ID (for refund)",
              "example": "3C12345678901234A",
              "placeholder": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "description": "If true, capture immediately after creating order",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
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
            "scenario": "Use PayPal to refund in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": ""
            },
            "expectedOutput": "The node executes refund and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.paypal.com/api/rest/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the PayPal node."
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
