import type { NodeDoc } from '../types';

export const airtableDoc: NodeDoc = {
  "slug": "airtable",
  "displayName": "Airtable",
  "category": "Data",
  "logoUrl": "/icons/nodes/airtable.svg",
  "description": "Read, write, update, or delete records in Airtable bases and tables",
  "credentialType": "Airtable API Key",
  "credentialSetupSteps": [
    "What this is: Airtable uses an API key or account connection so CtrlChecks can safely access your Airtable account.",
    "Go to airtable.com and sign in to your account.",
    "Click your profile photo (top right) -> Developer hub (or go to airtable.com/account -> API section).",
    "Click \"Personal access tokens\" -> Create new token. Give it a name (e.g. CtrlChecks).",
    "Add scopes: data.records:read and data.records:write. Under \"Access\", add the specific Base(s) you want CtrlChecks to access.",
    "Click \"Create token\". Copy the token - it starts with pat. and is shown only once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Airtable -> paste the pat. token -> Save.",
    "To find your Base ID: open the base in Airtable -> Help menu -> API documentation - the ID starting with \"app\" is shown at the top.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Airtable node and select the saved connection."
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
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "patXXXXXXXXXXXXXX",
              "example": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "helpText": "What this field is: The unique ID of your Airtable Base (your Airtable workspace/database).\nWhere to find it: Open your base in Airtable → click the Help (?) menu → API documentation. The Base ID is shown at the top of the page and in the URL. It always starts with \"app\".\nExample: appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX",
              "example": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "helpText": "What this field is: The name or ID of the specific table within your Airtable base.\nHow to find it: Open your base — the tab names at the top are your table names.\nExample: Contacts or Orders or Products\nNote: You can use the display name (e.g. Contacts) or the table ID (tblXXXXXX).",
              "placeholder": "tblXXXXXXXXXXXXXX",
              "example": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "helpText": "What this field is: Record ID (required for update/delete) for Airtable / Read.\nWhere to find it: Open the item in Airtable and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "recXXXXXXXXXXXXXX",
              "example": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "helpText": "What this field is: Field values for create/update for Airtable / Read.\nHow to fill it: Enter valid JSON in the format Airtable expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
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
            "scenario": "Process incoming Airtable data with read after a related upstream event is received",
            "inputValues": {
              "Api Key": "patXXXXXXXXXXXXXX",
              "Access Token": "your-oauth-access-token",
              "Base Id": "appXXXXXXXXXXXXXX",
              "Table Id": "tblXXXXXXXXXXXXXX",
              "Record Id": "recXXXXXXXXXXXXXX"
            },
            "expectedOutput": "Airtable returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "patXXXXXXXXXXXXXX",
              "example": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "helpText": "What this field is: The unique ID of your Airtable Base (your Airtable workspace/database).\nWhere to find it: Open your base in Airtable → click the Help (?) menu → API documentation. The Base ID is shown at the top of the page and in the URL. It always starts with \"app\".\nExample: appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX",
              "example": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "helpText": "What this field is: The name or ID of the specific table within your Airtable base.\nHow to find it: Open your base — the tab names at the top are your table names.\nExample: Contacts or Orders or Products\nNote: You can use the display name (e.g. Contacts) or the table ID (tblXXXXXX).",
              "placeholder": "tblXXXXXXXXXXXXXX",
              "example": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "helpText": "What this field is: Record ID (required for update/delete) for Airtable / Create.\nWhere to find it: Open the item in Airtable and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "recXXXXXXXXXXXXXX",
              "example": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "helpText": "What this field is: The data for the new record, as a JSON object.\nKeys must exactly match your Airtable column names.\nExample: {\"Name\":\"Alice Kumar\",\"Email\":\"alice@example.com\",\"Status\":\"New Lead\",\"Company\":\"Acme Corp\",\"Phone\":\"+14155552671\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
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
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "patXXXXXXXXXXXXXX",
              "example": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "helpText": "What this field is: The unique ID of your Airtable Base (your Airtable workspace/database).\nWhere to find it: Open your base in Airtable → click the Help (?) menu → API documentation. The Base ID is shown at the top of the page and in the URL. It always starts with \"app\".\nExample: appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX",
              "example": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "helpText": "What this field is: The name or ID of the specific table within your Airtable base.\nHow to find it: Open your base — the tab names at the top are your table names.\nExample: Contacts or Orders or Products\nNote: You can use the display name (e.g. Contacts) or the table ID (tblXXXXXX).",
              "placeholder": "tblXXXXXXXXXXXXXX",
              "example": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "helpText": "What this field is: The unique ID of the Airtable record to update.\nFormat: Starts with \"rec\" followed by letters and numbers. Example: recABCDEFGHIJ1234\nWhere to find it: Run an Airtable List or Get operation first — each record in the output has an \"id\" field.\nTip: Use {{$json.id}} from the previous step.",
              "placeholder": "recXXXXXXXXXXXXXX",
              "example": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "helpText": "What this field is: The fields to update on the existing record.\nExample: {\"Status\":\"Qualified\",\"Notes\":\"Followed up on 2025-01-15\"}",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
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
              "required": false,
              "description": "Airtable API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "patXXXXXXXXXXXXXX",
              "example": "patXXXXXXXXXXXXXX",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Airtable OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Airtable.\nWhere to get it: Open the Airtable dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Base Id",
              "internalKey": "baseId",
              "type": "string",
              "required": true,
              "description": "Airtable base ID",
              "helpText": "What this field is: The unique ID of your Airtable Base (your Airtable workspace/database).\nWhere to find it: Open your base in Airtable → click the Help (?) menu → API documentation. The Base ID is shown at the top of the page and in the URL. It always starts with \"app\".\nExample: appXXXXXXXXXXXXXX",
              "placeholder": "appXXXXXXXXXXXXXX",
              "example": "appXXXXXXXXXXXXXX"
            },
            {
              "name": "Table Id",
              "internalKey": "tableId",
              "type": "string",
              "required": true,
              "description": "Airtable table ID or name",
              "helpText": "What this field is: The name or ID of the specific table within your Airtable base.\nHow to find it: Open your base — the tab names at the top are your table names.\nExample: Contacts or Orders or Products\nNote: You can use the display name (e.g. Contacts) or the table ID (tblXXXXXX).",
              "placeholder": "tblXXXXXXXXXXXXXX",
              "example": "tblXXXXXXXXXXXXXX"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "string",
              "required": false,
              "description": "Record ID (required for update/delete)",
              "helpText": "What this field is: Record ID (required for update/delete) for Airtable / Delete.\nWhere to find it: Open the item in Airtable and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "recXXXXXXXXXXXXXX",
              "example": "recXXXXXXXXXXXXXX"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field values for create/update",
              "helpText": "What this field is: Field values for create/update for Airtable / Delete.\nHow to fill it: Enter valid JSON in the format Airtable expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"Name\":\"John Doe\",\"Email\":\"test@example.com\"}"
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
