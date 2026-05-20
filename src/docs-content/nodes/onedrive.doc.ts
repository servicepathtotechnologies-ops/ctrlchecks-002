import type { NodeDoc } from '../types';

export const onedriveDoc: NodeDoc = {
  "slug": "onedrive",
  "displayName": "OneDrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/onedrive.svg",
  "description": "OneDrive file operations",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "Go to Azure Portal → App registrations → New registration.",
    "Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.",
    "Under API Permissions, add Microsoft Graph: Mail.ReadWrite, Mail.Send.",
    "Create a client secret and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Outlook → enter Client ID, Secret, and Tenant ID → click \"Connect with Microsoft\" → authorize."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview",
  "resources": [
    {
      "name": "Operations",
      "description": "OneDrive exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the OneDrive node.",
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
            "scenario": "Use OneDrive to upload in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node executes upload and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the OneDrive node.",
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
            "scenario": "Use OneDrive to download in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node executes download and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the OneDrive node.",
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
            "scenario": "Use OneDrive to list in a workflow.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the OneDrive node."
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
