import type { NodeDoc } from '../types';

export const youtubeDoc: NodeDoc = {
  "slug": "youtube",
  "displayName": "YouTube",
  "category": "Communication",
  "logoUrl": "/icons/nodes/youtube.svg",
  "description": "Publish videos or posts to YouTube channels",
  "credentialType": "Google Credential",
  "credentialSetupSteps": [
    "What this is: Google uses an OAuth connection so CtrlChecks can safely access your Google account.",
    "Go to console.cloud.google.com and sign in with your Google account.",
    "Click \"Select a project\" at the top -> New Project -> give it any name (e.g. CtrlChecks) -> Create.",
    "In the left menu, click APIs & Services -> Library -> search for the API you need (e.g. Gmail API or Google Sheets API) -> click it -> Enable.",
    "Go to APIs & Services -> Credentials -> Create Credentials -> OAuth client ID -> Application type: Web application.",
    "Under \"Authorised redirect URIs\", click Add URI and enter: http://localhost:3001/api/oauth/google/callback -> Create. Copy the Client ID and Client Secret shown.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> select the Google service -> Connect with Google -> sign in -> Allow access.",
    "The connection saves automatically. Select it in the node dropdown and run a test step to confirm.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Google node and select the saved connection."
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
              "required": false,
              "description": "Video title for upload_video or update_video_metadata",
              "helpText": "What this field is: Video title for upload_video or update_video_metadata for YouTube / List my channels.\nHow to fill it: Enter the title value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "New product demo",
              "example": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Video description for upload_video or update_video_metadata",
              "helpText": "What this field is: Video description for upload_video or update_video_metadata for YouTube / List my channels.\nHow to fill it: Type the message, prompt, or content you want YouTube to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Check out our latest feature...",
              "example": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "required": false,
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "helpText": "What this field is: Comma-separated tags for upload_video or update_video_metadata for YouTube / List my channels.\nHow to fill it: Enter the tags value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tags}} or pick the value from the data picker.",
              "placeholder": "automation, demo",
              "example": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "HTTP/HTTPS URL of the video file to upload",
              "helpText": "What this field is: HTTP/HTTPS URL of the video file to upload for YouTube / List my channels.\nHow to fill it: Paste the full web address YouTube should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.videoUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com/video.mp4",
              "example": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "required": false,
              "description": "Base64-encoded video data for upload_video",
              "helpText": "What this field is: Base64-encoded video data for upload_video for YouTube / List my channels.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoDataBase64}} or pick the value from the data picker.",
              "placeholder": "AAAAIGZ0eXBtcDQy...",
              "example": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "Video MIME type for upload_video",
              "helpText": "What this field is: Video MIME type for upload_video for YouTube / List my channels.\nHow to fill it: Enter the mime type value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mimeType}} or pick the value from the data picker.",
              "placeholder": "video/mp4",
              "example": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "required": false,
              "description": "Privacy status for upload_video: private, unlisted, public",
              "helpText": "What this field is: Privacy status for upload_video: private, unlisted, public for YouTube / List my channels.\nHow to fill it: Enter the privacy status value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.privacyStatus}} or pick the value from the data picker.",
              "placeholder": "private",
              "example": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "required": false,
              "description": "Whether uploaded video is made for kids",
              "helpText": "What this field is: Whether uploaded video is made for kids for YouTube / List my channels.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "required": false,
              "description": "Optional YouTube category ID for upload_video",
              "helpText": "What this field is: Optional YouTube category ID for upload_video for YouTube / List my channels.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.categoryId}} or pick the value from the data picker.",
              "placeholder": "22",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "required": false,
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "helpText": "What this field is: YouTube video ID for get_video_stats, update_video_metadata, or delete_video for YouTube / List my channels.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoId}} or pick the value from the data picker.",
              "placeholder": "dQw4w9WgXcQ",
              "example": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query for search_videos",
              "helpText": "What this field is: Search query for search_videos for YouTube / List my channels.\nHow to fill it: Enter the search, filter, SQL, or API query that tells YouTube which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "workflow automation",
              "example": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of YouTube results to return",
              "helpText": "What this field is: A number used for max results in YouTube / List my channels.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "helpText": "What this field is: The channel or conversation where YouTube sends or reads data during List my channels.\nWhere to find it: Open the service, choose the channel/conversation, and copy its visible name or ID from details.\nExample: #alerts or C01234567",
              "placeholder": "UCxxxxxxxxxxxx",
              "example": "UCxxxxxxxxxxxx"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nvideoId: Unique identifier returned by the service.\nchannelId: Unique identifier returned by the service.\ntitle: Value returned by this operation.\nurl: Value returned by this operation.\nprivacyStatus: Current state of the requested action.\nstatistics: Value returned by this operation.\nitems: Value returned by this operation.\nvideo: Value returned by this operation.\nchannel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming YouTube data with list my channels after a related upstream event is received",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "YouTube returns structured list my channels data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Video title for upload_video or update_video_metadata",
              "helpText": "What this field is: Video title for upload_video or update_video_metadata for YouTube / Search videos.\nHow to fill it: Enter the title value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "New product demo",
              "example": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Video description for upload_video or update_video_metadata",
              "helpText": "What this field is: Video description for upload_video or update_video_metadata for YouTube / Search videos.\nHow to fill it: Type the message, prompt, or content you want YouTube to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Check out our latest feature...",
              "example": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "required": false,
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "helpText": "What this field is: Comma-separated tags for upload_video or update_video_metadata for YouTube / Search videos.\nHow to fill it: Enter the tags value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tags}} or pick the value from the data picker.",
              "placeholder": "automation, demo",
              "example": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "HTTP/HTTPS URL of the video file to upload",
              "helpText": "What this field is: HTTP/HTTPS URL of the video file to upload for YouTube / Search videos.\nHow to fill it: Paste the full web address YouTube should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.videoUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com/video.mp4",
              "example": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "required": false,
              "description": "Base64-encoded video data for upload_video",
              "helpText": "What this field is: Base64-encoded video data for upload_video for YouTube / Search videos.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoDataBase64}} or pick the value from the data picker.",
              "placeholder": "AAAAIGZ0eXBtcDQy...",
              "example": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "Video MIME type for upload_video",
              "helpText": "What this field is: Video MIME type for upload_video for YouTube / Search videos.\nHow to fill it: Enter the mime type value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mimeType}} or pick the value from the data picker.",
              "placeholder": "video/mp4",
              "example": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "required": false,
              "description": "Privacy status for upload_video: private, unlisted, public",
              "helpText": "What this field is: Privacy status for upload_video: private, unlisted, public for YouTube / Search videos.\nHow to fill it: Enter the privacy status value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.privacyStatus}} or pick the value from the data picker.",
              "placeholder": "private",
              "example": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "required": false,
              "description": "Whether uploaded video is made for kids",
              "helpText": "What this field is: Whether uploaded video is made for kids for YouTube / Search videos.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "required": false,
              "description": "Optional YouTube category ID for upload_video",
              "helpText": "What this field is: Optional YouTube category ID for upload_video for YouTube / Search videos.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.categoryId}} or pick the value from the data picker.",
              "placeholder": "22",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "required": false,
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "helpText": "What this field is: YouTube video ID for get_video_stats, update_video_metadata, or delete_video for YouTube / Search videos.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoId}} or pick the value from the data picker.",
              "placeholder": "dQw4w9WgXcQ",
              "example": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query for search_videos",
              "helpText": "What this field is: Search query for search_videos for YouTube / Search videos.\nHow to fill it: Enter the search, filter, SQL, or API query that tells YouTube which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "workflow automation",
              "example": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of YouTube results to return",
              "helpText": "What this field is: A number used for max results in YouTube / Search videos.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "helpText": "What this field is: The channel or conversation where YouTube sends or reads data during Search videos.\nWhere to find it: Open the service, choose the channel/conversation, and copy its visible name or ID from details.\nExample: #alerts or C01234567",
              "placeholder": "UCxxxxxxxxxxxx",
              "example": "UCxxxxxxxxxxxx"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nvideoId: Unique identifier returned by the service.\nchannelId: Unique identifier returned by the service.\ntitle: Value returned by this operation.\nurl: Value returned by this operation.\nprivacyStatus: Current state of the requested action.\nstatistics: Value returned by this operation.\nitems: Value returned by this operation.\nvideo: Value returned by this operation.\nchannel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming YouTube data with search videos after a related upstream event is received",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "YouTube returns structured search videos data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Video title for upload_video or update_video_metadata",
              "helpText": "What this field is: Video title for upload_video or update_video_metadata for YouTube / Upload video.\nHow to fill it: Enter the title value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "New product demo",
              "example": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Video description for upload_video or update_video_metadata",
              "helpText": "What this field is: Video description for upload_video or update_video_metadata for YouTube / Upload video.\nHow to fill it: Type the message, prompt, or content you want YouTube to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Check out our latest feature...",
              "example": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "required": false,
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "helpText": "What this field is: Comma-separated tags for upload_video or update_video_metadata for YouTube / Upload video.\nHow to fill it: Enter the tags value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tags}} or pick the value from the data picker.",
              "placeholder": "automation, demo",
              "example": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "HTTP/HTTPS URL of the video file to upload",
              "helpText": "What this field is: HTTP/HTTPS URL of the video file to upload for YouTube / Upload video.\nHow to fill it: Paste the full web address YouTube should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.videoUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com/video.mp4",
              "example": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "required": false,
              "description": "Base64-encoded video data for upload_video",
              "helpText": "What this field is: Base64-encoded video data for upload_video for YouTube / Upload video.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoDataBase64}} or pick the value from the data picker.",
              "placeholder": "AAAAIGZ0eXBtcDQy...",
              "example": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "Video MIME type for upload_video",
              "helpText": "What this field is: Video MIME type for upload_video for YouTube / Upload video.\nHow to fill it: Enter the mime type value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mimeType}} or pick the value from the data picker.",
              "placeholder": "video/mp4",
              "example": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "required": false,
              "description": "Privacy status for upload_video: private, unlisted, public",
              "helpText": "What this field is: Privacy status for upload_video: private, unlisted, public for YouTube / Upload video.\nHow to fill it: Enter the privacy status value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.privacyStatus}} or pick the value from the data picker.",
              "placeholder": "private",
              "example": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "required": false,
              "description": "Whether uploaded video is made for kids",
              "helpText": "What this field is: Whether uploaded video is made for kids for YouTube / Upload video.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "required": false,
              "description": "Optional YouTube category ID for upload_video",
              "helpText": "What this field is: Optional YouTube category ID for upload_video for YouTube / Upload video.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.categoryId}} or pick the value from the data picker.",
              "placeholder": "22",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "required": false,
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "helpText": "What this field is: YouTube video ID for get_video_stats, update_video_metadata, or delete_video for YouTube / Upload video.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoId}} or pick the value from the data picker.",
              "placeholder": "dQw4w9WgXcQ",
              "example": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query for search_videos",
              "helpText": "What this field is: Search query for search_videos for YouTube / Upload video.\nHow to fill it: Enter the search, filter, SQL, or API query that tells YouTube which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "workflow automation",
              "example": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of YouTube results to return",
              "helpText": "What this field is: A number used for max results in YouTube / Upload video.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "helpText": "What this field is: The channel or conversation where YouTube sends or reads data during Upload video.\nWhere to find it: Open the service, choose the channel/conversation, and copy its visible name or ID from details.\nExample: #alerts or C01234567",
              "placeholder": "UCxxxxxxxxxxxx",
              "example": "UCxxxxxxxxxxxx"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nvideoId: Unique identifier returned by the service.\nchannelId: Unique identifier returned by the service.\ntitle: Value returned by this operation.\nurl: Value returned by this operation.\nprivacyStatus: Current state of the requested action.\nstatistics: Value returned by this operation.\nitems: Value returned by this operation.\nvideo: Value returned by this operation.\nchannel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming YouTube data with upload video after a related upstream event is received",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "YouTube returns structured upload video data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "Video title for upload_video or update_video_metadata",
              "helpText": "What this field is: Video title for upload_video or update_video_metadata for YouTube / Get video stats.\nHow to fill it: Enter the title value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.title}} or pick the value from the data picker.",
              "placeholder": "New product demo",
              "example": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": false,
              "description": "Video description for upload_video or update_video_metadata",
              "helpText": "What this field is: Video description for upload_video or update_video_metadata for YouTube / Get video stats.\nHow to fill it: Type the message, prompt, or content you want YouTube to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Check out our latest feature...",
              "example": "Check out our latest feature..."
            },
            {
              "name": "Tags",
              "internalKey": "tags",
              "type": "string",
              "required": false,
              "description": "Comma-separated tags for upload_video or update_video_metadata",
              "helpText": "What this field is: Comma-separated tags for upload_video or update_video_metadata for YouTube / Get video stats.\nHow to fill it: Enter the tags value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.tags}} or pick the value from the data picker.",
              "placeholder": "automation, demo",
              "example": "automation, demo"
            },
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "HTTP/HTTPS URL of the video file to upload",
              "helpText": "What this field is: HTTP/HTTPS URL of the video file to upload for YouTube / Get video stats.\nHow to fill it: Paste the full web address YouTube should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.videoUrl}} or pick the value from the data picker.",
              "placeholder": "https://example.com/video.mp4",
              "example": "https://example.com/video.mp4"
            },
            {
              "name": "Video Data Base64",
              "internalKey": "videoDataBase64",
              "type": "string",
              "required": false,
              "description": "Base64-encoded video data for upload_video",
              "helpText": "What this field is: Base64-encoded video data for upload_video for YouTube / Get video stats.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoDataBase64}} or pick the value from the data picker.",
              "placeholder": "AAAAIGZ0eXBtcDQy...",
              "example": "AAAAIGZ0eXBtcDQy..."
            },
            {
              "name": "Mime Type",
              "internalKey": "mimeType",
              "type": "string",
              "required": false,
              "description": "Video MIME type for upload_video",
              "helpText": "What this field is: Video MIME type for upload_video for YouTube / Get video stats.\nHow to fill it: Enter the mime type value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mimeType}} or pick the value from the data picker.",
              "placeholder": "video/mp4",
              "example": "video/mp4",
              "defaultValue": "video/mp4"
            },
            {
              "name": "Privacy Status",
              "internalKey": "privacyStatus",
              "type": "string",
              "required": false,
              "description": "Privacy status for upload_video: private, unlisted, public",
              "helpText": "What this field is: Privacy status for upload_video: private, unlisted, public for YouTube / Get video stats.\nHow to fill it: Enter the privacy status value requested by YouTube, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.privacyStatus}} or pick the value from the data picker.",
              "placeholder": "private",
              "example": "private",
              "defaultValue": "private"
            },
            {
              "name": "Made For Kids",
              "internalKey": "madeForKids",
              "type": "boolean",
              "required": false,
              "description": "Whether uploaded video is made for kids",
              "helpText": "What this field is: Whether uploaded video is made for kids for YouTube / Get video stats.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Category Id",
              "internalKey": "categoryId",
              "type": "string",
              "required": false,
              "description": "Optional YouTube category ID for upload_video",
              "helpText": "What this field is: Optional YouTube category ID for upload_video for YouTube / Get video stats.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.categoryId}} or pick the value from the data picker.",
              "placeholder": "22",
              "example": "22",
              "defaultValue": "22"
            },
            {
              "name": "Video Id",
              "internalKey": "videoId",
              "type": "string",
              "required": false,
              "description": "YouTube video ID for get_video_stats, update_video_metadata, or delete_video",
              "helpText": "What this field is: YouTube video ID for get_video_stats, update_video_metadata, or delete_video for YouTube / Get video stats.\nWhere to find it: Open the item in YouTube and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.videoId}} or pick the value from the data picker.",
              "placeholder": "dQw4w9WgXcQ",
              "example": "dQw4w9WgXcQ"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query for search_videos",
              "helpText": "What this field is: Search query for search_videos for YouTube / Get video stats.\nHow to fill it: Enter the search, filter, SQL, or API query that tells YouTube which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "workflow automation",
              "example": "workflow automation"
            },
            {
              "name": "Max Results",
              "internalKey": "maxResults",
              "type": "number",
              "required": false,
              "description": "Maximum number of YouTube results to return",
              "helpText": "What this field is: A number used for max results in YouTube / Get video stats.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxResults}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID for get_channel or optional search filtering",
              "helpText": "What this field is: The channel or conversation where YouTube sends or reads data during Get video stats.\nWhere to find it: Open the service, choose the channel/conversation, and copy its visible name or ID from details.\nExample: #alerts or C01234567",
              "placeholder": "UCxxxxxxxxxxxx",
              "example": "UCxxxxxxxxxxxx"
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nvideoId: Unique identifier returned by the service.\nchannelId: Unique identifier returned by the service.\ntitle: Value returned by this operation.\nurl: Value returned by this operation.\nprivacyStatus: Current state of the requested action.\nstatistics: Value returned by this operation.\nitems: Value returned by this operation.\nvideo: Value returned by this operation.\nchannel: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming YouTube data with get video stats after a related upstream event is received",
            "inputValues": {
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Tags": "automation, demo",
              "Video Url": "https://example.com/video.mp4",
              "Video Data Base64": "AAAAIGZ0eXBtcDQy..."
            },
            "expectedOutput": "YouTube returns structured get video stats data that downstream nodes can reference with {{$json.fieldName}}."
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
