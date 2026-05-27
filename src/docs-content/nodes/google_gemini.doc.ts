import type { NodeDoc } from '../types';

export const googleGeminiDoc: NodeDoc = {
  "slug": "google_gemini",
  "displayName": "Gemini",
  "category": "AI",
  "logoUrl": "/icons/nodes/google_gemini.svg",
  "description": "Google Gemini chat completion",
  "credentialType": "Google Gemini API Key",
  "credentialSetupSteps": [
    "What this is: Google Gemini uses an API key or account connection so CtrlChecks can safely access your Google Gemini account.",
    "Go to aistudio.google.com/app/apikey and sign in with your Google account.",
    "Click \"Create API Key\" -> select or create a Google Cloud project -> Create API key in existing project.",
    "Copy the generated API key - it is a long string of letters and numbers.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Gemini -> paste the API key -> Save.",
    "Run a test step with a simple prompt to confirm Gemini responds correctly.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Gemini node and select the saved connection."
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
              "helpText": "What this field is: Which Gemini model to use.\nOptions:\n  gemini-3.5-flash  →  fast and affordable, good for most tasks\n  gemini-1.5-pro    →  more capable, better at complex reasoning\nRecommended: gemini-3.5-flash for most tasks.",
              "placeholder": "gemini-3.1-pro-preview",
              "example": "gemini-3.1-pro-preview"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Gemini API key (node-level, required for this node to run)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Gemini.\nWhere to get it: Open the Gemini dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "AIza...",
              "example": "AIza...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Prompt text",
              "helpText": "What this field is: The instruction or question for Google Gemini AI.\nExample: Extract all names, email addresses, and phone numbers from the following text and return them as a JSON array: {{$json.rawText}}",
              "placeholder": "{{$json.prompt}}",
              "example": "{{$json.prompt}}"
            }
          ],
          "outputExample": {
            "text": "Here is a concise summary of the uploaded document.",
            "length": 51
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Gemini data with execute after a related upstream event is received",
            "inputValues": {
              "Model": "gemini-3.1-pro-preview",
              "Api Key": "AIza...",
              "Prompt": "{{$json.prompt}}"
            },
            "expectedOutput": "Gemini returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
