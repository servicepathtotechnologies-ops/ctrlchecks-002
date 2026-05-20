import type { NodeDoc } from '../types';

export const wordpressDoc: NodeDoc = {
  "slug": "wordpress",
  "displayName": "WordPress",
  "category": "Transformation",
  "logoUrl": "/icons/nodes/wordpress.svg",
  "description": "Create, read, update, and delete posts on a WordPress site via the WordPress REST API.",
  "credentialType": "WordPress Credential",
  "credentialSetupSteps": [
    "In your WordPress admin, go to Users → Profile → Application Passwords.",
    "Enter a name for the application and click \"Add New Application Password\".",
    "Copy the generated password (spaces are part of the password — include them or remove them consistently).",
    "In CtrlChecks, open Connections → Add Connection → WordPress → enter your site URL, username, and application password → Save."
  ],
  "credentialDocsUrl": "https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/",
  "resources": [
    {
      "name": "Operations",
      "description": "WordPress exposes operation choices directly.",
      "operations": [
        {
          "name": "Create post",
          "value": "create_post",
          "description": "Create post using the WordPress node.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "description": "Post ID for update/delete",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Post title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Post body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "description": "Post status",
              "example": "publish",
              "placeholder": "publish",
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
              "description": "Max posts to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WordPress to create post in a workflow.",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes create post and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Get posts",
          "value": "get_posts",
          "description": "Get posts using the WordPress node.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "description": "Post ID for update/delete",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Post title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Post body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "description": "Post status",
              "example": "publish",
              "placeholder": "publish",
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
              "description": "Max posts to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WordPress to get posts in a workflow.",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes get posts and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Update post",
          "value": "update_post",
          "description": "Update post using the WordPress node.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "description": "Post ID for update/delete",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Post title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Post body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "description": "Post status",
              "example": "publish",
              "placeholder": "publish",
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
              "description": "Max posts to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WordPress to update post in a workflow.",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes update post and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        },
        {
          "name": "Delete post",
          "value": "delete_post",
          "description": "Delete post using the WordPress node.",
          "fields": [
            {
              "name": "Site Url",
              "internalKey": "siteUrl",
              "type": "url",
              "required": true,
              "description": "WordPress site base URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "description": "Post ID for update/delete",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Post title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "description": "Post body"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "description": "Post status",
              "example": "publish",
              "placeholder": "publish",
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
              "description": "Max posts to return",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WordPress to delete post in a workflow.",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "The node executes delete post and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.wordpress.org/rest-api/reference/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the WordPress node."
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
