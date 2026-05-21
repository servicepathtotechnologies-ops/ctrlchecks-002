import type { NodeDoc } from '../types';

export const mailgunDoc: NodeDoc = {
  "slug": "mailgun",
  "displayName": "Mailgun",
  "category": "Communication",
  "logoUrl": "/icons/nodes/mailgun.svg",
  "description": "Send transactional emails using the Mailgun API.",
  "credentialType": "Mailgun API Key",
  "credentialSetupSteps": [
    "What this is: Mailgun uses an API key or account connection so CtrlChecks can safely access your Mailgun account.",
    "Go to mailgun.com and sign in to your account.",
    "Go to Sending -> Domains. If you do not have a domain yet, click \"Add New Domain\" and follow the DNS setup instructions (takes a few minutes to verify).",
    "Go to Settings -> API Keys -> click \"Create API Key\" (or \"Add new key\"). Give it a name and copy the Private API Key - it starts with key-.",
    "Note your verified sending domain (e.g. mg.yourcompany.com) - you will need this in the node.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Mailgun -> paste the key- API key -> Save.",
    "When using the node, set the Domain field to your verified domain and the From field to an address on that domain (e.g. hello@mg.yourcompany.com).",
    "Run a test to send an email to yourself to confirm it works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Mailgun node and select the saved connection."
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
              "helpText": "What this field is: Your verified Mailgun sending domain — the domain name you have set up and verified with Mailgun.\nWhere to find it: Log in to mailgun.com → Sending → Domains. Copy the domain name shown there.\nExample: mg.yourcompany.com\nNote: This is NOT your full email address — just the domain part. You must complete DNS verification for this domain before emails will send.",
              "placeholder": "mg.yourdomain.com",
              "example": "mg.yourdomain.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Mailgun Private API Key",
              "helpText": "What this field is: Your Mailgun API Key that gives CtrlChecks permission to send emails.\nWhere to find it: mailgun.com → Settings → API Keys → Private API Key.\nIt starts with key- and is a long string of letters and numbers.\nKeep it secret — do not share or publish it.",
              "placeholder": "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": true,
              "description": "Sender email address (must be from your verified Mailgun domain)",
              "helpText": "What this field is: The email address that will appear as the sender.\nImportant: Must use your verified Mailgun domain.\nExample: noreply@mg.yourcompany.com or support@mg.yourcompany.com",
              "placeholder": "noreply@mg.yourdomain.com",
              "example": "noreply@mg.yourdomain.com"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient email address(es), comma-separated",
              "helpText": "What this field is: The recipient's email address.\nExample: customer@example.com\nTip: Use {{$json.email}} from a form or database step.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject line",
              "helpText": "What this field is: The email subject line.\nExample: Your account has been activated — welcome to {{$json.companyName}}!",
              "placeholder": "Hello!",
              "example": "Hello!"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Plain text body of the email",
              "helpText": "What this field is: Plain text body of the email for Mailgun / Send email.\nHow to fill it: Type the message, prompt, or content you want Mailgun to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Your message here",
              "example": "Your message here"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": false,
              "description": "HTML body of the email (overrides plain text for HTML clients)",
              "helpText": "What this field is: HTML body of the email (overrides plain text for HTML clients) for Mailgun / Send email.\nHow to fill it: Type the message, prompt, or content you want Mailgun to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "<p>Your message</p>",
              "example": "<p>Your message</p>"
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
