import type { NodeDoc } from '../types';

export const mergeDataDoc: NodeDoc = {
  "slug": "merge_data",
  "displayName": "Merge Data",
  "category": "Data",
  "logoUrl": "/icons/nodes/merge_data.svg",
  "description": "Merge data structures from multiple sources",
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
      "description": "Merge Data is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Merge Data node.",
          "fields": [
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "string",
              "required": true,
              "description": "Merge mode: append, join, overwrite",
              "helpText": "What this field is: Merge mode: append, join, overwrite for Merge Data / Execute.\nHow to fill it: Enter the mode value requested by Merge Data, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.mode}} or pick the value from the data picker.",
              "placeholder": "append",
              "example": "append",
              "defaultValue": "append"
            },
            {
              "name": "Join By",
              "internalKey": "joinBy",
              "type": "string",
              "required": false,
              "description": "Field to join by (for join mode)",
              "helpText": "What this field is: Field to join by (for join mode) for Merge Data / Execute.\nHow to fill it: Enter the join by value requested by Merge Data, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.joinBy}} or pick the value from the data picker.",
              "placeholder": "id",
              "example": "id"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "",
            "id": "abc123",
            "message": "",
            "data": {},
            "result": {},
            "output": {},
            "error": {}
          },
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming Merge Data data with execute after a related upstream event is received",
            "inputValues": {
              "Mode": "append",
              "Join By": "id"
            },
            "expectedOutput": "Merge Data returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
