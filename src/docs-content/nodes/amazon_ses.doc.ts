import type { NodeDoc } from '../types';

export const amazonSesDoc: NodeDoc = {
  "slug": "amazon_ses",
  "displayName": "Amazon SES",
  "category": "Communication",
  "logoUrl": "/icons/nodes/amazon_ses.svg",
  "description": "Send emails through Amazon Simple Email Service (SES)",
  "credentialType": "AWS Credential",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html",
  "resources": [
    {
      "name": "Configuration",
      "description": "Amazon SES is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send an email via Amazon Simple Email Service (SES).",
          "fields": [
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": true,
              "description": "Email recipients (To, Cc, Bcc)",
              "example": "{\"to\":[\"user@example.com\"]}",
              "placeholder": "{\"to\":[\"user@example.com\"]}"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject line",
              "example": "Order Confirmation",
              "placeholder": "Order Confirmation"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (HTML or plain text)",
              "example": "Hello {{$json.name}}, your order is confirmed.",
              "placeholder": "Hello {{$json.name}}, your order is confirmed."
            },
            {
              "name": "Use Template",
              "internalKey": "useTemplate",
              "type": "textarea",
              "description": "Use AWS SES template instead of raw email",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "required": false,
              "description": "AWS SES template name (required if useTemplate is true)",
              "example": "OrderConfirmation",
              "placeholder": "OrderConfirmation",
              "notes": "Required when useTemplate is \"true\"."
            },
            {
              "name": "Template Data",
              "internalKey": "templateData",
              "type": "textarea",
              "description": "Template variables as JSON object",
              "example": "{\"name\":\"John\",\"orderId\":\"12345\"}",
              "placeholder": "{\"name\":\"John\",\"orderId\":\"12345\"}"
            },
            {
              "name": "From Address",
              "internalKey": "fromAddress",
              "type": "string",
              "description": "Sender email address (must be verified in SES)",
              "example": "noreply@example.com",
              "placeholder": "noreply@example.com"
            },
            {
              "name": "Reply To Addresses",
              "internalKey": "replyToAddresses",
              "type": "json",
              "description": "Reply-to email addresses",
              "example": "[\"support@example.com\"]",
              "placeholder": "[\"support@example.com\"]"
            },
            {
              "name": "Attachments",
              "internalKey": "attachments",
              "type": "json",
              "description": "Email attachments",
              "example": "[{\"filename\":\"report.pdf\",\"content\":\"{{$json.pdfContent}}\",\"contentType\":\"application/pdf\"}]",
              "placeholder": "[{\"filename\":\"report.pdf\",\"content\":\"{{$json.pdfContent}}\",\"contentType\":\"application/pdf\"}]"
            },
            {
              "name": "Aws Region",
              "internalKey": "awsRegion",
              "type": "string",
              "description": "AWS region for SES service",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Configuration Set Name",
              "internalKey": "configurationSetName",
              "type": "string",
              "description": "SES configuration set for tracking",
              "example": "my-config-set",
              "placeholder": "my-config-set"
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "json",
              "description": "Email tags for tracking and filtering",
              "example": "{\"campaign\":\"newsletter\",\"type\":\"promotional\"}",
              "placeholder": "{\"campaign\":\"newsletter\",\"type\":\"promotional\"}"
            },
            {
              "name": "Return Path",
              "internalKey": "returnPath",
              "type": "string",
              "description": "Bounce handling email address",
              "example": "bounces@example.com",
              "placeholder": "bounces@example.com"
            }
          ],
          "outputExample": {
            "MessageId": "0102018e2b3c7abc-def1234-...",
            "ResponseMetadata": {
              "RequestId": "abc-123",
              "HTTPStatusCode": 200
            }
          },
          "outputDescription": "MessageId: The SES message ID for tracking. ResponseMetadata.HTTPStatusCode: 200 means success.",
          "usageExample": {
            "scenario": "Send bulk email notifications to a list of subscribers",
            "inputValues": {
              "to": "{{$json.email}}",
              "from": "notifications@yourapp.com",
              "subject": "{{$json.subject}}",
              "body": "{{$json.bodyText}}"
            },
            "expectedOutput": "Email is sent via SES. Use `{{$json.MessageId}}` to track in the SES console."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Amazon SES node."
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
