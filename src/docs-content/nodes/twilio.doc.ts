import type { NodeDoc } from '../types';

export const twilioDoc: NodeDoc = {
  "slug": "twilio",
  "displayName": "Twilio",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twilio.svg",
  "description": "Send SMS/Voice via Twilio",
  "credentialType": "Twilio Credential",
  "credentialSetupSteps": [
    "What this is: Twilio uses an OAuth connection so CtrlChecks can safely access your Twilio account.",
    "Go to console.twilio.com and sign in (or create a free trial account - you get free credits to start).",
    "On the main dashboard, you will see \"Account Info\". Copy the Account SID (starts with AC) and Auth Token. Click \"Show\" next to the Auth Token to reveal it.",
    "For your \"From\" phone number (the number SMS will be sent from): go to Phone Numbers -> Manage -> Active Numbers. Copy one of your Twilio numbers.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Twilio -> enter Account SID and Auth Token -> Save.",
    "Run a test step to send an SMS to your own phone number to confirm it works.",
    "Note: Twilio free trial accounts can only send to verified numbers. To send to any number, upgrade your Twilio account.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Twilio node and select the saved connection."
  ],
  "credentialDocsUrl": "https://www.twilio.com/docs/usage/api",
  "resources": [
    {
      "name": "Configuration",
      "description": "Twilio is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send an SMS message via Twilio.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The phone number of the person who will receive the SMS.\nFormat: E.164 international format — + sign, then country code, then the number. No spaces, dashes, or brackets.\nExamples:\n  +14155552671  →  USA\n  +919876543210 →  India\n  +447911123456 →  UK\nTip: Use {{$json.phone}} if the number comes from a form or database in an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "SMS message text",
              "helpText": "What this field is: SMS message text for Twilio / Execute.\nHow to fill it: Type the message, prompt, or content you want Twilio to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender phone number",
              "helpText": "What this field is: Your Twilio phone number — the number the SMS will be sent FROM.\nWhere to find it: Log in to console.twilio.com → Phone Numbers → Manage → Active Numbers. Copy one of your Twilio numbers.\nExample: +15005550006\nNote: This must be a number you own in Twilio — you cannot use a personal number here.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
            },
            {
              "name": "Account Sid",
              "internalKey": "accountSid",
              "type": "string",
              "required": false,
              "description": "Twilio Account SID (optional if stored in Twilio vault credential JSON)",
              "helpText": "What this field is: Your Twilio Account SID — a unique identifier for your Twilio account.\nWhere to find it: Log in to console.twilio.com → the Dashboard shows Account SID right at the top. It starts with AC.\nExample: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nNote: The Account SID is not secret — it is safe to store in config. But the Auth Token is secret.",
              "placeholder": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "example": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            },
            {
              "name": "Auth Token",
              "internalKey": "authToken",
              "type": "string",
              "required": false,
              "description": "Twilio Auth Token (optional if provided via vault)",
              "helpText": "What this field is: Your Twilio Auth Token — the password for your Twilio account.\nWhere to find it: console.twilio.com → Dashboard → click \"Show\" next to Auth Token.\nKeep this private — do not share it or commit it to code.\nExample: your32characterauthtokenhere1234",
              "placeholder": "token_..."
            }
          ],
          "outputExample": {
            "sid": "SM1234abcd5678efgh",
            "status": "queued",
            "to": "+15551234567",
            "from": "+15559876543",
            "body": "Your verification code is 4821."
          },
          "outputDescription": "sid: Twilio message SID for tracking. status: Message delivery status (queued, sent, delivered, failed). to / from: Recipient and sender phone numbers.",
          "usageExample": {
            "scenario": "Send a 2FA SMS verification code to a user who is logging in",
            "inputValues": {
              "to": "{{$json.phoneNumber}}",
              "body": "Your CtrlChecks verification code is {{$json.otpCode}}. Expires in 10 minutes."
            },
            "expectedOutput": "SMS is queued. Use `{{$json.sid}}` to check delivery status via the Twilio console."
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
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Twilio node."
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
