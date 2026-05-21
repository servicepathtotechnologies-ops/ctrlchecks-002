import type { NodeDoc } from '../types';

export const facebookDoc: NodeDoc = {
  "slug": "facebook",
  "displayName": "Facebook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/facebook.svg",
  "description": "Post content to Facebook pages",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "What this is: Meta Apps uses an OAuth connection so CtrlChecks can safely access your Meta Apps account.",
    "Go to developers.facebook.com/apps and sign in with your Facebook account.",
    "Click \"Create App\" -> select \"Business\" type -> Next -> give it a name -> Create App.",
    "Under \"Add Products to Your App\", click \"Set Up\" on Facebook Login.",
    "Go to Facebook Login -> Settings -> add this URL to \"Valid OAuth Redirect URIs\": http://localhost:3001/api/oauth/facebook/callback -> Save Changes.",
    "Copy the App ID and App Secret from Settings -> Basic.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Facebook -> click \"Connect with Facebook\" -> sign in and authorize.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Meta Apps node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/facebook-login/web",
  "resources": [
    {
      "name": "Configuration",
      "description": "Facebook is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Facebook node.",
          "fields": [
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Post message",
              "helpText": "What this field is: Post message for Facebook / Execute.\nHow to fill it: Type the message, prompt, or content you want Facebook to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Facebook page ID",
              "helpText": "What this field is: Facebook page ID for Facebook / Execute.\nWhere to find it: Open the item in Facebook and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.pageId}} or pick the value from the data picker.",
              "placeholder": "page-id",
              "example": "page-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Facebook (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Facebook.\nWhere to get it: Open the Facebook dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-facebook-oauth-token",
              "example": "your-facebook-oauth-token"
            }
          ],
          "outputExample": {
            "text": "Post published to the selected Facebook page.",
            "length": 45
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Facebook data with execute after a related upstream event is received",
            "inputValues": {
              "Message": "{{$json.message}}",
              "Page Id": "page-id",
              "Access Token": "your-facebook-oauth-token"
            },
            "expectedOutput": "Facebook returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/graph-api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Facebook node."
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
