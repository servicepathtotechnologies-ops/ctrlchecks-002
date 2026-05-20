import type { NodeDoc } from '../types';

export const aggregateDoc: NodeDoc = {
  "slug": "aggregate",
  "displayName": "Aggregate",
  "category": "Data",
  "logoUrl": "/icons/nodes/aggregate.svg",
  "description": "Aggregate data",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "Aggregate exposes operation choices directly.",
      "operations": [
        {
          "name": "Sum",
          "value": "sum",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Avg",
          "value": "avg",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Count",
          "value": "count",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Min",
          "value": "min",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Max",
          "value": "max",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Join",
          "value": "join",
          "description": "Aggregate an array of items — sum, average, count, min, max, or group.",
          "fields": [
            {
              "name": "Field",
              "internalKey": "field",
              "type": "string",
              "description": "Field to aggregate",
              "example": "{{$json.amount}}",
              "placeholder": "{{$json.amount}}"
            },
            {
              "name": "Delimiter",
              "internalKey": "delimiter",
              "type": "string",
              "description": "Delimiter used for join/concat operations",
              "example": "\\n",
              "placeholder": "\\n",
              "defaultValue": "\n"
            },
            {
              "name": "Group By",
              "internalKey": "groupBy",
              "type": "string",
              "description": "Optional group-by field (UI-supported). Note: grouping behavior depends on execution implementation.",
              "example": "category",
              "placeholder": "category"
            }
          ],
          "outputExample": {
            "sum": 4500,
            "average": 900,
            "count": 5,
            "min": 200,
            "max": 2000,
            "field": "amount"
          },
          "outputDescription": "sum: Sum of all values. average: Mean value. count: Number of items. min / max: Smallest / largest value.",
          "usageExample": {
            "scenario": "Calculate total sales from an array of order amounts",
            "inputValues": {
              "items": "{{$json.orders}}",
              "field": "amount",
              "operation": "sum"
            },
            "expectedOutput": "`{{$json.sum}}` holds the total sales figure."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an upstream expression resolved to an empty value.",
      "fix": "Open the node, fill every required field, and verify the upstream node output before running."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node documentation."
    }
  ],
  "relatedNodes": []
};
