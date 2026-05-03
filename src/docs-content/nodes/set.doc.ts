import type { NodeDoc } from '../types';

export const setDoc: NodeDoc = {
  "slug": "set",
  "displayName": "Set",
  "category": "Data",
  "logoUrl": "/icons/nodes/set.svg",
  "description": "Set/override multiple fields on the current item Use this node when a workflow needs set behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Set is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Set node using the configured input fields.",
          "fields": [
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": true,
              "description": "JSON object of fields to set (supports template strings)",
              "example": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}",
              "placeholder": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Set node.\nstructure: Value returned by the Set node.\nconvertible: Value returned by the Set node.\ndefaultValue: Value returned by the Set node.",
          "usageExample": {
            "scenario": "Use Set in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Fields": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}"
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
