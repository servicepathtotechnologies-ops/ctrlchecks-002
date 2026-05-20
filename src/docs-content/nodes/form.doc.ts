import type { NodeDoc } from '../types';

export const formDoc: NodeDoc = {
  "slug": "form",
  "displayName": "Form Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/form.svg",
  "description": "Trigger workflow when user submits a form",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Form Trigger is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Start the workflow when a user submits a CtrlChecks form.",
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
              "name": "Form Description",
              "internalKey": "formDescription",
              "type": "string",
              "description": "Description shown on the form"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": true,
              "description": "Form fields configuration",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Submit Button Text",
              "internalKey": "submitButtonText",
              "type": "string",
              "description": "Text on submit button",
              "example": "Submit",
              "placeholder": "Submit",
              "defaultValue": "Submit"
            },
            {
              "name": "Success Message",
              "internalKey": "successMessage",
              "type": "string",
              "description": "Message shown after successful submission",
              "example": "Thank you for your submission!",
              "placeholder": "Thank you for your submission!",
              "defaultValue": "Thank you for your submission!"
            },
            {
              "name": "Allow Multiple Submissions",
              "internalKey": "allowMultipleSubmissions",
              "type": "boolean",
              "description": "Allow same user to submit multiple times",
              "example": "true",
              "placeholder": "true",
              "defaultValue": "true"
            },
            {
              "name": "Require Authentication",
              "internalKey": "requireAuthentication",
              "type": "boolean",
              "description": "Require user authentication",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Captcha",
              "internalKey": "captcha",
              "type": "boolean",
              "description": "Enable CAPTCHA verification",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "formData": {
              "name": "Alice",
              "email": "alice@example.com",
              "message": "I need help with billing."
            },
            "submittedAt": "2025-01-15T09:45:00.000Z",
            "formId": "form_xyz"
          },
          "outputDescription": "formData: Key-value pairs of form field names and the submitted values. submittedAt: ISO timestamp of the form submission. formId: The ID of the form that was submitted.",
          "usageExample": {
            "scenario": "Send a welcome email after a contact form submission",
            "inputValues": {},
            "expectedOutput": "Access submitted fields via `{{$json.formData.email}}`, `{{$json.formData.name}}`, etc. Connect a Gmail Send node to respond to the submitter."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
