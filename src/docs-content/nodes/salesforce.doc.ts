import type { NodeDoc } from '../types';

export const salesforceDoc: NodeDoc = {
  "slug": "salesforce",
  "displayName": "Salesforce",
  "category": "Data",
  "logoUrl": "/icons/nodes/salesforce.svg",
  "description": "Work with Salesforce objects (Account, Contact, Lead, Opportunity, etc.) using REST/SOQL/SOSL",
  "credentialType": "Salesforce Credential",
  "credentialSetupSteps": [
    "In Salesforce, go to Setup → Apps → App Manager → \"New Connected App\".",
    "Enable OAuth Settings, set the callback URL to http://localhost:3001/api/oauth/salesforce/callback, and select required scopes.",
    "Save and copy the Consumer Key (Client ID) and Consumer Secret.",
    "In CtrlChecks, open Connections → Add Connection → Salesforce → click \"Connect with Salesforce\" → authorize."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to search in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to get in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to delete in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to upsert in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes upsert and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to bulkcreate in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes bulkcreate and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to bulkupdate in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes bulkupdate and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to bulkdelete in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes bulkdelete and exposes its result for downstream nodes."
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
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 access token for Salesforce (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Salesforce object type (sObject), e.g. Account, Contact, Lead",
              "example": "Account",
              "placeholder": "Account"
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for create/update operations",
              "example": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}",
              "placeholder": "{\"LastName\":\"Doe\",\"Email\":\"test@example.com\"}"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "description": "Array of records for bulk operations",
              "example": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]",
              "placeholder": "[{\"LastName\":\"Doe\",\"Email\":\"test1@example.com\"},{\"LastName\":\"Smith\",\"Email\":\"test2@example.com\"}]"
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
            "scenario": "Use Salesforce to bulkupsert in a workflow.",
            "inputValues": {
              "Instance Url": "https://api.example.com",
              "Access Token": "",
              "Resource": "Account",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            "expectedOutput": "The node executes bulkupsert and exposes its result for downstream nodes."
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
