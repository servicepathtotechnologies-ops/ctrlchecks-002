import type { NodeDoc } from '../types';

export const githubDoc: NodeDoc = {
  "slug": "github",
  "displayName": "GitHub",
  "category": "Data",
  "logoUrl": "/icons/nodes/github.svg",
  "description": "GitHub repository operations",
  "credentialType": "GitHub API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.github.com/en/rest",
  "resources": [
    {
      "name": "Operations",
      "description": "GitHub exposes operation choices directly.",
      "operations": [
        {
          "name": "Create issue",
          "value": "create_issue",
          "description": "Create a new issue in a GitHub repository.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue/PR title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Issue/PR body or comment text"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "description": "Issue number (for comments/updates)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "description": "Issue comment text (for add_issue_comment)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Issue labels (array of strings)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "description": "Head branch name (for PR)"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "number": 42,
            "title": "Bug: Login fails for SSO users",
            "state": "open",
            "html_url": "https://github.com/org/repo/issues/42",
            "created_at": "2025-01-15T10:00:00Z"
          },
          "outputDescription": "number: The issue number. html_url: Direct link to the issue. state: \"open\" means it was created.",
          "usageExample": {
            "scenario": "Create a GitHub issue when a critical error is logged",
            "inputValues": {
              "owner": "{{$env.GH_OWNER}}",
              "repo": "{{$env.GH_REPO}}",
              "title": "[ERROR] {{$json.errorMessage}}",
              "body": "**Workflow:** {{$json.workflowId}}\n**Time:** {{$now}}\n\n```\n{{$json.stack}}\n```"
            },
            "expectedOutput": "Issue is created. Share `{{$json.html_url}}` in a Slack alert."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Add issue comment",
          "value": "add_issue_comment",
          "description": "Add issue comment using the GitHub node.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue/PR title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Issue/PR body or comment text"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "description": "Issue number (for comments/updates)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "description": "Issue comment text (for add_issue_comment)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Issue labels (array of strings)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "description": "Head branch name (for PR)"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
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
            "scenario": "Use GitHub to add issue comment in a workflow.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "The node executes add issue comment and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Create pr",
          "value": "create_pr",
          "description": "Create pr using the GitHub node.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue/PR title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Issue/PR body or comment text"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "description": "Issue number (for comments/updates)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "description": "Issue comment text (for add_issue_comment)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Issue labels (array of strings)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "description": "Head branch name (for PR)"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
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
            "scenario": "Use GitHub to create pr in a workflow.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "The node executes create pr and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Trigger workflow",
          "value": "trigger_workflow",
          "description": "Trigger workflow using the GitHub node.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue/PR title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Issue/PR body or comment text"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "description": "Issue number (for comments/updates)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "description": "Issue comment text (for add_issue_comment)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Issue labels (array of strings)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "description": "Head branch name (for PR)"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
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
            "scenario": "Use GitHub to trigger workflow in a workflow.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "The node executes trigger workflow and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "List repos",
          "value": "list_repos",
          "description": "List repos using the GitHub node.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Issue/PR title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "description": "Issue/PR body or comment text"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "description": "Issue number (for comments/updates)",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "description": "Issue comment text (for add_issue_comment)"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Issue labels (array of strings)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "description": "Head branch name (for PR)"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
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
            "scenario": "Use GitHub to list repos in a workflow.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "The node executes list repos and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the GitHub node."
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
