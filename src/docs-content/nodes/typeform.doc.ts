import type { NodeDoc } from '../types';

export const typeformDoc: NodeDoc = {
  "slug": "typeform",
  "displayName": "Typeform",
  "category": "Data",
  "logoUrl": "/icons/nodes/typeform.svg",
  "description": "Retrieve form responses, create forms, and fetch form definitions using Typeform.",
  "credentialType": "Typeform API Key",
  "credentialSetupSteps": [
    "What this is: Typeform uses an API key or account connection so CtrlChecks can safely access your Typeform account.",
    "Log in to your Typeform account at typeform.com.",
    "Click your profile photo (top right) -> Settings -> Personal tokens.",
    "Click \"Generate a new token\" -> give it a name (e.g. CtrlChecks) -> Generate token.",
    "Copy the token shown - it is only displayed once.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Typeform -> paste the token -> Save.",
    "Run a test step (e.g. list your forms) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Typeform node and select the saved connection."
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
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Typeform.\nWhere to get it: Open the Typeform dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "helpText": "What this field is: The unique ID of your Typeform.\nWhere to find it: Open the form in Typeform → the ID is in the URL after /forms/.\nExample: If URL is typeform.com/to/FORM_ID, enter FORM_ID.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "helpText": "What this field is: Form title (for create_form) for Typeform / Get responses.\nHow to fill it: Enter the title value requested by Typeform, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_responses",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Typeform data with get responses after a related upstream event is received",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "Typeform returns structured get responses data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Typeform.\nWhere to get it: Open the Typeform dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "helpText": "What this field is: The unique ID of your Typeform.\nWhere to find it: Open the form in Typeform → the ID is in the URL after /forms/.\nExample: If URL is typeform.com/to/FORM_ID, enter FORM_ID.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "helpText": "What this field is: Form title (for create_form) for Typeform / Create form.\nHow to fill it: Enter the title value requested by Typeform, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create_form",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Typeform data with create form after a related upstream event is received",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "Typeform returns structured create form data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Typeform.\nWhere to get it: Open the Typeform dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Form Id",
              "internalKey": "formId",
              "type": "string",
              "required": false,
              "description": "Form ID",
              "helpText": "What this field is: The unique ID of your Typeform.\nWhere to find it: Open the form in Typeform → the ID is in the URL after /forms/.\nExample: If URL is typeform.com/to/FORM_ID, enter FORM_ID.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Form title (for create_form)",
              "helpText": "What this field is: Form title (for create_form) for Typeform / Get form.\nHow to fill it: Enter the title value requested by Typeform, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_form",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Typeform data with get form after a related upstream event is received",
            "inputValues": {
              "Api Key": "",
              "Form Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "Typeform returns structured get form data that downstream nodes can reference with {{$json.fieldName}}."
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
