import type { NodeDoc } from '../types';

export const renameKeysDoc: NodeDoc = {
  "slug": "rename_keys",
  "displayName": "Rename Keys",
  "category": "Data",
  "logoUrl": "/icons/nodes/rename_keys.svg",
  "description": "Rename object keys Use this node when a workflow needs rename keys behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Rename Keys is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Rename Keys node using the configured input fields.",
          "fields": [
            {
              "name": "Mappings",
              "internalKey": "mappings",
              "type": "json",
              "required": true,
              "description": "Key mappings: { oldKey: \"newKey\" }",
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
          "outputDescription": "type: Value returned by the Rename Keys node.\nstructure: Value returned by the Rename Keys node.\nconvertible: Value returned by the Rename Keys node.\ndefaultValue: Value returned by the Rename Keys node.",
          "usageExample": {
            "scenario": "Use Rename Keys in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Mappings": "[object Object]"
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
