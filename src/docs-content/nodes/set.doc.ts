import type { NodeDoc } from '../types';

export const setDoc: NodeDoc = {
  "slug": "set",
  "displayName": "Set",
  "category": "Data",
  "logoUrl": "/icons/nodes/set.svg",
  "description": "Set/override multiple fields on the current item",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Set is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Set node.",
          "fields": [
            {
              "name": "Fields",
              "internalKey": "fields",
              "type": "string",
              "required": true,
              "description": "JSON object of fields to set (supports template strings)",
              "example": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}",
              "placeholder": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}"
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
            "scenario": "Use Set to execute in a workflow.",
            "inputValues": {
              "Fields": "{\"status\":\"new\",\"email\":\"{{$json.email}}\"}"
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
