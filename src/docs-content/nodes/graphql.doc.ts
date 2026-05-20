import type { NodeDoc } from '../types';

export const graphqlDoc: NodeDoc = {
  "slug": "graphql",
  "displayName": "GraphQL",
  "category": "Utility",
  "logoUrl": "/icons/nodes/graphql.svg",
  "description": "Make GraphQL requests",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "GraphQL is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the GraphQL node.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "GraphQL endpoint URL",
              "example": "https://api.example.com/graphql",
              "placeholder": "https://api.example.com/graphql"
            },
            {
              "name": "Query",
              "internalKey": "query",
              "type": "textarea",
              "required": true,
              "description": "GraphQL query",
              "example": "{ user(id: 1) { name email } }",
              "placeholder": "{ user(id: 1) { name email } }"
            },
            {
              "name": "Variables",
              "internalKey": "variables",
              "type": "json",
              "description": "GraphQL variables",
              "example": "{\"id\":1}",
              "placeholder": "{\"id\":1}"
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
            "scenario": "Use GraphQL to execute in a workflow.",
            "inputValues": {
              "Url": "https://api.example.com/graphql",
              "Query": "{ user(id: 1) { name email } }",
              "Variables": "{\"id\":1}"
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
