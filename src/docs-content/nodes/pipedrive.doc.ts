import type { NodeDoc } from '../types';

export const pipedriveDoc: NodeDoc = {
  "slug": "pipedrive",
  "displayName": "Pipedrive",
  "category": "Data",
  "logoUrl": "/icons/nodes/pipedrive.svg",
  "description": "Pipedrive CRM operations - manage deals, persons, organizations, and activities Use this node when a workflow needs pipedrive behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Pipedrive Token, Pipedrive Credential",
  "credentialSetupSteps": [
    "Open the Pipedrive developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Pipedrive Token, Pipedrive Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.pipedrive.com/docs/api/v1",
  "resources": [
    {
      "name": "Deals",
      "description": "Deals is a Pipedrive resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        }
      ]
    },
    {
      "name": "Persons",
      "description": "Persons is a Pipedrive resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        }
      ]
    },
    {
      "name": "Organizations",
      "description": "Organizations is a Pipedrive resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        }
      ]
    },
    {
      "name": "Activities",
      "description": "Activities is a Pipedrive resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into get.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into create.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into update.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Pipedrive node using the configured input fields.",
          "fields": [
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": false,
              "description": "Pipedrive API token (required for authentication)",
              "example": "your-pipedrive-api-token",
              "placeholder": "your-pipedrive-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored Pipedrive credentials",
              "example": "cred_123",
              "placeholder": "cred_123"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (required for get, update, delete)",
              "example": "123",
              "placeholder": "123"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Resource data for create/update",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Pipedrive node.\nstructure: Value returned by the Pipedrive node.\nconvertible: Value returned by the Pipedrive node.\ndefaultValue: Value returned by the Pipedrive node.",
          "usageExample": {
            "scenario": "Use Pipedrive in a workflow and pass upstream data into search.",
            "inputValues": {
              "Api Token": "your-pipedrive-api-token",
              "Credential Id": "cred_123",
              "Id": "123",
              "Data": "[object Object]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.pipedrive.com/docs/api/v1"
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
