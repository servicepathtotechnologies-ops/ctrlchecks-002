import type { NodeDoc } from '../types';

export const intercomDoc: NodeDoc = {
  "slug": "intercom",
  "displayName": "Intercom",
  "category": "Data",
  "logoUrl": "/icons/nodes/intercom.svg",
  "description": "Intercom messaging operations",
  "credentialType": "Intercom API Key",
  "credentialSetupSteps": [
    "Log in to Intercom → Settings → Integrations → Developer Hub → Your App → Access Tokens.",
    "Copy the Access Token.",
    "In CtrlChecks, open Connections → Add Connection → Intercom → paste the token → Save."
  ],
  "credentialDocsUrl": "https://developers.intercom.com/building-apps/docs/authorization",
  "resources": [
    {
      "name": "Operations",
      "description": "Intercom exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send using the Intercom node.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
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
            "scenario": "Use Intercom to send in a workflow.",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "The node executes send and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Intercom node.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
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
            "scenario": "Use Intercom to get in a workflow.",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the Intercom node.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
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
            "scenario": "Use Intercom to list in a workflow.",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Intercom node."
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
