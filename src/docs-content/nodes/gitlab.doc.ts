import type { NodeDoc } from '../types';

export const gitlabDoc: NodeDoc = {
  "slug": "gitlab",
  "displayName": "GitLab",
  "category": "Data",
  "logoUrl": "/icons/nodes/gitlab.svg",
  "description": "GitLab repository operations Use this node when a workflow needs gitlab behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "GitLab exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the GitLab node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitLab node.\nstructure: Value returned by the GitLab node.\nconvertible: Value returned by the GitLab node.\ndefaultValue: Value returned by the GitLab node.",
          "usageExample": {
            "scenario": "Use GitLab in a workflow and pass upstream data into create.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": "{{ $json.title }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the GitLab node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitLab node.\nstructure: Value returned by the GitLab node.\nconvertible: Value returned by the GitLab node.\ndefaultValue: Value returned by the GitLab node.",
          "usageExample": {
            "scenario": "Use GitLab in a workflow and pass upstream data into read.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": "{{ $json.title }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the GitLab node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitLab node.\nstructure: Value returned by the GitLab node.\nconvertible: Value returned by the GitLab node.\ndefaultValue: Value returned by the GitLab node.",
          "usageExample": {
            "scenario": "Use GitLab in a workflow and pass upstream data into update.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": "{{ $json.title }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the GitLab node using the configured input fields.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitLab node.\nstructure: Value returned by the GitLab node.\nconvertible: Value returned by the GitLab node.\ndefaultValue: Value returned by the GitLab node.",
          "usageExample": {
            "scenario": "Use GitLab in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": "{{ $json.title }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
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
