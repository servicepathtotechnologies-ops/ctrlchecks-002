import type { NodeDoc } from '../types';

export const salesforceDoc: NodeDoc = {
  "slug": "salesforce",
  "displayName": "Salesforce",
  "category": "Data",
  "logoUrl": "/icons/nodes/salesforce.svg",
  "description": "Work with Salesforce objects (Account, Contact, Lead, Opportunity, etc.) using REST/SOQL/SOSL",
  "credentialType": "Salesforce Credential",
  "credentialSetupSteps": [
    "What this is: Salesforce uses an OAuth connection so CtrlChecks can safely access your Salesforce account.",
    "Log in to Salesforce -> click the gear icon (Setup) -> search for \"App Manager\" -> click it.",
    "Click \"New Connected App\" (top right) -> give it a name (e.g. CtrlChecks) and enter your email.",
    "Under \"API (Enable OAuth Settings)\", tick \"Enable OAuth Settings\". Set Callback URL to: http://localhost:3001/api/oauth/salesforce/callback",
    "Under \"Selected OAuth Scopes\", add: Access and manage your data (api), Perform requests on your behalf at any time (refresh_token). Click Save.",
    "After saving, note the Consumer Key (Client ID) and Consumer Secret - it may take a few minutes to become available.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Salesforce -> click \"Connect with Salesforce\" -> sign in -> Allow.",
    "Run a test step (e.g. search for a Contact) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Salesforce node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm",
  "resources": [
    {
      "name": "Operations",
      "description": "Salesforce exposes operation choices directly.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Run a SOQL query to retrieve Salesforce records.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Query.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Query.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Query.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Query.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Query.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Query.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Query.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Query.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Query.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
            }
          ],
          "outputExample": {
            "totalSize": 2,
            "done": true,
            "records": [
              {
                "Id": "001Xx...",
                "Name": "Acme Corp",
                "AnnualRevenue": 5000000
              }
            ]
          },
          "outputDescription": "totalSize: Number of records returned. records: Array of Salesforce sObject records with all selected fields.",
          "usageExample": {
            "scenario": "Fetch all high-value Salesforce accounts",
            "inputValues": {
              "query": "SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue > 1000000 ORDER BY AnnualRevenue DESC LIMIT 100"
            },
            "expectedOutput": "Returns matching records. Map field values to downstream nodes."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Search.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Search.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Search.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Search.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Search.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Search.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Search.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Search.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Search.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with search after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Get.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Get.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Get.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Get.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Get.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Get.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Get.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Get.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Get.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with get after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new Salesforce record (Account, Contact, Lead, Opportunity, etc.).",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Create.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Create.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Create.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Create.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Create.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Create.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Create.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Create.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Create.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
            }
          ],
          "outputExample": {
            "id": "001Xx...",
            "success": true,
            "errors": []
          },
          "outputDescription": "id: The Salesforce record ID of the created object. success: true if creation succeeded. errors: Any validation errors.",
          "usageExample": {
            "scenario": "Create a Salesforce Lead when someone fills in a website enquiry form",
            "inputValues": {
              "sObject": "Lead",
              "fields": "{\"FirstName\": \"{{$json.firstName}}\", \"LastName\": \"{{$json.lastName}}\", \"Email\": \"{{$json.email}}\", \"Company\": \"{{$json.company}}\", \"LeadSource\": \"Website\"}"
            },
            "expectedOutput": "Lead is created. `{{$json.id}}` is the Salesforce Lead ID."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update fields on an existing Salesforce record.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Update.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Update.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Update.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Update.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Update.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Update.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Update.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Update.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Update.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
            }
          ],
          "outputExample": {
            "success": true
          },
          "outputDescription": "success: true if the update succeeded without errors.",
          "usageExample": {
            "scenario": "Update Salesforce Opportunity stage when a deal progresses",
            "inputValues": {
              "sObject": "Opportunity",
              "recordId": "{{$json.opportunityId}}",
              "fields": "{\"StageName\": \"Closed Won\", \"CloseDate\": \"{{$now}}\"}"
            },
            "expectedOutput": "`success: true` confirms the update."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Delete.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Delete.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Delete.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Delete.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Delete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Delete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Delete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Delete.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Delete.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with delete after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / Upsert.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / Upsert.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / Upsert.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / Upsert.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / Upsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / Upsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / Upsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / Upsert.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / Upsert.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with upsert after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured upsert data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "BulkCreate",
          "value": "bulkCreate",
          "description": "BulkCreate using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / BulkCreate.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / BulkCreate.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / BulkCreate.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / BulkCreate.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / BulkCreate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / BulkCreate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / BulkCreate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / BulkCreate.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / BulkCreate.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with bulk create after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured bulk create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "BulkUpdate",
          "value": "bulkUpdate",
          "description": "BulkUpdate using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / BulkUpdate.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / BulkUpdate.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / BulkUpdate.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / BulkUpdate.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / BulkUpdate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / BulkUpdate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / BulkUpdate.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / BulkUpdate.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / BulkUpdate.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with bulk update after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured bulk update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "BulkDelete",
          "value": "bulkDelete",
          "description": "BulkDelete using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / BulkDelete.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / BulkDelete.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / BulkDelete.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / BulkDelete.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / BulkDelete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / BulkDelete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / BulkDelete.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / BulkDelete.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / BulkDelete.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with bulk delete after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured bulk delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "BulkUpsert",
          "value": "bulkUpsert",
          "description": "BulkUpsert using the Salesforce node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "helpText": "What this field is: Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com) for Salesforce / BulkUpsert.\nHow to fill it: Paste the full web address Salesforce should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Salesforce.\nWhere to get it: Open the Salesforce dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "helpText": "What this field is: Resource chooses the kind of Salesforce item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Salesforce.\nExample: In Salesforce, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "Account",
              "example": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "helpText": "What this field is: Custom object API name (ends with __c) when resource is custom for Salesforce / BulkUpsert.\nHow to fill it: Enter the custom object value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customObject}} or pick the value from the data picker.",
              "placeholder": "CustomObject__c",
              "example": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "helpText": "What this field is: SOQL query (required for query operation) for Salesforce / BulkUpsert.\nHow to fill it: Enter the soql value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.soql}} or pick the value from the data picker.",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "helpText": "What this field is: SOSL search query (required for search operation) for Salesforce / BulkUpsert.\nHow to fill it: Enter the sosl value requested by Salesforce, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.sosl}} or pick the value from the data picker.",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "helpText": "What this field is: Record Id (required for get, update, delete operations) for Salesforce / BulkUpsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "003xx000004TmiQAAS",
              "example": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "helpText": "What this field is: External ID field API name (required for upsert operation) for Salesforce / BulkUpsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdField}} or pick the value from the data picker.",
              "placeholder": "CustomId__c",
              "example": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "helpText": "What this field is: External ID value (required for upsert operation) for Salesforce / BulkUpsert.\nWhere to find it: Open the item in Salesforce and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.externalIdValue}} or pick the value from the data picker.",
              "placeholder": "EXT-12345",
              "example": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "helpText": "What this field is: Field map for create/update operations for Salesforce / BulkUpsert.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "helpText": "What this field is: Array of records for bulk operations for Salesforce / BulkUpsert.\nHow to fill it: Enter valid JSON in the format Salesforce expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.records}} or pick the value from the data picker.",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Process incoming Salesforce data with bulk upsert after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "Salesforce returns structured bulk upsert data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Salesforce node."
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
