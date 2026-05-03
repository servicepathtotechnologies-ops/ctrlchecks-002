import type { NodeDoc } from '../types';

export const intercomDoc: NodeDoc = {
  "slug": "intercom",
  "displayName": "Intercom",
  "category": "Data",
  "logoUrl": "/icons/nodes/intercom.svg",
  "description": "Intercom messaging operations Use this node when a workflow needs intercom behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Intercom Token",
  "credentialSetupSteps": [
    "Open the Intercom developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Intercom Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/",
  "resources": [
    {
      "name": "Operations",
      "description": "Intercom exposes operation choices directly.",
      "operations": [
        {
          "name": "Send",
          "value": "send",
          "description": "Send with the Intercom node using the configured input fields.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Intercom OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Message body for the conversation reply",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Admin Id",
              "internalKey": "adminId",
              "type": "string",
              "required": false,
              "description": "Intercom admin ID used when replying as an admin",
              "example": "{{ $json.adminId }}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "Number of conversations to list",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "Starting After",
              "internalKey": "startingAfter",
              "type": "string",
              "required": false,
              "description": "Pagination cursor for listing conversations",
              "example": "{{ $json.startingAfter }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Intercom API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intercom node.\nstructure: Value returned by the Intercom node.\nconvertible: Value returned by the Intercom node.\ndefaultValue: Value returned by the Intercom node.",
          "usageExample": {
            "scenario": "Use Intercom in a workflow and pass upstream data into send.",
            "inputValues": {
              "Conversation Id": "conv-id",
              "Access Token": "{{ $json.accessToken }}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Admin Id": "{{ $json.adminId }}",
              "Per Page": "20",
              "Starting After": "{{ $json.startingAfter }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs send and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Intercom node using the configured input fields.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Intercom OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Message body for the conversation reply",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Admin Id",
              "internalKey": "adminId",
              "type": "string",
              "required": false,
              "description": "Intercom admin ID used when replying as an admin",
              "example": "{{ $json.adminId }}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "Number of conversations to list",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "Starting After",
              "internalKey": "startingAfter",
              "type": "string",
              "required": false,
              "description": "Pagination cursor for listing conversations",
              "example": "{{ $json.startingAfter }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Intercom API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intercom node.\nstructure: Value returned by the Intercom node.\nconvertible: Value returned by the Intercom node.\ndefaultValue: Value returned by the Intercom node.",
          "usageExample": {
            "scenario": "Use Intercom in a workflow and pass upstream data into get.",
            "inputValues": {
              "Conversation Id": "conv-id",
              "Access Token": "{{ $json.accessToken }}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Admin Id": "{{ $json.adminId }}",
              "Per Page": "20",
              "Starting After": "{{ $json.startingAfter }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Intercom node using the configured input fields.",
          "fields": [
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "conv-id",
              "placeholder": "conv-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Intercom OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Message body for the conversation reply",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Admin Id",
              "internalKey": "adminId",
              "type": "string",
              "required": false,
              "description": "Intercom admin ID used when replying as an admin",
              "example": "{{ $json.adminId }}"
            },
            {
              "name": "Per Page",
              "internalKey": "perPage",
              "type": "number",
              "required": false,
              "description": "Number of conversations to list",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "Starting After",
              "internalKey": "startingAfter",
              "type": "string",
              "required": false,
              "description": "Pagination cursor for listing conversations",
              "example": "{{ $json.startingAfter }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Intercom API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Intercom node.\nstructure: Value returned by the Intercom node.\nconvertible: Value returned by the Intercom node.\ndefaultValue: Value returned by the Intercom node.",
          "usageExample": {
            "scenario": "Use Intercom in a workflow and pass upstream data into list.",
            "inputValues": {
              "Conversation Id": "conv-id",
              "Access Token": "{{ $json.accessToken }}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Admin Id": "{{ $json.adminId }}",
              "Per Page": "20",
              "Starting After": "{{ $json.startingAfter }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/"
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
