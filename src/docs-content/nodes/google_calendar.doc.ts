import type { NodeDoc } from '../types';

export const googleCalendarDoc: NodeDoc = {
  "slug": "google_calendar",
  "displayName": "Google Calendar",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_calendar.svg",
  "description": "Create, read, update calendar events",
  "credentialType": "Google Calendar OAuth",
  "credentialSetupSteps": [
    "What this is: Google Calendar uses an OAuth connection so CtrlChecks can safely access your Google Calendar account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Google Calendar API: calendar.events.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Calendar -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Calendar node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / List.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / List.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / List.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / List.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / List.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / List.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / List.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / List.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / List.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / List.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / List.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / Get.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / Get.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / Get.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / Get.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / Get.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / Get.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / Get.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / Get.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / Get.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / Get.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Unique identifier returned by the service.\nsuccess: Whether the service accepted the request.",
          "usageExample": {
            "scenario": "Process incoming Google Calendar data with get after a related upstream event is received",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "Google Calendar returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / Create.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / Create.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / Create.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / Create.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / Create.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / Create.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / Create.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / Create.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / Create.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / Create.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / Create.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / Update.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / Update.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / Update.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / Update.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / Update.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / Update.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / Update.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / Update.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / Update.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / Update.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / Delete.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / Delete.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / Delete.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / Delete.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / Delete.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / Delete.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / Delete.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / Delete.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / Delete.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / Delete.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Unique identifier returned by the service.\nsuccess: Whether the service accepted the request.",
          "usageExample": {
            "scenario": "Process incoming Google Calendar data with delete after a related upstream event is received",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "Google Calendar returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Resource chooses the kind of Google Calendar item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Google Calendar.\nExample: In Google Calendar, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "event",
              "example": "event",
              "defaultValue": "event"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "helpText": "What this field is: Calendar ID for Google Calendar / Search.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.calendarId}} or pick the value from the data picker.",
              "placeholder": "primary",
              "example": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "helpText": "What this field is: Event ID (for update/delete) for Google Calendar / Search.\nWhere to find it: Open the item in Google Calendar and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.eventId}} or pick the value from the data picker.",
              "placeholder": "event-id",
              "example": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "helpText": "What this field is: Event summary/title for Google Calendar / Search.\nHow to fill it: Enter the summary value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "helpText": "What this field is: Start datetime object (Google Calendar format) for Google Calendar / Search.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.start}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "helpText": "What this field is: End datetime object (Google Calendar format) for Google Calendar / Search.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.end}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "helpText": "What this field is: Full event payload for create/update (optional) for Google Calendar / Search.\nHow to fill it: Enter valid JSON in the format Google Calendar expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.eventData}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Event description",
              "helpText": "What this field is: Event description for Google Calendar / Search.\nHow to fill it: Type the message, prompt, or content you want Google Calendar to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "string",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Lower bound for list/search (RFC3339 timestamp) for Google Calendar / Search.\nHow to fill it: Enter the time min value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMin}} or pick the value from the data picker.",
              "placeholder": "Enter Time Min"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "string",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "helpText": "What this field is: Upper bound for list/search (RFC3339 timestamp) for Google Calendar / Search.\nHow to fill it: Enter the time max value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.timeMax}} or pick the value from the data picker.",
              "placeholder": "Enter Time Max"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "helpText": "What this field is: A number used for max results in Google Calendar / Search.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "250",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "helpText": "What this field is: Free text search query (for events.list) for Google Calendar / Search.\nHow to fill it: Enter the q value requested by Google Calendar, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.q}} or pick the value from the data picker.",
              "placeholder": "Enter Q"
            }
          ],
          "outputExample": {
            "eventId": "abc123",
            "success": true
          },
          "outputDescription": "eventId: Unique identifier returned by the service.\nsuccess: Whether the service accepted the request.",
          "usageExample": {
            "scenario": "Process incoming Google Calendar data with search after a related upstream event is received",
            "inputValues": {
              "Resource": "event",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "",
              "Start": "{\"key\":\"value\"}"
            },
            "expectedOutput": "Google Calendar returns structured search data that downstream nodes can reference with {{$json.fieldName}}."
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
