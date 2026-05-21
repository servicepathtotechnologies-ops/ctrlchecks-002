import type { NodeDoc } from '../types';

export const functionItemDoc: NodeDoc = {
  "slug": "function_item",
  "displayName": "Function Item",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function_item.svg",
  "description": "Execute a function for each item in an array",
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
      "description": "Function Item is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Function Item node.",
          "fields": [
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": true,
              "description": "Description of what should be done for each item",
              "helpText": "What this field is: Description of what should be done for each item for Function Item / Execute.\nHow to fill it: Type the message, prompt, or content you want Function Item to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Process each contact",
              "example": "Process each contact"
            },
            {
              "name": "Items",
              "internalKey": "items",
              "type": "json",
              "required": false,
              "description": "Array of items to process",
              "helpText": "What this field is: Array of items to process for Function Item / Execute.\nHow to fill it: Enter valid JSON in the format Function Item expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.items}} or pick the value from the data picker.",
              "placeholder": "{{$json.items}}",
              "example": "{{$json.items}}"
            }
          ],
          "outputExample": [
            {
              "id": "1",
              "name": "Example item",
              "createdAt": "2025-01-15T09:00:00Z"
            }
          ],
          "outputDescription": "Returns an array of result objects. Access individual fields via {{$json.fieldName}} in downstream nodes.",
          "usageExample": {
            "scenario": "Process incoming Function Item data with execute after a related upstream event is received",
            "inputValues": {
              "Description": "Process each contact",
              "Items": "{{$json.items}}"
            },
            "expectedOutput": "Function Item returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
