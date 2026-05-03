import type { NodeDoc } from '../types';

export const netlifyDoc: NodeDoc = {
  "slug": "netlify",
  "displayName": "Netlify",
  "category": "Data",
  "logoUrl": "/icons/nodes/netlify.svg",
  "description": "Deploy sites, manage builds, and query site/deploy data through the Netlify REST API. Use this node when a workflow needs netlify behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Access Token Credential",
  "credentialSetupSteps": [
    "Open the Netlify developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Access Token Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.netlify.com/api/get-started/",
  "resources": [
    {
      "name": "Sites",
      "description": "Sites is a Netlify resource available in this node.",
      "operations": [
        {
          "name": "List Sites",
          "value": "list_sites",
          "description": "List Sites with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list sites.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list sites and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Site",
          "value": "get_site",
          "description": "Get Site with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get site.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get site and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Create Deploy",
          "value": "create_deploy",
          "description": "Create Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into create deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs create deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "List Deploys",
          "value": "list_deploys",
          "description": "List Deploys with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list deploys.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list deploys and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Deploy",
          "value": "get_deploy",
          "description": "Get Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        }
      ]
    },
    {
      "name": "Deploys",
      "description": "Deploys is a Netlify resource available in this node.",
      "operations": [
        {
          "name": "List Sites",
          "value": "list_sites",
          "description": "List Sites with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list sites.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list sites and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Site",
          "value": "get_site",
          "description": "Get Site with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get site.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get site and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Create Deploy",
          "value": "create_deploy",
          "description": "Create Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into create deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs create deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "List Deploys",
          "value": "list_deploys",
          "description": "List Deploys with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list deploys.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list deploys and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Deploy",
          "value": "get_deploy",
          "description": "Get Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        }
      ]
    },
    {
      "name": "Forms",
      "description": "Forms is a Netlify resource available in this node.",
      "operations": [
        {
          "name": "List Sites",
          "value": "list_sites",
          "description": "List Sites with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list sites.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list sites and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Site",
          "value": "get_site",
          "description": "Get Site with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get site.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get site and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Create Deploy",
          "value": "create_deploy",
          "description": "Create Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into create deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs create deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "List Deploys",
          "value": "list_deploys",
          "description": "List Deploys with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into list deploys.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs list deploys and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get Deploy",
          "value": "get_deploy",
          "description": "Get Deploy with the Netlify node using the configured input fields.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "Netlify Personal Access Token",
              "example": "{{ $json.accessToken }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "required": false,
              "description": "Site ID",
              "example": "{{ $json.siteId }}",
              "defaultValue": ""
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "required": false,
              "description": "Deploy ID",
              "example": "{{ $json.deployId }}",
              "defaultValue": ""
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "required": false,
              "description": "Request body for create_deploy",
              "example": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max records to return",
              "example": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "netlify"
          },
          "outputDescription": "success: Indicates that the Netlify node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Netlify in a workflow and pass upstream data into get deploy.",
            "inputValues": {
              "Access Token": "{{ $json.accessToken }}",
              "Site Id": "{{ $json.siteId }}",
              "Deploy Id": "{{ $json.deployId }}",
              "Payload": "{}",
              "Limit": "25"
            },
            "expectedOutput": "The node runs get deploy and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
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
