import type { NodeDoc } from '../types';

export const hubspotDoc: NodeDoc = {
  "slug": "hubspot",
  "displayName": "HubSpot",
  "category": "Data",
  "logoUrl": "/icons/nodes/hubspot.svg",
  "description": "HubSpot CRM operations - create, update, retrieve, or search contacts, companies, deals, tickets, and other objects",
  "credentialType": "HubSpot API Key",
  "credentialSetupSteps": [
    "Log in to HubSpot → Settings (gear icon) → Integrations → Private Apps.",
    "Click \"Create private app\", give it a name, and under \"Scopes\" select the required ones (e.g. crm.objects.contacts.read/write).",
    "Click \"Create app\" and copy the Access Token.",
    "In CtrlChecks, open Connections → Add Connection → HubSpot → paste the Access Token → Save."
  ],
  "credentialDocsUrl": "https://developers.hubspot.com/docs/api/private-apps",
  "resources": [
    {
      "name": "Operations",
      "description": "HubSpot exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get a HubSpot CRM object (contact, company, or deal) by its ID.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "id": "12345",
            "properties": {
              "firstname": "Alice",
              "lastname": "Smith",
              "email": "alice@example.com",
              "hubspot_owner_id": "6789"
            },
            "createdAt": "2024-01-01T00:00:00Z"
          },
          "outputDescription": "id: HubSpot object ID. properties: All CRM properties. createdAt: When the record was created.",
          "usageExample": {
            "scenario": "Look up a HubSpot contact before updating their properties",
            "inputValues": {
              "objectType": "contacts",
              "objectId": "{{$json.contactId}}"
            },
            "expectedOutput": "Returns the full contact record."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "GetMany",
          "value": "getMany",
          "description": "GetMany using the HubSpot node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
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
            "scenario": "Use HubSpot to getmany in a workflow.",
            "inputValues": {
              "Resource": "contact",
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Id": "123456789",
              "Object Id": "123456789"
            },
            "expectedOutput": "The node executes getmany and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new contact, company, or deal in HubSpot.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "id": "new_12345",
            "properties": {
              "firstname": "Bob",
              "email": "bob@example.com",
              "hs_object_id": "new_12345"
            }
          },
          "outputDescription": "id: The new HubSpot record ID. properties: The properties set for the new record.",
          "usageExample": {
            "scenario": "Create a HubSpot contact when a new user signs up via a website form",
            "inputValues": {
              "objectType": "contacts",
              "properties": "{\"firstname\": \"{{$json.firstName}}\", \"lastname\": \"{{$json.lastName}}\", \"email\": \"{{$json.email}}\", \"source\": \"website_form\"}"
            },
            "expectedOutput": "Contact is created. `{{$json.id}}` is the HubSpot contact ID."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update properties on an existing HubSpot contact, company, or deal.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
            }
          ],
          "outputExample": {
            "id": "12345",
            "properties": {
              "lifecyclestage": "customer",
              "dealstage": "closedwon"
            }
          },
          "outputDescription": "id: The updated record ID. properties: The properties as they stand after the update.",
          "usageExample": {
            "scenario": "Move a HubSpot deal to \"Closed Won\" when a Stripe payment succeeds",
            "inputValues": {
              "objectType": "deals",
              "objectId": "{{$json.dealId}}",
              "properties": "{\"dealstage\": \"closedwon\", \"closedate\": \"{{$now}}\"}"
            },
            "expectedOutput": "Deal stage is updated in HubSpot."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the HubSpot node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
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
            "scenario": "Use HubSpot to delete in a workflow.",
            "inputValues": {
              "Resource": "contact",
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Id": "123456789",
              "Object Id": "123456789"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the HubSpot node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "HubSpot object type: contact, company, deal, ticket, product, line_item, quote, call, email, meeting, note, task, owner, pipeline",
              "example": "contact",
              "placeholder": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "HubSpot API key or Private App access token (required for authentication)",
              "example": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "placeholder": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "HubSpot OAuth2 access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Object ID (required for get, update, delete)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "description": "Alias for id (legacy field name)",
              "example": "123456789",
              "placeholder": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "description": "Object properties for create/update operations",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "description": "Search query (required for search operation)",
              "example": "email:test@example.com",
              "placeholder": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Number of records to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination token for next page",
              "example": "paging_token",
              "placeholder": "paging_token"
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
            "scenario": "Use HubSpot to search in a workflow.",
            "inputValues": {
              "Resource": "contact",
              "Api Key": "HUBSPOT_ACCESS_TOKEN_REPLACE_ME",
              "Access Token": "your-oauth-access-token",
              "Id": "123456789",
              "Object Id": "123456789"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.hubspot.com/docs/api/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the HubSpot node."
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
