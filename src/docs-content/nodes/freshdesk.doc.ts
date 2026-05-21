import type { NodeDoc } from '../types';

export const freshdeskDoc: NodeDoc = {
  "slug": "freshdesk",
  "displayName": "Freshdesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/freshdesk.svg",
  "description": "Freshdesk support operations",
  "credentialType": "Freshdesk API Key",
  "credentialSetupSteps": [
    "What this is: Freshdesk uses an API key or account connection so CtrlChecks can safely access your Freshdesk account.",
    "Log in to your Freshdesk account at yourcompany.freshdesk.com.",
    "Click your profile photo (top right) -> Profile Settings.",
    "On the right side of the page, you will see \"Your API Key\". Copy it.",
    "Note your Freshdesk subdomain - it is the part before .freshdesk.com (e.g. if URL is mycompany.freshdesk.com, subdomain is mycompany).",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Freshdesk -> enter your domain (mycompany.freshdesk.com) and API key -> Save.",
    "Run a test step (e.g. create a test ticket) to confirm it appears in Freshdesk.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Freshdesk node and select the saved connection."
  ],
  "credentialDocsUrl": "https://developers.freshdesk.com/api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Freshdesk exposes operation choices directly.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "helpText": "What this field is: Freshdesk domain (e.g., yourcompany.freshdesk.com) for Freshdesk / Get.\nHow to fill it: Enter the domain value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "mycompany.freshdesk.com",
              "example": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Freshdesk.\nWhere to get it: Open the Freshdesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "helpText": "What this field is: Resource chooses the kind of Freshdesk item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Freshdesk.\nExample: In Freshdesk, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "ticket",
              "example": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "helpText": "What this field is: Resource ID (e.g., ticket ID for get/update/delete) for Freshdesk / Get.\nWhere to find it: Open the item in Freshdesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "12345",
              "example": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject (create)",
              "helpText": "What this field is: Ticket subject (create) for Freshdesk / Get.\nHow to fill it: Enter the subject value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "helpText": "What this field is: Ticket description (create) for Freshdesk / Get.\nHow to fill it: Type the message, prompt, or content you want Freshdesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "helpText": "What this field is: The email address that Freshdesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "helpText": "What this field is: A number used for priority in Freshdesk / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "helpText": "What this field is: A number used for status in Freshdesk / Get.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for Freshdesk / Get.\nHow to fill it: Enter valid JSON in the format Freshdesk expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Freshdesk data with get after a related upstream event is received",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "Freshdesk returns structured get data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "helpText": "What this field is: Freshdesk domain (e.g., yourcompany.freshdesk.com) for Freshdesk / Create.\nHow to fill it: Enter the domain value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "mycompany.freshdesk.com",
              "example": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Freshdesk.\nWhere to get it: Open the Freshdesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "helpText": "What this field is: Resource chooses the kind of Freshdesk item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Freshdesk.\nExample: In Freshdesk, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "ticket",
              "example": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "helpText": "What this field is: Resource ID (e.g., ticket ID for get/update/delete) for Freshdesk / Create.\nWhere to find it: Open the item in Freshdesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "12345",
              "example": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject (create)",
              "helpText": "What this field is: Short summary of the support issue.\nExample: Cannot access dashboard after password reset",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "helpText": "What this field is: Ticket description (create) for Freshdesk / Create.\nHow to fill it: Type the message, prompt, or content you want Freshdesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "helpText": "What this field is: The customer's email address — used to identify who submitted the ticket.\nExample: customer@company.com\nTip: Use {{$json.email}} from a form submission node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "helpText": "What this field is: Issue urgency as a number.\nValues: 1 = Low, 2 = Medium, 3 = High, 4 = Urgent.\nExample: 3 for a high-priority issue.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "helpText": "What this field is: The starting status of the ticket.\nValues: 2 = Open (most common for new tickets), 3 = Pending, 4 = Resolved, 5 = Closed.\nExample: 2",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for Freshdesk / Create.\nHow to fill it: Enter valid JSON in the format Freshdesk expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Freshdesk data with create after a related upstream event is received",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "Freshdesk returns structured create data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "helpText": "What this field is: Freshdesk domain (e.g., yourcompany.freshdesk.com) for Freshdesk / Update.\nHow to fill it: Enter the domain value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "mycompany.freshdesk.com",
              "example": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Freshdesk.\nWhere to get it: Open the Freshdesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "helpText": "What this field is: Resource chooses the kind of Freshdesk item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Freshdesk.\nExample: In Freshdesk, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "ticket",
              "example": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "helpText": "What this field is: Resource ID (e.g., ticket ID for get/update/delete) for Freshdesk / Update.\nWhere to find it: Open the item in Freshdesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "12345",
              "example": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject (create)",
              "helpText": "What this field is: Ticket subject (create) for Freshdesk / Update.\nHow to fill it: Enter the subject value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "helpText": "What this field is: Ticket description (create) for Freshdesk / Update.\nHow to fill it: Type the message, prompt, or content you want Freshdesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "helpText": "What this field is: The email address that Freshdesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "helpText": "What this field is: A number used for priority in Freshdesk / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "helpText": "What this field is: A number used for status in Freshdesk / Update.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for Freshdesk / Update.\nHow to fill it: Enter valid JSON in the format Freshdesk expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Freshdesk data with update after a related upstream event is received",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "Freshdesk returns structured update data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete using the Freshdesk node.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "helpText": "What this field is: Freshdesk domain (e.g., yourcompany.freshdesk.com) for Freshdesk / Delete.\nHow to fill it: Enter the domain value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.domain}} or pick the value from the data picker.",
              "placeholder": "mycompany.freshdesk.com",
              "example": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access Freshdesk.\nWhere to get it: Open the Freshdesk dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "sk_...",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Resource",
              "internalKey": "resource",
              "type": "string",
              "required": true,
              "description": "Resource: ticket, contact, company",
              "helpText": "What this field is: Resource chooses the kind of Freshdesk item this node works with.\nHow to fill it: Pick the service object you want, such as contact, company, deal, message, file, row, issue, or another choice shown by Freshdesk.\nExample: In Freshdesk, pick the type of record you want to work with, such as contact, message, order, or another type shown in this node.\nTip: Choose the resource first, then choose the operation that should happen to that resource.",
              "placeholder": "ticket",
              "example": "ticket",
              "defaultValue": "ticket"
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "helpText": "What this field is: Resource ID (e.g., ticket ID for get/update/delete) for Freshdesk / Delete.\nWhere to find it: Open the item in Freshdesk and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.id}} or pick the value from the data picker.",
              "placeholder": "12345",
              "example": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": true,
              "description": "Ticket subject (create)",
              "helpText": "What this field is: Ticket subject (create) for Freshdesk / Delete.\nHow to fill it: Enter the subject value requested by Freshdesk, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.subject}} or pick the value from the data picker.",
              "placeholder": "Welcome, {{$json.name}}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "helpText": "What this field is: Ticket description (create) for Freshdesk / Delete.\nHow to fill it: Type the message, prompt, or content you want Freshdesk to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "helpText": "What this field is: The email address that Freshdesk should use for email.\nHow to fill it: Type one email address, or multiple addresses separated by commas if the field supports several recipients.\nExample: alice@example.com\nDynamic example: {{$json.email}} uses the email value from an earlier node.",
              "placeholder": "user@example.com",
              "example": "user@example.com"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "helpText": "What this field is: A number used for priority in Freshdesk / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.priority}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "helpText": "What this field is: A number used for status in Freshdesk / Delete.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": true,
              "description": "Payload for create/update",
              "helpText": "What this field is: Payload for create/update for Freshdesk / Delete.\nHow to fill it: Enter valid JSON in the format Freshdesk expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
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
            "scenario": "Process incoming Freshdesk data with delete after a related upstream event is received",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "",
              "Resource": "ticket",
              "Id": "12345",
              "Subject": ""
            },
            "expectedOutput": "Freshdesk returns structured delete data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Freshdesk node."
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
