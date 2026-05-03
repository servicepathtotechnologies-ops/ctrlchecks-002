import type { NodeDoc } from '../types';

export const googleTasksDoc: NodeDoc = {
  "slug": "google_tasks",
  "displayName": "Google Tasks",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_tasks.svg",
  "description": "Manage Google Tasks Use this node when a workflow needs google tasks behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Tasks exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Google Tasks node using the configured input fields.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
            },
            {
              "name": "Task List Id",
              "internalKey": "taskListId",
              "type": "string",
              "required": false,
              "description": "Google Tasks task list ID. Use @default for the primary list.",
              "example": "@default",
              "defaultValue": "@default"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Task title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Task notes/details",
              "example": "{{ $json.notes }}"
            },
            {
              "name": "Due",
              "internalKey": "due",
              "type": "string",
              "required": false,
              "description": "Due date/time in RFC3339 format",
              "example": "{{ $json.due }}"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status, for example needsAction or completed",
              "example": "{{ $json.status }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Tasks node.\nitemType: Value returned by the Google Tasks node.\nconvertible: Value returned by the Google Tasks node.\ndefaultValue: Value returned by the Google Tasks node.",
          "usageExample": {
            "scenario": "Use Google Tasks in a workflow and pass upstream data into create.",
            "inputValues": {
              "Task Id": "task-id",
              "Task List Id": "@default",
              "Title": "{{ $json.title }}",
              "Notes": "{{ $json.notes }}",
              "Due": "{{ $json.due }}",
              "Status": "{{ $json.status }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Google Tasks node using the configured input fields.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
            },
            {
              "name": "Task List Id",
              "internalKey": "taskListId",
              "type": "string",
              "required": false,
              "description": "Google Tasks task list ID. Use @default for the primary list.",
              "example": "@default",
              "defaultValue": "@default"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Task title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Task notes/details",
              "example": "{{ $json.notes }}"
            },
            {
              "name": "Due",
              "internalKey": "due",
              "type": "string",
              "required": false,
              "description": "Due date/time in RFC3339 format",
              "example": "{{ $json.due }}"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status, for example needsAction or completed",
              "example": "{{ $json.status }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Tasks node.\nitemType: Value returned by the Google Tasks node.\nconvertible: Value returned by the Google Tasks node.\ndefaultValue: Value returned by the Google Tasks node.",
          "usageExample": {
            "scenario": "Use Google Tasks in a workflow and pass upstream data into read.",
            "inputValues": {
              "Task Id": "task-id",
              "Task List Id": "@default",
              "Title": "{{ $json.title }}",
              "Notes": "{{ $json.notes }}",
              "Due": "{{ $json.due }}",
              "Status": "{{ $json.status }}"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Google Tasks node using the configured input fields.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
            },
            {
              "name": "Task List Id",
              "internalKey": "taskListId",
              "type": "string",
              "required": false,
              "description": "Google Tasks task list ID. Use @default for the primary list.",
              "example": "@default",
              "defaultValue": "@default"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Task title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Task notes/details",
              "example": "{{ $json.notes }}"
            },
            {
              "name": "Due",
              "internalKey": "due",
              "type": "string",
              "required": false,
              "description": "Due date/time in RFC3339 format",
              "example": "{{ $json.due }}"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status, for example needsAction or completed",
              "example": "{{ $json.status }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Tasks node.\nitemType: Value returned by the Google Tasks node.\nconvertible: Value returned by the Google Tasks node.\ndefaultValue: Value returned by the Google Tasks node.",
          "usageExample": {
            "scenario": "Use Google Tasks in a workflow and pass upstream data into update.",
            "inputValues": {
              "Task Id": "task-id",
              "Task List Id": "@default",
              "Title": "{{ $json.title }}",
              "Notes": "{{ $json.notes }}",
              "Due": "{{ $json.due }}",
              "Status": "{{ $json.status }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Google Tasks node using the configured input fields.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
            },
            {
              "name": "Task List Id",
              "internalKey": "taskListId",
              "type": "string",
              "required": false,
              "description": "Google Tasks task list ID. Use @default for the primary list.",
              "example": "@default",
              "defaultValue": "@default"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Task title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Task notes/details",
              "example": "{{ $json.notes }}"
            },
            {
              "name": "Due",
              "internalKey": "due",
              "type": "string",
              "required": false,
              "description": "Due date/time in RFC3339 format",
              "example": "{{ $json.due }}"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status, for example needsAction or completed",
              "example": "{{ $json.status }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Tasks node.\nitemType: Value returned by the Google Tasks node.\nconvertible: Value returned by the Google Tasks node.\ndefaultValue: Value returned by the Google Tasks node.",
          "usageExample": {
            "scenario": "Use Google Tasks in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Task Id": "task-id",
              "Task List Id": "@default",
              "Title": "{{ $json.title }}",
              "Notes": "{{ $json.notes }}",
              "Due": "{{ $json.due }}",
              "Status": "{{ $json.status }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
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
