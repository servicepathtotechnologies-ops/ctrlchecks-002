import type { NodeDoc } from '../types';

export const vercelDoc: NodeDoc = {
  "slug": "vercel",
  "displayName": "Vercel",
  "category": "Data",
  "logoUrl": "/icons/nodes/vercel.svg",
  "description": "Deploy projects and manage deployments on Vercel Use this node when a workflow needs vercel behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Vercel Token",
  "credentialSetupSteps": [
    "Open the Vercel developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Vercel Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://vercel.com/docs/rest-api",
  "resources": [
    {
      "name": "Operations",
      "description": "Vercel exposes operation choices directly.",
      "operations": [
        {
          "name": "Deploy Project",
          "value": "deploy",
          "description": "Deploy Project with the Vercel node using the configured input fields.",
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
            },
            {
              "name": "Project Name",
              "internalKey": "projectName",
              "type": "string",
              "required": false,
              "description": "Vercel project name (required for deploy operation). Can use template syntax like {{$json.projectName}}",
              "example": "my-app",
              "placeholder": "my-app"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Whether the operation succeeded\ndata: Operation result data. For deploy: deploymentId, projectName, url, status, createdAt. For list: deployments array and total count\nerror: Error details if operation failed. Contains code, message, retriable, and optional details",
          "usageExample": {
            "scenario": "Use Vercel in a workflow and pass upstream data into deploy project.",
            "inputValues": {
              "Token": "vercel_***",
              "Project Name": "my-app"
            },
            "expectedOutput": "The node runs deploy project and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://vercel.com/docs/rest-api"
        },
        {
          "name": "List Deployments",
          "value": "list_deployments",
          "description": "List Deployments with the Vercel node using the configured input fields.",
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
            },
            {
              "name": "Project Name",
              "internalKey": "projectName",
              "type": "string",
              "required": false,
              "description": "Vercel project name (required for deploy operation). Can use template syntax like {{$json.projectName}}",
              "example": "my-app",
              "placeholder": "my-app"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "error": {}
          },
          "outputDescription": "success: Whether the operation succeeded\ndata: Operation result data. For deploy: deploymentId, projectName, url, status, createdAt. For list: deployments array and total count\nerror: Error details if operation failed. Contains code, message, retriable, and optional details",
          "usageExample": {
            "scenario": "Use Vercel in a workflow and pass upstream data into list deployments.",
            "inputValues": {
              "Token": "vercel_***",
              "Project Name": "my-app"
            },
            "expectedOutput": "The node runs list deployments and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://vercel.com/docs/rest-api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
