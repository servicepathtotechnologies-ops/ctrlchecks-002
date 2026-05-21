import type { NodeDoc } from '../types';

export const intercomDoc: NodeDoc = {
  "slug": "intercom",
  "displayName": "Intercom",
  "category": "Data",
  "logoUrl": "/icons/nodes/intercom.svg",
  "description": "Intercom messaging operations",
  "credentialType": "Intercom API Key",
  "credentialSetupSteps": [
    "What this is: Intercom uses an API key or account connection so CtrlChecks can safely access your Intercom account.",
    "Log in to your Intercom account at app.intercom.com.",
    "Click Settings (gear icon) -> Integrations -> Developer Hub.",
    "Click \"Your Apps\" -> select your app (or create one) -> click \"Authentication\".",
    "Copy the Access Token shown.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Intercom -> paste the access token -> Save.",
    "Run a test step (e.g. list users/contacts) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Intercom node and select the saved connection."
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
              "required": false,
              "description": "Conversation ID",
              "helpText": "What this field is: Conversation ID for Intercom / Send.\nWhere to find it: Open the item in Intercom and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.conversationId}} or pick the value from the data picker.",
              "placeholder": "conv-id",
              "example": "conv-id"
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
            "scenario": "Process incoming Intercom data with send after a related upstream event is received",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "Intercom returns structured send data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Conversation ID",
              "helpText": "What this field is: Conversation ID for Intercom / Get.\nWhere to find it: Open the item in Intercom and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.conversationId}} or pick the value from the data picker.",
              "placeholder": "conv-id",
              "example": "conv-id"
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
            "scenario": "Process incoming Intercom data with get after a related upstream event is received",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "Intercom returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Conversation ID",
              "helpText": "What this field is: Conversation ID for Intercom / List.\nWhere to find it: Open the item in Intercom and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.conversationId}} or pick the value from the data picker.",
              "placeholder": "conv-id",
              "example": "conv-id"
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
            "scenario": "Process incoming Intercom data with list after a related upstream event is received",
            "inputValues": {
              "Conversation Id": "conv-id"
            },
            "expectedOutput": "Intercom returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
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
