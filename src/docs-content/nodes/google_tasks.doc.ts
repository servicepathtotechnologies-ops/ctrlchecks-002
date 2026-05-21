import type { NodeDoc } from '../types';

export const googleTasksDoc: NodeDoc = {
  "slug": "google_tasks",
  "displayName": "Google Tasks",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_tasks.svg",
  "description": "Manage Google Tasks",
  "credentialType": "Google OAuth",
  "credentialSetupSteps": [
    "What this is: Google uses an OAuth connection so CtrlChecks can safely access your Google account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Required Google Workspace API scopes.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Tasks exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Google Tasks node.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "helpText": "What this field is: Task ID (for update/delete) for Google Tasks / Create.\nWhere to find it: Open the item in Google Tasks and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "task-id",
              "example": "task-id"
            }
          ],
          "outputExample": [
            {
              "id": "1",
              "name": "Example item",
              "createdAt": "2025-01-15T09:00:00Z"
            }
          ],
          "outputDescription": "Returns an array of result objects. Access individual fields via {{$json.fieldName}} in downstream nodes.",
          "usageExample": {
            "scenario": "Process incoming Google Tasks data with create after a related upstream event is received",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "Google Tasks returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Google Tasks node.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "helpText": "What this field is: Task ID (for update/delete) for Google Tasks / Read.\nWhere to find it: Open the item in Google Tasks and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "task-id",
              "example": "task-id"
            }
          ],
          "outputExample": [
            {
              "id": "1",
              "name": "Example item",
              "createdAt": "2025-01-15T09:00:00Z"
            }
          ],
          "outputDescription": "Returns an array of result objects. Access individual fields via {{$json.fieldName}} in downstream nodes.",
          "usageExample": {
            "scenario": "Process incoming Google Tasks data with read after a related upstream event is received",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "Google Tasks returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Google Tasks node.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "helpText": "What this field is: Task ID (for update/delete) for Google Tasks / Update.\nWhere to find it: Open the item in Google Tasks and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "task-id",
              "example": "task-id"
            }
          ],
          "outputExample": [
            {
              "id": "1",
              "name": "Example item",
              "createdAt": "2025-01-15T09:00:00Z"
            }
          ],
          "outputDescription": "Returns an array of result objects. Access individual fields via {{$json.fieldName}} in downstream nodes.",
          "usageExample": {
            "scenario": "Process incoming Google Tasks data with update after a related upstream event is received",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "Google Tasks returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Google Tasks node.",
          "fields": [
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID (for update/delete)",
              "helpText": "What this field is: Task ID (for update/delete) for Google Tasks / Delete.\nWhere to find it: Open the item in Google Tasks and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "task-id",
              "example": "task-id"
            }
          ],
          "outputExample": [
            {
              "id": "1",
              "name": "Example item",
              "createdAt": "2025-01-15T09:00:00Z"
            }
          ],
          "outputDescription": "Returns an array of result objects. Access individual fields via {{$json.fieldName}} in downstream nodes.",
          "usageExample": {
            "scenario": "Process incoming Google Tasks data with delete after a related upstream event is received",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "Google Tasks returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/tasks/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Tasks node."
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
