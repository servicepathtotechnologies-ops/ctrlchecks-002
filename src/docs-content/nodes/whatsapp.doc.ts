import type { NodeDoc } from '../types';

export const whatsappDoc: NodeDoc = {
  "slug": "whatsapp",
  "displayName": "WhatsApp",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp.svg",
  "description": "Send messages, manage contacts and conversations via WhatsApp Business API",
  "credentialType": "Meta App Credentials",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference",
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendtext in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendtext and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendmedia in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendmedia and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendlocation in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendlocation and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendcontact in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendcontact and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendtemplate in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendtemplate and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendinteractivebuttons in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendinteractivebuttons and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendinteractivelist in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendinteractivelist and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to sendinteractivecta in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes sendinteractivecta and exposes its result for downstream nodes."
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
              "example": "message",
              "placeholder": "message",
              "defaultValue": "message"
            },
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "description": "WhatsApp Phone Number ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "description": "WhatsApp Business Account ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "description": "Recipient phone number"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "textarea",
              "description": "Message text"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "description": "Enable URL preview",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "description": "Media URL",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "description": "Media ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "description": "Media caption"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "description": "Location latitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "description": "Location longitude",
              "example": "10",
              "placeholder": "10"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "description": "Location name"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "description": "Location address"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "description": "Contact objects",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "textarea",
              "description": "Template name"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "description": "Template language code"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "textarea",
              "description": "Template components",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "textarea",
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "textarea",
              "description": "Template approval status"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "textarea",
              "description": "Interactive message body text"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "description": "Interactive message header text"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "description": "Interactive message footer text"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "description": "Interactive buttons",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "description": "List button text"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "description": "List sections",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "url",
              "description": "CTA URL object",
              "example": "https://api.example.com",
              "placeholder": "https://api.example.com"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "description": "Message ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "description": "Contact ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "description": "Contact name"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "description": "Contact phone"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "description": "Contact email",
              "example": "user@example.com",
              "placeholder": "user@example.com"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "description": "Contact labels",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "description": "Conversation ID",
              "example": "abc123",
              "placeholder": "abc123"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "description": "Campaign recipients",
              "example": "[\"item\"]",
              "placeholder": "[\"item\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Pagination limit",
              "example": "20",
              "placeholder": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "description": "Pagination cursor"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "description": "Return all results",
              "example": "false",
              "placeholder": "false",
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use WhatsApp to markasread in a workflow.",
            "inputValues": {
              "Resource": "message",
              "Phone Number Id": "abc123",
              "Business Account Id": "abc123",
              "To": "",
              "Text": ""
            },
            "expectedOutput": "The node executes markasread and exposes its result for downstream nodes."
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
