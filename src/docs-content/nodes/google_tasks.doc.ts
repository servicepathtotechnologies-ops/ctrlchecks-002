import type { NodeDoc } from '../types';

export const googleTasksDoc: NodeDoc = {
  "slug": "google_tasks",
  "displayName": "Google Tasks",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_tasks.svg",
  "description": "Manage Google Tasks",
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
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
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
            "scenario": "Use Google Tasks to create in a workflow.",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
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
            "scenario": "Use Google Tasks to read in a workflow.",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
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
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
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
            "scenario": "Use Google Tasks to update in a workflow.",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "Task ID (for update/delete)",
              "example": "task-id",
              "placeholder": "task-id"
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
            "scenario": "Use Google Tasks to delete in a workflow.",
            "inputValues": {
              "Task Id": "task-id"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
