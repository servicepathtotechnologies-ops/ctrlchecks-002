import type { NodeDoc } from '../types';

export const zoomVideoDoc: NodeDoc = {
  "slug": "zoom_video",
  "displayName": "Zoom Video",
  "category": "Communication",
  "logoUrl": "/icons/nodes/zoom_video.svg",
  "description": "Create and manage Zoom meetings via the Zoom API",
  "credentialType": "Zoom Credential",
  "credentialSetupSteps": [
    "What this is: Zoom uses an OAuth connection so CtrlChecks can safely access your Zoom account.",
    "Go to marketplace.zoom.us and sign in with your Zoom account.",
    "Click \"Develop\" (top right) -> Build App -> choose \"Server-to-Server OAuth\" (for automated/background access).",
    "Give the app a name (e.g. CtrlChecks) -> Create.",
    "On the app page, note your Account ID, Client ID, and Client Secret.",
    "Under \"Scopes\", add: meeting:write:admin (to create meetings), meeting:read:admin (to list meetings). Click Continue.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Zoom -> paste Account ID, Client ID, and Client Secret -> Save.",
    "Run a test step (e.g. create a meeting) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Zoom node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.zoom.us/docs/internal-apps/s2s-oauth/",
  "resources": [
    {
      "name": "Operations",
      "description": "Zoom Video exposes operation choices directly.",
      "operations": [
        {
          "name": "CreateMeeting",
          "value": "createMeeting",
          "description": "CreateMeeting using the Zoom Video node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoom Video.\nWhere to get it: Open the Zoom Video dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "helpText": "What this field is: The meeting title — shown to all participants on the invite, in the Zoom app, and in calendar events.\nExample: Weekly Team Sync — {{$json.teamName}} or Q1 Sales Review",
              "placeholder": "Team Sync",
              "example": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "helpText": "What this field is: How long the meeting runs, in minutes.\nExample: 30 (30 minutes), 60 (1 hour), 90 (1.5 hours).",
              "placeholder": "30",
              "example": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "helpText": "What this field is: The date and time the meeting starts.\nFormat: ISO 8601 — YYYY-MM-DDTHH:MM:SSZ (the Z means UTC timezone).\nExample: 2025-06-15T14:00:00Z means June 15, 2025 at 2:00 PM UTC (which is 10:00 AM Eastern US time).\nTip: Use {{$json.meetingTime}} from an earlier step if the time comes from a form or calendar.",
              "placeholder": "2026-05-01T10:00:00Z",
              "example": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "helpText": "What this field is: Zoom meeting ID (required for get, delete, update operations) for Zoom Video / CreateMeeting.\nWhere to find it: Open the item in Zoom Video and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.meetingId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming Zoom Video data with create meeting after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "Zoom Video returns structured create meeting data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "ListMeetings",
          "value": "listMeetings",
          "description": "ListMeetings using the Zoom Video node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoom Video.\nWhere to get it: Open the Zoom Video dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "helpText": "What this field is: Meeting topic/title for Zoom Video / ListMeetings.\nHow to fill it: Enter the topic value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.topic}} or pick the value from the data picker.",
              "placeholder": "Team Sync",
              "example": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "helpText": "What this field is: A number used for duration in Zoom Video / ListMeetings.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.duration}} or pick the value from the data picker.",
              "placeholder": "30",
              "example": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "helpText": "What this field is: Scheduled start time in ISO 8601 format (leave blank for instant meeting) for Zoom Video / ListMeetings.\nHow to fill it: Enter the start time value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.startTime}} or pick the value from the data picker.",
              "placeholder": "2026-05-01T10:00:00Z",
              "example": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "helpText": "What this field is: Zoom meeting ID (required for get, delete, update operations) for Zoom Video / ListMeetings.\nWhere to find it: Open the item in Zoom Video and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.meetingId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming Zoom Video data with list meetings after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "Zoom Video returns structured list meetings data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "GetMeeting",
          "value": "getMeeting",
          "description": "GetMeeting using the Zoom Video node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoom Video.\nWhere to get it: Open the Zoom Video dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "helpText": "What this field is: Meeting topic/title for Zoom Video / GetMeeting.\nHow to fill it: Enter the topic value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.topic}} or pick the value from the data picker.",
              "placeholder": "Team Sync",
              "example": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "helpText": "What this field is: A number used for duration in Zoom Video / GetMeeting.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.duration}} or pick the value from the data picker.",
              "placeholder": "30",
              "example": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "helpText": "What this field is: Scheduled start time in ISO 8601 format (leave blank for instant meeting) for Zoom Video / GetMeeting.\nHow to fill it: Enter the start time value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.startTime}} or pick the value from the data picker.",
              "placeholder": "2026-05-01T10:00:00Z",
              "example": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "helpText": "What this field is: Zoom meeting ID (required for get, delete, update operations) for Zoom Video / GetMeeting.\nWhere to find it: Open the item in Zoom Video and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.meetingId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming Zoom Video data with get meeting after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "Zoom Video returns structured get meeting data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "DeleteMeeting",
          "value": "deleteMeeting",
          "description": "DeleteMeeting using the Zoom Video node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoom Video.\nWhere to get it: Open the Zoom Video dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "helpText": "What this field is: Meeting topic/title for Zoom Video / DeleteMeeting.\nHow to fill it: Enter the topic value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.topic}} or pick the value from the data picker.",
              "placeholder": "Team Sync",
              "example": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "helpText": "What this field is: A number used for duration in Zoom Video / DeleteMeeting.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.duration}} or pick the value from the data picker.",
              "placeholder": "30",
              "example": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "helpText": "What this field is: Scheduled start time in ISO 8601 format (leave blank for instant meeting) for Zoom Video / DeleteMeeting.\nHow to fill it: Enter the start time value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.startTime}} or pick the value from the data picker.",
              "placeholder": "2026-05-01T10:00:00Z",
              "example": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "helpText": "What this field is: Zoom meeting ID (required for get, delete, update operations) for Zoom Video / DeleteMeeting.\nWhere to find it: Open the item in Zoom Video and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.meetingId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming Zoom Video data with delete meeting after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "Zoom Video returns structured delete meeting data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "UpdateMeeting",
          "value": "updateMeeting",
          "description": "UpdateMeeting using the Zoom Video node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Zoom Video.\nWhere to get it: Open the Zoom Video dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "helpText": "What this field is: Meeting topic/title for Zoom Video / UpdateMeeting.\nHow to fill it: Enter the topic value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.topic}} or pick the value from the data picker.",
              "placeholder": "Team Sync",
              "example": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "helpText": "What this field is: A number used for duration in Zoom Video / UpdateMeeting.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.duration}} or pick the value from the data picker.",
              "placeholder": "30",
              "example": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "helpText": "What this field is: Scheduled start time in ISO 8601 format (leave blank for instant meeting) for Zoom Video / UpdateMeeting.\nHow to fill it: Enter the start time value requested by Zoom Video, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.startTime}} or pick the value from the data picker.",
              "placeholder": "2026-05-01T10:00:00Z",
              "example": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "helpText": "What this field is: Zoom meeting ID (required for get, delete, update operations) for Zoom Video / UpdateMeeting.\nWhere to find it: Open the item in Zoom Video and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.meetingId}} or pick the value from the data picker.",
              "placeholder": "123456789",
              "example": "123456789"
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
            "scenario": "Process incoming Zoom Video data with update meeting after a related upstream event is received",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "Zoom Video returns structured update meeting data that downstream nodes can reference with {{$json.fieldName}}."
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
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Zoom Video node."
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
