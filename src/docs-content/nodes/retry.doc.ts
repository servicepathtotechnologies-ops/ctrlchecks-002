import type { NodeDoc } from '../types';

export const retryDoc: NodeDoc = {
  "slug": "retry",
  "displayName": "Retry",
  "category": "Logic",
  "logoUrl": "/icons/nodes/retry.svg",
  "description": "Retries a branch on failure up to a maximum number of attempts",
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
      "description": "Retry is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Automatically retry a failing branch up to N times with optional back-off.",
          "fields": [
            {
              "name": "Max Attempts",
              "internalKey": "maxAttempts",
              "type": "number",
              "required": true,
              "description": "Maximum number of retry attempts",
              "helpText": "What this field is: A number used for max attempts in Retry / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxAttempts}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            },
            {
              "name": "Delay Between",
              "internalKey": "delayBetween",
              "type": "number",
              "required": false,
              "description": "Delay between retries (in milliseconds)",
              "helpText": "What this field is: A number used for delay between in Retry / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.delayBetween}} or pick the value from the data picker.",
              "placeholder": "1000",
              "example": "1000",
              "defaultValue": "1000"
            },
            {
              "name": "Backoff",
              "internalKey": "backoff",
              "type": "select",
              "required": false,
              "description": "Backoff strategy (none, linear, exponential)",
              "helpText": "What this field is: A list of allowed choices for backoff in Retry / Execute.\nHow to fill it: Pick the option that matches what Retry should do. Do not type a custom value unless the UI allows it.\nAvailable choices: None (none), Linear (linear), Exponential (exponential).",
              "placeholder": "none",
              "example": "none",
              "defaultValue": "none",
              "options": [
                "None",
                "Linear",
                "Exponential"
              ]
            }
          ],
          "outputExample": {
            "success": true,
            "attempts": 2,
            "lastError": null,
            "output": {
              "id": 42
            }
          },
          "outputDescription": "success: true if any attempt succeeded. attempts: How many times the branch ran. lastError: The last error if all attempts failed. output: Result of the successful attempt.",
          "usageExample": {
            "scenario": "Retry a flaky third-party API call up to 3 times before giving up",
            "inputValues": {
              "maxAttempts": "3",
              "delayMs": "1000",
              "backoffMultiplier": "2"
            },
            "expectedOutput": "If the 2nd attempt succeeds, `{{$json.attempts}} = 2` and `success: true`."
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
