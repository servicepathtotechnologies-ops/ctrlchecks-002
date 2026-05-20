import type { NodeDoc } from '../types';

export const jsonParserDoc: NodeDoc = {
  "slug": "json_parser",
  "displayName": "JSON Parser",
  "category": "Data",
  "logoUrl": "/icons/nodes/json_parser.svg",
  "description": "Parse JSON strings into objects and extract specific fields",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "JSON Parser is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the JSON Parser node.",
          "fields": [
            {
              "name": "Json",
              "internalKey": "json",
              "type": "string",
              "required": true,
              "description": "JSON string to parse",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            },
            {
              "name": "Extract Fields",
              "internalKey": "extractFields",
              "type": "json",
              "description": "Fields to extract from parsed JSON",
              "example": "[\"name\",\"age\",\"email\"]",
              "placeholder": "[\"name\",\"age\",\"email\"]"
            }
          ],
          "outputExample": {
            "success": true,
            "data": {}
          },
          "outputDescription": "success: Value returned by this node.\ndata: Value returned by this node.",
          "usageExample": {
            "scenario": "Use JSON Parser to execute in a workflow.",
            "inputValues": {
              "Json": "{{$json.data}}",
              "Extract Fields": "[\"name\",\"age\",\"email\"]"
            },
            "expectedOutput": "The node executes execute and exposes its result for downstream nodes."
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
