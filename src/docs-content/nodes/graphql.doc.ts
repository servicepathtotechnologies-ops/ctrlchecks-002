import type { NodeDoc } from '../types';

export const graphqlDoc: NodeDoc = {
  "slug": "graphql",
  "displayName": "GraphQL",
  "category": "Utility",
  "logoUrl": "/icons/nodes/graphql.svg",
  "description": "Make GraphQL requests Use this node when a workflow needs graphql behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Configuration",
      "description": "GraphQL is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the GraphQL node using the configured input fields.",
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
              "type": "string",
              "required": true,
              "description": "GraphQL query",
              "example": "{ user(id: 1) { name email } }",
              "placeholder": "{ user(id: 1) { name email } }"
            },
            {
              "name": "Variables",
              "internalKey": "variables",
              "type": "json",
              "required": false,
              "description": "GraphQL variables",
              "example": "[object Object]",
              "placeholder": "[object Object]"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the GraphQL node.\nstructure: Value returned by the GraphQL node.\nconvertible: Value returned by the GraphQL node.\ndefaultValue: Value returned by the GraphQL node.",
          "usageExample": {
            "scenario": "Use GraphQL in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Url": "https://api.example.com/graphql",
              "Query": "{ user(id: 1) { name email } }",
              "Variables": "[object Object]"
            },
            "expectedOutput": "The node runs configure and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an expression resolved to an empty value.",
      "fix": "Open the node, fill the required field, and inspect upstream output before running again."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node."
    }
  ],
  "relatedNodes": [
    "http_request",
    "respond_to_webhook",
    "clickup",
    "delay",
    "queue_push"
  ]
};
