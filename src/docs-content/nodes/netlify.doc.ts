import type { NodeDoc } from '../types';

export const netlifyDoc: NodeDoc = {
  "slug": "netlify",
  "displayName": "Netlify",
  "category": "Data",
  "logoUrl": "/icons/nodes/netlify.svg",
  "description": "Deploy sites, manage builds, and query site/deploy data through the Netlify REST API.",
  "credentialType": "Netlify API Key",
  "credentialSetupSteps": [
    "What this is: Netlify uses an API key or account connection so CtrlChecks can safely access your Netlify account.",
    "Go to app.netlify.com and sign in to your account.",
    "Click your profile photo (top right) -> User settings -> Applications.",
    "Under \"Personal access tokens\", click \"New access token\" -> give it a description -> Generate token.",
    "Copy the token shown - it is only displayed once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Netlify -> paste the token -> Save.",
    "Run a test step (e.g. list your sites) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Netlify node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.netlify.com/api/get-started/",
  "resources": [
    {
      "name": "Operations",
      "description": "Netlify exposes operation choices directly.",
      "operations": [
        {
          "name": "List sites",
          "value": "list_sites",
          "description": "List sites using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Netlify Personal Access Token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Netlify.\nWhere to get it: Open the Netlify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "helpText": "What this field is: Resource chooses the kind of Netlify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Netlify.\nExample: In Netlify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "sites",
              "example": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "helpText": "What this field is: Site ID for Netlify / List sites.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.siteId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "helpText": "What this field is: Deploy ID for Netlify / List sites.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.deployId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "helpText": "What this field is: Request body for create_deploy for Netlify / List sites.\nHow to fill it: Enter valid JSON in the format Netlify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "helpText": "What this field is: A number used for limit in Netlify / List sites.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "list_sites",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Netlify data with list sites after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Netlify returns structured list sites data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get site",
          "value": "get_site",
          "description": "Get site using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Netlify Personal Access Token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Netlify.\nWhere to get it: Open the Netlify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "helpText": "What this field is: Resource chooses the kind of Netlify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Netlify.\nExample: In Netlify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "sites",
              "example": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "helpText": "What this field is: Site ID for Netlify / Get site.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.siteId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "helpText": "What this field is: Deploy ID for Netlify / Get site.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.deployId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "helpText": "What this field is: Request body for create_deploy for Netlify / Get site.\nHow to fill it: Enter valid JSON in the format Netlify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "helpText": "What this field is: A number used for limit in Netlify / Get site.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_site",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Netlify data with get site after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Netlify returns structured get site data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Create deploy",
          "value": "create_deploy",
          "description": "Create deploy using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Netlify Personal Access Token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Netlify.\nWhere to get it: Open the Netlify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "helpText": "What this field is: Resource chooses the kind of Netlify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Netlify.\nExample: In Netlify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "sites",
              "example": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "helpText": "What this field is: Site ID for Netlify / Create deploy.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.siteId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "helpText": "What this field is: Deploy ID for Netlify / Create deploy.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.deployId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "helpText": "What this field is: Request body for create_deploy for Netlify / Create deploy.\nHow to fill it: Enter valid JSON in the format Netlify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "helpText": "What this field is: A number used for limit in Netlify / Create deploy.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create_deploy",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Netlify data with create deploy after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Netlify returns structured create deploy data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "List deploys",
          "value": "list_deploys",
          "description": "List deploys using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Netlify Personal Access Token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Netlify.\nWhere to get it: Open the Netlify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "helpText": "What this field is: Resource chooses the kind of Netlify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Netlify.\nExample: In Netlify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "sites",
              "example": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "helpText": "What this field is: Site ID for Netlify / List deploys.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.siteId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "helpText": "What this field is: Deploy ID for Netlify / List deploys.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.deployId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "helpText": "What this field is: Request body for create_deploy for Netlify / List deploys.\nHow to fill it: Enter valid JSON in the format Netlify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "helpText": "What this field is: A number used for limit in Netlify / List deploys.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "list_deploys",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Netlify data with list deploys after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Netlify returns structured list deploys data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get deploy",
          "value": "get_deploy",
          "description": "Get deploy using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Netlify Personal Access Token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Netlify.\nWhere to get it: Open the Netlify dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "helpText": "What this field is: Resource chooses the kind of Netlify item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Netlify.\nExample: In Netlify, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "sites",
              "example": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "helpText": "What this field is: Site ID for Netlify / Get deploy.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.siteId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "helpText": "What this field is: Deploy ID for Netlify / Get deploy.\nWhere to find it: Open the item in Netlify and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.deployId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "helpText": "What this field is: Request body for create_deploy for Netlify / Get deploy.\nHow to fill it: Enter valid JSON in the format Netlify expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "helpText": "What this field is: A number used for limit in Netlify / Get deploy.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_deploy",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Netlify data with get deploy after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "Netlify returns structured get deploy data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Netlify node."
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
