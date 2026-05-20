import type { NodeDoc } from '../types';

export const queuePushDoc: NodeDoc = {
  "slug": "queue_push",
  "displayName": "Queue Push",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_push.svg",
  "description": "Push a message to a queue",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Queue Push is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Push a message onto a Redis-backed queue for asynchronous processing.",
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
              "type": "textarea",
              "required": true,
              "description": "Message to push (can be any JSON-serializable value)",
              "example": "{{$json}}",
              "placeholder": "{{$json}}"
            },
            {
              "name": "Options",
              "internalKey": "options",
              "type": "json",
              "description": "Additional Bull options (delay, priority, etc.)",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "pushed": true,
            "queueName": "email_notifications",
            "position": 42,
            "messageId": "msg_abc123"
          },
          "outputDescription": "pushed: true if the message was added. queueName: The queue it was sent to. position: Position in the queue. messageId: Unique message ID.",
          "usageExample": {
            "scenario": "Queue an email notification for background processing instead of blocking the webhook",
            "inputValues": {
              "queue": "email_notifications",
              "message": "{\"to\": \"{{$json.email}}\", \"subject\": \"Welcome!\"}"
            },
            "expectedOutput": "Message is queued. A Queue Consume worker processes it asynchronously."
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
