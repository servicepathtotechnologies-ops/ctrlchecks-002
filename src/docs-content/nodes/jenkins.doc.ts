import type { NodeDoc } from '../types';

export const jenkinsDoc: NodeDoc = {
  "slug": "jenkins",
  "displayName": "Jenkins",
  "category": "Data",
  "logoUrl": "/icons/nodes/jenkins.svg",
  "description": "Jenkins CI/CD operations Use this node when a workflow needs jenkins behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Jenkins Credential, Jenkins Token",
  "credentialSetupSteps": [
    "Open the Jenkins developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Jenkins Credential, Jenkins Token value and save the connection.",
    "Test the connection before running the workflow."
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
          "description": "Build with the Jenkins node using the configured input fields.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": true,
              "description": "Jenkins base URL, e.g. https://jenkins.example.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Jenkins username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Jenkins API token",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Build Number",
              "internalKey": "buildNumber",
              "type": "string",
              "required": false,
              "description": "Build number for status or cancel operations",
              "example": "{{ $json.buildNumber }}"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Jenkins build parameters for parameterized jobs",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jenkins node.\nstructure: Value returned by the Jenkins node.\nconvertible: Value returned by the Jenkins node.\ndefaultValue: Value returned by the Jenkins node.",
          "usageExample": {
            "scenario": "Use Jenkins in a workflow and pass upstream data into build.",
            "inputValues": {
              "Job Name": "my-job",
              "Base Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Api Token": "{{ $json.apiToken }}",
              "Build Number": "{{ $json.buildNumber }}",
              "Parameters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs build and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Status",
          "value": "status",
          "description": "Status with the Jenkins node using the configured input fields.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": true,
              "description": "Jenkins base URL, e.g. https://jenkins.example.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Jenkins username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Jenkins API token",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Build Number",
              "internalKey": "buildNumber",
              "type": "string",
              "required": false,
              "description": "Build number for status or cancel operations",
              "example": "{{ $json.buildNumber }}"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Jenkins build parameters for parameterized jobs",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jenkins node.\nstructure: Value returned by the Jenkins node.\nconvertible: Value returned by the Jenkins node.\ndefaultValue: Value returned by the Jenkins node.",
          "usageExample": {
            "scenario": "Use Jenkins in a workflow and pass upstream data into status.",
            "inputValues": {
              "Job Name": "my-job",
              "Base Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Api Token": "{{ $json.apiToken }}",
              "Build Number": "{{ $json.buildNumber }}",
              "Parameters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs status and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "Cancel",
          "value": "cancel",
          "description": "Cancel with the Jenkins node using the configured input fields.",
          "fields": [
            {
              "name": "Job Name",
              "internalKey": "jobName",
              "type": "string",
              "required": false,
              "description": "Jenkins job name",
              "example": "my-job",
              "placeholder": "my-job"
            },
            {
              "name": "Base Url",
              "internalKey": "baseUrl",
              "type": "url",
              "required": true,
              "description": "Jenkins base URL, e.g. https://jenkins.example.com",
              "example": "https://api.example.com/resource"
            },
            {
              "name": "Username",
              "internalKey": "username",
              "type": "string",
              "required": true,
              "description": "Jenkins username",
              "example": "{{ $json.username }}"
            },
            {
              "name": "Api Token",
              "internalKey": "apiToken",
              "type": "password",
              "required": true,
              "description": "Jenkins API token",
              "example": "{{ $json.apiToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Build Number",
              "internalKey": "buildNumber",
              "type": "string",
              "required": false,
              "description": "Build number for status or cancel operations",
              "example": "{{ $json.buildNumber }}"
            },
            {
              "name": "Parameters",
              "internalKey": "parameters",
              "type": "json",
              "required": false,
              "description": "Jenkins build parameters for parameterized jobs",
              "example": "{\"key\":\"value\"}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Jenkins node.\nstructure: Value returned by the Jenkins node.\nconvertible: Value returned by the Jenkins node.\ndefaultValue: Value returned by the Jenkins node.",
          "usageExample": {
            "scenario": "Use Jenkins in a workflow and pass upstream data into cancel.",
            "inputValues": {
              "Job Name": "my-job",
              "Base Url": "https://api.example.com/resource",
              "Username": "{{ $json.username }}",
              "Api Token": "{{ $json.apiToken }}",
              "Build Number": "{{ $json.buildNumber }}",
              "Parameters": "{\"key\":\"value\"}"
            },
            "expectedOutput": "The node runs cancel and exposes its result in the output panel for the next node."
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
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
