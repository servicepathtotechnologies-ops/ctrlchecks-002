import type { NodeDoc } from '../types';

export const oauth2AuthDoc: NodeDoc = {
  "slug": "oauth2_auth",
  "displayName": "OAuth2 Auth",
  "category": "Utility",
  "logoUrl": "/icons/nodes/oauth2_auth.svg",
  "description": "Handles OAuth2 authentication and provides access tokens",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "OAuth2 Auth is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the OAuth2 Auth node.",
          "fields": [
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "required": true,
              "description": "OAuth2 provider (google, github, etc.)",
              "example": "google",
              "placeholder": "google",
              "options": [
                "Google",
                "GitHub",
                "Custom"
              ]
            },
            {
              "name": "Auth Url",
              "internalKey": "authUrl",
              "type": "url",
              "description": "Authorization URL (for custom provider)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Token Url",
              "internalKey": "tokenUrl",
              "type": "url",
              "description": "Token URL (for custom provider)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Client Id",
              "internalKey": "clientId",
              "type": "string",
              "description": "Client ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Client Secret",
              "internalKey": "clientSecret",
              "type": "password",
              "description": "Client Secret",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Scope",
              "internalKey": "scope",
              "type": "string",
              "description": "OAuth scopes"
            },
            {
              "name": "Action",
              "internalKey": "action",
              "type": "select",
              "description": "Action: getToken, refresh, or startFlow",
              "example": "getToken",
              "placeholder": "getToken",
              "defaultValue": "getToken",
              "options": [
                "Get Token",
                "Refresh Token",
                "Start OAuth Flow"
              ]
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
            "scenario": "Use OAuth2 Auth to execute in a workflow.",
            "inputValues": {
              "Provider": "google",
              "Auth Url": "https://api.example.com",
              "Token Url": "https://api.example.com",
              "Client Id": "abc123",
              "Client Secret": ""
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
