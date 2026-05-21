import type { NodeDoc } from '../types';

export const jsonParserDoc: NodeDoc = {
  "slug": "json_parser",
  "displayName": "JSON Parser",
  "category": "Data",
  "logoUrl": "/icons/nodes/json_parser.svg",
  "description": "Parse JSON strings into objects and extract specific fields",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
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
              "helpText": "What this field is: JSON string to parse for JSON Parser / Execute.\nHow to fill it: Enter the json value requested by JSON Parser, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.json}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
            },
            {
              "name": "Extract Fields",
              "internalKey": "extractFields",
              "type": "json",
              "required": false,
              "description": "Fields to extract from parsed JSON",
              "helpText": "What this field is: Fields to extract from parsed JSON for JSON Parser / Execute.\nHow to fill it: Enter valid JSON in the format JSON Parser expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.extractFields}} or pick the value from the data picker.",
              "placeholder": "[\"name\",\"age\",\"email\"]",
              "example": "[\"name\",\"age\",\"email\"]"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "default",
            "data": {
              "id": "item_123",
              "status": "completed"
            }
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\ndata: Returned records from the service.",
          "usageExample": {
            "scenario": "Process incoming JSON Parser data with execute after a related upstream event is received",
            "inputValues": {
              "Json": "{{$json.data}}",
              "Extract Fields": "[\"name\",\"age\",\"email\"]"
            },
            "expectedOutput": "JSON Parser returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
