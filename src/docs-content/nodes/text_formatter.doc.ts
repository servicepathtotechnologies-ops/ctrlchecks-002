import type { NodeDoc } from '../types';

export const textFormatterDoc: NodeDoc = {
  "slug": "text_formatter",
  "displayName": "Text Formatter",
  "category": "Data",
  "logoUrl": "/icons/nodes/text_formatter.svg",
  "description": "Format text strings with templates and placeholders Use this node when a workflow needs text formatter behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Text Formatter is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Text Formatter node using the configured input fields.",
          "fields": [
            {
              "name": "Template",
              "internalKey": "template",
              "type": "string",
              "required": true,
              "description": "Text template with placeholders (e.g., \"Hello {{name}}\")",
              "example": "Hello {{$json.name}}",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Values to substitute in template (optional if using $json syntax)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Text Formatter node.\nconvertible: Value returned by the Text Formatter node.\ndefaultValue: Value returned by the Text Formatter node.",
          "usageExample": {
            "scenario": "Use Text Formatter in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Template": "Hello {{$json.name}}",
              "Values": "[object Object]"
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
