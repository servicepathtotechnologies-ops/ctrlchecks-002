import type { NodeDoc } from '../types';

export const schedulewiseDoc: NodeDoc = {
  "slug": "schedulewise",
  "displayName": "ScheduleWise",
  "category": "Triggers",
  "logoUrl": "/icons/nodes/schedulewise.svg",
  "description": "ScheduleWise appointment scheduling — retrieve, create, update, and delete appointments via the ScheduleWise REST API",
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
              "required": false,
              "description": "Start date filter for getSchedules (ISO 8601, e.g. \"2024-01-01\"). Supports {{ }} expressions.",
              "helpText": "What this field is: Start date filter for getSchedules (ISO 8601, e.g. \"2024-01-01\"). Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the date from value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dateFrom}} or pick the value from the data picker.",
              "placeholder": "2024-01-01",
              "example": "2024-01-01"
            },
            {
              "name": "Date To",
              "internalKey": "dateTo",
              "type": "string",
              "required": false,
              "description": "End date filter for getSchedules (ISO 8601). Supports {{ }} expressions.",
              "helpText": "What this field is: End date filter for getSchedules (ISO 8601). Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the date to value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dateTo}} or pick the value from the data picker.",
              "placeholder": "2024-01-31",
              "example": "2024-01-31"
            },
            {
              "name": "Patient Id",
              "internalKey": "patientId",
              "type": "string",
              "required": false,
              "description": "Patient identifier. Supports {{ }} expressions.",
              "helpText": "What this field is: Patient identifier. Supports {{ }} expressions. for ScheduleWise / Execute.\nWhere to find it: Open the item in ScheduleWise and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.patientId}} or pick the value from the data picker.",
              "placeholder": "patient_123",
              "example": "patient_123"
            },
            {
              "name": "Staff Id",
              "internalKey": "staffId",
              "type": "string",
              "required": false,
              "description": "Staff member identifier. Supports {{ }} expressions.",
              "helpText": "What this field is: Staff member identifier. Supports {{ }} expressions. for ScheduleWise / Execute.\nWhere to find it: Open the item in ScheduleWise and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.staffId}} or pick the value from the data picker.",
              "placeholder": "staff_456",
              "example": "staff_456"
            },
            {
              "name": "Appointment Id",
              "internalKey": "appointmentId",
              "type": "string",
              "required": false,
              "description": "Appointment identifier (required for updateAppointment and deleteAppointment). Supports {{ }} expressions.",
              "helpText": "What this field is: Appointment identifier (required for updateAppointment and deleteAppointment). Supports {{ }} expressions. for ScheduleWise / Execute.\nWhere to find it: Open the item in ScheduleWise and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.appointmentId}} or pick the value from the data picker.",
              "placeholder": "appt_789",
              "example": "appt_789"
            },
            {
              "name": "Start Date Time",
              "internalKey": "startDateTime",
              "type": "string",
              "required": false,
              "description": "Appointment start date/time (ISO 8601). Supports {{ }} expressions.",
              "helpText": "What this field is: Appointment start date/time (ISO 8601). Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the start date time value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.startDateTime}} or pick the value from the data picker.",
              "placeholder": "2024-01-15T09:00:00Z",
              "example": "2024-01-15T09:00:00Z"
            },
            {
              "name": "End Date Time",
              "internalKey": "endDateTime",
              "type": "string",
              "required": false,
              "description": "Appointment end date/time (ISO 8601). Supports {{ }} expressions.",
              "helpText": "What this field is: Appointment end date/time (ISO 8601). Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the end date time value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.endDateTime}} or pick the value from the data picker.",
              "placeholder": "2024-01-15T10:00:00Z",
              "example": "2024-01-15T10:00:00Z"
            },
            {
              "name": "Service Type",
              "internalKey": "serviceType",
              "type": "string",
              "required": false,
              "description": "Type of service for the appointment. Supports {{ }} expressions.",
              "helpText": "What this field is: Type of service for the appointment. Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the service type value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.serviceType}} or pick the value from the data picker.",
              "placeholder": "consultation",
              "example": "consultation"
            },
            {
              "name": "Notes",
              "internalKey": "notes",
              "type": "string",
              "required": false,
              "description": "Additional notes for the appointment. Supports {{ }} expressions.",
              "helpText": "What this field is: Additional notes for the appointment. Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the notes value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.notes}} or pick the value from the data picker.",
              "placeholder": "Patient requested morning slot",
              "example": "Patient requested morning slot"
            },
            {
              "name": "Status",
              "internalKey": "status",
              "type": "string",
              "required": false,
              "description": "Appointment status (for updateAppointment). Supports {{ }} expressions.",
              "helpText": "What this field is: Appointment status (for updateAppointment). Supports {{ }} expressions. for ScheduleWise / Execute.\nHow to fill it: Enter the status value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.status}} or pick the value from the data picker.",
              "placeholder": "confirmed",
              "example": "confirmed"
            },
            {
              "name": "Limit",
              "internalKey": "limit",
              "type": "number",
              "required": false,
              "description": "Maximum number of results to return for getSchedules.",
              "helpText": "What this field is: A number used for limit in ScheduleWise / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.limit}} or pick the value from the data picker.",
              "placeholder": "10",
              "example": "10",
              "defaultValue": "50"
            },
            {
              "name": "Hard Delete",
              "internalKey": "hardDelete",
              "type": "boolean",
              "required": false,
              "description": "When true, permanently deletes the appointment (appends ?hardDelete=true). Default is soft delete.",
              "helpText": "What this field is: An on/off choice for hard delete in ScheduleWise / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want ScheduleWise to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Timeout Sec",
              "internalKey": "timeoutSec",
              "type": "number",
              "required": false,
              "description": "HTTP request timeout in seconds. Default: 30.",
              "helpText": "What this field is: A number used for timeout sec in ScheduleWise / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeoutSec}} or pick the value from the data picker.",
              "placeholder": "15",
              "example": "15",
              "defaultValue": "30"
            },
            {
              "name": "Retries",
              "internalKey": "retries",
              "type": "number",
              "required": false,
              "description": "Number of retry attempts on 5xx or network errors (exponential backoff). Default: 0.",
              "helpText": "What this field is: A number used for retries in ScheduleWise / Execute.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.retries}} or pick the value from the data picker.",
              "placeholder": "0",
              "example": "0",
              "defaultValue": "0"
            },
            {
              "name": "Output Format",
              "internalKey": "outputFormat",
              "type": "string",
              "required": false,
              "description": "Output format: \"json\" (default) or \"raw\" (unparsed response body).",
              "helpText": "What this field is: Output format: \"json\" (default) or \"raw\" (unparsed response body). for ScheduleWise / Execute.\nHow to fill it: Enter the output format value requested by ScheduleWise, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.outputFormat}} or pick the value from the data picker.",
              "placeholder": "json",
              "example": "json",
              "defaultValue": "json"
            },
            {
              "name": "Mock Mode",
              "internalKey": "mockMode",
              "type": "boolean",
              "required": false,
              "description": "When true, returns synthetic data without calling the ScheduleWise API. Useful for testing.",
              "helpText": "What this field is: An on/off choice for mock mode in ScheduleWise / Execute.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want ScheduleWise to use this optional behavior.",
              "placeholder": "false",
              "example": "false",
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
          "outputDescription": "success: Whether the service accepted the request.\noperation: Value returned by this operation.\nid: Unique identifier returned by the service.\nmessage: Value returned by this operation.\ndata: Returned records from the service.\nresult: Value returned by this operation.\noutput: Value returned by this operation.\nerror: Value returned by this operation.",
          "usageExample": {
            "scenario": "Process incoming ScheduleWise data with execute after a related upstream event is received",
            "inputValues": {
              "Date From": "2024-01-01",
              "Date To": "2024-01-31",
              "Patient Id": "patient_123",
              "Staff Id": "staff_456",
              "Appointment Id": "appt_789"
            },
            "expectedOutput": "ScheduleWise returns structured execute data that downstream nodes can reference with {{$json.fieldName}}."
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
