import type { NodeDoc } from '../types';

export const whatsappCloudDoc: NodeDoc = {
  "slug": "whatsapp_cloud",
  "displayName": "WhatsApp Cloud",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp_cloud.svg",
  "description": "Send messages via WhatsApp Cloud API",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference",
  "resources": [
    {
      "name": "Operations",
      "description": "WhatsApp Cloud exposes operation choices directly.",
      "operations": [
        {
          "name": "SendText",
          "value": "sendText",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendMedia",
          "value": "sendMedia",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendLocation",
          "value": "sendLocation",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendContact",
          "value": "sendContact",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendReaction",
          "value": "sendReaction",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendTemplate",
          "value": "sendTemplate",
          "description": "Send a WhatsApp message via the Meta WhatsApp Cloud API.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "example": "abc123",
              "placeholder": "abc123"
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
              "type": "textarea",
              "description": "Text content (for sendText)",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "description": "Alias for text (legacy)"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL (for sendMedia)",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "description": "WhatsApp Cloud API Token (required for authentication)",
              "example": "your-whatsapp-api-token",
              "placeholder": "your-whatsapp-api-token",
              "notes": "Stored and displayed as a masked credential value."
            }
          ],
          "outputExample": {
            "messaging_product": "whatsapp",
            "contacts": [
              {
                "input": "+1234567890",
                "wa_id": "1234567890"
              }
            ],
            "messages": [
              {
                "id": "wamid.abc123"
              }
            ]
          },
          "outputDescription": "contacts: Array of recipient contact objects. messages[0].id: The WhatsApp message ID.",
          "usageExample": {
            "scenario": "Send an order confirmation via WhatsApp after a Shopify purchase",
            "inputValues": {
              "to": "{{$json.customerPhone}}",
              "text": "Hi {{$json.customerName}} 👋 Your order #{{$json.orderId}} has been confirmed! Expected delivery: {{$json.deliveryDate}}."
            },
            "expectedOutput": "WhatsApp message is delivered. Track delivery status using the message ID."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the WhatsApp Cloud node."
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
