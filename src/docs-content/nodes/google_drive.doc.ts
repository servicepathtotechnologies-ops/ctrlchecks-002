import type { NodeDoc } from '../types';

export const googleDriveDoc: NodeDoc = {
  "slug": "google_drive",
  "displayName": "Google Drive",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_drive.svg",
  "description": "Google Drive file operations (upload, download, list) Use this node when a workflow needs google drive behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Drive exposes operation choices directly.",
      "operations": [
        {
          "name": "List",
          "value": "list",
          "description": "List with the Google Drive node using the configured input fields.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "MIME type for uploaded file",
              "example": "application/octet-stream",
              "defaultValue": "application/octet-stream"
            },
            {
              "name": "Folder Id",
              "internalKey": "folderId",
              "type": "string",
              "required": false,
              "description": "Optional parent folder ID for uploads/lists",
              "example": "{{ $json.folderId }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Drive node.\nitemType: Value returned by the Google Drive node.\nconvertible: Value returned by the Google Drive node.\ndefaultValue: Value returned by the Google Drive node.",
          "usageExample": {
            "scenario": "Use Google Drive in a workflow and pass upstream data into list.",
            "inputValues": {
              "File Id": "file-id",
              "File Name": "document.pdf",
              "File Data": "{{ $json.fileData }}",
              "Mime Type": "application/octet-stream",
              "Folder Id": "{{ $json.folderId }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the Google Drive node using the configured input fields.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "MIME type for uploaded file",
              "example": "application/octet-stream",
              "defaultValue": "application/octet-stream"
            },
            {
              "name": "Folder Id",
              "internalKey": "folderId",
              "type": "string",
              "required": false,
              "description": "Optional parent folder ID for uploads/lists",
              "example": "{{ $json.folderId }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Drive node.\nitemType: Value returned by the Google Drive node.\nconvertible: Value returned by the Google Drive node.\ndefaultValue: Value returned by the Google Drive node.",
          "usageExample": {
            "scenario": "Use Google Drive in a workflow and pass upstream data into download.",
            "inputValues": {
              "File Id": "file-id",
              "File Name": "document.pdf",
              "File Data": "{{ $json.fileData }}",
              "Mime Type": "application/octet-stream",
              "Folder Id": "{{ $json.folderId }}"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        },
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the Google Drive node using the configured input fields.",
          "fields": [
            {
              "name": "File Id",
              "internalKey": "fileId",
              "type": "string",
              "required": false,
              "description": "File ID (for download)",
              "example": "file-id",
              "placeholder": "file-id"
            },
            {
              "name": "File Name",
              "internalKey": "fileName",
              "type": "string",
              "required": false,
              "description": "File name (for upload)",
              "example": "document.pdf",
              "placeholder": "document.pdf"
            },
            {
              "name": "File Data",
              "internalKey": "fileData",
              "type": "string",
              "required": false,
              "description": "File content for upload. Supports plain text, base64, or data URL payloads.",
              "example": "{{ $json.fileData }}"
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "MIME type for uploaded file",
              "example": "application/octet-stream",
              "defaultValue": "application/octet-stream"
            },
            {
              "name": "Folder Id",
              "internalKey": "folderId",
              "type": "string",
              "required": false,
              "description": "Optional parent folder ID for uploads/lists",
              "example": "{{ $json.folderId }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Drive node.\nitemType: Value returned by the Google Drive node.\nconvertible: Value returned by the Google Drive node.\ndefaultValue: Value returned by the Google Drive node.",
          "usageExample": {
            "scenario": "Use Google Drive in a workflow and pass upstream data into upload.",
            "inputValues": {
              "File Id": "file-id",
              "File Name": "document.pdf",
              "File Data": "{{ $json.fileData }}",
              "Mime Type": "application/octet-stream",
              "Folder Id": "{{ $json.folderId }}"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/drive/api/reference/rest/v3"
        }
      ]
    }
  ],
  "commonErrors": [
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
