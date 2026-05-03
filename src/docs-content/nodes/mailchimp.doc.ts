import type { NodeDoc } from '../types';

export const mailchimpDoc: NodeDoc = {
  "slug": "mailchimp",
  "displayName": "Mailchimp",
  "category": "Data",
  "logoUrl": "/icons/nodes/mailchimp.svg",
  "description": "Mailchimp email marketing operations Use this node when a workflow needs mailchimp behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Mailchimp Credential",
  "credentialSetupSteps": [
    "Open the Mailchimp developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Mailchimp Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://mailchimp.com/developer/marketing/api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Mailchimp exposes operation choices directly.",
      "operations": [
        {
          "name": "Subscribe",
          "value": "subscribe",
          "description": "Subscribe with the Mailchimp node using the configured input fields.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Mailchimp Marketing API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Server Prefix",
              "internalKey": "serverPrefix",
              "type": "string",
              "required": false,
              "description": "Mailchimp data-center prefix, e.g. us21. Auto-detected from most API keys.",
              "example": "us21",
              "placeholder": "us21"
            },
            {
              "name": "Merge Fields",
              "internalKey": "mergeFields",
              "type": "json",
              "required": false,
              "description": "Mailchimp merge fields, e.g. { \"FNAME\": \"Asha\" }",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Campaign Id",
              "internalKey": "campaignId",
              "type": "string",
              "required": false,
              "description": "Existing Mailchimp campaign ID to send",
              "example": "{{ $json.campaignId }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Mailchimp API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Mailchimp node.\nstructure: Value returned by the Mailchimp node.\nconvertible: Value returned by the Mailchimp node.\ndefaultValue: Value returned by the Mailchimp node.",
          "usageExample": {
            "scenario": "Use Mailchimp in a workflow and pass upstream data into subscribe.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}",
              "Api Key": "{{ $json.apiKey }}",
              "Server Prefix": "us21",
              "Merge Fields": "{\"key\":\"value\"}",
              "Campaign Id": "{{ $json.campaignId }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs subscribe and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Unsubscribe",
          "value": "unsubscribe",
          "description": "Unsubscribe with the Mailchimp node using the configured input fields.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Mailchimp Marketing API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Server Prefix",
              "internalKey": "serverPrefix",
              "type": "string",
              "required": false,
              "description": "Mailchimp data-center prefix, e.g. us21. Auto-detected from most API keys.",
              "example": "us21",
              "placeholder": "us21"
            },
            {
              "name": "Merge Fields",
              "internalKey": "mergeFields",
              "type": "json",
              "required": false,
              "description": "Mailchimp merge fields, e.g. { \"FNAME\": \"Asha\" }",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Campaign Id",
              "internalKey": "campaignId",
              "type": "string",
              "required": false,
              "description": "Existing Mailchimp campaign ID to send",
              "example": "{{ $json.campaignId }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Mailchimp API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Mailchimp node.\nstructure: Value returned by the Mailchimp node.\nconvertible: Value returned by the Mailchimp node.\ndefaultValue: Value returned by the Mailchimp node.",
          "usageExample": {
            "scenario": "Use Mailchimp in a workflow and pass upstream data into unsubscribe.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}",
              "Api Key": "{{ $json.apiKey }}",
              "Server Prefix": "us21",
              "Merge Fields": "{\"key\":\"value\"}",
              "Campaign Id": "{{ $json.campaignId }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs unsubscribe and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Send",
          "value": "send",
          "description": "Send with the Mailchimp node using the configured input fields.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "example": "list-id",
              "placeholder": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "example": "{{$json.email}}",
              "placeholder": "{{$json.email}}"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Mailchimp Marketing API key",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Server Prefix",
              "internalKey": "serverPrefix",
              "type": "string",
              "required": false,
              "description": "Mailchimp data-center prefix, e.g. us21. Auto-detected from most API keys.",
              "example": "us21",
              "placeholder": "us21"
            },
            {
              "name": "Merge Fields",
              "internalKey": "mergeFields",
              "type": "json",
              "required": false,
              "description": "Mailchimp merge fields, e.g. { \"FNAME\": \"Asha\" }",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Campaign Id",
              "internalKey": "campaignId",
              "type": "string",
              "required": false,
              "description": "Existing Mailchimp campaign ID to send",
              "example": "{{ $json.campaignId }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Raw Mailchimp API payload override",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Mailchimp node.\nstructure: Value returned by the Mailchimp node.\nconvertible: Value returned by the Mailchimp node.\ndefaultValue: Value returned by the Mailchimp node.",
          "usageExample": {
            "scenario": "Use Mailchimp in a workflow and pass upstream data into send.",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}",
              "Api Key": "{{ $json.apiKey }}",
              "Server Prefix": "us21",
              "Merge Fields": "{\"key\":\"value\"}",
              "Campaign Id": "{{ $json.campaignId }}",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs send and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
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
