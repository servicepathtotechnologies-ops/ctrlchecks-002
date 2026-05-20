import type { NodeDoc } from '../types';

export const stopAndErrorDoc: NodeDoc = {
  "slug": "stop_and_error",
  "displayName": "Stop And Error",
  "category": "Logic",
  "logoUrl": "/icons/nodes/stop_and_error.svg",
  "description": "Stop workflow execution with error message",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Stop And Error is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Stop And Error node.",
          "fields": [
            {
              "name": "Error Message",
              "internalKey": "errorMessage",
              "type": "string",
              "required": true,
              "description": "Error message",
              "example": "Validation failed",
              "placeholder": "Validation failed"
            }
          ],
          "outputExample": {},
          "outputDescription": "",
          "usageExample": {
            "scenario": "Use Stop And Error to execute in a workflow.",
            "inputValues": {
              "Error Message": "Validation failed"
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
