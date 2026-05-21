import type { NodeDoc } from '../types';

export const stripeDoc: NodeDoc = {
  "slug": "stripe",
  "displayName": "Stripe",
  "category": "Data",
  "logoUrl": "/icons/nodes/stripe.svg",
  "description": "Stripe payment processing",
  "credentialType": "Stripe API Key",
  "credentialSetupSteps": [
    "What this is: Stripe uses an API key or account connection so CtrlChecks can safely access your Stripe account.",
    "Go to dashboard.stripe.com and sign in to your Stripe account.",
    "Click \"Developers\" in the top right corner -> API keys.",
    "Copy the \"Secret key\" - use sk_test_ (starts with sk_test_) while building and testing, sk_live_ for real payments.",
    "Keep this key secret - anyone with it can charge your customers or process refunds.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Stripe -> paste the sk_ key -> Save.",
    "Run a test step using sk_test_ (e.g. create a test customer) to confirm it works before switching to the live key.",
    "Important: amounts in Stripe are in the smallest currency unit. $20.00 = 2000 (cents). Enter 2000, not 20.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Stripe node and select the saved connection."
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
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Stripe.\nWhere to get it: Open the Stripe dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_live_...",
              "example": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "helpText": "What this field is: The payment amount in the SMALLEST unit of the currency.\nFor USD (cents): 2000 means $20.00 (multiply dollars by 100)\nFor EUR (cents): 1500 means €15.00\nFor JPY (no decimal): 2000 means ¥2000 (no multiplication needed)\nFor GBP (pence): 4999 means £49.99\nExample: To charge $49.99 USD, enter 4999. To charge $100.00, enter 10000.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "helpText": "What this field is: The 3-letter ISO currency code for the payment.\nMust be lowercase.\nExamples: usd (US Dollar), eur (Euro), gbp (British Pound), inr (Indian Rupee), cad (Canadian Dollar), aud (Australian Dollar), jpy (Japanese Yen), sgd (Singapore Dollar).\nMust match a currency supported by your Stripe account.",
              "placeholder": "usd",
              "example": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Description for the charge/payment",
              "helpText": "What this field is: Description for the charge/payment for Stripe / Charge.\nHow to fill it: Type the message, prompt, or content you want Stripe to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "helpText": "What this field is: Legacy charge source token (for /v1/charges) for Stripe / Charge.\nHow to fill it: Enter the source value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.source}} or pick the value from the data picker.",
              "placeholder": "tok_visa",
              "example": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "helpText": "What this field is: Payment method ID (for PaymentIntents) for Stripe / Charge.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentMethodId}} or pick the value from the data picker.",
              "placeholder": "pm_...",
              "example": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "helpText": "What this field is: The Stripe customer ID — starts with cus_.\nWhere to find it: Stripe Dashboard → Customers → click a customer — the ID is shown at the top.\nExample: cus_XXXXXXXXXXXXXXXXXX\nTip: Use {{$json.customerId}} from a Create Customer step.",
              "placeholder": "cus_...",
              "example": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "helpText": "What this field is: The email address that Stripe should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "helpText": "What this field is: Customer name (for createCustomer) for Stripe / Charge.\nHow to fill it: Enter the name value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Enter Name"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "helpText": "What this field is: Charge ID (for refund) for Stripe / Charge.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.chargeId}} or pick the value from the data picker.",
              "placeholder": "ch_...",
              "example": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "helpText": "What this field is: PaymentIntent ID (for refund) for Stripe / Charge.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentIntentId}} or pick the value from the data picker.",
              "placeholder": "pi_...",
              "example": "pi_..."
            }
          ],
          "outputExample": {
            "id": "ch_1abc",
            "amount": 2000,
            "currency": "usd",
            "status": "succeeded"
          },
          "outputDescription": "id: Unique identifier returned by the service.\namount: Value returned by this operation.\ncurrency: Value returned by this operation.\nstatus: Current state of the requested action.",
          "usageExample": {
            "scenario": "Process incoming Stripe data with charge after a related upstream event is received",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "Stripe returns structured charge data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Stripe.\nWhere to get it: Open the Stripe dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_live_...",
              "example": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "helpText": "What this field is: A number used for amount in Stripe / Refund.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "helpText": "What this field is: Currency (default: usd) for Stripe / Refund.\nHow to fill it: Enter the currency value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.currency}} or pick the value from the data picker.",
              "placeholder": "usd",
              "example": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Description for the charge/payment",
              "helpText": "What this field is: Description for the charge/payment for Stripe / Refund.\nHow to fill it: Type the message, prompt, or content you want Stripe to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "helpText": "What this field is: Legacy charge source token (for /v1/charges) for Stripe / Refund.\nHow to fill it: Enter the source value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.source}} or pick the value from the data picker.",
              "placeholder": "tok_visa",
              "example": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "helpText": "What this field is: Payment method ID (for PaymentIntents) for Stripe / Refund.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentMethodId}} or pick the value from the data picker.",
              "placeholder": "pm_...",
              "example": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "helpText": "What this field is: The Stripe customer ID — starts with cus_.\nWhere to find it: Stripe Dashboard → Customers → click a customer — the ID is shown at the top.\nExample: cus_XXXXXXXXXXXXXXXXXX\nTip: Use {{$json.customerId}} from a Create Customer step.",
              "placeholder": "cus_...",
              "example": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "helpText": "What this field is: The email address that Stripe should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "helpText": "What this field is: Customer name (for createCustomer) for Stripe / Refund.\nHow to fill it: Enter the name value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Enter Name"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "helpText": "What this field is: Charge ID (for refund) for Stripe / Refund.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.chargeId}} or pick the value from the data picker.",
              "placeholder": "ch_...",
              "example": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "helpText": "What this field is: PaymentIntent ID (for refund) for Stripe / Refund.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentIntentId}} or pick the value from the data picker.",
              "placeholder": "pi_...",
              "example": "pi_..."
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
            "scenario": "Process incoming Stripe data with refund after a related upstream event is received",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "Stripe returns structured refund data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Stripe secret key (optional if stored in vault under key \"stripe\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Stripe.\nWhere to get it: Open the Stripe dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_live_...",
              "example": "sk_live_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Payment amount (in cents)",
              "helpText": "What this field is: A number used for amount in Stripe / CreateCustomer.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Currency",
              "internalKey": "currency",
              "type": "string",
              "required": false,
              "description": "Currency (default: usd)",
              "helpText": "What this field is: Currency (default: usd) for Stripe / CreateCustomer.\nHow to fill it: Enter the currency value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.currency}} or pick the value from the data picker.",
              "placeholder": "usd",
              "example": "usd",
              "defaultValue": "usd"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Description for the charge/payment",
              "helpText": "What this field is: Description for the charge/payment for Stripe / CreateCustomer.\nHow to fill it: Type the message, prompt, or content you want Stripe to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Source",
              "internalKey": "source",
              "type": "string",
              "required": false,
              "description": "Legacy charge source token (for /v1/charges)",
              "helpText": "What this field is: Legacy charge source token (for /v1/charges) for Stripe / CreateCustomer.\nHow to fill it: Enter the source value requested by Stripe, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.source}} or pick the value from the data picker.",
              "placeholder": "tok_visa",
              "example": "tok_visa"
            },
            {
              "name": "Payment Method Id",
              "internalKey": "paymentMethodId",
              "type": "string",
              "required": false,
              "description": "Payment method ID (for PaymentIntents)",
              "helpText": "What this field is: Payment method ID (for PaymentIntents) for Stripe / CreateCustomer.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentMethodId}} or pick the value from the data picker.",
              "placeholder": "pm_...",
              "example": "pm_..."
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Stripe customer ID",
              "helpText": "What this field is: The Stripe customer ID — starts with cus_.\nWhere to find it: Stripe Dashboard → Customers → click a customer — the ID is shown at the top.\nExample: cus_XXXXXXXXXXXXXXXXXX\nTip: Use {{$json.customerId}} from a Create Customer step.",
              "placeholder": "cus_...",
              "example": "cus_..."
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer)",
              "helpText": "What this field is: The customer's email address — Stripe uses this to identify customers and send receipts.\nExample: alice@example.com\nTip: Use {{$json.email}} from a form submission or signup step.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer)",
              "helpText": "What this field is: The customer's full name as it appears in your Stripe dashboard.\nExample: Alice Kumar or Acme Corp (for business accounts)",
              "placeholder": "Enter Name"
            },
            {
              "name": "Charge Id",
              "internalKey": "chargeId",
              "type": "string",
              "required": false,
              "description": "Charge ID (for refund)",
              "helpText": "What this field is: Charge ID (for refund) for Stripe / CreateCustomer.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.chargeId}} or pick the value from the data picker.",
              "placeholder": "ch_...",
              "example": "ch_..."
            },
            {
              "name": "Payment Intent Id",
              "internalKey": "paymentIntentId",
              "type": "string",
              "required": false,
              "description": "PaymentIntent ID (for refund)",
              "helpText": "What this field is: PaymentIntent ID (for refund) for Stripe / CreateCustomer.\nWhere to find it: Open the item in Stripe and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.paymentIntentId}} or pick the value from the data picker.",
              "placeholder": "pi_...",
              "example": "pi_..."
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
            "scenario": "Process incoming Stripe data with create customer after a related upstream event is received",
            "inputValues": {
              "Api Key": "sk_live_...",
              "Amount": "1000",
              "Currency": "usd",
              "Description": "",
              "Source": "tok_visa"
            },
            "expectedOutput": "Stripe returns structured create customer data that downstream nodes can reference with {{$json.fieldName}}."
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
