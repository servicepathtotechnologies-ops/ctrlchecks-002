import type { NodeDoc } from '../types';

export const lightricksDoc: NodeDoc = {
  "slug": "lightricks",
  "displayName": "Lightricks LTX-2",
  "category": "AI",
  "logoUrl": "/icons/nodes/lightricks.svg",
  "description": "Generate videos using Lightricks LTX-2 open-source AI model (text-to-video, image-to-video, and more).",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Lightricks LTX-2 is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Lightricks LTX-2 node.",
          "fields": [
            {
              "name": "Prompt",
              "internalKey": "prompt",
              "type": "textarea",
              "required": true,
              "description": "Text prompt for video generation"
            },
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "select",
              "description": "Generation mode",
              "example": "text-to-video",
              "placeholder": "text-to-video",
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
              "description": "Input image URL (for image-to-video mode)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Audio Url",
              "internalKey": "audio_url",
              "type": "url",
              "description": "Input audio URL (for audio modes)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Video Url",
              "internalKey": "video_url",
              "type": "url",
              "description": "Input video URL (for video-to-video mode)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "description": "Video duration in seconds",
              "example": "5",
              "placeholder": "5",
              "defaultValue": "5"
            },
            {
              "name": "Fps",
              "internalKey": "fps",
              "type": "number",
              "description": "Frames per second",
              "example": "25",
              "placeholder": "25",
              "defaultValue": "25"
            },
            {
              "name": "Resolution",
              "internalKey": "resolution",
              "type": "select",
              "description": "Video resolution",
              "example": "1080p",
              "placeholder": "1080p",
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
              "description": "Additional generation options",
              "example": "{}",
              "placeholder": "{}",
              "defaultValue": "{}"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Lightricks LTX-2 to execute in a workflow.",
            "inputValues": {
              "Prompt": "",
              "Mode": "text-to-video",
              "Image Url": "https://api.example.com",
              "Audio Url": "https://api.example.com",
              "Video Url": "https://api.example.com"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
