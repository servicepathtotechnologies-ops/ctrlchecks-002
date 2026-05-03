import type { NodeDoc } from '../types';

export const youtubeDoc: NodeDoc = {
  "slug": "youtube",
  "displayName": "YouTube",
  "category": "Communication",
  "logoUrl": "/icons/nodes/youtube.svg",
  "description": "Publish videos or posts to YouTube channels Use this node when a workflow needs youtube behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Youtube Token, Youtube Credential",
  "credentialSetupSteps": [
    "Open the YouTube developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Youtube Token, Youtube Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.google.com/youtube/v3/docs",
  "resources": [
    {
      "name": "Operations",
      "description": "YouTube exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload video",
          "value": "upload_video",
          "description": "Upload video with the YouTube node using the configured input fields.",
          "fields": [
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "URL of the video to upload or reference",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Video title",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Video description or post text",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID (optional if default channel is configured)",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for YouTube (if using OAuth authentication)",
              "example": "your-youtube-oauth-token",
              "placeholder": "your-youtube-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "youtube_oauth_123",
              "placeholder": "youtube_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the YouTube node.\nconvertible: Value returned by the YouTube node.\ndefaultValue: Value returned by the YouTube node.",
          "usageExample": {
            "scenario": "Use YouTube in a workflow and pass upstream data into upload video.",
            "inputValues": {
              "Video Url": "https://example.com/video.mp4",
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Channel Id": "UCxxxxxxxxxxxx",
              "Access Token": "your-youtube-oauth-token",
              "Credential Id": "youtube_oauth_123"
            },
            "expectedOutput": "The node runs upload video and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        },
        {
          "name": "Update video",
          "value": "update_video",
          "description": "Update video with the YouTube node using the configured input fields.",
          "fields": [
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "URL of the video to upload or reference",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Video title",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Video description or post text",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID (optional if default channel is configured)",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for YouTube (if using OAuth authentication)",
              "example": "your-youtube-oauth-token",
              "placeholder": "your-youtube-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "youtube_oauth_123",
              "placeholder": "youtube_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the YouTube node.\nconvertible: Value returned by the YouTube node.\ndefaultValue: Value returned by the YouTube node.",
          "usageExample": {
            "scenario": "Use YouTube in a workflow and pass upstream data into update video.",
            "inputValues": {
              "Video Url": "https://example.com/video.mp4",
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Channel Id": "UCxxxxxxxxxxxx",
              "Access Token": "your-youtube-oauth-token",
              "Credential Id": "youtube_oauth_123"
            },
            "expectedOutput": "The node runs update video and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
        },
        {
          "name": "Create post",
          "value": "create_post",
          "description": "Create post with the YouTube node using the configured input fields.",
          "fields": [
            {
              "name": "Video Url",
              "internalKey": "videoUrl",
              "type": "url",
              "required": false,
              "description": "URL of the video to upload or reference",
              "example": "https://example.com/video.mp4",
              "placeholder": "https://example.com/video.mp4"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Video title",
              "example": "New product demo",
              "placeholder": "New product demo"
            },
            {
              "name": "Description",
              "internalKey": "description",
              "type": "string",
              "required": false,
              "description": "Video description or post text",
              "example": "Check out our latest feature...",
              "placeholder": "Check out our latest feature..."
            },
            {
              "name": "Channel Id",
              "internalKey": "channelId",
              "type": "string",
              "required": false,
              "description": "YouTube channel ID (optional if default channel is configured)",
              "example": "UCxxxxxxxxxxxx",
              "placeholder": "UCxxxxxxxxxxxx"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for YouTube (if using OAuth authentication)",
              "example": "your-youtube-oauth-token",
              "placeholder": "your-youtube-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "youtube_oauth_123",
              "placeholder": "youtube_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the YouTube node.\nconvertible: Value returned by the YouTube node.\ndefaultValue: Value returned by the YouTube node.",
          "usageExample": {
            "scenario": "Use YouTube in a workflow and pass upstream data into create post.",
            "inputValues": {
              "Video Url": "https://example.com/video.mp4",
              "Title": "New product demo",
              "Description": "Check out our latest feature...",
              "Channel Id": "UCxxxxxxxxxxxx",
              "Access Token": "your-youtube-oauth-token",
              "Credential Id": "youtube_oauth_123"
            },
            "expectedOutput": "The node runs create post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.google.com/youtube/v3/docs"
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
  "relatedNodes": [
    "google_gmail",
    "outlook",
    "slack_message",
    "email",
    "log_output"
  ]
};
