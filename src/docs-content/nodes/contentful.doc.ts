import type { NodeDoc } from '../types';

export const contentfulDoc: NodeDoc = {
  "slug": "contentful",
  "displayName": "Contentful",
  "category": "Data",
  "logoUrl": "/icons/nodes/contentful.svg",
  "description": "Create, read, update, and delete content entries on any Contentful space.",
  "credentialType": "Contentful API Key",
  "credentialSetupSteps": [
    "What this is: Contentful uses an API key or account connection so CtrlChecks can safely access your Contentful account.",
    "Log in to your Contentful account at app.contentful.com.",
    "Go to your Space -> Settings -> API keys -> Add API key.",
    "Give it a name (e.g. CtrlChecks) -> Save.",
    "Copy two values: the Space ID (shown at the top) and the Content Delivery API access token (for reading) or Content Management API token (for writing).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Contentful -> paste the Space ID and relevant API token -> Save.",
    "Run a test step (e.g. list entries) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Contentful node and select the saved connection."
  ],
  "credentialDocsUrl": "https://www.contentful.com/developers/docs/references/authentication/",
  "resources": [
    {
      "name": "Operations",
      "description": "Contentful exposes operation choices directly.",
      "operations": [
        {
          "name": "Get entries",
          "value": "get_entries",
          "description": "Get entries using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "helpText": "What this field is: Your Contentful space ID — identifies your content workspace.\nWhere to find it: Contentful Dashboard → Settings → General Settings → Space ID.\nExample: abcd1234efgh",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Contentful.\nWhere to get it: Open the Contentful dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "helpText": "What this field is: Contentful environment for Contentful / Get entries.\nHow to fill it: Enter the environment value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "master",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "required": false,
              "description": "Content type ID",
              "helpText": "What this field is: Content type ID for Contentful / Get entries.\nHow to fill it: Type the message, prompt, or content you want Contentful to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content Type"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "helpText": "What this field is: Entry ID for Contentful / Get entries.\nWhere to find it: Open the item in Contentful and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.entryId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "helpText": "What this field is: JSON string of entry fields for Contentful / Get entries.\nHow to fill it: Enter the fields value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "Enter Fields"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_entries",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Contentful data with get entries after a related upstream event is received",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "Contentful returns structured get entries data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Get entry",
          "value": "get_entry",
          "description": "Get entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "helpText": "What this field is: Your Contentful space ID — identifies your content workspace.\nWhere to find it: Contentful Dashboard → Settings → General Settings → Space ID.\nExample: abcd1234efgh",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Contentful.\nWhere to get it: Open the Contentful dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "helpText": "What this field is: Contentful environment for Contentful / Get entry.\nHow to fill it: Enter the environment value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "master",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "required": false,
              "description": "Content type ID",
              "helpText": "What this field is: Content type ID for Contentful / Get entry.\nHow to fill it: Type the message, prompt, or content you want Contentful to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content Type"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "helpText": "What this field is: Entry ID for Contentful / Get entry.\nWhere to find it: Open the item in Contentful and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.entryId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "helpText": "What this field is: JSON string of entry fields for Contentful / Get entry.\nHow to fill it: Enter the fields value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "Enter Fields"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_entry",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Contentful data with get entry after a related upstream event is received",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "Contentful returns structured get entry data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Create entry",
          "value": "create_entry",
          "description": "Create entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "helpText": "What this field is: Your Contentful space ID — identifies your content workspace.\nWhere to find it: Contentful Dashboard → Settings → General Settings → Space ID.\nExample: abcd1234efgh",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Contentful.\nWhere to get it: Open the Contentful dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "helpText": "What this field is: Contentful environment for Contentful / Create entry.\nHow to fill it: Enter the environment value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "master",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "required": false,
              "description": "Content type ID",
              "helpText": "What this field is: Content type ID for Contentful / Create entry.\nHow to fill it: Type the message, prompt, or content you want Contentful to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content Type"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "helpText": "What this field is: Entry ID for Contentful / Create entry.\nWhere to find it: Open the item in Contentful and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.entryId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "helpText": "What this field is: JSON string of entry fields for Contentful / Create entry.\nHow to fill it: Enter the fields value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "Enter Fields"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create_entry",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Contentful data with create entry after a related upstream event is received",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "Contentful returns structured create entry data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Update entry",
          "value": "update_entry",
          "description": "Update entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "helpText": "What this field is: Your Contentful space ID — identifies your content workspace.\nWhere to find it: Contentful Dashboard → Settings → General Settings → Space ID.\nExample: abcd1234efgh",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Contentful.\nWhere to get it: Open the Contentful dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "helpText": "What this field is: Contentful environment for Contentful / Update entry.\nHow to fill it: Enter the environment value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "master",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "required": false,
              "description": "Content type ID",
              "helpText": "What this field is: Content type ID for Contentful / Update entry.\nHow to fill it: Type the message, prompt, or content you want Contentful to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content Type"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "helpText": "What this field is: Entry ID for Contentful / Update entry.\nWhere to find it: Open the item in Contentful and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.entryId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "helpText": "What this field is: JSON string of entry fields for Contentful / Update entry.\nHow to fill it: Enter the fields value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "Enter Fields"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "update_entry",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Contentful data with update entry after a related upstream event is received",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "Contentful returns structured update entry data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Delete entry",
          "value": "delete_entry",
          "description": "Delete entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "helpText": "What this field is: Your Contentful space ID — identifies your content workspace.\nWhere to find it: Contentful Dashboard → Settings → General Settings → Space ID.\nExample: abcd1234efgh",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Contentful.\nWhere to get it: Open the Contentful dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "helpText": "What this field is: Contentful environment for Contentful / Delete entry.\nHow to fill it: Enter the environment value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.environment}} or pick the value from the data picker.",
              "placeholder": "master",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "required": false,
              "description": "Content type ID",
              "helpText": "What this field is: Content type ID for Contentful / Delete entry.\nHow to fill it: Type the message, prompt, or content you want Contentful to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content Type"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "helpText": "What this field is: Entry ID for Contentful / Delete entry.\nWhere to find it: Open the item in Contentful and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.entryId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "helpText": "What this field is: JSON string of entry fields for Contentful / Delete entry.\nHow to fill it: Enter the fields value requested by Contentful, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "Enter Fields"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "delete_entry",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Contentful data with delete entry after a related upstream event is received",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "Contentful returns structured delete entry data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Contentful node."
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
