import type { NodeDoc } from '../types';

export const mailgunDoc: NodeDoc = {
  "slug": "mailgun",
  "displayName": "Mailgun",
  "category": "Communication",
  "logoUrl": "/icons/nodes/mailgun.svg",
  "description": "Send transactional emails using the Mailgun API.",
  "credentialType": "Mailgun API Key",
  "credentialSetupSteps": [
    "Log in to https://app.mailgun.com → Settings → API Keys.",
    "Copy the Private API Key.",
    "In CtrlChecks, open Connections → Add Connection → Mailgun → paste the API Key and enter your domain → Save."
  ],
  "credentialDocsUrl": "https://documentation.mailgun.com/en/latest/api_reference.html",
  "resources": [
    {
      "name": "Configuration",
      "description": "Mailgun is configured directly with input fields.",
      "operations": [
        {
          "name": "Send email",
          "value": "send_email",
          "description": "Send a transactional email via Mailgun.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": true,
              "description": "Mailgun sending domain",
              "example": "mg.yourdomain.com",
              "placeholder": "mg.yourdomain.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Mailgun Private API Key",
              "example": "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": true,
              "description": "Sender email address (must be from your verified Mailgun domain)",
              "example": "noreply@mg.yourdomain.com",
              "placeholder": "noreply@mg.yourdomain.com"
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
            "id": "<20250115.abc123@mg.example.com>",
            "message": "Queued. Thank you."
          },
          "outputDescription": "id: Mailgun message ID for tracking. message: Confirmation from Mailgun.",
          "usageExample": {
            "scenario": "Send a password reset email using Mailgun",
            "inputValues": {
              "from": "noreply@yourapp.com",
              "to": "{{$json.email}}",
              "subject": "Reset your password",
              "html": "<p>Click <a href=\"{{$json.resetUrl}}\">here</a> to reset your password. Link expires in 1 hour.</p>"
            },
            "expectedOutput": "Email is queued by Mailgun. Track delivery in the Mailgun logs using `{{$json.id}}`."
          },
          "externalDocsUrl": "https://documentation.mailgun.com/docs/mailgun/api-reference/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Mailgun node."
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
