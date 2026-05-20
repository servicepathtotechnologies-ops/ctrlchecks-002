import type { NodeDoc } from '../types';

export const xmlDoc: NodeDoc = {
  "slug": "xml",
  "displayName": "XML",
  "category": "Data",
  "logoUrl": "/icons/nodes/xml.svg",
  "description": "Parse and manipulate XML content",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "XML exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse an XML string into a JavaScript object.",
          "fields": [
            {
              "name": "Xml",
              "internalKey": "xml",
              "type": "textarea",
              "required": true,
              "description": "XML content",
              "example": "{{$json.xml}}",
              "placeholder": "{{$json.xml}}"
            }
          ],
          "outputExample": {
            "root": {
              "order": {
                "id": "123",
                "customer": "Alice",
                "items": [
                  {
                    "sku": "PROD001",
                    "qty": "2"
                  }
                ]
              }
            }
          },
          "outputDescription": "Parsed JavaScript object. Attributes and text nodes are available as nested properties.",
          "usageExample": {
            "scenario": "Parse an XML response from a legacy SOAP API",
            "inputValues": {
              "xml": "{{$json.responseBody}}"
            },
            "expectedOutput": "Access parsed fields via `{{$json.root.order.id}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract using the XML node.",
          "fields": [
            {
              "name": "Xml",
              "internalKey": "xml",
              "type": "textarea",
              "required": true,
              "description": "XML content",
              "example": "{{$json.xml}}",
              "placeholder": "{{$json.xml}}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use XML to extract in a workflow.",
            "inputValues": {
              "Xml": "{{$json.xml}}"
            },
            "expectedOutput": "The node executes extract and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
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
