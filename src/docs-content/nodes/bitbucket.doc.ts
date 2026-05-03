import type { NodeDoc } from '../types';

export const bitbucketDoc: NodeDoc = {
  "slug": "bitbucket",
  "displayName": "Bitbucket",
  "category": "Data",
  "logoUrl": "/icons/nodes/bitbucket.svg",
  "description": "Bitbucket repository operations Use this node when a workflow needs bitbucket behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Bitbucket Credential, Bitbucket Credential, Bitbucket Token",
  "credentialSetupSteps": [
    "Open the Bitbucket developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Bitbucket Credential, Bitbucket Credential, Bitbucket Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/",
  "resources": [
    {
      "name": "Operations",
      "description": "Bitbucket exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Bitbucket node using the configured input fields.",
          "fields": [
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
              "name": "Workspace",
              "internalKey": "workspace",
              "type": "string",
              "required": false,
              "description": "Bitbucket workspace",
              "example": "{{ $json.workspace }}"
            },
            {
              "name": "Repo Slug",
              "internalKey": "repoSlug",
              "type": "string",
              "required": false,
              "description": "Bitbucket repository slug",
              "example": "{{ $json.repoSlug }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bitbucket username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "App Password",
              "internalKey": "appPassword",
              "type": "password",
              "required": false,
              "description": "Bitbucket app password",
              "example": "{{ $json.appPassword }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Bitbucket OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Bitbucket node.\nstructure: Value returned by the Bitbucket node.\nconvertible: Value returned by the Bitbucket node.\ndefaultValue: Value returned by the Bitbucket node.",
          "usageExample": {
            "scenario": "Use Bitbucket in a workflow and pass upstream data into read.",
            "inputValues": {
              "Repo": "owner/repo",
              "Workspace": "{{ $json.workspace }}",
              "Repo Slug": "{{ $json.repoSlug }}",
              "Username": "{{ $json.username }}",
              "App Password": "{{ $json.appPassword }}",
              "Access Token": "{{ $json.accessToken }}"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Bitbucket node using the configured input fields.",
          "fields": [
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
              "name": "Workspace",
              "internalKey": "workspace",
              "type": "string",
              "required": false,
              "description": "Bitbucket workspace",
              "example": "{{ $json.workspace }}"
            },
            {
              "name": "Repo Slug",
              "internalKey": "repoSlug",
              "type": "string",
              "required": false,
              "description": "Bitbucket repository slug",
              "example": "{{ $json.repoSlug }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bitbucket username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "App Password",
              "internalKey": "appPassword",
              "type": "password",
              "required": false,
              "description": "Bitbucket app password",
              "example": "{{ $json.appPassword }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Bitbucket OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Bitbucket node.\nstructure: Value returned by the Bitbucket node.\nconvertible: Value returned by the Bitbucket node.\ndefaultValue: Value returned by the Bitbucket node.",
          "usageExample": {
            "scenario": "Use Bitbucket in a workflow and pass upstream data into create.",
            "inputValues": {
              "Repo": "owner/repo",
              "Workspace": "{{ $json.workspace }}",
              "Repo Slug": "{{ $json.repoSlug }}",
              "Username": "{{ $json.username }}",
              "App Password": "{{ $json.appPassword }}",
              "Access Token": "{{ $json.accessToken }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Bitbucket node using the configured input fields.",
          "fields": [
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
              "name": "Workspace",
              "internalKey": "workspace",
              "type": "string",
              "required": false,
              "description": "Bitbucket workspace",
              "example": "{{ $json.workspace }}"
            },
            {
              "name": "Repo Slug",
              "internalKey": "repoSlug",
              "type": "string",
              "required": false,
              "description": "Bitbucket repository slug",
              "example": "{{ $json.repoSlug }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bitbucket username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "App Password",
              "internalKey": "appPassword",
              "type": "password",
              "required": false,
              "description": "Bitbucket app password",
              "example": "{{ $json.appPassword }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Bitbucket OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Bitbucket node.\nstructure: Value returned by the Bitbucket node.\nconvertible: Value returned by the Bitbucket node.\ndefaultValue: Value returned by the Bitbucket node.",
          "usageExample": {
            "scenario": "Use Bitbucket in a workflow and pass upstream data into update.",
            "inputValues": {
              "Repo": "owner/repo",
              "Workspace": "{{ $json.workspace }}",
              "Repo Slug": "{{ $json.repoSlug }}",
              "Username": "{{ $json.username }}",
              "App Password": "{{ $json.appPassword }}",
              "Access Token": "{{ $json.accessToken }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Bitbucket node using the configured input fields.",
          "fields": [
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
              "name": "Workspace",
              "internalKey": "workspace",
              "type": "string",
              "required": false,
              "description": "Bitbucket workspace",
              "example": "{{ $json.workspace }}"
            },
            {
              "name": "Repo Slug",
              "internalKey": "repoSlug",
              "type": "string",
              "required": false,
              "description": "Bitbucket repository slug",
              "example": "{{ $json.repoSlug }}"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": false,
              "description": "Bitbucket username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "App Password",
              "internalKey": "appPassword",
              "type": "password",
              "required": false,
              "description": "Bitbucket app password",
              "example": "{{ $json.appPassword }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Bitbucket OAuth access token",
              "example": "{{ $json.accessToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Bitbucket node.\nstructure: Value returned by the Bitbucket node.\nconvertible: Value returned by the Bitbucket node.\ndefaultValue: Value returned by the Bitbucket node.",
          "usageExample": {
            "scenario": "Use Bitbucket in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Repo": "owner/repo",
              "Workspace": "{{ $json.workspace }}",
              "Repo Slug": "{{ $json.repoSlug }}",
              "Username": "{{ $json.username }}",
              "App Password": "{{ $json.appPassword }}",
              "Access Token": "{{ $json.accessToken }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/"
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
