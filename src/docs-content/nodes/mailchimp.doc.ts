import type { NodeDoc } from '../types';

export const mailchimpDoc: NodeDoc = {
  "slug": "mailchimp",
  "displayName": "Mailchimp",
  "category": "Data",
  "logoUrl": "/icons/nodes/mailchimp.svg",
  "description": "Mailchimp email marketing operations",
  "credentialType": "Mailchimp API Key",
  "credentialSetupSteps": [
    "What this is: Mailchimp uses an API key or account connection so CtrlChecks can safely access your Mailchimp account.",
    "Log in to your Mailchimp account at mailchimp.com.",
    "Click your profile name (bottom left) -> Account & billing -> Extras -> API keys.",
    "Click \"Create A Key\" -> give it a name (e.g. CtrlChecks) -> Generate Key.",
    "Copy the API key shown - it ends with a datacenter code like -us21.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Mailchimp -> paste the API key -> Save.",
    "Run a test step (e.g. list your audiences) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Mailchimp node and select the saved connection."
  ],
  "credentialDocsUrl": "https://mailchimp.com/developer/marketing/guides/quick-start/",
  "resources": [
    {
      "name": "Operations",
      "description": "Mailchimp exposes operation choices directly.",
      "operations": [
        {
          "name": "Subscribe",
          "value": "subscribe",
          "description": "Subscribe using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "helpText": "What this field is: Mailchimp list ID for Mailchimp / Subscribe.\nWhere to find it: Open the item in Mailchimp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "list-id",
              "example": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "helpText": "What this field is: The email address that Mailchimp should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "{{$json.email}}",
              "example": "{{$json.email}}"
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
            "scenario": "Process incoming Mailchimp data with subscribe after a related upstream event is received",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "Mailchimp returns structured subscribe data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Unsubscribe",
          "value": "unsubscribe",
          "description": "Unsubscribe using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "helpText": "What this field is: Mailchimp list ID for Mailchimp / Unsubscribe.\nWhere to find it: Open the item in Mailchimp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "list-id",
              "example": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "helpText": "What this field is: The email address that Mailchimp should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "{{$json.email}}",
              "example": "{{$json.email}}"
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
            "scenario": "Process incoming Mailchimp data with unsubscribe after a related upstream event is received",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "Mailchimp returns structured unsubscribe data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        },
        {
          "name": "Send",
          "value": "send",
          "description": "Send using the Mailchimp node.",
          "fields": [
            {
              "name": "List Id",
              "internalKey": "listId",
              "type": "string",
              "required": false,
              "description": "Mailchimp list ID",
              "helpText": "What this field is: Mailchimp list ID for Mailchimp / Send.\nWhere to find it: Open the item in Mailchimp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.listId}} or pick the value from the data picker.",
              "placeholder": "list-id",
              "example": "list-id"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Email address",
              "helpText": "What this field is: The email address that Mailchimp should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "{{$json.email}}",
              "example": "{{$json.email}}"
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
            "scenario": "Process incoming Mailchimp data with send after a related upstream event is received",
            "inputValues": {
              "List Id": "list-id",
              "Email": "{{$json.email}}"
            },
            "expectedOutput": "Mailchimp returns structured send data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://mailchimp.com/developer/marketing/api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Mailchimp node."
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
