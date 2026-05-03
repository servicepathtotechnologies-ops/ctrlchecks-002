import type { NodeDoc } from '../types';

export const lightricksDoc: NodeDoc = {
  "slug": "lightricks",
  "displayName": "Lightricks LTX-2",
  "category": "AI",
  "logoUrl": "/icons/nodes/lightricks.svg",
  "description": "Generate videos using Lightricks LTX-2 open-source AI model (text-to-video, image-to-video, and more). Use this node when a workflow needs lightricks ltx-2 behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "Lightricks LTX-2 is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the Lightricks LTX-2 node using the configured input fields.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "string",
              "required": true,
              "description": "Text prompt for video generation",
              "example": "{{ $json.prompt }}",
              "defaultValue": ""
            },
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "select",
              "required": false,
              "description": "Generation mode",
              "example": "text-to-video",
              "defaultValue": "text-to-video",
              "options": [
                "Text to Video",
                "Image to Video",
                "Audio to Video",
                "Video to Video",
                "Image+Text to Video",
                "Text to Audio",
                "Audio to Audio"
              ]
            },
            {
              "name": "Image Url",
              "internalKey": "image_url",
              "type": "url",
              "required": false,
              "description": "Input image URL (for image-to-video mode)",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Audio Url",
              "internalKey": "audio_url",
              "type": "url",
              "required": false,
              "description": "Input audio URL (for audio modes)",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Video Url",
              "internalKey": "video_url",
              "type": "url",
              "required": false,
              "description": "Input video URL (for video-to-video mode)",
              "example": "https://api.example.com/resource",
              "defaultValue": ""
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Video duration in seconds",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Fps",
              "internalKey": "fps",
              "type": "number",
              "required": false,
              "description": "Frames per second",
              "example": "25",
              "defaultValue": "25"
            },
            {
              "name": "Resolution",
              "internalKey": "resolution",
              "type": "select",
              "required": false,
              "description": "Video resolution",
              "example": "1080p",
              "defaultValue": "1080p",
              "options": [
                "720p",
                "1080p",
                "4K"
              ]
            },
            {
              "name": "Options",
              "internalKey": "options",
              "type": "json",
              "required": false,
              "description": "Additional generation options",
              "example": "{}",
              "defaultValue": "{}"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {},
            "nodeType": "lightricks"
          },
          "outputDescription": "success: Indicates that the Lightricks LTX-2 node completed successfully.\ndata: Contains the service response or transformed payload returned at runtime.\nnodeType: The CtrlChecks node type that produced this output.",
          "usageExample": {
            "scenario": "Use Lightricks LTX-2 in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Prompt": "{{ $json.prompt }}",
              "Mode": "text-to-video",
              "Image Url": "https://api.example.com/resource",
              "Audio Url": "https://api.example.com/resource",
              "Video Url": "https://api.example.com/resource",
              "Duration": "5",
              "Fps": "25",
              "Resolution": "1080p",
              "Options": "{}"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
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
    "ai_agent",
    "ai_chat_model",
    "openai_gpt",
    "anthropic_claude",
    "google_gemini"
  ]
};
