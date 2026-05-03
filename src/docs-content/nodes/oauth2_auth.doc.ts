import type { NodeDoc } from '../types';

export const oauth2AuthDoc: NodeDoc = {
  "slug": "oauth2_auth",
  "displayName": "OAuth2 Auth",
  "category": "Utility",
  "logoUrl": "/icons/nodes/oauth2_auth.svg",
  "description": "Handles OAuth2 authentication and provides access tokens Use this node when a workflow needs oauth2 auth behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Oauth2 Credential, Oauth2 Credential",
  "credentialSetupSteps": [
    "Open the OAuth2 Auth developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Oauth2 Credential, Oauth2 Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "OAuth2 Auth is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the OAuth2 Auth node using the configured input fields.",
          "fields": [
            {
              "name": "Provider",
              "internalKey": "provider",
              "type": "select",
              "required": true,
              "description": "OAuth2 provider (google, github, etc.)",
              "example": "Google",
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
              "required": false,
              "description": "Authorization URL (for custom provider)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Token Url",
              "internalKey": "tokenUrl",
              "type": "password",
              "required": false,
              "description": "Token URL (for custom provider)",
              "example": "https://api.example.com/resource",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Client Id",
              "internalKey": "clientId",
              "type": "string",
              "required": false,
              "description": "Client ID",
              "example": "{{ $json.clientId }}"
            },
            {
              "name": "Client Secret",
              "internalKey": "clientSecret",
              "type": "password",
              "required": false,
              "description": "Client Secret",
              "example": "{{ $json.clientSecret }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Scope",
              "internalKey": "scope",
              "type": "string",
              "required": false,
              "description": "OAuth scopes",
              "example": "{{ $json.scope }}"
            },
            {
              "name": "Action",
              "internalKey": "action",
              "type": "select",
              "required": false,
              "description": "Action: getToken, refresh, or startFlow",
              "example": "getToken",
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
            "accessToken": "accessToken",
            "refreshToken": "refreshToken",
            "expiresIn": 1
          },
          "outputDescription": "success: Value returned by the OAuth2 Auth node.\naccessToken: Value returned by the OAuth2 Auth node.\nrefreshToken: Value returned by the OAuth2 Auth node.\nexpiresIn: Value returned by the OAuth2 Auth node.",
          "usageExample": {
            "scenario": "Use OAuth2 Auth in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Provider": "Google",
              "Auth Url": "https://api.example.com/resource",
              "Token Url": "https://api.example.com/resource",
              "Client Id": "{{ $json.clientId }}",
              "Client Secret": "{{ $json.clientSecret }}",
              "Scope": "{{ $json.scope }}",
              "Action": "getToken"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
