import type { NodeDoc } from '../types';

export const clickupDoc: NodeDoc = {
  "slug": "clickup",
  "displayName": "ClickUp",
  "category": "Utility",
  "logoUrl": "/icons/nodes/clickup.svg",
  "description": "Create, read, and manage ClickUp tasks, lists, spaces, and workspaces.",
  "credentialType": "ClickUp API Key",
  "credentialSetupSteps": [
    "What this is: ClickUp uses an API key or account connection so CtrlChecks can safely access your ClickUp account.",
    "Log in to your ClickUp account at app.clickup.com.",
    "Click your profile avatar (bottom left) -> Settings -> Apps.",
    "Under \"API Token\", click \"Generate\" if no token exists, or copy the existing token.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> ClickUp -> paste the API token -> Save.",
    "Run a test step (e.g. list spaces or tasks) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the ClickUp node and select the saved connection."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Create task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Create task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Create task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Create task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Create task.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Create task.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Create task.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Create task.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Create task.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with create task after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured create task data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get tasks list.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get tasks list.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get tasks list.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get tasks list.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get tasks list.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get tasks list.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get tasks list.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get tasks list.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get tasks list.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get tasks list after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get tasks list data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get task.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get task.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get task.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get task.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get task.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get task after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get task data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Update task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Update task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Update task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Update task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Update task.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Update task.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Update task.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Update task.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Update task.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with update task after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured update task data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Delete task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Delete task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Delete task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Delete task.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Delete task.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Delete task.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Delete task.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Delete task.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Delete task.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with delete task after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured delete task data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Add comment.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Add comment.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Add comment.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Add comment.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Add comment.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Add comment.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Add comment.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Add comment.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Add comment.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with add comment after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured add comment data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Update status.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Update status.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Update status.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Update status.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Update status.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Update status.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Update status.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Update status.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Update status.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with update status after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured update status data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get teams.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get teams.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get teams.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get teams.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get teams.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get teams.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get teams.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get teams.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get teams.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get teams after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get teams data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get spaces.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get spaces.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get spaces.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get spaces.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get spaces.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get spaces.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get spaces.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get spaces.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get spaces.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get spaces after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get spaces data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get folders.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get folders.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get folders.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get folders.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get folders.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get folders.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get folders.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get folders.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get folders.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get folders after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get folders data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Workspace (team) ID — find it in the workspace URL or via Get Teams",
              "helpText": "What this field is: Workspace (team) ID — find it in the workspace URL or via Get Teams for ClickUp / Get lists.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workspaceId}} or pick the value from the data picker.",
              "placeholder": "90161598841",
              "example": "90161598841"
            },
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": false,
              "description": "Space ID — required for Get Spaces tasks; find via Get Spaces",
              "helpText": "What this field is: Space ID — required for Get Spaces tasks; find via Get Spaces for ClickUp / Get lists.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.spaceId}} or pick the value from the data picker.",
              "placeholder": "90166920916",
              "example": "90166920916"
            },
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "List ID — required for create_task and get_tasks_list; find via Get Lists",
              "helpText": "What this field is: List ID — required for create_task and get_tasks_list; find via Get Lists for ClickUp / Get lists.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "901614760992",
              "example": "901614760992"
            },
            {
              "name": "Task Id",
              "internalKey": "taskId",
              "type": "string",
              "required": false,
              "description": "Task ID — required for get_task, update_task, delete_task, add_comment, update_status",
              "helpText": "What this field is: Task ID — required for get_task, update_task, delete_task, add_comment, update_status for ClickUp / Get lists.\nWhere to find it: Open the item in ClickUp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.taskId}} or pick the value from the data picker.",
              "placeholder": "86d31vafd",
              "example": "86d31vafd"
            },
            {
              "name": "Task Name",
              "internalKey": "taskName",
              "type": "string",
              "required": false,
              "description": "Task name/title (required for create_task)",
              "helpText": "What this field is: Task name/title (required for create_task) for ClickUp / Get lists.\nHow to fill it: Enter the task name value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskName}} or pick the value from the data picker.",
              "placeholder": "Follow up with customer",
              "example": "Follow up with customer"
            },
            {
              "name": "Task Description",
              "internalKey": "taskDescription",
              "type": "string",
              "required": false,
              "description": "Task description — markdown supported (optional for create_task / update_task)",
              "helpText": "What this field is: Task description — markdown supported (optional for create_task / update_task) for ClickUp / Get lists.\nHow to fill it: Enter the task description value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.taskDescription}} or pick the value from the data picker.",
              "placeholder": "Details:\n- Action item 1\n- Action item 2",
              "example": "Details:\n- Action item 1\n- Action item 2"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Task status (e.g. \"to do\", \"in progress\", \"complete\")",
              "helpText": "What this field is: Task status (e.g. \"to do\", \"in progress\", \"complete\") for ClickUp / Get lists.\nHow to fill it: Enter the status value requested by ClickUp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "to do",
              "example": "to do"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Task priority: 1 = urgent, 2 = high, 3 = normal, 4 = low",
              "helpText": "What this field is: A number used for priority in ClickUp / Get lists.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Comment Text",
              "internalKey": "commentText",
              "type": "string",
              "required": false,
              "description": "Comment text for add_comment operation",
              "helpText": "What this field is: Comment text for add_comment operation for ClickUp / Get lists.\nHow to fill it: Type the message, prompt, or content you want ClickUp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "This has been reviewed and approved.",
              "example": "This has been reviewed and approved."
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ClickUp data with get lists after a related upstream event is received",
            "inputValues": {
              "Workspace Id": "90161598841",
              "Space Id": "90166920916",
              "List Id": "901614760992",
              "Task Id": "86d31vafd",
              "Task Name": "Follow up with customer"
            },
            "expectedOutput": "ClickUp returns structured get lists data that downstream nodes can reference with {{$json.fieldName}}."
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
