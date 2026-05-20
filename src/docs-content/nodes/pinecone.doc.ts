import type { NodeDoc } from '../types';

export const pineconeDoc: NodeDoc = {
  "slug": "pinecone",
  "displayName": "Pinecone",
  "category": "Data",
  "logoUrl": "/icons/nodes/pinecone.svg",
  "description": "Upsert, query, and delete vectors in a Pinecone vector database index.",
  "credentialType": "Pinecone API Key",
  "credentialSetupSteps": [
    "Log in to https://app.pinecone.io → API Keys → \"Create API Key\".",
    "Give it a name and copy the key.",
    "In CtrlChecks, open Connections → Add Connection → Pinecone → paste the key and enter your environment (e.g. us-east-1-aws) → Save."
  ],
  "credentialDocsUrl": "https://docs.pinecone.io/guides/getting-started/quickstart",
  "resources": [
    {
      "name": "Operations",
      "description": "Pinecone exposes operation choices directly.",
      "operations": [
        {
          "name": "Upsert",
          "value": "upsert",
          "description": "Upsert using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Pinecone API key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "description": "Embedding array of floats",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "description": "Nearest-neighbor results count",
              "example": "5",
              "placeholder": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Vector ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "description": "Pinecone namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Pinecone to upsert in a workflow.",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "The node executes upsert and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Pinecone API key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "description": "Embedding array of floats",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "description": "Nearest-neighbor results count",
              "example": "5",
              "placeholder": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Vector ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "description": "Pinecone namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Pinecone to query in a workflow.",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "The node executes query and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Pinecone node.",
          "fields": [
            {
              "name": "Index",
              "internalKey": "index",
              "type": "string",
              "required": true,
              "description": "Pinecone index name or host URL"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Pinecone API key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Vector",
              "internalKey": "vector",
              "type": "json",
              "description": "Embedding array of floats",
              "example": "[]",
              "placeholder": "[]",
              "defaultValue": "[]"
            },
            {
              "name": "Top K",
              "internalKey": "topK",
              "type": "number",
              "description": "Nearest-neighbor results count",
              "example": "5",
              "placeholder": "5",
              "defaultValue": "5"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Vector ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Metadata",
              "internalKey": "metadata",
              "type": "json",
              "description": "Key-value metadata for upsert",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Namespace",
              "internalKey": "namespace",
              "type": "string",
              "description": "Pinecone namespace"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Pinecone to delete in a workflow.",
            "inputValues": {
              "Index": "",
              "Api Key": "",
              "Vector": "[]",
              "Top K": "5",
              "Id": "abc123"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.pinecone.io/reference/api/introduction"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Pinecone node."
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
