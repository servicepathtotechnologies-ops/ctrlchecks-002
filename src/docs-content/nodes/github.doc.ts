import type { NodeDoc } from '../types';

export const githubDoc: NodeDoc = {
  "slug": "github",
  "displayName": "GitHub",
  "category": "Data",
  "logoUrl": "/icons/nodes/github.svg",
  "description": "GitHub repository operations",
  "credentialType": "GitHub API Key",
  "credentialSetupSteps": [
    "What this is: GitHub uses an API key or account connection so CtrlChecks can safely access your GitHub account.",
    "Go to github.com and sign in -> click your profile photo (top right) -> Settings.",
    "Scroll down to \"Developer settings\" (bottom of left sidebar) -> Personal access tokens -> Tokens (classic).",
    "Click \"Generate new token (classic)\" -> give it a name (e.g. CtrlChecks) -> set an expiry date.",
    "Select scopes: \"repo\" (full control of repositories) for most use cases, or just \"issues\" if you only need to create issues. Click \"Generate token\".",
    "Copy the token immediately - it starts with ghp_ and is shown only once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> GitHub -> paste the ghp_ token -> Save.",
    "Run a test step (e.g. list your repositories) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the GitHub node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
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
              "required": false,
              "description": "Repository owner (user/org)",
              "helpText": "What this field is: The GitHub username or organization that owns the repository.\nExample: alice (personal) or mycompany (organization)\nWhere to find it: It is the first part of your repository URL: github.com/OWNER/repo-name.",
              "placeholder": "octocat",
              "example": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: The repository name (just the name, not the full URL).\nExample: my-project or backend-api\nWhere to find it: It is the second part of your repository URL: github.com/owner/REPO-NAME.",
              "placeholder": "hello-world",
              "example": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "helpText": "What this field is: The issue title — shown in the issues list.\nExample: Bug: Login page crashes on Safari iOS 17 or Feature: Add CSV export to Reports",
              "placeholder": "Enter Title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Issue/PR body or comment text",
              "helpText": "What this field is: Detailed description of the issue or feature.\nExample: Steps to reproduce: 1) Open Safari on iOS 17, 2) Navigate to /login, 3) Click the Login button — the page crashes. Expected: Should log in. Browser console shows: TypeError at line 42.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "helpText": "What this field is: A number used for issue number in GitHub / Create issue.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.issueNumber}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "helpText": "What this field is: Issue comment text (for add_issue_comment) for GitHub / Create issue.\nHow to fill it: Enter the comment value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.comment}} or pick the value from the data picker.",
              "placeholder": "Enter Comment"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "helpText": "What this field is: Labels to tag the issue for easier filtering.\nFormat: JSON array of label names.\nExample: [\"bug\",\"high-priority\"] or [\"enhancement\",\"frontend\"]\nLabels must already exist in the repository.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "helpText": "What this field is: Base branch/ref (for PR/workflow) for GitHub / Create issue.\nHow to fill it: Enter the ref value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ref}} or pick the value from the data picker.",
              "placeholder": "main",
              "example": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "helpText": "What this field is: Head branch name (for PR) for GitHub / Create issue.\nHow to fill it: Enter the branch name value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.branchName}} or pick the value from the data picker.",
              "placeholder": "Enter Branch Name"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "helpText": "What this field is: Workflow ID or filename (for trigger_workflow) for GitHub / Create issue.\nWhere to find it: Open the item in GitHub and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-github-oauth-token",
              "example": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
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
              "required": false,
              "description": "Repository owner (user/org)",
              "helpText": "What this field is: The GitHub username or organization that owns the repository.\nExample: alice (personal) or mycompany (organization)\nWhere to find it: It is the first part of your repository URL: github.com/OWNER/repo-name.",
              "placeholder": "octocat",
              "example": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: The repository name (just the name, not the full URL).\nExample: my-project or backend-api\nWhere to find it: It is the second part of your repository URL: github.com/owner/REPO-NAME.",
              "placeholder": "hello-world",
              "example": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "helpText": "What this field is: Issue/PR title for GitHub / Add issue comment.\nHow to fill it: Enter the title value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Issue/PR body or comment text",
              "helpText": "What this field is: Issue/PR body or comment text for GitHub / Add issue comment.\nHow to fill it: Type the message, prompt, or content you want GitHub to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "helpText": "What this field is: A number used for issue number in GitHub / Add issue comment.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.issueNumber}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "helpText": "What this field is: Issue comment text (for add_issue_comment) for GitHub / Add issue comment.\nHow to fill it: Enter the comment value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.comment}} or pick the value from the data picker.",
              "placeholder": "Enter Comment"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "helpText": "What this field is: Issue labels (array of strings) for GitHub / Add issue comment.\nHow to fill it: Enter valid JSON in the format GitHub expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "helpText": "What this field is: Base branch/ref (for PR/workflow) for GitHub / Add issue comment.\nHow to fill it: Enter the ref value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ref}} or pick the value from the data picker.",
              "placeholder": "main",
              "example": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "helpText": "What this field is: Head branch name (for PR) for GitHub / Add issue comment.\nHow to fill it: Enter the branch name value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.branchName}} or pick the value from the data picker.",
              "placeholder": "Enter Branch Name"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "helpText": "What this field is: Workflow ID or filename (for trigger_workflow) for GitHub / Add issue comment.\nWhere to find it: Open the item in GitHub and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-github-oauth-token",
              "example": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming GitHub data with add issue comment after a related upstream event is received",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "GitHub returns structured add issue comment data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Repository owner (user/org)",
              "helpText": "What this field is: The GitHub username or organization that owns the repository.\nExample: alice (personal) or mycompany (organization)\nWhere to find it: It is the first part of your repository URL: github.com/OWNER/repo-name.",
              "placeholder": "octocat",
              "example": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: The repository name (just the name, not the full URL).\nExample: my-project or backend-api\nWhere to find it: It is the second part of your repository URL: github.com/owner/REPO-NAME.",
              "placeholder": "hello-world",
              "example": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "helpText": "What this field is: The pull request title.\nExample: Fix: Resolve login page crash on Safari iOS 17",
              "placeholder": "Enter Title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Issue/PR body or comment text",
              "helpText": "What this field is: Issue/PR body or comment text for GitHub / Create pr.\nHow to fill it: Type the message, prompt, or content you want GitHub to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "helpText": "What this field is: A number used for issue number in GitHub / Create pr.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.issueNumber}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "helpText": "What this field is: Issue comment text (for add_issue_comment) for GitHub / Create pr.\nHow to fill it: Enter the comment value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.comment}} or pick the value from the data picker.",
              "placeholder": "Enter Comment"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "helpText": "What this field is: Issue labels (array of strings) for GitHub / Create pr.\nHow to fill it: Enter valid JSON in the format GitHub expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "helpText": "What this field is: Base branch/ref (for PR/workflow) for GitHub / Create pr.\nHow to fill it: Enter the ref value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ref}} or pick the value from the data picker.",
              "placeholder": "main",
              "example": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "helpText": "What this field is: Head branch name (for PR) for GitHub / Create pr.\nHow to fill it: Enter the branch name value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.branchName}} or pick the value from the data picker.",
              "placeholder": "Enter Branch Name"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "helpText": "What this field is: Workflow ID or filename (for trigger_workflow) for GitHub / Create pr.\nWhere to find it: Open the item in GitHub and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-github-oauth-token",
              "example": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming GitHub data with create pr after a related upstream event is received",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "GitHub returns structured create pr data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Repository owner (user/org)",
              "helpText": "What this field is: The GitHub username or organization that owns the repository.\nExample: alice (personal) or mycompany (organization)\nWhere to find it: It is the first part of your repository URL: github.com/OWNER/repo-name.",
              "placeholder": "octocat",
              "example": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: The repository name (just the name, not the full URL).\nExample: my-project or backend-api\nWhere to find it: It is the second part of your repository URL: github.com/owner/REPO-NAME.",
              "placeholder": "hello-world",
              "example": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "helpText": "What this field is: Issue/PR title for GitHub / Trigger workflow.\nHow to fill it: Enter the title value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Issue/PR body or comment text",
              "helpText": "What this field is: Issue/PR body or comment text for GitHub / Trigger workflow.\nHow to fill it: Type the message, prompt, or content you want GitHub to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "helpText": "What this field is: A number used for issue number in GitHub / Trigger workflow.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.issueNumber}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "helpText": "What this field is: Issue comment text (for add_issue_comment) for GitHub / Trigger workflow.\nHow to fill it: Enter the comment value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.comment}} or pick the value from the data picker.",
              "placeholder": "Enter Comment"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "helpText": "What this field is: Issue labels (array of strings) for GitHub / Trigger workflow.\nHow to fill it: Enter valid JSON in the format GitHub expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "helpText": "What this field is: Base branch/ref (for PR/workflow) for GitHub / Trigger workflow.\nHow to fill it: Enter the ref value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ref}} or pick the value from the data picker.",
              "placeholder": "main",
              "example": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "helpText": "What this field is: Head branch name (for PR) for GitHub / Trigger workflow.\nHow to fill it: Enter the branch name value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.branchName}} or pick the value from the data picker.",
              "placeholder": "Enter Branch Name"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "helpText": "What this field is: Workflow ID or filename (for trigger_workflow) for GitHub / Trigger workflow.\nWhere to find it: Open the item in GitHub and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-github-oauth-token",
              "example": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming GitHub data with trigger workflow after a related upstream event is received",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "GitHub returns structured trigger workflow data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Repository owner (user/org)",
              "helpText": "What this field is: The GitHub username or organization that owns the repository.\nExample: alice (personal) or mycompany (organization)\nWhere to find it: It is the first part of your repository URL: github.com/OWNER/repo-name.",
              "placeholder": "octocat",
              "example": "octocat"
            },
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: The repository name (just the name, not the full URL).\nExample: my-project or backend-api\nWhere to find it: It is the second part of your repository URL: github.com/owner/REPO-NAME.",
              "placeholder": "hello-world",
              "example": "hello-world"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Issue/PR title",
              "helpText": "What this field is: Issue/PR title for GitHub / List repos.\nHow to fill it: Enter the title value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Issue/PR body or comment text",
              "helpText": "What this field is: Issue/PR body or comment text for GitHub / List repos.\nHow to fill it: Type the message, prompt, or content you want GitHub to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Issue Number",
              "internalKey": "issueNumber",
              "type": "number",
              "required": false,
              "description": "Issue number (for comments/updates)",
              "helpText": "What this field is: A number used for issue number in GitHub / List repos.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.issueNumber}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Issue comment text (for add_issue_comment)",
              "helpText": "What this field is: Issue comment text (for add_issue_comment) for GitHub / List repos.\nHow to fill it: Enter the comment value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.comment}} or pick the value from the data picker.",
              "placeholder": "Enter Comment"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Issue labels (array of strings)",
              "helpText": "What this field is: Issue labels (array of strings) for GitHub / List repos.\nHow to fill it: Enter valid JSON in the format GitHub expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.labels}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            },
            {
              "name": "Ref",
              "internalKey": "ref",
              "type": "string",
              "required": false,
              "description": "Base branch/ref (for PR/workflow)",
              "helpText": "What this field is: Base branch/ref (for PR/workflow) for GitHub / List repos.\nHow to fill it: Enter the ref value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.ref}} or pick the value from the data picker.",
              "placeholder": "main",
              "example": "main"
            },
            {
              "name": "Branch Name",
              "internalKey": "branchName",
              "type": "string",
              "required": false,
              "description": "Head branch name (for PR)",
              "helpText": "What this field is: Head branch name (for PR) for GitHub / List repos.\nHow to fill it: Enter the branch name value requested by GitHub, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.branchName}} or pick the value from the data picker.",
              "placeholder": "Enter Branch Name"
            },
            {
              "name": "Workflow Id",
              "internalKey": "workflowId",
              "type": "string",
              "required": false,
              "description": "Workflow ID or filename (for trigger_workflow)",
              "helpText": "What this field is: Workflow ID or filename (for trigger_workflow) for GitHub / List repos.\nWhere to find it: Open the item in GitHub and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.workflowId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for GitHub (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-github-oauth-token",
              "example": "your-github-oauth-token"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "GitHub Personal Access Token (alternative to OAuth)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access GitHub.\nWhere to get it: Open the GitHub dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "ghp_xxxxxxxxxxxxxxxxxxxx",
              "example": "ghp_xxxxxxxxxxxxxxxxxxxx",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming GitHub data with list repos after a related upstream event is received",
            "inputValues": {
              "Owner": "octocat",
              "Repo": "hello-world",
              "Title": "",
              "Body": "",
              "Issue Number": "10"
            },
            "expectedOutput": "GitHub returns structured list repos data that downstream nodes can reference with {{$json.fieldName}}."
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
