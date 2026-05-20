import type { NodeDoc } from '../types';

export const intuitSmesDoc: NodeDoc = {
  "slug": "intuit_smes",
  "displayName": "Intuit - SME'S",
  "category": "Data",
  "logoUrl": "/icons/nodes/intuit_smes.svg",
  "description": "Intuit SME integration for managing customer data and financial operations via Intuit APIs",
  "credentialType": "Intuit Credential",
  "credentialSetupSteps": [
    "Go to https://developer.intuit.com → Dashboard → Create an app → \"QuickBooks Online and Payments\".",
    "Under \"Keys & OAuth\", note the Client ID and Client Secret.",
    "Add http://localhost:3001/api/oauth/intuit/callback as a Redirect URI.",
    "In CtrlChecks, open Connections → Add Connection → Intuit/QuickBooks → click \"Connect with Intuit\" → authorize."
  ],
  "credentialDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/get-started",
  "resources": [
    {
      "name": "Operations",
      "description": "Intuit - SME'S exposes operation choices directly.",
      "operations": [
        {
          "name": "GetCustomers",
          "value": "getCustomers",
          "description": "GetCustomers using the Intuit - SME'S node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Additional data for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Use Intuit - SME'S to getcustomers in a workflow.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "The node executes getcustomers and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "CreateInvoice",
          "value": "createInvoice",
          "description": "CreateInvoice using the Intuit - SME'S node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Additional data for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Use Intuit - SME'S to createinvoice in a workflow.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "The node executes createinvoice and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "GetInvoices",
          "value": "getInvoices",
          "description": "GetInvoices using the Intuit - SME'S node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Additional data for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Use Intuit - SME'S to getinvoices in a workflow.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "The node executes getinvoices and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "CreateCustomer",
          "value": "createCustomer",
          "description": "CreateCustomer using the Intuit - SME'S node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Additional data for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Use Intuit - SME'S to createcustomer in a workflow.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "The node executes createcustomer and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        },
        {
          "name": "UpdateCustomer",
          "value": "updateCustomer",
          "description": "UpdateCustomer using the Intuit - SME'S node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Intuit API Key or Access Token (required for authentication)",
              "example": "your-intuit-api-key",
              "placeholder": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "description": "Customer ID (required for customer-specific operations)",
              "example": "CUST-123",
              "placeholder": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "description": "Customer name (for createCustomer operation)",
              "example": "Acme Corp",
              "placeholder": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Customer email (for createCustomer operation)",
              "example": "contact@acme.com",
              "placeholder": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "description": "Invoice amount (for createInvoice operation)",
              "example": "1000",
              "placeholder": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Additional data for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Use Intuit - SME'S to updatecustomer in a workflow.",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "The node executes updatecustomer and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Intuit - SME'S node."
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
