import type { NodeDoc } from '../types';

export const emailDoc: NodeDoc = {
  "slug": "email",
  "displayName": "Email",
  "category": "Communication",
  "logoUrl": "/icons/nodes/email.svg",
  "description": "Send emails via SMTP Use this node when a workflow needs email behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Email is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Email node using the configured input fields.",
          "fields": [
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient email address",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": true,
              "description": "Email body (text)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Html",
              "internalKey": "html",
              "type": "string",
              "required": false,
              "description": "Email body (HTML)",
              "example": "{{ $json.html }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Email node.\nconvertible: Value returned by the Email node.\ndefaultValue: Value returned by the Email node.",
          "usageExample": {
            "scenario": "Use Email in a workflow and pass upstream data into configure.",
            "inputValues": {
              "To": "{{ $json.to }}",
              "Subject": "{{ $json.subject }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Html": "{{ $json.html }}"
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
    "log_output",
    "telegram"
  ]
};
