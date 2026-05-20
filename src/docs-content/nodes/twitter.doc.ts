import type { NodeDoc } from '../types';

export const twitterDoc: NodeDoc = {
  "slug": "twitter",
  "displayName": "Twitter/X",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twitter.svg",
  "description": "Post tweets, manage Twitter account",
  "credentialType": "Twitter API Key",
  "credentialSetupSteps": [
    "Go to https://developer.twitter.com/en/portal/dashboard → create a project and an app.",
    "Under \"Keys and Tokens\", generate API Key, API Secret, Access Token, and Access Token Secret.",
    "In CtrlChecks, open Connections → Add Connection → Twitter/X → enter all four keys → Save."
  ],
  "credentialDocsUrl": "https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api",
  "resources": [
    {
      "name": "Operations",
      "description": "Twitter/X exposes operation choices directly.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Twitter/X node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Twitter resource",
              "example": "tweet",
              "placeholder": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query (for search operations)"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Twitter/X to create in a workflow.",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "The node executes create and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Twitter/X node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Twitter resource",
              "example": "tweet",
              "placeholder": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query (for search operations)"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Twitter/X to delete in a workflow.",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "The node executes delete and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Fetch a specific tweet by its ID.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Twitter resource",
              "example": "tweet",
              "placeholder": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query (for search operations)"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "data": {
              "id": "1749876543210",
              "text": "Hello world!",
              "public_metrics": {
                "retweet_count": 5,
                "like_count": 42
              }
            }
          },
          "outputDescription": "data.id: The tweet ID. data.text: Tweet text. data.public_metrics: Engagement counts (likes, retweets, replies).",
          "usageExample": {
            "scenario": "Fetch engagement metrics for a specific tweet to track campaign performance",
            "inputValues": {
              "tweetId": "{{$json.tweetId}}"
            },
            "expectedOutput": "Returns the tweet with `{{$json.data.public_metrics.like_count}}` likes and `{{$json.data.public_metrics.retweet_count}}` retweets."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "GetMe",
          "value": "getMe",
          "description": "GetMe using the Twitter/X node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Twitter resource",
              "example": "tweet",
              "placeholder": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query (for search operations)"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Twitter/X to getme in a workflow.",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "The node executes getme and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Recent",
          "value": "recent",
          "description": "Recent using the Twitter/X node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Twitter resource",
              "example": "tweet",
              "placeholder": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "description": "Search query (for search operations)"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Twitter/X to recent in a workflow.",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "The node executes recent and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Twitter/X node."
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
