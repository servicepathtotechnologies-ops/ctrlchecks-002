import type { NodeDoc } from '../types';

export const htmlDoc: NodeDoc = {
  "slug": "html",
  "displayName": "HTML",
  "category": "Data",
  "logoUrl": "/icons/nodes/html.svg",
  "description": "Parse and manipulate HTML content",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "HTML exposes operation choices directly.",
      "operations": [
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse an HTML document and extract elements or text.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            }
          ],
          "outputExample": {
            "title": "Example Domain",
            "headings": [
              "Example Domain"
            ],
            "links": [
              "https://www.iana.org/domains/example"
            ],
            "text": "This domain is for use in illustrative examples."
          },
          "outputDescription": "title: Page title. headings: Array of heading texts. links: Array of href values. text: Main body text.",
          "usageExample": {
            "scenario": "Scrape a product page to extract the title and price",
            "inputValues": {
              "html": "{{$json.pageContent}}",
              "selector": ".price"
            },
            "expectedOutput": "Extracted price in `{{$json.text}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract using the HTML node.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use HTML to extract in a workflow.",
            "inputValues": {
              "Html": "{{$json.html}}"
            },
            "expectedOutput": "The node executes extract and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Clean",
          "value": "clean",
          "description": "Clean using the HTML node.",
          "fields": [
            {
              "name": "Html",
              "internalKey": "html",
              "type": "textarea",
              "required": true,
              "description": "HTML content",
              "example": "{{$json.html}}",
              "placeholder": "{{$json.html}}"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use HTML to clean in a workflow.",
            "inputValues": {
              "Html": "{{$json.html}}"
            },
            "expectedOutput": "The node executes clean and exposes its result for downstream nodes."
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
