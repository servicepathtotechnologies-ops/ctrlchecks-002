import type { NodeDoc } from '../types';

export const googleDriveDoc: NodeDoc = {
  "slug": "google_drive",
  "displayName": "Google Drive",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_drive.svg",
  "description": "Google Drive file operations (upload, download, list)",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
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
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
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
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
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
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
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
