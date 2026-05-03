import type { NodeDoc } from '../types';

export const linkedinDoc: NodeDoc = {
  "slug": "linkedin",
  "displayName": "LinkedIn",
  "category": "Communication",
  "logoUrl": "/icons/nodes/linkedin.svg",
  "description": "Post content to LinkedIn, manage LinkedIn profile and company pages Use this node when a workflow needs linkedin behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "LinkedIn exposes operation choices directly.",
      "operations": [
        {
          "name": "Create post",
          "value": "create_post",
          "description": "Create post with the LinkedIn node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the LinkedIn node.\nconvertible: Value returned by the LinkedIn node.\ndefaultValue: Value returned by the LinkedIn node.",
          "usageExample": {
            "scenario": "Use LinkedIn in a workflow and pass upstream data into create post.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false",
              "Rich Text": "Created from workflow data: {{ $json.summary }}",
              "Media": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create post media",
          "value": "create_post_media",
          "description": "Create post media with the LinkedIn node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the LinkedIn node.\nconvertible: Value returned by the LinkedIn node.\ndefaultValue: Value returned by the LinkedIn node.",
          "usageExample": {
            "scenario": "Use LinkedIn in a workflow and pass upstream data into create post media.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false",
              "Rich Text": "Created from workflow data: {{ $json.summary }}",
              "Media": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create post media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Create article",
          "value": "create_article",
          "description": "Create article with the LinkedIn node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the LinkedIn node.\nconvertible: Value returned by the LinkedIn node.\ndefaultValue: Value returned by the LinkedIn node.",
          "usageExample": {
            "scenario": "Use LinkedIn in a workflow and pass upstream data into create article.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false",
              "Rich Text": "Created from workflow data: {{ $json.summary }}",
              "Media": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create article and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Get posts",
          "value": "get_posts",
          "description": "Get posts with the LinkedIn node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the LinkedIn node.\nconvertible: Value returned by the LinkedIn node.\ndefaultValue: Value returned by the LinkedIn node.",
          "usageExample": {
            "scenario": "Use LinkedIn in a workflow and pass upstream data into get posts.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false",
              "Rich Text": "Created from workflow data: {{ $json.summary }}",
              "Media": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs get posts and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Delete post",
          "value": "delete_post",
          "description": "Delete post with the LinkedIn node using the configured input fields.",
          "fields": [
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "required": false,
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "required": false,
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "required": false,
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "required": false,
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "required": false,
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the LinkedIn node.\nconvertible: Value returned by the LinkedIn node.\ndefaultValue: Value returned by the LinkedIn node.",
          "usageExample": {
            "scenario": "Use LinkedIn in a workflow and pass upstream data into delete post.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false",
              "Rich Text": "Created from workflow data: {{ $json.summary }}",
              "Media": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete post and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
