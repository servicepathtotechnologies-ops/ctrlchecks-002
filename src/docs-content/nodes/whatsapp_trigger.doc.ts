import type { NodeDoc } from '../types';

export const whatsappTriggerDoc: NodeDoc = {
  "slug": "whatsapp_trigger",
  "displayName": "WhatsApp Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/whatsapp_trigger.svg",
  "description": "Trigger workflows on WhatsApp events: message received, delivered, read, conversation created",
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
      "description": "WhatsApp Trigger is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the WhatsApp Trigger node.",
          "fields": [
            {
              "name": "Event",
              "internalKey": "event",
              "type": "string",
              "required": true,
              "description": "WhatsApp event type",
              "helpText": "What this field is: WhatsApp event type for WhatsApp Trigger / Execute.\nHow to fill it: Enter the event value requested by WhatsApp Trigger, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.event}} or pick the value from the data picker.",
              "placeholder": "message.received",
              "example": "message.received",
              "defaultValue": "message.received"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID to listen on",
              "helpText": "What this field is: WhatsApp Phone Number ID to listen on for WhatsApp Trigger / Execute.\nWhere to find it: Open the item in WhatsApp Trigger and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.phoneNumberId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
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
            "scenario": "Process incoming WhatsApp Trigger data with execute after a related upstream event is received",
            "inputValues": {
              "Event": "message.received",
              "Phone Number Id": "abc123"
            },
            "expectedOutput": "WhatsApp Trigger returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the WhatsApp Trigger node."
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
