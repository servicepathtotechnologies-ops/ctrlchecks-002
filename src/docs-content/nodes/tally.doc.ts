import type { NodeDoc } from '../types';

export const tallyDoc: NodeDoc = {
  "slug": "tally",
  "displayName": "Tally Solutions",
  "category": "Data",
  "logoUrl": "/icons/nodes/tally.svg",
  "description": "Interact with Tally ERP / TallyPrime via XML API to fetch or push accounting data Use this node when a workflow needs tally solutions behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Tally Solutions exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Ledger",
          "value": "get_ledger",
          "description": "Get Ledger with the Tally Solutions node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "example": "{{ $json.payload }}"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
            }
          ],
          "outputExample": {
            "success": true,
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Tally Solutions node.\ndata: XML response from Tally\nerror: Value returned by the Tally Solutions node.",
          "usageExample": {
            "scenario": "Use Tally Solutions in a workflow and pass upstream data into get ledger.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "{{ $json.payload }}",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node runs get ledger and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get Voucher",
          "value": "get_voucher",
          "description": "Get Voucher with the Tally Solutions node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "example": "{{ $json.payload }}"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
            }
          ],
          "outputExample": {
            "success": true,
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Tally Solutions node.\ndata: XML response from Tally\nerror: Value returned by the Tally Solutions node.",
          "usageExample": {
            "scenario": "Use Tally Solutions in a workflow and pass upstream data into get voucher.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "{{ $json.payload }}",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node runs get voucher and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create Voucher",
          "value": "create_voucher",
          "description": "Create Voucher with the Tally Solutions node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "example": "{{ $json.payload }}"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
            }
          ],
          "outputExample": {
            "success": true,
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Tally Solutions node.\ndata: XML response from Tally\nerror: Value returned by the Tally Solutions node.",
          "usageExample": {
            "scenario": "Use Tally Solutions in a workflow and pass upstream data into create voucher.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "{{ $json.payload }}",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node runs create voucher and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get Stock Items",
          "value": "get_stock_items",
          "description": "Get Stock Items with the Tally Solutions node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "example": "{{ $json.payload }}"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
            }
          ],
          "outputExample": {
            "success": true,
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Tally Solutions node.\ndata: XML response from Tally\nerror: Value returned by the Tally Solutions node.",
          "usageExample": {
            "scenario": "Use Tally Solutions in a workflow and pass upstream data into get stock items.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "{{ $json.payload }}",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node runs get stock items and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get Company Info",
          "value": "get_company_info",
          "description": "Get Company Info with the Tally Solutions node using the configured input fields.",
          "fields": [
            {
              "name": "Endpoint",
              "internalKey": "endpoint",
              "type": "url",
              "required": true,
              "description": "Tally XML API server URL",
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "required": false,
              "description": "Custom XML request body (overrides the default template for the selected operation)",
              "example": "{{ $json.payload }}"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "required": false,
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "required": false,
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "required": false,
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
            }
          ],
          "outputExample": {
            "success": true,
            "data": "data",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Tally Solutions node.\ndata: XML response from Tally\nerror: Value returned by the Tally Solutions node.",
          "usageExample": {
            "scenario": "Use Tally Solutions in a workflow and pass upstream data into get company info.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "{{ $json.payload }}",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node runs get company info and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
