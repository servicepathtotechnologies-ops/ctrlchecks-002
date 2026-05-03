import type { NodeDoc } from '../types';

export const queueConsumeDoc: NodeDoc = {
  "slug": "queue_consume",
  "displayName": "Queue Consume",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_consume.svg",
  "description": "Consume a message from a queue (waits for next message) Use this node when a workflow needs queue consume behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Queue Consume is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Queue Consume node using the configured input fields.",
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
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "date",
              "required": false,
              "description": "Maximum wait time in milliseconds (0 = infinite)",
              "example": "30000",
              "defaultValue": "30000"
            },
            {
              "name": "Auto Ack",
              "internalKey": "autoAck",
              "type": "boolean",
              "required": false,
              "description": "Automatically acknowledge message after processing",
              "example": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "success": true,
            "message": "message",
            "jobId": "jobId"
          },
          "outputDescription": "success: Value returned by the Queue Consume node.\nmessage: Value returned by the Queue Consume node.\njobId: Value returned by the Queue Consume node.",
          "usageExample": {
            "scenario": "Use Queue Consume in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Queue Name": "tasks",
              "Timeout": "30000",
              "Auto Ack": "true"
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
    "queue_push"
  ]
};
