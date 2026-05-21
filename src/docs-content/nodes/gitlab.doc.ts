import type { NodeDoc } from '../types';

export const gitlabDoc: NodeDoc = {
  "slug": "gitlab",
  "displayName": "GitLab",
  "category": "Data",
  "logoUrl": "/icons/nodes/gitlab.svg",
  "description": "GitLab repository operations",
  "credentialType": "GitLab API Key",
  "credentialSetupSteps": [
    "What this is: GitLab uses an API key or account connection so CtrlChecks can safely access your GitLab account.",
    "Go to gitlab.com and sign in -> click your profile photo (top right) -> Edit profile -> Access Tokens.",
    "Click \"Add new token\" -> give it a name (e.g. CtrlChecks) -> set an expiry date.",
    "Select scopes: \"api\" for full access, or \"read_repository\" and \"write_repository\" for repo-only access.",
    "Click \"Create personal access token\". Copy the token - it starts with glpat- and is shown only once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> GitLab -> paste the glpat- token -> Save.",
    "Run a test step (e.g. list your projects) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the GitLab node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",
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
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "helpText": "What this field is: GitLab API base URL (default: https://gitlab.com/api/v4) for GitLab / Create.\nHow to fill it: Paste the full web address GitLab should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://gitlab.com/api/v4",
              "example": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for GitLab / Create.\nHow to fill it: Enter the repo value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "helpText": "What this field is: Project ID or URL-encoded path (e.g., group%2Fproject) for GitLab / Create.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.projectId}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "helpText": "What this field is: Issue IID (project-scoped issue number) for GitLab / Create.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.issueIid}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "helpText": "What this field is: Issue title (create) for GitLab / Create.\nHow to fill it: Enter the title value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "helpText": "What this field is: Issue description (create) for GitLab / Create.\nHow to fill it: Type the message, prompt, or content you want GitLab to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
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
            "scenario": "Process incoming GitLab data with create after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "GitLab returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "helpText": "What this field is: GitLab API base URL (default: https://gitlab.com/api/v4) for GitLab / Read.\nHow to fill it: Paste the full web address GitLab should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://gitlab.com/api/v4",
              "example": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for GitLab / Read.\nHow to fill it: Enter the repo value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "helpText": "What this field is: Project ID or URL-encoded path (e.g., group%2Fproject) for GitLab / Read.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.projectId}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "helpText": "What this field is: Issue IID (project-scoped issue number) for GitLab / Read.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.issueIid}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "helpText": "What this field is: Issue title (create) for GitLab / Read.\nHow to fill it: Enter the title value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "helpText": "What this field is: Issue description (create) for GitLab / Read.\nHow to fill it: Type the message, prompt, or content you want GitLab to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
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
            "scenario": "Process incoming GitLab data with read after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "GitLab returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "helpText": "What this field is: GitLab API base URL (default: https://gitlab.com/api/v4) for GitLab / Update.\nHow to fill it: Paste the full web address GitLab should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://gitlab.com/api/v4",
              "example": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for GitLab / Update.\nHow to fill it: Enter the repo value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "helpText": "What this field is: Project ID or URL-encoded path (e.g., group%2Fproject) for GitLab / Update.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.projectId}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "helpText": "What this field is: Issue IID (project-scoped issue number) for GitLab / Update.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.issueIid}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "helpText": "What this field is: Issue title (create) for GitLab / Update.\nHow to fill it: Enter the title value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "helpText": "What this field is: Issue description (create) for GitLab / Update.\nHow to fill it: Type the message, prompt, or content you want GitLab to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
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
            "scenario": "Process incoming GitLab data with update after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "GitLab returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "GitLab API base URL (default: https://gitlab.com/api/v4)",
              "helpText": "What this field is: GitLab API base URL (default: https://gitlab.com/api/v4) for GitLab / Delete.\nHow to fill it: Paste the full web address GitLab should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.baseUrl}} or pick the value from the data picker.",
              "placeholder": "https://gitlab.com/api/v4",
              "example": "https://gitlab.com/api/v4",
              "defaultValue": "https://gitlab.com/api/v4"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for GitLab / Delete.\nHow to fill it: Enter the repo value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
            },
            {
              "name": "Project Id",
              "internalKey": "projectId",
              "type": "string",
              "required": false,
              "description": "Project ID or URL-encoded path (e.g., group%2Fproject)",
              "helpText": "What this field is: Project ID or URL-encoded path (e.g., group%2Fproject) for GitLab / Delete.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.projectId}} or pick the value from the data picker.",
              "placeholder": "123",
              "example": "123"
            },
            {
              "name": "Issue Iid",
              "internalKey": "issueIid",
              "type": "string",
              "required": false,
              "description": "Issue IID (project-scoped issue number)",
              "helpText": "What this field is: Issue IID (project-scoped issue number) for GitLab / Delete.\nWhere to find it: Open the item in GitLab and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.issueIid}} or pick the value from the data picker.",
              "placeholder": "1",
              "example": "1"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue title (create)",
              "helpText": "What this field is: Issue title (create) for GitLab / Delete.\nHow to fill it: Enter the title value requested by GitLab, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Issue description (create)",
              "helpText": "What this field is: Issue description (create) for GitLab / Delete.\nHow to fill it: Type the message, prompt, or content you want GitLab to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
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
            "scenario": "Process incoming GitLab data with delete after a related upstream event is received",
            "inputValues": {
              "Base Url": "https://gitlab.com/api/v4",
              "Repo": "owner/repo",
              "Project Id": "123",
              "Issue Iid": "1",
              "Title": ""
            },
            "expectedOutput": "GitLab returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
