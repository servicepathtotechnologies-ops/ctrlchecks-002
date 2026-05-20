import type { NodeDoc } from '../types';

export const sendgridDoc: NodeDoc = {
  "slug": "sendgrid",
  "displayName": "SendGrid",
  "category": "Communication",
  "logoUrl": "/icons/nodes/sendgrid.svg",
  "description": "Send transactional emails using the SendGrid API.",
  "credentialType": "SendGrid API Key",
  "credentialSetupSteps": [
    "Log in to https://app.sendgrid.com → Settings → API Keys → Create API Key.",
    "Select \"Restricted Access\" and enable Mail Send permission.",
    "Copy the API key.",
    "In CtrlChecks, open Connections → Add Connection → SendGrid → paste the API key → Save."
  ],
  "credentialDocsUrl": "https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication",
  "resources": [
    {
      "name": "Configuration",
      "description": "SendGrid is configured directly with input fields.",
      "operations": [
        {
          "name": "Send email",
          "value": "send_email",
          "description": "Send a transactional or marketing email via SendGrid.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "SendGrid API Key (must have Mail Send permission)",
              "example": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": true,
              "description": "Sender email address (must be a verified sender in SendGrid)",
              "example": "noreply@yourdomain.com",
              "placeholder": "noreply@yourdomain.com"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient email address(es), comma-separated",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "description": "Email subject line",
              "example": "Hello!",
              "placeholder": "Hello!"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Plain text body of the email",
              "example": "Your message here",
              "placeholder": "Your message here"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "description": "HTML body of the email (overrides plain text for HTML clients)",
              "example": "<p>Your message</p>",
              "placeholder": "<p>Your message</p>"
            }
          ],
          "outputExample": {
            "statusCode": 202,
            "body": "",
            "headers": {
              "x-message-id": "ABC123"
            }
          },
          "outputDescription": "statusCode: HTTP 202 means the message was accepted. headers[x-message-id]: SendGrid message ID for tracking in the SendGrid Activity Feed.",
          "usageExample": {
            "scenario": "Send a receipt email after a successful payment",
            "inputValues": {
              "to": "{{$json.customerEmail}}",
              "from": "receipts@yourapp.com",
              "subject": "Your receipt for order #{{$json.orderId}}",
              "html": "<h1>Thank you!</h1><p>You paid ${{$json.amount}} on {{$json.date}}.</p>"
            },
            "expectedOutput": "Email is accepted by SendGrid for delivery. Track via the x-message-id in the SendGrid Activity Feed."
          },
          "externalDocsUrl": "https://www.twilio.com/docs/sendgrid/api-reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the SendGrid node."
    },
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
