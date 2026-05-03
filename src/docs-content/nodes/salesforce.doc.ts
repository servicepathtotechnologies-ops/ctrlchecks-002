import type { NodeDoc } from '../types';

export const salesforceDoc: NodeDoc = {
  "slug": "salesforce",
  "displayName": "Salesforce",
  "category": "Data",
  "logoUrl": "/icons/nodes/salesforce.svg",
  "description": "Work with Salesforce objects (Account, Contact, Lead, Opportunity, etc.) using REST/SOQL/SOSL Use this node when a workflow needs salesforce behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Salesforce Token",
  "credentialSetupSteps": [
    "Open the Salesforce developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Salesforce Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm",
  "resources": [
    {
      "name": "Account",
      "description": "Account is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Contact",
      "description": "Contact is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Lead",
      "description": "Lead is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Opportunity",
      "description": "Opportunity is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Case",
      "description": "Case is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Campaign",
      "description": "Campaign is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    },
    {
      "name": "Product2",
      "description": "Product2 is a Salesforce resource available in this node.",
      "operations": [
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into query.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Create",
          "value": "bulkCreate",
          "description": "Bulk Create with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk create.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Update",
          "value": "bulkUpdate",
          "description": "Bulk Update with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk update.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Delete",
          "value": "bulkDelete",
          "description": "Bulk Delete with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk delete.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        },
        {
          "name": "Bulk Upsert",
          "value": "bulkUpsert",
          "description": "Bulk Upsert with the Salesforce node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": true,
              "description": "Salesforce instance URL (e.g., https://yourinstance.my.salesforce.com)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "OAuth2 access token for Salesforce (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Object",
              "internalKey": "customObject",
              "type": "string",
              "required": false,
              "description": "Custom object API name (ends with __c) when resource is custom",
              "example": "CustomObject__c",
              "placeholder": "CustomObject__c"
            },
            {
              "name": "Soql",
              "internalKey": "soql",
              "type": "string",
              "required": false,
              "description": "SOQL query (required for query operation)",
              "example": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "placeholder": "SELECT Id, Name, Email FROM Contact LIMIT 10"
            },
            {
              "name": "Sosl",
              "internalKey": "sosl",
              "type": "string",
              "required": false,
              "description": "SOSL search query (required for search operation)",
              "example": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "placeholder": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record Id (required for get, update, delete operations)",
              "example": "003xx000004TmiQAAS",
              "placeholder": "003xx000004TmiQAAS"
            },
            {
              "name": "External Id Field",
              "internalKey": "externalIdField",
              "type": "string",
              "required": false,
              "description": "External ID field API name (required for upsert operation)",
              "example": "CustomId__c",
              "placeholder": "CustomId__c"
            },
            {
              "name": "External Id Value",
              "internalKey": "externalIdValue",
              "type": "string",
              "required": false,
              "description": "External ID value (required for upsert operation)",
              "example": "EXT-12345",
              "placeholder": "EXT-12345"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Records",
              "internalKey": "records",
              "type": "json",
              "required": false,
              "description": "Array of records for bulk operations",
              "example": "[object Object],[object Object]",
              "placeholder": "[object Object],[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Salesforce node.\nstructure: Value returned by the Salesforce node.\nconvertible: Value returned by the Salesforce node.\ndefaultValue: Value returned by the Salesforce node.",
          "usageExample": {
            "scenario": "Use Salesforce in a workflow and pass upstream data into bulk upsert.",
            "inputValues": {
              "Instance Url": "https://api.example.com/resource",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Object": "CustomObject__c",
              "Soql": "SELECT Id, Name, Email FROM Contact LIMIT 10",
              "Sosl": "FIND {test@example.com} IN EMAIL FIELDS RETURNING Contact(Id, Name)",
              "Id": "003xx000004TmiQAAS",
              "External Id Field": "CustomId__c",
              "External Id Value": "EXT-12345",
              "Fields": "[object Object]",
              "Records": "[object Object],[object Object]"
            },
            "expectedOutput": "The node runs bulk upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an expression resolved to an empty value.",
      "fix": "Open the node, fill the required field, and inspect upstream output before running again."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node."
    }
  ],
  "relatedNodes": [
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
