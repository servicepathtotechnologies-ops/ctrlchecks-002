import type { NodeDoc } from '../types';

export const textFormatterDoc: NodeDoc = {
  "slug": "text_formatter",
  "displayName": "Text Formatter",
  "category": "Data",
  "logoUrl": "/icons/nodes/text_formatter.svg",
  "description": "Format text strings with templates and placeholders",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "Hello {{$json.name}}",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Values to substitute in template (optional if using $json syntax)",
              "example": "{\"name\":\"John\",\"orderId\":\"12345\"}",
              "placeholder": "{\"name\":\"John\",\"orderId\":\"12345\"}"
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
