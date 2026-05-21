import type { NodeDoc } from '../types';

export const sftpDoc: NodeDoc = {
  "slug": "sftp",
  "displayName": "SFTP",
  "category": "Data",
  "logoUrl": "/icons/nodes/sftp.svg",
  "description": "SFTP file operations",
  "credentialType": "SFTP Credential",
  "credentialSetupSteps": [
    "What this is: SFTP uses an OAuth connection so CtrlChecks can safely access your SFTP account.",
    "Get SFTP connection details from your server administrator: Host (server address or IP), Port (usually 22), Username, and either Password or SSH private key.",
    "Make sure the server firewall allows SSH/SFTP connections (port 22) from CtrlChecks.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> SFTP -> enter Host, Port, Username, and your authentication (password or private key).",
    "If using a private key: paste the full key content including the -----BEGIN and -----END lines.",
    "Click Test Connection -> Save. Run a test step to confirm file transfer works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
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
              "helpText": "What this field is: The SFTP server hostname or IP address.\nExample: sftp.yourcompany.com or 192.168.1.100",
              "placeholder": "sftp.example.com",
              "example": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the SFTP server.\nExample: /home/user/uploads/report.pdf",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
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
            "scenario": "Process incoming SFTP data with upload after a related upstream event is received",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "SFTP returns structured upload data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The SFTP server hostname or IP address.\nExample: sftp.yourcompany.com or 192.168.1.100",
              "placeholder": "sftp.example.com",
              "example": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the SFTP server.\nExample: /home/user/uploads/report.pdf",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
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
            "scenario": "Process incoming SFTP data with download after a related upstream event is received",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "SFTP returns structured download data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: The SFTP server hostname or IP address.\nExample: sftp.yourcompany.com or 192.168.1.100",
              "placeholder": "sftp.example.com",
              "example": "sftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the SFTP server.\nExample: /home/user/uploads/report.pdf",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
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
            "scenario": "Process incoming SFTP data with list after a related upstream event is received",
            "inputValues": {
              "Host": "sftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "SFTP returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
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
