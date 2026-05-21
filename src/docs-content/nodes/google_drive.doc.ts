import type { NodeDoc } from '../types';

export const googleDriveDoc: NodeDoc = {
  "slug": "google_drive",
  "displayName": "Google Drive",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_drive.svg",
  "description": "Google Drive file operations (upload, download, list)",
  "credentialType": "Google Drive OAuth",
  "credentialSetupSteps": [
    "What this is: Google Drive uses an OAuth connection so CtrlChecks can safely access your Google Drive account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Google Drive API: drive.file.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Drive -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Drive node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Drive exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload a file to Google Drive.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "helpText": "What this field is: File ID (for download) for Google Drive / Upload.\nWhere to find it: Open the item in Google Drive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.fileId}} or pick the value from the data picker.",
              "placeholder": "file-id",
              "example": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "helpText": "What this field is: File name (for upload) for Google Drive / Upload.\nHow to fill it: Enter the file name value requested by Google Drive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fileName}} or pick the value from the data picker.",
              "placeholder": "document.pdf",
              "example": "document.pdf"
            }
          ],
          "outputExample": {
            "id": "newFile456",
            "name": "report-2025-01.pdf",
            "webViewLink": "https://drive.google.com/file/d/newFile456/view",
            "mimeType": "application/pdf"
          },
          "outputDescription": "id: The new file ID in Drive. name: File name. webViewLink: Browser-accessible URL to the file.",
          "usageExample": {
            "scenario": "Upload a generated PDF report to a shared Drive folder",
            "inputValues": {
              "folderId": "{{$env.REPORTS_FOLDER_ID}}",
              "fileName": "report-{{$now}}.pdf",
              "content": "{{$json.pdfContent}}",
              "mimeType": "application/pdf"
            },
            "expectedOutput": "File is uploaded. Share `{{$json.webViewLink}}` with stakeholders."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download the content of a file from Google Drive.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "helpText": "What this field is: File ID (for download) for Google Drive / Download.\nWhere to find it: Open the item in Google Drive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.fileId}} or pick the value from the data picker.",
              "placeholder": "file-id",
              "example": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "helpText": "What this field is: File name (for upload) for Google Drive / Download.\nHow to fill it: Enter the file name value requested by Google Drive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fileName}} or pick the value from the data picker.",
              "placeholder": "document.pdf",
              "example": "document.pdf"
            }
          ],
          "outputExample": {
            "fileId": "file1",
            "fileName": "data.csv",
            "content": "Name,Email\nAlice,alice@example.com\n",
            "mimeType": "text/csv",
            "size": 1024
          },
          "outputDescription": "fileId: The Drive file ID. fileName: The file name. content: The raw file content as a string. mimeType: The file MIME type.",
          "usageExample": {
            "scenario": "Download a CSV export from Drive and process each row",
            "inputValues": {
              "fileId": "{{$json.fileId}}"
            },
            "expectedOutput": "File content is returned in `{{$json.content}}`. Pass to a CSV node to parse rows."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List files and folders in Google Drive.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "helpText": "What this field is: File ID (for download) for Google Drive / List.\nWhere to find it: Open the item in Google Drive and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.fileId}} or pick the value from the data picker.",
              "placeholder": "file-id",
              "example": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "helpText": "What this field is: File name (for upload) for Google Drive / List.\nHow to fill it: Enter the file name value requested by Google Drive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fileName}} or pick the value from the data picker.",
              "placeholder": "document.pdf",
              "example": "document.pdf"
            }
          ],
          "outputExample": {
            "files": [
              {
                "id": "file1",
                "name": "Q4 Report.pdf",
                "mimeType": "application/pdf",
                "modifiedTime": "2025-01-14T10:00:00Z"
              }
            ],
            "nextPageToken": null
          },
          "outputDescription": "files: Array of file/folder objects with id, name, mimeType, and modifiedTime. nextPageToken: Token for paginating results.",
          "usageExample": {
            "scenario": "List all PDF files in a specific Drive folder to process each one",
            "inputValues": {
              "folderId": "{{$env.DRIVE_FOLDER_ID}}",
              "mimeType": "application/pdf",
              "maxResults": "50"
            },
            "expectedOutput": "Returns matching files. Loop over `{{$json.files}}` and use each `{{$json.id}}` in a Download operation."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Drive node."
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
