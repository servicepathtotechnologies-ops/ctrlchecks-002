import type { NodeDoc } from '../types';

export const hubspotDoc: NodeDoc = {
  "slug": "hubspot",
  "displayName": "HubSpot",
  "category": "Data",
  "logoUrl": "/icons/nodes/hubspot.svg",
  "description": "HubSpot CRM operations - create, update, retrieve, or search contacts, companies, deals, tickets, and other objects",
  "credentialType": "HubSpot API Key",
  "credentialSetupSteps": [
    "What this is: HubSpot uses an API key or account connection so CtrlChecks can safely access your HubSpot account.",
    "Log in to your HubSpot account at app.hubspot.com.",
    "Click the Settings gear icon (top right) -> Integrations -> Private Apps.",
    "Click \"Create a private app\". Give it a name like CtrlChecks Integration.",
    "Go to the \"Scopes\" tab. Add the scopes you need: crm.objects.contacts.read and crm.objects.contacts.write for contacts; crm.objects.deals.read and crm.objects.deals.write for deals. Add more as needed.",
    "Click \"Create app\" -> confirm. Copy the Access Token shown - it starts with pat-na1- (or similar region prefix).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> HubSpot -> paste the access token -> Save.",
    "Run a test step (e.g. search for a contact by email) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the HubSpot node and select the saved connection."
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "helpText": "What this field is: Object ID (required for get, update, delete) for HubSpot / Get.\nWhere to find it: Open the item in HubSpot and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "helpText": "What this field is: The HubSpot record ID — a unique number for each record.\nWhere to find it: Open the record in HubSpot — the ID is in the browser URL after /contact/ or /deal/ or /company/.\nExample: app.hubspot.com/contacts/[portalId]/contact/12345678 → ID is 12345678\nTip: Use {{$json.hs_object_id}} from a previous HubSpot search step.",
              "placeholder": "123456789",
              "example": "123456789"
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "helpText": "What this field is: A number used for limit in HubSpot / GetMany.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "helpText": "What this field is: Pagination token for next page for HubSpot / GetMany.\nHow to fill it: Enter the after value requested by HubSpot, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.after}} or pick the value from the data picker.",
              "placeholder": "paging_token",
              "example": "paging_token"
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
            "scenario": "Process incoming HubSpot data with get many after a related upstream event is received",
            "inputValues": {
              "Resource": "contact",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "HubSpot returns structured get many data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "helpText": "What this field is: The record data to create in HubSpot. Use HubSpot internal property names (NOT the display labels you see in the UI).\nWhere to find internal names: HubSpot → Settings (gear icon) → Properties → select the object type → click any property → see \"Internal name\".\nContact example: {\"email\":\"alice@example.com\",\"firstname\":\"Alice\",\"lastname\":\"Kumar\",\"phone\":\"+14155552671\",\"company\":\"Acme Corp\",\"jobtitle\":\"Marketing Manager\",\"lifecyclestage\":\"lead\"}\nDeal example: {\"dealname\":\"Enterprise License - Acme Corp\",\"amount\":\"50000\",\"pipeline\":\"default\",\"dealstage\":\"appointmentscheduled\",\"closedate\":\"2025-06-30\"}\nCompany example: {\"name\":\"Acme Corp\",\"domain\":\"acmecorp.com\",\"industry\":\"COMPUTER_SOFTWARE\",\"city\":\"San Francisco\",\"country\":\"United States\"}\nCommon contact fields: email, firstname, lastname, phone, company, jobtitle, website, lifecyclestage\nCommon deal stages: appointmentscheduled, qualifiedtobuy, presentationscheduled, contractsent, closedwon, closedlost",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "helpText": "What this field is: Object ID (required for get, update, delete) for HubSpot / Update.\nWhere to find it: Open the item in HubSpot and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "helpText": "What this field is: The HubSpot record ID — a unique number for each record.\nWhere to find it: Open the record in HubSpot — the ID is in the browser URL after /contact/ or /deal/ or /company/.\nExample: app.hubspot.com/contacts/[portalId]/contact/12345678 → ID is 12345678\nTip: Use {{$json.hs_object_id}} from a previous HubSpot search step.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "json",
              "required": false,
              "description": "Object properties for create/update operations",
              "helpText": "What this field is: HubSpot properties are the fields CtrlChecks sends when update runs for the selected HubSpot resource.\nWhere to find property names: In HubSpot, open Settings -> Properties, choose the object type, and copy the internal property name.\nContact example: {\"email\":\"alice@example.com\",\"firstname\":\"Alice\",\"lastname\":\"Kumar\",\"phone\":\"+919876543210\"}\nDeal example: {\"dealname\":\"Website redesign\",\"amount\":\"25000\",\"pipeline\":\"default\",\"dealstage\":\"appointmentscheduled\"}\nDynamic example: {\"email\":\"{{$json.email}}\",\"firstname\":\"{{$json.firstName}}\"}\nCommon mistake: Use HubSpot internal names such as firstname, not only the visible label such as First name.",
              "placeholder": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}",
              "example": "{\"email\":\"test@example.com\",\"firstname\":\"John\",\"lastname\":\"Doe\"}"
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Object ID (required for get, update, delete)",
              "helpText": "What this field is: Object ID (required for get, update, delete) for HubSpot / Delete.\nWhere to find it: Open the item in HubSpot and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
            },
            {
              "name": "Object Id",
              "internalKey": "objectId",
              "type": "string",
              "required": false,
              "description": "Alias for id (legacy field name)",
              "helpText": "What this field is: The HubSpot record ID — a unique number for each record.\nWhere to find it: Open the record in HubSpot — the ID is in the browser URL after /contact/ or /deal/ or /company/.\nExample: app.hubspot.com/contacts/[portalId]/contact/12345678 → ID is 12345678\nTip: Use {{$json.hs_object_id}} from a previous HubSpot search step.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming HubSpot data with delete after a related upstream event is received",
            "inputValues": {
              "Resource": "contact",
              "Id": "123456789",
              "Object Id": "123456789"
            },
            "expectedOutput": "HubSpot returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The type of HubSpot record to work with.\nOptions:\n  contact  →  for people (customers, leads, contacts)\n  company  →  for businesses and organizations\n  deal     →  for sales opportunities and pipeline stages\n  ticket   →  for support cases\nExample: Choose \"contact\" to create or update a person in HubSpot.",
              "placeholder": "contact",
              "example": "contact",
              "defaultValue": "contact"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query (required for search operation)",
              "helpText": "What this field is: Search query (required for search operation) for HubSpot / Search.\nHow to fill it: Enter the search, filter, SQL, or API query that tells HubSpot which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.searchQuery}} or pick the value from the data picker.",
              "placeholder": "email:test@example.com",
              "example": "email:test@example.com"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Number of records to return",
              "helpText": "What this field is: A number used for limit in HubSpot / Search.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination token for next page",
              "helpText": "What this field is: Pagination token for next page for HubSpot / Search.\nHow to fill it: Enter the after value requested by HubSpot, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.after}} or pick the value from the data picker.",
              "placeholder": "paging_token",
              "example": "paging_token"
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
            "scenario": "Process incoming HubSpot data with search after a related upstream event is received",
            "inputValues": {
              "Resource": "contact",
              "Search Query": "email:test@example.com",
              "Limit": "10",
              "After": "paging_token"
            },
            "expectedOutput": "HubSpot returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
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
