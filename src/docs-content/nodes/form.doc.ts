import type { NodeDoc } from '../types';

export const formDoc: NodeDoc = {
  "slug": "form",
  "displayName": "Form Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/form.svg",
  "description": "Trigger workflow when user submits a form",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: Title of the form for Form Trigger / Execute.\nHow to fill it: Enter the form title value requested by Form Trigger, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.formTitle}} or pick the value from the data picker.",
              "placeholder": "Contact Us Form",
              "example": "Contact Us Form",
              "defaultValue": "Form Submission"
            },
            {
              "name": "Form Description",
              "internalKey": "formDescription",
              "type": "string",
              "required": false,
              "description": "Description shown on the form",
              "helpText": "What this field is: Description shown on the form for Form Trigger / Execute.\nHow to fill it: Enter the form description value requested by Form Trigger, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.formDescription}} or pick the value from the data picker.",
              "placeholder": "Enter Form Description"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "json",
              "required": true,
              "description": "Form fields configuration",
              "helpText": "What this field is: The list of questions and input fields shown on the form.\nHow to fill it: Write a JSON array where each item is one form field with a name, label, and type.\nExample:\n[\n  {\"name\":\"email\",\"label\":\"Your Email\",\"type\":\"email\",\"required\":true},\n  {\"name\":\"name\",\"label\":\"Full Name\",\"type\":\"string\",\"required\":true},\n  {\"name\":\"message\",\"label\":\"Your Message\",\"type\":\"textarea\"}\n]\nTip: After saving, CtrlChecks gives you a public form URL you can share with users or embed on your website.",
              "placeholder": "[]",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Submit Button Text",
              "internalKey": "submitButtonText",
              "type": "string",
              "required": false,
              "description": "Text on submit button",
              "helpText": "What this field is: Text on submit button for Form Trigger / Execute.\nHow to fill it: Type the message, prompt, or content you want Form Trigger to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Submit",
              "example": "Submit",
              "defaultValue": "Submit"
            },
            {
              "name": "Success Message",
              "internalKey": "successMessage",
              "type": "string",
              "required": false,
              "description": "Message shown after successful submission",
              "helpText": "What this field is: Message shown after successful submission for Form Trigger / Execute.\nHow to fill it: Type the message, prompt, or content you want Form Trigger to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Thank you for your submission!",
              "example": "Thank you for your submission!",
              "defaultValue": "Thank you for your submission!"
            },
            {
              "name": "Allow Multiple Submissions",
              "internalKey": "allowMultipleSubmissions",
              "type": "boolean",
              "required": false,
              "description": "Allow same user to submit multiple times",
              "helpText": "What this field is: An on/off choice for allow multiple submissions in Form Trigger / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Form Trigger to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Require Authentication",
              "internalKey": "requireAuthentication",
              "type": "boolean",
              "required": false,
              "description": "Require user authentication",
              "helpText": "What this field is: An on/off choice for require authentication in Form Trigger / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Form Trigger to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Captcha",
              "internalKey": "captcha",
              "type": "boolean",
              "required": false,
              "description": "Enable CAPTCHA verification",
              "helpText": "What this field is: An on/off choice for captcha in Form Trigger / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Form Trigger to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
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
