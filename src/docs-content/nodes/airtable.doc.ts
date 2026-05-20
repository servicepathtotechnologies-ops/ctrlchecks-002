import type { NodeDoc } from '../types';

export const airtableDoc: NodeDoc = {
  "slug": "airtable",
  "displayName": "Airtable",
  "category": "Data",
  "logoUrl": "/icons/nodes/airtable.svg",
  "description": "Read, write, update, or delete records in Airtable bases and tables",
  "credentialType": "Airtable API Key",
  "credentialSetupSteps": [
    "Go to https://airtable.com/account → scroll to \"API\" section → click \"Create token\" (or \"Generate API key\" for legacy).",
    "Add scopes: data.records:read, data.records:write, schema.bases:read.",
    "Under \"Access\", add the bases you want to grant access to.",
    "Copy the Personal Access Token.",
    "In CtrlChecks, open Connections → Add Connection → Airtable → paste the token → Save."
  ],
  "credentialDocsUrl": "https://airtable.com/developers/web/api/introduction",
  "resources": [
    {
      "name": "Operations",
      "description": "Airtable exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Airtable node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field values for create/update",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Use Airtable to read in a workflow.",
            "inputValues": {
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Record Id": "recXXXXXXXXXXXXXX"
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new record in an Airtable table.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field values for create/update",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
            }
          ],
          "outputExample": {
            "id": "recNewXyz456",
            "fields": {
              "Name": "Bob",
              "Email": "bob@example.com",
              "Status": "New"
            },
            "createdTime": "2025-01-15T10:00:00Z"
          },
          "outputDescription": "id: The new Airtable record ID. fields: The data saved for this record. createdTime: When the record was created.",
          "usageExample": {
            "scenario": "Add a new lead to Airtable when a website form is submitted",
            "inputValues": {
              "baseId": "{{$env.AIRTABLE_BASE_ID}}",
              "tableId": "Leads",
              "fields": "{\"Name\": \"{{$json.name}}\", \"Email\": \"{{$json.email}}\", \"Source\": \"Website Form\", \"Date\": \"{{$now}}\"}"
            },
            "expectedOutput": "Record is created. `{{$json.id}}` is the Airtable record ID for future updates."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update an existing Airtable record by its record ID.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field values for create/update",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
            }
          ],
          "outputExample": {
            "id": "recAbc123",
            "fields": {
              "Name": "Alice",
              "Status": "Converted",
              "Close Date": "2025-01-15"
            }
          },
          "outputDescription": "id: The updated record ID. fields: All field values after the update.",
          "usageExample": {
            "scenario": "Mark an Airtable lead as Converted when a CRM deal is closed",
            "inputValues": {
              "baseId": "{{$env.AIRTABLE_BASE_ID}}",
              "tableId": "Leads",
              "recordId": "{{$json.recordId}}",
              "fields": "{\"Status\": \"Converted\", \"Close Date\": \"{{$now}}\"}"
            },
            "expectedOutput": "Record is updated with new field values."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete a record from an Airtable table by its record ID.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Airtable API key (required for authentication)",
              "example": "patXXXXXXXXXXXXXX",
              "placeholder": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Airtable OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "example": "appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "example": "tblXXXXXXXXXXXXXX",
              "placeholder": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "description": "Record ID (required for update/delete)",
              "example": "recXXXXXXXXXXXXXX",
              "placeholder": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field values for create/update",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
            }
          ],
          "outputExample": {
            "deleted": true,
            "id": "recAbc123"
          },
          "outputDescription": "deleted: true if the record was successfully removed. id: The ID of the deleted record.",
          "usageExample": {
            "scenario": "Remove a cancelled subscription record from Airtable",
            "inputValues": {
              "baseId": "{{$env.AIRTABLE_BASE_ID}}",
              "tableId": "Subscriptions",
              "recordId": "{{$json.recordId}}"
            },
            "expectedOutput": "`deleted: true` confirms the record was removed."
          },
          "externalDocsUrl": "https://airtable.com/developers/web/api/introduction"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Airtable node."
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
