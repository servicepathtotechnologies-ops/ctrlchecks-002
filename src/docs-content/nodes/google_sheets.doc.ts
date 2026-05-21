import type { NodeDoc } from '../types';

export const googleSheetsDoc: NodeDoc = {
  "slug": "google_sheets",
  "displayName": "Google Sheets",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_sheets.svg",
  "description": "Read, write, append, or update data in Google Sheets",
  "credentialType": "Google Sheets OAuth",
  "credentialSetupSteps": [
    "What this is: Google Sheets uses an OAuth connection so CtrlChecks can safely access your Google Sheets account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Google Sheets API: spreadsheets.readonly and spreadsheets.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Sheets -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Sheets node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
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
              "helpText": "What this field is: The unique file ID of your Google Sheet.\nWhere to find it: Open your Google Sheet in a browser. Look at the URL in the address bar:\n  https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit\nCopy the long text between /d/ and /edit.\nExample: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms\nTip: The ID stays the same even if you rename the file.",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "helpText": "What this field is: The name of the tab (sheet) inside your spreadsheet.\nWhere to find it: Open the spreadsheet — look at the tabs at the bottom. Click the one you want and copy its name exactly.\nExample: Sheet1 or Customers or January 2025\nNote: The name is case-sensitive. \"sheet1\" and \"Sheet1\" are treated as different tabs.",
              "placeholder": "Sheet1",
              "example": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": false,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "helpText": "What this field is: The exact cells to read or write — written in A1 notation.\nFormat: TabName!StartColumn+StartRow:EndColumn+EndRow\nExamples:\n  Sheet1!A1:D100  →  columns A to D, rows 1 to 100 on the Sheet1 tab\n  Customers!B2:E  →  column B to E, all rows starting from row 2 in the Customers tab\n  Sheet1!A:D      →  all rows in columns A through D\nTip: Use just A1:D1000 if you only have one sheet tab.",
              "placeholder": "A1:D100",
              "example": "A1:D100"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "helpText": "What this field is: Output format for read operations for Google Sheets / Read.\nHow to fill it: Enter the output format value requested by Google Sheets, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.outputFormat}} or pick the value from the data picker.",
              "placeholder": "json",
              "example": "json",
              "defaultValue": "json"
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
              "helpText": "What this field is: The unique file ID of your Google Sheet.\nWhere to find it: Open your Google Sheet in a browser. Look at the URL in the address bar:\n  https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit\nCopy the long text between /d/ and /edit.\nExample: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms\nTip: The ID stays the same even if you rename the file.",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "helpText": "What this field is: The name of the tab (sheet) inside your spreadsheet.\nWhere to find it: Open the spreadsheet — look at the tabs at the bottom. Click the one you want and copy its name exactly.\nExample: Sheet1 or Customers or January 2025\nNote: The name is case-sensitive. \"sheet1\" and \"Sheet1\" are treated as different tabs.",
              "placeholder": "Sheet1",
              "example": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": true,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "helpText": "What this field is: The exact cells to read or write — written in A1 notation.\nFormat: TabName!StartColumn+StartRow:EndColumn+EndRow\nExamples:\n  Sheet1!A1:D100  →  columns A to D, rows 1 to 100 on the Sheet1 tab\n  Customers!B2:E  →  column B to E, all rows starting from row 2 in the Customers tab\n  Sheet1!A:D      →  all rows in columns A through D\nTip: Use just A1:D1000 if you only have one sheet tab.",
              "placeholder": "A1:D100",
              "example": "A1:D100"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Data to write/append (for write/append operations)",
              "helpText": "What this field is: Data to write/append (for write/append operations) for Google Sheets / Write.\nHow to fill it: Enter valid JSON in the format Google Sheets expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
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
              "helpText": "What this field is: The unique file ID of your Google Sheet.\nWhere to find it: Open your Google Sheet in a browser. Look at the URL in the address bar:\n  https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit\nCopy the long text between /d/ and /edit.\nExample: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms\nTip: The ID stays the same even if you rename the file.",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "helpText": "What this field is: The name of the tab (sheet) inside your spreadsheet.\nWhere to find it: Open the spreadsheet — look at the tabs at the bottom. Click the one you want and copy its name exactly.\nExample: Sheet1 or Customers or January 2025\nNote: The name is case-sensitive. \"sheet1\" and \"Sheet1\" are treated as different tabs.",
              "placeholder": "Sheet1",
              "example": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": true,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "helpText": "What this field is: The exact cells to read or write — written in A1 notation.\nFormat: TabName!StartColumn+StartRow:EndColumn+EndRow\nExamples:\n  Sheet1!A1:D100  →  columns A to D, rows 1 to 100 on the Sheet1 tab\n  Customers!B2:E  →  column B to E, all rows starting from row 2 in the Customers tab\n  Sheet1!A:D      →  all rows in columns A through D\nTip: Use just A1:D1000 if you only have one sheet tab.",
              "placeholder": "A1:D100",
              "example": "A1:D100"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Data to write/append (for write/append operations)",
              "helpText": "What this field is: One or more rows to add at the bottom of the sheet.\nFormat: Array of arrays.\nExample: [[\"Charlie\",\"charlie@example.com\",\"2025-01-17\"]]",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
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
              "helpText": "What this field is: The unique file ID of your Google Sheet.\nWhere to find it: Open your Google Sheet in a browser. Look at the URL in the address bar:\n  https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit\nCopy the long text between /d/ and /edit.\nExample: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms\nTip: The ID stays the same even if you rename the file.",
              "placeholder": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
              "example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
            },
            {
              "name": "Sheet Name",
              "internalKey": "sheetName",
              "type": "string",
              "required": false,
              "description": "Sheet name/tab (leave empty for first sheet)",
              "helpText": "What this field is: The name of the tab (sheet) inside your spreadsheet.\nWhere to find it: Open the spreadsheet — look at the tabs at the bottom. Click the one you want and copy its name exactly.\nExample: Sheet1 or Customers or January 2025\nNote: The name is case-sensitive. \"sheet1\" and \"Sheet1\" are treated as different tabs.",
              "placeholder": "Sheet1",
              "example": "Sheet1"
            },
            {
              "name": "Range",
              "internalKey": "range",
              "type": "string",
              "required": true,
              "description": "Cell range (e.g., A1:D100, leave empty for all used cells)",
              "helpText": "What this field is: The exact cells to read or write — written in A1 notation.\nFormat: TabName!StartColumn+StartRow:EndColumn+EndRow\nExamples:\n  Sheet1!A1:D100  →  columns A to D, rows 1 to 100 on the Sheet1 tab\n  Customers!B2:E  →  column B to E, all rows starting from row 2 in the Customers tab\n  Sheet1!A:D      →  all rows in columns A through D\nTip: Use just A1:D1000 if you only have one sheet tab.",
              "placeholder": "A1:D100",
              "example": "A1:D100"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Data to write/append (for write/append operations)",
              "helpText": "What this field is: Data to write/append (for write/append operations) for Google Sheets / Update.\nHow to fill it: Enter valid JSON in the format Google Sheets expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
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
