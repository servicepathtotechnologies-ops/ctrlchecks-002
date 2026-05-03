import type { NodeDoc } from '../types';

export const stripeDoc: NodeDoc = {
  "slug": "stripe",
  "displayName": "Stripe",
  "category": "Data",
  "logoUrl": "/icons/nodes/stripe.svg",
  "description": "Stripe payment processing Use this node when a workflow needs stripe behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Stripe Credential",
  "credentialSetupSteps": [
    "Open the Stripe developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Stripe Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.stripe.com/api",
  "resources": [
    {
      "name": "Operations",
      "description": "Stripe exposes operation choices directly.",
      "operations": [
        {
          "name": "Charge",
          "value": "charge",
          "description": "Charge with the Stripe node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Description for the charge/payment",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Stripe node.\nstructure: Value returned by the Stripe node.\nconvertible: Value returned by the Stripe node.\ndefaultValue: Value returned by the Stripe node.",
          "usageExample": {
            "scenario": "Use Stripe in a workflow and pass upstream data into charge.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "{{ $json.description }}",
              "Source": "tok_visa",
              "Payment Method Id": "pm_...",
              "Customer Id": "cus_...",
              "Email": "{{ $json.email }}",
              "Name": "{{ $json.name }}",
              "Charge Id": "ch_..."
            },
            "expectedOutput": "The node runs charge and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
        },
        {
          "name": "Refund",
          "value": "refund",
          "description": "Refund with the Stripe node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Description for the charge/payment",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Stripe node.\nstructure: Value returned by the Stripe node.\nconvertible: Value returned by the Stripe node.\ndefaultValue: Value returned by the Stripe node.",
          "usageExample": {
            "scenario": "Use Stripe in a workflow and pass upstream data into refund.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "{{ $json.description }}",
              "Source": "tok_visa",
              "Payment Method Id": "pm_...",
              "Customer Id": "cus_...",
              "Email": "{{ $json.email }}",
              "Name": "{{ $json.name }}",
              "Charge Id": "ch_..."
            },
            "expectedOutput": "The node runs refund and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
        },
        {
          "name": "Create Customer",
          "value": "createCustomer",
          "description": "Create Customer with the Stripe node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "example": "sk_live_...",
              "placeholder": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "example": "usd",
              "placeholder": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Description for the charge/payment",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "example": "tok_visa",
              "placeholder": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "example": "pm_...",
              "placeholder": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "example": "cus_...",
              "placeholder": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "example": "{{ $json.name }}"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "example": "ch_...",
              "placeholder": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "example": "pi_...",
              "placeholder": "pi_..."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Stripe node.\nstructure: Value returned by the Stripe node.\nconvertible: Value returned by the Stripe node.\ndefaultValue: Value returned by the Stripe node.",
          "usageExample": {
            "scenario": "Use Stripe in a workflow and pass upstream data into create customer.",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "{{ $json.description }}",
              "Source": "tok_visa",
              "Payment Method Id": "pm_...",
              "Customer Id": "cus_...",
              "Email": "{{ $json.email }}",
              "Name": "{{ $json.name }}",
              "Charge Id": "ch_..."
            },
            "expectedOutput": "The node runs create customer and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.stripe.com/api"
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
