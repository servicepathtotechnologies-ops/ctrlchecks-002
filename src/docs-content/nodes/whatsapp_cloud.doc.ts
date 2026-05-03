import type { NodeDoc } from '../types';

export const whatsappCloudDoc: NodeDoc = {
  "slug": "whatsapp_cloud",
  "displayName": "WhatsApp Cloud",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp_cloud.svg",
  "description": "Send messages via WhatsApp Cloud API Use this node when a workflow needs whatsapp cloud behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Whatsapp Credential, Whatsapp Credential",
  "credentialSetupSteps": [
    "Open the WhatsApp Cloud developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Whatsapp Credential, Whatsapp Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference",
  "resources": [
    {
      "name": "Message",
      "description": "Message is a WhatsApp Cloud resource available in this node.",
      "operations": [
        {
          "name": "Send Text",
          "value": "sendText",
          "description": "Send Text with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send text.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send text and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Media",
          "value": "sendMedia",
          "description": "Send Media with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send media.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Location",
          "value": "sendLocation",
          "description": "Send Location with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send location.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send location and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Contact",
          "value": "sendContact",
          "description": "Send Contact with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send contact.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send contact and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Reaction",
          "value": "sendReaction",
          "description": "Send Reaction with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send reaction.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send reaction and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Template",
          "value": "sendTemplate",
          "description": "Send Template with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send template.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send template and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        }
      ]
    },
    {
      "name": "Media",
      "description": "Media is a WhatsApp Cloud resource available in this node.",
      "operations": [
        {
          "name": "Send Text",
          "value": "sendText",
          "description": "Send Text with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send text.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send text and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Media",
          "value": "sendMedia",
          "description": "Send Media with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send media.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Location",
          "value": "sendLocation",
          "description": "Send Location with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send location.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send location and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Contact",
          "value": "sendContact",
          "description": "Send Contact with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send contact.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send contact and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Reaction",
          "value": "sendReaction",
          "description": "Send Reaction with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send reaction.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send reaction and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Template",
          "value": "sendTemplate",
          "description": "Send Template with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send template.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send template and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        }
      ]
    },
    {
      "name": "Template",
      "description": "Template is a WhatsApp Cloud resource available in this node.",
      "operations": [
        {
          "name": "Send Text",
          "value": "sendText",
          "description": "Send Text with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send text.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send text and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Media",
          "value": "sendMedia",
          "description": "Send Media with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send media.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Location",
          "value": "sendLocation",
          "description": "Send Location with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send location.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send location and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Contact",
          "value": "sendContact",
          "description": "Send Contact with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send contact.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send contact and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Reaction",
          "value": "sendReaction",
          "description": "Send Reaction with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send reaction.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send reaction and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Template",
          "value": "sendTemplate",
          "description": "Send Template with the WhatsApp Cloud node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "example": "+1234567890",
              "placeholder": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "string",
              "required": false,
              "description": "Alias for text (legacy)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "ID of the stored credential to use",
              "example": "whatsapp_api_123",
              "placeholder": "whatsapp_api_123"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the WhatsApp Cloud node.\nconvertible: Value returned by the WhatsApp Cloud node.\ndefaultValue: Value returned by the WhatsApp Cloud node.",
          "usageExample": {
            "scenario": "Use WhatsApp Cloud in a workflow and pass upstream data into send template.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "To": "+1234567890",
              "Text": "{{$json.message}}",
              "Message": "Created from workflow data: {{ $json.summary }}",
              "Media Url": "https://api.example.com/resource",
              "Api Key": "your-whatsapp-api-token",
              "Credential Id": "whatsapp_api_123"
            },
            "expectedOutput": "The node runs send template and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
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
