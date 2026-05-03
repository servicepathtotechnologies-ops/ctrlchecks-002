import type { NodeDoc } from '../types';

export const schedulewiseDoc: NodeDoc = {
  "slug": "schedulewise",
  "displayName": "ScheduleWise",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/schedulewise.svg",
  "description": "ScheduleWise appointment scheduling — retrieve, create, update, and delete appointments via the ScheduleWise REST API Use this node when a workflow needs schedulewise behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Schedulewise Credential",
  "credentialSetupSteps": [
    "Open the ScheduleWise developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Schedulewise Credential value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Configuration",
      "description": "ScheduleWise is configured directly with input fields and does not use a resource or operation selector.",
      "operations": [
        {
          "name": "Configure",
          "value": "configure",
          "description": "Configure with the ScheduleWise node using the configured input fields.",
          "fields": [
            {
              "name": "Operation",
              "internalKey": "operation",
              "type": "string",
              "required": true,
              "description": "operation field",
              "example": "{{ $json.operation }}"
            },
            {
              "name": "Credential Id",
              "internalKey": "credentialId",
              "type": "string",
              "required": false,
              "description": "Credential ID reference to stored ScheduleWise credentials",
              "example": "cred_abc123",
              "placeholder": "cred_abc123"
            },
            {
              "name": "Date From",
              "internalKey": "dateFrom",
              "type": "date",
              "required": false,
              "description": "Start date filter for getSchedules (ISO 8601, e.g. \"2024-01-01\"). Supports {{ }} expressions.",
              "example": "2024-01-01",
              "placeholder": "2024-01-01"
            },
            {
              "name": "Date To",
              "internalKey": "dateTo",
              "type": "date",
              "required": false,
              "description": "End date filter for getSchedules (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-31",
              "placeholder": "2024-01-31"
            },
            {
              "name": "Patient Id",
              "internalKey": "patientId",
              "type": "string",
              "required": false,
              "description": "Patient identifier. Supports {{ }} expressions.",
              "example": "patient_123",
              "placeholder": "patient_123"
            },
            {
              "name": "Staff Id",
              "internalKey": "staffId",
              "type": "string",
              "required": false,
              "description": "Staff member identifier. Supports {{ }} expressions.",
              "example": "staff_456",
              "placeholder": "staff_456"
            },
            {
              "name": "Appointment Id",
              "internalKey": "appointmentId",
              "type": "string",
              "required": false,
              "description": "Appointment identifier (required for updateAppointment and deleteAppointment). Supports {{ }} expressions.",
              "example": "appt_789",
              "placeholder": "appt_789"
            },
            {
              "name": "Start Date Time",
              "internalKey": "startDateTime",
              "type": "date",
              "required": false,
              "description": "Appointment start date/time (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-15T09:00:00Z",
              "placeholder": "2024-01-15T09:00:00Z"
            },
            {
              "name": "End Date Time",
              "internalKey": "endDateTime",
              "type": "date",
              "required": false,
              "description": "Appointment end date/time (ISO 8601). Supports {{ }} expressions.",
              "example": "2024-01-15T10:00:00Z",
              "placeholder": "2024-01-15T10:00:00Z"
            },
            {
              "name": "Service Type",
              "internalKey": "serviceType",
              "type": "select",
              "required": false,
              "description": "Type of service for the appointment. Supports {{ }} expressions.",
              "example": "consultation",
              "placeholder": "consultation",
              "options": [
                "Consultation",
                "Follow-up"
              ]
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Additional notes for the appointment. Supports {{ }} expressions.",
              "example": "Patient requested morning slot",
              "placeholder": "Patient requested morning slot"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Appointment status (for updateAppointment). Supports {{ }} expressions.",
              "example": "confirmed",
              "placeholder": "confirmed"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of results to return for getSchedules.",
              "example": "10",
              "placeholder": "10",
              "defaultValue": "50"
            },
            {
              "name": "Hard Delete",
              "internalKey": "hardDelete",
              "type": "boolean",
              "required": false,
              "description": "When true, permanently deletes the appointment (appends ?hardDelete=true). Default is soft delete.",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Timeout Sec",
              "internalKey": "timeoutSec",
              "type": "date",
              "required": false,
              "description": "HTTP request timeout in seconds. Default: 30.",
              "example": "15",
              "placeholder": "15",
              "defaultValue": "30"
            },
            {
              "name": "Retries",
              "internalKey": "retries",
              "type": "number",
              "required": false,
              "description": "Number of retry attempts on 5xx or network errors (exponential backoff). Default: 0.",
              "example": "0",
              "placeholder": "0",
              "defaultValue": "0"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format: \"json\" (default) or \"raw\" (unparsed response body).",
              "example": "json",
              "placeholder": "json",
              "defaultValue": "json"
            },
            {
              "name": "Mock Mode",
              "internalKey": "mockMode",
              "type": "boolean",
              "required": false,
              "description": "When true, returns synthetic data without calling the ScheduleWise API. Useful for testing.",
              "example": "false",
              "defaultValue": "false"
            }
          ],
          "outputExample": {
            "success": true,
            "operation": "operation",
            "data": {},
            "executionTimeMs": 1,
            "error": {}
          },
          "outputDescription": "success: Whether the operation succeeded\noperation: The operation that was executed\ndata: Response data from the ScheduleWise API\nexecutionTimeMs: Elapsed time in milliseconds\nerror: Error details (present only on failure)",
          "usageExample": {
            "scenario": "Use ScheduleWise in a workflow and pass upstream data into configure.",
            "inputValues": {
              "Operation": "{{ $json.operation }}",
              "Credential Id": "cred_abc123",
              "Date From": "2024-01-01",
              "Date To": "2024-01-31",
              "Patient Id": "patient_123",
              "Staff Id": "staff_456",
              "Appointment Id": "appt_789",
              "Start Date Time": "2024-01-15T09:00:00Z",
              "End Date Time": "2024-01-15T10:00:00Z",
              "Service Type": "consultation"
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
      "error": "Authentication failed",
      "cause": "The saved connection, token, API key, or OAuth grant is missing, expired, or lacks permission.",
      "fix": "Reconnect the service in CtrlChecks Connections, then run the node again."
    },
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
    "schedule",
    "webhook",
    "manual_trigger",
    "interval",
    "chat_trigger"
  ]
};
