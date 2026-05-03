import type { NodeDoc } from '../types';

export const twitterDoc: NodeDoc = {
  "slug": "twitter",
  "displayName": "Twitter/X",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twitter.svg",
  "description": "Post tweets, manage Twitter account Use this node when a workflow needs twitter/x behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Twitter Token, Twitter Credential",
  "credentialSetupSteps": [
    "Open the Twitter/X developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Twitter Token, Twitter Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developer.x.com/en/docs/x-api",
  "resources": [
    {
      "name": "Tweet",
      "description": "Tweet is a Twitter/X resource available in this node.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into create.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into get.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Search Recent",
          "value": "searchRecent",
          "description": "Search Recent with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into search recent.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs search recent and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        }
      ]
    },
    {
      "name": "User",
      "description": "User is a Twitter/X resource available in this node.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into create.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into get.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Search Recent",
          "value": "searchRecent",
          "description": "Search Recent with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into search recent.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs search recent and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        }
      ]
    },
    {
      "name": "Search",
      "description": "Search is a Twitter/X resource available in this node.",
      "operations": [
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into create.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into get.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
        },
        {
          "name": "Search Recent",
          "value": "searchRecent",
          "description": "Search Recent with the Twitter/X node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Tweet text (max 280 characters)",
              "example": "{{$json.tweet}}",
              "placeholder": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "example": "{{ $json.tweetId }}"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "string",
              "required": false,
              "description": "Search query (for search operations)",
              "example": "status:open"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "password",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "example": "your-twitter-oauth-token",
              "placeholder": "your-twitter-oauth-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "twitter_oauth_123",
              "placeholder": "twitter_oauth_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Twitter/X node.\nconvertible: Value returned by the Twitter/X node.\ndefaultValue: Value returned by the Twitter/X node.",
          "usageExample": {
            "scenario": "Use Twitter/X in a workflow and pass upstream data into search recent.",
            "inputValues": {
              "Text": "{{$json.tweet}}",
              "Tweet Id": "{{ $json.tweetId }}",
              "Query": "status:open",
              "Access Token": "your-twitter-oauth-token",
              "Credential Id": "twitter_oauth_123"
            },
            "expectedOutput": "The node runs search recent and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developer.x.com/en/docs/x-api"
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
