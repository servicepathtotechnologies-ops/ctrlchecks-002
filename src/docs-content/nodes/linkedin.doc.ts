import type { NodeDoc } from '../types';

export const linkedinDoc: NodeDoc = {
  "slug": "linkedin",
  "displayName": "LinkedIn",
  "category": "Communication",
  "logoUrl": "/icons/nodes/linkedin.svg",
  "description": "Post content to LinkedIn, manage LinkedIn profile and company pages",
  "credentialType": "LinkedIn OAuth",
  "credentialSetupSteps": [
    "What this is: LinkedIn uses an OAuth connection so CtrlChecks can safely access your LinkedIn account.",
    "Go to linkedin.com/developers and sign in with your LinkedIn account.",
    "Click \"Create App\" -> fill in app name (e.g. CtrlChecks), your LinkedIn Company Page (required - create one at linkedin.com/company/setup/new if needed), and upload a logo image.",
    "Under \"Auth\" settings, copy the Client ID and Client Secret.",
    "In \"Auth\" settings, click \"Add redirect URL\" and enter: http://localhost:3001/api/oauth/linkedin/callback",
    "Under \"Products\" tab, request access to \"Share on LinkedIn\" and \"Sign In with LinkedIn using OpenID Connect\". These are approved instantly.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> LinkedIn -> Connect with LinkedIn -> sign in and authorize.",
    "Run a test step (e.g. create a post as draft) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the LinkedIn node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow",
  "resources": [
    {
      "name": "Operations",
      "description": "LinkedIn exposes operation choices directly.",
      "operations": [
        {
          "name": "Create post",
          "value": "create_post",
          "description": "Create post using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: The text body of your LinkedIn post — what your connections will read in their feed.\nHow to fill it: Write your post content. Keep it under 3,000 characters for best results. Add line breaks for readability.\nExample: Excited to share our latest product update! We've added 3 new automation features based on your feedback. Check it out at example.com #automation #productivity\nTip: Use {{$json.postContent}} to generate the text dynamically from an earlier step like an AI node.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: Public HTTPS URL to an image or video to attach to the post (required for create_post_media) for LinkedIn / Create post.\nHow to fill it: Paste the full web address LinkedIn should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Who can see your post on LinkedIn.\nOptions:\n  PUBLIC — visible to everyone on LinkedIn (recommended for announcements)\n  CONNECTIONS — only your direct connections can see it\nExample: PUBLIC",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID — a code that identifies your personal LinkedIn account.\nWhere to find it: Go to your LinkedIn profile page in a browser. Look at the URL in the address bar — it ends with something like /in/alice-kumar-ab123456. The characters at the very end after the last dash (e.g. ab123456) are your member ID.\nFormat: Enter just the ID part — no URL, no full URN prefix.\nExample: If your profile URL is linkedin.com/in/alice-kumar-ab123456, enter: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / Create post.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / Create post.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / Create post.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "id": "urn:li:share:1234567890",
            "lifecycleState": "PUBLISHED",
            "visibility": "PUBLIC"
          },
          "outputDescription": "id: Unique identifier returned by the service.\nlifecycleState: Current state of the requested action.\nvisibility: Value returned by this operation.",
          "usageExample": {
            "scenario": "Publish a social update after a new blog post is detected via RSS feed",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured create post data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create post media",
          "value": "create_post_media",
          "description": "Create post media using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: The caption or text that appears with your media post.\nExample: Check out our new product demo video! {{$json.postText}}",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": true,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: The public URL of the image or video to attach to the post.\nImportant: The file must be publicly accessible on the internet — not a local file.\nHow to get a public URL: Upload to AWS S3, Google Drive (set to public), Cloudinary, or any hosting service. Copy the direct file URL.\nExample: https://storage.googleapis.com/mybucket/demo-video.mp4",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Post visibility for LinkedIn / Create post media.\nHow to fill it: Enter the visibility value requested by LinkedIn, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.visibility}} or pick the value from the data picker.",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID.\nWhere to find it: Open your LinkedIn profile in a browser. The URL ends with /in/your-name-XXXXXX — the last part (e.g. ab123456) is your member ID.\nExample: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / Create post media.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / Create post media.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / Create post media.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "text": "Media post published with image attachment.",
            "length": 43
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming LinkedIn data with create post media after a related upstream event is received",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured create post media data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create article",
          "value": "create_article",
          "description": "Create article using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: Post content text for LinkedIn / Create article.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: Public HTTPS URL to an image or video to attach to the post (required for create_post_media) for LinkedIn / Create article.\nHow to fill it: Paste the full web address LinkedIn should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Post visibility for LinkedIn / Create article.\nHow to fill it: Enter the visibility value requested by LinkedIn, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.visibility}} or pick the value from the data picker.",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID.\nWhere to find it: Open your LinkedIn profile in a browser. The URL ends with /in/your-name-XXXXXX — the last part (e.g. ab123456) is your member ID.\nExample: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / Create article.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / Create article.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / Create article.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "text": "Article draft created and ready for review.",
            "length": 43
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming LinkedIn data with create article after a related upstream event is received",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured create article data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get posts",
          "value": "get_posts",
          "description": "Get posts using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: Post content text for LinkedIn / Get posts.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: Public HTTPS URL to an image or video to attach to the post (required for create_post_media) for LinkedIn / Get posts.\nHow to fill it: Paste the full web address LinkedIn should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Post visibility for LinkedIn / Get posts.\nHow to fill it: Enter the visibility value requested by LinkedIn, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.visibility}} or pick the value from the data picker.",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID.\nWhere to find it: Open your LinkedIn profile in a browser. The URL ends with /in/your-name-XXXXXX — the last part (e.g. ab123456) is your member ID.\nExample: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / Get posts.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / Get posts.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / Get posts.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "elements": [
              {
                "id": "urn:li:share:1234567890",
                "text": "New product update",
                "visibility": "PUBLIC"
              }
            ],
            "count": 1
          },
          "outputDescription": "elements: Returned records from the service.\ncount: Number of records affected or returned.",
          "usageExample": {
            "scenario": "Process incoming LinkedIn data with get posts after a related upstream event is received",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured get posts data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete post",
          "value": "delete_post",
          "description": "Delete post using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: Post content text for LinkedIn / Delete post.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: Public HTTPS URL to an image or video to attach to the post (required for create_post_media) for LinkedIn / Delete post.\nHow to fill it: Paste the full web address LinkedIn should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Post visibility for LinkedIn / Delete post.\nHow to fill it: Enter the visibility value requested by LinkedIn, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.visibility}} or pick the value from the data picker.",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID.\nWhere to find it: Open your LinkedIn profile in a browser. The URL ends with /in/your-name-XXXXXX — the last part (e.g. ab123456) is your member ID.\nExample: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / Delete post.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / Delete post.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / Delete post.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "deleted": true,
            "id": "urn:li:share:1234567890"
          },
          "outputDescription": "deleted: Value returned by this operation.\nid: Unique identifier returned by the service.",
          "usageExample": {
            "scenario": "Process incoming LinkedIn data with delete post after a related upstream event is received",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured delete post data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "{{$json.operation}}",
          "value": "{{$json.operation}}",
          "description": "{{$json.operation}} using the LinkedIn node.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Post content text",
              "helpText": "What this field is: Post content text for LinkedIn / {{$json.operation}}.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.text}}",
              "example": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "helpText": "What this field is: Public HTTPS URL to an image or video to attach to the post (required for create_post_media) for LinkedIn / {{$json.operation}}.\nHow to fill it: Paste the full web address LinkedIn should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://cdn.example.com/image.jpg",
              "example": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "helpText": "What this field is: Post visibility for LinkedIn / {{$json.operation}}.\nHow to fill it: Enter the visibility value requested by LinkedIn, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.visibility}} or pick the value from the data picker.",
              "placeholder": "PUBLIC",
              "example": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "helpText": "What this field is: Your LinkedIn member ID.\nWhere to find it: Open your LinkedIn profile in a browser. The URL ends with /in/your-name-XXXXXX — the last part (e.g. ab123456) is your member ID.\nExample: ab123456",
              "placeholder": "abc123def456",
              "example": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "helpText": "What this field is: An on/off choice for dry run in LinkedIn / {{$json.operation}}.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want LinkedIn to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "helpText": "What this field is: Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn) for LinkedIn / {{$json.operation}}.\nHow to fill it: Type the message, prompt, or content you want LinkedIn to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "helpText": "What this field is: Optional media configuration stub (images/videos). Reserved for future LinkedIn media support. for LinkedIn / {{$json.operation}}.\nHow to fill it: Enter valid JSON in the format LinkedIn expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.media}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "text": "LinkedIn operation completed with provider result data.",
            "length": 55
          },
          "outputDescription": "text: Value returned by this operation.\nlength: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming LinkedIn data with {{$json.operation}} after a related upstream event is received",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "LinkedIn returns structured {{$json.operation}} data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the LinkedIn node."
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
