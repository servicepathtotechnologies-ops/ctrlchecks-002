import type { NodeDoc } from '../types';

export const instagramDoc: NodeDoc = {
  "slug": "instagram",
  "displayName": "Instagram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/instagram.svg",
  "description": "Post content to Instagram",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "What this is: Meta Apps uses an OAuth connection so CtrlChecks can safely access your Meta Apps account.",
    "Go to developers.facebook.com/apps and sign in with your Facebook account.",
    "Click \"Create App\" -> select \"Business\" type -> Next -> give it a name -> Create App.",
    "Under \"Add Products to Your App\", click \"Set Up\" on Facebook Login.",
    "Go to Facebook Login -> Settings -> add this URL to \"Valid OAuth Redirect URIs\": http://localhost:3001/api/oauth/facebook/callback -> Save Changes.",
    "Copy the App ID and App Secret from Settings -> Basic.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Facebook -> click \"Connect with Facebook\" -> sign in and authorize.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Meta Apps node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/facebook-login/web",
  "resources": [
    {
      "name": "Operations",
      "description": "Instagram exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get details about an Instagram media post.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Instagram resource",
              "helpText": "What this field is: Resource chooses the kind of Instagram item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Instagram.\nExample: In Instagram, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "media",
              "example": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL (image/video) for create operations",
              "helpText": "What this field is: Media URL (image/video) for create operations for Instagram / Get.\nHow to fill it: Paste the full web address Instagram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.media_url}} or pick the value from the data picker.",
              "placeholder": "https://example.com/image.jpg",
              "example": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Post caption",
              "helpText": "What this field is: Post caption for Instagram / Get.\nHow to fill it: Enter the caption value requested by Instagram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "{{$json.caption}}",
              "example": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Instagram.\nWhere to get it: Open the Instagram dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-instagram-oauth-token",
              "example": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "id": "17858893269000001",
            "caption": "✨ New arrival...",
            "like_count": 124,
            "comments_count": 7,
            "timestamp": "2025-01-15T12:00:00+0000"
          },
          "outputDescription": "id: Media ID. caption: Post caption. like_count: Number of likes. comments_count: Number of comments. timestamp: When the post was published.",
          "usageExample": {
            "scenario": "Track post engagement metrics after publishing",
            "inputValues": {
              "mediaId": "{{$json.id}}"
            },
            "expectedOutput": "Returns post insights with `{{$json.like_count}}` and `{{$json.comments_count}}`."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the Instagram node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Instagram resource",
              "helpText": "What this field is: Resource chooses the kind of Instagram item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Instagram.\nExample: In Instagram, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "media",
              "example": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL (image/video) for create operations",
              "helpText": "What this field is: Media URL (image/video) for create operations for Instagram / List.\nHow to fill it: Paste the full web address Instagram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.media_url}} or pick the value from the data picker.",
              "placeholder": "https://example.com/image.jpg",
              "example": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Post caption",
              "helpText": "What this field is: Post caption for Instagram / List.\nHow to fill it: Enter the caption value requested by Instagram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "{{$json.caption}}",
              "example": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Instagram.\nWhere to get it: Open the Instagram dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-instagram-oauth-token",
              "example": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\nid: Unique identifier returned by the service.\nmediaId: Unique identifier returned by the service.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Instagram data with list after a related upstream event is received",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "Instagram returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Instagram node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Instagram resource",
              "helpText": "What this field is: Resource chooses the kind of Instagram item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Instagram.\nExample: In Instagram, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "media",
              "example": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL (image/video) for create operations",
              "helpText": "What this field is: Media URL (image/video) for create operations for Instagram / Create.\nHow to fill it: Paste the full web address Instagram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.media_url}} or pick the value from the data picker.",
              "placeholder": "https://example.com/image.jpg",
              "example": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Post caption",
              "helpText": "What this field is: The text description that appears below the Instagram image.\nExample: New product alert! 🎉 {{$json.productName}} is now available. Visit the link in our bio for details. #newproduct #launch",
              "placeholder": "{{$json.caption}}",
              "example": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Instagram.\nWhere to get it: Open the Instagram dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-instagram-oauth-token",
              "example": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\nid: Unique identifier returned by the service.\nmediaId: Unique identifier returned by the service.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Instagram data with create after a related upstream event is received",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "Instagram returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Publish",
          "value": "publish",
          "description": "Publish using the Instagram node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Instagram resource",
              "helpText": "What this field is: Resource chooses the kind of Instagram item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Instagram.\nExample: In Instagram, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "media",
              "example": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL (image/video) for create operations",
              "helpText": "What this field is: Media URL (image/video) for create operations for Instagram / Publish.\nHow to fill it: Paste the full web address Instagram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.media_url}} or pick the value from the data picker.",
              "placeholder": "https://example.com/image.jpg",
              "example": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Post caption",
              "helpText": "What this field is: Post caption for Instagram / Publish.\nHow to fill it: Enter the caption value requested by Instagram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "{{$json.caption}}",
              "example": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Instagram.\nWhere to get it: Open the Instagram dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-instagram-oauth-token",
              "example": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\nid: Unique identifier returned by the service.\nmediaId: Unique identifier returned by the service.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Instagram data with publish after a related upstream event is received",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "Instagram returns structured publish data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "CreateAndPublish",
          "value": "createAndPublish",
          "description": "CreateAndPublish using the Instagram node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Instagram resource",
              "helpText": "What this field is: Resource chooses the kind of Instagram item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Instagram.\nExample: In Instagram, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "media",
              "example": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL (image/video) for create operations",
              "helpText": "What this field is: Media URL (image/video) for create operations for Instagram / CreateAndPublish.\nHow to fill it: Paste the full web address Instagram should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.media_url}} or pick the value from the data picker.",
              "placeholder": "https://example.com/image.jpg",
              "example": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Post caption",
              "helpText": "What this field is: Post caption for Instagram / CreateAndPublish.\nHow to fill it: Enter the caption value requested by Instagram, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "{{$json.caption}}",
              "example": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Instagram.\nWhere to get it: Open the Instagram dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-instagram-oauth-token",
              "example": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\nid: Unique identifier returned by the service.\nmediaId: Unique identifier returned by the service.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Instagram data with create and publish after a related upstream event is received",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "Instagram returns structured create and publish data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Instagram node."
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
