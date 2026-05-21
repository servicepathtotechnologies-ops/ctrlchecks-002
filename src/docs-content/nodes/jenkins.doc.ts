import type { NodeDoc } from '../types';

export const jenkinsDoc: NodeDoc = {
  "slug": "jenkins",
  "displayName": "Jenkins",
  "category": "Data",
  "logoUrl": "/icons/nodes/jenkins.svg",
  "description": "Jenkins CI/CD operations",
  "credentialType": "Jenkins API Key",
  "credentialSetupSteps": [
    "What this is: Jenkins uses an API key or account connection so CtrlChecks can safely access your Jenkins account.",
    "Log in to your Jenkins server (usually at http://yourserver:8080).",
    "Click your username in the top right -> Configure (or go to /user/your-username/configure).",
    "Scroll down to \"API Token\" section -> click \"Add new Token\" -> give it a name -> Generate.",
    "Copy the token - it is a long string of letters and numbers, shown only once.",
    "Note your Jenkins URL (e.g. http://yourserver:8080) and username.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Jenkins -> enter Jenkins URL, username, and API token -> Save.",
    "Run a test step (e.g. trigger a build) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Jenkins node and select the saved connection."
  ],
  "credentialDocsUrl": "https://www.jenkins.io/doc/book/using/remote-access-api/",
  "resources": [
    {
      "name": "Operations",
      "description": "Jenkins exposes operation choices directly.",
      "operations": [
        {
          "name": "Build",
          "value": "build",
          "description": "Build using the Jenkins node.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "helpText": "What this field is: Jenkins job name for Jenkins / Build.\nHow to fill it: Enter the job name value requested by Jenkins, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jobName}} or pick the value from the data picker.",
              "placeholder": "my-job",
              "example": "my-job"
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
            "scenario": "Process incoming Jenkins data with build after a related upstream event is received",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "Jenkins returns structured build data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Status",
          "value": "status",
          "description": "Status using the Jenkins node.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "helpText": "What this field is: Jenkins job name for Jenkins / Status.\nHow to fill it: Enter the job name value requested by Jenkins, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jobName}} or pick the value from the data picker.",
              "placeholder": "my-job",
              "example": "my-job"
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
            "scenario": "Process incoming Jenkins data with status after a related upstream event is received",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "Jenkins returns structured status data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Cancel",
          "value": "cancel",
          "description": "Cancel using the Jenkins node.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "helpText": "What this field is: Jenkins job name for Jenkins / Cancel.\nHow to fill it: Enter the job name value requested by Jenkins, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.jobName}} or pick the value from the data picker.",
              "placeholder": "my-job",
              "example": "my-job"
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
            "scenario": "Process incoming Jenkins data with cancel after a related upstream event is received",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "Jenkins returns structured cancel data that downstream nodes can reference with {{$json.fieldName}}."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Jenkins node."
    },
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
