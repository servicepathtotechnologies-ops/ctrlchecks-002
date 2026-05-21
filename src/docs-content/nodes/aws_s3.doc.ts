import type { NodeDoc } from '../types';

export const awsS3Doc: NodeDoc = {
  "slug": "aws_s3",
  "displayName": "AWS S3",
  "category": "Data",
  "logoUrl": "/icons/nodes/aws_s3.svg",
  "description": "AWS S3 storage operations",
  "credentialType": "AWS Credential",
  "credentialSetupSteps": [
    "What this is: AWS uses an OAuth connection so CtrlChecks can safely access your AWS account.",
    "Go to aws.amazon.com and sign in -> open IAM (Identity and Access Management).",
    "Click Users -> Create user. Give it a name (e.g. ctrlchecks-s3) and click Next.",
    "Under \"Permissions options\", click \"Attach policies directly\" -> search for \"AmazonS3FullAccess\" -> select it -> Next -> Create user.",
    "Click the new user -> Security credentials tab -> Access keys -> Create access key -> Application running outside AWS.",
    "Copy the Access Key ID and Secret Access Key. Also note your AWS region (e.g. us-east-1) and your S3 bucket name.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> AWS S3 -> enter Access Key ID, Secret Access Key, and Region -> Save.",
    "Run a test step (e.g. upload a small test file) to confirm the connection works.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the AWS node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html",
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
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "helpText": "What this field is: AWS region (default: us-east-1) for AWS S3 / Upload.\nHow to fill it: Enter the region value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.region}} or pick the value from the data picker.",
              "placeholder": "us-east-1",
              "example": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "helpText": "What this field is: AWS access key id (optional if using env/IAM role) for AWS S3 / Upload.\nWhere to find it: Open the item in AWS S3 and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.accessKeyId}} or pick the value from the data picker.",
              "placeholder": "AKIA...",
              "example": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "Enter Secret Access Key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "required": false,
              "description": "AWS session token (optional)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "helpText": "What this field is: The name of your AWS S3 storage bucket — like a top-level folder in the cloud.\nWhere to find it: Log in to AWS Console (aws.amazon.com) → S3 → Buckets. Copy the bucket name.\nExample: my-company-uploads or acme-customer-files-prod\nNote: Bucket names are globally unique and contain only lowercase letters, numbers, and hyphens.",
              "placeholder": "my-bucket",
              "example": "my-bucket"
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "helpText": "What this field is: The file path and name within the bucket — like a folder path + filename.\nExample: uploads/2025/01/profile-photo.jpg or reports/monthly/january-2025.pdf\nTip: Use {{$json.fileName}} or {{$json.userId}} to build the path dynamically.\nExample: user-uploads/{{$json.userId}}/{{$json.fileName}}",
              "placeholder": "path/to/file.pdf",
              "example": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "helpText": "What this field is: Prefix for list operation for AWS S3 / Upload.\nHow to fill it: Enter the prefix value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.prefix}} or pick the value from the data picker.",
              "placeholder": "folder/",
              "example": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for AWS S3 / Upload.\nHow to fill it: Enter the data base64 value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for AWS S3 / Upload.\nHow to fill it: Enter the data value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming AWS S3 data with upload after a related upstream event is received",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "AWS S3 returns structured upload data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "helpText": "What this field is: AWS region (default: us-east-1) for AWS S3 / Download.\nHow to fill it: Enter the region value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.region}} or pick the value from the data picker.",
              "placeholder": "us-east-1",
              "example": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "helpText": "What this field is: AWS access key id (optional if using env/IAM role) for AWS S3 / Download.\nWhere to find it: Open the item in AWS S3 and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.accessKeyId}} or pick the value from the data picker.",
              "placeholder": "AKIA...",
              "example": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "Enter Secret Access Key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "required": false,
              "description": "AWS session token (optional)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "helpText": "What this field is: S3 bucket name for AWS S3 / Download.\nHow to fill it: Enter the bucket value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.bucket}} or pick the value from the data picker.",
              "placeholder": "my-bucket",
              "example": "my-bucket"
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "helpText": "What this field is: Object key for AWS S3 / Download.\nHow to fill it: Enter the key value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.key}} or pick the value from the data picker.",
              "placeholder": "path/to/file.pdf",
              "example": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "helpText": "What this field is: Prefix for list operation for AWS S3 / Download.\nHow to fill it: Enter the prefix value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.prefix}} or pick the value from the data picker.",
              "placeholder": "folder/",
              "example": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for AWS S3 / Download.\nHow to fill it: Enter the data base64 value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for AWS S3 / Download.\nHow to fill it: Enter the data value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming AWS S3 data with download after a related upstream event is received",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "AWS S3 returns structured download data that downstream nodes can reference with {{$json.fieldName}}."
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
              "required": false,
              "description": "AWS region (default: us-east-1)",
              "helpText": "What this field is: AWS region (default: us-east-1) for AWS S3 / List.\nHow to fill it: Enter the region value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.region}} or pick the value from the data picker.",
              "placeholder": "us-east-1",
              "example": "us-east-1",
              "defaultValue": "us-east-1"
            },
            {
              "name": "Access Key Id",
              "internalKey": "accessKeyId",
              "type": "string",
              "required": false,
              "description": "AWS access key id (optional if using env/IAM role)",
              "helpText": "What this field is: AWS access key id (optional if using env/IAM role) for AWS S3 / List.\nWhere to find it: Open the item in AWS S3 and copy its ID from the URL, details page, API response, or earlier node output.\nExample: abc123, cus_123, msg_123, or C01234567\nTip: To use data from an earlier node, type {{$json.accessKeyId}} or pick the value from the data picker.",
              "placeholder": "AKIA...",
              "example": "AKIA..."
            },
            {
              "name": "Secret Access Key",
              "internalKey": "secretAccessKey",
              "type": "password",
              "required": false,
              "description": "AWS secret access key (optional if using env/IAM role)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "Enter Secret Access Key",
              "notes": "Stored and displayed as a masked credential value."
            },
            {
              "name": "Session Token",
              "internalKey": "sessionToken",
              "type": "string",
              "required": false,
              "description": "AWS session token (optional)",
              "helpText": "What this field is: A private key or token that lets CtrlChecks access AWS S3.\nWhere to get it: Open the AWS S3 dashboard, go to API Keys, Developers, Apps, or Settings, then create or copy the key/token.\nImportant: Keep this value private. Do not paste it into normal text fields unless the node specifically asks for it.\nExample format: sk_live_..., xoxb-..., or token_...",
              "placeholder": "token_..."
            },
            {
              "name": "Bucket",
              "internalKey": "bucket",
              "type": "string",
              "required": true,
              "description": "S3 bucket name",
              "helpText": "What this field is: S3 bucket name for AWS S3 / List.\nHow to fill it: Enter the bucket value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.bucket}} or pick the value from the data picker.",
              "placeholder": "my-bucket",
              "example": "my-bucket"
            },
            {
              "name": "Key",
              "internalKey": "key",
              "type": "string",
              "required": false,
              "description": "Object key",
              "helpText": "What this field is: Object key for AWS S3 / List.\nHow to fill it: Enter the key value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.key}} or pick the value from the data picker.",
              "placeholder": "path/to/file.pdf",
              "example": "path/to/file.pdf"
            },
            {
              "name": "Prefix",
              "internalKey": "prefix",
              "type": "string",
              "required": false,
              "description": "Prefix for list operation",
              "helpText": "What this field is: Prefix for list operation for AWS S3 / List.\nHow to fill it: Enter the prefix value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.prefix}} or pick the value from the data picker.",
              "placeholder": "folder/",
              "example": "folder/"
            },
            {
              "name": "Data Base64",
              "internalKey": "dataBase64",
              "type": "string",
              "required": false,
              "description": "Base64 payload for upload (alternative to data)",
              "helpText": "What this field is: Base64 payload for upload (alternative to data) for AWS S3 / List.\nHow to fill it: Enter the data base64 value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.dataBase64}} or pick the value from the data picker.",
              "placeholder": "{{$json.dataBase64}}",
              "example": "{{$json.dataBase64}}"
            },
            {
              "name": "Data",
              "internalKey": "data",
              "type": "string",
              "required": true,
              "description": "Base64 payload for upload",
              "helpText": "What this field is: Base64 payload for upload for AWS S3 / List.\nHow to fill it: Enter the data value requested by AWS S3, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.data}} or pick the value from the data picker.",
              "placeholder": "{{$json.data}}",
              "example": "{{$json.data}}"
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
            "scenario": "Process incoming AWS S3 data with list after a related upstream event is received",
            "inputValues": {
              "Region": "us-east-1",
              "Access Key Id": "AKIA...",
              "Secret Access Key": "",
              "Session Token": "",
              "Bucket": "my-bucket"
            },
            "expectedOutput": "AWS S3 returns structured list data that downstream nodes can reference with {{$json.fieldName}}."
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
