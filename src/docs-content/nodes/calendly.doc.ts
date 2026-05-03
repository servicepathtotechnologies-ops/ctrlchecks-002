import type { NodeDoc } from '../types';

export const calendlyDoc: NodeDoc = {
  "slug": "calendly",
  "displayName": "Calendly",
  "category": "Data",
  "logoUrl": "/icons/nodes/calendly.svg",
  "description": "Fetch events, event types, scheduled meetings, and user info from Calendly. Use this node when a workflow needs calendly behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Access Token Credential",
  "credentialSetupSteps": [
    "Open the Calendly developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Access Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.calendly.com/api-docs",
  "resources": [
    {
      "name": "Operations",
      "description": "Calendly exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Events",
          "value": "get_events",
          "description": "Get Events with the Calendly node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Calendly personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "example": "{{ $json.userUri }}",
              "defaultValue": ""
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "example": "{{ $json.eventTypeUri }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "calendly"
          },
          "outputDescription": "success: Indicates that the Calendly node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Calendly in a workflow and pass upstream data into get events.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "User Uri": "{{ $json.userUri }}",
              "Event Type Uri": "{{ $json.eventTypeUri }}"
            },
            "expectedOutput": "The node runs get events and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get Event Types",
          "value": "get_event_types",
          "description": "Get Event Types with the Calendly node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Calendly personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "example": "{{ $json.userUri }}",
              "defaultValue": ""
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "example": "{{ $json.eventTypeUri }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "calendly"
          },
          "outputDescription": "success: Indicates that the Calendly node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Calendly in a workflow and pass upstream data into get event types.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "User Uri": "{{ $json.userUri }}",
              "Event Type Uri": "{{ $json.eventTypeUri }}"
            },
            "expectedOutput": "The node runs get event types and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get Scheduled Events",
          "value": "get_scheduled_events",
          "description": "Get Scheduled Events with the Calendly node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Calendly personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "example": "{{ $json.userUri }}",
              "defaultValue": ""
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "example": "{{ $json.eventTypeUri }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "calendly"
          },
          "outputDescription": "success: Indicates that the Calendly node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Calendly in a workflow and pass upstream data into get scheduled events.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "User Uri": "{{ $json.userUri }}",
              "Event Type Uri": "{{ $json.eventTypeUri }}"
            },
            "expectedOutput": "The node runs get scheduled events and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get User",
          "value": "get_user",
          "description": "Get User with the Calendly node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Calendly personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "example": "{{ $json.userUri }}",
              "defaultValue": ""
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "example": "{{ $json.eventTypeUri }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "calendly"
          },
          "outputDescription": "success: Indicates that the Calendly node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Calendly in a workflow and pass upstream data into get user.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "User Uri": "{{ $json.userUri }}",
              "Event Type Uri": "{{ $json.eventTypeUri }}"
            },
            "expectedOutput": "The node runs get user and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
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
