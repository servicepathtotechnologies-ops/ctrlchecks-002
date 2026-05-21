import type { NodeDoc } from '../types';

export const calendlyDoc: NodeDoc = {
  "slug": "calendly",
  "displayName": "Calendly",
  "category": "Data",
  "logoUrl": "/icons/nodes/calendly.svg",
  "description": "Fetch events, event types, scheduled meetings, and user info from Calendly.",
  "credentialType": "Calendly API Key",
  "credentialSetupSteps": [
    "What this is: Calendly uses an API key or account connection so CtrlChecks can safely access your Calendly account.",
    "Log in to your Calendly account at calendly.com.",
    "Click your profile photo (top right) -> Integrations -> API & Webhooks.",
    "Under \"Personal Access Tokens\", click \"Generate new token\" -> give it a name -> Create Token.",
    "Copy the token shown.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Calendly -> paste the token -> Save.",
    "Run a test step (e.g. list your event types) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Calendly node and select the saved connection."
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
              "description": "Calendly personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Calendly.\nWhere to get it: Open the Calendly dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "helpText": "What this field is: Calendly user URI for Calendly / Get events.\nHow to fill it: Enter the user uri value requested by Calendly, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.userUri}} or pick the value from the data picker.",
              "placeholder": "Enter User Uri"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "helpText": "What this field is: The unique URI of the Calendly event type.\nWhere to find it: Calendly API response or the event type URL in your Calendly dashboard.\nExample: https://api.calendly.com/event_types/ABCDEFGH",
              "placeholder": "Enter Event Type Uri"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_events",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Calendly data with get events after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "Calendly returns structured get events data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Calendly personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Calendly.\nWhere to get it: Open the Calendly dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "helpText": "What this field is: Calendly user URI for Calendly / Get event types.\nHow to fill it: Enter the user uri value requested by Calendly, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.userUri}} or pick the value from the data picker.",
              "placeholder": "Enter User Uri"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "helpText": "What this field is: The unique URI of the Calendly event type.\nWhere to find it: Calendly API response or the event type URL in your Calendly dashboard.\nExample: https://api.calendly.com/event_types/ABCDEFGH",
              "placeholder": "Enter Event Type Uri"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_event_types",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Calendly data with get event types after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "Calendly returns structured get event types data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Calendly personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Calendly.\nWhere to get it: Open the Calendly dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "helpText": "What this field is: Calendly user URI for Calendly / Get scheduled events.\nHow to fill it: Enter the user uri value requested by Calendly, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.userUri}} or pick the value from the data picker.",
              "placeholder": "Enter User Uri"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "helpText": "What this field is: The unique URI of the Calendly event type.\nWhere to find it: Calendly API response or the event type URL in your Calendly dashboard.\nExample: https://api.calendly.com/event_types/ABCDEFGH",
              "placeholder": "Enter Event Type Uri"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_scheduled_events",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Calendly data with get scheduled events after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "Calendly returns structured get scheduled events data that downstream nodes can reference with {{$json.fieldName}}."
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
              "description": "Calendly personal access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Calendly.\nWhere to get it: Open the Calendly dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "User Uri",
              "internalKey": "userUri",
              "type": "string",
              "required": false,
              "description": "Calendly user URI",
              "helpText": "What this field is: Calendly user URI for Calendly / Get user.\nHow to fill it: Enter the user uri value requested by Calendly, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.userUri}} or pick the value from the data picker.",
              "placeholder": "Enter User Uri"
            },
            {
              "name": "Event Type Uri",
              "internalKey": "eventTypeUri",
              "type": "string",
              "required": false,
              "description": "Calendly event type URI",
              "helpText": "What this field is: The unique URI of the Calendly event type.\nWhere to find it: Calendly API response or the event type URL in your Calendly dashboard.\nExample: https://api.calendly.com/event_types/ABCDEFGH",
              "placeholder": "Enter Event Type Uri"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_user",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Calendly data with get user after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "User Uri": "",
              "Event Type Uri": ""
            },
            "expectedOutput": "Calendly returns structured get user data that downstream nodes can reference with {{$json.fieldName}}."
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
