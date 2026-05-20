import type { NodeDoc } from '../types';

export const googleCalendarDoc: NodeDoc = {
  "slug": "google_calendar",
  "displayName": "Google Calendar",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_calendar.svg",
  "description": "Create, read, update calendar events",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Calendar exposes operation choices directly.",
      "operations": [
        {
          "name": "List",
          "value": "list",
          "description": "List events from a Google Calendar within a time range.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "items": [
              {
                "id": "event1",
                "summary": "Team Standup",
                "start": {
                  "dateTime": "2025-01-15T09:00:00Z"
                },
                "end": {
                  "dateTime": "2025-01-15T09:30:00Z"
                },
                "attendees": [
                  {
                    "email": "alice@example.com"
                  }
                ]
              }
            ],
            "nextPageToken": null
          },
          "outputDescription": "items: Array of calendar event objects. Each has id, summary, start, end, and attendees. nextPageToken: For paginating more events.",
          "usageExample": {
            "scenario": "Get today's meetings and post them as a morning summary to Slack",
            "inputValues": {
              "calendarId": "primary",
              "timeMin": "{{$now}}T00:00:00Z",
              "timeMax": "{{$now}}T23:59:59Z",
              "maxResults": "20"
            },
            "expectedOutput": "Returns all events today. Format `{{$json.items}}` into a Slack message with event summaries and times."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Google Calendar node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Value returned by this node.\nsuccess: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Google Calendar to get in a workflow.",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new event on a Google Calendar.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "id": "newEvent789",
            "summary": "Product Demo",
            "start": {
              "dateTime": "2025-01-20T14:00:00Z"
            },
            "end": {
              "dateTime": "2025-01-20T15:00:00Z"
            },
            "htmlLink": "https://calendar.google.com/event?eid=..."
          },
          "outputDescription": "id: The new calendar event ID. summary: Event title. start/end: Event timestamps. htmlLink: URL to view the event in Google Calendar.",
          "usageExample": {
            "scenario": "Create a Google Calendar event when a Calendly booking is confirmed",
            "inputValues": {
              "calendarId": "primary",
              "summary": "{{$json.eventType}} with {{$json.inviteeName}}",
              "startDateTime": "{{$json.startTime}}",
              "endDateTime": "{{$json.endTime}}",
              "description": "Booked via Calendly"
            },
            "expectedOutput": "Event is created. Share `{{$json.htmlLink}}` as a calendar invite link."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update an existing Google Calendar event.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "id": "event1",
            "summary": "Rescheduled: Team Standup",
            "start": {
              "dateTime": "2025-01-16T10:00:00Z"
            },
            "updated": "2025-01-15T12:00:00Z"
          },
          "outputDescription": "id: The updated event ID. summary: Updated event title. updated: ISO timestamp of the last update.",
          "usageExample": {
            "scenario": "Reschedule an event when a Typeform rescheduling request comes in",
            "inputValues": {
              "calendarId": "primary",
              "eventId": "{{$json.eventId}}",
              "summary": "{{$json.newTitle}}",
              "startDateTime": "{{$json.newStartTime}}"
            },
            "expectedOutput": "Event is updated. `{{$json.updated}}` confirms the time of the change."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Google Calendar node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Value returned by this node.\nsuccess: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Google Calendar to delete in a workflow.",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Google Calendar node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource type (event, calendar, etc.)",
              "example": "event",
              "placeholder": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Event summary/title"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Event description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "description": "Lower bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "description": "Upper bound for list/search (RFC3339 timestamp)"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for list/search",
              "example": "250",
              "placeholder": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "description": "Free text search query (for events.list)"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Value returned by this node.\nsuccess: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Google Calendar to search in a workflow.",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Calendar node."
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
