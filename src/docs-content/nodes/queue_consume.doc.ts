import type { NodeDoc } from '../types';

export const queueConsumeDoc: NodeDoc = {
  "slug": "queue_consume",
  "displayName": "Queue Consume",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_consume.svg",
  "description": "Consume a message from a queue (waits for next message)",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: Name of the queue for Queue Consume / Execute.\nHow to fill it: Enter the queue name value requested by Queue Consume, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.queueName}} or pick the value from the data picker.",
              "placeholder": "tasks",
              "example": "tasks"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Maximum wait time in milliseconds (0 = infinite)",
              "helpText": "What this field is: A number used for timeout in Queue Consume / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "30000",
              "example": "30000",
              "defaultValue": "30000"
            },
            {
              "name": "Auto Ack",
              "internalKey": "autoAck",
              "type": "boolean",
              "required": false,
              "description": "Automatically acknowledge message after processing",
              "helpText": "What this field is: An on/off choice for auto ack in Queue Consume / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Queue Consume to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
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
