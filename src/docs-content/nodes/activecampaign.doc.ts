import type { NodeDoc } from '../types';

export const activecampaignDoc: NodeDoc = {
  "slug": "activecampaign",
  "displayName": "ActiveCampaign",
  "category": "Data",
  "logoUrl": "/icons/nodes/activecampaign.svg",
  "description": "ActiveCampaign marketing automation",
  "credentialType": "ActiveCampaign API Key",
  "credentialSetupSteps": [
    "Log in to ActiveCampaign → Settings → Developer.",
    "Copy the API URL and API Key.",
    "In CtrlChecks, open Connections → Add Connection → ActiveCampaign → paste the API URL and Key → Save."
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
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use ActiveCampaign to add in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes add and exposes its result for downstream nodes."
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
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use ActiveCampaign to update in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
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
              "description": "Contact ID",
              "example": "contact-id",
              "placeholder": "contact-id"
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
            "scenario": "Use ActiveCampaign to delete in a workflow.",
            "inputValues": {
              "Contact Id": "contact-id"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
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
