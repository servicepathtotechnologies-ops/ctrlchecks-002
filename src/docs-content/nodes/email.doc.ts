import type { NodeDoc } from '../types';

export const emailDoc: NodeDoc = {
  "slug": "email",
  "displayName": "Email",
  "category": "Communication",
  "logoUrl": "/icons/nodes/email.svg",
  "description": "Send emails via SMTP",
  "credentialType": "SMTP Credential",
  "credentialSetupSteps": [
    "Obtain SMTP server details from your email provider: Host, Port (e.g. 587), Username, and Password.",
    "For Gmail SMTP: Host = smtp.gmail.com, Port = 587. Use an App Password (not your main password) — generate one at myaccount.google.com/apppasswords.",
    "In CtrlChecks, open Connections → Add Connection → Email (SMTP) → enter Host, Port, Username, and Password → Save."
  ],
  "credentialDocsUrl": "https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol",
  "resources": [
    {
      "name": "Configuration",
      "description": "Email is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send an email via SMTP using custom server credentials.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient email address"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Email body (text)"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "description": "Email body (HTML)"
            }
          ],
          "outputExample": {
            "accepted": [
              "recipient@example.com"
            ],
            "rejected": [],
            "response": "250 Message queued",
            "messageId": "<abc@smtp.example.com>"
          },
          "outputDescription": "accepted: List of email addresses that accepted the message. rejected: Addresses rejected by the server. response: SMTP server response. messageId: The SMTP message ID.",
          "usageExample": {
            "scenario": "Send transactional emails via your own SMTP server (e.g. a company mail relay)",
            "inputValues": {
              "to": "{{$json.email}}",
              "subject": "Password Reset",
              "html": "<p>Click <a href=\"{{$json.resetLink}}\">here</a> to reset your password.</p>"
            },
            "expectedOutput": "Email is delivered. Check `accepted` to confirm delivery was accepted by the server."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Email node."
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
