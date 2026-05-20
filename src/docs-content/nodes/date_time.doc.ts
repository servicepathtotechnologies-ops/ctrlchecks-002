import type { NodeDoc } from '../types';

export const dateTimeDoc: NodeDoc = {
  "slug": "date_time",
  "displayName": "Date/Time",
  "category": "Data",
  "logoUrl": "/icons/nodes/date_time.svg",
  "description": "Parse, format, and manipulate dates and times",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "Date/Time exposes operation choices directly.",
      "operations": [
        {
          "name": "Format",
          "value": "format",
          "description": "Format a date/time value into a specific string format.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "string",
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "formatted": "15 Jan 2025",
            "original": "2025-01-15T10:00:00Z",
            "format": "DD MMM YYYY"
          },
          "outputDescription": "formatted: The date as a formatted string. original: The original input value. format: The format string used.",
          "usageExample": {
            "scenario": "Format an ISO date from a database for display in an email",
            "inputValues": {
              "date": "{{$json.createdAt}}",
              "format": "MMMM D, YYYY"
            },
            "expectedOutput": "Formatted date string like \"January 15, 2025\"."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Calculate",
          "value": "calculate",
          "description": "Calculate using the Date/Time node.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "string",
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Date/Time to calculate in a workflow.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node executes calculate and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Extract",
          "value": "extract",
          "description": "Extract using the Date/Time node.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "string",
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "result": "Operation completed successfully.",
            "text": ""
          },
          "outputDescription": "result: Value returned by this node.\ntext: Value returned by this node.",
          "usageExample": {
            "scenario": "Use Date/Time to extract in a workflow.",
            "inputValues": {
              "Date Value": "{{$json.timestamp}}",
              "Format": "YYYY-MM-DD"
            },
            "expectedOutput": "The node executes extract and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Parse",
          "value": "parse",
          "description": "Parse a date string into a structured object with year, month, day, etc.",
          "fields": [
            {
              "name": "Date Value",
              "internalKey": "dateValue",
              "type": "string",
              "description": "Input date",
              "example": "{{$json.timestamp}}",
              "placeholder": "{{$json.timestamp}}"
            },
            {
              "name": "Format",
              "internalKey": "format",
              "type": "string",
              "description": "Output format",
              "example": "YYYY-MM-DD",
              "placeholder": "YYYY-MM-DD"
            }
          ],
          "outputExample": {
            "year": 2025,
            "month": 1,
            "day": 15,
            "hour": 10,
            "minute": 0,
            "timestamp": 1736935200000,
            "iso": "2025-01-15T10:00:00.000Z"
          },
          "outputDescription": "year/month/day/hour/minute: Components of the parsed date. timestamp: Unix milliseconds. iso: ISO 8601 string.",
          "usageExample": {
            "scenario": "Extract the year from a date string for grouping records",
            "inputValues": {
              "date": "{{$json.dateString}}"
            },
            "expectedOutput": "Use `{{$json.year}}` in SQL queries or conditional checks."
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
