import type { NodeDoc } from '../types';

export const googleDocDoc: NodeDoc = {
  "slug": "google_doc",
  "displayName": "Google Docs",
  "category": "Data",
  "logoUrl": "/icons/nodes/google_doc.svg",
  "description": "Read or write content in Google Docs documents Use this node when a workflow needs google docs behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Google Docs exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read with the Google Docs node using the configured input fields.",
          "fields": [
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "required": true,
              "description": "Google Docs document ID (extract from URL: /d/DOCUMENT_ID/edit)",
              "example": "1a2b3c4d5e6f7g8h9i0j",
              "placeholder": "1a2b3c4d5e6f7g8h9i0j"
            },
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": false,
              "description": "Full Google Docs URL (alternative to documentId)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Content to write (for write operations)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "text",
              "placeholder": "text",
              "defaultValue": "text"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Docs node.\nstructure: Value returned by the Google Docs node.\nconvertible: Value returned by the Google Docs node.\ndefaultValue: Value returned by the Google Docs node.",
          "usageExample": {
            "scenario": "Use Google Docs in a workflow and pass upstream data into read.",
            "inputValues": {
              "Document Id": "1a2b3c4d5e6f7g8h9i0j",
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}",
              "Format": "text"
            },
            "expectedOutput": "The node runs read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        },
        {
          "name": "Write",
          "value": "write",
          "description": "Write with the Google Docs node using the configured input fields.",
          "fields": [
            {
              "name": "Document Id",
              "internalKey": "documentId",
              "type": "string",
              "required": true,
              "description": "Google Docs document ID (extract from URL: /d/DOCUMENT_ID/edit)",
              "example": "1a2b3c4d5e6f7g8h9i0j",
              "placeholder": "1a2b3c4d5e6f7g8h9i0j"
            },
            {
              "name": "Document Url",
              "internalKey": "documentUrl",
              "type": "url",
              "required": false,
              "description": "Full Google Docs URL (alternative to documentId)",
              "example": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "placeholder": "https://docs.google.com/document/d/DOCUMENT_ID/edit"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Content to write (for write operations)",
              "example": "{{$json.content}}",
              "placeholder": "{{$json.content}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "required": false,
              "description": "Output format for read operations",
              "example": "text",
              "placeholder": "text",
              "defaultValue": "text"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Google Docs node.\nstructure: Value returned by the Google Docs node.\nconvertible: Value returned by the Google Docs node.\ndefaultValue: Value returned by the Google Docs node.",
          "usageExample": {
            "scenario": "Use Google Docs in a workflow and pass upstream data into write.",
            "inputValues": {
              "Document Id": "1a2b3c4d5e6f7g8h9i0j",
              "Document Url": "https://docs.google.com/document/d/DOCUMENT_ID/edit",
              "Content": "{{$json.content}}",
              "Format": "text"
            },
            "expectedOutput": "The node runs write and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/docs/api/reference/rest"
        }
      ]
    }
  ],
  "commonErrors": [
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
