import type { NodeDoc } from '../types';

export const outlookDoc: NodeDoc = {
  "slug": "outlook",
  "displayName": "Outlook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/outlook.svg",
  "description": "Send/receive emails via Microsoft Outlook API (OAuth) Use this node when a workflow needs outlook behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Microsoft Token, Microsoft Credential",
  "credentialSetupSteps": [
    "Open the Outlook developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Microsoft Token, Microsoft Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message",
  "resources": [
    {
      "name": "Operations",
      "description": "Outlook exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send with the Outlook node using the configured input fields.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
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
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "microsoft_oauth_123",
              "placeholder": "microsoft_oauth_123"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Outlook node.\nstructure: Value returned by the Outlook node.\nconvertible: Value returned by the Outlook node.\ndefaultValue: Value returned by the Outlook node.",
          "usageExample": {
            "scenario": "Use Outlook in a workflow and pass upstream data into send.",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token",
              "Credential Id": "microsoft_oauth_123",
              "Message Id": "abc123def456",
              "Query": "from:example@outlook.com",
              "Max Results": "10"
            },
            "expectedOutput": "The node runs send and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Outlook node using the configured input fields.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
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
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "microsoft_oauth_123",
              "placeholder": "microsoft_oauth_123"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Outlook node.\nstructure: Value returned by the Outlook node.\nconvertible: Value returned by the Outlook node.\ndefaultValue: Value returned by the Outlook node.",
          "usageExample": {
            "scenario": "Use Outlook in a workflow and pass upstream data into list.",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token",
              "Credential Id": "microsoft_oauth_123",
              "Message Id": "abc123def456",
              "Query": "from:example@outlook.com",
              "Max Results": "10"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Outlook node using the configured input fields.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
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
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "microsoft_oauth_123",
              "placeholder": "microsoft_oauth_123"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Outlook node.\nstructure: Value returned by the Outlook node.\nconvertible: Value returned by the Outlook node.\ndefaultValue: Value returned by the Outlook node.",
          "usageExample": {
            "scenario": "Use Outlook in a workflow and pass upstream data into get.",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token",
              "Credential Id": "microsoft_oauth_123",
              "Message Id": "abc123def456",
              "Query": "from:example@outlook.com",
              "Max Results": "10"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Outlook node using the configured input fields.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient email address (required for send operation)",
              "example": "recipient@example.com",
              "placeholder": "recipient@example.com"
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
              "example": "your-email@outlook.com",
              "placeholder": "your-email@outlook.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Outlook (if using OAuth authentication)",
              "example": "your-outlook-oauth-token",
              "placeholder": "your-outlook-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "microsoft_oauth_123",
              "placeholder": "microsoft_oauth_123"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Outlook message ID (required for get operation)",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Outlook search query (for list/search operations)",
              "example": "from:example@outlook.com",
              "placeholder": "from:example@outlook.com"
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
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Outlook node.\nstructure: Value returned by the Outlook node.\nconvertible: Value returned by the Outlook node.\ndefaultValue: Value returned by the Outlook node.",
          "usageExample": {
            "scenario": "Use Outlook in a workflow and pass upstream data into search.",
            "inputValues": {
              "To": "recipient@example.com",
              "Subject": "Hello",
              "Body": "Email content",
              "From": "your-email@outlook.com",
              "Access Token": "your-outlook-oauth-token",
              "Credential Id": "microsoft_oauth_123",
              "Message Id": "abc123def456",
              "Query": "from:example@outlook.com",
              "Max Results": "10"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/graph/api/resources/message"
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
    "google_gmail",
    "slack_message",
    "email",
    "log_output",
    "telegram"
  ]
};
