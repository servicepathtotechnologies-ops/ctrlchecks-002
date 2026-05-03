import type { NodeDoc } from '../types';

export const mailgunDoc: NodeDoc = {
  "slug": "mailgun",
  "displayName": "Mailgun",
  "category": "Communication",
  "logoUrl": "/icons/nodes/mailgun.svg",
  "description": "Send transactional emails using the Mailgun API. Use this node when a workflow needs mailgun behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Mailgun Credential",
  "credentialSetupSteps": [
    "Open the Mailgun developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Mailgun Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://documentation.mailgun.com/docs/mailgun/api-reference/overview",
  "resources": [
    {
      "name": "Operations",
      "description": "Mailgun exposes operation choices directly.",
      "operations": [
        {
          "name": "Send Email",
          "value": "send_email",
          "description": "Send Email with the Mailgun node using the configured input fields.",
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
              "required": false,
              "description": "Email subject line",
              "example": "Hello!",
              "placeholder": "Hello!"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Plain text body of the email",
              "example": "Your message here",
              "placeholder": "Your message here"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "string",
              "required": false,
              "description": "HTML body of the email (overrides plain text for HTML clients)",
              "example": "<p>Your message</p>",
              "placeholder": "<p>Your message</p>"
            }
          ],
          "outputExample": {
            "success": true,
            "messageId": "messageId",
            "message": "message",
            "error": {}
          },
          "outputDescription": "success: Value returned by the Mailgun node.\nmessageId: Value returned by the Mailgun node.\nmessage: Value returned by the Mailgun node.\nerror: Value returned by the Mailgun node.",
          "usageExample": {
            "scenario": "Use Mailgun in a workflow and pass upstream data into send email.",
            "inputValues": {
              "Domain": "mg.yourdomain.com",
              "Api Key": "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "From": "noreply@mg.yourdomain.com",
              "To": "user@example.com",
              "Subject": "Hello!",
              "Text": "Your message here",
              "Html": "<p>Your message</p>"
            },
            "expectedOutput": "The node runs send email and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://documentation.mailgun.com/docs/mailgun/api-reference/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
