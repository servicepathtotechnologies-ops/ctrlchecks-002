import type { NodeDoc } from '../types';

export const vercelDoc: NodeDoc = {
  "slug": "vercel",
  "displayName": "Vercel",
  "category": "Data",
  "logoUrl": "/icons/nodes/vercel.svg",
  "description": "Deploy projects and manage deployments on Vercel",
  "credentialType": "Vercel API Key",
  "credentialSetupSteps": [
    "What this is: Vercel uses an API key or account connection so CtrlChecks can safely access your Vercel account.",
    "Go to vercel.com and sign in to your account.",
    "Click your profile photo (top right) -> Account Settings -> Tokens.",
    "Click \"Create\" -> give it a name (e.g. CtrlChecks) -> set scope to \"Full Account\" or a specific team -> set an expiry -> Create Token.",
    "Copy the token immediately - it is shown only once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Vercel -> paste the token -> Save.",
    "Run a test step (e.g. list your deployments) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Vercel node and select the saved connection."
  ],
  "credentialDocsUrl": "https://vercel.com/docs/rest-api",
  "resources": [
    {
      "name": "Operations",
      "description": "Vercel exposes operation choices directly.",
      "operations": [
        {
          "name": "Deploy",
          "value": "deploy",
          "description": "Deploy using the Vercel node.",
          "fields": [
            {
              "name": "Project Name",
              "internalKey": "projectName",
              "type": "string",
              "required": true,
              "description": "Vercel project name (required for deploy operation). Can use template syntax like {{$json.projectName}}",
              "helpText": "What this field is: Vercel project name (required for deploy operation). Can use template syntax like {{$json.projectName}} for Vercel / Deploy.\nHow to fill it: Enter the project name value requested by Vercel, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.projectName}} or pick the value from the data picker.",
              "placeholder": "my-app",
              "example": "my-app"
            },
            {
              "name": "Token",
              "internalKey": "token",
              "type": "password",
              "required": true,
              "description": "Vercel API token (Bearer token). Use credential selection or template syntax like {{$credentials.vercel.token}}",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Vercel.\nWhere to get it: Open the Vercel dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "vercel_***",
              "example": "vercel_***",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Vercel data with deploy after a related upstream event is received",
            "inputValues": {
              "Project Name": "my-app",
              "Token": "vercel_***"
            },
            "expectedOutput": "Vercel returns structured deploy data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://vercel.com/docs/rest-api"
        },
        {
          "name": "List deployments",
          "value": "list_deployments",
          "description": "List deployments using the Vercel node.",
          "fields": [
            {
              "name": "Token",
              "internalKey": "token",
              "type": "password",
              "required": true,
              "description": "Vercel API token (Bearer token). Use credential selection or template syntax like {{$credentials.vercel.token}}",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Vercel.\nWhere to get it: Open the Vercel dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "vercel_***",
              "example": "vercel_***",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Vercel data with list deployments after a related upstream event is received",
            "inputValues": {
              "Token": "vercel_***"
            },
            "expectedOutput": "Vercel returns structured list deployments data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://vercel.com/docs/rest-api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Vercel node."
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
