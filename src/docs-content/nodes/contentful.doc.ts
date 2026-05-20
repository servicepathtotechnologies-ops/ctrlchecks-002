import type { NodeDoc } from '../types';

export const contentfulDoc: NodeDoc = {
  "slug": "contentful",
  "displayName": "Contentful",
  "category": "Data",
  "logoUrl": "/icons/nodes/contentful.svg",
  "description": "Create, read, update, and delete content entries on any Contentful space.",
  "credentialType": "Contentful API Key",
  "credentialSetupSteps": [
    "In Contentful, go to Settings → API keys → Add API key.",
    "Give it a name and note the Space ID and Content Delivery API (or Content Management API) access token.",
    "In CtrlChecks, open Connections → Add Connection → Contentful → paste the Space ID and token → Save."
  ],
  "credentialDocsUrl": "https://www.contentful.com/developers/docs/references/authentication/",
  "resources": [
    {
      "name": "Operations",
      "description": "Contentful exposes operation choices directly.",
      "operations": [
        {
          "name": "Get entries",
          "value": "get_entries",
          "description": "Get entries using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "Contentful environment",
              "example": "master",
              "placeholder": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "description": "Content type ID"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "description": "Entry ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "description": "JSON string of entry fields"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Contentful to get entries in a workflow.",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "The node executes get entries and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Get entry",
          "value": "get_entry",
          "description": "Get entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "Contentful environment",
              "example": "master",
              "placeholder": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "description": "Content type ID"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "description": "Entry ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "description": "JSON string of entry fields"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Contentful to get entry in a workflow.",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "The node executes get entry and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Create entry",
          "value": "create_entry",
          "description": "Create entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "Contentful environment",
              "example": "master",
              "placeholder": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "description": "Content type ID"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "description": "Entry ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "description": "JSON string of entry fields"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Contentful to create entry in a workflow.",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "The node executes create entry and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Update entry",
          "value": "update_entry",
          "description": "Update entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "Contentful environment",
              "example": "master",
              "placeholder": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "description": "Content type ID"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "description": "Entry ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "description": "JSON string of entry fields"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Contentful to update entry in a workflow.",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "The node executes update entry and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Delete entry",
          "value": "delete_entry",
          "description": "Delete entry using the Contentful node.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": true,
              "description": "Contentful CMA personal access token"
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "description": "Contentful environment",
              "example": "master",
              "placeholder": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "textarea",
              "description": "Content type ID"
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "description": "Entry ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "description": "JSON string of entry fields"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Contentful to delete entry in a workflow.",
            "inputValues": {
              "Space Id": "abc123",
              "Access Token": "",
              "Environment": "master",
              "Content Type": "",
              "Entry Id": "abc123"
            },
            "expectedOutput": "The node executes delete entry and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Contentful node."
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
