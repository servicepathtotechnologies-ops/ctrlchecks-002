import type { NodeDoc } from '../types';

export const googleSheetsDoc: NodeDoc = {
  "slug": "google_sheets",
  "displayName": "Google Sheets",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_sheets.svg",
  "description": "Read, write, append, or update data in Google Sheets",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Sheets exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read rows from a Google Sheets spreadsheet.",
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
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "rows": [
              {
                "Name": "Alice",
                "Email": "alice@example.com",
                "Status": "Active"
              },
              {
                "Name": "Bob",
                "Email": "bob@example.com",
                "Status": "Inactive"
              }
            ],
            "count": 2
          },
          "outputDescription": "rows: Array of objects where each key is a column header and each value is the cell value. count: Total number of rows returned.",
          "usageExample": {
            "scenario": "Read a list of customers from a Google Sheet and send each a personalised email",
            "inputValues": {
              "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "sheetName": "Customers",
              "range": "A:D"
            },
            "expectedOutput": "Returns all rows as objects. Use a Loop node downstream to iterate over each row and pass `{{$json.Email}}` to Gmail."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Write",
          "value": "write",
          "description": "Write data to specific cells or a range in a Google Sheet.",
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
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "updatedRange": "Sheet1!A2:C2",
            "updatedRows": 1,
            "updatedColumns": 3,
            "updatedCells": 3
          },
          "outputDescription": "updatedRange: The A1 notation of the range that was written. updatedRows / Columns / Cells: How many rows, columns, and cells were updated.",
          "usageExample": {
            "scenario": "Write form submission data to a Google Sheet",
            "inputValues": {
              "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "range": "Sheet1!A:C",
              "values": "[[\"{{$json.name}}\", \"{{$json.email}}\", \"{{$now}}\"]]"
            },
            "expectedOutput": "Row is written to the sheet. `{{$json.updatedRange}}` confirms where the data was placed."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Append",
          "value": "append",
          "description": "Append a new row to the end of a Google Sheet.",
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
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "tableRange": "Sheet1!A1:C100",
            "updates": {
              "updatedRange": "Sheet1!A101:C101",
              "updatedRows": 1
            }
          },
          "outputDescription": "tableRange: The entire table range including the new row. updates.updatedRange: The specific range of the newly appended row.",
          "usageExample": {
            "scenario": "Append a new order row to a tracking spreadsheet each time a Shopify order is placed",
            "inputValues": {
              "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "sheetName": "Orders",
              "values": "[[\"{{$json.orderId}}\", \"{{$json.customerEmail}}\", \"{{$json.total}}\", \"{{$now}}\"]]"
            },
            "expectedOutput": "A new row is appended. `{{$json.updates.updatedRange}}` shows where it was placed."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update specific cells in an existing Google Sheet row.",
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
              "description": "Sheet name/tab (leave empty for first sheet)",
              "example": "Sheet1",
              "placeholder": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "example": "A1:D100",
              "placeholder": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "description": "Output format for read operations",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Data to write/append (for write/append operations)",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Data object to write/append (alternative to values array)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
            "updatedRange": "Sheet1!D5",
            "updatedCells": 1
          },
          "outputDescription": "updatedRange: The range that was updated. updatedCells: The number of cells that changed.",
          "usageExample": {
            "scenario": "Update the \"Status\" column of a row when an order is fulfilled",
            "inputValues": {
              "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "range": "Sheet1!D{{$json.rowNumber}}",
              "values": "[[\"Fulfilled\"]]"
            },
            "expectedOutput": "The specified cell is updated. Use `{{$json.updatedRange}}` to confirm."
          },
          "externalDocsUrl": "https://developers.google.com/sheets/api/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Sheets node."
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
