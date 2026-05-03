import type { NodeDoc } from '../types';

export const textSummarizerDoc: NodeDoc = {
  "slug": "text_summarizer",
  "displayName": "Text Summarizer",
  "category": "AI",
  "logoUrl": "/icons/nodes/text_summarizer.svg",
  "description": "Summarize long text into shorter versions Use this node when a workflow needs text summarizer behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Text Summarizer is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Text Summarizer node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": true,
              "description": "Text to summarize",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Max Length",
              "internalKey": "maxLength",
              "type": "number",
              "required": false,
              "description": "Maximum summary length",
              "example": "100",
              "placeholder": "100"
            }
          ],
          "outputExample": {
            "response": "response"
          },
          "outputDescription": "response: Summarized text produced by the model (primary narrative output for downstream nodes)",
          "usageExample": {
            "scenario": "Use Text Summarizer in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Max Length": "100"
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
    "ai_agent",
    "ai_chat_model",
    "openai_gpt",
    "anthropic_claude",
    "google_gemini"
  ]
};
