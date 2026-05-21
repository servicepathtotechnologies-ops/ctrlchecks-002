import type { NodeDoc } from '../types';

export const ftpDoc: NodeDoc = {
  "slug": "ftp",
  "displayName": "FTP",
  "category": "Data",
  "logoUrl": "/icons/nodes/ftp.svg",
  "description": "FTP file operations",
  "credentialType": "FTP Credential",
  "credentialSetupSteps": [
    "What this is: FTP uses an OAuth connection so CtrlChecks can safely access your FTP account.",
    "Get FTP connection details from your hosting provider: Host (server address), Port (usually 21), Username, Password, and the remote directory path.",
    "Confirm the FTP server allows connections from CtrlChecks on port 21.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> FTP -> enter Host, Port, Username, and Password -> Test Connection -> Save.",
    "Tip: Use SFTP instead of FTP whenever your provider supports it - SFTP is encrypted and much more secure.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields."
  ],
  "credentialDocsUrl": "https://en.wikipedia.org/wiki/File_Transfer_Protocol",
  "resources": [
    {
      "name": "Operations",
      "description": "FTP exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the FTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "helpText": "What this field is: The FTP server address.\nExample: ftp.yourcompany.com or 192.168.1.100",
              "placeholder": "ftp.example.com",
              "example": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the FTP server.\nExample: /public_html/uploads/report.pdf",
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
            "scenario": "Process incoming FTP data with upload after a related upstream event is received",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "FTP returns structured upload data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/File_Transfer_Protocol"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the FTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "helpText": "What this field is: The FTP server address.\nExample: ftp.yourcompany.com or 192.168.1.100",
              "placeholder": "ftp.example.com",
              "example": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the FTP server.\nExample: /public_html/uploads/report.pdf",
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
            "scenario": "Process incoming FTP data with download after a related upstream event is received",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "FTP returns structured download data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/File_Transfer_Protocol"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the FTP node.",
          "fields": [
            {
              "name": "Host",
              "internalKey": "host",
              "type": "string",
              "required": true,
              "description": "FTP host",
              "helpText": "What this field is: The FTP server address.\nExample: ftp.yourcompany.com or 192.168.1.100",
              "placeholder": "ftp.example.com",
              "example": "ftp.example.com"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The file path on the FTP server.\nExample: /public_html/uploads/report.pdf",
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
            "scenario": "Process incoming FTP data with list after a related upstream event is received",
            "inputValues": {
              "Host": "ftp.example.com",
              "Path": "/path/to/file.pdf"
            },
            "expectedOutput": "FTP returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://en.wikipedia.org/wiki/File_Transfer_Protocol"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the FTP node."
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
