import type { NodeDoc } from '../types';

export const outlookDoc: NodeDoc = {
  "slug": "outlook",
  "displayName": "Outlook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/outlook.svg",
  "description": "Send/receive emails via Microsoft Outlook API (OAuth)",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "What this is: Microsoft uses an OAuth connection so CtrlChecks can safely access your Microsoft account.",
    "Go to portal.azure.com and sign in with your Microsoft account.",
    "Go to Azure Active Directory -> App registrations -> New registration.",
    "Give it a name (e.g. CtrlChecks Email) -> set Redirect URI to: http://localhost:3001/api/oauth/microsoft/callback -> Register.",
    "Copy the Application (client) ID and Directory (tenant) ID.",
    "Go to Certificates & Secrets -> New client secret -> Add. Copy the secret VALUE immediately.",
    "Go to API permissions -> Add a permission -> Microsoft Graph -> Delegated -> add Mail.ReadWrite and Mail.Send.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Outlook -> enter Client ID, Secret, and Tenant ID -> Connect with Microsoft -> authorize.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Microsoft node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview",
  "resources": [
    {
      "name": "Operations",
      "description": "Outlook exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send an email via Microsoft Outlook.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "helpText": "What this field is: Who receives this email.\nHow to fill it: One email address, or multiple separated by semicolons.\nExample: client@company.com\nMultiple: alice@x.com; bob@y.com; carol@z.com\nTip: Use {{$json.email}} to pull from an earlier step.",
              "placeholder": "recipient@example.com",
              "example": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject (required for send operation)",
              "helpText": "What this field is: The email subject line.\nExample: Invoice #{{$json.invoiceNumber}} from Acme Corp",
              "placeholder": "Hello",
              "example": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (required for send operation)",
              "helpText": "What this field is: The full email body content.\nExample: Dear {{$json.name}}, please find your invoice attached. Total due: ${{$json.amount}}.",
              "placeholder": "Email content",
              "example": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "helpText": "What this field is: Sender email address (optional - uses OAuth account if not provided) for Outlook / Send.\nHow to fill it: Enter the from value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.from}} or pick the value from the data picker.",
              "placeholder": "your-email@outlook.com",
              "example": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Outlook.\nWhere to get it: Open the Outlook dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-outlook-oauth-token",
              "example": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "helpText": "What this field is: Outlook message ID (required for get operation) for Outlook / Send.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Outlook search query (for list/search operations)",
              "helpText": "What this field is: Outlook search query (for list/search operations) for Outlook / Send.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Outlook which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "from:example@outlook.com",
              "example": "from:example@outlook.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "helpText": "What this field is: A number used for max results in Outlook / Send.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "id": "AAMkAGI...",
            "subject": "Meeting Tomorrow",
            "sentDateTime": "2025-01-15T09:00:00Z"
          },
          "outputDescription": "id: Outlook message ID. subject: Subject of the sent email. sentDateTime: ISO timestamp when it was sent.",
          "usageExample": {
            "scenario": "Send a daily digest email to your team via Outlook",
            "inputValues": {
              "toRecipients": "team@company.com",
              "subject": "Daily Digest — {{$now}}",
              "body": "{{$json.digestContent}}"
            },
            "expectedOutput": "The email is sent. `{{$json.id}}` can be used to track the message."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List emails from an Outlook mailbox folder.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "helpText": "What this field is: The email address that Outlook should use for to.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "recipient@example.com",
              "example": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject (required for send operation)",
              "helpText": "What this field is: Email subject (required for send operation) for Outlook / List.\nHow to fill it: Enter the subject value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Hello",
              "example": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (required for send operation)",
              "helpText": "What this field is: Email body content (required for send operation) for Outlook / List.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Email content",
              "example": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "helpText": "What this field is: Sender email address (optional - uses OAuth account if not provided) for Outlook / List.\nHow to fill it: Enter the from value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.from}} or pick the value from the data picker.",
              "placeholder": "your-email@outlook.com",
              "example": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Outlook.\nWhere to get it: Open the Outlook dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-outlook-oauth-token",
              "example": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "helpText": "What this field is: Outlook message ID (required for get operation) for Outlook / List.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Outlook search query (for list/search operations)",
              "helpText": "What this field is: Outlook search query (for list/search operations) for Outlook / List.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Outlook which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "from:example@outlook.com",
              "example": "from:example@outlook.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "helpText": "What this field is: A number used for max results in Outlook / List.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "value": [
              {
                "id": "AAMkAGI...",
                "subject": "Re: Project Update",
                "from": {
                  "emailAddress": {
                    "address": "colleague@company.com"
                  }
                }
              }
            ]
          },
          "outputDescription": "value: Array of email objects. Each has id, subject, from (with address), and more.",
          "usageExample": {
            "scenario": "Retrieve unread emails from a specific Outlook folder",
            "inputValues": {
              "folder": "Inbox",
              "filter": "isRead eq false",
              "top": "20"
            },
            "expectedOutput": "Returns up to 20 unread emails. Process each with the Get operation to read the full body."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Fetch a specific Outlook email by its message ID.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "helpText": "What this field is: The email address that Outlook should use for to.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "recipient@example.com",
              "example": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject (required for send operation)",
              "helpText": "What this field is: Email subject (required for send operation) for Outlook / Get.\nHow to fill it: Enter the subject value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Hello",
              "example": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (required for send operation)",
              "helpText": "What this field is: Email body content (required for send operation) for Outlook / Get.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Email content",
              "example": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "helpText": "What this field is: Sender email address (optional - uses OAuth account if not provided) for Outlook / Get.\nHow to fill it: Enter the from value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.from}} or pick the value from the data picker.",
              "placeholder": "your-email@outlook.com",
              "example": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Outlook.\nWhere to get it: Open the Outlook dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-outlook-oauth-token",
              "example": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "helpText": "What this field is: The unique ID of an Outlook email.\nWhere to find it: Run an Outlook List or Search operation first — the output includes a messageId for each email.\nTip: Use {{$json.messageId}} from the previous step.",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Outlook search query (for list/search operations)",
              "helpText": "What this field is: Outlook search query (for list/search operations) for Outlook / Get.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Outlook which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "from:example@outlook.com",
              "example": "from:example@outlook.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "helpText": "What this field is: A number used for max results in Outlook / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "id": "AAMkAGI...",
            "subject": "Contract Terms",
            "body": {
              "content": "Please review the attached contract."
            },
            "receivedDateTime": "2025-01-14T15:00:00Z"
          },
          "outputDescription": "id: Outlook message ID. subject: Email subject. body.content: Full email body HTML or text. receivedDateTime: When the email was received.",
          "usageExample": {
            "scenario": "Read each email returned from an Outlook List operation",
            "inputValues": {
              "messageId": "{{$json.id}}"
            },
            "expectedOutput": "Full message with body content. Use `{{$json.body.content}}` downstream."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Outlook node.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "helpText": "What this field is: The email address that Outlook should use for to.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "recipient@example.com",
              "example": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject (required for send operation)",
              "helpText": "What this field is: Email subject (required for send operation) for Outlook / Search.\nHow to fill it: Enter the subject value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Hello",
              "example": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (required for send operation)",
              "helpText": "What this field is: Email body content (required for send operation) for Outlook / Search.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Email content",
              "example": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "helpText": "What this field is: Sender email address (optional - uses OAuth account if not provided) for Outlook / Search.\nHow to fill it: Enter the from value requested by Outlook, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.from}} or pick the value from the data picker.",
              "placeholder": "your-email@outlook.com",
              "example": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Outlook.\nWhere to get it: Open the Outlook dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-outlook-oauth-token",
              "example": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "helpText": "What this field is: Outlook message ID (required for get operation) for Outlook / Search.\nHow to fill it: Type the message, prompt, or content you want Outlook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Outlook search query (for list/search operations)",
              "helpText": "What this field is: Outlook search query (for list/search operations) for Outlook / Search.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Outlook which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "from:example@outlook.com",
              "example": "from:example@outlook.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "helpText": "What this field is: A number used for max results in Outlook / Search.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
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
            "scenario": "Process incoming Outlook data with search after a related upstream event is received",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token"
            },
            "expectedOutput": "Outlook returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Outlook node."
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
