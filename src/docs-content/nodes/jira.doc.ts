import type { NodeDoc } from '../types';

export const jiraDoc: NodeDoc = {
  "slug": "jira",
  "displayName": "Jira",
  "category": "Data",
  "logoUrl": "/icons/nodes/jira.svg",
  "description": "Jira issue tracking operations",
  "credentialType": "Atlassian API Key",
  "credentialSetupSteps": [
    "What this is: Atlassian uses an API key or account connection so CtrlChecks can safely access your Atlassian account.",
    "Go to id.atlassian.com and sign in with your Atlassian account.",
    "Click \"Security\" tab -> scroll to \"API tokens\" -> Create API token.",
    "Give it a label (e.g. CtrlChecks) and click Create. Copy the token shown.",
    "Your Jira base URL is: https://yourcompany.atlassian.net (replace \"yourcompany\" with your organization name shown in your Jira URL).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Jira -> enter your Jira URL (https://yourcompany.atlassian.net), your email address, and the API token -> Save.",
    "To find your project key: open any Jira project - the key is shown in brackets next to the project name (e.g. PROJ).",
    "Run a test step (e.g. create a test issue) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Atlassian node and select the saved connection."
  ],
  "credentialDocsUrl": "https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",
  "resources": [
    {
      "name": "Operations",
      "description": "Jira exposes operation choices directly.",
      "operations": [
        {
          "name": "Create issue",
          "value": "create_issue",
          "description": "Create a new Jira issue.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Create issue.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Your Jira project's short code — 2 to 10 capital letters.\nWhere to find it: In Jira, go to your project — the key is shown in brackets next to the project name, or in the URL.\nExample: If the project URL is jira.yourcompany.com/projects/PROJ/..., the key is PROJ.\nOther examples: DEV, MOBILE, BACKEND, SUPPORT",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: The one-line title of the issue — shown in all Jira list views.\nKeep it concise and descriptive.\nExample: Login button not responding on Safari iOS 17 or Add CSV export to the Reports page",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Full details about the issue.\nExample: Steps to reproduce: 1) Open Safari on iOS 17, 2) Go to login page, 3) Tap Login button — nothing happens. Expected: Should log in. Actual: No response.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: The type of Jira issue.\nCommon values: Bug, Story, Task, Epic, Sub-task.\nMust exactly match the issue types configured in your Jira project (go to Project Settings → Issue Types to see the full list).\nExample: Bug",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: The urgency level of the issue.\nCommon values: Highest, High, Medium, Low, Lowest.\nExample: High",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Create issue.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Create issue.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Create issue.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Create issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Create issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Create issue.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "id": "10001",
            "key": "PROJ-42",
            "self": "https://yourcompany.atlassian.net/rest/api/3/issue/10001"
          },
          "outputDescription": "id: Jira internal issue ID. key: Human-readable issue key (e.g. PROJ-42). self: API URL to the issue.",
          "usageExample": {
            "scenario": "Create a Jira bug ticket when a Sentry error is detected",
            "inputValues": {
              "project": "PROJ",
              "summary": "{{$json.errorTitle}}",
              "description": "{{$json.errorDetails}}",
              "issuetype": "Bug",
              "priority": "High"
            },
            "expectedOutput": "`{{$json.key}}` is the Jira issue key (e.g. PROJ-42)."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Get issue",
          "value": "get_issue",
          "description": "Get details of a Jira issue by its key.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Get issue.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Get issue.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Get issue.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Get issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Get issue.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Get issue.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Get issue.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Get issue.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Get issue.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Get issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Get issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Get issue.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "id": "10001",
            "key": "PROJ-42",
            "fields": {
              "summary": "Login fails for SSO users",
              "status": {
                "name": "In Progress"
              },
              "assignee": {
                "displayName": "Alice Smith"
              },
              "priority": {
                "name": "High"
              }
            }
          },
          "outputDescription": "key: Issue key. fields.summary: Issue title. fields.status.name: Current status. fields.assignee.displayName: Assignee name.",
          "usageExample": {
            "scenario": "Read a Jira issue to check its status before sending a reminder",
            "inputValues": {
              "issueKey": "{{$json.jiraKey}}"
            },
            "expectedOutput": "Full issue details in `{{$json.fields}}`."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Update issue",
          "value": "update_issue",
          "description": "Update issue using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Update issue.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Update issue.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Update issue.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Update issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Update issue.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Update issue.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Update issue.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Update issue.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Update issue.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Update issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Update issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Update issue.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with update issue after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured update issue data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Delete issue",
          "value": "delete_issue",
          "description": "Delete issue using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Delete issue.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Delete issue.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Delete issue.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Delete issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Delete issue.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Delete issue.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Delete issue.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Delete issue.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Delete issue.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Delete issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Delete issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Delete issue.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with delete issue after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured delete issue data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Search issues",
          "value": "search_issues",
          "description": "Search issues using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Search issues.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Search issues.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Search issues.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Search issues.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Search issues.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Search issues.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Search issues.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Search issues.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Search issues.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Search issues.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Search issues.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Search issues.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with search issues after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured search issues data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Add comment",
          "value": "add_comment",
          "description": "Add comment using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Add comment.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Add comment.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Add comment.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Add comment.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Add comment.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Add comment.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Add comment.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Add comment.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Add comment.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Add comment.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Add comment.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Add comment.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with add comment after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured add comment data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Transition issue",
          "value": "transition_issue",
          "description": "Transition issue using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Transition issue.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Transition issue.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Transition issue.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Transition issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Transition issue.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Transition issue.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Transition issue.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Transition issue.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Transition issue.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Transition issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Transition issue.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Transition issue.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with transition issue after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured transition issue data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Get projects",
          "value": "get_projects",
          "description": "Get projects using the Jira node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Atlassian domain (without https://)",
              "helpText": "What this field is: Atlassian domain (without https://) for Jira / Get projects.\nHow to fill it: Enter the domain value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "yourcompany.atlassian.net",
              "example": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key — required for create_issue",
              "helpText": "What this field is: Project key — required for create_issue for Jira / Get projects.\nHow to fill it: Enter the project key value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectKey}} or pick the value from the data picker.",
              "placeholder": "PROJ",
              "example": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key — required for get/update/delete/comment/transition",
              "helpText": "What this field is: The unique Jira issue identifier — project key + number.\nFormat: PROJECTKEY-NUMBER\nExample: DEV-456 or PROJ-1234 or MOBILE-89\nWhere to find it: Open the issue in Jira — the key is shown at the top left of the issue page.",
              "placeholder": "PROJ-123",
              "example": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue title/summary — required for create_issue",
              "helpText": "What this field is: Issue title/summary — required for create_issue for Jira / Get projects.\nHow to fill it: Enter the summary value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.summary}} or pick the value from the data picker.",
              "placeholder": "Enter Summary"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Issue description (plain text, converted to ADF automatically)",
              "helpText": "What this field is: Issue description (plain text, converted to ADF automatically) for Jira / Get projects.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Description"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type — default: Task",
              "helpText": "What this field is: Issue type — default: Task for Jira / Get projects.\nHow to fill it: Enter the issue type value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.issueType}} or pick the value from the data picker.",
              "placeholder": "Task",
              "example": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "required": false,
              "description": "Issue priority",
              "helpText": "What this field is: Issue priority for Jira / Get projects.\nHow to fill it: Enter the priority value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "Highest",
              "example": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "required": false,
              "description": "Assignee account ID (get from Jira user search)",
              "helpText": "What this field is: Assignee account ID (get from Jira user search) for Jira / Get projects.\nHow to fill it: Enter the assignee value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.assignee}} or pick the value from the data picker.",
              "placeholder": "Enter Assignee"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Labels to attach to the issue",
              "helpText": "What this field is: Labels to attach to the issue for Jira / Get projects.\nHow to fill it: Enter valid JSON in the format Jira expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"bug\",\"urgent\"]",
              "example": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "required": false,
              "description": "JQL query — required for search_issues",
              "helpText": "What this field is: JQL query — required for search_issues for Jira / Get projects.\nHow to fill it: Enter the jql value requested by Jira, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jql}} or pick the value from the data picker.",
              "placeholder": "project = PROJ AND status = \"In Progress\"",
              "example": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Max results for search_issues (default: 50)",
              "helpText": "What this field is: A number used for max results in Jira / Get projects.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "50",
              "example": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "required": false,
              "description": "Comment text — required for add_comment",
              "helpText": "What this field is: Comment text — required for add_comment for Jira / Get projects.\nHow to fill it: Type the message, prompt, or content you want Jira to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "required": false,
              "description": "Transition ID — required for transition_issue",
              "helpText": "What this field is: Transition ID — required for transition_issue for Jira / Get projects.\nWhere to find it: Open the item in Jira and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.transitionId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming Jira data with get projects after a related upstream event is received",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "Jira returns structured get projects data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Jira node."
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
