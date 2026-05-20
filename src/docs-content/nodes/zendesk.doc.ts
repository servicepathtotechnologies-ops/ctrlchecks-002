import type { NodeDoc } from '../types';

export const zendeskDoc: NodeDoc = {
  "slug": "zendesk",
  "displayName": "Zendesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/zendesk.svg",
  "description": "Create, read, update, and delete Zendesk support tickets and manage users.",
  "credentialType": "Zendesk API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developer.zendesk.com/api-reference/",
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to get tickets in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes get tickets and exposes its result for downstream nodes."
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to get ticket in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes get ticket and exposes its result for downstream nodes."
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to create ticket in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes create ticket and exposes its result for downstream nodes."
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to update ticket in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes update ticket and exposes its result for downstream nodes."
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to delete ticket in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes delete ticket and exposes its result for downstream nodes."
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
              "description": "Zendesk subdomain"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": true,
              "description": "Zendesk API token"
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "description": "Ticket ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Ticket body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Ticket status",
              "example": "open",
              "placeholder": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Ticket priority",
              "example": "normal",
              "placeholder": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Records per page",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Zendesk to get users in a workflow.",
            "inputValues": {
              "Subdomain": "",
              "Email": "user@example.com",
              "Api Token": "",
              "Ticket Id": "abc123",
              "Subject": ""
            },
            "expectedOutput": "The node executes get users and exposes its result for downstream nodes."
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
