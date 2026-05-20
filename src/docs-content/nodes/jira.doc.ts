import type { NodeDoc } from '../types';

export const jiraDoc: NodeDoc = {
  "slug": "jira",
  "displayName": "Jira",
  "category": "Data",
  "logoUrl": "/icons/nodes/jira.svg",
  "description": "Jira issue tracking operations",
  "credentialType": "Atlassian API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/",
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to update issue in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes update issue and exposes its result for downstream nodes."
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to delete issue in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes delete issue and exposes its result for downstream nodes."
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to search issues in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes search issues and exposes its result for downstream nodes."
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to add comment in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes add comment and exposes its result for downstream nodes."
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to transition issue in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes transition issue and exposes its result for downstream nodes."
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
              "description": "Atlassian domain (without https://)",
              "example": "yourcompany.atlassian.net",
              "placeholder": "yourcompany.atlassian.net"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "description": "Project key — required for create_issue",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "description": "Issue key — required for get/update/delete/comment/transition",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "description": "Issue title/summary — required for create_issue"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Issue description (plain text, converted to ADF automatically)"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "description": "Issue type — default: Task",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "string",
              "description": "Issue priority",
              "example": "Highest",
              "placeholder": "Highest"
            },
            {
              "name": "Assignee",
              "internalKey": "assignee",
              "type": "string",
              "description": "Assignee account ID (get from Jira user search)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Labels to attach to the issue",
              "example": "[\"bug\",\"urgent\"]",
              "placeholder": "[\"bug\",\"urgent\"]"
            },
            {
              "name": "Jql",
              "internalKey": "jql",
              "type": "string",
              "description": "JQL query — required for search_issues",
              "example": "project = PROJ AND status = \"In Progress\"",
              "placeholder": "project = PROJ AND status = \"In Progress\""
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Max results for search_issues (default: 50)",
              "example": "50",
              "placeholder": "50",
              "defaultValue": "50"
            },
            {
              "name": "Comment Body",
              "internalKey": "commentBody",
              "type": "textarea",
              "description": "Comment text — required for add_comment"
            },
            {
              "name": "Transition Id",
              "internalKey": "transitionId",
              "type": "string",
              "description": "Transition ID — required for transition_issue",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Jira to get projects in a workflow.",
            "inputValues": {
              "Domain": "yourcompany.atlassian.net",
              "Project Key": "PROJ",
              "Issue Key": "PROJ-123",
              "Summary": "",
              "Description": ""
            },
            "expectedOutput": "The node executes get projects and exposes its result for downstream nodes."
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
