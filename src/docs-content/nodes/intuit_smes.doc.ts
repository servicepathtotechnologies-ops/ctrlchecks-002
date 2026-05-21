import type { NodeDoc } from '../types';

export const intuitSmesDoc: NodeDoc = {
  "slug": "intuit_smes",
  "displayName": "Intuit - SME'S",
  "category": "Data",
  "logoUrl": "/icons/nodes/intuit_smes.svg",
  "description": "Intuit SME integration for managing customer data and financial operations via Intuit APIs",
  "credentialType": "Intuit Credential",
  "credentialSetupSteps": [
    "What this is: Intuit uses an OAuth connection so CtrlChecks can safely access your Intuit account.",
    "Go to developer.intuit.com and sign in with your Intuit/QuickBooks account.",
    "Click Dashboard -> Create an app -> select \"QuickBooks Online and Payments\".",
    "Give it a name (e.g. CtrlChecks) -> Create app.",
    "Under \"Keys & OAuth\", note the Client ID and Client Secret.",
    "Click \"Add URI\" under Redirect URIs and enter: http://localhost:3001/api/oauth/intuit/callback -> Save.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> QuickBooks -> click \"Connect with Intuit\" -> sign in -> authorize.",
    "Run a test step (e.g. list customers) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Intuit node and select the saved connection."
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
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-intuit-api-key",
              "example": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "helpText": "What this field is: Customer ID (required for customer-specific operations) for Intuit - SME'S / GetCustomers.\nWhere to find it: Open the item in Intuit - SME'S and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "CUST-123",
              "example": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "helpText": "What this field is: Customer name (for createCustomer operation) for Intuit - SME'S / GetCustomers.\nHow to fill it: Enter the name value requested by Intuit - SME'S, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Acme Corp",
              "example": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "helpText": "What this field is: The email address that Intuit - SME'S should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "contact@acme.com",
              "example": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "helpText": "What this field is: A number used for amount in Intuit - SME'S / GetCustomers.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Additional data for create/update operations",
              "helpText": "What this field is: Additional data for create/update operations for Intuit - SME'S / GetCustomers.\nHow to fill it: Enter valid JSON in the format Intuit - SME'S expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Process incoming Intuit - SME'S data with get customers after a related upstream event is received",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "Intuit - SME'S returns structured get customers data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-intuit-api-key",
              "example": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "helpText": "What this field is: Customer ID (required for customer-specific operations) for Intuit - SME'S / CreateInvoice.\nWhere to find it: Open the item in Intuit - SME'S and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "CUST-123",
              "example": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "helpText": "What this field is: Customer name (for createCustomer operation) for Intuit - SME'S / CreateInvoice.\nHow to fill it: Enter the name value requested by Intuit - SME'S, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Acme Corp",
              "example": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "helpText": "What this field is: The email address that Intuit - SME'S should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "contact@acme.com",
              "example": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "helpText": "What this field is: A number used for amount in Intuit - SME'S / CreateInvoice.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Additional data for create/update operations",
              "helpText": "What this field is: Additional data for create/update operations for Intuit - SME'S / CreateInvoice.\nHow to fill it: Enter valid JSON in the format Intuit - SME'S expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Process incoming Intuit - SME'S data with create invoice after a related upstream event is received",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "Intuit - SME'S returns structured create invoice data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-intuit-api-key",
              "example": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "helpText": "What this field is: Customer ID (required for customer-specific operations) for Intuit - SME'S / GetInvoices.\nWhere to find it: Open the item in Intuit - SME'S and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "CUST-123",
              "example": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "helpText": "What this field is: Customer name (for createCustomer operation) for Intuit - SME'S / GetInvoices.\nHow to fill it: Enter the name value requested by Intuit - SME'S, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Acme Corp",
              "example": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "helpText": "What this field is: The email address that Intuit - SME'S should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "contact@acme.com",
              "example": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "helpText": "What this field is: A number used for amount in Intuit - SME'S / GetInvoices.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Additional data for create/update operations",
              "helpText": "What this field is: Additional data for create/update operations for Intuit - SME'S / GetInvoices.\nHow to fill it: Enter valid JSON in the format Intuit - SME'S expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Process incoming Intuit - SME'S data with get invoices after a related upstream event is received",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "Intuit - SME'S returns structured get invoices data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-intuit-api-key",
              "example": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "helpText": "What this field is: Customer ID (required for customer-specific operations) for Intuit - SME'S / CreateCustomer.\nWhere to find it: Open the item in Intuit - SME'S and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "CUST-123",
              "example": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "helpText": "What this field is: Customer name (for createCustomer operation) for Intuit - SME'S / CreateCustomer.\nHow to fill it: Enter the name value requested by Intuit - SME'S, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Acme Corp",
              "example": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "helpText": "What this field is: The email address that Intuit - SME'S should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "contact@acme.com",
              "example": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "helpText": "What this field is: A number used for amount in Intuit - SME'S / CreateCustomer.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Additional data for create/update operations",
              "helpText": "What this field is: Additional data for create/update operations for Intuit - SME'S / CreateCustomer.\nHow to fill it: Enter valid JSON in the format Intuit - SME'S expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Process incoming Intuit - SME'S data with create customer after a related upstream event is received",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "Intuit - SME'S returns structured create customer data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Intuit API Key or Access Token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-intuit-api-key",
              "example": "your-intuit-api-key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Intuit OAuth2 Access Token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Intuit - SME'S.\nWhere to get it: Open the Intuit - SME'S dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Customer Id",
              "internalKey": "customerId",
              "type": "string",
              "required": false,
              "description": "Customer ID (required for customer-specific operations)",
              "helpText": "What this field is: Customer ID (required for customer-specific operations) for Intuit - SME'S / UpdateCustomer.\nWhere to find it: Open the item in Intuit - SME'S and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.customerId}} or pick the value from the data picker.",
              "placeholder": "CUST-123",
              "example": "CUST-123"
            },
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": false,
              "description": "Customer name (for createCustomer operation)",
              "helpText": "What this field is: Customer name (for createCustomer operation) for Intuit - SME'S / UpdateCustomer.\nHow to fill it: Enter the name value requested by Intuit - SME'S, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.name}} or pick the value from the data picker.",
              "placeholder": "Acme Corp",
              "example": "Acme Corp"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Customer email (for createCustomer operation)",
              "helpText": "What this field is: The email address that Intuit - SME'S should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "contact@acme.com",
              "example": "contact@acme.com"
            },
            {
              "name": "Amount",
              "internalKey": "amount",
              "type": "number",
              "required": false,
              "description": "Invoice amount (for createInvoice operation)",
              "helpText": "What this field is: A number used for amount in Intuit - SME'S / UpdateCustomer.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.amount}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Additional data for create/update operations",
              "helpText": "What this field is: Additional data for create/update operations for Intuit - SME'S / UpdateCustomer.\nHow to fill it: Enter valid JSON in the format Intuit - SME'S expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"contact@acme.com\"}"
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
            "scenario": "Process incoming Intuit - SME'S data with update customer after a related upstream event is received",
            "inputValues": {
              "Api Key": "your-intuit-api-key",
              "Access Token": "your-oauth-access-token",
              "Customer Id": "CUST-123",
              "Name": "Acme Corp",
              "Email": "contact@acme.com"
            },
            "expectedOutput": "Intuit - SME'S returns structured update customer data that downstream nodes can reference with {{$json.fieldName}}."
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
