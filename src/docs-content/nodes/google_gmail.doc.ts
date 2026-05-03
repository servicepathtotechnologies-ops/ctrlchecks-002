import type { NodeDoc } from '../types';

export const googleGmailDoc: NodeDoc = {
  "slug": "google_gmail",
  "displayName": "Gmail",
  "category": "Communication",
  "logoUrl": "/icons/nodes/google_gmail.svg",
  "description": "Send/receive emails via Gmail API (OAuth) Use this node when a workflow needs gmail behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Open the Gmail developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Google Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.google.com/gmail/api/reference/rest",
  "resources": [
    {
      "name": "Operations",
      "description": "Gmail exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send with the Gmail node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "required": false,
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
              "placeholder": "john@example.com"
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": false,
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "required": false,
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Gmail message ID (required ONLY for get operation, not for send)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Gmail search query (for list/search operations)",
              "example": "from:example@gmail.com",
              "placeholder": "from:example@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Gmail node.\nconvertible: Value returned by the Gmail node.\ndefaultValue: Value returned by the Gmail node.",
          "usageExample": {
            "scenario": "Use Gmail in a workflow and pass upstream data into send.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Recipient Source": "manual_entry",
              "Recipient Emails": "john@example.com",
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A2:D100",
              "Use Ai Recipient Mapping": "false",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@gmail.com"
            },
            "expectedOutput": "The node runs send and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Gmail node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "required": false,
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
              "placeholder": "john@example.com"
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": false,
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "required": false,
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Gmail message ID (required ONLY for get operation, not for send)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Gmail search query (for list/search operations)",
              "example": "from:example@gmail.com",
              "placeholder": "from:example@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Gmail node.\nconvertible: Value returned by the Gmail node.\ndefaultValue: Value returned by the Gmail node.",
          "usageExample": {
            "scenario": "Use Gmail in a workflow and pass upstream data into list.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Recipient Source": "manual_entry",
              "Recipient Emails": "john@example.com",
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A2:D100",
              "Use Ai Recipient Mapping": "false",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@gmail.com"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Gmail node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "required": false,
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
              "placeholder": "john@example.com"
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": false,
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "required": false,
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Gmail message ID (required ONLY for get operation, not for send)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Gmail search query (for list/search operations)",
              "example": "from:example@gmail.com",
              "placeholder": "from:example@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Gmail node.\nconvertible: Value returned by the Gmail node.\ndefaultValue: Value returned by the Gmail node.",
          "usageExample": {
            "scenario": "Use Gmail in a workflow and pass upstream data into get.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Recipient Source": "manual_entry",
              "Recipient Emails": "john@example.com",
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A2:D100",
              "Use Ai Recipient Mapping": "false",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@gmail.com"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Gmail node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Recipient Source",
              "internalKey": "recipientSource",
              "type": "select",
              "required": false,
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
              "placeholder": "john@example.com"
            },
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": false,
              "description": "Optional fallback Spreadsheet ID — active when Recipient source is Extract from sheet and upstream data has no usable recipient rows. Leave empty if a Google Sheets node upstream already supplies rows.",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet tab name for optional inline fallback read (default Sheet1). Ignored unless Spreadsheet ID is set.",
              "example": "Sheet1",
              "placeholder": "Sheet1",
              "defaultValue": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Optional A1 range within the sheet for inline fallback (e.g. A2:D500). Empty reads the whole tab. Same format as the Google Sheets node.",
              "example": "A2:D100",
              "placeholder": "A2:D100"
            },
            {
              "name": "Use Ai Recipient Mapping",
              "internalKey": "useAiRecipientMapping",
              "type": "boolean",
              "required": false,
              "description": "When enabled, scan every cell in row objects for email addresses (not only columns named like \"email\"). Use when column headers are messy; still applies after upstream data or inline sheet fetch.",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@gmail.com",
              "placeholder": "your-email@gmail.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Gmail message ID (required ONLY for get operation, not for send)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Gmail search query (for list/search operations)",
              "example": "from:example@gmail.com",
              "placeholder": "from:example@gmail.com"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of results (for list/search)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Gmail node.\nconvertible: Value returned by the Gmail node.\ndefaultValue: Value returned by the Gmail node.",
          "usageExample": {
            "scenario": "Use Gmail in a workflow and pass upstream data into search.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Recipient Source": "manual_entry",
              "Recipient Emails": "john@example.com",
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A2:D100",
              "Use Ai Recipient Mapping": "false",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@gmail.com"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/gmail/api/reference/rest"
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
    "outlook",
    "slack_message",
    "email",
    "log_output",
    "telegram"
  ]
};
