import type { NodeDoc } from '../types';

export const bitbucketDoc: NodeDoc = {
  "slug": "bitbucket",
  "displayName": "Bitbucket",
  "category": "Data",
  "logoUrl": "/icons/nodes/bitbucket.svg",
  "description": "Bitbucket repository operations",
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
      "description": "Bitbucket exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Bitbucket node.",
          "fields": [
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for Bitbucket / Create.\nHow to fill it: Enter the repo value requested by Bitbucket, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
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
            "scenario": "Process incoming Bitbucket data with create after a related upstream event is received",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "Bitbucket returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Bitbucket node.",
          "fields": [
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for Bitbucket / Read.\nHow to fill it: Enter the repo value requested by Bitbucket, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
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
            "scenario": "Process incoming Bitbucket data with read after a related upstream event is received",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "Bitbucket returns structured read data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Bitbucket node.",
          "fields": [
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for Bitbucket / Update.\nHow to fill it: Enter the repo value requested by Bitbucket, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
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
            "scenario": "Process incoming Bitbucket data with update after a related upstream event is received",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "Bitbucket returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Bitbucket node.",
          "fields": [
            {
              "name": "Repo",
              "internalKey": "repo",
              "type": "string",
              "required": false,
              "description": "Repository name",
              "helpText": "What this field is: Repository name for Bitbucket / Delete.\nHow to fill it: Enter the repo value requested by Bitbucket, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.repo}} or pick the value from the data picker.",
              "placeholder": "owner/repo",
              "example": "owner/repo"
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
            "scenario": "Process incoming Bitbucket data with delete after a related upstream event is received",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "Bitbucket returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Bitbucket node."
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
