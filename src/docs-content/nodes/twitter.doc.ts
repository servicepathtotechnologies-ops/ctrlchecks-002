import type { NodeDoc } from '../types';

export const twitterDoc: NodeDoc = {
  "slug": "twitter",
  "displayName": "Twitter/X",
  "category": "Communication",
  "logoUrl": "/icons/nodes/twitter.svg",
  "description": "Post tweets, manage Twitter account",
  "credentialType": "Twitter API Key",
  "credentialSetupSteps": [
    "What this is: Twitter uses an API key or account connection so CtrlChecks can safely access your Twitter account.",
    "Go to developer.twitter.com/en/portal/dashboard and sign in with your Twitter/X account.",
    "Click \"+ Add App\" -> Create a new app. Give it a name and click Get keys.",
    "Under \"Keys and Tokens\", click \"Generate\" for Access Token and Secret. Copy all four values: API Key, API Key Secret, Access Token, Access Token Secret.",
    "Make sure your app has \"Read and Write\" permissions (needed to post tweets). Check Settings -> User authentication settings.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Twitter/X -> enter all four keys -> Save.",
    "Run a test step to post a tweet and confirm it appears on your Twitter account.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Twitter node and select the saved connection."
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
              "helpText": "What this field is: Resource chooses the kind of Twitter/X item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Twitter/X.\nExample: In Twitter/X, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "tweet",
              "example": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Tweet text (max 280 characters)",
              "helpText": "What this field is: The tweet content — maximum 280 characters.\nExample: Just shipped a new feature: automated workflow triggers! Try it at example.com #automation #nocode\nTip: Use {{$json.announcement}} to pull the text from an earlier step like an AI node.",
              "placeholder": "{{$json.tweet}}",
              "example": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "helpText": "What this field is: Tweet ID (for get/delete/like/etc.) for Twitter/X / Create.\nWhere to find it: Open the item in Twitter/X and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.tweetId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query (for search operations)",
              "helpText": "What this field is: Search query (for search operations) for Twitter/X / Create.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Twitter/X which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Twitter/X.\nWhere to get it: Open the Twitter/X dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-twitter-oauth-token",
              "example": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "text": "Tweet published successfully.",
            "length": 29
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Twitter/X data with create after a related upstream event is received",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "Twitter/X returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Resource chooses the kind of Twitter/X item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Twitter/X.\nExample: In Twitter/X, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "tweet",
              "example": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Tweet text (max 280 characters)",
              "helpText": "What this field is: Tweet text (max 280 characters) for Twitter/X / Delete.\nHow to fill it: Type the message, prompt, or content you want Twitter/X to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.tweet}}",
              "example": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "helpText": "What this field is: Tweet ID (for get/delete/like/etc.) for Twitter/X / Delete.\nWhere to find it: Open the item in Twitter/X and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.tweetId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query (for search operations)",
              "helpText": "What this field is: Search query (for search operations) for Twitter/X / Delete.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Twitter/X which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Twitter/X.\nWhere to get it: Open the Twitter/X dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-twitter-oauth-token",
              "example": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "text": "Tweet deleted successfully.",
            "length": 27
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Twitter/X data with delete after a related upstream event is received",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "Twitter/X returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Resource chooses the kind of Twitter/X item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Twitter/X.\nExample: In Twitter/X, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "tweet",
              "example": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Tweet text (max 280 characters)",
              "helpText": "What this field is: Tweet text (max 280 characters) for Twitter/X / Get.\nHow to fill it: Type the message, prompt, or content you want Twitter/X to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.tweet}}",
              "example": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "helpText": "What this field is: Tweet ID (for get/delete/like/etc.) for Twitter/X / Get.\nWhere to find it: Open the item in Twitter/X and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.tweetId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query (for search operations)",
              "helpText": "What this field is: Search query (for search operations) for Twitter/X / Get.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Twitter/X which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Twitter/X.\nWhere to get it: Open the Twitter/X dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-twitter-oauth-token",
              "example": "your-twitter-oauth-token"
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
              "helpText": "What this field is: Resource chooses the kind of Twitter/X item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Twitter/X.\nExample: In Twitter/X, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "tweet",
              "example": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Tweet text (max 280 characters)",
              "helpText": "What this field is: Tweet text (max 280 characters) for Twitter/X / GetMe.\nHow to fill it: Type the message, prompt, or content you want Twitter/X to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.tweet}}",
              "example": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "helpText": "What this field is: Tweet ID (for get/delete/like/etc.) for Twitter/X / GetMe.\nWhere to find it: Open the item in Twitter/X and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.tweetId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query (for search operations)",
              "helpText": "What this field is: Search query (for search operations) for Twitter/X / GetMe.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Twitter/X which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Twitter/X.\nWhere to get it: Open the Twitter/X dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-twitter-oauth-token",
              "example": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "text": "Authenticated account: @ctrlchecks",
            "length": 34
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Twitter/X data with get me after a related upstream event is received",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "Twitter/X returns structured get me data that downstream nodes can reference with {{$json.fieldName}}."
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
              "helpText": "What this field is: Resource chooses the kind of Twitter/X item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Twitter/X.\nExample: In Twitter/X, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "tweet",
              "example": "tweet",
              "defaultValue": "tweet"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Tweet text (max 280 characters)",
              "helpText": "What this field is: Tweet text (max 280 characters) for Twitter/X / Recent.\nHow to fill it: Type the message, prompt, or content you want Twitter/X to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.tweet}}",
              "example": "{{$json.tweet}}"
            },
            {
              "name": "Tweet Id",
              "internalKey": "tweetId",
              "type": "string",
              "required": false,
              "description": "Tweet ID (for get/delete/like/etc.)",
              "helpText": "What this field is: Tweet ID (for get/delete/like/etc.) for Twitter/X / Recent.\nWhere to find it: Open the item in Twitter/X and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.tweetId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "Search query (for search operations)",
              "helpText": "What this field is: Search query (for search operations) for Twitter/X / Recent.\nHow to fill it: Enter the search, filter, SQL, or API query that tells Twitter/X which records to return or affect.\nLeave it blank only when you really want all available records and the node allows it.\nExample: status = active or from:billing@example.com\nTip: To use data from an earlier node, type {{$json.query}} or pick the value from the data picker.",
              "placeholder": "status = active"
            },
            {
              "name": "Access Token",
              "internalKey": "accessToken",
              "type": "string",
              "required": false,
              "description": "OAuth2 Access Token for Twitter (if using OAuth authentication)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Twitter/X.\nWhere to get it: Open the Twitter/X dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "your-twitter-oauth-token",
              "example": "your-twitter-oauth-token"
            }
          ],
          "outputExample": {
            "text": "Latest tweet: Product update is now live.",
            "length": 41
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Twitter/X data with recent after a related upstream event is received",
            "inputValues": {
              "Resource": "tweet",
              "Text": "{{$json.tweet}}",
              "Tweet Id": "abc123",
              "Query": "",
              "Access Token": "your-twitter-oauth-token"
            },
            "expectedOutput": "Twitter/X returns structured recent data that downstream nodes can reference with {{$json.fieldName}}."
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
