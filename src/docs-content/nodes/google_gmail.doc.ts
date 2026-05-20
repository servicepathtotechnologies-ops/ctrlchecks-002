import type { NodeDoc } from '../types';

export const googleGmailDoc: NodeDoc = {
  "slug": "google_gmail",
  "displayName": "Gmail",
  "category": "Communication",
  "logoUrl": "/icons/nodes/google_gmail.svg",
  "description": "Send/receive emails via Gmail API (OAuth)",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
  "resources": [
    {
      "name": "Operations",
      "description": "Gmail exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send an email to one or more recipients via Gmail.",
          "fields": [
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "description": "How recipients are chosen when sending. Manual: type addresses in Recipient emails. Extract from sheet: runtime uses upstream row data first (typically from a Google Sheets node before Gmail). If upstream has no usable emails, optional inline spreadsheet ID + sheet/range on this node fetches via Google Sheets API (same Google account as Gmail). Precedence: upstream wins; inline fetch is only a fallback.",
              "example": "manual_entry",
              "placeholder": "manual_entry",
              "defaultValue": "manual_entry",
              "options": [
                "Manually enter recipient email(s)",
                "Extract recipient email(s) from Google Sheets output"
              ]
            },
            {
              "name": "Recipient Emails",
              "internalKey": "recipientEmails",
              "type": "email",
              "required": false,
              "description": "Recipient email address(es), comma- or newline-separated (e.g. a@x.com, b@y.com). Active when Recipient source is Manual entry. If Extract from sheet is selected, this field is optional — the workflow supplies emails from upstream nodes.",
              "example": "john@example.com",
              "placeholder": "john@example.com",
              "notes": "Required when recipientSource is \"manual_entry\"."
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "messageId": "18abc123def456",
            "threadId": "18abc123def456",
            "labelIds": [
              "SENT"
            ]
          },
          "outputDescription": "messageId: Unique Gmail message ID — use this to reference the sent message. threadId: The email thread ID. labelIds: Gmail labels applied to the sent message.",
          "usageExample": {
            "scenario": "Send a personalised welcome email to a new user after form sign-up",
            "inputValues": {
              "recipientEmails": "{{$json.email}}",
              "subject": "Welcome to CtrlChecks, {{$json.name}}!",
              "body": "Hi {{$json.name}},\n\nYour account is ready. Visit your dashboard to get started.\n\nCheers,\nThe CtrlChecks Team"
            },
            "expectedOutput": "The email is delivered to the recipient. `{{$json.messageId}}` is available for logging or referencing in a downstream database write."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List email messages from the connected Gmail inbox, optionally filtered by a query.",
          "fields": [
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "description": "How recipients are chosen when sending. Manual: type addresses in Recipient emails. Extract from sheet: runtime uses upstream row data first (typically from a Google Sheets node before Gmail). If upstream has no usable emails, optional inline spreadsheet ID + sheet/range on this node fetches via Google Sheets API (same Google account as Gmail). Precedence: upstream wins; inline fetch is only a fallback.",
              "example": "manual_entry",
              "placeholder": "manual_entry",
              "defaultValue": "manual_entry",
              "options": [
                "Manually enter recipient email(s)",
                "Extract recipient email(s) from Google Sheets output"
              ]
            },
            {
              "name": "Recipient Emails",
              "internalKey": "recipientEmails",
              "type": "email",
              "required": false,
              "description": "Recipient email address(es), comma- or newline-separated (e.g. a@x.com, b@y.com). Active when Recipient source is Manual entry. If Extract from sheet is selected, this field is optional — the workflow supplies emails from upstream nodes.",
              "example": "john@example.com",
              "placeholder": "john@example.com",
              "notes": "Required when recipientSource is \"manual_entry\"."
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "messages": [
              {
                "id": "18abc1",
                "threadId": "18abc1",
                "snippet": "Hi, I have a question about..."
              },
              {
                "id": "18abc2",
                "threadId": "18abc2",
                "snippet": "Your invoice for January..."
              }
            ],
            "resultSizeEstimate": 2
          },
          "outputDescription": "messages: Array of message objects. Each has id, threadId, and snippet. resultSizeEstimate: Approximate total number of matching messages.",
          "usageExample": {
            "scenario": "Fetch unread support emails and create Jira tickets for each",
            "inputValues": {
              "query": "is:unread label:support",
              "maxResults": "10"
            },
            "expectedOutput": "Returns up to 10 unread emails. Loop over `{{$json.messages}}` and use each message id in a Gmail Get node to fetch the full content."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Fetch the full content of a specific Gmail message by its ID.",
          "fields": [
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "description": "How recipients are chosen when sending. Manual: type addresses in Recipient emails. Extract from sheet: runtime uses upstream row data first (typically from a Google Sheets node before Gmail). If upstream has no usable emails, optional inline spreadsheet ID + sheet/range on this node fetches via Google Sheets API (same Google account as Gmail). Precedence: upstream wins; inline fetch is only a fallback.",
              "example": "manual_entry",
              "placeholder": "manual_entry",
              "defaultValue": "manual_entry",
              "options": [
                "Manually enter recipient email(s)",
                "Extract recipient email(s) from Google Sheets output"
              ]
            },
            {
              "name": "Recipient Emails",
              "internalKey": "recipientEmails",
              "type": "email",
              "required": false,
              "description": "Recipient email address(es), comma- or newline-separated (e.g. a@x.com, b@y.com). Active when Recipient source is Manual entry. If Extract from sheet is selected, this field is optional — the workflow supplies emails from upstream nodes.",
              "example": "john@example.com",
              "placeholder": "john@example.com",
              "notes": "Required when recipientSource is \"manual_entry\"."
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": true,
              "description": "Gmail message ID (required ONLY for get operation, not for send)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "id": "18abc123",
            "subject": "Invoice #1234",
            "from": "billing@vendor.com",
            "to": "me@company.com",
            "body": "Please find attached your invoice for January.",
            "date": "2025-01-15T08:00:00Z"
          },
          "outputDescription": "id: The Gmail message ID. subject: Email subject. from: Sender address. to: Recipient address. body: Full email body text. date: When the email was received.",
          "usageExample": {
            "scenario": "Read the full body of each email returned by a Gmail List node",
            "inputValues": {
              "messageId": "{{$json.id}}"
            },
            "expectedOutput": "Returns the full message with body text. Use `{{$json.body}}` in a downstream AI or text processing node."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search Gmail messages using Gmail search syntax (same as the Gmail search bar).",
          "fields": [
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "description": "How recipients are chosen when sending. Manual: type addresses in Recipient emails. Extract from sheet: runtime uses upstream row data first (typically from a Google Sheets node before Gmail). If upstream has no usable emails, optional inline spreadsheet ID + sheet/range on this node fetches via Google Sheets API (same Google account as Gmail). Precedence: upstream wins; inline fetch is only a fallback.",
              "example": "manual_entry",
              "placeholder": "manual_entry",
              "defaultValue": "manual_entry",
              "options": [
                "Manually enter recipient email(s)",
                "Extract recipient email(s) from Google Sheets output"
              ]
            },
            {
              "name": "Recipient Emails",
              "internalKey": "recipientEmails",
              "type": "email",
              "required": false,
              "description": "Recipient email address(es), comma- or newline-separated (e.g. a@x.com, b@y.com). Active when Recipient source is Manual entry. If Extract from sheet is selected, this field is optional — the workflow supplies emails from upstream nodes.",
              "example": "john@example.com",
              "placeholder": "john@example.com",
              "notes": "Required when recipientSource is \"manual_entry\"."
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Gmail search query (for list/search operations)",
              "example": "from:example@gmail.com",
              "placeholder": "from:example@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "messages": [
              {
                "id": "18abc9",
                "threadId": "18abc9",
                "snippet": "Your order has shipped..."
              }
            ],
            "resultSizeEstimate": 1
          },
          "outputDescription": "messages: Array of messages matching the search query. resultSizeEstimate: Approximate total matches.",
          "usageExample": {
            "scenario": "Find all emails from a specific sender in the last 7 days",
            "inputValues": {
              "query": "from:vendor@example.com newer_than:7d",
              "maxResults": "25"
            },
            "expectedOutput": "Returns messages matching the query. Process each result with a Gmail Get node to access the full email content."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Gmail node."
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
