import type { NodeDoc } from '../types';

export const openaiGptDoc: NodeDoc = {
  "slug": "openai_gpt",
  "displayName": "OpenAI GPT",
  "category": "AI",
  "logoUrl": "/icons/nodes/openai_gpt.svg",
  "description": "OpenAI GPT chat completion (GPT-4, GPT-3.5)",
  "credentialType": "OpenAI API Key",
  "credentialSetupSteps": [
    "What this is: OpenAI uses an API key or account connection so CtrlChecks can safely access your OpenAI account.",
    "Go to platform.openai.com and sign in (or create a free account).",
    "Click your profile icon in the top right -> API keys -> Create new secret key.",
    "Give it a name (e.g. CtrlChecks) and click \"Create secret key\".",
    "Copy the key immediately - it starts with sk- and will only be shown ONCE. If you close without copying, you will need to create a new one.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> OpenAI -> paste the sk- key -> Save.",
    "Make sure your OpenAI account has credits: check platform.openai.com/account/billing.",
    "Run a test step - ask the OpenAI node a simple question to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the OpenAI node and select the saved connection."
  ],
  "credentialDocsUrl": "https://platform.openai.com/docs/api-reference/authentication",
  "resources": [
    {
      "name": "Configuration",
      "description": "OpenAI GPT is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the OpenAI GPT node.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "helpText": "What this field is: Which OpenAI model version to use. Different models have different capabilities and costs.\nOptions:\n  gpt-4o        →  best quality, understands text and images, recommended for complex tasks\n  gpt-4o-mini   →  fast and affordable, good for most everyday tasks\n  gpt-4-turbo   →  older powerful model\n  gpt-3.5-turbo →  fastest and cheapest, less capable\nRecommended: gpt-4o for complex tasks, gpt-4o-mini for simple or high-volume tasks.",
              "placeholder": "gpt-4o",
              "example": "gpt-4o"
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "User message or prompt to send to OpenAI",
              "helpText": "What this field is: The instruction or question you want the AI to respond to.\nHow to write a good prompt: Be specific. Describe the task, the format you want, and any constraints.\nExample: Summarize the following customer feedback in exactly 3 bullet points, each under 20 words: {{$json.feedbackText}}\nTip: Use {{$json.text}} or {{$json.content}} to pass text from an earlier step to the AI.",
              "placeholder": "Summarize {{$json.text}}",
              "example": "Summarize {{$json.text}}"
            }
          ],
          "outputExample": {
            "text": "Here is the generated response from the selected model.",
            "length": 55
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming OpenAI GPT data with execute after a related upstream event is received",
            "inputValues": {
              "Model": "gpt-4o",
              "Prompt": "Summarize {{$json.text}}"
            },
            "expectedOutput": "OpenAI GPT returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://platform.openai.com/docs/api-reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the OpenAI GPT node."
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
