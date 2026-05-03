import type { NodeDoc } from '../types';

export const workflowTriggerDoc: NodeDoc = {
  "slug": "workflow_trigger",
  "displayName": "Workflow Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/workflow_trigger.svg",
  "description": "Trigger workflow from another workflow Use this node when a workflow needs workflow trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Workflow Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Workflow Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Source Workflow Id",
              "internalKey": "source_workflow_id",
              "type": "string",
              "required": true,
              "description": "ID of the workflow that is allowed to trigger this workflow",
              "example": "workflow_123",
              "placeholder": "workflow_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Workflow Trigger node.\nstructure: Value returned by the Workflow Trigger node.",
          "usageExample": {
            "scenario": "Use Workflow Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Source Workflow Id": "workflow_123"
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
    "schedule",
    "webhook",
    "manual_trigger",
    "interval",
    "chat_trigger"
  ]
};
