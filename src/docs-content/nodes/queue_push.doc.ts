import type { NodeDoc } from '../types';

export const queuePushDoc: NodeDoc = {
  "slug": "queue_push",
  "displayName": "Queue Push",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_push.svg",
  "description": "Push a message to a queue Use this node when a workflow needs queue push behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Queue Push is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Queue Push node using the configured input fields.",
          "fields": [
            {
              "name": "Queue Name",
              "internalKey": "queueName",
              "type": "string",
              "required": true,
              "description": "Name of the queue",
              "example": "tasks",
              "placeholder": "tasks"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "json",
              "required": true,
              "description": "Message to push (can be any JSON-serializable value)",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Options",
              "internalKey": "options",
              "type": "json",
              "required": false,
              "description": "Additional Bull options (delay, priority, etc.)",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "success": true,
            "jobId": "jobId"
          },
          "outputDescription": "success: Value returned by the Queue Push node.\njobId: Value returned by the Queue Push node.",
          "usageExample": {
            "scenario": "Use Queue Push in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Queue Name": "tasks",
              "Message": "{{$json}}",
              "Options": "{\"key\":\"value\"}"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_consume"
  ]
};
