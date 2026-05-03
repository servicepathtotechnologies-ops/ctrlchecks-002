import type { NodeDoc } from '../types';

export const javascriptDoc: NodeDoc = {
  "slug": "javascript",
  "displayName": "JavaScript",
  "category": "Data",
  "logoUrl": "/icons/nodes/javascript.svg",
  "description": "Execute custom JavaScript code Use this node when a workflow needs javascript behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "JavaScript is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the JavaScript node using the configured input fields.",
          "fields": [
            {
              "name": "Code",
              "internalKey": "code",
              "type": "string",
              "required": true,
              "description": "JavaScript code to execute",
              "example": "return { ...$json, fullName: $json.firstName + \" \" + $json.lastName };",
              "placeholder": "return { ...$json, fullName: $json.firstName + \" \" + $json.lastName };"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the JavaScript node.\nconvertible: Value returned by the JavaScript node.",
          "usageExample": {
            "scenario": "Use JavaScript in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Code": "return { ...$json, fullName: $json.firstName + \" \" + $json.lastName };"
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
