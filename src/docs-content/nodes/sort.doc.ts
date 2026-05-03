import type { NodeDoc } from '../types';

export const sortDoc: NodeDoc = {
  "slug": "sort",
  "displayName": "Sort",
  "category": "Data",
  "logoUrl": "/icons/nodes/sort.svg",
  "description": "Sort arrays Use this node when a workflow needs sort behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Sort is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Sort node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to sort by",
              "example": "name",
              "placeholder": "name"
            },
            {
              "name": "Direction",
              "internalKey": "direction",
              "type": "string",
              "required": false,
              "description": "Sort direction: asc, desc",
              "example": "asc",
              "placeholder": "asc",
              "defaultValue": "asc"
            },
            {
              "name": "Type",
              "internalKey": "type",
              "type": "string",
              "required": false,
              "description": "Value type: auto, number, string, date",
              "example": "auto",
              "placeholder": "auto",
              "defaultValue": "auto"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Sort node.\nitemType: Value returned by the Sort node.\nconvertible: Value returned by the Sort node.\ndefaultValue: Value returned by the Sort node.",
          "usageExample": {
            "scenario": "Use Sort in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Field": "name",
              "Direction": "asc",
              "Type": "auto"
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
