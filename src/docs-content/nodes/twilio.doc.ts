import type { NodeDoc } from '../types';

export const twilioDoc: NodeDoc = {
  "slug": "twilio",
  "displayName": "Twilio",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twilio.svg",
  "description": "Send SMS/Voice via Twilio",
  "credentialType": "Twilio Credential",
  "credentialSetupSteps": [
    "Log in to https://console.twilio.com → go to Account Info.",
    "Copy the Account SID and Auth Token.",
    "In CtrlChecks, open Connections → Add Connection → Twilio → paste Account SID and Auth Token → Save."
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
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "SMS message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "description": "Sender phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Account Sid",
              "internalKey": "accountSid",
              "type": "string",
              "description": "Twilio Account SID (optional if stored in Twilio vault credential JSON)",
              "example": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            },
            {
              "name": "Auth Token",
              "internalKey": "authToken",
              "type": "string",
              "description": "Twilio Auth Token (optional if provided via vault)"
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
