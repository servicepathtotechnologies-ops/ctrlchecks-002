import type { NodeDoc } from '../types';

export const wordpressDoc: NodeDoc = {
  "slug": "wordpress",
  "displayName": "WordPress",
  "category": "Transformation",
  "logoUrl": "/icons/nodes/wordpress.svg",
  "description": "Create, read, update, and delete posts on a WordPress site via the WordPress REST API.",
  "credentialType": "WordPress Credential",
  "credentialSetupSteps": [
    "What this is: WordPress uses an OAuth connection so CtrlChecks can safely access your WordPress account.",
    "Log in to your WordPress admin dashboard (yoursite.com/wp-admin).",
    "Go to Users -> select your admin user profile.",
    "Scroll down to \"Application Passwords\" (near the bottom).",
    "Enter a name (e.g. CtrlChecks) and click \"Add New Application Password\".",
    "Copy the generated password shown - spaces are included, copy everything exactly as shown.",
    "Note your WordPress site URL (e.g. https://yoursite.com) and username.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> WordPress -> enter site URL, username, and application password -> Save.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the WordPress node and select the saved connection."
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
              "helpText": "What this field is: WordPress site base URL for WordPress / Create post.\nHow to fill it: Paste the full web address WordPress should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.siteUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "helpText": "What this field is: WordPress username for WordPress / Create post.\nHow to fill it: Enter the username value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "helpText": "What this field is: WordPress Application Password for WordPress / Create post.\nHow to fill it: Enter the password value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "helpText": "What this field is: Post ID for update/delete for WordPress / Create post.\nWhere to find it: Open the item in WordPress and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.postId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "helpText": "What this field is: The blog post or page title.\nExample: 10 Tips for Better Email Marketing",
              "placeholder": "Enter Title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Post body",
              "helpText": "What this field is: The full body content of the post. Supports HTML.\nExample: <p>Welcome to our guide.</p><h2>Why this matters</h2><p>{{$json.introText}}</p>",
              "placeholder": "Enter Content"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "helpText": "What this field is: Whether to publish or save as draft.\nOptions: publish (immediately live), draft (saved but not visible), private (only visible to admins).\nExample: publish",
              "placeholder": "publish",
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
              "helpText": "What this field is: A number used for limit in WordPress / Create post.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "create_post",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming WordPress data with create post after a related upstream event is received",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "WordPress returns structured create post data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: WordPress site base URL for WordPress / Get posts.\nHow to fill it: Paste the full web address WordPress should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.siteUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "helpText": "What this field is: WordPress username for WordPress / Get posts.\nHow to fill it: Enter the username value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "helpText": "What this field is: WordPress Application Password for WordPress / Get posts.\nHow to fill it: Enter the password value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "helpText": "What this field is: Post ID for update/delete for WordPress / Get posts.\nWhere to find it: Open the item in WordPress and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.postId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "helpText": "What this field is: Post title for WordPress / Get posts.\nHow to fill it: Enter the title value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Post body",
              "helpText": "What this field is: Post body for WordPress / Get posts.\nHow to fill it: Type the message, prompt, or content you want WordPress to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "helpText": "What this field is: A list of allowed choices for status in WordPress / Get posts.\nHow to fill it: Pick the option that matches what WordPress should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Publish (publish), Draft (draft), Pending (pending).",
              "placeholder": "publish",
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
              "helpText": "What this field is: A number used for limit in WordPress / Get posts.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "get_posts",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming WordPress data with get posts after a related upstream event is received",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "WordPress returns structured get posts data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: WordPress site base URL for WordPress / Update post.\nHow to fill it: Paste the full web address WordPress should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.siteUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "helpText": "What this field is: WordPress username for WordPress / Update post.\nHow to fill it: Enter the username value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "helpText": "What this field is: WordPress Application Password for WordPress / Update post.\nHow to fill it: Enter the password value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "helpText": "What this field is: Post ID for update/delete for WordPress / Update post.\nWhere to find it: Open the item in WordPress and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.postId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "helpText": "What this field is: Post title for WordPress / Update post.\nHow to fill it: Enter the title value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Post body",
              "helpText": "What this field is: Post body for WordPress / Update post.\nHow to fill it: Type the message, prompt, or content you want WordPress to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "helpText": "What this field is: A list of allowed choices for status in WordPress / Update post.\nHow to fill it: Pick the option that matches what WordPress should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Publish (publish), Draft (draft), Pending (pending).",
              "placeholder": "publish",
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
              "helpText": "What this field is: A number used for limit in WordPress / Update post.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "update_post",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming WordPress data with update post after a related upstream event is received",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "WordPress returns structured update post data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: WordPress site base URL for WordPress / Delete post.\nHow to fill it: Paste the full web address WordPress should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.siteUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "WordPress username",
              "helpText": "What this field is: WordPress username for WordPress / Delete post.\nHow to fill it: Enter the username value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.username}} or pick the value from the data picker.",
              "placeholder": "Enter Username"
            },
            {
              "name": "Password",
              "internalKey": "password",
              "type": "password",
              "required": true,
              "description": "WordPress Application Password",
              "helpText": "What this field is: WordPress Application Password for WordPress / Delete post.\nHow to fill it: Enter the password value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.password}} or pick the value from the data picker.",
              "placeholder": "Enter Password",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Post Id",
              "internalKey": "postId",
              "type": "string",
              "required": false,
              "description": "Post ID for update/delete",
              "helpText": "What this field is: Post ID for update/delete for WordPress / Delete post.\nWhere to find it: Open the item in WordPress and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.postId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Post title",
              "helpText": "What this field is: Post title for WordPress / Delete post.\nHow to fill it: Enter the title value requested by WordPress, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "Enter Title"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "textarea",
              "required": false,
              "description": "Post body",
              "helpText": "What this field is: Post body for WordPress / Delete post.\nHow to fill it: Type the message, prompt, or content you want WordPress to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Enter Content"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "select",
              "required": false,
              "description": "Post status",
              "helpText": "What this field is: A list of allowed choices for status in WordPress / Delete post.\nHow to fill it: Pick the option that matches what WordPress should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Publish (publish), Draft (draft), Pending (pending).",
              "placeholder": "publish",
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
              "helpText": "What this field is: A number used for limit in WordPress / Delete post.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "delete_post",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming WordPress data with delete post after a related upstream event is received",
            "inputValues": {
              "Site Url": "https://api.example.com",
              "Username": "",
              "Password": "",
              "Post Id": "abc123",
              "Title": ""
            },
            "expectedOutput": "WordPress returns structured delete post data that downstream nodes can reference with {{$json.fieldName}}."
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
