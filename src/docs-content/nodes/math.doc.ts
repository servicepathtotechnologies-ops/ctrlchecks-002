import type { NodeDoc } from '../types';

export const mathDoc: NodeDoc = {
  "slug": "math",
  "displayName": "Math",
  "category": "Data",
  "logoUrl": "/icons/nodes/math.svg",
  "description": "Mathematical operations and calculations Use this node when a workflow needs math behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Math exposes operation choices directly.",
      "operations": [
        {
          "name": "Add",
          "value": "add",
          "description": "Add with the Math node using the configured input fields.",
          "fields": [
            {
              "name": "A",
              "internalKey": "a",
              "type": "number",
              "required": false,
              "description": "First number",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "B",
              "internalKey": "b",
              "type": "number",
              "required": false,
              "description": "Second number",
              "example": "5",
              "placeholder": "5"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Math node.\nconvertible: Value returned by the Math node.\ndefaultValue: Value returned by the Math node.",
          "usageExample": {
            "scenario": "Use Math in a workflow and pass upstream data into add.",
            "inputValues": {
              "A": "10",
              "B": "5"
            },
            "expectedOutput": "The node runs add and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Subtract",
          "value": "subtract",
          "description": "Subtract with the Math node using the configured input fields.",
          "fields": [
            {
              "name": "A",
              "internalKey": "a",
              "type": "number",
              "required": false,
              "description": "First number",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "B",
              "internalKey": "b",
              "type": "number",
              "required": false,
              "description": "Second number",
              "example": "5",
              "placeholder": "5"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Math node.\nconvertible: Value returned by the Math node.\ndefaultValue: Value returned by the Math node.",
          "usageExample": {
            "scenario": "Use Math in a workflow and pass upstream data into subtract.",
            "inputValues": {
              "A": "10",
              "B": "5"
            },
            "expectedOutput": "The node runs subtract and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Multiply",
          "value": "multiply",
          "description": "Multiply with the Math node using the configured input fields.",
          "fields": [
            {
              "name": "A",
              "internalKey": "a",
              "type": "number",
              "required": false,
              "description": "First number",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "B",
              "internalKey": "b",
              "type": "number",
              "required": false,
              "description": "Second number",
              "example": "5",
              "placeholder": "5"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Math node.\nconvertible: Value returned by the Math node.\ndefaultValue: Value returned by the Math node.",
          "usageExample": {
            "scenario": "Use Math in a workflow and pass upstream data into multiply.",
            "inputValues": {
              "A": "10",
              "B": "5"
            },
            "expectedOutput": "The node runs multiply and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Divide",
          "value": "divide",
          "description": "Divide with the Math node using the configured input fields.",
          "fields": [
            {
              "name": "A",
              "internalKey": "a",
              "type": "number",
              "required": false,
              "description": "First number",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "B",
              "internalKey": "b",
              "type": "number",
              "required": false,
              "description": "Second number",
              "example": "5",
              "placeholder": "5"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Math node.\nconvertible: Value returned by the Math node.\ndefaultValue: Value returned by the Math node.",
          "usageExample": {
            "scenario": "Use Math in a workflow and pass upstream data into divide.",
            "inputValues": {
              "A": "10",
              "B": "5"
            },
            "expectedOutput": "The node runs divide and exposes its result in the output panel for the next node."
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
