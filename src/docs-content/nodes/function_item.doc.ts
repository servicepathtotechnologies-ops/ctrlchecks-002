import type { NodeDoc } from '../types';

export const functionItemDoc: NodeDoc = {
  "slug": "function_item",
  "displayName": "Function Item",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function_item.svg",
  "description": "Execute a function for each item in an array",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "Process each contact",
              "placeholder": "Process each contact"
            },
            {
              "name": "Items",
              "internalKey": "items",
              "type": "json",
              "description": "Array of items to process",
              "example": "{{$json.items}}",
              "placeholder": "{{$json.items}}"
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
            "scenario": "Use Function Item to execute in a workflow.",
            "inputValues": {
              "Description": "Process each contact",
              "Items": "{{$json.items}}"
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
