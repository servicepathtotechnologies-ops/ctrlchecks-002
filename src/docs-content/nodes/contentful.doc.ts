import type { NodeDoc } from '../types';

export const contentfulDoc: NodeDoc = {
  "slug": "contentful",
  "displayName": "Contentful",
  "category": "Data",
  "logoUrl": "/icons/nodes/contentful.svg",
  "description": "Create, read, update, and delete content entries on any Contentful space. Use this node when a workflow needs contentful behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Access Token Credential",
  "credentialSetupSteps": [
    "Open the Contentful developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Access Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Contentful exposes operation choices directly.",
      "operations": [
        {
          "name": "Get Entries",
          "value": "get_entries",
          "description": "Get Entries with the Contentful node using the configured input fields.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "{{ $json.spaceId }}",
              "defaultValue": ""
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Contentful CMA personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "string",
              "required": false,
              "description": "Content type ID",
              "example": "{{ $json.contentType }}",
              "defaultValue": ""
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "example": "{{ $json.entryId }}",
              "defaultValue": ""
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "example": "{{ $json.fields }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "contentful"
          },
          "outputDescription": "success: Indicates that the Contentful node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Contentful in a workflow and pass upstream data into get entries.",
            "inputValues": {
              "Space Id": "{{ $json.spaceId }}",
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "master",
              "Content Type": "{{ $json.contentType }}",
              "Entry Id": "{{ $json.entryId }}",
              "Fields": "{{ $json.fields }}"
            },
            "expectedOutput": "The node runs get entries and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Get Entry",
          "value": "get_entry",
          "description": "Get Entry with the Contentful node using the configured input fields.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "{{ $json.spaceId }}",
              "defaultValue": ""
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Contentful CMA personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "string",
              "required": false,
              "description": "Content type ID",
              "example": "{{ $json.contentType }}",
              "defaultValue": ""
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "example": "{{ $json.entryId }}",
              "defaultValue": ""
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "example": "{{ $json.fields }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "contentful"
          },
          "outputDescription": "success: Indicates that the Contentful node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Contentful in a workflow and pass upstream data into get entry.",
            "inputValues": {
              "Space Id": "{{ $json.spaceId }}",
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "master",
              "Content Type": "{{ $json.contentType }}",
              "Entry Id": "{{ $json.entryId }}",
              "Fields": "{{ $json.fields }}"
            },
            "expectedOutput": "The node runs get entry and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Create Entry",
          "value": "create_entry",
          "description": "Create Entry with the Contentful node using the configured input fields.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "{{ $json.spaceId }}",
              "defaultValue": ""
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Contentful CMA personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "string",
              "required": false,
              "description": "Content type ID",
              "example": "{{ $json.contentType }}",
              "defaultValue": ""
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "example": "{{ $json.entryId }}",
              "defaultValue": ""
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "example": "{{ $json.fields }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "contentful"
          },
          "outputDescription": "success: Indicates that the Contentful node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Contentful in a workflow and pass upstream data into create entry.",
            "inputValues": {
              "Space Id": "{{ $json.spaceId }}",
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "master",
              "Content Type": "{{ $json.contentType }}",
              "Entry Id": "{{ $json.entryId }}",
              "Fields": "{{ $json.fields }}"
            },
            "expectedOutput": "The node runs create entry and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Update Entry",
          "value": "update_entry",
          "description": "Update Entry with the Contentful node using the configured input fields.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "{{ $json.spaceId }}",
              "defaultValue": ""
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Contentful CMA personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "string",
              "required": false,
              "description": "Content type ID",
              "example": "{{ $json.contentType }}",
              "defaultValue": ""
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "example": "{{ $json.entryId }}",
              "defaultValue": ""
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "example": "{{ $json.fields }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "contentful"
          },
          "outputDescription": "success: Indicates that the Contentful node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Contentful in a workflow and pass upstream data into update entry.",
            "inputValues": {
              "Space Id": "{{ $json.spaceId }}",
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "master",
              "Content Type": "{{ $json.contentType }}",
              "Entry Id": "{{ $json.entryId }}",
              "Fields": "{{ $json.fields }}"
            },
            "expectedOutput": "The node runs update entry and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
        },
        {
          "name": "Delete Entry",
          "value": "delete_entry",
          "description": "Delete Entry with the Contentful node using the configured input fields.",
          "fields": [
            {
              "name": "Space Id",
              "internalKey": "spaceId",
              "type": "string",
              "required": true,
              "description": "Contentful space ID",
              "example": "{{ $json.spaceId }}",
              "defaultValue": ""
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": true,
              "description": "Contentful CMA personal access token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Environment",
              "internalKey": "environment",
              "type": "string",
              "required": false,
              "description": "Contentful environment",
              "example": "master",
              "defaultValue": "master"
            },
            {
              "name": "Content Type",
              "internalKey": "contentType",
              "type": "string",
              "required": false,
              "description": "Content type ID",
              "example": "{{ $json.contentType }}",
              "defaultValue": ""
            },
            {
              "name": "Entry Id",
              "internalKey": "entryId",
              "type": "string",
              "required": false,
              "description": "Entry ID",
              "example": "{{ $json.entryId }}",
              "defaultValue": ""
            },
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": false,
              "description": "JSON string of entry fields",
              "example": "{{ $json.fields }}",
              "defaultValue": ""
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "contentful"
          },
          "outputDescription": "success: Indicates that the Contentful node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Contentful in a workflow and pass upstream data into delete entry.",
            "inputValues": {
              "Space Id": "{{ $json.spaceId }}",
              "Access Token": "{{ $json.accessToken }}",
              "Environment": "master",
              "Content Type": "{{ $json.contentType }}",
              "Entry Id": "{{ $json.entryId }}",
              "Fields": "{{ $json.fields }}"
            },
            "expectedOutput": "The node runs delete entry and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://www.contentful.com/developers/docs/references/content-management-api/"
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
