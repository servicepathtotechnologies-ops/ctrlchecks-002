import type { NodeDoc } from '../types';

export const httpRequestDoc: NodeDoc = {
  "slug": "http_request",
  "displayName": "HTTP Request",
  "category": "Utility",
  "logoUrl": "/icons/nodes/http_request.svg",
  "description": "Makes HTTP requests to external APIs or services",
  "credentialType": "None",
  "credentialSetupSteps": [
    "This node does not need a saved account connection.",
    "Open the node settings and fill the visible input fields.",
    "Run the workflow when the required fields are complete."
  ],
  "credentialDocsUrl": "https://docs.ctrlchecks.com",
  "resources": [
    {
      "name": "Operations",
      "description": "HTTP Request exposes operation choices directly.",
      "operations": [
        {
          "name": "GET",
          "value": "GET",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "helpText": "What this field is: Full URL to request for HTTP Request / GET.\nHow to fill it: Paste the full web address HTTP Request should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com/data",
              "example": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "helpText": "What this field is: HTTP method for HTTP Request / GET.\nHow to fill it: Enter the method value requested by HTTP Request, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "helpText": "What this field is: Extra information sent with the request — most commonly used for authentication.\nFormat: JSON object where keys are header names and values are header values.\nCommon examples:\n  Authentication: {\"Authorization\":\"Bearer YOUR_API_TOKEN\"}\n  API key header: {\"X-API-Key\":\"your-api-key-here\"}\n  Content type:   {\"Content-Type\":\"application/json\"}\n  Combined:       {\"Authorization\":\"Bearer abc123\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "helpText": "What this field is: Query string parameters for HTTP Request / GET.\nHow to fill it: Enter valid JSON in the format HTTP Request expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.qs}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Request timeout in milliseconds",
              "helpText": "What this field is: A number used for timeout in HTTP Request / GET.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "10000",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
              "helpText": "What this field is: An on/off choice for retry on fail in HTTP Request / GET.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want HTTP Request to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in HTTP Request / GET.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "POST",
          "value": "POST",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "helpText": "What this field is: Full URL to request for HTTP Request / POST.\nHow to fill it: Paste the full web address HTTP Request should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com/data",
              "example": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "helpText": "What this field is: HTTP method for HTTP Request / POST.\nHow to fill it: Enter the method value requested by HTTP Request, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "helpText": "What this field is: Extra information sent with the request — most commonly used for authentication.\nFormat: JSON object where keys are header names and values are header values.\nCommon examples:\n  Authentication: {\"Authorization\":\"Bearer YOUR_API_TOKEN\"}\n  API key header: {\"X-API-Key\":\"your-api-key-here\"}\n  Content type:   {\"Content-Type\":\"application/json\"}\n  Combined:       {\"Authorization\":\"Bearer abc123\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Request body for POST/PUT/PATCH",
              "helpText": "What this field is: Request body for POST/PUT/PATCH for HTTP Request / POST.\nHow to fill it: Type the message, prompt, or content you want HTTP Request to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "helpText": "What this field is: Query string parameters for HTTP Request / POST.\nHow to fill it: Enter valid JSON in the format HTTP Request expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.qs}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Request timeout in milliseconds",
              "helpText": "What this field is: A number used for timeout in HTTP Request / POST.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "10000",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
              "helpText": "What this field is: An on/off choice for retry on fail in HTTP Request / POST.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want HTTP Request to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in HTTP Request / POST.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "PUT",
          "value": "PUT",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "helpText": "What this field is: Full URL to request for HTTP Request / PUT.\nHow to fill it: Paste the full web address HTTP Request should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com/data",
              "example": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "helpText": "What this field is: HTTP method for HTTP Request / PUT.\nHow to fill it: Enter the method value requested by HTTP Request, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "helpText": "What this field is: Extra information sent with the request — most commonly used for authentication.\nFormat: JSON object where keys are header names and values are header values.\nCommon examples:\n  Authentication: {\"Authorization\":\"Bearer YOUR_API_TOKEN\"}\n  API key header: {\"X-API-Key\":\"your-api-key-here\"}\n  Content type:   {\"Content-Type\":\"application/json\"}\n  Combined:       {\"Authorization\":\"Bearer abc123\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Request body for POST/PUT/PATCH",
              "helpText": "What this field is: Request body for POST/PUT/PATCH for HTTP Request / PUT.\nHow to fill it: Type the message, prompt, or content you want HTTP Request to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "helpText": "What this field is: Query string parameters for HTTP Request / PUT.\nHow to fill it: Enter valid JSON in the format HTTP Request expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.qs}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Request timeout in milliseconds",
              "helpText": "What this field is: A number used for timeout in HTTP Request / PUT.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "10000",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
              "helpText": "What this field is: An on/off choice for retry on fail in HTTP Request / PUT.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want HTTP Request to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in HTTP Request / PUT.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "PATCH",
          "value": "PATCH",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "helpText": "What this field is: Full URL to request for HTTP Request / PATCH.\nHow to fill it: Paste the full web address HTTP Request should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com/data",
              "example": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "helpText": "What this field is: HTTP method for HTTP Request / PATCH.\nHow to fill it: Enter the method value requested by HTTP Request, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "helpText": "What this field is: Extra information sent with the request — most commonly used for authentication.\nFormat: JSON object where keys are header names and values are header values.\nCommon examples:\n  Authentication: {\"Authorization\":\"Bearer YOUR_API_TOKEN\"}\n  API key header: {\"X-API-Key\":\"your-api-key-here\"}\n  Content type:   {\"Content-Type\":\"application/json\"}\n  Combined:       {\"Authorization\":\"Bearer abc123\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Body",
              "internalKey": "body",
              "type": "textarea",
              "required": true,
              "description": "Request body for POST/PUT/PATCH",
              "helpText": "What this field is: Request body for POST/PUT/PATCH for HTTP Request / PATCH.\nHow to fill it: Type the message, prompt, or content you want HTTP Request to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "helpText": "What this field is: Query string parameters for HTTP Request / PATCH.\nHow to fill it: Enter valid JSON in the format HTTP Request expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.qs}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Request timeout in milliseconds",
              "helpText": "What this field is: A number used for timeout in HTTP Request / PATCH.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "10000",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
              "helpText": "What this field is: An on/off choice for retry on fail in HTTP Request / PATCH.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want HTTP Request to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in HTTP Request / PATCH.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
          },
          "externalDocsUrl": "https://docs.ctrlchecks.com"
        },
        {
          "name": "DELETE",
          "value": "DELETE",
          "description": "Make an HTTP request (GET, POST, PUT, PATCH, DELETE) to any URL.",
          "fields": [
            {
              "name": "Url",
              "internalKey": "url",
              "type": "url",
              "required": true,
              "description": "Full URL to request",
              "helpText": "What this field is: Full URL to request for HTTP Request / DELETE.\nHow to fill it: Paste the full web address HTTP Request should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.url}} or pick the value from the data picker.",
              "placeholder": "https://api.example.com/data",
              "example": "https://api.example.com/data"
            },
            {
              "name": "Method",
              "internalKey": "method",
              "type": "string",
              "required": false,
              "description": "HTTP method",
              "helpText": "What this field is: HTTP method for HTTP Request / DELETE.\nHow to fill it: Enter the method value requested by HTTP Request, or map it from the previous workflow step.\nTip: To use data from an earlier node, type {{$json.method}} or pick the value from the data picker.",
              "placeholder": "GET",
              "example": "GET",
              "defaultValue": "GET"
            },
            {
              "name": "Headers",
              "internalKey": "headers",
              "type": "json",
              "required": false,
              "description": "HTTP headers to send",
              "helpText": "What this field is: Extra information sent with the request — most commonly used for authentication.\nFormat: JSON object where keys are header names and values are header values.\nCommon examples:\n  Authentication: {\"Authorization\":\"Bearer YOUR_API_TOKEN\"}\n  API key header: {\"X-API-Key\":\"your-api-key-here\"}\n  Content type:   {\"Content-Type\":\"application/json\"}\n  Combined:       {\"Authorization\":\"Bearer abc123\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}",
              "placeholder": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}",
              "example": "{\"Authorization\":\"Bearer {{$credentials.apiKey}}\",\"Content-Type\":\"application/json\"}"
            },
            {
              "name": "Qs",
              "internalKey": "qs",
              "type": "json",
              "required": false,
              "description": "Query string parameters",
              "helpText": "What this field is: Query string parameters for HTTP Request / DELETE.\nHow to fill it: Enter valid JSON in the format HTTP Request expects. Use { } for one object, or [ ] for a list.\nExample object: {\"name\":\"Alice\",\"email\":\"alice@example.com\"}\nExample list: [{\"name\":\"Alice\"},{\"name\":\"Bob\"}]\nTip: To use data from an earlier node, type {{$json.qs}} or pick the value from the data picker.",
              "placeholder": "{\"key\":\"value\"}",
              "example": "{\"key\":\"value\"}"
            },
            {
              "name": "Timeout",
              "internalKey": "timeout",
              "type": "number",
              "required": false,
              "description": "Request timeout in milliseconds",
              "helpText": "What this field is: A number used for timeout in HTTP Request / DELETE.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.timeout}} or pick the value from the data picker.",
              "placeholder": "10000",
              "example": "10000",
              "defaultValue": "10000"
            },
            {
              "name": "Retry On Fail",
              "internalKey": "retryOnFail",
              "type": "boolean",
              "required": false,
              "description": "Retry on failure",
              "helpText": "What this field is: An on/off choice for retry on fail in HTTP Request / DELETE.\nHow to fill it: Turn it on for Yes/True, or off for No/False.\nExample: Turn it on only when you want HTTP Request to use this optional behavior.",
              "placeholder": "true",
              "example": "true",
              "defaultValue": "true"
            },
            {
              "name": "Max Retries",
              "internalKey": "maxRetries",
              "type": "number",
              "required": false,
              "description": "Maximum retry attempts",
              "helpText": "What this field is: A number used for max retries in HTTP Request / DELETE.\nHow to fill it: Type digits only unless the field description says decimals are allowed.\nExample: 10\nTip: To use data from an earlier node, type {{$json.maxRetries}} or pick the value from the data picker.",
              "placeholder": "3",
              "example": "3",
              "defaultValue": "3"
            }
          ],
          "outputExample": {
            "status": 200,
            "body": {
              "id": 101,
              "title": "Hello World",
              "completed": false
            },
            "headers": {
              "content-type": "application/json; charset=utf-8"
            }
          },
          "outputDescription": "status: HTTP response code. body: Parsed response body (object if JSON, string otherwise). headers: Response headers.",
          "usageExample": {
            "scenario": "Fetch user details from a REST API to enrich webhook data",
            "inputValues": {
              "url": "https://api.example.com/users/{{$json.userId}}",
              "method": "GET",
              "headers": "{\"Authorization\": \"Bearer {{$env.API_TOKEN}}\", \"Accept\": \"application/json\"}"
            },
            "expectedOutput": "API response in `{{$json.body}}`. Access fields via `{{$json.body.email}}`."
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
