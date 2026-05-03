import type { NodeDoc } from '../types';

export const mergeDataDoc: NodeDoc = {
  "slug": "merge_data",
  "displayName": "Merge Data",
  "category": "Data",
  "logoUrl": "/icons/nodes/merge_data.svg",
  "description": "Merge data structures from multiple sources Use this node when a workflow needs merge data behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Merge Data is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Merge Data node using the configured input fields.",
          "fields": [
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "string",
              "required": true,
              "description": "Merge mode: append, join, overwrite",
              "example": "append",
              "placeholder": "append",
              "defaultValue": "append"
            },
            {
              "name": "Join By",
              "internalKey": "joinBy",
              "type": "string",
              "required": false,
              "description": "Field to join by (for join mode)",
              "example": "id",
              "placeholder": "id"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Merge Data node.\nstructure: Value returned by the Merge Data node.\nconvertible: Value returned by the Merge Data node.\ndefaultValue: Value returned by the Merge Data node.",
          "usageExample": {
            "scenario": "Use Merge Data in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Mode": "append",
              "Join By": "id"
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
