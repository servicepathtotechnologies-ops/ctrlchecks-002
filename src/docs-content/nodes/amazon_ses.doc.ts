import type { NodeDoc } from '../types';

export const amazonSesDoc: NodeDoc = {
  "slug": "amazon_ses",
  "displayName": "Amazon SES",
  "category": "Communication",
  "logoUrl": "/icons/nodes/amazon_ses.svg",
  "description": "Send emails through Amazon Simple Email Service (SES)",
  "credentialType": "AWS Credential",
  "credentialSetupSteps": [
    "What this is: AWS uses an OAuth connection so CtrlChecks can safely access your AWS account.",
    "Go to aws.amazon.com and sign in -> open IAM (Identity and Access Management).",
    "Click Users -> Create user. Give it a name (e.g. ctrlchecks-s3) and click Next.",
    "Under \"Permissions options\", click \"Attach policies directly\" -> search for \"AmazonS3FullAccess\" -> select it -> Next -> Create user.",
    "Click the new user -> Security credentials tab -> Access keys -> Create access key -> Application running outside AWS.",
    "Copy the Access Key ID and Secret Access Key. Also note your AWS region (e.g. us-east-1) and your S3 bucket name.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> AWS S3 -> enter Access Key ID, Secret Access Key, and Region -> Save.",
    "Run a test step (e.g. upload a small test file) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the AWS node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html",
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
              "helpText": "What this field is: The email address that Amazon SES should use for recipients.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "{\"to\":[\"user@example.com\"]}",
              "example": "{\"to\":[\"user@example.com\"]}"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Email subject line",
              "helpText": "What this field is: Email subject line for Amazon SES / Execute.\nHow to fill it: Enter the subject value requested by Amazon SES, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Order Confirmation",
              "example": "Order Confirmation"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Email body content (HTML or plain text)",
              "helpText": "What this field is: Email body content (HTML or plain text) for Amazon SES / Execute.\nHow to fill it: Type the message, prompt, or content you want Amazon SES to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}, your order is confirmed.",
              "example": "Hello {{$json.name}}, your order is confirmed."
            },
            {
              "name": "Use Template",
              "internalKey": "useTemplate",
              "type": "textarea",
              "required": false,
              "description": "Use AWS SES template instead of raw email",
              "helpText": "What this field is: Use AWS SES template instead of raw email for Amazon SES / Execute.\nHow to fill it: Type the message, prompt, or content you want Amazon SES to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "required": true,
              "description": "AWS SES template name (required if useTemplate is true)",
              "helpText": "What this field is: AWS SES template name (required if useTemplate is true) for Amazon SES / Execute.\nHow to fill it: Type the message, prompt, or content you want Amazon SES to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "OrderConfirmation",
              "example": "OrderConfirmation"
            },
            {
              "name": "Template Data",
              "internalKey": "templateData",
              "type": "textarea",
              "required": false,
              "description": "Template variables as JSON object",
              "helpText": "What this field is: Template variables as JSON object for Amazon SES / Execute.\nHow to fill it: Type the message, prompt, or content you want Amazon SES to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"John\",\"orderId\":\"12345\"}",
              "example": "{\"name\":\"John\",\"orderId\":\"12345\"}"
            },
            {
              "name": "From Address",
              "internalKey": "fromAddress",
              "type": "string",
              "required": false,
              "description": "Sender email address (must be verified in SES)",
              "helpText": "What this field is: Sender email address (must be verified in SES) for Amazon SES / Execute.\nHow to fill it: Enter the from address value requested by Amazon SES, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.fromAddress}} or pick the value from the data picker.",
              "placeholder": "noreply@example.com",
              "example": "noreply@example.com"
            },
            {
              "name": "Reply To Addresses",
              "internalKey": "replyToAddresses",
              "type": "json",
              "required": false,
              "description": "Reply-to email addresses",
              "helpText": "What this field is: Reply-to email addresses for Amazon SES / Execute.\nHow to fill it: Enter valid JSON in the format Amazon SES expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.replyToAddresses}} or pick the value from the data picker.",
              "placeholder": "[\"support@example.com\"]",
              "example": "[\"support@example.com\"]"
            },
            {
              "name": "Attachments",
              "internalKey": "attachments",
              "type": "json",
              "required": false,
              "description": "Email attachments",
              "helpText": "What this field is: Email attachments for Amazon SES / Execute.\nHow to fill it: Enter valid JSON in the format Amazon SES expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.attachments}} or pick the value from the data picker.",
              "placeholder": "[{\"filename\":\"report.pdf\",\"content\":\"{{$json.pdfContent}}\",\"contentType\":\"application/pdf\"}]",
              "example": "[{\"filename\":\"report.pdf\",\"content\":\"{{$json.pdfContent}}\",\"contentType\":\"application/pdf\"}]"
            },
            {
              "name": "Aws Region",
              "internalKey": "awsRegion",
              "type": "string",
              "required": false,
              "description": "AWS region for SES service",
              "helpText": "What this field is: AWS region for SES service for Amazon SES / Execute.\nHow to fill it: Enter the aws region value requested by Amazon SES, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.awsRegion}} or pick the value from the data picker.",
              "placeholder": "us-east-1",
              "example": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Configuration Set Name",
              "internalKey": "configurationSetName",
              "type": "string",
              "required": false,
              "description": "SES configuration set for tracking",
              "helpText": "What this field is: SES configuration set for tracking for Amazon SES / Execute.\nHow to fill it: Enter the configuration set name value requested by Amazon SES, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.configurationSetName}} or pick the value from the data picker.",
              "placeholder": "my-config-set",
              "example": "my-config-set"
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "json",
              "required": false,
              "description": "Email tags for tracking and filtering",
              "helpText": "What this field is: Email tags for tracking and filtering for Amazon SES / Execute.\nHow to fill it: Enter valid JSON in the format Amazon SES expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.tags}} or pick the value from the data picker.",
              "placeholder": "{\"campaign\":\"newsletter\",\"type\":\"promotional\"}",
              "example": "{\"campaign\":\"newsletter\",\"type\":\"promotional\"}"
            },
            {
              "name": "Return Path",
              "internalKey": "returnPath",
              "type": "string",
              "required": false,
              "description": "Bounce handling email address",
              "helpText": "What this field is: Bounce handling email address for Amazon SES / Execute.\nHow to fill it: Enter the return path value requested by Amazon SES, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.returnPath}} or pick the value from the data picker.",
              "placeholder": "bounces@example.com",
              "example": "bounces@example.com"
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
