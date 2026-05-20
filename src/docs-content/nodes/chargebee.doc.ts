import type { NodeDoc } from '../types';

export const chargebeeDoc: NodeDoc = {
  "slug": "chargebee",
  "displayName": "Chargebee",
  "category": "Communication",
  "logoUrl": "/icons/nodes/chargebee.svg",
  "description": "Create customers, manage subscriptions, and automate billing with Chargebee.",
  "credentialType": "Chargebee API Key",
  "credentialSetupSteps": [
    "Log in to Chargebee → Settings → Configure Chargebee → API Keys → \"Create a Key\".",
    "Select the appropriate permissions and copy the API key.",
    "In CtrlChecks, open Connections → Add Connection → Chargebee → paste the API key and enter your site name → Save."
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
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "description": "Plan / item price ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "description": "Subscription ID",
              "example": "abc123",
              "placeholder": "abc123"
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
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "description": "Plan / item price ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "description": "Subscription ID",
              "example": "abc123",
              "placeholder": "abc123"
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
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "description": "Plan / item price ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "description": "Subscription ID",
              "example": "abc123",
              "placeholder": "abc123"
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
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site",
              "internalKey": "site",
              "type": "string",
              "required": true,
              "description": "Chargebee site name (subdomain)"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Plan Id",
              "internalKey": "planId",
              "type": "string",
              "description": "Plan / item price ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subscription Id",
              "internalKey": "subscriptionId",
              "type": "string",
              "description": "Subscription ID",
              "example": "abc123",
              "placeholder": "abc123"
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
