import type { NodeDoc } from '../types';

export const paypalDoc: NodeDoc = {
  "slug": "paypal",
  "displayName": "PayPal",
  "category": "Data",
  "logoUrl": "/icons/nodes/paypal.svg",
  "description": "PayPal payment processing",
  "credentialType": "PayPal Credential",
  "credentialSetupSteps": [
    "What this is: PayPal uses an OAuth connection so CtrlChecks can safely access your PayPal account.",
    "Go to developer.paypal.com/dashboard and sign in with your PayPal business account.",
    "Under \"My Apps & Credentials\", make sure you are on \"Sandbox\" tab for testing or \"Live\" tab for real payments.",
    "Click \"Create App\" -> give it a name -> Create App.",
    "Copy the Client ID and Secret shown on the app page.",
    "Note: Sandbox credentials only work in test mode. Switch to Live credentials and go through PayPal business verification for real payments.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> PayPal -> paste Client ID and Secret -> Save.",
    "Run a test step using Sandbox credentials first to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the PayPal node and select the saved connection."
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
              "required": false,
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access PayPal.\nWhere to get it: Open the PayPal dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "PayPal environment",
              "helpText": "What this field is: PayPal environment for PayPal / Charge.\nHow to fill it: Enter the environment value requested by PayPal, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "sandbox",
              "example": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount",
              "helpText": "What this field is: The payment amount as a decimal number (NOT in cents like Stripe).\nExample: 20.00 for $20.00 or 149.99 for $149.99.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: USD)",
              "helpText": "What this field is: 3-letter currency code.\nExamples: USD, EUR, GBP, CAD, AUD, INR, JPY.",
              "placeholder": "USD",
              "example": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Description for the payment/order",
              "helpText": "What this field is: Description for the payment/order for PayPal / Charge.\nHow to fill it: Type the message, prompt, or content you want PayPal to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "required": false,
              "description": "PayPal capture ID (for refund)",
              "helpText": "What this field is: PayPal capture ID (for refund) for PayPal / Charge.\nWhere to find it: Open the item in PayPal and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentId}} or pick the value from the data picker.",
              "placeholder": "3C12345678901234A",
              "example": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "required": false,
              "description": "If true, capture immediately after creating order",
              "helpText": "What this field is: An on/off choice for auto capture in PayPal / Charge.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want PayPal to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming PayPal data with charge after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": ""
            },
            "expectedOutput": "PayPal returns structured charge data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "PayPal access token (optional if stored in vault under key \"paypal\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access PayPal.\nWhere to get it: Open the PayPal dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "PayPal environment",
              "helpText": "What this field is: PayPal environment for PayPal / Refund.\nHow to fill it: Enter the environment value requested by PayPal, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "sandbox",
              "example": "sandbox",
              "defaultValue": "live"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount",
              "helpText": "What this field is: A number used for amount in PayPal / Refund.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: USD)",
              "helpText": "What this field is: Currency (default: USD) for PayPal / Refund.\nHow to fill it: Enter the currency value requested by PayPal, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.currency}} or pick the value from the data picker.",
              "placeholder": "USD",
              "example": "USD",
              "defaultValue": "USD"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Description for the payment/order",
              "helpText": "What this field is: Description for the payment/order for PayPal / Refund.\nHow to fill it: Type the message, prompt, or content you want PayPal to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Payment Id",
              "internalKey": "paymentId",
              "type": "string",
              "required": false,
              "description": "PayPal capture ID (for refund)",
              "helpText": "What this field is: PayPal capture ID (for refund) for PayPal / Refund.\nWhere to find it: Open the item in PayPal and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentId}} or pick the value from the data picker.",
              "placeholder": "3C12345678901234A",
              "example": "3C12345678901234A"
            },
            {
              "name": "Auto Capture",
              "internalKey": "autoCapture",
              "type": "boolean",
              "required": false,
              "description": "If true, capture immediately after creating order",
              "helpText": "What this field is: An on/off choice for auto capture in PayPal / Refund.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want PayPal to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming PayPal data with refund after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Environment": "sandbox",
              "Amount": "10",
              "Currency": "USD",
              "Description": ""
            },
            "expectedOutput": "PayPal returns structured refund data that downstream nodes can reference with {{$json.fieldName}}."
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
