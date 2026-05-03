import type { NodeDoc } from '../types';

export const githubDoc: NodeDoc = {
  "slug": "github",
  "displayName": "GitHub",
  "category": "Data",
  "logoUrl": "/icons/nodes/github.svg",
  "description": "GitHub repository operations Use this node when a workflow needs github behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Github Token, Github Credential, Github Credential",
  "credentialSetupSteps": [
    "Open the GitHub developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Github Token, Github Credential, Github Credential value and save the connection.",
    "Test the connection before running the workflow."
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
          "description": "Create issue with the GitHub node using the configured input fields.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "required": false,
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Issue/PR body or comment text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "example": "25"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "example": "[\"value\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "example": "{{ $json.branchName }}"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "{{ $json.workflowId }}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "github_oauth_123",
              "placeholder": "github_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitHub node.\nstructure: Value returned by the GitHub node.\nconvertible: Value returned by the GitHub node.\ndefaultValue: Value returned by the GitHub node.",
          "usageExample": {
            "scenario": "Use GitHub in a workflow and pass upstream data into create issue.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "{{ $json.title }}",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Issue Number": "25",
              "Comment": "{{ $json.comment }}",
              "Labels": "[\"value\"]",
              "Ref": "main",
              "Branch Name": "{{ $json.branchName }}",
              "Workflow Id": "{{ $json.workflowId }}"
            },
            "expectedOutput": "The node runs create issue and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Add issue comment",
          "value": "add_issue_comment",
          "description": "Add issue comment with the GitHub node using the configured input fields.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "required": false,
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Issue/PR body or comment text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "example": "25"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "example": "[\"value\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "example": "{{ $json.branchName }}"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "{{ $json.workflowId }}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "github_oauth_123",
              "placeholder": "github_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitHub node.\nstructure: Value returned by the GitHub node.\nconvertible: Value returned by the GitHub node.\ndefaultValue: Value returned by the GitHub node.",
          "usageExample": {
            "scenario": "Use GitHub in a workflow and pass upstream data into add issue comment.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "{{ $json.title }}",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Issue Number": "25",
              "Comment": "{{ $json.comment }}",
              "Labels": "[\"value\"]",
              "Ref": "main",
              "Branch Name": "{{ $json.branchName }}",
              "Workflow Id": "{{ $json.workflowId }}"
            },
            "expectedOutput": "The node runs add issue comment and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Create pr",
          "value": "create_pr",
          "description": "Create pr with the GitHub node using the configured input fields.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "required": false,
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Issue/PR body or comment text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "example": "25"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "example": "[\"value\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "example": "{{ $json.branchName }}"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "{{ $json.workflowId }}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "github_oauth_123",
              "placeholder": "github_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitHub node.\nstructure: Value returned by the GitHub node.\nconvertible: Value returned by the GitHub node.\ndefaultValue: Value returned by the GitHub node.",
          "usageExample": {
            "scenario": "Use GitHub in a workflow and pass upstream data into create pr.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "{{ $json.title }}",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Issue Number": "25",
              "Comment": "{{ $json.comment }}",
              "Labels": "[\"value\"]",
              "Ref": "main",
              "Branch Name": "{{ $json.branchName }}",
              "Workflow Id": "{{ $json.workflowId }}"
            },
            "expectedOutput": "The node runs create pr and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "Trigger workflow",
          "value": "trigger_workflow",
          "description": "Trigger workflow with the GitHub node using the configured input fields.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "required": false,
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Issue/PR body or comment text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "example": "25"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "example": "[\"value\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "example": "{{ $json.branchName }}"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "{{ $json.workflowId }}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "github_oauth_123",
              "placeholder": "github_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitHub node.\nstructure: Value returned by the GitHub node.\nconvertible: Value returned by the GitHub node.\ndefaultValue: Value returned by the GitHub node.",
          "usageExample": {
            "scenario": "Use GitHub in a workflow and pass upstream data into trigger workflow.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "{{ $json.title }}",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Issue Number": "25",
              "Comment": "{{ $json.comment }}",
              "Labels": "[\"value\"]",
              "Ref": "main",
              "Branch Name": "{{ $json.branchName }}",
              "Workflow Id": "{{ $json.workflowId }}"
            },
            "expectedOutput": "The node runs trigger workflow and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
        },
        {
          "name": "List repos",
          "value": "list_repos",
          "description": "List repos with the GitHub node using the configured input fields.",
          "fields": [
            {
              "name": "Owner",
              "internalKey": "owner",
              "type": "string",
              "required": false,
              "description": "Repository owner (user/org)",
              "example": "octocat",
              "placeholder": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "example": "hello-world",
              "placeholder": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "string",
              "required": false,
              "description": "Issue/PR body or comment text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "example": "25"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "example": "[\"value\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "example": "main",
              "placeholder": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "example": "{{ $json.branchName }}"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "example": "{{ $json.workflowId }}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "example": "your-github-oauth-token",
              "placeholder": "your-github-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "github_oauth_123",
              "placeholder": "github_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GitHub node.\nstructure: Value returned by the GitHub node.\nconvertible: Value returned by the GitHub node.\ndefaultValue: Value returned by the GitHub node.",
          "usageExample": {
            "scenario": "Use GitHub in a workflow and pass upstream data into list repos.",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "{{ $json.title }}",
              "Body": "Created from workflow data: {{ $json.summary }}",
              "Issue Number": "25",
              "Comment": "{{ $json.comment }}",
              "Labels": "[\"value\"]",
              "Ref": "main",
              "Branch Name": "{{ $json.branchName }}",
              "Workflow Id": "{{ $json.workflowId }}"
            },
            "expectedOutput": "The node runs list repos and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.github.com/en/rest"
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
