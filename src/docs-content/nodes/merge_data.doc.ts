import type { NodeDoc } from '../types';

export const mergeDataDoc: NodeDoc = {
  "slug": "merge_data",
  "displayName": "Merge Data",
  "category": "Data",
  "logoUrl": "/icons/nodes/merge_data.svg",
  "description": "Merge data structures from multiple sources",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "append",
              "placeholder": "append",
              "defaultValue": "append"
            },
            {
              "name": "Join By",
              "internalKey": "joinBy",
              "type": "string",
              "description": "Field to join by (for join mode)",
              "example": "id",
              "placeholder": "id"
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
          "outputDescription": "success: Value returned by this node.\noperation: Value returned by this node.\nid: Value returned by this node.\nmessage: Value returned by this node.\ndata: Value returned by this node.\nresult: Value returned by this node.\noutput: Value returned by this node.\nerror: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Merge Data to execute in a workflow.",
            "inputValues": {
              "Mode": "append",
              "Join By": "id"
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
