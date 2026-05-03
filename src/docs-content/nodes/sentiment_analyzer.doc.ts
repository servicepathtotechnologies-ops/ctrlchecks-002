import type { NodeDoc } from '../types';

export const sentimentAnalyzerDoc: NodeDoc = {
  "slug": "sentiment_analyzer",
  "displayName": "Sentiment Analyzer",
  "category": "AI",
  "logoUrl": "/icons/nodes/sentiment_analyzer.svg",
  "description": "Analyze sentiment and emotions in text Use this node when a workflow needs sentiment analyzer behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Sentiment Analyzer is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Sentiment Analyzer node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": true,
              "description": "Text to analyze",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible"
          },
          "outputDescription": "type: Value returned by the Sentiment Analyzer node.\nstructure: Value returned by the Sentiment Analyzer node.\nconvertible: Value returned by the Sentiment Analyzer node.",
          "usageExample": {
            "scenario": "Use Sentiment Analyzer in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Text": "{{$json.text}}"
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
