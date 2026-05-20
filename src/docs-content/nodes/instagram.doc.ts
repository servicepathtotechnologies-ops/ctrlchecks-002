import type { NodeDoc } from '../types';

export const instagramDoc: NodeDoc = {
  "slug": "instagram",
  "displayName": "Instagram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/instagram.svg",
  "description": "Post content to Instagram",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/instagram-platform/",
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
              "example": "media",
              "placeholder": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "description": "Media URL (image/video) for create operations",
              "example": "https://example.com/image.jpg",
              "placeholder": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Post caption",
              "example": "{{$json.caption}}",
              "placeholder": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "example": "your-instagram-oauth-token",
              "placeholder": "your-instagram-oauth-token"
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
              "example": "media",
              "placeholder": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "description": "Media URL (image/video) for create operations",
              "example": "https://example.com/image.jpg",
              "placeholder": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Post caption",
              "example": "{{$json.caption}}",
              "placeholder": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "example": "your-instagram-oauth-token",
              "placeholder": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\nid: Value returned by this node.\nmediaId: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Instagram to list in a workflow.",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
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
              "example": "media",
              "placeholder": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "description": "Media URL (image/video) for create operations",
              "example": "https://example.com/image.jpg",
              "placeholder": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Post caption",
              "example": "{{$json.caption}}",
              "placeholder": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "example": "your-instagram-oauth-token",
              "placeholder": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\nid: Value returned by this node.\nmediaId: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Instagram to create in a workflow.",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
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
              "example": "media",
              "placeholder": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "description": "Media URL (image/video) for create operations",
              "example": "https://example.com/image.jpg",
              "placeholder": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Post caption",
              "example": "{{$json.caption}}",
              "placeholder": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "example": "your-instagram-oauth-token",
              "placeholder": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\nid: Value returned by this node.\nmediaId: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Instagram to publish in a workflow.",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "The node executes publish and exposes its result for downstream nodes."
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
              "example": "media",
              "placeholder": "media",
              "defaultValue": "media"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "description": "Media URL (image/video) for create operations",
              "example": "https://example.com/image.jpg",
              "placeholder": "https://example.com/image.jpg"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Post caption",
              "example": "{{$json.caption}}",
              "placeholder": "{{$json.caption}}"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Instagram (if using OAuth authentication)",
              "example": "your-instagram-oauth-token",
              "placeholder": "your-instagram-oauth-token"
            }
          ],
          "outputExample": {
            "success": true,
            "id": "abc123",
            "mediaId": "abc123",
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\nid: Value returned by this node.\nmediaId: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Instagram to createandpublish in a workflow.",
            "inputValues": {
              "Resource": "media",
              "Media Url": "https://example.com/image.jpg",
              "Caption": "{{$json.caption}}",
              "Access Token": "your-instagram-oauth-token"
            },
            "expectedOutput": "The node executes createandpublish and exposes its result for downstream nodes."
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
