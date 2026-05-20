import type { NodeDoc } from '../types';

export const schedulewiseDoc: NodeDoc = {
  "slug": "schedulewise",
  "displayName": "ScheduleWise",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/schedulewise.svg",
  "description": "ScheduleWise appointment scheduling — retrieve, create, update, and delete appointments via the ScheduleWise REST API",
  "credentialType": "None",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "ScheduleWise is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Execute using the ScheduleWise node.",
          "fields": [
            {
              "name": "Date From",
              "internalKey": "dateFrom",
              "type": "string",
              "description": "Start date filter for getSchedules (ISO 8601, e.g. \"2024-01-01\"). Supports {{ }} expressions.",
              "example": "2024-01-01",
              "placeholder": "2024-01-01"
            },
            {
              "name": "Date To",
              "internalKey": "dateTo",
              "type": "string",
              "description": "End date filter for getSchedules (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-31",
              "placeholder": "2024-01-31"
            },
            {
              "name": "Patient Id",
              "internalKey": "patientId",
              "type": "string",
              "description": "Patient identifier. Supports {{ }} expressions.",
              "example": "patient_123",
              "placeholder": "patient_123"
            },
            {
              "name": "Staff Id",
              "internalKey": "staffId",
              "type": "string",
              "description": "Staff member identifier. Supports {{ }} expressions.",
              "example": "staff_456",
              "placeholder": "staff_456"
            },
            {
              "name": "Appointment Id",
              "internalKey": "appointmentId",
              "type": "string",
              "description": "Appointment identifier (required for updateAppointment and deleteAppointment). Supports {{ }} expressions.",
              "example": "appt_789",
              "placeholder": "appt_789"
            },
            {
              "name": "Start Date Time",
              "internalKey": "startDateTime",
              "type": "string",
              "description": "Appointment start date/time (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-15T09:00:00Z",
              "placeholder": "2024-01-15T09:00:00Z"
            },
            {
              "name": "End Date Time",
              "internalKey": "endDateTime",
              "type": "string",
              "description": "Appointment end date/time (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-15T10:00:00Z",
              "placeholder": "2024-01-15T10:00:00Z"
            },
            {
              "name": "Service Type",
              "internalKey": "serviceType",
              "type": "string",
              "description": "Type of service for the appointment. Supports {{ }} expressions.",
              "example": "consultation",
              "placeholder": "consultation"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "description": "Additional notes for the appointment. Supports {{ }} expressions.",
              "example": "Patient requested morning slot",
              "placeholder": "Patient requested morning slot"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "description": "Appointment status (for updateAppointment). Supports {{ }} expressions.",
              "example": "confirmed",
              "placeholder": "confirmed"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "description": "Maximum number of results to return for getSchedules.",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "50"
            },
            {
              "name": "Hard Delete",
              "internalKey": "hardDelete",
              "type": "boolean",
              "description": "When true, permanently deletes the appointment (appends ?hardDelete=true). Default is soft delete.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
            },
            {
              "name": "Timeout Sec",
              "internalKey": "timeoutSec",
              "type": "number",
              "description": "HTTP request timeout in seconds. Default: 30.",
              "example": "15",
              "placeholder": "15",
              "defaultValue": "30"
            },
            {
              "name": "Retries",
              "internalKey": "retries",
              "type": "number",
              "description": "Number of retry attempts on 5xx or network errors (exponential backoff). Default: 0.",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "description": "Output format: \"json\" (default) or \"raw\" (unparsed response body).",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Mock Mode",
              "internalKey": "mockMode",
              "type": "boolean",
              "description": "When true, returns synthetic data without calling the ScheduleWise API. Useful for testing.",
              "example": "false",
              "placeholder": "false",
              "defaultValue": "false"
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
            "scenario": "Use ScheduleWise to execute in a workflow.",
            "inputValues": {
              "Date From": "2024-01-01",
              "Date To": "2024-01-31",
              "Patient Id": "patient_123",
              "Staff Id": "staff_456",
              "Appointment Id": "appt_789"
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
