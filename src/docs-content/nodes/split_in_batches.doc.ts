import type { NodeDoc } from '../types';

export const splitInBatchesDoc: NodeDoc = {
  "slug": "split_in_batches",
  "displayName": "Split In Batches",
  "category": "Logic",
  "logoUrl": "/icons/nodes/split_in_batches.svg",
  "description": "Split array into batches for processing Use this node when a workflow needs split in batches behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Split In Batches is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Split In Batches node using the configured input fields.",
          "fields": [
            {
              "name": "Batch Size",
              "internalKey": "batchSize",
              "type": "number",
              "required": true,
              "description": "Batch size",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "itemType": "itemType",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Split In Batches node.\nitemType: Value returned by the Split In Batches node.\ndefaultValue: Value returned by the Split In Batches node.",
          "usageExample": {
            "scenario": "Use Split In Batches in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Batch Size": "10"
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
    "function",
    "function_item",
    "if_else",
    "switch",
    "merge"
  ]
};
