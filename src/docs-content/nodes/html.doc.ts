import type { NodeDoc } from '../types';

export const htmlDoc: NodeDoc = {
  "slug": "html",
  "displayName": "HTML",
  "category": "Data",
  "logoUrl": "/icons/nodes/html.svg",
  "description": "Parse and manipulate HTML content Use this node when a workflow needs html behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "HTML exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse with the HTML node using the configured input fields.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "string",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            },
            {
              "name": "Selector",
              "internalKey": "selector",
              "type": "string",
              "required": false,
              "description": "CSS selector used by extract. Omit to extract the whole document text.",
              "example": "{{ $json.selector }}"
            },
            {
              "name": "Attribute",
              "internalKey": "attribute",
              "type": "string",
              "required": false,
              "description": "Optional attribute to extract from selected elements, e.g. href or src.",
              "example": "{{ $json.attribute }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HTML node.\nconvertible: Value returned by the HTML node.\ndefaultValue: Value returned by the HTML node.",
          "usageExample": {
            "scenario": "Use HTML in a workflow and pass upstream data into parse.",
            "inputValues": {
              "Html": "{{$json.html}}",
              "Selector": "{{ $json.selector }}",
              "Attribute": "{{ $json.attribute }}"
            },
            "expectedOutput": "The node runs parse and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract with the HTML node using the configured input fields.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "string",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            },
            {
              "name": "Selector",
              "internalKey": "selector",
              "type": "string",
              "required": false,
              "description": "CSS selector used by extract. Omit to extract the whole document text.",
              "example": "{{ $json.selector }}"
            },
            {
              "name": "Attribute",
              "internalKey": "attribute",
              "type": "string",
              "required": false,
              "description": "Optional attribute to extract from selected elements, e.g. href or src.",
              "example": "{{ $json.attribute }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HTML node.\nconvertible: Value returned by the HTML node.\ndefaultValue: Value returned by the HTML node.",
          "usageExample": {
            "scenario": "Use HTML in a workflow and pass upstream data into extract.",
            "inputValues": {
              "Html": "{{$json.html}}",
              "Selector": "{{ $json.selector }}",
              "Attribute": "{{ $json.attribute }}"
            },
            "expectedOutput": "The node runs extract and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Clean",
          "value": "clean",
          "description": "Clean with the HTML node using the configured input fields.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "string",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            },
            {
              "name": "Selector",
              "internalKey": "selector",
              "type": "string",
              "required": false,
              "description": "CSS selector used by extract. Omit to extract the whole document text.",
              "example": "{{ $json.selector }}"
            },
            {
              "name": "Attribute",
              "internalKey": "attribute",
              "type": "string",
              "required": false,
              "description": "Optional attribute to extract from selected elements, e.g. href or src.",
              "example": "{{ $json.attribute }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the HTML node.\nconvertible: Value returned by the HTML node.\ndefaultValue: Value returned by the HTML node.",
          "usageExample": {
            "scenario": "Use HTML in a workflow and pass upstream data into clean.",
            "inputValues": {
              "Html": "{{$json.html}}",
              "Selector": "{{ $json.selector }}",
              "Attribute": "{{ $json.attribute }}"
            },
            "expectedOutput": "The node runs clean and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
