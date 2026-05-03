import type { NodeDoc } from '../types';

export const onedriveDoc: NodeDoc = {
  "slug": "onedrive",
  "displayName": "OneDrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/onedrive.svg",
  "description": "OneDrive file operations Use this node when a workflow needs onedrive behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "OneDrive exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the OneDrive node using the configured input fields.",
          "fields": [
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
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the OneDrive node.\nstructure: Value returned by the OneDrive node.\nconvertible: Value returned by the OneDrive node.\ndefaultValue: Value returned by the OneDrive node.",
          "usageExample": {
            "scenario": "Use OneDrive in a workflow and pass upstream data into upload.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the OneDrive node using the configured input fields.",
          "fields": [
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
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the OneDrive node.\nstructure: Value returned by the OneDrive node.\nconvertible: Value returned by the OneDrive node.\ndefaultValue: Value returned by the OneDrive node.",
          "usageExample": {
            "scenario": "Use OneDrive in a workflow and pass upstream data into download.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the OneDrive node using the configured input fields.",
          "fields": [
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
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the OneDrive node.\nstructure: Value returned by the OneDrive node.\nconvertible: Value returned by the OneDrive node.\ndefaultValue: Value returned by the OneDrive node.",
          "usageExample": {
            "scenario": "Use OneDrive in a workflow and pass upstream data into list.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
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
