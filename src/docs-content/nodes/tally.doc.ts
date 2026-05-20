import type { NodeDoc } from '../types';

export const tallyDoc: NodeDoc = {
  "slug": "tally",
  "displayName": "Tally Solutions",
  "category": "Data",
  "logoUrl": "/icons/nodes/tally.svg",
  "description": "Interact with Tally ERP / TallyPrime via XML API to fetch or push accounting data",
  "credentialType": "Tally API Key",
  "credentialSetupSteps": [
    "Log in to Tally → Settings → API → create a new access token.",
    "Copy the token.",
    "In CtrlChecks, open Connections → Add Connection → Tally → paste the token → Save."
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
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "description": "Custom XML request body (overrides the default template for the selected operation)"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
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
            "scenario": "Use Tally Solutions to get ledger in a workflow.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node executes get ledger and exposes its result for downstream nodes."
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
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "description": "Custom XML request body (overrides the default template for the selected operation)"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
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
            "scenario": "Use Tally Solutions to get voucher in a workflow.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node executes get voucher and exposes its result for downstream nodes."
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
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "description": "Custom XML request body (overrides the default template for the selected operation)"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
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
            "scenario": "Use Tally Solutions to create voucher in a workflow.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node executes create voucher and exposes its result for downstream nodes."
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
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "description": "Custom XML request body (overrides the default template for the selected operation)"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
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
            "scenario": "Use Tally Solutions to get stock items in a workflow.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node executes get stock items and exposes its result for downstream nodes."
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
              "example": "http://localhost:9000",
              "placeholder": "http://localhost:9000",
              "defaultValue": "http://localhost:9000"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "string",
              "description": "Custom XML request body (overrides the default template for the selected operation)"
            },
            {
              "name": "Company Name",
              "internalKey": "companyName",
              "type": "string",
              "description": "Tally company name to scope requests",
              "example": "My Company Ltd",
              "placeholder": "My Company Ltd"
            },
            {
              "name": "Ledger Name",
              "internalKey": "ledgerName",
              "type": "string",
              "description": "Ledger name (required for get_ledger operation)",
              "example": "Cash",
              "placeholder": "Cash"
            },
            {
              "name": "Voucher Id",
              "internalKey": "voucherId",
              "type": "string",
              "description": "Voucher ID or number (required for get_voucher operation)",
              "example": "VCH-001",
              "placeholder": "VCH-001"
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
            "scenario": "Use Tally Solutions to get company info in a workflow.",
            "inputValues": {
              "Endpoint": "http://localhost:9000",
              "Payload": "",
              "Company Name": "My Company Ltd",
              "Ledger Name": "Cash",
              "Voucher Id": "VCH-001"
            },
            "expectedOutput": "The node executes get company info and exposes its result for downstream nodes."
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
