import type { NodeDoc } from '../types';

export const anthropicClaudeDoc: NodeDoc = {
  "slug": "anthropic_claude",
  "displayName": "Claude",
  "category": "AI",
  "logoUrl": "/icons/nodes/anthropic_claude.svg",
  "description": "Anthropic Claude chat completion",
  "credentialType": "Anthropic API Key",
  "credentialSetupSteps": [
    "What this is: Anthropic uses an API key or account connection so CtrlChecks can safely access your Anthropic account.",
    "Go to console.anthropic.com and sign in (or create an account).",
    "Click \"API Keys\" in the left menu -> Create Key.",
    "Give it a name (e.g. CtrlChecks) and click Create.",
    "Copy the key immediately - it starts with sk-ant-. Save it somewhere safe - it is shown only once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Anthropic Claude -> paste the sk-ant- key -> Save.",
    "Check that your Anthropic account has API credits: console.anthropic.com/settings/billing.",
    "Run a test step with a simple prompt (e.g. \"Say hello\") to confirm Claude responds correctly.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Anthropic node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.anthropic.com/en/api/getting-started",
  "resources": [
    {
      "name": "Configuration",
      "description": "Claude is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Claude node.",
          "fields": [
            {
              "name": "Model",
              "internalKey": "model",
              "type": "string",
              "required": true,
              "description": "Model name",
              "helpText": "What this field is: Which Claude model to use.\nOptions:\n  claude-opus-4-7    →  most powerful, best for complex analysis and reasoning\n  claude-sonnet-4-6  →  balanced quality and speed — recommended for most tasks\n  claude-haiku-4-5   →  fastest and most affordable — good for simple tasks or high volume\nRecommended: claude-sonnet-4-6 for most use cases.",
              "placeholder": "claude-3-opus",
              "example": "claude-3-opus"
            },
            {
              "name": "Messages",
              "internalKey": "messages",
              "type": "json",
              "required": true,
              "description": "Chat messages",
              "helpText": "What this field is: Chat messages for Claude / Execute.\nHow to fill it: Type the message, prompt, or content you want Claude to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "[\"{{$json.messages}}\"]",
              "example": "[\"{{$json.messages}}\"]"
            },
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Prompt to send to Claude",
              "helpText": "What this field is: The message or task you want Claude AI to work on.\nHow to write it: Be clear and specific. Tell Claude exactly what you need and in what format.\nExample: Review this email draft and suggest 3 improvements for clarity and professional tone. Return your suggestions as a numbered list: {{$json.emailDraft}}\nTip: Use {{$json.content}} to send text from an earlier step (like a database record or form input) to Claude.",
              "placeholder": "Summarize {{$json.text}}"
            }
          ],
          "outputExample": {
            "id": "msg_01ABC",
            "type": "message",
            "role": "assistant",
            "content": [
              {
                "type": "text",
                "text": "Here is the answer."
              }
            ],
            "model": "claude-3-5-sonnet-latest"
          },
          "outputDescription": "id: Unique identifier returned by the service.\ntype: Value returned by this operation.\nrole: Value returned by this operation.\ncontent: Value returned by this operation.\nmodel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Summarize a long support ticket before creating an agent handoff note",
            "inputValues": {
              "Model": "claude-3-opus",
              "Messages": "[\"{{$json.messages}}\"]",
              "Prompt": ""
            },
            "expectedOutput": "Claude returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.anthropic.com/en/api/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Claude node."
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
