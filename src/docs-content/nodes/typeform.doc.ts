import type { NodeDoc } from '../types';

export const typeformDoc: NodeDoc = {
  "slug": "typeform",
  "displayName": "Typeform",
  "category": "Data",
  "logoUrl": "/icons/nodes/typeform.svg",
  "description": "Retrieve form responses, create forms, and fetch form definitions using Typeform. Use this node when a workflow needs typeform behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Api Key Credential",
  "credentialSetupSteps": [
    "Open the Typeform developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Api Key Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.typeform.com/developers/",
  "resources": [
    {
      "name": "Operations",
      "description": "Typeform exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Responses",
          "value": "get_responses",
          "description": "Get Responses with the Typeform node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "example": "{{ $json.formId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "typeform"
          },
          "outputDescription": "success: Indicates that the Typeform node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Typeform in a workflow and pass upstream data into get responses.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Form Id": "{{ $json.formId }}",
              "Title": "{{ $json.title }}"
            },
            "expectedOutput": "The node runs get responses and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
        },
        {
          "name": "Create Form",
          "value": "create_form",
          "description": "Create Form with the Typeform node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "example": "{{ $json.formId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "typeform"
          },
          "outputDescription": "success: Indicates that the Typeform node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Typeform in a workflow and pass upstream data into create form.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Form Id": "{{ $json.formId }}",
              "Title": "{{ $json.title }}"
            },
            "expectedOutput": "The node runs create form and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
        },
        {
          "name": "Get Form",
          "value": "get_form",
          "description": "Get Form with the Typeform node using the configured input fields.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": true,
              "description": "Typeform personal access token",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "example": "{{ $json.formId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "typeform"
          },
          "outputDescription": "success: Indicates that the Typeform node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Typeform in a workflow and pass upstream data into get form.",
            "inputValues": {
              "Api Key": "{{ $json.apiKey }}",
              "Form Id": "{{ $json.formId }}",
              "Title": "{{ $json.title }}"
            },
            "expectedOutput": "The node runs get form and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.typeform.com/developers/"
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
