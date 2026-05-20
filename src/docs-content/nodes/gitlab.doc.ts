import type { NodeDoc } from '../types';

export const gitlabDoc: NodeDoc = {
  "slug": "gitlab",
  "displayName": "GitLab",
  "category": "Data",
  "logoUrl": "/icons/nodes/gitlab.svg",
  "description": "GitLab repository operations",
  "credentialType": "GitLab API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.gitlab.com/api/",
  "resources": [
    {
      "name": "Operations",
      "description": "GitLab exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the GitLab node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue title (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Issue description (create)"
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
            "scenario": "Use GitLab to create in a workflow.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the GitLab node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue title (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Issue description (create)"
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
            "scenario": "Use GitLab to read in a workflow.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the GitLab node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue title (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Issue description (create)"
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
            "scenario": "Use GitLab to update in a workflow.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the GitLab node.",
          "fields": [
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "example": "https://gitlab.com/api/v4",
              "placeholder": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "description": "Issue IID (project-scoped issue number)",
              "example": "1",
              "placeholder": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue title (create)"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "description": "Issue description (create)"
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
            "scenario": "Use GitLab to delete in a workflow.",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.gitlab.com/api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the GitLab node."
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
