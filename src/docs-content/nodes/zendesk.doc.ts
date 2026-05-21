import type { NodeDoc } from '../types';

export const zendeskDoc: NodeDoc = {
  "slug": "zendesk",
  "displayName": "Zendesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/zendesk.svg",
  "description": "Create, read, update, and delete Zendesk support tickets and manage users.",
  "credentialType": "Zendesk API Key",
  "credentialSetupSteps": [
    "What this is: Zendesk uses an API key or account connection so CtrlChecks can safely access your Zendesk account.",
    "Log in to your Zendesk admin panel at yoursubdomain.zendesk.com.",
    "Click Admin Center (gear icon, bottom left) -> Apps and Integrations -> APIs -> Zendesk API.",
    "Make sure \"Token Access\" is enabled (toggle it on if not). Click \"+ Add API token\" -> give it a description.",
    "Copy the API token shown. Note your Zendesk subdomain - it is the part before .zendesk.com (e.g. if URL is acme.zendesk.com, subdomain is acme).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Zendesk -> enter subdomain, your admin email address, and the API token -> Save.",
    "Run a test step (e.g. create a test ticket) to confirm it appears in Zendesk.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Zendesk node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developer.zendesk.com/documentation/ticketing/getting-started/hands-on-with-the-zendesk-api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Zendesk exposes operation choices directly.",
      "operations": [
        {
          "name": "Get tickets",
          "value": "get_tickets",
          "description": "Get tickets using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Get tickets.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Get tickets.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Get tickets.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Get tickets.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Get tickets.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Get tickets.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_tickets",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with get tickets after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured get tickets data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Get ticket",
          "value": "get_ticket",
          "description": "Get ticket using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Get ticket.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Get ticket.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Get ticket.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Get ticket.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Get ticket.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Get ticket.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_ticket",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with get ticket after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured get ticket data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Create ticket",
          "value": "create_ticket",
          "description": "Create ticket using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Create ticket.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Create ticket.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Create ticket.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Create ticket.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Create ticket.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Create ticket.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create_ticket",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with create ticket after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured create ticket data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Update ticket",
          "value": "update_ticket",
          "description": "Update ticket using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Update ticket.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Update ticket.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Update ticket.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Update ticket.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Update ticket.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Update ticket.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "update_ticket",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with update ticket after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured update ticket data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Delete ticket",
          "value": "delete_ticket",
          "description": "Delete ticket using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Delete ticket.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Delete ticket.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Delete ticket.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Delete ticket.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Delete ticket.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Delete ticket.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "delete_ticket",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with delete ticket after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured delete ticket data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Get users",
          "value": "get_users",
          "description": "Get users using the Zendesk node.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "helpText": "What this field is: Your Zendesk subdomain — the part before .zendesk.com in your URL.\nExample: If your Zendesk is at acme.zendesk.com, enter acme.",
              "placeholder": "Enter Subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "helpText": "What this field is: The email address that Zendesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zendesk.\nWhere to get it: Open the Zendesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "helpText": "What this field is: Ticket ID for Zendesk / Get users.\nWhere to find it: Open the item in Zendesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.ticketId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject",
              "helpText": "What this field is: Ticket subject for Zendesk / Get users.\nHow to fill it: Enter the subject value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Ticket body",
              "helpText": "What this field is: Ticket body for Zendesk / Get users.\nHow to fill it: Type the message, prompt, or content you want Zendesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "helpText": "What this field is: Ticket status for Zendesk / Get users.\nHow to fill it: Enter the status value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "open",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "helpText": "What this field is: Ticket priority for Zendesk / Get users.\nHow to fill it: Enter the priority value requested by Zendesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "normal",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "helpText": "What this field is: A number used for limit in Zendesk / Get users.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_users",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Zendesk data with get users after a related upstream event is received",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "Zendesk returns structured get users data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Zendesk node."
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
