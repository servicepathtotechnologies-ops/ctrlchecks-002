import type { NodeDoc } from '../types';

export const sendgridDoc: NodeDoc = {
  "slug": "sendgrid",
  "displayName": "SendGrid",
  "category": "Communication",
  "logoUrl": "/icons/nodes/sendgrid.svg",
  "description": "Send transactional emails using the SendGrid API. Use this node when a workflow needs sendgrid behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Sendgrid Credential",
  "credentialSetupSteps": [
    "Open the SendGrid developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Sendgrid Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.twilio.com/docs/sendgrid/api-reference",
  "resources": [
    {
      "name": "Operations",
      "description": "SendGrid exposes operation choices directly.",
      "operations": [
        {
          "name": "Send Email",
          "value": "send_email",
          "description": "Send Email with the SendGrid node using the configured input fields.",
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
            "status": 1,
            "error": {}
          },
          "outputDescription": "success: Value returned by the SendGrid node.\nmessageId: Value returned by the SendGrid node.\nstatus: Value returned by the SendGrid node.\nerror: Value returned by the SendGrid node.",
          "usageExample": {
            "scenario": "Use SendGrid in a workflow and pass upstream data into send email.",
            "inputValues": {
              "Api Key": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "From": "noreply@yourdomain.com",
              "To": "user@example.com",
              "Subject": "Hello!",
              "Text": "Your message here",
              "Html": "<p>Your message</p>"
            },
            "expectedOutput": "The node runs send email and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.twilio.com/docs/sendgrid/api-reference"
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
