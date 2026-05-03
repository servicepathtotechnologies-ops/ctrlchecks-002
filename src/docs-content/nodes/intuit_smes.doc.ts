import type { NodeDoc } from '../types';

export const intuitSmesDoc: NodeDoc = {
  "slug": "intuit_smes",
  "displayName": "Intuit - SME'S",
  "category": "Data",
  "logoUrl": "/icons/nodes/intuit_smes.svg",
  "description": "Intuit SME integration for managing customer data and financial operations via Intuit APIs Use this node when a workflow needs intuit - sme's behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Intuit Credential, Intuit Token, Intuit Credential",
  "credentialSetupSteps": [
    "Open the Intuit - SME'S developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Intuit Credential, Intuit Token, Intuit Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account",
  "resources": [
    {
      "name": "Operations",
      "description": "Intuit - SME'S exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Customers",
          "value": "getCustomers",
          "description": "Get Customers with the Intuit - SME'S node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Intuit credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Additional data for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intuit - SME'S node.\nstructure: Value returned by the Intuit - SME'S node.\nconvertible: Value returned by the Intuit - SME'S node.\ndefaultValue: Value returned by the Intuit - SME'S node.",
          "usageExample": {
            "scenario": "Use Intuit - SME'S in a workflow and pass upstream data into get customers.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com",
              "Amount": "1000",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get customers and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "Create Invoice",
          "value": "createInvoice",
          "description": "Create Invoice with the Intuit - SME'S node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Intuit credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Additional data for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intuit - SME'S node.\nstructure: Value returned by the Intuit - SME'S node.\nconvertible: Value returned by the Intuit - SME'S node.\ndefaultValue: Value returned by the Intuit - SME'S node.",
          "usageExample": {
            "scenario": "Use Intuit - SME'S in a workflow and pass upstream data into create invoice.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com",
              "Amount": "1000",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create invoice and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "Get Invoices",
          "value": "getInvoices",
          "description": "Get Invoices with the Intuit - SME'S node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Intuit credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Additional data for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intuit - SME'S node.\nstructure: Value returned by the Intuit - SME'S node.\nconvertible: Value returned by the Intuit - SME'S node.\ndefaultValue: Value returned by the Intuit - SME'S node.",
          "usageExample": {
            "scenario": "Use Intuit - SME'S in a workflow and pass upstream data into get invoices.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com",
              "Amount": "1000",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get invoices and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "Create Customer",
          "value": "createCustomer",
          "description": "Create Customer with the Intuit - SME'S node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Intuit credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Additional data for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intuit - SME'S node.\nstructure: Value returned by the Intuit - SME'S node.\nconvertible: Value returned by the Intuit - SME'S node.\ndefaultValue: Value returned by the Intuit - SME'S node.",
          "usageExample": {
            "scenario": "Use Intuit - SME'S in a workflow and pass upstream data into create customer.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com",
              "Amount": "1000",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create customer and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "Update Customer",
          "value": "updateCustomer",
          "description": "Update Customer with the Intuit - SME'S node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Intuit credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Additional data for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intuit - SME'S node.\nstructure: Value returned by the Intuit - SME'S node.\nconvertible: Value returned by the Intuit - SME'S node.\ndefaultValue: Value returned by the Intuit - SME'S node.",
          "usageExample": {
            "scenario": "Use Intuit - SME'S in a workflow and pass upstream data into update customer.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Credential Id": "cred_123",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com",
              "Amount": "1000",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update customer and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
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
