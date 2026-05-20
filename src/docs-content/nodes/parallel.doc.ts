import type { NodeDoc } from '../types';

export const parallelDoc: NodeDoc = {
  "slug": "parallel",
  "displayName": "Parallel",
  "category": "Logic",
  "logoUrl": "/icons/nodes/parallel.svg",
  "description": "Runs multiple branches concurrently and waits for all to complete",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Parallel is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Parallel node.",
          "fields": [
            {
              "name": "Mode",
              "internalKey": "mode",
              "type": "select",
              "description": "Execution mode (all, race)",
              "example": "all",
              "placeholder": "all",
              "defaultValue": "all",
              "options": [
                "Wait for all",
                "Race (first completes)"
              ]
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
            "scenario": "Use Parallel to execute in a workflow.",
            "inputValues": {
              "Mode": "all"
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
