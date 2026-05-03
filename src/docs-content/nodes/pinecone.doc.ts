import type { NodeDoc } from '../types';

export const pineconeDoc: NodeDoc = {
  "slug": "pinecone",
  "displayName": "Pinecone",
  "category": "Data",
  "logoUrl": "/icons/nodes/pinecone.svg",
  "description": "Upsert, query, and delete vectors in a Pinecone vector database index. Use this node when a workflow needs pinecone behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Api Key Credential",
  "credentialSetupSteps": [
    "Open the Pinecone developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Api Key Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.pinecone.io/reference/api/introduction",
  "resources": [
    {
      "name": "Operations",
      "description": "Pinecone exposes operation choices directly.",
      "operations": [
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert with the Pinecone node using the configured input fields.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "example": "{{ $json.index }}",
              "defaultValue": ""
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "example": "{{ $json.id }}",
              "defaultValue": ""
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "example": "{{ $json.namespace }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "pinecone"
          },
          "outputDescription": "success: Indicates that the Pinecone node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Pinecone in a workflow and pass upstream data into upsert.",
            "inputValues": {
              "Index": "{{ $json.index }}",
              "Api Key": "{{ $json.apiKey }}",
              "Vector": "[]",
              "Top K": "5",
              "Id": "{{ $json.id }}",
              "Metadata": "{}",
              "Namespace": "{{ $json.namespace }}"
            },
            "expectedOutput": "The node runs upsert and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Pinecone node using the configured input fields.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "example": "{{ $json.index }}",
              "defaultValue": ""
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "example": "{{ $json.id }}",
              "defaultValue": ""
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "example": "{{ $json.namespace }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "pinecone"
          },
          "outputDescription": "success: Indicates that the Pinecone node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Pinecone in a workflow and pass upstream data into query.",
            "inputValues": {
              "Index": "{{ $json.index }}",
              "Api Key": "{{ $json.apiKey }}",
              "Vector": "[]",
              "Top K": "5",
              "Id": "{{ $json.id }}",
              "Metadata": "{}",
              "Namespace": "{{ $json.namespace }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Pinecone node using the configured input fields.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL",
              "example": "{{ $json.index }}",
              "defaultValue": ""
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Pinecone API key",
              "example": "{{ $json.apiKey }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "required": false,
              "description": "Embedding array of floats",
              "example": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "required": false,
              "description": "Nearest-neighbor results count",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Vector ID",
              "example": "{{ $json.id }}",
              "defaultValue": ""
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "required": false,
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "required": false,
              "description": "Pinecone namespace",
              "example": "{{ $json.namespace }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "pinecone"
          },
          "outputDescription": "success: Indicates that the Pinecone node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Pinecone in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Index": "{{ $json.index }}",
              "Api Key": "{{ $json.apiKey }}",
              "Vector": "[]",
              "Top K": "5",
              "Id": "{{ $json.id }}",
              "Metadata": "{}",
              "Namespace": "{{ $json.namespace }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
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
