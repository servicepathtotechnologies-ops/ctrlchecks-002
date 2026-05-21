import type { NodeDoc } from '../types';

export const supabaseDoc: NodeDoc = {
  "slug": "supabase",
  "displayName": "Supabase",
  "category": "Data",
  "logoUrl": "/icons/nodes/supabase.svg",
  "description": "Interact with Supabase (PostgreSQL + realtime + storage) Use this node when a workflow needs supabase behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Supabase Credential",
  "credentialSetupSteps": [
    "What this is: Supabase uses an OAuth connection so CtrlChecks can safely access your Supabase account.",
    "Go to supabase.com and sign in to your Supabase account.",
    "Open your project -> click \"Settings\" (gear icon) in the left sidebar -> API.",
    "Under \"Project URL\", copy the URL (looks like https://xxxx.supabase.co). Under \"Project API keys\", copy the \"anon/public\" key or \"service_role\" key depending on your needs.",
    "Note: \"anon\" key has limited access (respects row-level security); \"service_role\" key has full access - keep it secret.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Supabase -> paste the Project URL and API key -> Save.",
    "Run a test step to query a table and confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Supabase node and select the saved connection."
  ],
  "credentialDocsUrl": "https://supabase.com/docs/guides/getting-started/quickstarts",
  "resources": [
    {
      "name": "Configuration",
      "description": "Supabase is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Supabase node.",
          "fields": [],
          "outputExample": {
            "success": true,
            "operation": "default",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Supabase data with execute after a related upstream event is received",
            "inputValues": {},
            "expectedOutput": "Supabase returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://supabase.com/docs/reference/javascript/introduction"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Supabase node."
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
