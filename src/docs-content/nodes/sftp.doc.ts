import type { NodeDoc } from '../types';

export const sftpDoc: NodeDoc = {
  "slug": "sftp",
  "displayName": "SFTP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sftp.svg",
  "description": "SFTP file operations",
  "credentialType": "SFTP Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",
  "resources": [
    {
      "name": "Operations",
      "description": "SFTP exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the SFTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SFTP host",
              "example": "sftp.example.com",
              "placeholder": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
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
            "scenario": "Use SFTP to upload in a workflow.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "The node executes upload and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the SFTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SFTP host",
              "example": "sftp.example.com",
              "placeholder": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
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
            "scenario": "Use SFTP to download in a workflow.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "The node executes download and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the SFTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "SFTP host",
              "example": "sftp.example.com",
              "placeholder": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
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
            "scenario": "Use SFTP to list in a workflow.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the SFTP node."
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
