import type { NodeDoc } from '../types';

export const functionDoc: NodeDoc = {
  "slug": "function",
  "displayName": "Function",
  "category": "Logic",
  "logoUrl": "/icons/nodes/function.svg",
  "description": "Execute a custom function with input parameters",
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
      "description": "Function is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Function node.",
          "fields": [
            {
              "name": "Description",
              "internalKey": "description",
              "type": "textarea",
              "required": true,
              "description": "Description of what this function should do",
              "helpText": "What this field is: Description of what this function should do for Function / Execute.\nHow to fill it: Type the message, prompt, or content you want Function to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Transform contact data",
              "example": "Transform contact data"
            },
            {
              "name": "Code",
              "internalKey": "code",
              "type": "string",
              "required": false,
              "description": "Optional JavaScript code for the function",
              "helpText": "What this field is: JavaScript code to process each item.\nThe current item is available as item.json.\nExample (combine fields):\n  return [{ json: { ...item.json, fullName: item.json.firstName + ' ' + item.json.lastName } }];",
              "placeholder": "return { ...$json, processed: true };",
              "example": "return { ...$json, processed: true };"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Execution timeout in milliseconds (max 30000)",
              "helpText": "What this field is: A number used for timeout in Function / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "5000",
              "example": "5000",
              "defaultValue": "10000"
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
            "scenario": "Process incoming Function data with execute after a related upstream event is received",
            "inputValues": {
              "Description": "Transform contact data",
              "Code": "return { ...$json, processed: true };",
              "Timeout": "5000"
            },
            "expectedOutput": "Function returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
