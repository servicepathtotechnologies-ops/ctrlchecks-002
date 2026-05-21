import type { NodeDoc } from '../types';

export const queuePushDoc: NodeDoc = {
  "slug": "queue_push",
  "displayName": "Queue Push",
  "category": "Utility",
  "logoUrl": "/icons/nodes/queue_push.svg",
  "description": "Push a message to a queue",
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
              "helpText": "What this field is: Name of the queue for Queue Push / Execute.\nHow to fill it: Enter the queue name value requested by Queue Push, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.queueName}} or pick the value from the data picker.",
              "placeholder": "tasks",
              "example": "tasks"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message to push (can be any JSON-serializable value)",
              "helpText": "What this field is: Message to push (can be any JSON-serializable value) for Queue Push / Execute.\nHow to fill it: Type the message, prompt, or content you want Queue Push to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json}}",
              "example": "{{$json}}"
            },
            {
              "name": "Options",
              "internalKey": "options",
              "type": "json",
              "required": false,
              "description": "Additional Bull options (delay, priority, etc.)",
              "helpText": "What this field is: Additional Bull options (delay, priority, etc.) for Queue Push / Execute.\nHow to fill it: Enter valid JSON in the format Queue Push expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.options}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
