import type { NodeDoc } from '../types';

export const amazonSesDoc: NodeDoc = {
  "slug": "amazon_ses",
  "displayName": "Amazon SES",
  "category": "Communication",
  "logoUrl": "/icons/nodes/amazon_ses.svg",
  "description": "Send emails through Amazon Simple Email Service (SES) Use this node when a workflow needs amazon ses behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Amazon SES is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Amazon SES node using the configured input fields.",
          "fields": [
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": true,
              "description": "Email recipients (To, Cc, Bcc)",
              "example": "[object Object]",
              "placeholder": "[object Object]"
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
              "type": "string",
              "required": true,
              "description": "Email body content (HTML or plain text)",
              "example": "Hello {{$json.name}}, your order is confirmed.",
              "placeholder": "Hello {{$json.name}}, your order is confirmed."
            },
            {
              "name": "Use Template",
              "internalKey": "useTemplate",
              "type": "boolean",
              "required": false,
              "description": "Use AWS SES template instead of raw email",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "AWS SES template name (required if useTemplate is true)",
              "example": "OrderConfirmation",
              "placeholder": "OrderConfirmation"
            },
            {
              "name": "Template Data",
              "internalKey": "templateData",
              "type": "json",
              "required": false,
              "description": "Template variables as JSON object",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "From Address",
              "internalKey": "fromAddress",
              "type": "string",
              "required": false,
              "description": "Sender email address (must be verified in SES)",
              "example": "noreply@example.com",
              "placeholder": "noreply@example.com"
            },
            {
              "name": "Reply To Addresses",
              "internalKey": "replyToAddresses",
              "type": "json",
              "required": false,
              "description": "Reply-to email addresses",
              "example": "support@example.com",
              "placeholder": "support@example.com"
            },
            {
              "name": "Attachments",
              "internalKey": "attachments",
              "type": "json",
              "required": false,
              "description": "Email attachments",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Aws Region",
              "internalKey": "awsRegion",
              "type": "string",
              "required": false,
              "description": "AWS region for SES service",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Configuration Set Name",
              "internalKey": "configurationSetName",
              "type": "string",
              "required": false,
              "description": "SES configuration set for tracking",
              "example": "my-config-set",
              "placeholder": "my-config-set"
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "json",
              "required": false,
              "description": "Email tags for tracking and filtering",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            },
            {
              "name": "Return Path",
              "internalKey": "returnPath",
              "type": "string",
              "required": false,
              "description": "Bounce handling email address",
              "example": "bounces@example.com",
              "placeholder": "bounces@example.com"
            }
          ],
          "outputExample": {
            "success": true,
            "messageId": "messageId",
            "recipientCount": 1,
            "failedRecipients": [],
            "error": "error",
            "timestamp": "timestamp"
          },
          "outputDescription": "success: Value returned by the Amazon SES node.\nmessageId: Value returned by the Amazon SES node.\nrecipientCount: Value returned by the Amazon SES node.\nfailedRecipients: Value returned by the Amazon SES node.\nerror: Value returned by the Amazon SES node.\ntimestamp: Value returned by the Amazon SES node.",
          "usageExample": {
            "scenario": "Use Amazon SES in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Recipients": "[object Object]",
              "Subject": "Order Confirmation",
              "Body": "Hello {{$json.name}}, your order is confirmed.",
              "Use Template": "false",
              "Template Name": "OrderConfirmation",
              "Template Data": "[object Object]",
              "From Address": "noreply@example.com",
              "Reply To Addresses": "support@example.com",
              "Attachments": "[object Object]",
              "Aws Region": "us-east-1"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html"
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
    "email",
    "log_output"
  ]
};
