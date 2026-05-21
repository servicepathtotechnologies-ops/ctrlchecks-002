import type { NodeDoc } from '../types';

export const activecampaignDoc: NodeDoc = {
  "slug": "activecampaign",
  "displayName": "ActiveCampaign",
  "category": "Data",
  "logoUrl": "/icons/nodes/activecampaign.svg",
  "description": "ActiveCampaign marketing automation",
  "credentialType": "ActiveCampaign API Key",
  "credentialSetupSteps": [
    "What this is: ActiveCampaign uses an API key or account connection so CtrlChecks can safely access your ActiveCampaign account.",
    "Log in to your ActiveCampaign account.",
    "Click Settings (gear icon, bottom left) -> Developer.",
    "You will see your API URL (e.g. https://youracccount.api-us1.com) and API Key. Copy both.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> ActiveCampaign -> enter the API URL and API Key -> Save.",
    "Run a test step (e.g. list contacts) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the ActiveCampaign node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.activecampaign.com/reference/url",
  "resources": [
    {
      "name": "Operations",
      "description": "ActiveCampaign exposes operation choices directly.",
      "operations": [
        {
          "name": "Add",
          "value": "add",
          "description": "Add using the ActiveCampaign node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "helpText": "What this field is: Contact ID for ActiveCampaign / Add.\nWhere to find it: Open the item in ActiveCampaign and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming ActiveCampaign data with add after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "ActiveCampaign returns structured add data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the ActiveCampaign node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "helpText": "What this field is: Contact ID for ActiveCampaign / Update.\nWhere to find it: Open the item in ActiveCampaign and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming ActiveCampaign data with update after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "ActiveCampaign returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the ActiveCampaign node.",
          "fields": [
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "helpText": "What this field is: Contact ID for ActiveCampaign / Delete.\nWhere to find it: Open the item in ActiveCampaign and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.contactId}} or pick the value from the data picker.",
              "placeholder": "contact-id",
              "example": "contact-id"
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
            "scenario": "Process incoming ActiveCampaign data with delete after a related upstream event is received",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "ActiveCampaign returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.activecampaign.com/reference/overview"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the ActiveCampaign node."
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
