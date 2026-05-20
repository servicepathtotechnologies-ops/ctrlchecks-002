import type { NodeDoc } from '../types';

export const zoomVideoDoc: NodeDoc = {
  "slug": "zoom_video",
  "displayName": "Zoom Video",
  "category": "Communication",
  "logoUrl": "/icons/nodes/zoom_video.svg",
  "description": "Create and manage Zoom meetings via the Zoom API",
  "credentialType": "Zoom Credential",
  "credentialSetupSteps": [
    "Go to https://marketplace.zoom.us → Develop → Build App → choose \"Server-to-Server OAuth\" for API access.",
    "Note the Account ID, Client ID, and Client Secret.",
    "Add required scopes (e.g. meeting:write).",
    "In CtrlChecks, open Connections → Add Connection → Zoom → paste Account ID, Client ID, and Secret → Save."
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
              "description": "Zoom OAuth 2.0 access token"
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
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
            "scenario": "Use Zoom Video to createmeeting in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node executes createmeeting and exposes its result for downstream nodes."
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
              "description": "Zoom OAuth 2.0 access token"
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
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
            "scenario": "Use Zoom Video to listmeetings in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node executes listmeetings and exposes its result for downstream nodes."
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
              "description": "Zoom OAuth 2.0 access token"
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
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
            "scenario": "Use Zoom Video to getmeeting in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node executes getmeeting and exposes its result for downstream nodes."
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
              "description": "Zoom OAuth 2.0 access token"
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
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
            "scenario": "Use Zoom Video to deletemeeting in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node executes deletemeeting and exposes its result for downstream nodes."
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
              "description": "Zoom OAuth 2.0 access token"
            },
            {
              "name": "Topic",
              "internalKey": "topic",
              "type": "string",
              "description": "Meeting topic/title",
              "example": "Team Sync",
              "placeholder": "Team Sync"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Meeting duration in minutes",
              "example": "30",
              "placeholder": "30",
              "defaultValue": "60"
            },
            {
              "name": "Start Time",
              "internalKey": "startTime",
              "type": "string",
              "description": "Scheduled start time in ISO 8601 format (leave blank for instant meeting)",
              "example": "2026-05-01T10:00:00Z",
              "placeholder": "2026-05-01T10:00:00Z"
            },
            {
              "name": "Meeting Id",
              "internalKey": "meetingId",
              "type": "string",
              "description": "Zoom meeting ID (required for get, delete, update operations)",
              "example": "123456789",
              "placeholder": "123456789"
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
            "scenario": "Use Zoom Video to updatemeeting in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Topic": "Team Sync",
              "Duration": "30",
              "Start Time": "2026-05-01T10:00:00Z",
              "Meeting Id": "123456789"
            },
            "expectedOutput": "The node executes updatemeeting and exposes its result for downstream nodes."
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
