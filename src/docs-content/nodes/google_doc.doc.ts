import type { NodeDoc } from '../types';

export const googleDocDoc: NodeDoc = {
  "slug": "google_doc",
  "displayName": "Google Docs",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_doc.svg",
  "description": "Read, write, create, or append content in Google Docs documents",
  "credentialType": "Google Docs OAuth",
  "credentialSetupSteps": [
    "What this is: Google Docs uses an OAuth connection so CtrlChecks can safely access your Google Docs account.",
    "Open the Google Cloud developer page at: https://console.cloud.google.com/apis/credentials",
    "Create a new app or project and give it a clear name such as \"CtrlChecks\".",
    "Enable the required API or permission scope: Google Docs API: documents.",
    "Create OAuth credentials. The provider will show a Client ID and Client Secret - copy both.",
    "Add this redirect URI exactly: http://localhost:3001/api/oauth/google/callback",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Google Docs -> connect and approve access.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google Docs node and select the saved connection."
  ],
  "credentialDocsUrl": "https://console.cloud.google.com/apis/credentials",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Docs exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read the full content and structure of a Google Doc.",
          "fields": [
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "required": true,
              "description": "Google Docs document ID (extract from URL: /d/DOCUMENT_ID/edit)",
              "helpText": "What this field is: Google Docs document ID (extract from URL: /d/DOCUMENT_ID/edit) for Google Docs / Read.\nWhere to find it: Open the item in Google Docs and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.documentId}} or pick the value from the data picker.",
              "placeholder": "1a2b3c4d5e6f7g8h9i0j",
              "example": "1a2b3c4d5e6f7g8h9i0j"
            },
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": true,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "helpText": "What this field is: Full Google Docs URL — paste the URL from your browser (alternative to Document ID) for Google Docs / Read.\nHow to fill it: Paste the full web address Google Docs should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.documentUrl}} or pick the value from the data picker.",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "required": false,
              "description": "Output format for read operations",
              "helpText": "What this field is: A list of allowed choices for format in Google Docs / Read.\nHow to fill it: Pick the option that matches what Google Docs should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Plain text (text), Markdown (markdown).",
              "placeholder": "text",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "Plain text",
                "Markdown"
              ]
            }
          ],
          "outputExample": {
            "documentId": "abc123",
            "title": "Q4 Report",
            "body": {
              "content": [
                {
                  "paragraph": {
                    "elements": [
                      {
                        "textRun": {
                          "content": "Executive Summary\n"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          "outputDescription": "documentId: The Google Doc ID. title: Document title. body.content: Array of structural content elements.",
          "usageExample": {
            "scenario": "Read a Google Doc template to use as an email body",
            "inputValues": {
              "documentId": "{{$json.docId}}"
            },
            "expectedOutput": "Returns the full document structure. Extract text from `body.content` to use in downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        },
        {
          "name": "Write",
          "value": "write",
          "description": "Write using the Google Docs node.",
          "fields": [
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": true,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "helpText": "What this field is: Full Google Docs URL — paste the URL from your browser (alternative to Document ID) for Google Docs / Write.\nHow to fill it: Paste the full web address Google Docs should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.documentUrl}} or pick the value from the data picker.",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": true,
              "description": "Content to write into the document (for write, create, append)",
              "helpText": "What this field is: Content to write into the document (for write, create, append) for Google Docs / Write.\nHow to fill it: Type the message, prompt, or content you want Google Docs to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.content}}",
              "example": "{{$json.content}}"
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
            "scenario": "Process incoming Google Docs data with write after a related upstream event is received",
            "inputValues": {
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}"
            },
            "expectedOutput": "Google Docs returns structured write data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new Google Doc with a title and optional body content.",
          "fields": [
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Document title for the new document",
              "helpText": "What this field is: Document title for the new document for Google Docs / Create.\nHow to fill it: Enter the title value requested by Google Docs, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "My Document",
              "example": "My Document"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": true,
              "description": "Content to write into the document (for write, create, append)",
              "helpText": "What this field is: Content to write into the document (for write, create, append) for Google Docs / Create.\nHow to fill it: Type the message, prompt, or content you want Google Docs to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.content}}",
              "example": "{{$json.content}}"
            }
          ],
          "outputExample": {
            "documentId": "newDoc123",
            "title": "Meeting Notes — 2025-01-15",
            "revisionId": "ABC123"
          },
          "outputDescription": "documentId: The ID of the newly created document. title: The document title. revisionId: The initial revision ID.",
          "usageExample": {
            "scenario": "Auto-create a meeting notes document for each calendar event",
            "inputValues": {
              "title": "Meeting Notes — {{$json.eventTitle}} — {{$json.date}}",
              "content": "Attendees: {{$json.attendees}}\nAgenda: {{$json.agenda}}"
            },
            "expectedOutput": "New doc is created in Google Drive. Use `{{$json.documentId}}` to share a link: https://docs.google.com/document/d/{{$json.documentId}}"
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        },
        {
          "name": "Append",
          "value": "append",
          "description": "Append using the Google Docs node.",
          "fields": [
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": true,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "helpText": "What this field is: Full Google Docs URL — paste the URL from your browser (alternative to Document ID) for Google Docs / Append.\nHow to fill it: Paste the full web address Google Docs should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.documentUrl}} or pick the value from the data picker.",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": true,
              "description": "Content to write into the document (for write, create, append)",
              "helpText": "What this field is: Content to write into the document (for write, create, append) for Google Docs / Append.\nHow to fill it: Type the message, prompt, or content you want Google Docs to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.content}}",
              "example": "{{$json.content}}"
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
            "scenario": "Process incoming Google Docs data with append after a related upstream event is received",
            "inputValues": {
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}"
            },
            "expectedOutput": "Google Docs returns structured append data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Google Docs node."
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
