import type { NodeDoc } from '../types';

export const facebookDoc: NodeDoc = {
  "slug": "facebook",
  "displayName": "Facebook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/facebook.svg",
  "description": "Post content to Facebook pages",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/graph-api/",
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
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "description": "Facebook page ID",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Facebook (if using OAuth authentication)",
              "example": "your-facebook-oauth-token",
              "placeholder": "your-facebook-oauth-token"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Facebook to execute in a workflow.",
            "inputValues": {
              "Message": "{{$json.message}}",
              "Page Id": "page-id",
              "Access Token": "your-facebook-oauth-token"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
