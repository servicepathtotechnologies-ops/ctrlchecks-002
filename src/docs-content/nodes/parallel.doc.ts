import type { NodeDoc } from '../types';

export const parallelDoc: NodeDoc = {
  "slug": "parallel",
  "displayName": "Parallel",
  "category": "Logic",
  "logoUrl": "/icons/nodes/parallel.svg",
  "description": "Runs multiple branches concurrently and waits for all to complete Use this node when a workflow needs parallel behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Parallel is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Parallel node using the configured input fields.",
          "fields": [
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "select",
              "required": false,
              "description": "Execution mode (all, race)",
              "example": "all",
              "defaultValue": "all",
              "options": [
                "Wait for all",
                "Race (first completes)"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "results": []
          },
          "outputDescription": "success: Value returned by the Parallel node.\nresults: Value returned by the Parallel node.",
          "usageExample": {
            "scenario": "Use Parallel in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Mode": "all"
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
