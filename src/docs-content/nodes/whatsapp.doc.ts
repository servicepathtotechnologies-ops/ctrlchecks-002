import type { NodeDoc } from '../types';

export const whatsappDoc: NodeDoc = {
  "slug": "whatsapp",
  "displayName": "WhatsApp",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp.svg",
  "description": "Send messages, manage contacts and conversations via WhatsApp Business API",
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
      "description": "WhatsApp exposes operation choices directly.",
      "operations": [
        {
          "name": "SendText",
          "value": "sendText",
          "description": "SendText using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendText.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "helpText": "What this field is: The message the recipient will receive on WhatsApp.\nHow to fill it: Type your message. Keep it clear and conversational.\nExample: Hello {{$json.name}}, your delivery is arriving today between 2-4 PM. Track it here: {{$json.trackingUrl}}\nTip: Use {{$json.field}} to personalize the message with data from an earlier step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview",
              "helpText": "What this field is: Enable URL preview for WhatsApp / SendText.\nHow to fill it: Paste the full web address WhatsApp should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.previewUrl}} or pick the value from the data picker.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send text after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "WhatsApp returns structured send text data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendMedia",
          "value": "sendMedia",
          "description": "SendMedia using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendMedia.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "helpText": "What this field is: Media type for WhatsApp / SendMedia.\nHow to fill it: Enter the media type value requested by WhatsApp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mediaType}} or pick the value from the data picker.",
              "placeholder": "image",
              "example": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "helpText": "What this field is: Media URL for WhatsApp / SendMedia.\nHow to fill it: Paste the full web address WhatsApp should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.mediaUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID",
              "helpText": "What this field is: Media ID for WhatsApp / SendMedia.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.mediaId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "helpText": "What this field is: Media caption for WhatsApp / SendMedia.\nHow to fill it: Enter the caption value requested by WhatsApp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.caption}} or pick the value from the data picker.",
              "placeholder": "Enter Caption"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send media after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Media Type": "image"
            },
            "expectedOutput": "WhatsApp returns structured send media data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendLocation",
          "value": "sendLocation",
          "description": "SendLocation using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendLocation.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "helpText": "What this field is: A number used for latitude in WhatsApp / SendLocation.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.latitude}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "helpText": "What this field is: A number used for longitude in WhatsApp / SendLocation.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.longitude}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "helpText": "What this field is: Location name for WhatsApp / SendLocation.\nHow to fill it: Enter the location name value requested by WhatsApp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.locationName}} or pick the value from the data picker.",
              "placeholder": "Enter Location Name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "helpText": "What this field is: Location address for WhatsApp / SendLocation.\nHow to fill it: Enter the address value requested by WhatsApp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.address}} or pick the value from the data picker.",
              "placeholder": "Enter Address"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send location after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Latitude": "10"
            },
            "expectedOutput": "WhatsApp returns structured send location data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendContact",
          "value": "sendContact",
          "description": "SendContact using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendContact.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects",
              "helpText": "What this field is: Contact data that WhatsApp sends as a contact card during WhatsApp / SendContact.\nHow to fill it: Provide a JSON array of contact objects with name and phone information.\nExample: [{\"name\":{\"formatted_name\":\"Alice Kumar\",\"first_name\":\"Alice\"},\"phones\":[{\"phone\":\"+919876543210\",\"type\":\"MOBILE\"}]}]\nWhat the user sees: The recipient receives a WhatsApp contact card they can save on their phone.",
              "placeholder": "[{\"name\":{\"formatted_name\":\"Alice Kumar\",\"first_name\":\"Alice\"},\"phones\":[{\"phone\":\"+919876543210\",\"type\":\"MOBILE\"}]}]",
              "example": "[{\"name\":{\"formatted_name\":\"Alice Kumar\",\"first_name\":\"Alice\"},\"phones\":[{\"phone\":\"+919876543210\",\"type\":\"MOBILE\"}]}]"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send contact after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Contacts": "[{\"name\":{\"formatted_name\":\"Alice Kumar\",\"first_name\":\"Alice\"},\"phones\":[{\"phone\":\"+919876543210\",\"type\":\"MOBILE\"}]}]"
            },
            "expectedOutput": "WhatsApp returns structured send contact data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendTemplate",
          "value": "sendTemplate",
          "description": "SendTemplate using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendTemplate.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "required": false,
              "description": "Template name",
              "helpText": "What this field is: The name of a pre-written and pre-approved WhatsApp message template.\nImportant: You cannot send free-form messages to new contacts on WhatsApp — you must use an approved template.\nWhere to find your templates: Meta Business Suite (business.facebook.com) → WhatsApp → Message Templates. The \"Template Name\" column shows the exact name to enter here.\nExample: order_confirmation or welcome_message or appointment_reminder",
              "placeholder": "Enter Template Name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code",
              "helpText": "What this field is: Template language code for WhatsApp / SendTemplate.\nHow to fill it: Enter the language value requested by WhatsApp, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.language}} or pick the value from the data picker.",
              "placeholder": "Enter Language"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "required": false,
              "description": "Template components",
              "helpText": "What this field is: Template components for WhatsApp / SendTemplate.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send template after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Template Name": ""
            },
            "expectedOutput": "WhatsApp returns structured send template data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendInteractiveButtons",
          "value": "sendInteractiveButtons",
          "description": "SendInteractiveButtons using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendInteractiveButtons.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "required": false,
              "description": "Interactive message body text",
              "helpText": "What this field is: Interactive message body text for WhatsApp / SendInteractiveButtons.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "helpText": "What this field is: Interactive message header text for WhatsApp / SendInteractiveButtons.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "helpText": "What this field is: Interactive message footer text for WhatsApp / SendInteractiveButtons.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "helpText": "What this field is: Interactive buttons for WhatsApp / SendInteractiveButtons.\nHow to fill it: Enter valid JSON in the format WhatsApp expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.buttons}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send interactive buttons after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Body Text": ""
            },
            "expectedOutput": "WhatsApp returns structured send interactive buttons data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendInteractiveList",
          "value": "sendInteractiveList",
          "description": "SendInteractiveList using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendInteractiveList.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "required": false,
              "description": "Interactive message body text",
              "helpText": "What this field is: Interactive message body text for WhatsApp / SendInteractiveList.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "helpText": "What this field is: Interactive message header text for WhatsApp / SendInteractiveList.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "helpText": "What this field is: Interactive message footer text for WhatsApp / SendInteractiveList.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "helpText": "What this field is: List button text for WhatsApp / SendInteractiveList.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "helpText": "What this field is: List sections for WhatsApp / SendInteractiveList.\nHow to fill it: Enter valid JSON in the format WhatsApp expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.sections}} or pick the value from the data picker.",
              "placeholder": "[\"item\"]",
              "example": "[\"item\"]"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send interactive list after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Body Text": ""
            },
            "expectedOutput": "WhatsApp returns structured send interactive list data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "SendInteractiveCTA",
          "value": "sendInteractiveCTA",
          "description": "SendInteractiveCTA using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID",
              "helpText": "What this field is: WhatsApp Business Account ID for WhatsApp / SendInteractiveCTA.\nWhere to find it: Open the item in WhatsApp and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.businessAccountId}} or pick the value from the data picker.",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number",
              "helpText": "What this field is: The WhatsApp phone number of the person you want to message.\nFormat: Must include country code with + sign. No spaces, no dashes, no brackets.\nExamples:\n  +14155552671   →  USA number\n  +919876543210  →  India number\n  +447911123456  →  UK number\n  +61412345678   →  Australia number\nHow to format: + then country code then the number. For USA: +1 then the 10-digit number.\nTip: Use {{$json.phone}} if the number comes from an earlier step like a form or database.",
              "placeholder": "alice@example.com"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "required": false,
              "description": "Interactive message body text",
              "helpText": "What this field is: Interactive message body text for WhatsApp / SendInteractiveCTA.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"name\":\"{{$json.name}}\"}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "helpText": "What this field is: Interactive message header text for WhatsApp / SendInteractiveCTA.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "helpText": "What this field is: Interactive message footer text for WhatsApp / SendInteractiveCTA.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "required": false,
              "description": "CTA URL object",
              "helpText": "What this field is: CTA URL object for WhatsApp / SendInteractiveCTA.\nHow to fill it: Paste the full web address WhatsApp should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.ctaUrl}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com",
              "example": "https://api.example.com"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with send interactive cta after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Body Text": ""
            },
            "expectedOutput": "WhatsApp returns structured send interactive cta data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "MarkAsRead",
          "value": "markAsRead",
          "description": "MarkAsRead using the WhatsApp node.",
          "fields": [
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "WhatsApp resource",
              "helpText": "What this field is: The type of WhatsApp action this node will perform.\nHow to choose: Pick the action that matches what you want to do — send a text message, send a template, or send media.\nExample: Choose \"send_text\" to send a regular WhatsApp text message.",
              "placeholder": "message",
              "example": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID",
              "helpText": "What this field is: Your WhatsApp Business Phone Number ID — a long number Meta assigns to your business phone number.\nWhere to find it: Log in to Meta Business Suite (business.facebook.com) → WhatsApp → Settings → Phone Numbers. Copy the \"Phone Number ID\" shown there — it is a long number like 123456789012345. This is NOT your actual phone number — it is a Meta-assigned ID.\nExample: 123456789012345",
              "placeholder": "abc123",
              "example": "abc123"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID",
              "helpText": "What this field is: Message ID for WhatsApp / MarkAsRead.\nHow to fill it: Type the message, prompt, or content you want WhatsApp to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "abc123",
              "example": "abc123"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming WhatsApp data with mark as read after a related upstream event is received",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Message Id": "abc123"
            },
            "expectedOutput": "WhatsApp returns structured mark as read data that downstream nodes can reference with {{$json.fieldName}}."
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
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the WhatsApp node."
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
