import type { NodeDoc } from '../types';

export const facebookDoc: NodeDoc = {
  "slug": "facebook",
  "displayName": "Facebook",
  "category": "Communication",
  "logoUrl": "/icons/nodes/facebook.svg",
  "description": "Post content to Facebook pages Use this node when a workflow needs facebook behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Facebook Token, Facebook Credential",
  "credentialSetupSteps": [
    "Open the Facebook developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Facebook Token, Facebook Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/graph-api/",
  "resources": [
    {
      "name": "Configuration",
      "description": "Facebook is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Facebook node using the configured input fields.",
          "fields": [
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": true,
              "description": "Post message",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Facebook page ID",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Facebook (if using OAuth authentication)",
              "example": "your-facebook-oauth-token",
              "placeholder": "your-facebook-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "facebook_oauth_123",
              "placeholder": "facebook_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Facebook node.\nconvertible: Value returned by the Facebook node.\ndefaultValue: Value returned by the Facebook node.",
          "usageExample": {
            "scenario": "Use Facebook in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Message": "{{$json.message}}",
              "Page Id": "page-id",
              "Access Token": "your-facebook-oauth-token",
              "Credential Id": "facebook_oauth_123"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/graph-api/"
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
