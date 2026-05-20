import type { NodeDoc } from '../types';

export const googleGeminiDoc: NodeDoc = {
  "slug": "google_gemini",
  "displayName": "Gemini",
  "category": "AI",
  "logoUrl": "/icons/nodes/google_gemini.svg",
  "description": "Google Gemini chat completion",
  "credentialType": "Google Gemini API Key",
  "credentialSetupSteps": [
    "Go to https://aistudio.google.com/app/apikey.",
    "Click \"Create API Key\" → select or create a Google Cloud project.",
    "Copy the generated API key.",
    "In CtrlChecks, open Connections → Add Connection → Google Gemini → paste the API key → Save."
  ],
  "credentialDocsUrl": "https://ai.google.dev/tutorials/setup",
  "resources": [
    {
      "name": "Configuration",
      "description": "Gemini is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Gemini node.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "example": "gemini-2.5-pro",
              "placeholder": "gemini-2.5-pro"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Gemini API key (node-level, required for this node to run)",
              "example": "AIza...",
              "placeholder": "AIza...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Prompt text",
              "example": "{{$json.prompt}}",
              "placeholder": "{{$json.prompt}}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Gemini to execute in a workflow.",
            "inputValues": {
              "Model": "gemini-2.5-pro",
              "Api Key": "AIza...",
              "Prompt": "{{$json.prompt}}"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://ai.google.dev/api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Gemini node."
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
