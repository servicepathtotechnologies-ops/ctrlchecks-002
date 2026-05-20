import type { NodeDoc } from '../types';

export const writeBinaryFileDoc: NodeDoc = {
  "slug": "write_binary_file",
  "displayName": "Write Binary File",
  "category": "Data",
  "logoUrl": "/icons/nodes/write_binary_file.svg",
  "description": "Write binary files",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Binary data (base64)",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Write Binary File to execute in a workflow.",
            "inputValues": {
              "File Path": "/path/to/file.pdf",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
