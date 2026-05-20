import type { NodeDoc } from '../types';

export const instagramTriggerDoc: NodeDoc = {
  "slug": "instagram_trigger",
  "displayName": "Instagram Trigger",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/instagram_trigger.svg",
  "description": "Trigger workflows on Instagram events: new DM, comment, mention, postback",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Instagram Trigger is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Instagram Trigger node.",
          "fields": [
            {
              "name": "Event",
              "internalKey": "event",
              "type": "string",
              "required": true,
              "description": "Instagram event type",
              "example": "message.received",
              "placeholder": "message.received",
              "defaultValue": "message.received"
            },
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "description": "Instagram Business Account ID to listen on",
              "example": "abc123",
              "placeholder": "abc123"
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
            "scenario": "Use Instagram Trigger to execute in a workflow.",
            "inputValues": {
              "Event": "message.received",
              "Instagram Business Account Id": "abc123"
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
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Instagram Trigger node."
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
