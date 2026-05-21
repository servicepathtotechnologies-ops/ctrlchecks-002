import type { NodeDoc } from '../types';

export const notionDoc: NodeDoc = {
  "slug": "notion",
  "displayName": "Notion",
  "category": "Data",
  "logoUrl": "/icons/nodes/notion.svg",
  "description": "Read, write, update, or delete pages, databases, and blocks in Notion",
  "credentialType": "Notion API Key",
  "credentialSetupSteps": [
    "What this is: Notion uses an API key or account connection so CtrlChecks can safely access your Notion account.",
    "Go to notion.so/my-integrations and sign in with your Notion account.",
    "Click \"+ New integration\" -> give it a name (e.g. CtrlChecks) -> select your workspace.",
    "Under \"Capabilities\", enable: Read content, Update content, Insert content.",
    "Click Submit. Copy the \"Internal Integration Token\" - it starts with secret_.",
    "Share your Notion database with the integration: open the database in Notion -> click Share (top right) -> Invite -> search for your integration name -> Invite.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Notion -> paste the secret_ token -> Save.",
    "Run a test step (e.g. create a page in the database) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Notion node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.notion.com/docs/getting-started",
  "resources": [
    {
      "name": "Operations",
      "description": "Notion exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Notion API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Notion OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "helpText": "What this field is: Resource chooses the kind of Notion item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Notion.\nExample: In Notion, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "page",
              "example": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID (for get, update, archive, restore)",
              "helpText": "What this field is: Notion Page ID (for get, update, archive, restore) for Notion / Read.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.pageId}} or pick the value from the data picker.",
              "placeholder": "page-id",
              "example": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "helpText": "What this field is: The unique ID of your Notion database.\nWhere to find it: Open the database in Notion → click Share at the top → Copy link. The ID is the 32-character string in the URL before the ?.\nExample URL: notion.so/myworkspace/1234abcd5678ef90abcd1234ef567890?v=...\nThe ID is: 1234abcd5678ef90abcd1234ef567890",
              "placeholder": "database-id",
              "example": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "helpText": "What this field is: Parent Page ID — where the new page will be created (required for page › create and database › create) for Notion / Read.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.parentPageId}} or pick the value from the data picker.",
              "placeholder": "parent-page-id",
              "example": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page or database title (plain text)",
              "helpText": "What this field is: Page or database title (plain text) for Notion / Read.\nHow to fill it: Enter the title value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "My Page",
              "example": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Page body content (plain text — added as a paragraph block)",
              "helpText": "What this field is: Page body content (plain text — added as a paragraph block) for Notion / Read.\nHow to fill it: Type the message, prompt, or content you want Notion to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This is the page content.",
              "example": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "helpText": "What this field is: Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"} for Notion / Read.\nHow to fill it: Enter the properties value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.properties}} or pick the value from the data picker.",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}",
              "example": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Optional filter for database queries/search",
              "helpText": "What this field is: Optional filter for database queries/search for Notion / Read.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Notion which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Notion data with read after a related upstream event is received",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "Notion returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Notion API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Notion OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "helpText": "What this field is: Resource chooses the kind of Notion item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Notion.\nExample: In Notion, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "page",
              "example": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID (for get, update, archive, restore)",
              "helpText": "What this field is: Notion Page ID (for get, update, archive, restore) for Notion / Create.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.pageId}} or pick the value from the data picker.",
              "placeholder": "page-id",
              "example": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "helpText": "What this field is: The unique ID of your Notion database.\nWhere to find it: Open the database in Notion → click Share at the top → Copy link. The ID is the 32-character string in the URL before the ?.\nExample URL: notion.so/myworkspace/1234abcd5678ef90abcd1234ef567890?v=...\nThe ID is: 1234abcd5678ef90abcd1234ef567890",
              "placeholder": "database-id",
              "example": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "helpText": "What this field is: Parent Page ID — where the new page will be created (required for page › create and database › create) for Notion / Create.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.parentPageId}} or pick the value from the data picker.",
              "placeholder": "parent-page-id",
              "example": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page or database title (plain text)",
              "helpText": "What this field is: Page or database title (plain text) for Notion / Create.\nHow to fill it: Enter the title value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "My Page",
              "example": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Page body content (plain text — added as a paragraph block)",
              "helpText": "What this field is: Page body content (plain text — added as a paragraph block) for Notion / Create.\nHow to fill it: Type the message, prompt, or content you want Notion to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This is the page content.",
              "example": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "helpText": "What this field is: The values for each property (column) in your Notion database.\nFormat: JSON object — Notion uses a specific format per property type.\nTitle property example: {\"Name\":{\"title\":[{\"text\":{\"content\":\"Meeting Notes\"}}]}}\nSelect property: {\"Status\":{\"select\":{\"name\":\"In Progress\"}}}\nDate property: {\"Due Date\":{\"date\":{\"start\":\"2025-01-15\"}}}\nNumber property: {\"Revenue\":{\"number\":50000}}\nFull example: {\"Name\":{\"title\":[{\"text\":{\"content\":\"New Task\"}}]},\"Status\":{\"select\":{\"name\":\"Todo\"}},\"Due Date\":{\"date\":{\"start\":\"2025-06-01\"}}}",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}",
              "example": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Optional filter for database queries/search",
              "helpText": "What this field is: Optional filter for database queries/search for Notion / Create.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Notion which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Notion data with create after a related upstream event is received",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "Notion returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Notion API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Notion OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "helpText": "What this field is: Resource chooses the kind of Notion item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Notion.\nExample: In Notion, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "page",
              "example": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID (for get, update, archive, restore)",
              "helpText": "What this field is: Notion Page ID (for get, update, archive, restore) for Notion / Update.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.pageId}} or pick the value from the data picker.",
              "placeholder": "page-id",
              "example": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "helpText": "What this field is: The unique ID of your Notion database.\nWhere to find it: Open the database in Notion → click Share at the top → Copy link. The ID is the 32-character string in the URL before the ?.\nExample URL: notion.so/myworkspace/1234abcd5678ef90abcd1234ef567890?v=...\nThe ID is: 1234abcd5678ef90abcd1234ef567890",
              "placeholder": "database-id",
              "example": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "helpText": "What this field is: Parent Page ID — where the new page will be created (required for page › create and database › create) for Notion / Update.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.parentPageId}} or pick the value from the data picker.",
              "placeholder": "parent-page-id",
              "example": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page or database title (plain text)",
              "helpText": "What this field is: Page or database title (plain text) for Notion / Update.\nHow to fill it: Enter the title value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "My Page",
              "example": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Page body content (plain text — added as a paragraph block)",
              "helpText": "What this field is: Page body content (plain text — added as a paragraph block) for Notion / Update.\nHow to fill it: Type the message, prompt, or content you want Notion to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This is the page content.",
              "example": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "helpText": "What this field is: Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"} for Notion / Update.\nHow to fill it: Enter the properties value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.properties}} or pick the value from the data picker.",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}",
              "example": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Optional filter for database queries/search",
              "helpText": "What this field is: Optional filter for database queries/search for Notion / Update.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Notion which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Notion data with update after a related upstream event is received",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "Notion returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Notion API key (required for authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Notion OAuth access token (alternative to API key)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Notion.\nWhere to get it: Open the Notion dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-oauth-access-token",
              "example": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "helpText": "What this field is: Resource chooses the kind of Notion item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Notion.\nExample: In Notion, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "page",
              "example": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID (for get, update, archive, restore)",
              "helpText": "What this field is: Notion Page ID (for get, update, archive, restore) for Notion / Delete.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.pageId}} or pick the value from the data picker.",
              "placeholder": "page-id",
              "example": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "helpText": "What this field is: The unique ID of your Notion database.\nWhere to find it: Open the database in Notion → click Share at the top → Copy link. The ID is the 32-character string in the URL before the ?.\nExample URL: notion.so/myworkspace/1234abcd5678ef90abcd1234ef567890?v=...\nThe ID is: 1234abcd5678ef90abcd1234ef567890",
              "placeholder": "database-id",
              "example": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "helpText": "What this field is: Parent Page ID — where the new page will be created (required for page › create and database › create) for Notion / Delete.\nWhere to find it: Open the item in Notion and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.parentPageId}} or pick the value from the data picker.",
              "placeholder": "parent-page-id",
              "example": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page or database title (plain text)",
              "helpText": "What this field is: Page or database title (plain text) for Notion / Delete.\nHow to fill it: Enter the title value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "My Page",
              "example": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Page body content (plain text — added as a paragraph block)",
              "helpText": "What this field is: Page body content (plain text — added as a paragraph block) for Notion / Delete.\nHow to fill it: Type the message, prompt, or content you want Notion to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This is the page content.",
              "example": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "helpText": "What this field is: Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"} for Notion / Delete.\nHow to fill it: Enter the properties value requested by Notion, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.properties}} or pick the value from the data picker.",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}",
              "example": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "required": false,
              "description": "Optional filter for database queries/search",
              "helpText": "What this field is: Optional filter for database queries/search for Notion / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Notion which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Notion data with delete after a related upstream event is received",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "Notion returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Notion node."
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
