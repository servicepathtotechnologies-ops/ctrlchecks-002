import type { NodeDoc } from '../types';

export const calendlyDoc: NodeDoc = {
  "slug": "calendly",
  "displayName": "Calendly",
  "category": "Data",
  "logoUrl": "/icons/nodes/calendly.svg",
  "description": "Fetch events, event types, scheduled meetings, and user info from Calendly.",
  "credentialType": "Calendly API Key",
  "credentialSetupSteps": [
    "Log in to Calendly → Integrations → API & Webhooks → Personal Access Tokens.",
    "Click \"Generate new token\", give it a name, and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Calendly → paste the token → Save."
  ],
  "credentialDocsUrl": "https://developer.calendly.com/api-docs/ZG9jOjExMjM0NzU2-calendly-developer-portal",
  "resources": [
    {
      "name": "Operations",
      "description": "Calendly exposes operation choices directly.",
      "operations": [
        {
          "name": "Get events",
          "value": "get_events",
          "description": "Get events using the Calendly node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Calendly personal access token"
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "description": "Calendly user URI"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "description": "Calendly event type URI"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Calendly to get events in a workflow.",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "The node executes get events and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get event types",
          "value": "get_event_types",
          "description": "Get event types using the Calendly node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Calendly personal access token"
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "description": "Calendly user URI"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "description": "Calendly event type URI"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Calendly to get event types in a workflow.",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "The node executes get event types and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get scheduled events",
          "value": "get_scheduled_events",
          "description": "Get scheduled events using the Calendly node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Calendly personal access token"
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "description": "Calendly user URI"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "description": "Calendly event type URI"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Calendly to get scheduled events in a workflow.",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "The node executes get scheduled events and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        },
        {
          "name": "Get user",
          "value": "get_user",
          "description": "Get user using the Calendly node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Calendly personal access token"
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "description": "Calendly user URI"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "description": "Calendly event type URI"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Calendly to get user in a workflow.",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "The node executes get user and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.calendly.com/api-docs"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Calendly node."
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
