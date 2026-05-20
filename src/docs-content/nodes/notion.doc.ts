import type { NodeDoc } from '../types';

export const notionDoc: NodeDoc = {
  "slug": "notion",
  "displayName": "Notion",
  "category": "Data",
  "logoUrl": "/icons/nodes/notion.svg",
  "description": "Read, write, update, or delete pages, databases, and blocks in Notion",
  "credentialType": "Notion API Key",
  "credentialSetupSteps": [
    "Go to https://www.notion.so/my-integrations → click \"+ New integration\".",
    "Give it a name and select the workspace. Under capabilities, enable what you need (read/write content, read user info).",
    "Click \"Submit\" and copy the Internal Integration Token (starts with secret_).",
    "In each Notion database you want to access: click the ⋯ menu → Connections → add your integration.",
    "In CtrlChecks, open Connections → Add Connection → Notion → paste the Integration Token → Save."
  ],
  "credentialDocsUrl": "https://developers.notion.com/docs/getting-started",
  "resources": [
    {
      "name": "Operations",
      "description": "Notion exposes operation choices directly.",
      "operations": [
        {
          "name": "Read",
          "value": "read",
          "description": "Read using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Notion API key (required for authentication)",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Notion OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "example": "page",
              "placeholder": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "description": "Notion Page ID (for get, update, archive, restore)",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "example": "database-id",
              "placeholder": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "example": "parent-page-id",
              "placeholder": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Page or database title (plain text)",
              "example": "My Page",
              "placeholder": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Page body content (plain text — added as a paragraph block)",
              "example": "This is the page content.",
              "placeholder": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "example": "{\"Status\":\"Done\",\"Count\":3}",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "description": "Optional filter for database queries/search",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Notion to read in a workflow.",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "The node executes read and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Notion API key (required for authentication)",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Notion OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "example": "page",
              "placeholder": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "description": "Notion Page ID (for get, update, archive, restore)",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "example": "database-id",
              "placeholder": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "example": "parent-page-id",
              "placeholder": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Page or database title (plain text)",
              "example": "My Page",
              "placeholder": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Page body content (plain text — added as a paragraph block)",
              "example": "This is the page content.",
              "placeholder": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "example": "{\"Status\":\"Done\",\"Count\":3}",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "description": "Optional filter for database queries/search",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Notion to create in a workflow.",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Notion API key (required for authentication)",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Notion OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "example": "page",
              "placeholder": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "description": "Notion Page ID (for get, update, archive, restore)",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "example": "database-id",
              "placeholder": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "example": "parent-page-id",
              "placeholder": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Page or database title (plain text)",
              "example": "My Page",
              "placeholder": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Page body content (plain text — added as a paragraph block)",
              "example": "This is the page content.",
              "placeholder": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "example": "{\"Status\":\"Done\",\"Count\":3}",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "description": "Optional filter for database queries/search",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Notion to update in a workflow.",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "The node executes update and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Notion node.",
          "fields": [
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "Notion API key (required for authentication)",
              "example": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "placeholder": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "Notion OAuth access token (alternative to API key)",
              "example": "your-oauth-access-token",
              "placeholder": "your-oauth-access-token"
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Notion resource: page, database, block, user, comment, search",
              "example": "page",
              "placeholder": "page",
              "defaultValue": "page"
            },
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "description": "Notion Page ID (for get, update, archive, restore)",
              "example": "page-id",
              "placeholder": "page-id"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "description": "Notion Database ID (for query, get, or creating a page as a database row)",
              "example": "database-id",
              "placeholder": "database-id"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "description": "Parent Page ID — where the new page will be created (required for page › create and database › create)",
              "example": "parent-page-id",
              "placeholder": "parent-page-id"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Page or database title (plain text)",
              "example": "My Page",
              "placeholder": "My Page"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Page body content (plain text — added as a paragraph block)",
              "example": "This is the page content.",
              "placeholder": "This is the page content."
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "description": "Page properties as simple JSON key:value pairs (for database rows). Example: {\"Status\":\"In Progress\",\"Priority\":\"High\"}",
              "example": "{\"Status\":\"Done\",\"Count\":3}",
              "placeholder": "{\"Status\":\"Done\",\"Count\":3}"
            },
            {
              "name": "Filter",
              "internalKey": "filter",
              "type": "json",
              "description": "Optional filter for database queries/search",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
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
            "scenario": "Use Notion to delete in a workflow.",
            "inputValues": {
              "Api Key": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "Access Token": "your-oauth-access-token",
              "Resource": "page",
              "Page Id": "page-id",
              "Database Id": "database-id"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Notion node."
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
