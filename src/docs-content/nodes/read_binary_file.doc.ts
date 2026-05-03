import type { NodeDoc } from '../types';

export const readBinaryFileDoc: NodeDoc = {
  "slug": "read_binary_file",
  "displayName": "Read Binary File",
  "category": "Data",
  "logoUrl": "/icons/nodes/read_binary_file.svg",
  "description": "Read binary files Use this node when a workflow needs read binary file behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Read Binary File is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Read Binary File node using the configured input fields.",
          "fields": [
            {
              "name": "File Path",
              "internalKey": "filePath",
              "type": "string",
              "required": true,
              "description": "File path",
              "example": "/path/to/file.pdf",
              "placeholder": "/path/to/file.pdf"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Read Binary File node.\nstructure: Value returned by the Read Binary File node.\nconvertible: Value returned by the Read Binary File node.\ndefaultValue: Value returned by the Read Binary File node.",
          "usageExample": {
            "scenario": "Use Read Binary File in a workflow and pass upstream data into configure.",
            "inputValues": {
              "File Path": "/path/to/file.pdf"
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
