import type { NodeDoc } from '../types';

export const googleDocDoc: NodeDoc = {
  "slug": "google_doc",
  "displayName": "Google Docs",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_doc.svg",
  "description": "Read, write, create, or append content in Google Docs documents",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
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
              "required": false,
              "description": "Google Docs document ID (extract from URL: /d/DOCUMENT_ID/edit)",
              "example": "1a2b3c4d5e6f7g8h9i0j",
              "placeholder": "1a2b3c4d5e6f7g8h9i0j"
            },
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": false,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Content to write into the document (for write, create, append)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "select",
              "description": "Output format for read operations",
              "example": "text",
              "placeholder": "text",
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
              "required": false,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Content to write into the document (for write, create, append)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
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
            "scenario": "Use Google Docs to write in a workflow.",
            "inputValues": {
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}"
            },
            "expectedOutput": "The node executes write and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create a new Google Doc with a title and optional body content.",
          "fields": [
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": false,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Document title for the new document",
              "example": "My Document",
              "placeholder": "My Document"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Content to write into the document (for write, create, append)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
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
              "required": false,
              "description": "Full Google Docs URL — paste the URL from your browser (alternative to Document ID)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Content to write into the document (for write, create, append)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
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
            "scenario": "Use Google Docs to append in a workflow.",
            "inputValues": {
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}"
            },
            "expectedOutput": "The node executes append and exposes its result for downstream nodes."
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
