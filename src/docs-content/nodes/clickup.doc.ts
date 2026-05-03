import type { NodeDoc } from '../types';

export const clickupDoc: NodeDoc = {
  "slug": "clickup",
  "displayName": "ClickUp",
  "category": "Utility",
  "logoUrl": "/icons/nodes/clickup.svg",
  "description": "Create, read, and manage ClickUp tasks, lists, spaces, and workspaces. Use this node when a workflow needs clickup behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Clickup Credential, Clickup Credential",
  "credentialSetupSteps": [
    "Open the ClickUp developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Clickup Credential, Clickup Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://clickup.com/api",
  "resources": [
    {
      "name": "Operations",
      "description": "ClickUp exposes operation choices directly.",
      "operations": [
        {
          "name": "Create task",
          "value": "create_task",
          "description": "Create task with the ClickUp node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "ClickUp API key (required for authentication)",
              "example": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored ClickUp credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp workspace (team) ID. Required for some workspace-scoped operations such as listing tasks across a space or team.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp space ID. Used when operating on tasks scoped to a space (for example, get_tasks_space).",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "ClickUp list ID. Required for list-scoped operations such as create_task or get_tasks_list.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "ClickUp task ID. Used when updating, deleting, or fetching a single task (or related entities like comments or time tracking).",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Name/title for a task when creating it (maps to ClickUp task name).",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Optional detailed markdown description for a task when creating or updating it.",
              "example": "### Details\n- Action item 1\n- Action item 2",
              "placeholder": "### Details\n- Action item 1\n- Action item 2"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ClickUp node.\nstructure: Value returned by the ClickUp node.\nconvertible: Value returned by the ClickUp node.\ndefaultValue: Value returned by the ClickUp node.",
          "usageExample": {
            "scenario": "Use ClickUp in a workflow and pass upstream data into create task.",
            "inputValues": {
              "Api Key": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Credential Id": "cred_123",
              "Workspace Id": "9012345678",
              "Space Id": "9012345678",
              "List Id": "9012345678",
              "Task Id": "abc123",
              "Task Name": "Follow up with customer",
              "Task Description": "### Details\n- Action item 1\n- Action item 2"
            },
            "expectedOutput": "The node runs create task and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get tasks list",
          "value": "get_tasks_list",
          "description": "Get tasks list with the ClickUp node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "ClickUp API key (required for authentication)",
              "example": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored ClickUp credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp workspace (team) ID. Required for some workspace-scoped operations such as listing tasks across a space or team.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp space ID. Used when operating on tasks scoped to a space (for example, get_tasks_space).",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "ClickUp list ID. Required for list-scoped operations such as create_task or get_tasks_list.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "ClickUp task ID. Used when updating, deleting, or fetching a single task (or related entities like comments or time tracking).",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Name/title for a task when creating it (maps to ClickUp task name).",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Optional detailed markdown description for a task when creating or updating it.",
              "example": "### Details\n- Action item 1\n- Action item 2",
              "placeholder": "### Details\n- Action item 1\n- Action item 2"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ClickUp node.\nstructure: Value returned by the ClickUp node.\nconvertible: Value returned by the ClickUp node.\ndefaultValue: Value returned by the ClickUp node.",
          "usageExample": {
            "scenario": "Use ClickUp in a workflow and pass upstream data into get tasks list.",
            "inputValues": {
              "Api Key": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Credential Id": "cred_123",
              "Workspace Id": "9012345678",
              "Space Id": "9012345678",
              "List Id": "9012345678",
              "Task Id": "abc123",
              "Task Name": "Follow up with customer",
              "Task Description": "### Details\n- Action item 1\n- Action item 2"
            },
            "expectedOutput": "The node runs get tasks list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get tasks space",
          "value": "get_tasks_space",
          "description": "Get tasks space with the ClickUp node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "ClickUp API key (required for authentication)",
              "example": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored ClickUp credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp workspace (team) ID. Required for some workspace-scoped operations such as listing tasks across a space or team.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "ClickUp space ID. Used when operating on tasks scoped to a space (for example, get_tasks_space).",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "ClickUp list ID. Required for list-scoped operations such as create_task or get_tasks_list.",
              "example": "9012345678",
              "placeholder": "9012345678"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "ClickUp task ID. Used when updating, deleting, or fetching a single task (or related entities like comments or time tracking).",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Name/title for a task when creating it (maps to ClickUp task name).",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Optional detailed markdown description for a task when creating or updating it.",
              "example": "### Details\n- Action item 1\n- Action item 2",
              "placeholder": "### Details\n- Action item 1\n- Action item 2"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the ClickUp node.\nstructure: Value returned by the ClickUp node.\nconvertible: Value returned by the ClickUp node.\ndefaultValue: Value returned by the ClickUp node.",
          "usageExample": {
            "scenario": "Use ClickUp in a workflow and pass upstream data into get tasks space.",
            "inputValues": {
              "Api Key": "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Credential Id": "cred_123",
              "Workspace Id": "9012345678",
              "Space Id": "9012345678",
              "List Id": "9012345678",
              "Task Id": "abc123",
              "Task Name": "Follow up with customer",
              "Task Description": "### Details\n- Action item 1\n- Action item 2"
            },
            "expectedOutput": "The node runs get tasks space and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://clickup.com/api"
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
    "http_request",
    "respond_to_webhook",
    "delay",
    "queue_push",
    "queue_consume"
  ]
};
