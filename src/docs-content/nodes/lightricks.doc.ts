import type { NodeDoc } from '../types';

export const lightricksDoc: NodeDoc = {
  "slug": "lightricks",
  "displayName": "Lightricks LTX-2",
  "category": "AI",
  "logoUrl": "/icons/nodes/lightricks.svg",
  "description": "Generate videos using Lightricks LTX-2 open-source AI model (text-to-video, image-to-video, and more).",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "description": "Text prompt for video generation",
              "helpText": "What this field is: Text prompt for video generation for Lightricks LTX-2 / Execute.\nHow to fill it: Type the message, prompt, or content you want Lightricks LTX-2 to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Summarize {{$json.text}}"
            },
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "select",
              "required": false,
              "description": "Generation mode",
              "helpText": "What this field is: A list of allowed choices for mode in Lightricks LTX-2 / Execute.\nHow to fill it: Pick the option that matches what Lightricks LTX-2 should do. Do not type a custom value unless the UI allows it.\nAvailable choices: Text to Video (text-to-video), Image to Video (image-to-video), Audio to Video (audio-to-video), Video to Video (video-to-video), Image+Text to Video (image-text-to-video), Text to Audio (text-to-audio), Audio to Audio (audio-to-audio).",
              "placeholder": "text-to-video",
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
              "helpText": "What this field is: Input image URL (for image-to-video mode) for Lightricks LTX-2 / Execute.\nHow to fill it: Paste the full web address Lightricks LTX-2 should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.image_url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Audio Url",
              "internalKey": "audio_url",
              "type": "url",
              "required": false,
              "description": "Input audio URL (for audio modes)",
              "helpText": "What this field is: Input audio URL (for audio modes) for Lightricks LTX-2 / Execute.\nHow to fill it: Paste the full web address Lightricks LTX-2 should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.audio_url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Video Url",
              "internalKey": "video_url",
              "type": "url",
              "required": false,
              "description": "Input video URL (for video-to-video mode)",
              "helpText": "What this field is: Input video URL (for video-to-video mode) for Lightricks LTX-2 / Execute.\nHow to fill it: Paste the full web address Lightricks LTX-2 should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.video_url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Duration",
              "internalKey": "duration",
              "type": "number",
              "required": false,
              "description": "Video duration in seconds",
              "helpText": "What this field is: A number used for duration in Lightricks LTX-2 / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.duration}} or pick the value from the data picker.",
              "placeholder": "5",
              "example": "5",
              "defaultValue": "5"
            },
            {
              "name": "Fps",
              "internalKey": "fps",
              "type": "number",
              "required": false,
              "description": "Frames per second",
              "helpText": "What this field is: A number used for fps in Lightricks LTX-2 / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.fps}} or pick the value from the data picker.",
              "placeholder": "25",
              "example": "25",
              "defaultValue": "25"
            },
            {
              "name": "Resolution",
              "internalKey": "resolution",
              "type": "select",
              "required": false,
              "description": "Video resolution",
              "helpText": "What this field is: A list of allowed choices for resolution in Lightricks LTX-2 / Execute.\nHow to fill it: Pick the option that matches what Lightricks LTX-2 should do. Do not type a custom value unless the UI allows it.\nAvailable choices: 720p (720p), 1080p (1080p), 4K (4k).",
              "placeholder": "1080p",
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
              "helpText": "What this field is: Additional generation options for Lightricks LTX-2 / Execute.\nHow to fill it: Enter valid JSON in the format Lightricks LTX-2 expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.options}} or pick the value from the data picker.",
              "placeholder": "{}",
              "example": "{}",
              "defaultValue": "{}"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "default",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming Lightricks LTX-2 data with execute after a related upstream event is received",
            "inputValues": {
              "Prompt": "",
              "Mode": "text-to-video",
              "Image Url": "https://api.example.com",
              "Audio Url": "https://api.example.com",
              "Video Url": "https://api.example.com"
            },
            "expectedOutput": "Lightricks LTX-2 returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
