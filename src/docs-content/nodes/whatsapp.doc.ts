import type { NodeDoc } from '../types';

export const whatsappDoc: NodeDoc = {
  "slug": "whatsapp",
  "displayName": "WhatsApp",
  "category": "Communication",
  "logoUrl": "/icons/nodes/whatsapp.svg",
  "description": "Send messages, manage contacts and conversations via WhatsApp Business API Use this node when a workflow needs whatsapp behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "WhatsApp exposes operation choices directly.",
      "operations": [
        {
          "name": "Send Text",
          "value": "sendText",
          "description": "Send Text with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send text.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send text and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Media",
          "value": "sendMedia",
          "description": "Send Media with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send media.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send media and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Location",
          "value": "sendLocation",
          "description": "Send Location with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send location.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send location and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Contact",
          "value": "sendContact",
          "description": "Send Contact with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send contact.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send contact and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Template",
          "value": "sendTemplate",
          "description": "Send Template with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send template.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send template and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Interactive Buttons",
          "value": "sendInteractiveButtons",
          "description": "Send Interactive Buttons with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send interactive buttons.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send interactive buttons and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Interactive List",
          "value": "sendInteractiveList",
          "description": "Send Interactive List with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send interactive list.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send interactive list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Send Interactive C T A",
          "value": "sendInteractiveCTA",
          "description": "Send Interactive C T A with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into send interactive c t a.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs send interactive c t a and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
        },
        {
          "name": "Mark As Read",
          "value": "markAsRead",
          "description": "Mark As Read with the WhatsApp node using the configured input fields.",
          "fields": [
            {
              "name": "Phone Number Id",
              "internalKey": "phoneNumberId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Phone Number ID (auto-resolved if absent)",
              "example": "{{ $json.phoneNumberId }}"
            },
            {
              "name": "Business Account Id",
              "internalKey": "businessAccountId",
              "type": "string",
              "required": false,
              "description": "WhatsApp Business Account ID (auto-resolved if absent)",
              "example": "{{ $json.businessAccountId }}"
            },
            {
              "name": "To",
              "internalKey": "to",
              "type": "string",
              "required": false,
              "description": "Recipient phone number in E.164 format",
              "example": "{{ $json.to }}"
            },
            {
              "name": "Text",
              "internalKey": "text",
              "type": "string",
              "required": false,
              "description": "Message text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Preview Url",
              "internalKey": "previewUrl",
              "type": "url",
              "required": false,
              "description": "Enable URL preview in text messages",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Media Type",
              "internalKey": "mediaType",
              "type": "string",
              "required": false,
              "description": "Media type",
              "example": "image",
              "placeholder": "image"
            },
            {
              "name": "Media Url",
              "internalKey": "mediaUrl",
              "type": "url",
              "required": false,
              "description": "Media URL",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Media Id",
              "internalKey": "mediaId",
              "type": "string",
              "required": false,
              "description": "Media ID (alternative to mediaUrl)",
              "example": "{{ $json.mediaId }}"
            },
            {
              "name": "Caption",
              "internalKey": "caption",
              "type": "string",
              "required": false,
              "description": "Media caption",
              "example": "{{ $json.caption }}"
            },
            {
              "name": "Latitude",
              "internalKey": "latitude",
              "type": "number",
              "required": false,
              "description": "Location latitude",
              "example": "25"
            },
            {
              "name": "Longitude",
              "internalKey": "longitude",
              "type": "number",
              "required": false,
              "description": "Location longitude",
              "example": "25"
            },
            {
              "name": "Location Name",
              "internalKey": "locationName",
              "type": "string",
              "required": false,
              "description": "Location name",
              "example": "{{ $json.locationName }}"
            },
            {
              "name": "Address",
              "internalKey": "address",
              "type": "string",
              "required": false,
              "description": "Location address",
              "example": "{{ $json.address }}"
            },
            {
              "name": "Contacts",
              "internalKey": "contacts",
              "type": "json",
              "required": false,
              "description": "Contact objects for sendContact",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Name",
              "internalKey": "templateName",
              "type": "string",
              "required": false,
              "description": "Template name",
              "example": "{{ $json.templateName }}"
            },
            {
              "name": "Language",
              "internalKey": "language",
              "type": "string",
              "required": false,
              "description": "Template language code (e.g. en_US)",
              "example": "{{ $json.language }}"
            },
            {
              "name": "Template Components",
              "internalKey": "templateComponents",
              "type": "json",
              "required": false,
              "description": "Template components",
              "example": "[\"value\"]"
            },
            {
              "name": "Template Category",
              "internalKey": "templateCategory",
              "type": "string",
              "required": false,
              "description": "Template category",
              "example": "MARKETING",
              "placeholder": "MARKETING"
            },
            {
              "name": "Template Status",
              "internalKey": "templateStatus",
              "type": "string",
              "required": false,
              "description": "Template approval status (must be APPROVED to send)",
              "example": "{{ $json.templateStatus }}"
            },
            {
              "name": "Body Text",
              "internalKey": "bodyText",
              "type": "string",
              "required": false,
              "description": "Interactive message body text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Header Text",
              "internalKey": "headerText",
              "type": "string",
              "required": false,
              "description": "Interactive message header text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Footer Text",
              "internalKey": "footerText",
              "type": "string",
              "required": false,
              "description": "Interactive message footer text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Buttons",
              "internalKey": "buttons",
              "type": "json",
              "required": false,
              "description": "Interactive buttons",
              "example": "[\"value\"]"
            },
            {
              "name": "Button Text",
              "internalKey": "buttonText",
              "type": "string",
              "required": false,
              "description": "List button text",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Sections",
              "internalKey": "sections",
              "type": "json",
              "required": false,
              "description": "List sections",
              "example": "[\"value\"]"
            },
            {
              "name": "Cta Url",
              "internalKey": "ctaUrl",
              "type": "json",
              "required": false,
              "description": "CTA URL object { display_text, url }",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Message Id",
              "internalKey": "messageId",
              "type": "string",
              "required": false,
              "description": "Message ID (for markAsRead)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Contact Id",
              "internalKey": "contactId",
              "type": "string",
              "required": false,
              "description": "Contact ID",
              "example": "{{ $json.contactId }}"
            },
            {
              "name": "Contact Name",
              "internalKey": "contactName",
              "type": "string",
              "required": false,
              "description": "Contact name",
              "example": "{{ $json.contactName }}"
            },
            {
              "name": "Contact Phone",
              "internalKey": "contactPhone",
              "type": "string",
              "required": false,
              "description": "Contact phone",
              "example": "{{ $json.contactPhone }}"
            },
            {
              "name": "Contact Email",
              "internalKey": "contactEmail",
              "type": "email",
              "required": false,
              "description": "Contact email",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Labels",
              "internalKey": "labels",
              "type": "json",
              "required": false,
              "description": "Contact labels",
              "example": "[\"value\"]"
            },
            {
              "name": "Conversation Id",
              "internalKey": "conversationId",
              "type": "string",
              "required": false,
              "description": "Conversation ID",
              "example": "{{ $json.conversationId }}"
            },
            {
              "name": "Recipients",
              "internalKey": "recipients",
              "type": "json",
              "required": false,
              "description": "Campaign recipients (array of phone numbers)",
              "example": "[\"value\"]"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Pagination limit",
              "example": "20",
              "defaultValue": "20"
            },
            {
              "name": "After",
              "internalKey": "after",
              "type": "string",
              "required": false,
              "description": "Pagination cursor",
              "example": "{{ $json.after }}"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (ignores limit)",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "messageId": "messageId",
            "data": {},
            "error": {}
          },
          "outputDescription": "messageId: Value returned by the WhatsApp node.\ndata: Value returned by the WhatsApp node.\nerror: Value returned by the WhatsApp node.",
          "usageExample": {
            "scenario": "Use WhatsApp in a workflow and pass upstream data into mark as read.",
            "inputValues": {
              "Phone Number Id": "{{ $json.phoneNumberId }}",
              "Business Account Id": "{{ $json.businessAccountId }}",
              "To": "{{ $json.to }}",
              "Text": "Created from workflow data: {{ $json.summary }}",
              "Preview Url": "false",
              "Media Type": "image",
              "Media Url": "https://api.example.com/resource",
              "Media Id": "{{ $json.mediaId }}",
              "Caption": "{{ $json.caption }}",
              "Latitude": "25"
            },
            "expectedOutput": "The node runs mark as read and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.facebook.com/docs/whatsapp/cloud-api/reference"
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
