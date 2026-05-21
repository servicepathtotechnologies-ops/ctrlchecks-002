import type { NodeDoc } from '../types';

export const emailDoc: NodeDoc = {
  "slug": "email",
  "displayName": "Email",
  "category": "Communication",
  "logoUrl": "/icons/nodes/email.svg",
  "description": "Send emails via SMTP",
  "credentialType": "SMTP Credential",
  "credentialSetupSteps": [
    "What this is: SMTP uses an OAuth connection so CtrlChecks can safely access your SMTP account.",
    "You need your email provider's SMTP server details: Host, Port, Username, and Password.",
    "Common SMTP hosts: Gmail = smtp.gmail.com (port 587), Outlook/Office 365 = smtp.office365.com (port 587), Yahoo = smtp.mail.yahoo.com (port 587).",
    "For Gmail: do NOT use your normal Google password. Instead, create an App Password at myaccount.google.com/apppasswords -> select \"Mail\" and your device -> Generate. Copy the 16-character code.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Email (SMTP) -> enter Host (smtp.gmail.com), Port (587), Username (your full email), and Password (the App Password) -> Save.",
    "Run a test step to send an email to yourself to confirm it works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the SMTP node and select the saved connection."
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
              "description": "Recipient email address",
              "helpText": "What this field is: The email address that Email should use for to.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject",
              "helpText": "What this field is: Email subject for Email / Execute.\nHow to fill it: Enter the subject value requested by Email, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Email body (text)",
              "helpText": "What this field is: Email body (text) for Email / Execute.\nHow to fill it: Type the message, prompt, or content you want Email to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": false,
              "description": "Email body (HTML)",
              "helpText": "What this field is: Email body (HTML) for Email / Execute.\nHow to fill it: Type the message, prompt, or content you want Email to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Html"
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
