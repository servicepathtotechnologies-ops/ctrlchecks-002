import type { NodeDoc } from '../types';

export const supabaseDoc: NodeDoc = {
  "slug": "supabase",
  "displayName": "Supabase",
  "category": "Data",
  "logoUrl": "/icons/nodes/supabase.svg",
  "description": "Interact with Supabase (PostgreSQL + realtime + storage) Use this node when a workflow needs supabase behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Supabase Credential",
  "credentialSetupSteps": [
    "Go to your Supabase project → Settings → API.",
    "Copy the Project URL and the anon/service_role API key.",
    "In CtrlChecks, open Connections → Add Connection → Supabase.",
    "Paste the Project URL and API key → Save."
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
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Supabase to execute in a workflow.",
            "inputValues": {},
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
