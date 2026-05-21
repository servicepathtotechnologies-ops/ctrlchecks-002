import type { NodeDoc } from '../types';

export const setVariableDoc: NodeDoc = {
  "slug": "set_variable",
  "displayName": "Set Variable",
  "category": "Data",
  "logoUrl": "/icons/nodes/set_variable.svg",
  "description": "Set a variable with a name and value",
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
              "helpText": "What this field is: The name you are giving to this variable so you can refer to it later.\nRules: Use letters and numbers only, no spaces. Recommended style: camelCase.\nExamples: customerEmail, totalRevenue, isApproved, orderCount",
              "placeholder": "myVariable",
              "example": "myVariable"
            },
            {
              "name": "Value",
              "internalKey": "value",
              "type": "string",
              "required": false,
              "description": "Variable value (supports template expressions like {{input.field}})",
              "helpText": "What this field is: The value to store in this variable.\nCan be: static text (alice@example.com), a number (42), or a dynamic expression from an earlier step.\nExample: alice@example.com (static) or {{$json.email}} (uses the email from the previous step)",
              "placeholder": "Hello World",
              "example": "Hello World"
            },
            {
              "name": "Values",
              "internalKey": "values",
              "type": "json",
              "required": true,
              "description": "Array of field assignments (legacy format)",
              "helpText": "What this field is: Array of field assignments (legacy format) for Set Variable / Execute.\nHow to fill it: Enter valid JSON in the format Set Variable expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.values}} or pick the value from the data picker.",
              "placeholder": "[{\"name\":\"fullName\",\"value\":\"{{$json.firstName}} {{$json.lastName}}\"}]",
              "example": "[{\"name\":\"fullName\",\"value\":\"{{$json.firstName}} {{$json.lastName}}\"}]"
            },
            {
              "name": "Keep Source",
              "internalKey": "keepSource",
              "type": "boolean",
              "required": false,
              "description": "Keep original fields",
              "helpText": "What this field is: An on/off choice for keep source in Set Variable / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want Set Variable to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
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
