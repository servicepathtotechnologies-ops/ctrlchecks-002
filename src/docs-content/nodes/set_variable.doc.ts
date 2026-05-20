import type { NodeDoc } from '../types';

export const setVariableDoc: NodeDoc = {
  "slug": "set_variable",
  "displayName": "Set Variable",
  "category": "Data",
  "logoUrl": "/icons/nodes/set_variable.svg",
  "description": "Set a variable with a name and value",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "Set Variable is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Store a value in a named variable that can be referenced later in the workflow.",
          "fields": [
            {
              "name": "Name",
              "internalKey": "name",
              "type": "string",
              "required": true,
              "description": "Variable name (must be a valid identifier)",
              "example": "myVariable",
              "placeholder": "myVariable"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "description": "Variable value (supports template expressions like {{input.field}})",
              "example": "Hello World",
              "placeholder": "Hello World"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "description": "Array of field assignments (legacy format)",
              "example": "[{\"name\":\"fullName\",\"value\":\"{{$json.firstName}} {{$json.lastName}}\"}]",
              "placeholder": "[{\"name\":\"fullName\",\"value\":\"{{$json.firstName}} {{$json.lastName}}\"}]"
            },
            {
              "name": "Keep Source",
              "internalKey": "keepSource",
              "type": "boolean",
              "description": "Keep original fields",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "variableName": "userEmail",
            "variableValue": "alice@example.com",
            "set": true
          },
          "outputDescription": "variableName: The name of the variable that was set. variableValue: The value stored. set: true on success.",
          "usageExample": {
            "scenario": "Store the current user's email early in the workflow to use in multiple later nodes",
            "inputValues": {
              "name": "userEmail",
              "value": "{{$json.email}}"
            },
            "expectedOutput": "Reference this variable later as `{{$variables.userEmail}}`."
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
