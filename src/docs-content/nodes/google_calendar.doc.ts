import type { NodeDoc } from '../types';

export const googleCalendarDoc: NodeDoc = {
  "slug": "google_calendar",
  "displayName": "Google Calendar",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_calendar.svg",
  "description": "Create, read, update calendar events Use this node when a workflow needs google calendar behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Open the Google Calendar developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Google Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.google.com/calendar/api/v3/reference",
  "resources": [
    {
      "name": "Event",
      "description": "Event is a Google Calendar resource available in this node.",
      "operations": [
        {
          "name": "List",
          "value": "list",
          "description": "List with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into list.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into get.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into create.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into update.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into search.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        }
      ]
    },
    {
      "name": "Calendar",
      "description": "Calendar is a Google Calendar resource available in this node.",
      "operations": [
        {
          "name": "List",
          "value": "list",
          "description": "List with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into list.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into get.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into create.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into update.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Google Calendar node using the configured input fields.",
          "fields": [
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Stored credential reference (optional; OAuth handled via Connections)",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Calendar Id",
              "internalKey": "calendarId",
              "type": "string",
              "required": false,
              "description": "Calendar ID",
              "example": "primary",
              "placeholder": "primary"
            },
            {
              "name": "Event Id",
              "internalKey": "eventId",
              "type": "string",
              "required": false,
              "description": "Event ID (for update/delete)",
              "example": "event-id",
              "placeholder": "event-id"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Event summary/title",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Start",
              "internalKey": "start",
              "type": "json",
              "required": false,
              "description": "Start datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "End",
              "internalKey": "end",
              "type": "json",
              "required": false,
              "description": "End datetime object (Google Calendar format)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Event Data",
              "internalKey": "eventData",
              "type": "json",
              "required": false,
              "description": "Full event payload for create/update (optional)",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Event description",
              "example": "{{ $json.description }}"
            },
            {
              "name": "Time Min",
              "internalKey": "timeMin",
              "type": "date",
              "required": false,
              "description": "Lower bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMin }}"
            },
            {
              "name": "Time Max",
              "internalKey": "timeMax",
              "type": "date",
              "required": false,
              "description": "Upper bound for list/search (RFC3339 timestamp)",
              "example": "{{ $json.timeMax }}"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for list/search",
              "example": "250",
              "defaultValue": "250"
            },
            {
              "name": "Q",
              "internalKey": "q",
              "type": "string",
              "required": false,
              "description": "Free text search query (for events.list)",
              "example": "{{ $json.q }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Google Calendar node.\nstructure: Value returned by the Google Calendar node.",
          "usageExample": {
            "scenario": "Use Google Calendar in a workflow and pass upstream data into search.",
            "inputValues": {
              "Credential Id": "cred_123",
              "Calendar Id": "primary",
              "Event Id": "event-id",
              "Summary": "{{ $json.summary }}",
              "Start": "{\"key\":\"value\"}",
              "End": "{\"key\":\"value\"}",
              "Event Data": "{\"key\":\"value\"}",
              "Description": "{{ $json.description }}",
              "Time Min": "{{ $json.timeMin }}",
              "Time Max": "{{ $json.timeMax }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/calendar/api/v3/reference"
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
