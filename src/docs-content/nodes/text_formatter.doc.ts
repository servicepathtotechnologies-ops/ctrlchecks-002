import type { NodeDoc } from '../types';

export const textFormatterDoc: NodeDoc = {
  "slug": "text_formatter",
  "displayName": "Text Formatter",
  "category": "Data",
  "logoUrl": "/icons/nodes/text_formatter.svg",
  "description": "Format text strings with templates and placeholders",
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
      "description": "Text Formatter is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Transform text using operations like uppercase, trim, replace, slug, etc.",
          "fields": [
            {
              "name": "Template",
              "internalKey": "template",
              "type": "textarea",
              "required": true,
              "description": "Text template with placeholders (e.g., \"Hello {{name}}\")",
              "helpText": "What this field is: Text template with placeholders (e.g., \"Hello {{name}}\") for Text Formatter / Execute.\nHow to fill it: Type the message, prompt, or content you want Text Formatter to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}",
              "example": "Hello {{$json.name}}"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Values to substitute in template (optional if using $json syntax)",
              "helpText": "What this field is: Values to substitute in template (optional if using $json syntax) for Text Formatter / Execute.\nHow to fill it: Enter valid JSON in the format Text Formatter expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "{\"name\":\"John\",\"orderId\":\"12345\"}",
              "example": "{\"name\":\"John\",\"orderId\":\"12345\"}"
            }
          ],
          "outputExample": {
            "result": "hello-world-welcome-to-ctrlchecks",
            "operation": "slug",
            "original": "Hello World! Welcome to CtrlChecks"
          },
          "outputDescription": "result: The transformed text. operation: The transformation applied. original: The input text.",
          "usageExample": {
            "scenario": "Create a URL-safe slug from a blog post title",
            "inputValues": {
              "text": "{{$json.title}}",
              "operation": "slug"
            },
            "expectedOutput": "URL-friendly slug in `{{$json.result}}`."
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
