import type { NodeDoc } from '../types';

export const memoryDoc: NodeDoc = {
  "slug": "memory",
  "displayName": "Memory",
  "category": "AI",
  "logoUrl": "/icons/nodes/memory.svg",
  "description": "Memory storage for AI Agent context",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Memory is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the Memory node.",
          "fields": [
            {
              "name": "Context",
              "internalKey": "context",
              "type": "string",
              "description": "Memory context",
              "example": "{{$json.context}}",
              "placeholder": "{{$json.context}}"
            }
          ],
          "outputExample": {
            "messages": [],
            "context": {}
          },
          "outputDescription": "messages: Value returned by this node.\ncontext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Memory to execute in a workflow.",
            "inputValues": {
              "Context": "{{$json.context}}"
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
