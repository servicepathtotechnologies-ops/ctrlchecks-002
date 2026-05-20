import type { NodeDoc } from '../types';

export const csvDoc: NodeDoc = {
  "slug": "csv",
  "displayName": "CSV",
  "category": "Data",
  "logoUrl": "/icons/nodes/csv.svg",
  "description": "Parse and generate CSV data",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "CSV exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse a CSV string into an array of objects.",
          "fields": [
            {
              "name": "Csv",
              "internalKey": "csv",
              "type": "string",
              "description": "CSV content (for parse)",
              "example": "{{$json.csv}}",
              "placeholder": "{{$json.csv}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data array (for generate)",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "Name": "Alice",
                "Email": "alice@example.com",
                "Plan": "Pro"
              },
              {
                "Name": "Bob",
                "Email": "bob@example.com",
                "Plan": "Free"
              }
            ],
            "headers": [
              "Name",
              "Email",
              "Plan"
            ],
            "rowCount": 2
          },
          "outputDescription": "rows: Array of objects where keys are column headers. headers: Column names. rowCount: Number of data rows.",
          "usageExample": {
            "scenario": "Parse a CSV file downloaded from Google Drive into structured data",
            "inputValues": {
              "csv": "{{$json.content}}",
              "hasHeaders": "true"
            },
            "expectedOutput": "Each row becomes an object. Loop over `{{$json.rows}}` to process each."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Generate",
          "value": "generate",
          "description": "Convert an array of objects into a CSV string.",
          "fields": [
            {
              "name": "Csv",
              "internalKey": "csv",
              "type": "string",
              "description": "CSV content (for parse)",
              "example": "{{$json.csv}}",
              "placeholder": "{{$json.csv}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data array (for generate)",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "csv": "Name,Email,Status\nAlice,alice@example.com,Active\nBob,bob@example.com,Inactive\n",
            "rowCount": 2
          },
          "outputDescription": "csv: The generated CSV string. rowCount: Number of data rows in the output.",
          "usageExample": {
            "scenario": "Export a list of users as a CSV to upload to Google Drive",
            "inputValues": {
              "data": "{{$json.users}}",
              "headers": "[\"Name\", \"Email\", \"Status\"]"
            },
            "expectedOutput": "CSV string in `{{$json.csv}}`. Pass to a Google Drive upload node."
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
