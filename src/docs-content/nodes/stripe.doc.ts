import type { NodeDoc } from '../types';

export const stripeDoc: NodeDoc = {
  "slug": "stripe",
  "displayName": "Stripe",
  "category": "Data",
  "logoUrl": "/icons/nodes/stripe.svg",
  "description": "Stripe payment processing",
  "credentialType": "Stripe API Key",
  "credentialSetupSteps": [
    "Log in to https://dashboard.stripe.com → Developers → API keys.",
    "Use the \"Secret key\" (starts with sk_live_ or sk_test_ for test mode).",
    "In CtrlChecks, open Connections → Add Connection → Stripe → paste the Secret Key → Save.",
    "Tip: use sk_test_ during development and sk_live_ in production."
  ],
  "credentialDocsUrl": "https://stripe.com/docs/keys",
  "resources": [
    {
      "name": "Operations",
      "description": "Stripe exposes operation choices directly.",
      "operations": [
        {
          "name": "Charge",
          "value": "charge",
          "description": "Charge using the Stripe node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Description for the charge/payment"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer)"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
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
            "scenario": "Use Stripe to charge in a workflow.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "The node executes charge and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
        },
        {
          "name": "Refund",
          "value": "refund",
          "description": "Refund using the Stripe node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Description for the charge/payment"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer)"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
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
            "scenario": "Use Stripe to refund in a workflow.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "The node executes refund and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
        },
        {
          "name": "CreateCustomer",
          "value": "createCustomer",
          "description": "CreateCustomer using the Stripe node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Description for the charge/payment"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer)"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
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
            "scenario": "Use Stripe to createcustomer in a workflow.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "The node executes createcustomer and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Stripe node."
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
