import type { NodeDoc } from '../types';

export const dropboxDoc: NodeDoc = {
  "slug": "dropbox",
  "displayName": "Dropbox",
  "category": "Data",
  "logoUrl": "/icons/nodes/dropbox.svg",
  "description": "Dropbox file operations",
  "credentialType": "Dropbox Credential",
  "credentialSetupSteps": [
    "What this is: Dropbox uses an OAuth connection so CtrlChecks can safely access your Dropbox account.",
    "Go to dropbox.com/developers/apps and sign in with your Dropbox account.",
    "Click \"Create app\" -> choose \"Scoped access\" -> \"Full Dropbox\" -> give it a name (e.g. CtrlChecks) -> Create app.",
    "Under the \"Permissions\" tab, enable: files.metadata.read, files.content.read, files.content.write.",
    "Under the \"Settings\" tab, add this Redirect URI: http://localhost:3001/api/oauth/dropbox/callback -> Add.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Dropbox -> click \"Connect with Dropbox\" -> sign in -> Allow.",
    "Run a test step (e.g. list files in a folder) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Dropbox node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.dropbox.com/oauth-guide",
  "resources": [
    {
      "name": "Operations",
      "description": "Dropbox exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: The destination file path within your Dropbox.\nExample: /Reports/2025/January/report.pdf or /Uploads/{{$json.fileName}}",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for Dropbox / Upload.\nHow to fill it: Enter the data base64 value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for Dropbox / Upload.\nHow to fill it: Enter the data value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "helpText": "What this field is: An on/off choice for recursive in Dropbox / Upload.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Dropbox to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
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
            "scenario": "Process incoming Dropbox data with upload after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "Dropbox returns structured upload data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: File path for Dropbox / Download.\nHow to fill it: Enter the path value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.path}} or pick the value from the data picker.",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for Dropbox / Download.\nHow to fill it: Enter the data base64 value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for Dropbox / Download.\nHow to fill it: Enter the data value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "helpText": "What this field is: An on/off choice for recursive in Dropbox / Download.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Dropbox to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
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
            "scenario": "Process incoming Dropbox data with download after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "Dropbox returns structured download data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the Dropbox node.",
          "fields": [
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "File path",
              "helpText": "What this field is: File path for Dropbox / List.\nHow to fill it: Enter the path value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.path}} or pick the value from the data picker.",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for Dropbox / List.\nHow to fill it: Enter the data base64 value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for Dropbox / List.\nHow to fill it: Enter the data value requested by Dropbox, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
            },
            {
              "name": "Recursive",
              "internalKey": "recursive",
              "type": "boolean",
              "required": false,
              "description": "List recursively (list operation)",
              "helpText": "What this field is: An on/off choice for recursive in Dropbox / List.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Dropbox to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
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
            "scenario": "Process incoming Dropbox data with list after a related upstream event is received",
            "inputValues": {
              "Path": "/path/to/file.pdf",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}",
              "Recursive": "false"
            },
            "expectedOutput": "Dropbox returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://www.dropbox.com/developers/documentation/http/documentation"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Dropbox node."
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
