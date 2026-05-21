import type { NodeDoc } from '../types';

export const writeBinaryFileDoc: NodeDoc = {
  "slug": "write_binary_file",
  "displayName": "Write Binary File",
  "category": "Data",
  "logoUrl": "/icons/nodes/write_binary_file.svg",
  "description": "Write binary files",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Write Binary File is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Write Binary File node.",
          "fields": [
            {
              "name": "File Path",
              "internalKey": "filePath",
              "type": "string",
              "required": true,
              "description": "File path",
              "helpText": "What this field is: Where to save the file, including the full path and filename.\nExample: /output/reports/summary.pdf or /tmp/export-{{$json.date}}.csv",
              "placeholder": "/path/to/file.pdf",
              "example": "/path/to/file.pdf"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Binary data (base64)",
              "helpText": "What this field is: Binary data (base64) for Write Binary File / Execute.\nHow to fill it: Enter the data value requested by Write Binary File, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
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
            "scenario": "Process incoming Write Binary File data with execute after a related upstream event is received",
            "inputValues": {
              "File Path": "/path/to/file.pdf",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "Write Binary File returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
