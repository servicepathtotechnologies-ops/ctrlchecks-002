import type { NodeDoc } from '../types';

export const jiraDoc: NodeDoc = {
  "slug": "jira",
  "displayName": "Jira",
  "category": "Data",
  "logoUrl": "/icons/nodes/jira.svg",
  "description": "Jira issue tracking operations Use this node when a workflow needs jira behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Jira Token",
  "credentialSetupSteps": [
    "Open the Jira developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Jira Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/",
  "resources": [
    {
      "name": "Operations",
      "description": "Jira exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Jira node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Jira base URL (e.g., https://your-domain.atlassian.net)",
              "example": "https://mycompany.atlassian.net",
              "placeholder": "https://mycompany.atlassian.net"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Jira account email (for basic auth with API token)",
              "example": "user@company.com",
              "placeholder": "user@company.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Jira API token (optional if stored in vault under key \"jira\")",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key (for read/update/delete)",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key (create)",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue summary/title (create)",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create/update)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type (default: Task)",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jira node.\nstructure: Value returned by the Jira node.\nconvertible: Value returned by the Jira node.\ndefaultValue: Value returned by the Jira node.",
          "usageExample": {
            "scenario": "Use Jira in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://mycompany.atlassian.net",
              "Email": "user@company.com",
              "Api Token": "{{ $json.apiToken }}",
              "Issue Key": "PROJ-123",
              "Project Key": "PROJ",
              "Summary": "{{ $json.summary }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Issue Type": "Task"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Jira node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Jira base URL (e.g., https://your-domain.atlassian.net)",
              "example": "https://mycompany.atlassian.net",
              "placeholder": "https://mycompany.atlassian.net"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Jira account email (for basic auth with API token)",
              "example": "user@company.com",
              "placeholder": "user@company.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Jira API token (optional if stored in vault under key \"jira\")",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key (for read/update/delete)",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key (create)",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue summary/title (create)",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create/update)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type (default: Task)",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jira node.\nstructure: Value returned by the Jira node.\nconvertible: Value returned by the Jira node.\ndefaultValue: Value returned by the Jira node.",
          "usageExample": {
            "scenario": "Use Jira in a workflow and pass upstream data into read.",
            "inputValues": {
              "Base Url": "https://mycompany.atlassian.net",
              "Email": "user@company.com",
              "Api Token": "{{ $json.apiToken }}",
              "Issue Key": "PROJ-123",
              "Project Key": "PROJ",
              "Summary": "{{ $json.summary }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Issue Type": "Task"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Jira node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Jira base URL (e.g., https://your-domain.atlassian.net)",
              "example": "https://mycompany.atlassian.net",
              "placeholder": "https://mycompany.atlassian.net"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Jira account email (for basic auth with API token)",
              "example": "user@company.com",
              "placeholder": "user@company.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Jira API token (optional if stored in vault under key \"jira\")",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key (for read/update/delete)",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key (create)",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue summary/title (create)",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create/update)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type (default: Task)",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jira node.\nstructure: Value returned by the Jira node.\nconvertible: Value returned by the Jira node.\ndefaultValue: Value returned by the Jira node.",
          "usageExample": {
            "scenario": "Use Jira in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://mycompany.atlassian.net",
              "Email": "user@company.com",
              "Api Token": "{{ $json.apiToken }}",
              "Issue Key": "PROJ-123",
              "Project Key": "PROJ",
              "Summary": "{{ $json.summary }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Issue Type": "Task"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Jira node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "Jira base URL (e.g., https://your-domain.atlassian.net)",
              "example": "https://mycompany.atlassian.net",
              "placeholder": "https://mycompany.atlassian.net"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Jira account email (for basic auth with API token)",
              "example": "user@company.com",
              "placeholder": "user@company.com"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Jira API token (optional if stored in vault under key \"jira\")",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Issue Key",
              "internalKey": "issueKey",
              "type": "string",
              "required": false,
              "description": "Issue key (for read/update/delete)",
              "example": "PROJ-123",
              "placeholder": "PROJ-123"
            },
            {
              "name": "Project Key",
              "internalKey": "projectKey",
              "type": "string",
              "required": false,
              "description": "Project key (create)",
              "example": "PROJ",
              "placeholder": "PROJ"
            },
            {
              "name": "Summary",
              "internalKey": "summary",
              "type": "string",
              "required": false,
              "description": "Issue summary/title (create)",
              "example": "{{ $json.summary }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create/update)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Type",
              "internalKey": "issueType",
              "type": "string",
              "required": false,
              "description": "Issue type (default: Task)",
              "example": "Task",
              "placeholder": "Task",
              "defaultValue": "Task"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jira node.\nstructure: Value returned by the Jira node.\nconvertible: Value returned by the Jira node.\ndefaultValue: Value returned by the Jira node.",
          "usageExample": {
            "scenario": "Use Jira in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Base Url": "https://mycompany.atlassian.net",
              "Email": "user@company.com",
              "Api Token": "{{ $json.apiToken }}",
              "Issue Key": "PROJ-123",
              "Project Key": "PROJ",
              "Summary": "{{ $json.summary }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Issue Type": "Task"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/"
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
