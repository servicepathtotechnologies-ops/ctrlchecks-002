import type { NodeDoc } from '../types';

export const clickupDoc: NodeDoc = {
  "slug": "clickup",
  "displayName": "ClickUp",
  "category": "Utility",
  "logoUrl": "/icons/nodes/clickup.svg",
  "description": "Create, read, and manage ClickUp tasks, lists, spaces, and workspaces.",
  "credentialType": "ClickUp API Key",
  "credentialSetupSteps": [
    "Log in to ClickUp → click your avatar → Settings → Apps.",
    "Under \"API Token\", click \"Generate\" and copy the token.",
    "In CtrlChecks, open Connections → Add Connection → ClickUp → paste the API token → Save."
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
          "description": "Create task using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to create task in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes create task and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get tasks list",
          "value": "get_tasks_list",
          "description": "Get tasks list using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get tasks list in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get tasks list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get task",
          "value": "get_task",
          "description": "Get task using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get task in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get task and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Update task",
          "value": "update_task",
          "description": "Update task using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to update task in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes update task and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Delete task",
          "value": "delete_task",
          "description": "Delete task using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to delete task in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes delete task and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Add comment",
          "value": "add_comment",
          "description": "Add comment using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to add comment in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes add comment and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Update status",
          "value": "update_status",
          "description": "Update status using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to update status in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes update status and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get teams",
          "value": "get_teams",
          "description": "Get teams using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get teams in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get teams and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get spaces",
          "value": "get_spaces",
          "description": "Get spaces using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get spaces in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get spaces and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get folders",
          "value": "get_folders",
          "description": "Get folders using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get folders in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get folders and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        },
        {
          "name": "Get lists",
          "value": "get_lists",
          "description": "Get lists using the ClickUp node.",
          "fields": [
            {
              "name": "Workspace Id",
              "internalKey": "workspaceId",
              "type": "string",
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "example": "90161598841",
              "placeholder": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "example": "90166920916",
              "placeholder": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "example": "901614760992",
              "placeholder": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "example": "86d31vafd",
              "placeholder": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "description": "Task name/title (required for create_task)",
              "example": "Follow up with customer",
              "placeholder": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "example": "Details:\n- Action item 1\n- Action item 2",
              "placeholder": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "example": "to do",
              "placeholder": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "description": "Comment text for add_comment operation",
              "example": "This has been reviewed and approved.",
              "placeholder": "This has been reviewed and approved."
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
            "scenario": "Use ClickUp to get lists in a workflow.",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "The node executes get lists and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://clickup.com/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the ClickUp node."
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
