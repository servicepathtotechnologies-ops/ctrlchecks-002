import type { NodeDoc } from '../types';

export const jenkinsDoc: NodeDoc = {
  "slug": "jenkins",
  "displayName": "Jenkins",
  "category": "Data",
  "logoUrl": "/icons/nodes/jenkins.svg",
  "description": "Jenkins CI/CD operations",
  "credentialType": "Jenkins API Key",
  "credentialSetupSteps": [
    "No credential required."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
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
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
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
            "scenario": "Use Jenkins to build in a workflow.",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "The node executes build and exposes its result for downstream nodes."
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
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
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
            "scenario": "Use Jenkins to status in a workflow.",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "The node executes status and exposes its result for downstream nodes."
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
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
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
            "scenario": "Use Jenkins to cancel in a workflow.",
            "inputValues": {
              "Job Name": "my-job"
            },
            "expectedOutput": "The node executes cancel and exposes its result for downstream nodes."
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
