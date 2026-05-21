import type { NodeDoc } from '../types';

export const oauth2AuthDoc: NodeDoc = {
  "slug": "oauth2_auth",
  "displayName": "OAuth2 Auth",
  "category": "Utility",
  "logoUrl": "/icons/nodes/oauth2_auth.svg",
  "description": "Handles OAuth2 authentication and provides access tokens",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: OAuth2 provider (google, github, etc.) for OAuth2 Auth / Execute.\nWhere to find it: Open the item in OAuth2 Auth and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "google",
              "example": "google",
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
              "helpText": "What this field is: Authorization URL (for custom provider) for OAuth2 Auth / Execute.\nHow to fill it: Paste the full web address OAuth2 Auth should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.authUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Token Url",
              "internalKey": "tokenUrl",
              "type": "url",
              "required": false,
              "description": "Token URL (for custom provider)",
              "helpText": "What this field is: Token URL (for custom provider) for OAuth2 Auth / Execute.\nHow to fill it: Paste the full web address OAuth2 Auth should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.tokenUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Client Id",
              "internalKey": "clientId",
              "type": "string",
              "required": false,
              "description": "Client ID",
              "helpText": "What this field is: Client ID for OAuth2 Auth / Execute.\nWhere to find it: Open the item in OAuth2 Auth and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.clientId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Client Secret",
              "internalKey": "clientSecret",
              "type": "password",
              "required": false,
              "description": "Client Secret",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access OAuth2 Auth.\nWhere to get it: Open the OAuth2 Auth dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "Enter Client Secret",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Scope",
              "internalKey": "scope",
              "type": "string",
              "required": false,
              "description": "OAuth scopes",
              "helpText": "What this field is: OAuth scopes for OAuth2 Auth / Execute.\nHow to fill it: Enter the scope value requested by OAuth2 Auth, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.scope}} or pick the value from the data picker.",
              "placeholder": "Enter Scope"
            },
            {
              "name": "Action",
              "internalKey": "action",
              "type": "select",
              "required": false,
              "description": "Action: getToken, refresh, or startFlow",
              "helpText": "What this field is: A list of allowed choices for action in OAuth2 Auth / Execute.\nHow to fill it: Pick the option that matches what OAuth2 Auth should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Get Token (getToken), Refresh Token (refresh), Start OAuth Flow (startFlow).",
              "placeholder": "getToken",
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
            "scenario": "Process incoming OAuth2 Auth data with execute after a related upstream event is received",
            "inputValues": {
              "Provider": "google",
              "Auth Url": "https://api.example.com",
              "Token Url": "https://api.example.com",
              "Client Id": "abc123",
              "Client Secret": ""
            },
            "expectedOutput": "OAuth2 Auth returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
