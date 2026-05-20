import type { NodeDoc } from '../types';

export const mailchimpDoc: NodeDoc = {
  "slug": "mailchimp",
  "displayName": "Mailchimp",
  "category": "Data",
  "logoUrl": "/icons/nodes/mailchimp.svg",
  "description": "Mailchimp email marketing operations",
  "credentialType": "Mailchimp API Key",
  "credentialSetupSteps": [
    "Log in to Mailchimp → Account → Extras → API keys.",
    "Click \"Create A Key\" and copy the key.",
    "In CtrlChecks, open Connections → Add Connection → Mailchimp → paste the API key → Save."
  ],
  "credentialDocsUrl": "https://mailchimp.com/developer/marketing/guides/quick-start/",
  "resources": [
    {
      "name": "Operations",
      "description": "Mailchimp exposes operation choices directly.",
      "operations": [
        {
          "name": "Subscribe",
          "value": "subscribe",
          "description": "Subscribe using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
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
            "scenario": "Use Mailchimp to subscribe in a workflow.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "The node executes subscribe and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Unsubscribe",
          "value": "unsubscribe",
          "description": "Unsubscribe using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
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
            "scenario": "Use Mailchimp to unsubscribe in a workflow.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "The node executes unsubscribe and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Send",
          "value": "send",
          "description": "Send using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
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
            "scenario": "Use Mailchimp to send in a workflow.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "The node executes send and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Mailchimp node."
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
