import type { NodeDoc } from '../types';

export const dropboxDoc: NodeDoc = {
  "slug": "dropbox",
  "displayName": "Dropbox",
  "category": "Data",
  "logoUrl": "/icons/nodes/dropbox.svg",
  "description": "Dropbox file operations",
  "credentialType": "Dropbox Credential",
  "credentialSetupSteps": [
    "Go to https://www.dropbox.com/developers/apps → Create app.",
    "Choose \"Scoped access\" → \"Full Dropbox\" (or \"App folder\"), give it a name.",
    "Under Permissions, enable the scopes you need (files.metadata.read, files.content.read/write, etc.).",
    "Under Settings, add http://localhost:3001/api/oauth/dropbox/callback as a redirect URI.",
    "In CtrlChecks, open Connections → Add Connection → Dropbox → click \"Connect with Dropbox\" → authorize."
  ],
  "credentialDocsUrl": "https://developers.dropbox.com/oauth-guide",
  "resources": [
    {
      "name": "Operations",
      "description": "Dropbox exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "description": "List recursively (list operation)",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
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
            "scenario": "Use Dropbox to upload in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node executes upload and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "description": "List recursively (list operation)",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
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
            "scenario": "Use Dropbox to download in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node executes download and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "description": "List recursively (list operation)",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
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
            "scenario": "Use Dropbox to list in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Dropbox node."
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
