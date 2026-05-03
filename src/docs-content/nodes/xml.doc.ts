import type { NodeDoc } from '../types';

export const xmlDoc: NodeDoc = {
  "slug": "xml",
  "displayName": "XML",
  "category": "Data",
  "logoUrl": "/icons/nodes/xml.svg",
  "description": "Parse and manipulate XML content Use this node when a workflow needs xml behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Operations",
      "description": "XML exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse with the XML node using the configured input fields.",
          "fields": [
            {
              "name": "Xml",
              "internalKey": "xml",
              "type": "string",
              "required": true,
              "description": "XML content",
              "example": "{{$json.xml}}",
              "placeholder": "{{$json.xml}}"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "Dot path used by extract after XML is parsed, e.g. root.item.0.name.",
              "example": "{{ $json.path }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the XML node.\nconvertible: Value returned by the XML node.\ndefaultValue: Value returned by the XML node.",
          "usageExample": {
            "scenario": "Use XML in a workflow and pass upstream data into parse.",
            "inputValues": {
              "Xml": "{{$json.xml}}",
              "Path": "{{ $json.path }}"
            },
            "expectedOutput": "The node runs parse and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract with the XML node using the configured input fields.",
          "fields": [
            {
              "name": "Xml",
              "internalKey": "xml",
              "type": "string",
              "required": true,
              "description": "XML content",
              "example": "{{$json.xml}}",
              "placeholder": "{{$json.xml}}"
            },
            {
              "name": "Path",
              "internalKey": "path",
              "type": "string",
              "required": false,
              "description": "Dot path used by extract after XML is parsed, e.g. root.item.0.name.",
              "example": "{{ $json.path }}"
            }
          ],
          "outputExample": {
            "type": "type",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the XML node.\nconvertible: Value returned by the XML node.\ndefaultValue: Value returned by the XML node.",
          "usageExample": {
            "scenario": "Use XML in a workflow and pass upstream data into extract.",
            "inputValues": {
              "Xml": "{{$json.xml}}",
              "Path": "{{ $json.path }}"
            },
            "expectedOutput": "The node runs extract and exposes its result in the output panel for the next node."
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
