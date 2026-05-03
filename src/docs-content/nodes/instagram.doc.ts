import type { NodeDoc } from '../types';

export const instagramDoc: NodeDoc = {
  "slug": "instagram",
  "displayName": "Instagram",
  "category": "Communication",
  "logoUrl": "/icons/nodes/instagram.svg",
  "description": "Publish content, send DMs, moderate comments via Instagram Graph API Use this node when a workflow needs instagram behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "Instagram exposes operation choices directly.",
      "operations": [
        {
          "name": "Send Text",
          "value": "sendText",
          "description": "Send Text with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into send text.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs send text and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Send Media",
          "value": "sendMedia",
          "description": "Send Media with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into send media.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs send media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Send Template",
          "value": "sendTemplate",
          "description": "Send Template with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into send template.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs send template and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Create And Publish",
          "value": "createAndPublish",
          "description": "Create And Publish with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into create and publish.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs create and publish and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into get.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into list.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Hide",
          "value": "hide",
          "description": "Hide with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into hide.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs hide and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Unhide",
          "value": "unhide",
          "description": "Unhide with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into unhide.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs unhide and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Reply",
          "value": "reply",
          "description": "Reply with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into reply.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs reply and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Reply D M",
          "value": "replyDM",
          "description": "Reply D M with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into reply d m.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs reply d m and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Get Media",
          "value": "getMedia",
          "description": "Get Media with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into get media.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs get media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into search.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        },
        {
          "name": "Get Recent Media",
          "value": "getRecentMedia",
          "description": "Get Recent Media with the Instagram node using the configured input fields.",
          "fields": [
            {
              "name": "Instagram Business Account Id",
              "internalKey": "instagramBusinessAccountId",
              "type": "string",
              "required": false,
              "description": "Instagram Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.instagramBusinessAccountId }}"
            },
            {
              "name": "Recipient Id",
              "internalKey": "recipientId",
              "type": "string",
              "required": false,
              "description": "Recipient user ID for DMs",
              "example": "{{ $json.recipientId }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Attachment Type",
              "internalKey": "attachmentType",
              "type": "string",
              "required": false,
              "description": "Attachment type for DMs",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Attachment Url",
              "internalKey": "attachmentUrl",
              "type": "url",
              "required": false,
              "description": "Attachment URL for DMs",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Type",
              "internalKey": "media_type",
              "type": "string",
              "required": false,
              "description": "Media type for publishing",
              "example": "IMAGE",
              "placeholder": "IMAGE"
            },
            {
              "name": "Media Url",
              "internalKey": "media_url",
              "type": "url",
              "required": false,
              "description": "Media URL for publishing",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Location Id",
              "internalKey": "location_id",
              "type": "string",
              "required": false,
              "description": "Location ID for media",
              "example": "{{ $json.location_id }}"
            },
            {
              "name": "User Tags",
              "internalKey": "user_tags",
              "type": "json",
              "required": false,
              "description": "User tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Product Tags",
              "internalKey": "product_tags",
              "type": "json",
              "required": false,
              "description": "Product tags for media",
              "example": "[\"value\"]"
            },
            {
              "name": "Carousel Items",
              "internalKey": "carouselItems",
              "type": "json",
              "required": false,
              "description": "Array of media URLs for carousel",
              "example": "[\"value\"]"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Comment Id",
              "internalKey": "commentId",
              "type": "string",
              "required": false,
              "description": "Comment ID",
              "example": "{{ $json.commentId }}"
            },
            {
              "name": "Reply Text",
              "internalKey": "replyText",
              "type": "string",
              "required": false,
              "description": "Reply text for comments",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Metric",
              "internalKey": "metric",
              "type": "string",
              "required": false,
              "description": "Insights metric name",
              "example": "{{ $json.metric }}"
            },
            {
              "name": "Period",
              "internalKey": "period",
              "type": "string",
              "required": false,
              "description": "Insights period",
              "example": "day",
              "placeholder": "day",
              "defaultValue": "day"
            },
            {
              "name": "Since",
              "internalKey": "since",
              "type": "string",
              "required": false,
              "description": "Insights start date (ISO 8601)",
              "example": "{{ $json.since }}"
            },
            {
              "name": "Until",
              "internalKey": "until",
              "type": "string",
              "required": false,
              "description": "Insights end date (ISO 8601)",
              "example": "{{ $json.until }}"
            },
            {
              "name": "Hashtag Name",
              "internalKey": "hashtagName",
              "type": "string",
              "required": false,
              "description": "Hashtag name to search",
              "example": "{{ $json.hashtagName }}"
            },
            {
              "name": "Hashtag Id",
              "internalKey": "hashtagId",
              "type": "string",
              "required": false,
              "description": "Hashtag ID for recent media",
              "example": "{{ $json.hashtagId }}"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "mediaId": "mediaId",
            "data": {},
            "error": {}
          },
          "outputDescription": "mediaId: Value returned by the Instagram node.\ndata: Value returned by the Instagram node.\nerror: Value returned by the Instagram node.",
          "usageExample": {
            "scenario": "Use Instagram in a workflow and pass upstream data into get recent media.",
            "inputValues": {
              "Instagram Business Account Id": "{{ $json.instagramBusinessAccountId }}",
              "Recipient Id": "{{ $json.recipientId }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Attachment Type": "image",
              "Attachment Url": "https://api.example.com/resource",
              "Media Type": "IMAGE",
              "Media Url": "https://api.example.com/resource",
              "Caption": "{{ $json.caption }}",
              "Location Id": "{{ $json.location_id }}",
              "User Tags": "[\"value\"]"
            },
            "expectedOutput": "The node runs get recent media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/instagram-platform/"
        }
      ]
    }
  ],
  "commonErrors": [
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
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
