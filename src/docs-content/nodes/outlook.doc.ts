import type { NodeDoc } from '../types';

export const outlookDoc: NodeDoc = {
  "slug": "outlook",
  "displayName": "Outlook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/outlook.svg",
  "description": "Send/receive emails via Microsoft Outlook API (OAuth)",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "Go to Azure Portal → App registrations → New registration.",
    "Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.",
    "Under API Permissions, add Microsoft Graph: Mail.ReadWrite, Mail.Send.",
    "Create a client secret and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Outlook → enter Client ID, Secret, and Tenant ID → click \"Connect with Microsoft\" → authorize."
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
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Email subject (required for send operation)",
              "example": "Hello",
              "placeholder": "Hello"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Email body content (required for send operation)",
              "example": "Email content",
              "placeholder": "Email content"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender email address (optional - uses OAuth account if not provided)",
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
            "scenario": "Use Outlook to search in a workflow.",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
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
