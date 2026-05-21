import type { NodeDoc } from '../types';

export const pipedriveDoc: NodeDoc = {
  "slug": "pipedrive",
  "displayName": "Pipedrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/pipedrive.svg",
  "description": "Pipedrive CRM operations - manage deals, persons, organizations, and activities",
  "credentialType": "Pipedrive API Key",
  "credentialSetupSteps": [
    "What this is: Pipedrive uses an API key or account connection so CtrlChecks can safely access your Pipedrive account.",
    "Log in to your Pipedrive account at app.pipedrive.com.",
    "Click your profile photo or initials (top right) -> Personal Preferences.",
    "Click the \"API\" tab. Your API token is shown - copy it.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Pipedrive -> paste the API token -> Save.",
    "To find a deal ID for use in the node: open any deal in Pipedrive - the number in the browser URL (e.g. /deal/123) is the deal ID.",
    "Run a test step (e.g. search for a deal) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Pipedrive node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.pipedrive.com/docs/api/v1",
  "resources": [
    {
      "name": "Operations",
      "description": "Pipedrive exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pipedrive.\nWhere to get it: Open the Pipedrive dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-pipedrive-api-token",
              "example": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "helpText": "What this field is: Resource chooses the kind of Pipedrive item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Pipedrive.\nExample: In Pipedrive, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "deals",
              "example": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "helpText": "What this field is: Resource ID (required for get, update, delete) for Pipedrive / Get.\nWhere to find it: Open the item in Pipedrive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Resource data for create/update",
              "helpText": "What this field is: Resource data for create/update for Pipedrive / Get.\nHow to fill it: Enter valid JSON in the format Pipedrive expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Process incoming Pipedrive data with get after a related upstream event is received",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "Pipedrive returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pipedrive.\nWhere to get it: Open the Pipedrive dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-pipedrive-api-token",
              "example": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "helpText": "What this field is: Resource chooses the kind of Pipedrive item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Pipedrive.\nExample: In Pipedrive, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "deals",
              "example": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "helpText": "What this field is: Resource ID (required for get, update, delete) for Pipedrive / Create.\nWhere to find it: Open the item in Pipedrive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Resource data for create/update",
              "helpText": "What this field is: Resource data for create/update for Pipedrive / Create.\nHow to fill it: Enter valid JSON in the format Pipedrive expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Process incoming Pipedrive data with create after a related upstream event is received",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "Pipedrive returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pipedrive.\nWhere to get it: Open the Pipedrive dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-pipedrive-api-token",
              "example": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "helpText": "What this field is: Resource chooses the kind of Pipedrive item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Pipedrive.\nExample: In Pipedrive, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "deals",
              "example": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "helpText": "What this field is: Resource ID (required for get, update, delete) for Pipedrive / Update.\nWhere to find it: Open the item in Pipedrive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Resource data for create/update",
              "helpText": "What this field is: Resource data for create/update for Pipedrive / Update.\nHow to fill it: Enter valid JSON in the format Pipedrive expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Process incoming Pipedrive data with update after a related upstream event is received",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "Pipedrive returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pipedrive.\nWhere to get it: Open the Pipedrive dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-pipedrive-api-token",
              "example": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "helpText": "What this field is: Resource chooses the kind of Pipedrive item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Pipedrive.\nExample: In Pipedrive, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "deals",
              "example": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "helpText": "What this field is: Resource ID (required for get, update, delete) for Pipedrive / Delete.\nWhere to find it: Open the item in Pipedrive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Resource data for create/update",
              "helpText": "What this field is: Resource data for create/update for Pipedrive / Delete.\nHow to fill it: Enter valid JSON in the format Pipedrive expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Process incoming Pipedrive data with delete after a related upstream event is received",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "Pipedrive returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Pipedrive.\nWhere to get it: Open the Pipedrive dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-pipedrive-api-token",
              "example": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "helpText": "What this field is: Resource chooses the kind of Pipedrive item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Pipedrive.\nExample: In Pipedrive, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "deals",
              "example": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "helpText": "What this field is: Resource ID (required for get, update, delete) for Pipedrive / Search.\nWhere to find it: Open the item in Pipedrive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Resource data for create/update",
              "helpText": "What this field is: Resource data for create/update for Pipedrive / Search.\nHow to fill it: Enter valid JSON in the format Pipedrive expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Process incoming Pipedrive data with search after a related upstream event is received",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "Pipedrive returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Pipedrive node."
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
