import type { NodeDoc } from '../types';

export const ftpDoc: NodeDoc = {
  "slug": "ftp",
  "displayName": "FTP",
  "category": "Data",
  "logoUrl": "/icons/nodes/ftp.svg",
  "description": "FTP file operations Use this node when a workflow needs ftp behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Ftp Credential, Ftp Credential",
  "credentialSetupSteps": [
    "Open the FTP developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Ftp Credential, Ftp Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "FTP exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the FTP node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "example": "ftp.example.com",
              "placeholder": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "FTP port",
              "example": "21",
              "defaultValue": "21"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "FTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "FTP password",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Secure",
              "internalKey": "secure",
              "type": "boolean",
              "required": false,
              "description": "Use explicit FTPS/TLS",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the FTP node.\nstructure: Value returned by the FTP node.\nconvertible: Value returned by the FTP node.\ndefaultValue: Value returned by the FTP node.",
          "usageExample": {
            "scenario": "Use FTP in a workflow and pass upstream data into upload.",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "21",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Secure": "false",
              "File Data": "{{ $json.fileData }}"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the FTP node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "example": "ftp.example.com",
              "placeholder": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "FTP port",
              "example": "21",
              "defaultValue": "21"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "FTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "FTP password",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Secure",
              "internalKey": "secure",
              "type": "boolean",
              "required": false,
              "description": "Use explicit FTPS/TLS",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the FTP node.\nstructure: Value returned by the FTP node.\nconvertible: Value returned by the FTP node.\ndefaultValue: Value returned by the FTP node.",
          "usageExample": {
            "scenario": "Use FTP in a workflow and pass upstream data into download.",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "21",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Secure": "false",
              "File Data": "{{ $json.fileData }}"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the FTP node using the configured input fields.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "example": "ftp.example.com",
              "placeholder": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Port",
              "internalKey": "port",
              "type": "number",
              "required": false,
              "description": "FTP port",
              "example": "21",
              "defaultValue": "21"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "FTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "FTP password",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Secure",
              "internalKey": "secure",
              "type": "boolean",
              "required": false,
              "description": "Use explicit FTPS/TLS",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the FTP node.\nstructure: Value returned by the FTP node.\nconvertible: Value returned by the FTP node.\ndefaultValue: Value returned by the FTP node.",
          "usageExample": {
            "scenario": "Use FTP in a workflow and pass upstream data into list.",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "21",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Secure": "false",
              "File Data": "{{ $json.fileData }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
