import type { NodeDoc } from '../types';

export const youtubeDoc: NodeDoc = {
  "slug": "youtube",
  "displayName": "YouTube",
  "category": "Communication",
  "logoUrl": "/icons/nodes/youtube.svg",
  "description": "Publish videos or posts to YouTube channels",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "Go to https://console.cloud.google.com → APIs & Services → Credentials.",
    "Click \"Create Credentials\" → \"OAuth 2.0 Client ID\" → Application type: Web Application.",
    "Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback",
    "Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).",
    "In CtrlChecks, open Connections → Add Connection → select the Google service → click \"Connect with Google\".",
    "Sign in and grant the required scopes. The connection saves automatically."
  ],
  "credentialDocsUrl": "https://developers.google.com/identity/protocols/oauth2",
  "resources": [
    {
      "name": "Operations",
      "description": "YouTube exposes operation choices directly.",
      "operations": [
        {
          "name": "List my channels",
          "value": "list_my_channels",
          "description": "List my channels using the YouTube node.",
          "fields": [
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Video title for upload_video or update_video_metadata",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Video description for upload_video or update_video_metadata",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "example": "automation, demo",
              "placeholder": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "description": "HTTP/HTTPS URL of the video file to upload",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "description": "Base64-encoded video data for upload_video",
              "example": "AAAAIGZ0eXBtcDQy...",
              "placeholder": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "description": "Video MIME type for upload_video",
              "example": "video/mp4",
              "placeholder": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "description": "Privacy status for upload_video: private, unlisted, public",
              "example": "private",
              "placeholder": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "description": "Whether uploaded video is made for kids",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "description": "Optional YouTube category ID for upload_video",
              "example": "22",
              "placeholder": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "example": "dQw4w9WgXcQ",
              "placeholder": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query for search_videos",
              "example": "workflow automation",
              "placeholder": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of YouTube results to return",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "videoId": "abc123",
            "channelId": "abc123",
            "title": "",
            "url": "https://example.com",
            "privacyStatus": "",
            "statistics": {},
            "items": [],
            "video": "abc123",
            "channel": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nvideoId: Value returned by this node.\nchannelId: Value returned by this node.\ntitle: Value returned by this node.\nurl: Value returned by this node.\nprivacyStatus: Value returned by this node.\nstatistics: Value returned by this node.\nitems: Value returned by this node.\nvideo: Value returned by this node.\nchannel: Value returned by this node.",
          "usageExample": {
            "scenario": "Use YouTube to list my channels in a workflow.",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "The node executes list my channels and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        },
        {
          "name": "Search videos",
          "value": "search_videos",
          "description": "Search videos using the YouTube node.",
          "fields": [
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Video title for upload_video or update_video_metadata",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Video description for upload_video or update_video_metadata",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "example": "automation, demo",
              "placeholder": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "description": "HTTP/HTTPS URL of the video file to upload",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "description": "Base64-encoded video data for upload_video",
              "example": "AAAAIGZ0eXBtcDQy...",
              "placeholder": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "description": "Video MIME type for upload_video",
              "example": "video/mp4",
              "placeholder": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "description": "Privacy status for upload_video: private, unlisted, public",
              "example": "private",
              "placeholder": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "description": "Whether uploaded video is made for kids",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "description": "Optional YouTube category ID for upload_video",
              "example": "22",
              "placeholder": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "example": "dQw4w9WgXcQ",
              "placeholder": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query for search_videos",
              "example": "workflow automation",
              "placeholder": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of YouTube results to return",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "videoId": "abc123",
            "channelId": "abc123",
            "title": "",
            "url": "https://example.com",
            "privacyStatus": "",
            "statistics": {},
            "items": [],
            "video": "abc123",
            "channel": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nvideoId: Value returned by this node.\nchannelId: Value returned by this node.\ntitle: Value returned by this node.\nurl: Value returned by this node.\nprivacyStatus: Value returned by this node.\nstatistics: Value returned by this node.\nitems: Value returned by this node.\nvideo: Value returned by this node.\nchannel: Value returned by this node.",
          "usageExample": {
            "scenario": "Use YouTube to search videos in a workflow.",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "The node executes search videos and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        },
        {
          "name": "Upload video",
          "value": "upload_video",
          "description": "Upload video using the YouTube node.",
          "fields": [
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Video title for upload_video or update_video_metadata",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Video description for upload_video or update_video_metadata",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "example": "automation, demo",
              "placeholder": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "description": "HTTP/HTTPS URL of the video file to upload",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "description": "Base64-encoded video data for upload_video",
              "example": "AAAAIGZ0eXBtcDQy...",
              "placeholder": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "description": "Video MIME type for upload_video",
              "example": "video/mp4",
              "placeholder": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "description": "Privacy status for upload_video: private, unlisted, public",
              "example": "private",
              "placeholder": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "description": "Whether uploaded video is made for kids",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "description": "Optional YouTube category ID for upload_video",
              "example": "22",
              "placeholder": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "example": "dQw4w9WgXcQ",
              "placeholder": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query for search_videos",
              "example": "workflow automation",
              "placeholder": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of YouTube results to return",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "videoId": "abc123",
            "channelId": "abc123",
            "title": "",
            "url": "https://example.com",
            "privacyStatus": "",
            "statistics": {},
            "items": [],
            "video": "abc123",
            "channel": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nvideoId: Value returned by this node.\nchannelId: Value returned by this node.\ntitle: Value returned by this node.\nurl: Value returned by this node.\nprivacyStatus: Value returned by this node.\nstatistics: Value returned by this node.\nitems: Value returned by this node.\nvideo: Value returned by this node.\nchannel: Value returned by this node.",
          "usageExample": {
            "scenario": "Use YouTube to upload video in a workflow.",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "The node executes upload video and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        },
        {
          "name": "Get video stats",
          "value": "get_video_stats",
          "description": "Get video stats using the YouTube node.",
          "fields": [
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "description": "Video title for upload_video or update_video_metadata",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "description": "Video description for upload_video or update_video_metadata",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "example": "automation, demo",
              "placeholder": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "description": "HTTP/HTTPS URL of the video file to upload",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "description": "Base64-encoded video data for upload_video",
              "example": "AAAAIGZ0eXBtcDQy...",
              "placeholder": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "description": "Video MIME type for upload_video",
              "example": "video/mp4",
              "placeholder": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "description": "Privacy status for upload_video: private, unlisted, public",
              "example": "private",
              "placeholder": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "description": "Whether uploaded video is made for kids",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "description": "Optional YouTube category ID for upload_video",
              "example": "22",
              "placeholder": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "example": "dQw4w9WgXcQ",
              "placeholder": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query for search_videos",
              "example": "workflow automation",
              "placeholder": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "description": "Maximum number of YouTube results to return",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "videoId": "abc123",
            "channelId": "abc123",
            "title": "",
            "url": "https://example.com",
            "privacyStatus": "",
            "statistics": {},
            "items": [],
            "video": "abc123",
            "channel": {}
          },
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nvideoId: Value returned by this node.\nchannelId: Value returned by this node.\ntitle: Value returned by this node.\nurl: Value returned by this node.\nprivacyStatus: Value returned by this node.\nstatistics: Value returned by this node.\nitems: Value returned by this node.\nvideo: Value returned by this node.\nchannel: Value returned by this node.",
          "usageExample": {
            "scenario": "Use YouTube to get video stats in a workflow.",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "The node executes get video stats and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the YouTube node."
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
