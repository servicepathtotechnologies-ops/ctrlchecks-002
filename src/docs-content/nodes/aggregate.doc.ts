import type { NodeDoc } from '../types';

export const aggregateDoc: NodeDoc = {
  "slug": "aggregate",
  "displayName": "Aggregate",
  "category": "Data",
  "logoUrl": "/icons/nodes/aggregate.svg",
  "description": "Aggregate data Use this node when a workflow needs aggregate behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Aggregate exposes operation choices directly.",
      "operations": [
        {
          "name": "Sum",
          "value": "sum",
          "description": "Sum with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into sum.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs sum and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Avg",
          "value": "avg",
          "description": "Avg with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into avg.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs avg and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Count",
          "value": "count",
          "description": "Count with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into count.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs count and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Min",
          "value": "min",
          "description": "Min with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into min.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs min and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Max",
          "value": "max",
          "description": "Max with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into max.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs max and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Join",
          "value": "join",
          "description": "Join with the Aggregate node using the configured input fields.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "required": false,
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "required": false,
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "required": false,
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Aggregate node.\nstructure: Value returned by the Aggregate node.\nconvertible: Value returned by the Aggregate node.",
          "usageExample": {
            "scenario": "Use Aggregate in a workflow and pass upstream data into join.",
            "inputValues": {
              "Field": "{{$json.amount}}",
              "Delimiter": "\\n",
              "Group By": "category"
            },
            "expectedOutput": "The node runs join and exposes its result in the output panel for the next node."
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
