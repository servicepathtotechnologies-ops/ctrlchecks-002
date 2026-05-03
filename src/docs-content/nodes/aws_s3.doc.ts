import type { NodeDoc } from '../types';

export const awsS3Doc: NodeDoc = {
  "slug": "aws_s3",
  "displayName": "AWS S3",
  "category": "Data",
  "logoUrl": "/icons/nodes/aws_s3.svg",
  "description": "AWS S3 storage operations Use this node when a workflow needs aws s3 behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "Aws Credential, Aws Token",
  "credentialSetupSteps": [
    "Open the AWS S3 developer console or account settings.",
    "Create or locate the required API key, token, OAuth client, webhook URL, or connection value.",
    "In CtrlChecks, open Connections or the node configuration panel for this service.",
    "Add the Aws Credential, Aws Token value and save the connection.",
    "Test the connection before running the workflow."
  ],
  "credentialDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html",
  "resources": [
    {
      "name": "Operations",
      "description": "AWS S3 exposes operation choices directly.",
      "operations": [
        {
          "name": "Upload",
          "value": "upload",
          "description": "Upload with the AWS S3 node using the configured input fields.",
          "fields": [
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "example": "my-bucket",
              "placeholder": "my-bucket"
            },
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "example": "{{ $json.secretAccessKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "password",
              "required": false,
              "description": "AWS session token (optional)",
              "example": "{{ $json.sessionToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AWS S3 node.\nstructure: Value returned by the AWS S3 node.\nconvertible: Value returned by the AWS S3 node.\ndefaultValue: Value returned by the AWS S3 node.",
          "usageExample": {
            "scenario": "Use AWS S3 in a workflow and pass upstream data into upload.",
            "inputValues": {
              "Bucket": "my-bucket",
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "{{ $json.secretAccessKey }}",
              "Session Token": "{{ $json.sessionToken }}",
              "Key": "path/to/file.pdf",
              "Prefix": "folder/",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs upload and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download with the AWS S3 node using the configured input fields.",
          "fields": [
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "example": "my-bucket",
              "placeholder": "my-bucket"
            },
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "example": "{{ $json.secretAccessKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "password",
              "required": false,
              "description": "AWS session token (optional)",
              "example": "{{ $json.sessionToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AWS S3 node.\nstructure: Value returned by the AWS S3 node.\nconvertible: Value returned by the AWS S3 node.\ndefaultValue: Value returned by the AWS S3 node.",
          "usageExample": {
            "scenario": "Use AWS S3 in a workflow and pass upstream data into download.",
            "inputValues": {
              "Bucket": "my-bucket",
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "{{ $json.secretAccessKey }}",
              "Session Token": "{{ $json.sessionToken }}",
              "Key": "path/to/file.pdf",
              "Prefix": "folder/",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs download and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the AWS S3 node using the configured input fields.",
          "fields": [
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "example": "my-bucket",
              "placeholder": "my-bucket"
            },
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "example": "{{ $json.secretAccessKey }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "password",
              "required": false,
              "description": "AWS session token (optional)",
              "example": "{{ $json.sessionToken }}",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the AWS S3 node.\nstructure: Value returned by the AWS S3 node.\nconvertible: Value returned by the AWS S3 node.\ndefaultValue: Value returned by the AWS S3 node.",
          "usageExample": {
            "scenario": "Use AWS S3 in a workflow and pass upstream data into list.",
            "inputValues": {
              "Bucket": "my-bucket",
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "{{ $json.secretAccessKey }}",
              "Session Token": "{{ $json.sessionToken }}",
              "Key": "path/to/file.pdf",
              "Prefix": "folder/",
              "Data Base64": "{{$json.dataBase64}}",
              "Data": "{{$json.data}}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
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
