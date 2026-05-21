type FieldGuideInput = {
  nodeType: string;
  nodeLabel: string;
  fieldKey: string;
  fieldLabel: string;
  fieldType?: string;
  fieldDescription?: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  config?: Record<string, unknown>;
  fallbackHelpText?: string;
};

const RESOURCE_LABELS: Record<string, Record<string, string>> = {
  hubspot: {
    contact: 'contact',
    company: 'company',
    deal: 'deal',
    ticket: 'ticket',
    product: 'product',
    line_item: 'line item',
    quote: 'quote',
    owner: 'owner',
    pipeline: 'pipeline',
  },
  whatsapp: {
    message: 'message',
    contact: 'contact card',
    conversation: 'conversation',
    template: 'message template',
    campaign: 'campaign',
    aiAgent: 'AI agent',
  },
  whatsapp_cloud: {
    message: 'message',
    media: 'media file',
    template: 'message template',
  },
};

const HUBSPOT_PROPERTY_EXAMPLES: Record<string, string> = {
  contact: '{"email":"alice@example.com","firstname":"Alice","lastname":"Kumar","phone":"+919876543210"}',
  company: '{"name":"Acme Foods","domain":"acmefoods.com","city":"Bengaluru"}',
  deal: '{"dealname":"Website redesign","amount":"25000","pipeline":"default","dealstage":"appointmentscheduled"}',
  ticket: '{"subject":"Login not working","content":"Customer cannot sign in","hs_pipeline":"0","hs_pipeline_stage":"1"}',
  product: '{"name":"Premium Plan","price":"4999","description":"Annual subscription"}',
};

function titleCase(value: unknown): string {
  return String(value || '')
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function currentResource(input: FieldGuideInput): string {
  return String(input.config?.resource || input.config?.object || input.config?.entity || '').trim();
}

function currentOperation(input: FieldGuideInput): string {
  return String(input.config?.operation || input.config?.action || input.config?.method || '').trim();
}

function dynamicExample(fieldKey: string): string {
  return `Dynamic example: {{$json.${fieldKey}}} uses the ${fieldKey} value from an earlier node.`;
}

function optionList(options?: Array<{ label: string; value: string }>): string | null {
  if (!options || options.length === 0) return null;
  return `Available choices: ${options.map((option) => `${option.label} (${option.value})`).join(', ')}.`;
}

export function buildContextualFieldHelp(input: FieldGuideInput): string {
  const nodeType = input.nodeType;
  const nodeName = input.nodeLabel || titleCase(nodeType);
  const key = input.fieldKey;
  const lower = key.toLowerCase();
  const resourceValue = currentResource(input);
  const operationValue = currentOperation(input);
  const resourceName =
    RESOURCE_LABELS[nodeType]?.[resourceValue] ||
    (resourceValue ? titleCase(resourceValue).toLowerCase() : 'selected record');
  const operationName = operationValue ? titleCase(operationValue) : 'selected operation';
  const description = input.fieldDescription || input.fieldLabel;
  const options = optionList(input.options);

  if (lower === 'resource') {
    return [
      `What this field is: Resource chooses the kind of ${nodeName} item this node works with.`,
      `How to choose it: Pick the object you want this step to work on, such as Contact, Company, Deal, Message, Template, or another option shown in the dropdown.`,
      options,
      `Current selection: ${resourceValue ? titleCase(resourceValue) : 'none selected yet'}.`,
      `Example: In ${nodeName}, pick the type of record you want to work with — each choice gives you different fields and operations.`,
    ].filter(Boolean).join('\n');
  }

  if (lower === 'operation') {
    return [
      `What this field is: Operation chooses the exact action ${nodeName} will perform on the ${resourceName}.`,
      `How to choose it: Pick Create to add a new ${resourceName}, Update to change an existing ${resourceName}, Get to read one ${resourceName}, Search/Get Many to find records, or Delete only when you want to remove data.`,
      options,
      `Current setup: ${nodeName} -> ${resourceValue ? titleCase(resourceValue) : 'Resource not selected'} -> ${operationName}.`,
      `Example: For ${nodeName}${resourceValue ? ' ' + titleCase(resourceValue) : ''} ${operationName}, CtrlChecks runs the ${operationName.toLowerCase()} action${resourceValue ? ' on the selected ' + resourceName : ''} and returns the result.`,
      `Output: This operation returns the provider's result, usually including an ID that later nodes can use.`,
    ].filter(Boolean).join('\n');
  }

  if (nodeType === 'hubspot' && lower === 'properties') {
    const example = HUBSPOT_PROPERTY_EXAMPLES[resourceValue] || HUBSPOT_PROPERTY_EXAMPLES.contact;
    return [
      `What this field is: Properties are the HubSpot fields CtrlChecks will send when it ${operationName.toLowerCase()}s a ${resourceName}.`,
      `Where to get property names: In HubSpot, open Settings -> Properties, choose the ${titleCase(resourceValue || 'contact')} object, then copy the internal property name such as email, firstname, lastname, amount, dealstage, or phone.`,
      `How to fill it: Add one property per row in the editor, or provide a JSON object where each key is the HubSpot internal property name.`,
      `Example for ${titleCase(resourceValue || 'contact')}: ${example}`,
      `Dynamic example: Set email to {{$json.email}} and firstname to {{$json.firstName}} when those values come from a form, sheet, or webhook.`,
      `Common mistake: Do not type the visible label if HubSpot uses a different internal name. Use HubSpot's internal property name.`,
      `Output: HubSpot returns the created or updated object with its HubSpot record ID.`,
    ].join('\n');
  }

  if ((nodeType === 'whatsapp' || nodeType === 'whatsapp_cloud') && (lower === 'to' || lower.includes('phone'))) {
    return [
      `What this field is: This identifies the WhatsApp recipient or the WhatsApp Business phone number used to send the message.`,
      `Where to find it: Recipient numbers come from your customer data. Phone Number ID comes from Meta Business Manager -> WhatsApp -> API Setup.`,
      `Format: Use country code and digits only for recipients, for example 919876543210 or +919876543210 depending on the node field. Do not add spaces or brackets.`,
      `Example: 919876543210`,
      dynamicExample(key),
      `Output: WhatsApp returns a message ID when the message/contact/template is accepted by the Cloud API.`,
    ].join('\n');
  }

  if ((nodeType === 'whatsapp' || nodeType === 'whatsapp_cloud') && lower === 'contacts') {
    return [
      `What this field is: Contacts is the contact card that will be sent inside WhatsApp.`,
      `How to fill it: Provide a JSON array of contact objects with name and phone details.`,
      `Example format: [{"name":{"formatted_name":"Alice Kumar","first_name":"Alice","last_name":"Kumar"},"phones":[{"phone":"+919876543210","type":"MOBILE"}]}]`,
      `What the user sees: The recipient receives a WhatsApp contact card they can save to their phone.`,
      `Common mistake: This does not create a contact inside Meta automatically; it sends contact information to a WhatsApp chat.`,
    ].join('\n');
  }

  if (lower.includes('template')) {
    return [
      `What this field is: This is the approved template information ${nodeName} uses for template-based messages.`,
      `Where to find it: Open the provider dashboard, go to message templates, and copy the exact template name, language code, and component values.`,
      `Example: templateName = order_update, language = en_US.`,
      `Common mistake: Templates must be approved by the provider before they can be sent to users outside the 24-hour customer-service window.`,
      dynamicExample(key),
    ].filter(Boolean).join('\n');
  }

  if (lower.includes('id')) {
    return [
      `What this field is: ${description} for ${nodeName}${operationValue ? ` ${operationName}` : ''}.`,
      `Where to find it: Open the record in ${nodeName} and copy the ID from the URL, details page, API response, or a previous node output.`,
      `Example: ${input.placeholder || '123456789'}.`,
      dynamicExample(key),
    ].join('\n');
  }

  if (input.fieldType === 'select' || input.options?.length) {
    return [
      `What this field is: ${description} for ${nodeName}${operationValue ? ` ${operationName}` : ''}.`,
      `How to choose it: Pick the option that matches what you want this step to do. The choices shown are valid for this node.`,
      options,
      `Current setup: ${nodeName}${resourceValue ? ` -> ${titleCase(resourceValue)}` : ''}${operationValue ? ` -> ${operationName}` : ''}.`,
    ].filter(Boolean).join('\n');
  }

  if (input.fieldType === 'json' || input.fieldType === 'keyValue' || input.fieldType === 'hubspotProperties') {
    return [
      `What this field is: ${description} for ${nodeName}${operationValue ? ` ${operationName}` : ''}.`,
      `How to fill it: Enter key-value pairs or valid JSON in the exact format expected by ${nodeName}.`,
      `Example: ${input.placeholder || '{"name":"Alice","email":"alice@example.com"}'}.`,
      dynamicExample(key),
    ].join('\n');
  }

  return [
    `What this field is: ${description} for ${nodeName}${resourceValue ? ` ${titleCase(resourceValue)}` : ''}${operationValue ? ` ${operationName}` : ''}.`,
    `How to fill it: Type the value ${nodeName} needs for this field, or use a value from an earlier workflow step.`,
    input.placeholder ? `Example: ${input.placeholder}.` : null,
    dynamicExample(key),
  ].filter(Boolean).join('\n');
}

export function shouldShowFieldForContext(
  nodeType: string,
  fieldKey: string,
  config: Record<string, unknown> = {},
): boolean {
  const key = fieldKey;
  const op = String(config.operation || '').trim();

  if (nodeType === 'hubspot') {
    const hubspotFields: Record<string, string[]> = {
      get: ['resource', 'operation', 'id', 'objectId'],
      getMany: ['resource', 'operation', 'limit', 'after'],
      create: ['resource', 'operation', 'properties'],
      update: ['resource', 'operation', 'id', 'objectId', 'properties'],
      delete: ['resource', 'operation', 'id', 'objectId'],
      search: ['resource', 'operation', 'searchQuery', 'limit', 'after'],
      batchCreate: ['resource', 'operation', 'properties'],
      batchUpdate: ['resource', 'operation', 'properties'],
      batchDelete: ['resource', 'operation', 'id', 'objectId'],
    };
    return (hubspotFields[op] || hubspotFields.create).includes(key);
  }

  if (nodeType === 'whatsapp' || nodeType === 'whatsapp_cloud') {
    const common = ['resource', 'operation', 'phoneNumberId', 'businessAccountId', 'to'];
    const whatsappFields: Record<string, string[]> = {
      sendText: [...common, 'text', 'message', 'previewUrl'],
      sendMedia: [...common, 'mediaType', 'mediaUrl', 'mediaId', 'caption'],
      sendLocation: [...common, 'latitude', 'longitude', 'locationName', 'address'],
      sendContact: [...common, 'contacts'],
      sendReaction: [...common, 'messageId', 'emoji'],
      sendTemplate: [...common, 'templateName', 'language', 'templateComponents'],
      sendInteractiveButtons: [...common, 'bodyText', 'headerText', 'footerText', 'buttons'],
      sendInteractiveList: [...common, 'bodyText', 'headerText', 'footerText', 'buttonText', 'sections'],
      sendInteractiveCTA: [...common, 'bodyText', 'headerText', 'footerText', 'ctaUrl'],
      markAsRead: ['resource', 'operation', 'phoneNumberId', 'messageId'],
    };
    return (whatsappFields[op] || whatsappFields.sendText).includes(key);
  }

  return true;
}
