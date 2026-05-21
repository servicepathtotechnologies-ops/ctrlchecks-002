import type { NodeDoc } from '../types';

export const tallyDoc: NodeDoc = {
  "slug": "tally",
  "displayName": "Tally Solutions",
  "category": "Data",
  "logoUrl": "/icons/nodes/tally.svg",
  "description": "Interact with Tally ERP / TallyPrime via XML API to fetch or push accounting data",
  "credentialType": "Tally API Key",
  "credentialSetupSteps": [
    "What this is: Tally uses an API key or account connection so CtrlChecks can safely access your Tally account.",
    "Log in to your Tally account at tally.so.",
    "Go to Settings -> API -> Generate new access token.",
    "Give it a name and copy the token.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Tally -> paste the token -> Save.",
    "Run a test step (e.g. list your forms) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Tally node and select the saved connection."
  ],
  "credentialDocsUrl": "https://tallyforms.notion.site/Tally-API-Documentation",
  "resources": [
    {
      "name": "Operations",
      "description": "Tally Solutions exposes operation choices directly.",
      "operations": [
        {
          "name": "Get ledger",
          "value": "get_ledger",
          "description": "Get ledger using the Tally Solutions node.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "helpText": "What this field is: Tally XML API server URL for Tally Solutions / Get ledger.\nHow to fill it: Paste the full web address Tally Solutions should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "http://localhost:9000",
              "example": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "helpText": "What this field is: Custom XML request body (overrides the default template for the selected operation) for Tally Solutions / Get ledger.\nHow to fill it: Enter the payload value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "Enter Payload"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "helpText": "What this field is: Tally company name to scope requests for Tally Solutions / Get ledger.\nHow to fill it: Enter the company name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.companyName}} or pick the value from the data picker.",
              "placeholder": "My Company Ltd",
              "example": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "helpText": "What this field is: Ledger name (required for get_ledger operation) for Tally Solutions / Get ledger.\nHow to fill it: Enter the ledger name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ledgerName}} or pick the value from the data picker.",
              "placeholder": "Cash",
              "example": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "helpText": "What this field is: Voucher ID or number (required for get_voucher operation) for Tally Solutions / Get ledger.\nWhere to find it: Open the item in Tally Solutions and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.voucherId}} or pick the value from the data picker.",
              "placeholder": "VCH-001",
              "example": "VCH-001"
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
            "scenario": "Process incoming Tally Solutions data with get ledger after a related upstream event is received",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "Tally Solutions returns structured get ledger data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get voucher",
          "value": "get_voucher",
          "description": "Get voucher using the Tally Solutions node.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "helpText": "What this field is: Tally XML API server URL for Tally Solutions / Get voucher.\nHow to fill it: Paste the full web address Tally Solutions should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "http://localhost:9000",
              "example": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "helpText": "What this field is: Custom XML request body (overrides the default template for the selected operation) for Tally Solutions / Get voucher.\nHow to fill it: Enter the payload value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "Enter Payload"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "helpText": "What this field is: Tally company name to scope requests for Tally Solutions / Get voucher.\nHow to fill it: Enter the company name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.companyName}} or pick the value from the data picker.",
              "placeholder": "My Company Ltd",
              "example": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "helpText": "What this field is: Ledger name (required for get_ledger operation) for Tally Solutions / Get voucher.\nHow to fill it: Enter the ledger name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ledgerName}} or pick the value from the data picker.",
              "placeholder": "Cash",
              "example": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "helpText": "What this field is: Voucher ID or number (required for get_voucher operation) for Tally Solutions / Get voucher.\nWhere to find it: Open the item in Tally Solutions and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.voucherId}} or pick the value from the data picker.",
              "placeholder": "VCH-001",
              "example": "VCH-001"
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
            "scenario": "Process incoming Tally Solutions data with get voucher after a related upstream event is received",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "Tally Solutions returns structured get voucher data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create voucher",
          "value": "create_voucher",
          "description": "Create voucher using the Tally Solutions node.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "helpText": "What this field is: Tally XML API server URL for Tally Solutions / Create voucher.\nHow to fill it: Paste the full web address Tally Solutions should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "http://localhost:9000",
              "example": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "helpText": "What this field is: Custom XML request body (overrides the default template for the selected operation) for Tally Solutions / Create voucher.\nHow to fill it: Enter the payload value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "Enter Payload"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "helpText": "What this field is: Tally company name to scope requests for Tally Solutions / Create voucher.\nHow to fill it: Enter the company name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.companyName}} or pick the value from the data picker.",
              "placeholder": "My Company Ltd",
              "example": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "helpText": "What this field is: Ledger name (required for get_ledger operation) for Tally Solutions / Create voucher.\nHow to fill it: Enter the ledger name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ledgerName}} or pick the value from the data picker.",
              "placeholder": "Cash",
              "example": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "helpText": "What this field is: Voucher ID or number (required for get_voucher operation) for Tally Solutions / Create voucher.\nWhere to find it: Open the item in Tally Solutions and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.voucherId}} or pick the value from the data picker.",
              "placeholder": "VCH-001",
              "example": "VCH-001"
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
            "scenario": "Process incoming Tally Solutions data with create voucher after a related upstream event is received",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "Tally Solutions returns structured create voucher data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get stock items",
          "value": "get_stock_items",
          "description": "Get stock items using the Tally Solutions node.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "helpText": "What this field is: Tally XML API server URL for Tally Solutions / Get stock items.\nHow to fill it: Paste the full web address Tally Solutions should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "http://localhost:9000",
              "example": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "helpText": "What this field is: Custom XML request body (overrides the default template for the selected operation) for Tally Solutions / Get stock items.\nHow to fill it: Enter the payload value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "Enter Payload"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "helpText": "What this field is: Tally company name to scope requests for Tally Solutions / Get stock items.\nHow to fill it: Enter the company name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.companyName}} or pick the value from the data picker.",
              "placeholder": "My Company Ltd",
              "example": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "helpText": "What this field is: Ledger name (required for get_ledger operation) for Tally Solutions / Get stock items.\nHow to fill it: Enter the ledger name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ledgerName}} or pick the value from the data picker.",
              "placeholder": "Cash",
              "example": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "helpText": "What this field is: Voucher ID or number (required for get_voucher operation) for Tally Solutions / Get stock items.\nWhere to find it: Open the item in Tally Solutions and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.voucherId}} or pick the value from the data picker.",
              "placeholder": "VCH-001",
              "example": "VCH-001"
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
            "scenario": "Process incoming Tally Solutions data with get stock items after a related upstream event is received",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "Tally Solutions returns structured get stock items data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get company info",
          "value": "get_company_info",
          "description": "Get company info using the Tally Solutions node.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "helpText": "What this field is: Tally XML API server URL for Tally Solutions / Get company info.\nHow to fill it: Paste the full web address Tally Solutions should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.endpoint}} or pick the value from the data picker.",
              "placeholder": "http://localhost:9000",
              "example": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "helpText": "What this field is: Custom XML request body (overrides the default template for the selected operation) for Tally Solutions / Get company info.\nHow to fill it: Enter the payload value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.payload}} or pick the value from the data picker.",
              "placeholder": "Enter Payload"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "helpText": "What this field is: Tally company name to scope requests for Tally Solutions / Get company info.\nHow to fill it: Enter the company name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.companyName}} or pick the value from the data picker.",
              "placeholder": "My Company Ltd",
              "example": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "helpText": "What this field is: Ledger name (required for get_ledger operation) for Tally Solutions / Get company info.\nHow to fill it: Enter the ledger name value requested by Tally Solutions, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ledgerName}} or pick the value from the data picker.",
              "placeholder": "Cash",
              "example": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "helpText": "What this field is: Voucher ID or number (required for get_voucher operation) for Tally Solutions / Get company info.\nWhere to find it: Open the item in Tally Solutions and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.voucherId}} or pick the value from the data picker.",
              "placeholder": "VCH-001",
              "example": "VCH-001"
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
            "scenario": "Process incoming Tally Solutions data with get company info after a related upstream event is received",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "Tally Solutions returns structured get company info data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Tally Solutions node."
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
