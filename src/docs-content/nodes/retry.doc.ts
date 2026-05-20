import type { NodeDoc } from '../types';

export const retryDoc: NodeDoc = {
  "slug": "retry",
  "displayName": "Retry",
  "category": "Logic",
  "logoUrl": "/icons/nodes/retry.svg",
  "description": "Retries a branch on failure up to a maximum number of attempts",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
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
              "example": "3",
              "placeholder": "3",
              "defaultValue": "3"
            },
            {
              "name": "Delay Between",
              "internalKey": "delayBetween",
              "type": "number",
              "description": "Delay between retries (in milliseconds)",
              "example": "1000",
              "placeholder": "1000",
              "defaultValue": "1000"
            },
            {
              "name": "Backoff",
              "internalKey": "backoff",
              "type": "select",
              "description": "Backoff strategy (none, linear, exponential)",
              "example": "none",
              "placeholder": "none",
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
