import type { NodeDoc } from '../types';

export const freshdeskDoc: NodeDoc = {
  "slug": "freshdesk",
  "displayName": "Freshdesk",
  "category": "Data",
  "logoUrl": "/icons/nodes/freshdesk.svg",
  "description": "Freshdesk support operations Use this node when a workflow needs freshdesk behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Freshdesk Credential",
  "credentialSetupSteps": [
    "Open the Freshdesk developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Freshdesk Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://developers.freshdesk.com/api/",
  "resources": [
    {
      "name": "Ticket",
      "description": "Ticket is a Freshdesk resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into get.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into create.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into update.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        }
      ]
    },
    {
      "name": "Contact",
      "description": "Contact is a Freshdesk resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into get.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into create.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into update.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        }
      ]
    },
    {
      "name": "Company",
      "description": "Company is a Freshdesk resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into get.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into create.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into update.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Freshdesk node using the configured input fields.",
          "fields": [
            {
              "name": "Domain",
              "internalKey": "domain",
              "type": "string",
              "required": false,
              "description": "Freshdesk domain (e.g., yourcompany.freshdesk.com)",
              "example": "mycompany.freshdesk.com",
              "placeholder": "mycompany.freshdesk.com"
            },
            {
              "name": "Api Key",
              "internalKey": "apiKey",
              "type": "password",
              "required": false,
              "description": "Freshdesk API key (optional if stored in vault under key \"freshdesk\")",
              "example": "{{ $json.apiKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Id",
              "internalKey": "id",
              "type": "string",
              "required": false,
              "description": "Resource ID (e.g., ticket ID for get/update/delete)",
              "example": "12345",
              "placeholder": "12345"
            },
            {
              "name": "Subject",
              "internalKey": "subject",
              "type": "string",
              "required": false,
              "description": "Ticket subject (create)",
              "example": "{{ $json.subject }}"
            },
            {
              "name": "Description Text",
              "internalKey": "descriptionText",
              "type": "string",
              "required": false,
              "description": "Ticket description (create)",
              "example": "Created from workflow data: {{ $json.summary }}"
            },
            {
              "name": "Email",
              "internalKey": "email",
              "type": "email",
              "required": false,
              "description": "Requester email (create)",
              "example": "{{ $json.email }}"
            },
            {
              "name": "Priority",
              "internalKey": "priority",
              "type": "number",
              "required": false,
              "description": "Priority (1=Low,2=Medium,3=High,4=Urgent)",
              "example": "25"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "number",
              "required": false,
              "description": "Status (2=Open,3=Pending,4=Resolved,5=Closed)",
              "example": "25"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "json",
              "required": false,
              "description": "Payload for create/update",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Freshdesk node.\nstructure: Value returned by the Freshdesk node.\nconvertible: Value returned by the Freshdesk node.\ndefaultValue: Value returned by the Freshdesk node.",
          "usageExample": {
            "scenario": "Use Freshdesk in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Domain": "mycompany.freshdesk.com",
              "Api Key": "{{ $json.apiKey }}",
              "Id": "12345",
              "Subject": "{{ $json.subject }}",
              "Description Text": "Created from workflow data: {{ $json.summary }}",
              "Email": "{{ $json.email }}",
              "Priority": "25",
              "Status": "25",
              "Data": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.freshdesk.com/api/"
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
