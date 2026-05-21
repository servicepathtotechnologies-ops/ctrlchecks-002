import type { NodeDoc } from '../types';

export const chargebeeDoc: NodeDoc = {
  "slug": "chargebee",
  "displayName": "Chargebee",
  "category": "Communication",
  "logoUrl": "/icons/nodes/chargebee.svg",
  "description": "Create customers, manage subscriptions, and automate billing with Chargebee.",
  "credentialType": "Chargebee API Key",
  "credentialSetupSteps": [
    "What this is: Chargebee uses an API key or account connection so CtrlChecks can safely access your Chargebee account.",
    "Log in to your Chargebee account.",
    "Go to Settings (gear icon) -> Configure Chargebee -> API Keys.",
    "Click \"Create a Key\" -> give it a name (e.g. CtrlChecks) -> select \"Full Access\" or specific permissions -> Create.",
    "Copy the API key shown.",
    "Note your Chargebee site name - it is the part before .chargebee.com in your URL (e.g. if URL is mysite.chargebee.com, site name is mysite).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Chargebee -> paste the API key and enter your site name -> Save.",
    "Run a test step (e.g. list customers) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Chargebee node and select the saved connection."
  ],
  "credentialDocsUrl": "https://apidocs.chargebee.com/docs/api",
  "resources": [
    {
      "name": "Operations",
      "description": "Chargebee exposes operation choices directly.",
      "operations": [
        {
          "name": "Create customer",
          "value": "create_customer",
          "description": "Create and manage subscriptions, customers, and invoices in Chargebee.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Chargebee.\nWhere to get it: Open the Chargebee dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "helpText": "What this field is: Chargebee site name (subdomain) for Chargebee / Create customer.\nHow to fill it: Enter the site value requested by Chargebee, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.site}} or pick the value from the data picker.",
              "placeholder": "Enter Site"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Chargebee / Create customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "helpText": "What this field is: The email address that Chargebee should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "helpText": "What this field is: Plan / item price ID for Chargebee / Create customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.planId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "helpText": "What this field is: Subscription ID for Chargebee / Create customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.subscriptionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "customer": {
              "id": "cust_abc123",
              "email": "alice@example.com",
              "created_at": 1705000000
            }
          },
          "outputDescription": "customer.id: Chargebee customer ID. customer.email: The customer email. customer.created_at: Unix timestamp of creation.",
          "usageExample": {
            "scenario": "Create a Chargebee customer when a new user signs up",
            "inputValues": {
              "firstName": "{{$json.firstName}}",
              "lastName": "{{$json.lastName}}",
              "email": "{{$json.email}}"
            },
            "expectedOutput": "A Chargebee customer record is created. Use `{{$json.customer.id}}` in downstream billing operations."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Create subscription",
          "value": "create_subscription",
          "description": "Create and manage subscriptions, customers, and invoices in Chargebee.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Chargebee.\nWhere to get it: Open the Chargebee dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "helpText": "What this field is: Chargebee site name (subdomain) for Chargebee / Create subscription.\nHow to fill it: Enter the site value requested by Chargebee, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.site}} or pick the value from the data picker.",
              "placeholder": "Enter Site"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: The Chargebee customer ID to create the subscription for.\nExample: AzZlHpMXd8IpUQ or use {{$json.chargebeeCustomerId}} from a previous step.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "helpText": "What this field is: The email address that Chargebee should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "helpText": "What this field is: The Chargebee plan/item price ID that the customer is subscribing to.\nWhere to find it: Chargebee Dashboard → Product Catalog → Plans or Items → copy the plan ID.\nExample: pro-monthly or startup-annual",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "helpText": "What this field is: Subscription ID for Chargebee / Create subscription.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.subscriptionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "customer": {
              "id": "cust_abc123",
              "email": "alice@example.com",
              "created_at": 1705000000
            }
          },
          "outputDescription": "customer.id: Chargebee customer ID. customer.email: The customer email. customer.created_at: Unix timestamp of creation.",
          "usageExample": {
            "scenario": "Create a Chargebee customer when a new user signs up",
            "inputValues": {
              "firstName": "{{$json.firstName}}",
              "lastName": "{{$json.lastName}}",
              "email": "{{$json.email}}"
            },
            "expectedOutput": "A Chargebee customer record is created. Use `{{$json.customer.id}}` in downstream billing operations."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Get customer",
          "value": "get_customer",
          "description": "Create and manage subscriptions, customers, and invoices in Chargebee.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Chargebee.\nWhere to get it: Open the Chargebee dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "helpText": "What this field is: Chargebee site name (subdomain) for Chargebee / Get customer.\nHow to fill it: Enter the site value requested by Chargebee, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.site}} or pick the value from the data picker.",
              "placeholder": "Enter Site"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Chargebee / Get customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "helpText": "What this field is: The email address that Chargebee should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "helpText": "What this field is: Plan / item price ID for Chargebee / Get customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.planId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "helpText": "What this field is: Subscription ID for Chargebee / Get customer.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.subscriptionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "customer": {
              "id": "cust_abc123",
              "email": "alice@example.com",
              "created_at": 1705000000
            }
          },
          "outputDescription": "customer.id: Chargebee customer ID. customer.email: The customer email. customer.created_at: Unix timestamp of creation.",
          "usageExample": {
            "scenario": "Create a Chargebee customer when a new user signs up",
            "inputValues": {
              "firstName": "{{$json.firstName}}",
              "lastName": "{{$json.lastName}}",
              "email": "{{$json.email}}"
            },
            "expectedOutput": "A Chargebee customer record is created. Use `{{$json.customer.id}}` in downstream billing operations."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        },
        {
          "name": "Cancel subscription",
          "value": "cancel_subscription",
          "description": "Create and manage subscriptions, customers, and invoices in Chargebee.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Chargebee API key",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Chargebee.\nWhere to get it: Open the Chargebee dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)",
              "helpText": "What this field is: Chargebee site name (subdomain) for Chargebee / Cancel subscription.\nHow to fill it: Enter the site value requested by Chargebee, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.site}} or pick the value from the data picker.",
              "placeholder": "Enter Site"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID",
              "helpText": "What this field is: Customer ID for Chargebee / Cancel subscription.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email",
              "helpText": "What this field is: The email address that Chargebee should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "required": false,
              "description": "Plan / item price ID",
              "helpText": "What this field is: Plan / item price ID for Chargebee / Cancel subscription.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.planId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "required": false,
              "description": "Subscription ID",
              "helpText": "What this field is: Subscription ID for Chargebee / Cancel subscription.\nWhere to find it: Open the item in Chargebee and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.subscriptionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "customer": {
              "id": "cust_abc123",
              "email": "alice@example.com",
              "created_at": 1705000000
            }
          },
          "outputDescription": "customer.id: Chargebee customer ID. customer.email: The customer email. customer.created_at: Unix timestamp of creation.",
          "usageExample": {
            "scenario": "Create a Chargebee customer when a new user signs up",
            "inputValues": {
              "firstName": "{{$json.firstName}}",
              "lastName": "{{$json.lastName}}",
              "email": "{{$json.email}}"
            },
            "expectedOutput": "A Chargebee customer record is created. Use `{{$json.customer.id}}` in downstream billing operations."
          },
          "externalDocsUrl": "https://apidocs.chargebee.com/docs/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Chargebee node."
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
