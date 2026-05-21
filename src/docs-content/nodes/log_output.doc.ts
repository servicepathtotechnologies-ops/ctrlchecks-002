import type { NodeDoc } from '../types';

export const logOutputDoc: NodeDoc = {
  "slug": "log_output",
  "displayName": "Log Output",
  "category": "Communication",
  "logoUrl": "/icons/nodes/log_output.svg",
  "description": "Log data to console or file",
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
      "description": "Log Output is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Write a log message to the CtrlChecks execution log for debugging and monitoring.",
          "fields": [
            {
              "name": "Level",
              "internalKey": "level",
              "type": "string",
              "required": false,
              "description": "Log level",
              "helpText": "What this field is: Log level for Log Output / Execute.\nHow to fill it: Enter the level value requested by Log Output, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.level}} or pick the value from the data picker.",
              "placeholder": "info",
              "example": "info",
              "defaultValue": "info"
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Log message",
              "helpText": "What this field is: Log message for Log Output / Execute.\nHow to fill it: Type the message, prompt, or content you want Log Output to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "Hello {{$json.name}}"
            }
          ],
          "outputExample": {
            "logged": true,
            "message": "Processing user u_123",
            "level": "info",
            "timestamp": "2025-01-15T10:00:00Z"
          },
          "outputDescription": "logged: true if the log was written successfully. message: The exact message that was logged. level: Log level used (info, warn, error). timestamp: When the log was written.",
          "usageExample": {
            "scenario": "Log progress checkpoints in a long-running data pipeline",
            "inputValues": {
              "message": "Processed {{$json.rowCount}} rows from {{$json.tableName}}",
              "level": "info"
            },
            "expectedOutput": "The message appears in the workflow execution log. Useful for debugging without halting the workflow."
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
