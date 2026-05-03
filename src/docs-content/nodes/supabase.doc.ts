import type { NodeDoc } from '../types';

export const supabaseDoc: NodeDoc = {
  "slug": "supabase",
  "displayName": "Supabase",
  "category": "Data",
  "logoUrl": "/icons/nodes/supabase.svg",
  "description": "Interact with Supabase (PostgreSQL + realtime + storage) Use this node when a workflow needs supabase behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Supabase exposes operation choices directly.",
      "operations": [
        {
          "name": "Select",
          "value": "select",
          "description": "Select with the Supabase node using the configured input fields.",
          "fields": [
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "example": "{{ $json.table }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data for insert/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filters",
              "internalKey": "filters",
              "type": "json",
              "required": false,
              "description": "Filter conditions",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Supabase node.\nitemType: Value returned by the Supabase node.\nconvertible: Value returned by the Supabase node.\ndefaultValue: Value returned by the Supabase node.",
          "usageExample": {
            "scenario": "Use Supabase in a workflow and pass upstream data into select.",
            "inputValues": {
              "Table": "{{ $json.table }}",
              "Data": "{\"key\":\"value\"}",
              "Filters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs select and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://supabase.com/docs/reference/javascript/introduction"
        },
        {
          "name": "Insert",
          "value": "insert",
          "description": "Insert with the Supabase node using the configured input fields.",
          "fields": [
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "example": "{{ $json.table }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data for insert/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filters",
              "internalKey": "filters",
              "type": "json",
              "required": false,
              "description": "Filter conditions",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Supabase node.\nitemType: Value returned by the Supabase node.\nconvertible: Value returned by the Supabase node.\ndefaultValue: Value returned by the Supabase node.",
          "usageExample": {
            "scenario": "Use Supabase in a workflow and pass upstream data into insert.",
            "inputValues": {
              "Table": "{{ $json.table }}",
              "Data": "{\"key\":\"value\"}",
              "Filters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs insert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://supabase.com/docs/reference/javascript/introduction"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Supabase node using the configured input fields.",
          "fields": [
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "example": "{{ $json.table }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data for insert/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filters",
              "internalKey": "filters",
              "type": "json",
              "required": false,
              "description": "Filter conditions",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Supabase node.\nitemType: Value returned by the Supabase node.\nconvertible: Value returned by the Supabase node.\ndefaultValue: Value returned by the Supabase node.",
          "usageExample": {
            "scenario": "Use Supabase in a workflow and pass upstream data into update.",
            "inputValues": {
              "Table": "{{ $json.table }}",
              "Data": "{\"key\":\"value\"}",
              "Filters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://supabase.com/docs/reference/javascript/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Supabase node using the configured input fields.",
          "fields": [
            {
              "name": "Table",
              "internalKey": "table",
              "type": "string",
              "required": true,
              "description": "Table name",
              "example": "{{ $json.table }}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Data for insert/update",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Filters",
              "internalKey": "filters",
              "type": "json",
              "required": false,
              "description": "Filter conditions",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Supabase node.\nitemType: Value returned by the Supabase node.\nconvertible: Value returned by the Supabase node.\ndefaultValue: Value returned by the Supabase node.",
          "usageExample": {
            "scenario": "Use Supabase in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Table": "{{ $json.table }}",
              "Data": "{\"key\":\"value\"}",
              "Filters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://supabase.com/docs/reference/javascript/introduction"
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
    "database_read",
    "database_write",
    "google_sheets",
    "google_doc"
  ]
};
