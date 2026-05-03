import type { NodeDoc } from '../types';

export const twilioDoc: NodeDoc = {
  "slug": "twilio",
  "displayName": "Twilio",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twilio.svg",
  "description": "Send SMS/Voice via Twilio Use this node when a workflow needs twilio behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Twilio Token",
  "credentialSetupSteps": [
    "Open the Twilio developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Twilio Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Twilio is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Twilio node using the configured input fields.",
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
              "type": "string",
              "required": true,
              "description": "SMS message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "From",
              "internalKey": "from",
              "type": "string",
              "required": false,
              "description": "Sender phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Account Sid",
              "internalKey": "accountSid",
              "type": "string",
              "required": false,
              "description": "Twilio Account SID (optional if stored in Twilio vault credential JSON)",
              "example": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            },
            {
              "name": "Auth Token",
              "internalKey": "authToken",
              "type": "password",
              "required": false,
              "description": "Twilio Auth Token (optional if provided via vault)",
              "example": "{{ $json.authToken }}",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twilio node.\nconvertible: Value returned by the Twilio node.\ndefaultValue: Value returned by the Twilio node.",
          "usageExample": {
            "scenario": "Use Twilio in a workflow and pass upstream data into configure.",
            "inputValues": {
              "To": "+1234567890",
              "Message": "{{$json.message}}",
              "From": "+1234567890",
              "Account Sid": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Auth Token": "{{ $json.authToken }}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
