import type { NodeDoc } from '../types';

export const dateTimeDoc: NodeDoc = {
  "slug": "date_time",
  "displayName": "Date/Time",
  "category": "Data",
  "logoUrl": "/icons/nodes/date_time.svg",
  "description": "Parse, format, and manipulate dates and times Use this node when a workflow needs date/time behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Date/Time exposes operation choices directly.",
      "operations": [
        {
          "name": "Format",
          "value": "format",
          "description": "Format with the Date/Time node using the configured input fields.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "date",
              "required": false,
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Date/Time node.\nconvertible: Value returned by the Date/Time node.\ndefaultValue: Value returned by the Date/Time node.",
          "usageExample": {
            "scenario": "Use Date/Time in a workflow and pass upstream data into format.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node runs format and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Calculate",
          "value": "calculate",
          "description": "Calculate with the Date/Time node using the configured input fields.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "date",
              "required": false,
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Date/Time node.\nconvertible: Value returned by the Date/Time node.\ndefaultValue: Value returned by the Date/Time node.",
          "usageExample": {
            "scenario": "Use Date/Time in a workflow and pass upstream data into calculate.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node runs calculate and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract with the Date/Time node using the configured input fields.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "date",
              "required": false,
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Date/Time node.\nconvertible: Value returned by the Date/Time node.\ndefaultValue: Value returned by the Date/Time node.",
          "usageExample": {
            "scenario": "Use Date/Time in a workflow and pass upstream data into extract.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node runs extract and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse with the Date/Time node using the configured input fields.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "date",
              "required": false,
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Date/Time node.\nconvertible: Value returned by the Date/Time node.\ndefaultValue: Value returned by the Date/Time node.",
          "usageExample": {
            "scenario": "Use Date/Time in a workflow and pass upstream data into parse.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node runs parse and exposes its result in the output panel for the next node."
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
