import type { NodeDoc } from '../types';

export const freshdeskDoc: NodeDoc = {
  "slug": "freshdesk",
  "displayName": "Freshdesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/freshdesk.svg",
  "description": "Freshdesk support operations",
  "credentialType": "Freshdesk API Key",
  "credentialSetupSteps": [
    "Log in to Freshdesk → click your profile photo → Profile Settings.",
    "Your API key is shown under \"API KEY\" on the right side — copy it.",
    "In CtrlChecks, open Connections → Add Connection → Freshdesk → enter your subdomain and API key → Save."
  ],
  "credentialDocsUrl": "https://developers.freshdesk.com/api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Freshdesk exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "example": "ticket",
              "placeholder": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Ticket description (create)"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Requester email (create)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Freshdesk to get in a workflow.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "example": "ticket",
              "placeholder": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Ticket description (create)"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Requester email (create)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Freshdesk to create in a workflow.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "example": "ticket",
              "placeholder": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Ticket description (create)"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Requester email (create)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Freshdesk to update in a workflow.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "example": "ticket",
              "placeholder": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Ticket subject (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Ticket description (create)"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Requester email (create)",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Freshdesk to delete in a workflow.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Freshdesk node."
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
