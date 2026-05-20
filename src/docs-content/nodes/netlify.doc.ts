import type { NodeDoc } from '../types';

export const netlifyDoc: NodeDoc = {
  "slug": "netlify",
  "displayName": "Netlify",
  "category": "Data",
  "logoUrl": "/icons/nodes/netlify.svg",
  "description": "Deploy sites, manage builds, and query site/deploy data through the Netlify REST API.",
  "credentialType": "Netlify API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.netlify.com/api/get-started/",
  "resources": [
    {
      "name": "Operations",
      "description": "Netlify exposes operation choices directly.",
      "operations": [
        {
          "name": "List sites",
          "value": "list_sites",
          "description": "List sites using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Netlify Personal Access Token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "example": "sites",
              "placeholder": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "description": "Site ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "description": "Deploy ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create_deploy",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records to return",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Netlify to list sites in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes list sites and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get site",
          "value": "get_site",
          "description": "Get site using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Netlify Personal Access Token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "example": "sites",
              "placeholder": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "description": "Site ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "description": "Deploy ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create_deploy",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records to return",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Netlify to get site in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes get site and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Create deploy",
          "value": "create_deploy",
          "description": "Create deploy using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Netlify Personal Access Token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "example": "sites",
              "placeholder": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "description": "Site ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "description": "Deploy ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create_deploy",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records to return",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Netlify to create deploy in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes create deploy and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "List deploys",
          "value": "list_deploys",
          "description": "List deploys using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Netlify Personal Access Token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "example": "sites",
              "placeholder": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "description": "Site ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "description": "Deploy ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create_deploy",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records to return",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Netlify to list deploys in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes list deploys and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        },
        {
          "name": "Get deploy",
          "value": "get_deploy",
          "description": "Get deploy using the Netlify node.",
          "fields": [
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Netlify Personal Access Token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "select",
              "required": true,
              "description": "Netlify resource",
              "example": "sites",
              "placeholder": "sites",
              "defaultValue": "sites",
              "options": [
                "Sites",
                "Deploys",
                "Forms"
              ]
            },
            {
              "name": "Site Id",
              "internalKey": "siteId",
              "type": "string",
              "description": "Site ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Deploy Id",
              "internalKey": "deployId",
              "type": "string",
              "description": "Deploy ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Payload",
              "internalKey": "payload",
              "type": "json",
              "description": "Request body for create_deploy",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Max records to return",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Netlify to get deploy in a workflow.",
            "inputValues": {
              "Access Token": "",
              "Resource": "sites",
              "Site Id": "abc123",
              "Deploy Id": "abc123",
              "Payload": "{}"
            },
            "expectedOutput": "The node executes get deploy and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.netlify.com/api/get-started/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Netlify node."
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
