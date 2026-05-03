import type { NodeDoc } from '../types';

export const sftpDoc: NodeDoc = {
  "slug": "sftp",
  "displayName": "SFTP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sftp.svg",
  "description": "SFTP file operations Use this node when a workflow needs sftp behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Sftp Credential, Sftp Credential, Sftp Credential, Sftp Credential",
  "credentialSetupSteps": [
    "Open the SFTP developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Sftp Credential, Sftp Credential, Sftp Credential, Sftp Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "SFTP exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the SFTP node using the configured input fields.",
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
              "description": "SFTP port",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SFTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SFTP password. Required unless privateKey is provided.",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Private Key",
              "internalKey": "privateKey",
              "type": "string",
              "required": false,
              "description": "SFTP SSH private key. Required unless password is provided.",
              "example": "{{ $json.privateKey }}"
            },
            {
              "name": "Passphrase",
              "internalKey": "passphrase",
              "type": "string",
              "required": false,
              "description": "Passphrase for encrypted SSH private keys",
              "example": "{{ $json.passphrase }}"
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
          "outputDescription": "type: Value returned by the SFTP node.\nstructure: Value returned by the SFTP node.\nconvertible: Value returned by the SFTP node.\ndefaultValue: Value returned by the SFTP node.",
          "usageExample": {
            "scenario": "Use SFTP in a workflow and pass upstream data into upload.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "22",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Private Key": "{{ $json.privateKey }}",
              "Passphrase": "{{ $json.passphrase }}",
              "File Data": "{{ $json.fileData }}"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the SFTP node using the configured input fields.",
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
              "description": "SFTP port",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SFTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SFTP password. Required unless privateKey is provided.",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Private Key",
              "internalKey": "privateKey",
              "type": "string",
              "required": false,
              "description": "SFTP SSH private key. Required unless password is provided.",
              "example": "{{ $json.privateKey }}"
            },
            {
              "name": "Passphrase",
              "internalKey": "passphrase",
              "type": "string",
              "required": false,
              "description": "Passphrase for encrypted SSH private keys",
              "example": "{{ $json.passphrase }}"
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
          "outputDescription": "type: Value returned by the SFTP node.\nstructure: Value returned by the SFTP node.\nconvertible: Value returned by the SFTP node.\ndefaultValue: Value returned by the SFTP node.",
          "usageExample": {
            "scenario": "Use SFTP in a workflow and pass upstream data into download.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "22",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Private Key": "{{ $json.privateKey }}",
              "Passphrase": "{{ $json.passphrase }}",
              "File Data": "{{ $json.fileData }}"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the SFTP node using the configured input fields.",
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
              "description": "SFTP port",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "SFTP username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": false,
              "description": "SFTP password. Required unless privateKey is provided.",
              "example": "{{ $json.password }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Private Key",
              "internalKey": "privateKey",
              "type": "string",
              "required": false,
              "description": "SFTP SSH private key. Required unless password is provided.",
              "example": "{{ $json.privateKey }}"
            },
            {
              "name": "Passphrase",
              "internalKey": "passphrase",
              "type": "string",
              "required": false,
              "description": "Passphrase for encrypted SSH private keys",
              "example": "{{ $json.passphrase }}"
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
          "outputDescription": "type: Value returned by the SFTP node.\nstructure: Value returned by the SFTP node.\nconvertible: Value returned by the SFTP node.\ndefaultValue: Value returned by the SFTP node.",
          "usageExample": {
            "scenario": "Use SFTP in a workflow and pass upstream data into list.",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf",
              "Port": "22",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Private Key": "{{ $json.privateKey }}",
              "Passphrase": "{{ $json.passphrase }}",
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
