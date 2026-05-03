import type { NodeDoc } from '../types';

export const csvDoc: NodeDoc = {
  "slug": "csv",
  "displayName": "CSV",
  "category": "Data",
  "logoUrl": "/icons/nodes/csv.svg",
  "description": "Parse and generate CSV data Use this node when a workflow needs csv behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "CSV exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse with the CSV node using the configured input fields.",
          "fields": [
            {
              "name": "Csv",
              "internalKey": "csv",
              "type": "string",
              "required": false,
              "description": "CSV content (for parse)",
              "example": "{{$json.csv}}",
              "placeholder": "{{$json.csv}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data array (for generate)",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the CSV node.\nitemType: Value returned by the CSV node.\nconvertible: Value returned by the CSV node.\ndefaultValue: Value returned by the CSV node.",
          "usageExample": {
            "scenario": "Use CSV in a workflow and pass upstream data into parse.",
            "inputValues": {
              "Csv": "{{$json.csv}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs parse and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Generate",
          "value": "generate",
          "description": "Generate with the CSV node using the configured input fields.",
          "fields": [
            {
              "name": "Csv",
              "internalKey": "csv",
              "type": "string",
              "required": false,
              "description": "CSV content (for parse)",
              "example": "{{$json.csv}}",
              "placeholder": "{{$json.csv}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data array (for generate)",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the CSV node.\nitemType: Value returned by the CSV node.\nconvertible: Value returned by the CSV node.\ndefaultValue: Value returned by the CSV node.",
          "usageExample": {
            "scenario": "Use CSV in a workflow and pass upstream data into generate.",
            "inputValues": {
              "Csv": "{{$json.csv}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs generate and exposes its result in the output panel for the next node."
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
