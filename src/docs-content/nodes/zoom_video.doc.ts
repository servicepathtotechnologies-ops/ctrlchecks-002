import type { NodeDoc } from '../types';

export const zoomVideoDoc: NodeDoc = {
  "slug": "zoom_video",
  "displayName": "Zoom Video",
  "category": "Communication",
  "logoUrl": "/icons/nodes/zoom_video.svg",
  "description": "Create and manage Zoom meetings via the Zoom API Use this node when a workflow needs zoom video behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Zoom Token",
  "credentialSetupSteps": [
    "Open the Zoom Video developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Zoom Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "Zoom Video exposes operation choices directly.",
      "operations": [
        {
          "name": "Create Meeting",
          "value": "createMeeting",
          "description": "Create Meeting with the Zoom Video node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "date",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Zoom Video node.\ndata: Value returned by the Zoom Video node.\nerror: Value returned by the Zoom Video node.",
          "usageExample": {
            "scenario": "Use Zoom Video in a workflow and pass upstream data into create meeting.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node runs create meeting and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "List Meetings",
          "value": "listMeetings",
          "description": "List Meetings with the Zoom Video node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "date",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Zoom Video node.\ndata: Value returned by the Zoom Video node.\nerror: Value returned by the Zoom Video node.",
          "usageExample": {
            "scenario": "Use Zoom Video in a workflow and pass upstream data into list meetings.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node runs list meetings and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get Meeting",
          "value": "getMeeting",
          "description": "Get Meeting with the Zoom Video node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "date",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Zoom Video node.\ndata: Value returned by the Zoom Video node.\nerror: Value returned by the Zoom Video node.",
          "usageExample": {
            "scenario": "Use Zoom Video in a workflow and pass upstream data into get meeting.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node runs get meeting and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete Meeting",
          "value": "deleteMeeting",
          "description": "Delete Meeting with the Zoom Video node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "date",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Zoom Video node.\ndata: Value returned by the Zoom Video node.\nerror: Value returned by the Zoom Video node.",
          "usageExample": {
            "scenario": "Use Zoom Video in a workflow and pass upstream data into delete meeting.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node runs delete meeting and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Update Meeting",
          "value": "updateMeeting",
          "description": "Update Meeting with the Zoom Video node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Zoom OAuth 2.0 access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "required": false,
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "date",
              "required": false,
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "required": false,
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Value returned by the Zoom Video node.\ndata: Value returned by the Zoom Video node.\nerror: Value returned by the Zoom Video node.",
          "usageExample": {
            "scenario": "Use Zoom Video in a workflow and pass upstream data into update meeting.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node runs update meeting and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
