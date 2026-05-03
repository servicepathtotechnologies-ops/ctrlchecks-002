import type { NodeDoc } from '../types';

export const microsoftDynamicsDoc: NodeDoc = {
  "slug": "microsoft_dynamics",
  "displayName": "Microsoft Dynamics",
  "category": "Data",
  "logoUrl": "/icons/nodes/microsoft_dynamics.svg",
  "description": "Manage CRM data in Microsoft Dynamics 365 (contacts, leads, accounts, opportunities, and more) via the Web API Use this node when a workflow needs microsoft dynamics behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Microsoft Token",
  "credentialSetupSteps": [
    "Open the Microsoft Dynamics developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Microsoft Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview",
  "resources": [
    {
      "name": "Contacts",
      "description": "Contacts is a Microsoft Dynamics resource available in this node.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Get Record",
          "value": "getRecord",
          "description": "Get Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Fetch Xml",
          "value": "fetchXml",
          "description": "Fetch Xml with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into fetch xml.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs fetch xml and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        }
      ]
    },
    {
      "name": "Leads",
      "description": "Leads is a Microsoft Dynamics resource available in this node.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Get Record",
          "value": "getRecord",
          "description": "Get Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Fetch Xml",
          "value": "fetchXml",
          "description": "Fetch Xml with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into fetch xml.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs fetch xml and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        }
      ]
    },
    {
      "name": "Accounts",
      "description": "Accounts is a Microsoft Dynamics resource available in this node.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Get Record",
          "value": "getRecord",
          "description": "Get Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Fetch Xml",
          "value": "fetchXml",
          "description": "Fetch Xml with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into fetch xml.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs fetch xml and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        }
      ]
    },
    {
      "name": "Opportunities",
      "description": "Opportunities is a Microsoft Dynamics resource available in this node.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Get Record",
          "value": "getRecord",
          "description": "Get Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Fetch Xml",
          "value": "fetchXml",
          "description": "Fetch Xml with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into fetch xml.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs fetch xml and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        }
      ]
    },
    {
      "name": "Incidents",
      "description": "Incidents is a Microsoft Dynamics resource available in this node.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Get Record",
          "value": "getRecord",
          "description": "Get Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into get record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs get record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "Fetch Xml",
          "value": "fetchXml",
          "description": "Fetch Xml with the Microsoft Dynamics node using the configured input fields.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "defaultValue": "50"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Microsoft Dynamics node.\ndata: Value returned by the Microsoft Dynamics node.\nerror: Value returned by the Microsoft Dynamics node.",
          "usageExample": {
            "scenario": "Use Microsoft Dynamics in a workflow and pass upstream data into fetch xml.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "{{ $json.accessToken }}",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000",
              "Fields": "[object Object]",
              "Fetch Xml": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "Select": "fullname,emailaddress1,telephone1",
              "Filter": "emailaddress1 eq 'john@example.com'",
              "Top": "50"
            },
            "expectedOutput": "The node runs fetch xml and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
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
