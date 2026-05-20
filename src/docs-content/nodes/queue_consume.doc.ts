import type { NodeDoc } from '../types';

export const queueConsumeDoc: NodeDoc = {
  "slug": "queue_consume",
  "displayName": "Queue Consume",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_consume.svg",
  "description": "Consume a message from a queue (waits for next message)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Queue Consume is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Consume messages from a Redis queue and process them one by one.",
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
              "type": "number",
              "description": "Maximum wait time in milliseconds (0 = infinite)",
              "example": "30000",
              "placeholder": "30000",
              "defaultValue": "30000"
            },
            {
              "name": "Auto Ack",
              "internalKey": "autoAck",
              "type": "boolean",
              "description": "Automatically acknowledge message after processing",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            }
          ],
          "outputExample": {
            "message": {
              "to": "alice@example.com",
              "subject": "Welcome!"
            },
            "queueName": "email_notifications",
            "processed": true
          },
          "outputDescription": "message: The dequeued message payload. queueName: The queue name. processed: true when the message is acknowledged.",
          "usageExample": {
            "scenario": "Process email notifications from a queue",
            "inputValues": {
              "queue": "email_notifications",
              "timeout": "5000"
            },
            "expectedOutput": "Use `{{$json.message.to}}` and `{{$json.message.subject}}` in a downstream email node."
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
