import type { NodeDoc } from '../types';

export const wordpressDoc: NodeDoc = {
  "slug": "wordpress",
  "displayName": "WordPress",
  "category": "Transformation",
  "logoUrl": "/icons/nodes/wordpress.svg",
  "description": "Create, read, update, and delete posts on a WordPress site via the WordPress REST API. Use this node when a workflow needs wordpress behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Password Credential",
  "credentialSetupSteps": [
    "Open the WordPress developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Password Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.wordpress.org/rest-api/reference/",
  "resources": [
    {
      "name": "Operations",
      "description": "WordPress exposes operation choices directly.",
      "operations": [
        {
          "name": "Create Post",
          "value": "create_post",
          "description": "Create Post with the WordPress node using the configured input fields.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "example": "{{ $json.postId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Post body",
              "example": "{{ $json.content }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "example": "publish",
              "defaultValue": "publish",
              "options": [
                "Publish",
                "Draft",
                "Pending"
              ]
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max posts to return",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "wordpress"
          },
          "outputDescription": "success: Indicates that the WordPress node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use WordPress in a workflow and pass upstream data into create post.",
            "inputValues": {
              "Site Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Post Id": "{{ $json.postId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Status": "publish",
              "Limit": "10"
            },
            "expectedOutput": "The node runs create post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Get Posts",
          "value": "get_posts",
          "description": "Get Posts with the WordPress node using the configured input fields.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "example": "{{ $json.postId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Post body",
              "example": "{{ $json.content }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "example": "publish",
              "defaultValue": "publish",
              "options": [
                "Publish",
                "Draft",
                "Pending"
              ]
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max posts to return",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "wordpress"
          },
          "outputDescription": "success: Indicates that the WordPress node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use WordPress in a workflow and pass upstream data into get posts.",
            "inputValues": {
              "Site Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Post Id": "{{ $json.postId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Status": "publish",
              "Limit": "10"
            },
            "expectedOutput": "The node runs get posts and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Update Post",
          "value": "update_post",
          "description": "Update Post with the WordPress node using the configured input fields.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "example": "{{ $json.postId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Post body",
              "example": "{{ $json.content }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "example": "publish",
              "defaultValue": "publish",
              "options": [
                "Publish",
                "Draft",
                "Pending"
              ]
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max posts to return",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "wordpress"
          },
          "outputDescription": "success: Indicates that the WordPress node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use WordPress in a workflow and pass upstream data into update post.",
            "inputValues": {
              "Site Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Post Id": "{{ $json.postId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Status": "publish",
              "Limit": "10"
            },
            "expectedOutput": "The node runs update post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Delete Post",
          "value": "delete_post",
          "description": "Delete Post with the WordPress node using the configured input fields.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "example": "{{ $json.username }}",
              "defaultValue": ""
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "example": "{{ $json.password }}",
              "defaultValue": "",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "example": "{{ $json.postId }}",
              "defaultValue": ""
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "example": "{{ $json.title }}",
              "defaultValue": ""
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Post body",
              "example": "{{ $json.content }}",
              "defaultValue": ""
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "example": "publish",
              "defaultValue": "publish",
              "options": [
                "Publish",
                "Draft",
                "Pending"
              ]
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Max posts to return",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "wordpress"
          },
          "outputDescription": "success: Indicates that the WordPress node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use WordPress in a workflow and pass upstream data into delete post.",
            "inputValues": {
              "Site Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Password": "{{ $json.password }}",
              "Post Id": "{{ $json.postId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Status": "publish",
              "Limit": "10"
            },
            "expectedOutput": "The node runs delete post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
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
  "relatedNodes": []
};
