import type { NodeDoc } from '../types';

export const awsS3Doc: NodeDoc = {
  "slug": "aws_s3",
  "displayName": "AWS S3",
  "category": "Data",
  "logoUrl": "/icons/nodes/aws_s3.svg",
  "description": "AWS S3 storage operations",
  "credentialType": "AWS Credential",
  "credentialSetupSteps": [
    "No credential required."
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
          "description": "Upload using the AWS S3 node.",
          "fields": [
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "description": "AWS secret access key (optional if using env/IAM role)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "description": "AWS session token (optional)"
            },
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
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
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
            "scenario": "Use AWS S3 to upload in a workflow.",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "The node executes upload and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
        },
        {
          "name": "Download",
          "value": "download",
          "description": "Download using the AWS S3 node.",
          "fields": [
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "description": "AWS secret access key (optional if using env/IAM role)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "description": "AWS session token (optional)"
            },
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
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
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
            "scenario": "Use AWS S3 to download in a workflow.",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "The node executes download and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List using the AWS S3 node.",
          "fields": [
            {
              "name": "Region",
              "internalKey": "region",
              "type": "string",
              "description": "AWS region (default: us-east-1)",
              "example": "us-east-1",
              "placeholder": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "description": "AWS access key id (optional if using env/IAM role)",
              "example": "AKIA...",
              "placeholder": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "description": "AWS secret access key (optional if using env/IAM role)",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "description": "AWS session token (optional)"
            },
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
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "description": "Object key",
              "example": "path/to/file.pdf",
              "placeholder": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "description": "Prefix for list operation",
              "example": "folder/",
              "placeholder": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "description": "Base64 payload for upload (alternative to data)",
              "example": "{{$json.dataBase64}}",
              "placeholder": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "description": "Base64 payload for upload",
              "example": "{{$json.data}}",
              "placeholder": "{{$json.data}}"
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
            "scenario": "Use AWS S3 to list in a workflow.",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "The node executes list and exposes its result for downstream nodes."
          },
          "externalDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the AWS S3 node."
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
