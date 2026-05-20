import type { NodeDoc } from '../types';

export const odooDoc: NodeDoc = {
  "slug": "odoo",
  "displayName": "Odoo",
  "category": "Data",
  "logoUrl": "/icons/nodes/odoo.svg",
  "description": "Interact with Odoo ERP system (customers, invoices, products, and more)",
  "credentialType": "Odoo Credential",
  "credentialSetupSteps": [
    "Log in to your Odoo instance → Settings → Users → select your user.",
    "Under \"Preferences\", generate an API Key (requires Technical access).",
    "Copy the API Key and note your Odoo URL and database name.",
    "In CtrlChecks, open Connections → Add Connection → Odoo → enter URL, Database, Username, and API Key → Save."
  ],
  "credentialDocsUrl": "https://www.odoo.com/documentation/16.0/developer/reference/external_api.html",
  "resources": [
    {
      "name": "Operations",
      "description": "Odoo exposes operation choices directly.",
      "operations": [
        {
          "name": "GetRecords",
          "value": "getRecords",
          "description": "GetRecords using the Odoo node.",
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
              "description": "Odoo domain filter (for getRecords)",
              "example": "[[\"active\",\"=\",true]]",
              "placeholder": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Fields to return (empty = all fields)",
              "example": "[\"id\",\"name\",\"email\"]",
              "placeholder": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Field values for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "description": "Positional arguments for executeMethod",
              "example": "[]",
              "placeholder": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "description": "Keyword arguments for executeMethod",
              "example": "{}",
              "placeholder": "{}"
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
            "scenario": "Use Odoo to getrecords in a workflow.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "The node executes getrecords and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "CreateRecord",
          "value": "createRecord",
          "description": "CreateRecord using the Odoo node.",
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
              "description": "Odoo domain filter (for getRecords)",
              "example": "[[\"active\",\"=\",true]]",
              "placeholder": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Fields to return (empty = all fields)",
              "example": "[\"id\",\"name\",\"email\"]",
              "placeholder": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Field values for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "description": "Positional arguments for executeMethod",
              "example": "[]",
              "placeholder": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "description": "Keyword arguments for executeMethod",
              "example": "{}",
              "placeholder": "{}"
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
            "scenario": "Use Odoo to createrecord in a workflow.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "The node executes createrecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "UpdateRecord",
          "value": "updateRecord",
          "description": "UpdateRecord using the Odoo node.",
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
              "description": "Odoo domain filter (for getRecords)",
              "example": "[[\"active\",\"=\",true]]",
              "placeholder": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Fields to return (empty = all fields)",
              "example": "[\"id\",\"name\",\"email\"]",
              "placeholder": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Field values for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "description": "Positional arguments for executeMethod",
              "example": "[]",
              "placeholder": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "description": "Keyword arguments for executeMethod",
              "example": "{}",
              "placeholder": "{}"
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
            "scenario": "Use Odoo to updaterecord in a workflow.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "The node executes updaterecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "DeleteRecord",
          "value": "deleteRecord",
          "description": "DeleteRecord using the Odoo node.",
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
              "description": "Odoo domain filter (for getRecords)",
              "example": "[[\"active\",\"=\",true]]",
              "placeholder": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Fields to return (empty = all fields)",
              "example": "[\"id\",\"name\",\"email\"]",
              "placeholder": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Field values for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "description": "Positional arguments for executeMethod",
              "example": "[]",
              "placeholder": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "description": "Keyword arguments for executeMethod",
              "example": "{}",
              "placeholder": "{}"
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
            "scenario": "Use Odoo to deleterecord in a workflow.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "The node executes deleterecord and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        },
        {
          "name": "ExecuteMethod",
          "value": "executeMethod",
          "description": "ExecuteMethod using the Odoo node.",
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
              "description": "Odoo domain filter (for getRecords)",
              "example": "[[\"active\",\"=\",true]]",
              "placeholder": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "description": "Fields to return (empty = all fields)",
              "example": "[\"id\",\"name\",\"email\"]",
              "placeholder": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of records to return",
              "example": "100",
              "placeholder": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "description": "Pagination offset",
              "example": "0",
              "placeholder": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Field values for create/update operations",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "description": "Record ID for update/delete operations",
              "example": "42",
              "placeholder": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "description": "Custom method name for executeMethod operation",
              "example": "action_confirm",
              "placeholder": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "description": "Positional arguments for executeMethod",
              "example": "[]",
              "placeholder": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "description": "Keyword arguments for executeMethod",
              "example": "{}",
              "placeholder": "{}"
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
            "scenario": "Use Odoo to executemethod in a workflow.",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "The node executes executemethod and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.odoo.com/documentation/17.0/developer/reference/external_api.html"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Odoo node."
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
