import type { NodeDoc } from '../types';

export const chatTriggerDoc: NodeDoc = {
  "slug": "chat_trigger",
  "displayName": "Chat Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/chat_trigger.svg",
  "description": "Trigger workflow from chat/AI interactions",
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
      "description": "Chat Trigger is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Start the workflow when a user sends a chat message in the CtrlChecks chat interface.",
          "fields": [
            {
              "name": "Channel",
              "internalKey": "channel",
              "type": "string",
              "required": false,
              "description": "Optional channel/context to filter incoming chat events",
              "helpText": "What this field is: The channel or conversation where Chat Trigger sends or reads data during Execute.\nWhere to find it: Open the service, choose the channel/conversation, and copy its visible name or ID from details.\nExample: #alerts or C01234567",
              "placeholder": "#support",
              "example": "#support"
            },
            {
              "name": "Allowed Senders",
              "internalKey": "allowedSenders",
              "type": "json",
              "required": false,
              "description": "Optional allowlist of senders/usernames/IDs",
              "helpText": "What this field is: Optional allowlist of senders/usernames/IDs for Chat Trigger / Execute.\nHow to fill it: Enter valid JSON in the format Chat Trigger expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.allowedSenders}} or pick the value from the data picker.",
              "placeholder": "[\"user1\",\"user2\"]",
              "example": "[\"user1\",\"user2\"]"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Incoming chat message",
              "helpText": "What this field is: Incoming chat message for Chat Trigger / Execute.\nHow to fill it: Type the message, prompt, or content you want Chat Trigger to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            }
          ],
          "outputExample": {
            "message": "What is the status of order #1234?",
            "sessionId": "sess_xyz",
            "userId": "user_42",
            "timestamp": "2025-01-15T11:00:00.000Z"
          },
          "outputDescription": "message: The text typed by the user. sessionId: The current chat session ID. userId: The user who sent the message. timestamp: When the message was sent.",
          "usageExample": {
            "scenario": "Build a customer support chatbot that answers order status queries",
            "inputValues": {},
            "expectedOutput": "Use `{{$json.message}}` in a downstream AI Agent or HTTP Request node to process the user's question."
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
