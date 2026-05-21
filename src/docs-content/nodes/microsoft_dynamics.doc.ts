import type { NodeDoc } from '../types';

export const microsoftDynamicsDoc: NodeDoc = {
  "slug": "microsoft_dynamics",
  "displayName": "Microsoft Dynamics",
  "category": "Data",
  "logoUrl": "/icons/nodes/microsoft_dynamics.svg",
  "description": "Manage CRM data in Microsoft Dynamics 365 (contacts, leads, accounts, opportunities, and more) via the Web API",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "What this is: Microsoft uses an OAuth connection so CtrlChecks can safely access your Microsoft account.",
    "Go to portal.azure.com and sign in with your Microsoft account.",
    "Go to Azure Active Directory -> App registrations -> New registration.",
    "Give it a name (e.g. CtrlChecks Email) -> set Redirect URI to: http://localhost:3001/api/oauth/microsoft/callback -> Register.",
    "Copy the Application (client) ID and Directory (tenant) ID.",
    "Go to Certificates & Secrets -> New client secret -> Add. Copy the secret VALUE immediately.",
    "Go to API permissions -> Add a permission -> Microsoft Graph -> Delegated -> add Mail.ReadWrite and Mail.Send.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Outlook -> enter Client ID, Secret, and Tenant ID -> Connect with Microsoft -> authorize.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Microsoft node and select the saved connection."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / GetRecords.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / GetRecords.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / GetRecords.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / GetRecords.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / GetRecords.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / GetRecords.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / GetRecords.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / GetRecords.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with get records after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured get records data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / GetRecord.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / GetRecord.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / GetRecord.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / GetRecord.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / GetRecord.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / GetRecord.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / GetRecord.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / GetRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with get record after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured get record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / CreateRecord.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / CreateRecord.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / CreateRecord.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / CreateRecord.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / CreateRecord.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / CreateRecord.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / CreateRecord.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / CreateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with create record after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured create record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / UpdateRecord.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / UpdateRecord.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / UpdateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with update record after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured update record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / DeleteRecord.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / DeleteRecord.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / DeleteRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with delete record after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured delete record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com)",
              "helpText": "What this field is: Microsoft Dynamics 365 instance URL (e.g. https://yourorg.crm.dynamics.com) for Microsoft Dynamics / FetchXml.\nHow to fill it: Paste the full web address Microsoft Dynamics should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.instanceUrl}} or pick the value from the data picker.",
              "placeholder": "https://yourorg.crm.dynamics.com",
              "example": "https://yourorg.crm.dynamics.com"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "Azure AD OAuth2 access token (stored as credential)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Microsoft Dynamics.\nWhere to get it: Open the Microsoft Dynamics dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Dynamics 365 entity logical name (e.g. contacts, leads, accounts)",
              "helpText": "What this field is: Resource chooses the kind of Microsoft Dynamics item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Microsoft Dynamics.\nExample: In Microsoft Dynamics, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "contacts",
              "example": "contacts",
              "defaultValue": "contacts"
            },
            {
              "name": "Custom Entity",
              "internalKey": "customEntity",
              "type": "string",
              "required": false,
              "description": "Custom entity logical name when resource is \"custom\" (e.g. new_customentity)",
              "helpText": "What this field is: Custom entity logical name when resource is \"custom\" (e.g. new_customentity) for Microsoft Dynamics / FetchXml.\nHow to fill it: Enter the custom entity value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.customEntity}} or pick the value from the data picker.",
              "placeholder": "new_customentity",
              "example": "new_customentity"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Record GUID (required for getRecord, updateRecord, deleteRecord)",
              "helpText": "What this field is: Record GUID (required for getRecord, updateRecord, deleteRecord) for Microsoft Dynamics / FetchXml.\nWhere to find it: Open the item in Microsoft Dynamics and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "00000000-0000-0000-0000-000000000000",
              "example": "00000000-0000-0000-0000-000000000000"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names)",
              "helpText": "What this field is: Field map for createRecord/updateRecord operations (use Dynamics 365 logical field names) for Microsoft Dynamics / FetchXml.\nHow to fill it: Enter valid JSON in the format Microsoft Dynamics expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}",
              "example": "{\"firstname\":\"John\",\"lastname\":\"Doe\",\"emailaddress1\":\"john@example.com\"}"
            },
            {
              "name": "Fetch Xml",
              "internalKey": "fetchXml",
              "type": "string",
              "required": false,
              "description": "FetchXML query string (required for fetchXml operation)",
              "helpText": "What this field is: FetchXML query string (required for fetchXml operation) for Microsoft Dynamics / FetchXml.\nHow to fill it: Enter the fetch xml value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fetchXml}} or pick the value from the data picker.",
              "placeholder": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>",
              "example": "<fetch><entity name=\"contact\"><attribute name=\"fullname\"/></entity></fetch>"
            },
            {
              "name": "Select",
              "internalKey": "select",
              "type": "string",
              "required": false,
              "description": "OData $select — comma-separated field names to return",
              "helpText": "What this field is: OData $select — comma-separated field names to return for Microsoft Dynamics / FetchXml.\nHow to fill it: Enter the select value requested by Microsoft Dynamics, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.select}} or pick the value from the data picker.",
              "placeholder": "fullname,emailaddress1,telephone1",
              "example": "fullname,emailaddress1,telephone1"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "string",
              "required": false,
              "description": "OData $filter expression to filter records",
              "helpText": "What this field is: OData $filter expression to filter records for Microsoft Dynamics / FetchXml.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Microsoft Dynamics which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.filter}} or pick the value from the data picker.",
              "placeholder": "emailaddress1 eq 'john@example.com'",
              "example": "emailaddress1 eq 'john@example.com'"
            },
            {
              "name": "Top",
              "internalKey": "top",
              "type": "number",
              "required": false,
              "description": "OData $top — maximum number of records to return (max 5000)",
              "helpText": "What this field is: A number used for top in Microsoft Dynamics / FetchXml.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.top}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Microsoft Dynamics data with fetch xml after a related upstream event is received",
            "inputValues": {
              "Instance Url": "https://yourorg.crm.dynamics.com",
              "Access Token": "",
              "Resource": "contacts",
              "Custom Entity": "new_customentity",
              "Id": "00000000-0000-0000-0000-000000000000"
            },
            "expectedOutput": "Microsoft Dynamics returns structured fetch xml data that downstream nodes can reference with {{$json.fieldName}}."
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
