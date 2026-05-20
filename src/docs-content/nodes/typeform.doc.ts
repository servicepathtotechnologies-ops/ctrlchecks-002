import type { NodeDoc } from '../types';

export const typeformDoc: NodeDoc = {
  "slug": "typeform",
  "displayName": "Typeform",
  "category": "Data",
  "logoUrl": "/icons/nodes/typeform.svg",
  "description": "Retrieve form responses, create forms, and fetch form definitions using Typeform.",
  "credentialType": "Typeform API Key",
  "credentialSetupSteps": [
    "Log in to Typeform → click your profile → Settings → Personal tokens.",
    "Click \"Generate a new token\", give it a name, and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Typeform → paste the token → Save."
  ],
  "credentialDocsUrl": "https://developer.typeform.com/get-started/personal-access-token/",
  "resources": [
    {
      "name": "Operations",
      "description": "Typeform exposes operation choices directly.",
      "operations": [
        {
          "name": "Get responses",
          "value": "get_responses",
          "description": "Get responses using the Typeform node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "description": "Form ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Form title (for create_form)"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Typeform to get responses in a workflow.",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes get responses and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
        },
        {
          "name": "Create form",
          "value": "create_form",
          "description": "Create form using the Typeform node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "description": "Form ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Form title (for create_form)"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Typeform to create form in a workflow.",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes create form and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
        },
        {
          "name": "Get form",
          "value": "get_form",
          "description": "Get form using the Typeform node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "description": "Form ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Form title (for create_form)"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Typeform to get form in a workflow.",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes get form and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Typeform node."
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
