import type { NodeDoc } from '../types';

export const editFieldsDoc: NodeDoc = {
  "slug": "edit_fields",
  "displayName": "Edit Fields",
  "category": "Data",
  "logoUrl": "/icons/nodes/edit_fields.svg",
  "description": "Edit, rename, or transform field values in data objects Use this node when a workflow needs edit fields behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Edit Fields is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Edit Fields node using the configured input fields.",
          "fields": [
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": false,
              "description": "Field mappings and transformations",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Edit Fields node.\nstructure: Value returned by the Edit Fields node.\nconvertible: Value returned by the Edit Fields node.\ndefaultValue: Value returned by the Edit Fields node.",
          "usageExample": {
            "scenario": "Use Edit Fields in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Fields": "[object Object]"
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
