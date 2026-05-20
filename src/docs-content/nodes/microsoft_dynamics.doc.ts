import type { NodeDoc } from '../types';

export const microsoftDynamicsDoc: NodeDoc = {
  "slug": "microsoft_dynamics",
  "displayName": "Microsoft Dynamics",
  "category": "Data",
  "logoUrl": "/icons/nodes/microsoft_dynamics.svg",
  "description": "Manage CRM data in Microsoft Dynamics 365 (contacts, leads, accounts, opportunities, and more) via the Web API",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "Go to Azure Portal → App registrations → New registration.",
    "Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.",
    "Under API Permissions, add Microsoft Graph: Mail.ReadWrite, Mail.Send.",
    "Create a client secret and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Outlook → enter Client ID, Secret, and Tenant ID → click \"Connect with Microsoft\" → authorize."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview",
  "resources": [
    {
      "name": "Operations",
      "description": "Microsoft Dynamics exposes operation choices directly.",
      "operations": [
        {
          "name": "GetRecords",
          "value": "getRecords",
          "description": "GetRecords using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to getrecords in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes getrecords and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "GetRecord",
          "value": "getRecord",
          "description": "GetRecord using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to getrecord in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes getrecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "CreateRecord",
          "value": "createRecord",
          "description": "CreateRecord using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to createrecord in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes createrecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "UpdateRecord",
          "value": "updateRecord",
          "description": "UpdateRecord using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to updaterecord in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes updaterecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "DeleteRecord",
          "value": "deleteRecord",
          "description": "DeleteRecord using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to deleterecord in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes deleterecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        },
        {
          "name": "FetchXml",
          "value": "fetchXml",
          "description": "FetchXml using the Microsoft Dynamics node.",
          "fields": [
            {
              "name": "Instance Url",
              "internalKey": "instanceUrl",
              "type": "url",
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "example": "https://yourorg.crm.dynamics.com",
              "placeholder": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Azure AD OAuth2 access token (stored as credential)"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "example": "contacts",
              "placeholder": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "example": "new_customentity",
              "placeholder": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "example": "00000000-0000-0000-0000-000000000000",
              "placeholder": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "description": "FetchXML query string (required for fetchXml operation)",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "description": "OData $select — comma-separated field names to return",
              "example": "fullname,emailaddress1,telephone1",
              "placeholder": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "description": "OData $filter expression to filter records",
              "example": "emailaddress1 eq 'john@example.com'",
              "placeholder": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "description": "OData $top — maximum number of records to return (max 5000)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
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
            "scenario": "Use Microsoft Dynamics to fetchxml in a workflow.",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "The node executes fetchxml and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Microsoft Dynamics node."
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
