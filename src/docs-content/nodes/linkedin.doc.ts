import type { NodeDoc } from '../types';

export const linkedinDoc: NodeDoc = {
  "slug": "linkedin",
  "displayName": "LinkedIn",
  "category": "Communication",
  "logoUrl": "/icons/nodes/linkedin.svg",
  "description": "Post content to LinkedIn, manage LinkedIn profile and company pages",
  "credentialType": "LinkedIn OAuth",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to create post in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes create post and exposes its result for downstream nodes."
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to create post media in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes create post media and exposes its result for downstream nodes."
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to create article in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes create article and exposes its result for downstream nodes."
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to get posts in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes get posts and exposes its result for downstream nodes."
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to delete post in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes delete post and exposes its result for downstream nodes."
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
              "description": "Post content text",
              "example": "{{$json.text}}",
              "placeholder": "{{$json.text}}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Public HTTPS URL to an image or video to attach to the post (required for create_post_media)",
              "example": "https://cdn.example.com/image.jpg",
              "placeholder": "https://cdn.example.com/image.jpg"
            },
            {
              "name": "Visibility",
              "internalKey": "visibility",
              "type": "string",
              "description": "Post visibility",
              "example": "PUBLIC",
              "placeholder": "PUBLIC",
              "defaultValue": "PUBLIC"
            },
            {
              "name": "Person Urn",
              "internalKey": "personUrn",
              "type": "string",
              "description": "LinkedIn Person URN (without urn:li:person: prefix) for the posting member",
              "example": "abc123def456",
              "placeholder": "abc123def456"
            },
            {
              "name": "Dry Run",
              "internalKey": "dryRun",
              "type": "boolean",
              "description": "If true, validate configuration and return a simulated request without calling LinkedIn",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Rich Text",
              "internalKey": "richText",
              "type": "string",
              "description": "Optional rich-text/HTML content stub for future media/rich posts (not yet sent to LinkedIn)"
            },
            {
              "name": "Media",
              "internalKey": "media",
              "type": "json",
              "description": "Optional media configuration stub (images/videos). Reserved for future LinkedIn media support.",
              "example": "{\"key\":\"value\"}",
              "placeholder": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use LinkedIn to {{$json.operation}} in a workflow.",
            "inputValues": {
              "Text": "{{$json.text}}",
              "Media Url": "https://cdn.example.com/image.jpg",
              "Visibility": "PUBLIC",
              "Person Urn": "abc123def456",
              "Dry Run": "false"
            },
            "expectedOutput": "The node executes {{$json.operation}} and exposes its result for downstream nodes."
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
