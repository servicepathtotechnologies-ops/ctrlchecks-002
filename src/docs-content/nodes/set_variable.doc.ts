import type { NodeDoc } from '../types';

export const setVariableDoc: NodeDoc = {
  "slug": "set_variable",
  "displayName": "Set Variable",
  "category": "Data",
  "logoUrl": "/icons/nodes/set_variable.svg",
  "description": "Set a variable with a name and value Use this node when a workflow needs set variable behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Set Variable is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Set Variable node using the configured input fields.",
          "fields": [
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": true,
              "description": "Variable name (must be a valid identifier)",
              "example": "myVariable",
              "placeholder": "myVariable"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Variable value (supports template expressions like {{input.field}})",
              "example": "Hello World",
              "placeholder": "Hello World",
              "defaultValue": ""
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": false,
              "description": "Array of field assignments (legacy format)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Keep Source",
              "internalKey": "keepSource",
              "type": "boolean",
              "required": false,
              "description": "Keep original fields",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Set Variable node.\nconvertible: Value returned by the Set Variable node.",
          "usageExample": {
            "scenario": "Use Set Variable in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Name": "myVariable",
              "Value": "Hello World",
              "Values": "[object Object]",
              "Keep Source": "false"
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
