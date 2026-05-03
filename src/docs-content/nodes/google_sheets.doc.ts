import type { NodeDoc } from '../types';

export const googleSheetsDoc: NodeDoc = {
  "slug": "google_sheets",
  "displayName": "Google Sheets",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_sheets.svg",
  "description": "Read, write, append, or update data in Google Sheets Use this node when a workflow needs google sheets behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Sheets exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Google Sheets node using the configured input fields.",
          "fields": [
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": true,
              "description": "Google Sheets spreadsheet ID (from URL: /d/SPREADSHEET_ID/edit)",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"value\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Sheets node.\nitemType: Value returned by the Google Sheets node.\nconvertible: Value returned by the Google Sheets node.\ndefaultValue: Value returned by the Google Sheets node.",
          "usageExample": {
            "scenario": "Use Google Sheets in a workflow and pass upstream data into read.",
            "inputValues": {
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A1:D100",
              "Output Format": "json",
              "Values": "[\"value\"]",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Write",
          "value": "write",
          "description": "Write with the Google Sheets node using the configured input fields.",
          "fields": [
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": true,
              "description": "Google Sheets spreadsheet ID (from URL: /d/SPREADSHEET_ID/edit)",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"value\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Sheets node.\nitemType: Value returned by the Google Sheets node.\nconvertible: Value returned by the Google Sheets node.\ndefaultValue: Value returned by the Google Sheets node.",
          "usageExample": {
            "scenario": "Use Google Sheets in a workflow and pass upstream data into write.",
            "inputValues": {
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A1:D100",
              "Output Format": "json",
              "Values": "[\"value\"]",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs write and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Append",
          "value": "append",
          "description": "Append with the Google Sheets node using the configured input fields.",
          "fields": [
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": true,
              "description": "Google Sheets spreadsheet ID (from URL: /d/SPREADSHEET_ID/edit)",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"value\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Sheets node.\nitemType: Value returned by the Google Sheets node.\nconvertible: Value returned by the Google Sheets node.\ndefaultValue: Value returned by the Google Sheets node.",
          "usageExample": {
            "scenario": "Use Google Sheets in a workflow and pass upstream data into append.",
            "inputValues": {
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A1:D100",
              "Output Format": "json",
              "Values": "[\"value\"]",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs append and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Google Sheets node using the configured input fields.",
          "fields": [
            {
              "name": "Spreadsheet Id",
              "internalKey": "spreadsheetId",
              "type": "string",
              "required": true,
              "description": "Google Sheets spreadsheet ID (from URL: /d/SPREADSHEET_ID/edit)",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"value\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Sheets node.\nitemType: Value returned by the Google Sheets node.\nconvertible: Value returned by the Google Sheets node.\ndefaultValue: Value returned by the Google Sheets node.",
          "usageExample": {
            "scenario": "Use Google Sheets in a workflow and pass upstream data into update.",
            "inputValues": {
              "Spreadsheet Id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "Sheet Name": "Sheet1",
              "Range": "A1:D100",
              "Output Format": "json",
              "Values": "[\"value\"]",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
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
    "google_doc"
  ]
};
