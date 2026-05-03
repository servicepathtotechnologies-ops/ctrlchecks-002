import type { NodeDoc } from '../types';

export const limitDoc: NodeDoc = {
  "slug": "limit",
  "displayName": "Limit",
  "category": "Data",
  "logoUrl": "/icons/nodes/limit.svg",
  "description": "Limit array size Use this node when a workflow needs limit behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Limit is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Limit node using the configured input fields.",
          "fields": [
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": true,
              "description": "Maximum items",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Array",
              "internalKey": "array",
              "type": "json",
              "required": false,
              "description": "Array to limit",
              "example": "{{$json.items}}",
              "placeholder": "{{$json.items}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Limit node.\nitemType: Value returned by the Limit node.\nconvertible: Value returned by the Limit node.\ndefaultValue: Value returned by the Limit node.",
          "usageExample": {
            "scenario": "Use Limit in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Limit": "10",
              "Array": "{{$json.items}}"
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
