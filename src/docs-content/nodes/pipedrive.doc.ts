import type { NodeDoc } from '../types';

export const pipedriveDoc: NodeDoc = {
  "slug": "pipedrive",
  "displayName": "Pipedrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/pipedrive.svg",
  "description": "Pipedrive CRM operations - manage deals, persons, organizations, and activities",
  "credentialType": "Pipedrive API Key",
  "credentialSetupSteps": [
    "Log in to Pipedrive → click your avatar (top right) → Personal Preferences → API.",
    "Copy the API token.",
    "In CtrlChecks, open Connections → Add Connection → Pipedrive → paste the API token → Save."
  ],
  "credentialDocsUrl": "https://developers.pipedrive.com/docs/api/v1",
  "resources": [
    {
      "name": "Operations",
      "description": "Pipedrive exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "example": "deals",
              "placeholder": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Resource data for create/update",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Use Pipedrive to get in a workflow.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "The node executes get and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "example": "deals",
              "placeholder": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Resource data for create/update",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Use Pipedrive to create in a workflow.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "example": "deals",
              "placeholder": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Resource data for create/update",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Use Pipedrive to update in a workflow.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "example": "deals",
              "placeholder": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Resource data for create/update",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Use Pipedrive to delete in a workflow.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search using the Pipedrive node.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "string",
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Pipedrive resource: deals, persons, organizations, activities",
              "example": "deals",
              "placeholder": "deals",
              "defaultValue": "deals"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "description": "Resource data for create/update",
              "example": "{\"title\":\"Deal Title\",\"value\":1000}",
              "placeholder": "{\"title\":\"Deal Title\",\"value\":1000}"
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
            "scenario": "Use Pipedrive to search in a workflow.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Resource": "deals",
              "Id": "123",
              "Data": "{\"title\":\"Deal Title\",\"value\":1000}"
            },
            "expectedOutput": "The node executes search and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Pipedrive node."
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
