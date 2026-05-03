import type { NodeDoc } from '../types';

export const writeBinaryFileDoc: NodeDoc = {
  "slug": "write_binary_file",
  "displayName": "Write Binary File",
  "category": "Data",
  "logoUrl": "/icons/nodes/write_binary_file.svg",
  "description": "Write binary files Use this node when a workflow needs write binary file behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Write Binary File is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Write Binary File node using the configured input fields.",
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
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Write Binary File node.\nstructure: Value returned by the Write Binary File node.\nconvertible: Value returned by the Write Binary File node.\ndefaultValue: Value returned by the Write Binary File node.",
          "usageExample": {
            "scenario": "Use Write Binary File in a workflow and pass upstream data into configure.",
            "inputValues": {
              "File Path": "/path/to/file.pdf",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
