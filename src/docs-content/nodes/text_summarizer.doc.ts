import type { NodeDoc } from '../types';

export const textSummarizerDoc: NodeDoc = {
  "slug": "text_summarizer",
  "displayName": "Text Summarizer",
  "category": "AI",
  "logoUrl": "/icons/nodes/text_summarizer.svg",
  "description": "Summarize long text into shorter versions",
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
      "description": "Text Summarizer is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Summarise long text using an AI language model.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Text to summarize",
              "helpText": "What this field is: The text you want to summarize.\nExample: {{$json.articleContent}} or {{$json.emailBody}}\nTip: Connect this after a database read, HTTP request, or Gmail node — then use {{$json.body}} or the relevant field to pass the text.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Max Length",
              "internalKey": "maxLength",
              "type": "number",
              "required": false,
              "description": "Maximum summary length",
              "helpText": "What this field is: The maximum length of the summary in words or characters.\nExample: 100 (for a short 100-word summary) or 3 (for a 3-sentence summary).",
              "placeholder": "100",
              "example": "100"
            }
          ],
          "outputExample": {
            "summary": "The document outlines three main points: cost reduction, team expansion, and new product launch in Q2.",
            "wordCount": 28,
            "originalLength": 1250
          },
          "outputDescription": "summary: The condensed summary text. wordCount: Words in the summary. originalLength: Character count of the input text.",
          "usageExample": {
            "scenario": "Summarise customer feedback before inserting into a CRM note",
            "inputValues": {
              "text": "{{$json.feedback}}",
              "maxLength": "100"
            },
            "expectedOutput": "Short summary in `{{$json.summary}}`."
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
