import type { NodeDoc } from '../types';

export const zendeskDoc: NodeDoc = {
  "slug": "zendesk",
  "displayName": "Zendesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/zendesk.svg",
  "description": "Create, read, update, and delete Zendesk support tickets and manage users. Use this node when a workflow needs zendesk behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Api Token Credential",
  "credentialSetupSteps": [
    "Open the Zendesk developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Api Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.zendesk.com/api-reference/",
  "resources": [
    {
      "name": "Operations",
      "description": "Zendesk exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Tickets",
          "value": "get_tickets",
          "description": "Get Tickets with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into get tickets.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get tickets and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Get Ticket",
          "value": "get_ticket",
          "description": "Get Ticket with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into get ticket.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get ticket and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Create Ticket",
          "value": "create_ticket",
          "description": "Create Ticket with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into create ticket.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs create ticket and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Update Ticket",
          "value": "update_ticket",
          "description": "Update Ticket with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into update ticket.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs update ticket and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Delete Ticket",
          "value": "delete_ticket",
          "description": "Delete Ticket with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into delete ticket.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs delete ticket and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
        },
        {
          "name": "Get Users",
          "value": "get_users",
          "description": "Get Users with the Zendesk node using the configured input fields.",
          "fields": [
            {
              "name": "Subdomain",
              "internalKey": "subdomain",
              "type": "string",
              "required": true,
              "description": "Zendesk subdomain",
              "example": "{{ $json.subdomain }}",
              "defaultValue": ""
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": true,
              "description": "Agent email",
              "example": "{{ $json.email }}",
              "defaultValue": ""
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Zendesk API token",
              "example": "{{ $json.apiToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Ticket Id",
              "internalKey": "ticketId",
              "type": "string",
              "required": false,
              "description": "Ticket ID",
              "example": "{{ $json.ticketId }}",
              "defaultValue": ""
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject",
              "example": "{{ $json.subject }}",
              "defaultValue": ""
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Ticket body",
              "example": "{{ $json.description }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Ticket status",
              "example": "open",
              "defaultValue": "open"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Ticket priority",
              "example": "normal",
              "defaultValue": "normal"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Records per page",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "zendesk"
          },
          "outputDescription": "success: Indicates that the Zendesk node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Zendesk in a workflow and pass upstream data into get users.",
            "inputValues": {
              "Subdomain": "{{ $json.subdomain }}",
              "Email": "{{ $json.email }}",
              "Api Token": "{{ $json.apiToken }}",
              "Ticket Id": "{{ $json.ticketId }}",
              "Subject": "{{ $json.subject }}",
              "Description": "{{ $json.description }}",
              "Status": "open",
              "Priority": "normal",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get users and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.zendesk.com/api-reference/"
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
