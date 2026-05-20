import type { NodeDoc } from '../types';

export const renameKeysDoc: NodeDoc = {
  "slug": "rename_keys",
  "displayName": "Rename Keys",
  "category": "Data",
  "logoUrl": "/icons/nodes/rename_keys.svg",
  "description": "Rename object keys",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Rename Keys is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Rename Keys node.",
          "fields": [
            {
              "name": "Mappings",
              "internalKey": "mappings",
              "type": "json",
              "required": true,
              "description": "Key mappings: { oldKey: \"newKey\" }",
              "example": "{\"oldName\":\"newName\",\"oldEmail\":\"newEmail\"}",
              "placeholder": "{\"oldName\":\"newName\",\"oldEmail\":\"newEmail\"}"
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
            "scenario": "Use Rename Keys to execute in a workflow.",
            "inputValues": {
              "Mappings": "{\"oldName\":\"newName\",\"oldEmail\":\"newEmail\"}"
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
