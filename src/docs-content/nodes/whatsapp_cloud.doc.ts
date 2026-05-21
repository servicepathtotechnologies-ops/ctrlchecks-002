import type { NodeDoc } from '../types';

export const whatsappCloudDoc: NodeDoc = {
  "slug": "whatsapp_cloud",
  "displayName": "WhatsApp Cloud",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp_cloud.svg",
  "description": "Send messages via WhatsApp Cloud API",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "What this is: Meta Apps uses an OAuth connection so CtrlChecks can safely access your Meta Apps account.",
    "Go to developers.facebook.com/apps and sign in with your Facebook account.",
    "Click \"Create App\" -> select \"Business\" type -> Next -> give it a name -> Create App.",
    "Under \"Add Products to Your App\", click \"Set Up\" on Facebook Login.",
    "Go to Facebook Login -> Settings -> add this URL to \"Valid OAuth Redirect URIs\": http://localhost:3001/api/oauth/facebook/callback -> Save Changes.",
    "Copy the App ID and App Secret from Settings -> Basic.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Facebook -> click \"Connect with Facebook\" -> sign in and authorize.",
    "Run a test step to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Meta Apps node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/facebook-login/web",
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Text content (for sendText)",
              "helpText": "What this field is: The message content the recipient will receive.\nExample: Hi {{$json.name}}, your order #{{$json.orderId}} has been confirmed and will ship in 2 days.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Alias for text (legacy)",
              "helpText": "What this field is: Alias for text (legacy) for WhatsApp Cloud / SendText.\nHow to fill it: Type the message, prompt, or content you want WhatsApp Cloud to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL (for sendMedia)",
              "helpText": "What this field is: Media URL (for sendMedia) for WhatsApp Cloud / SendMedia.\nHow to fill it: Paste the full web address WhatsApp Cloud should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
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
              "helpText": "What this field is: The type of WhatsApp message to send.\nOptions: send_text (regular text message), send_template (pre-approved template), send_media (image or document).\nExample: send_text for a regular message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": true,
              "description": "WhatsApp Phone Number ID (required for message operations)",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID from Meta.\nWhere to find it: Meta Business Suite → WhatsApp → Settings → Phone Numbers → copy the Phone Number ID (a long number, NOT the actual phone number itself).\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": true,
              "description": "Recipient phone number",
              "helpText": "What this field is: The recipient's WhatsApp phone number with country code.\nFormat: + country code + number, no spaces or dashes.\nExamples: +14155552671 (USA), +919876543210 (India), +447911123456 (UK)\nTip: Use {{$json.phone}} from an earlier step.",
              "placeholder": "+1234567890",
              "example": "+1234567890"
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
