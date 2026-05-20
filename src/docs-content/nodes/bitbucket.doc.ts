import type { NodeDoc } from '../types';

export const bitbucketDoc: NodeDoc = {
  "slug": "bitbucket",
  "displayName": "Bitbucket",
  "category": "Data",
  "logoUrl": "/icons/nodes/bitbucket.svg",
  "description": "Bitbucket repository operations",
  "credentialType": "Atlassian API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developer.atlassian.com/cloud/bitbucket/rest/intro/",
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
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
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
            "scenario": "Use Bitbucket to create in a workflow.",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
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
            "scenario": "Use Bitbucket to read in a workflow.",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
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
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
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
            "scenario": "Use Bitbucket to update in a workflow.",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "Repository name",
              "example": "owner/repo",
              "placeholder": "owner/repo"
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
            "scenario": "Use Bitbucket to delete in a workflow.",
            "inputValues": {
              "Repo": "owner/repo"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
