import type { NodeDoc } from '../types';

export const odooDoc: NodeDoc = {
  "slug": "odoo",
  "displayName": "Odoo",
  "category": "Data",
  "logoUrl": "/icons/nodes/odoo.svg",
  "description": "Interact with Odoo ERP system (customers, invoices, products, and more) Use this node when a workflow needs odoo behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Odoo Credential, Odoo Credential",
  "credentialSetupSteps": [
    "Open the Odoo developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Odoo Credential, Odoo Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html",
  "resources": [
    {
      "name": "Operations",
      "description": "Odoo exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Records",
          "value": "getRecords",
          "description": "Get Records with the Odoo node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Odoo model name",
              "example": "res.partner",
              "placeholder": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "example": "active,=,true",
              "placeholder": "active,=,true"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "example": "id,name,email",
              "placeholder": "id,name,email"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Field values for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "example": "",
              "placeholder": ""
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Odoo base URL, for example https://yourcompany.odoo.com",
              "example": "https://yourcompany.odoo.com",
              "placeholder": "https://yourcompany.odoo.com"
            },
            {
              "name": "Db",
              "internalKey": "db",
              "type": "string",
              "required": true,
              "description": "Odoo database name",
              "example": "{{ $json.db }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Odoo username or login email",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Odoo password or API key",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "model": "model",
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Odoo node.\noperation: Value returned by the Odoo node.\nmodel: Value returned by the Odoo node.\ndata: Value returned by the Odoo node.\nerror: Value returned by the Odoo node.",
          "usageExample": {
            "scenario": "Use Odoo in a workflow and pass upstream data into get records.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "active,=,true",
              "Fields": "id,name,email",
              "Limit": "100",
              "Offset": "0",
              "Values": "[object Object]",
              "Record Id": "42",
              "Method": "action_confirm",
              "Method Args": "",
              "Method Kwargs": "[object Object]"
            },
            "expectedOutput": "The node runs get records and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "Create Record",
          "value": "createRecord",
          "description": "Create Record with the Odoo node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Odoo model name",
              "example": "res.partner",
              "placeholder": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "example": "active,=,true",
              "placeholder": "active,=,true"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "example": "id,name,email",
              "placeholder": "id,name,email"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Field values for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "example": "",
              "placeholder": ""
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Odoo base URL, for example https://yourcompany.odoo.com",
              "example": "https://yourcompany.odoo.com",
              "placeholder": "https://yourcompany.odoo.com"
            },
            {
              "name": "Db",
              "internalKey": "db",
              "type": "string",
              "required": true,
              "description": "Odoo database name",
              "example": "{{ $json.db }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Odoo username or login email",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Odoo password or API key",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "model": "model",
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Odoo node.\noperation: Value returned by the Odoo node.\nmodel: Value returned by the Odoo node.\ndata: Value returned by the Odoo node.\nerror: Value returned by the Odoo node.",
          "usageExample": {
            "scenario": "Use Odoo in a workflow and pass upstream data into create record.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "active,=,true",
              "Fields": "id,name,email",
              "Limit": "100",
              "Offset": "0",
              "Values": "[object Object]",
              "Record Id": "42",
              "Method": "action_confirm",
              "Method Args": "",
              "Method Kwargs": "[object Object]"
            },
            "expectedOutput": "The node runs create record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "Update Record",
          "value": "updateRecord",
          "description": "Update Record with the Odoo node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Odoo model name",
              "example": "res.partner",
              "placeholder": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "example": "active,=,true",
              "placeholder": "active,=,true"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "example": "id,name,email",
              "placeholder": "id,name,email"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Field values for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "example": "",
              "placeholder": ""
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Odoo base URL, for example https://yourcompany.odoo.com",
              "example": "https://yourcompany.odoo.com",
              "placeholder": "https://yourcompany.odoo.com"
            },
            {
              "name": "Db",
              "internalKey": "db",
              "type": "string",
              "required": true,
              "description": "Odoo database name",
              "example": "{{ $json.db }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Odoo username or login email",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Odoo password or API key",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "model": "model",
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Odoo node.\noperation: Value returned by the Odoo node.\nmodel: Value returned by the Odoo node.\ndata: Value returned by the Odoo node.\nerror: Value returned by the Odoo node.",
          "usageExample": {
            "scenario": "Use Odoo in a workflow and pass upstream data into update record.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "active,=,true",
              "Fields": "id,name,email",
              "Limit": "100",
              "Offset": "0",
              "Values": "[object Object]",
              "Record Id": "42",
              "Method": "action_confirm",
              "Method Args": "",
              "Method Kwargs": "[object Object]"
            },
            "expectedOutput": "The node runs update record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "Delete Record",
          "value": "deleteRecord",
          "description": "Delete Record with the Odoo node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Odoo model name",
              "example": "res.partner",
              "placeholder": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "example": "active,=,true",
              "placeholder": "active,=,true"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "example": "id,name,email",
              "placeholder": "id,name,email"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Field values for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "example": "",
              "placeholder": ""
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Odoo base URL, for example https://yourcompany.odoo.com",
              "example": "https://yourcompany.odoo.com",
              "placeholder": "https://yourcompany.odoo.com"
            },
            {
              "name": "Db",
              "internalKey": "db",
              "type": "string",
              "required": true,
              "description": "Odoo database name",
              "example": "{{ $json.db }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Odoo username or login email",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Odoo password or API key",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "model": "model",
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Odoo node.\noperation: Value returned by the Odoo node.\nmodel: Value returned by the Odoo node.\ndata: Value returned by the Odoo node.\nerror: Value returned by the Odoo node.",
          "usageExample": {
            "scenario": "Use Odoo in a workflow and pass upstream data into delete record.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "active,=,true",
              "Fields": "id,name,email",
              "Limit": "100",
              "Offset": "0",
              "Values": "[object Object]",
              "Record Id": "42",
              "Method": "action_confirm",
              "Method Args": "",
              "Method Kwargs": "[object Object]"
            },
            "expectedOutput": "The node runs delete record and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "Execute Method",
          "value": "executeMethod",
          "description": "Execute Method with the Odoo node using the configured input fields.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Odoo model name",
              "example": "res.partner",
              "placeholder": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "example": "active,=,true",
              "placeholder": "active,=,true"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "example": "id,name,email",
              "placeholder": "id,name,email"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Field values for create/update operations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "example": "",
              "placeholder": ""
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Odoo base URL, for example https://yourcompany.odoo.com",
              "example": "https://yourcompany.odoo.com",
              "placeholder": "https://yourcompany.odoo.com"
            },
            {
              "name": "Db",
              "internalKey": "db",
              "type": "string",
              "required": true,
              "description": "Odoo database name",
              "example": "{{ $json.db }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Odoo username or login email",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "Odoo password or API key",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "model": "model",
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Odoo node.\noperation: Value returned by the Odoo node.\nmodel: Value returned by the Odoo node.\ndata: Value returned by the Odoo node.\nerror: Value returned by the Odoo node.",
          "usageExample": {
            "scenario": "Use Odoo in a workflow and pass upstream data into execute method.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "active,=,true",
              "Fields": "id,name,email",
              "Limit": "100",
              "Offset": "0",
              "Values": "[object Object]",
              "Record Id": "42",
              "Method": "action_confirm",
              "Method Args": "",
              "Method Kwargs": "[object Object]"
            },
            "expectedOutput": "The node runs execute method and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
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
