import type { NodeDoc } from '../types';

export const onedriveDoc: NodeDoc = {
  "slug": "onedrive",
  "displayName": "OneDrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/onedrive.svg",
  "description": "OneDrive file operations",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "What this is: Microsoft uses an OAuth connection so CtrlChecks can safely access your Microsoft account.",
    "Go to portal.azure.com and sign in with your Microsoft account.",
    "Go to Azure Active Directory -> App registrations -> New registration.",
    "Give it a name (e.g. CtrlChecks Email) -> set Redirect URI to: http://localhost:3001/api/oauth/microsoft/callback -> Register.",
    "Copy the Application (client) ID and Directory (tenant) ID.",
    "Go to Certificates & Secrets -> New client secret -> Add. Copy the secret VALUE immediately.",
    "Go to API permissions -> Add a permission -> Microsoft Graph -> Delegated -> add Mail.ReadWrite and Mail.Send.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Outlook -> enter Client ID, Secret, and Tenant ID -> Connect with Microsoft -> authorize.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Microsoft node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview",
  "resources": [
    {
      "name": "Operations",
      "description": "OneDrive exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the OneDrive node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The destination folder path in OneDrive.\nExample: /Documents/Reports/2025",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for OneDrive / Upload.\nHow to fill it: Enter the data base64 value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for OneDrive / Upload.\nHow to fill it: Enter the data value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming OneDrive data with upload after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "OneDrive returns structured upload data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the OneDrive node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: File path for OneDrive / Download.\nHow to fill it: Enter the path value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.path}} or pick the value from the data picker.",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for OneDrive / Download.\nHow to fill it: Enter the data base64 value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for OneDrive / Download.\nHow to fill it: Enter the data value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming OneDrive data with download after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "OneDrive returns structured download data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the OneDrive node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: File path for OneDrive / List.\nHow to fill it: Enter the path value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.path}} or pick the value from the data picker.",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for OneDrive / List.\nHow to fill it: Enter the data base64 value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for OneDrive / List.\nHow to fill it: Enter the data value requested by OneDrive, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming OneDrive data with list after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "OneDrive returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the OneDrive node."
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
