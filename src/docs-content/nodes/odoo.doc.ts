import type { NodeDoc } from '../types';

export const odooDoc: NodeDoc = {
  "slug": "odoo",
  "displayName": "Odoo",
  "category": "Data",
  "logoUrl": "/icons/nodes/odoo.svg",
  "description": "Interact with Odoo ERP system (customers, invoices, products, and more)",
  "credentialType": "Odoo Credential",
  "credentialSetupSteps": [
    "What this is: Odoo uses an OAuth connection so CtrlChecks can safely access your Odoo account.",
    "Log in to your Odoo instance (e.g. https://yourcompany.odoo.com).",
    "Click your profile name (top right) -> My Profile -> Preferences tab.",
    "At the top of the Preferences page, you should see \"API Keys\". Click \"New API Key\" -> give it a name -> generate and copy the key.",
    "Note your Odoo URL, database name, and login username.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Odoo -> enter your Odoo URL, database name, username, and API key -> Save.",
    "Run a test step (e.g. list customers) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Odoo node and select the saved connection."
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
              "helpText": "What this field is: The Odoo model (object type) to work with.\nExamples: res.partner (contacts), sale.order (sales), account.move (invoices), product.product (products), stock.picking (inventory).",
              "placeholder": "res.partner",
              "example": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "helpText": "What this field is: Odoo domain filter (for getRecords) for Odoo / GetRecords.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "[[\"active\",\"=\",true]]",
              "example": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "helpText": "What this field is: Fields to return (empty = all fields) for Odoo / GetRecords.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "[\"id\",\"name\",\"email\"]",
              "example": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "helpText": "What this field is: A number used for limit in Odoo / GetRecords.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "100",
              "example": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "helpText": "What this field is: A number used for offset in Odoo / GetRecords.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Field values for create/update operations",
              "helpText": "What this field is: Field values for create/update operations for Odoo / GetRecords.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "helpText": "What this field is: Record ID for update/delete operations for Odoo / GetRecords.\nWhere to find it: Open the item in Odoo and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "42",
              "example": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "helpText": "What this field is: Custom method name for executeMethod operation for Odoo / GetRecords.\nHow to fill it: Enter the method value requested by Odoo, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "action_confirm",
              "example": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "helpText": "What this field is: Positional arguments for executeMethod for Odoo / GetRecords.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodArgs}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "helpText": "What this field is: Keyword arguments for executeMethod for Odoo / GetRecords.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodKwargs}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}"
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
            "scenario": "Process incoming Odoo data with get records after a related upstream event is received",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "Odoo returns structured get records data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The Odoo model (object type) to work with.\nExamples: res.partner (contacts), sale.order (sales), account.move (invoices), product.product (products), stock.picking (inventory).",
              "placeholder": "res.partner",
              "example": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "helpText": "What this field is: Odoo domain filter (for getRecords) for Odoo / CreateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "[[\"active\",\"=\",true]]",
              "example": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "helpText": "What this field is: Fields to return (empty = all fields) for Odoo / CreateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "[\"id\",\"name\",\"email\"]",
              "example": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "helpText": "What this field is: A number used for limit in Odoo / CreateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "100",
              "example": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "helpText": "What this field is: A number used for offset in Odoo / CreateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Field values for create/update operations",
              "helpText": "What this field is: Field values for create/update operations for Odoo / CreateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "helpText": "What this field is: Record ID for update/delete operations for Odoo / CreateRecord.\nWhere to find it: Open the item in Odoo and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "42",
              "example": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "helpText": "What this field is: Custom method name for executeMethod operation for Odoo / CreateRecord.\nHow to fill it: Enter the method value requested by Odoo, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "action_confirm",
              "example": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "helpText": "What this field is: Positional arguments for executeMethod for Odoo / CreateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodArgs}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "helpText": "What this field is: Keyword arguments for executeMethod for Odoo / CreateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodKwargs}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}"
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
            "scenario": "Process incoming Odoo data with create record after a related upstream event is received",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "Odoo returns structured create record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The Odoo model (object type) to work with.\nExamples: res.partner (contacts), sale.order (sales), account.move (invoices), product.product (products), stock.picking (inventory).",
              "placeholder": "res.partner",
              "example": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "helpText": "What this field is: Odoo domain filter (for getRecords) for Odoo / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "[[\"active\",\"=\",true]]",
              "example": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "helpText": "What this field is: Fields to return (empty = all fields) for Odoo / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "[\"id\",\"name\",\"email\"]",
              "example": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "helpText": "What this field is: A number used for limit in Odoo / UpdateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "100",
              "example": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "helpText": "What this field is: A number used for offset in Odoo / UpdateRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Field values for create/update operations",
              "helpText": "What this field is: Field values for create/update operations for Odoo / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "helpText": "What this field is: Record ID for update/delete operations for Odoo / UpdateRecord.\nWhere to find it: Open the item in Odoo and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "42",
              "example": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "helpText": "What this field is: Custom method name for executeMethod operation for Odoo / UpdateRecord.\nHow to fill it: Enter the method value requested by Odoo, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "action_confirm",
              "example": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "helpText": "What this field is: Positional arguments for executeMethod for Odoo / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodArgs}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "helpText": "What this field is: Keyword arguments for executeMethod for Odoo / UpdateRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodKwargs}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}"
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
            "scenario": "Process incoming Odoo data with update record after a related upstream event is received",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "Odoo returns structured update record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The Odoo model (object type) to work with.\nExamples: res.partner (contacts), sale.order (sales), account.move (invoices), product.product (products), stock.picking (inventory).",
              "placeholder": "res.partner",
              "example": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "helpText": "What this field is: Odoo domain filter (for getRecords) for Odoo / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "[[\"active\",\"=\",true]]",
              "example": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "helpText": "What this field is: Fields to return (empty = all fields) for Odoo / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "[\"id\",\"name\",\"email\"]",
              "example": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "helpText": "What this field is: A number used for limit in Odoo / DeleteRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "100",
              "example": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "helpText": "What this field is: A number used for offset in Odoo / DeleteRecord.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Field values for create/update operations",
              "helpText": "What this field is: Field values for create/update operations for Odoo / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "helpText": "What this field is: Record ID for update/delete operations for Odoo / DeleteRecord.\nWhere to find it: Open the item in Odoo and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "42",
              "example": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "helpText": "What this field is: Custom method name for executeMethod operation for Odoo / DeleteRecord.\nHow to fill it: Enter the method value requested by Odoo, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "action_confirm",
              "example": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "helpText": "What this field is: Positional arguments for executeMethod for Odoo / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodArgs}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "helpText": "What this field is: Keyword arguments for executeMethod for Odoo / DeleteRecord.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodKwargs}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}"
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
            "scenario": "Process incoming Odoo data with delete record after a related upstream event is received",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "Odoo returns structured delete record data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The Odoo model (object type) to work with.\nExamples: res.partner (contacts), sale.order (sales), account.move (invoices), product.product (products), stock.picking (inventory).",
              "placeholder": "res.partner",
              "example": "res.partner"
            },
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "json",
              "required": false,
              "description": "Odoo domain filter (for getRecords)",
              "helpText": "What this field is: Odoo domain filter (for getRecords) for Odoo / ExecuteMethod.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "[[\"active\",\"=\",true]]",
              "example": "[[\"active\",\"=\",true]]"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Fields to return (empty = all fields)",
              "helpText": "What this field is: Fields to return (empty = all fields) for Odoo / ExecuteMethod.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.fields}} or pick the value from the data picker.",
              "placeholder": "[\"id\",\"name\",\"email\"]",
              "example": "[\"id\",\"name\",\"email\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of records to return",
              "helpText": "What this field is: A number used for limit in Odoo / ExecuteMethod.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "100",
              "example": "100"
            },
            {
              "name": "Offset",
              "internalKey": "offset",
              "type": "number",
              "required": false,
              "description": "Pagination offset",
              "helpText": "What this field is: A number used for offset in Odoo / ExecuteMethod.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.offset}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Field values for create/update operations",
              "helpText": "What this field is: Field values for create/update operations for Odoo / ExecuteMethod.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}",
              "example": "{\"name\":\"Acme Corp\",\"email\":\"info@acme.com\"}"
            },
            {
              "name": "Record Id",
              "internalKey": "recordId",
              "type": "number",
              "required": false,
              "description": "Record ID for update/delete operations",
              "helpText": "What this field is: Record ID for update/delete operations for Odoo / ExecuteMethod.\nWhere to find it: Open the item in Odoo and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.recordId}} or pick the value from the data picker.",
              "placeholder": "42",
              "example": "42"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "Custom method name for executeMethod operation",
              "helpText": "What this field is: Custom method name for executeMethod operation for Odoo / ExecuteMethod.\nHow to fill it: Enter the method value requested by Odoo, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "action_confirm",
              "example": "action_confirm"
            },
            {
              "name": "Method Args",
              "internalKey": "methodArgs",
              "type": "json",
              "required": false,
              "description": "Positional arguments for executeMethod",
              "helpText": "What this field is: Positional arguments for executeMethod for Odoo / ExecuteMethod.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodArgs}} or pick the value from the data picker.",
              "placeholder": "[]",
              "example": "[]"
            },
            {
              "name": "Method Kwargs",
              "internalKey": "methodKwargs",
              "type": "json",
              "required": false,
              "description": "Keyword arguments for executeMethod",
              "helpText": "What this field is: Keyword arguments for executeMethod for Odoo / ExecuteMethod.\nHow to fill it: Enter valid JSON in the format Odoo expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.methodKwargs}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}"
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
            "scenario": "Process incoming Odoo data with execute method after a related upstream event is received",
            "inputValues": {
              "Model": "res.partner",
              "Domain": "[[\"active\",\"=\",true]]",
              "Fields": "[\"id\",\"name\",\"email\"]",
              "Limit": "100",
              "Offset": "0"
            },
            "expectedOutput": "Odoo returns structured execute method data that downstream nodes can reference with {{$json.fieldName}}."
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
