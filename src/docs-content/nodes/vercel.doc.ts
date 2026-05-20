import type { NodeDoc } from '../types';

export const vercelDoc: NodeDoc = {
  "slug": "vercel",
  "displayName": "Vercel",
  "category": "Data",
  "logoUrl": "/icons/nodes/vercel.svg",
  "description": "Deploy projects and manage deployments on Vercel",
  "credentialType": "Vercel API Key",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "my-app",
              "placeholder": "my-app"
            },
            {
              "name": "Token",
              "internalKey": "token",
              "type": "password",
              "required": true,
              "description": "Vercel API token (Bearer token). Use credential selection or template syntax like {{$credentials.vercel.token}}",
              "example": "vercel_***",
              "placeholder": "vercel_***",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Vercel to deploy in a workflow.",
            "inputValues": {
              "Project Name": "my-app",
              "Token": "vercel_***"
            },
            "expectedOutput": "The node executes deploy and exposes its result for downstream nodes."
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
              "example": "vercel_***",
              "placeholder": "vercel_***",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Vercel to list deployments in a workflow.",
            "inputValues": {
              "Token": "vercel_***"
            },
            "expectedOutput": "The node executes list deployments and exposes its result for downstream nodes."
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
