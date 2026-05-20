import type { NodeDoc } from '../types';

export const textSummarizerDoc: NodeDoc = {
  "slug": "text_summarizer",
  "displayName": "Text Summarizer",
  "category": "AI",
  "logoUrl": "/icons/nodes/text_summarizer.svg",
  "description": "Summarize long text into shorter versions",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Max Length",
              "internalKey": "maxLength",
              "type": "number",
              "description": "Maximum summary length",
              "example": "100",
              "placeholder": "100"
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
