import type { NodeDoc } from '../types';

export const formDoc: NodeDoc = {
  "slug": "form",
  "displayName": "Form Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/form.svg",
  "description": "Trigger workflow when user submits a form Use this node when a workflow needs form trigger behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Form Trigger is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Form Trigger node using the configured input fields.",
          "fields": [
            {
              "name": "Form Title",
              "internalKey": "formTitle",
              "type": "string",
              "required": true,
              "description": "Title of the form",
              "example": "Contact Us Form",
              "placeholder": "Contact Us Form",
              "defaultValue": "Form Submission"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": true,
              "description": "Form fields configuration",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Form Description",
              "internalKey": "formDescription",
              "type": "string",
              "required": false,
              "description": "Description shown on the form",
              "example": "{{ $json.formDescription }}",
              "defaultValue": ""
            },
            {
              "name": "Submit Button Text",
              "internalKey": "submitButtonText",
              "type": "string",
              "required": false,
              "description": "Text on submit button",
              "example": "Submit",
              "defaultValue": "Submit"
            },
            {
              "name": "Success Message",
              "internalKey": "successMessage",
              "type": "string",
              "required": false,
              "description": "Message shown after successful submission",
              "example": "Thank you for your submission!",
              "defaultValue": "Thank you for your submission!"
            },
            {
              "name": "Allow Multiple Submissions",
              "internalKey": "allowMultipleSubmissions",
              "type": "boolean",
              "required": false,
              "description": "Allow same user to submit multiple times",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Require Authentication",
              "internalKey": "requireAuthentication",
              "type": "boolean",
              "required": false,
              "description": "Require user authentication",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Captcha",
              "internalKey": "captcha",
              "type": "boolean",
              "required": false,
              "description": "Enable CAPTCHA verification",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure"
          },
          "outputDescription": "type: Value returned by the Form Trigger node.\nstructure: Value returned by the Form Trigger node.",
          "usageExample": {
            "scenario": "Use Form Trigger in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Form Title": "Contact Us Form",
              "Fields": "[]",
              "Form Description": "{{ $json.formDescription }}",
              "Submit Button Text": "Submit",
              "Success Message": "Thank you for your submission!",
              "Allow Multiple Submissions": "true",
              "Require Authentication": "false",
              "Captcha": "false"
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
    "schedule",
    "webhook",
    "manual_trigger",
    "interval",
    "chat_trigger"
  ]
};
