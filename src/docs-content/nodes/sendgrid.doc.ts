import type { NodeDoc } from '../types';

export const sendgridDoc: NodeDoc = {
  "slug": "sendgrid",
  "displayName": "SendGrid",
  "category": "Communication",
  "logoUrl": "/icons/nodes/sendgrid.svg",
  "description": "Send transactional emails using the SendGrid API.",
  "credentialType": "SendGrid API Key",
  "credentialSetupSteps": [
    "What this is: SendGrid uses an API key or account connection so CtrlChecks can safely access your SendGrid account.",
    "Go to app.sendgrid.com and sign in to your SendGrid account.",
    "Click Settings in the left sidebar -> API Keys -> Create API Key.",
    "Give it a name (e.g. CtrlChecks) -> choose \"Full Access\" or \"Restricted Access\" with \"Mail Send\" enabled -> Create & View.",
    "Copy the API key - it starts with SG. and is shown only once.",
    "Verify your sender identity: Settings -> Sender Authentication -> verify a single sender email or your entire domain.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> SendGrid -> paste the SG. key -> Save.",
    "Run a test to send an email to yourself to confirm it works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the SendGrid node and select the saved connection."
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
              "helpText": "What this field is: Your SendGrid API Key.\nWhere to find it: app.sendgrid.com → Settings → API Keys → Create API Key. Choose \"Full Access\" or \"Restricted Access\" with \"Mail Send\" enabled.\nIt starts with SG. — copy it immediately, it is only shown once.",
              "placeholder": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": true,
              "description": "Sender email address (must be a verified sender in SendGrid)",
              "helpText": "What this field is: The sender email address — must be verified in your SendGrid account.\nWhere to verify: SendGrid dashboard → Settings → Sender Authentication → verify a single sender or your domain.\nExample: hello@yourcompany.com",
              "placeholder": "noreply@yourdomain.com",
              "example": "noreply@yourdomain.com"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient email address(es), comma-separated",
              "helpText": "What this field is: The recipient's email address.\nExample: customer@example.com\nTip: Use {{$json.email}} from an earlier form or database step.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject line",
              "helpText": "What this field is: The email subject line.\nExample: Welcome to {{$json.productName}} — here's how to get started",
              "placeholder": "Hello!",
              "example": "Hello!"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Plain text body of the email",
              "helpText": "What this field is: Plain text body of the email for SendGrid / Send email.\nHow to fill it: Type the message, prompt, or content you want SendGrid to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Your message here",
              "example": "Your message here"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": false,
              "description": "HTML body of the email (overrides plain text for HTML clients)",
              "helpText": "What this field is: HTML body of the email (overrides plain text for HTML clients) for SendGrid / Send email.\nHow to fill it: Type the message, prompt, or content you want SendGrid to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "<p>Your message</p>",
              "example": "<p>Your message</p>"
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
