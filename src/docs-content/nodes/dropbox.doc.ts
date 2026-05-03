import type { NodeDoc } from '../types';

export const dropboxDoc: NodeDoc = {
  "slug": "dropbox",
  "displayName": "Dropbox",
  "category": "Data",
  "logoUrl": "/icons/nodes/dropbox.svg",
  "description": "Dropbox file operations Use this node when a workflow needs dropbox behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Dropbox exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the Dropbox node using the configured input fields.",
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
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Dropbox node.\nstructure: Value returned by the Dropbox node.\nconvertible: Value returned by the Dropbox node.\ndefaultValue: Value returned by the Dropbox node.",
          "usageExample": {
            "scenario": "Use Dropbox in a workflow and pass upstream data into upload.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the Dropbox node using the configured input fields.",
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
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Dropbox node.\nstructure: Value returned by the Dropbox node.\nconvertible: Value returned by the Dropbox node.\ndefaultValue: Value returned by the Dropbox node.",
          "usageExample": {
            "scenario": "Use Dropbox in a workflow and pass upstream data into download.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Dropbox node using the configured input fields.",
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
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Dropbox node.\nstructure: Value returned by the Dropbox node.\nconvertible: Value returned by the Dropbox node.\ndefaultValue: Value returned by the Dropbox node.",
          "usageExample": {
            "scenario": "Use Dropbox in a workflow and pass upstream data into list.",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
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
