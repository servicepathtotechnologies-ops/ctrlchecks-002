import type { NodeDoc } from '../types';

export const jsonParserDoc: NodeDoc = {
  "slug": "json_parser",
  "displayName": "JSON Parser",
  "category": "Data",
  "logoUrl": "/icons/nodes/json_parser.svg",
  "description": "Parse JSON strings into objects and extract specific fields Use this node when a workflow needs json parser behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "JSON Parser is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the JSON Parser node using the configured input fields.",
          "fields": [
            {
              "name": "Json",
              "internalKey": "json",
              "type": "string",
              "required": true,
              "description": "JSON string to parse",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Extract Fields",
              "internalKey": "extractFields",
              "type": "json",
              "required": false,
              "description": "Fields to extract from parsed JSON",
              "example": "name,age,email",
              "placeholder": "name,age,email"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the JSON Parser node.\nconvertible: Value returned by the JSON Parser node.",
          "usageExample": {
            "scenario": "Use JSON Parser in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Json": "{{$json.data}}",
              "Extract Fields": "name,age,email"
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
