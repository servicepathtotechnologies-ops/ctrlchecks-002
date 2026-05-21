import type { NodeDoc } from '../types';

export const microsoftTeamsDoc: NodeDoc = {
  "slug": "microsoft_teams",
  "displayName": "Microsoft Teams",
  "category": "Communication",
  "logoUrl": "/icons/nodes/microsoft_teams.svg",
  "description": "Send messages to Microsoft Teams",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "What this is: Microsoft uses an OAuth connection so CtrlChecks can safely access your Microsoft account.",
    "Go to portal.azure.com and sign in with your Microsoft account.",
    "Go to Azure Active Directory -> App registrations -> New registration.",
    "Give it a name (e.g. CtrlChecks Email) -> set Redirect URI to: http://localhost:3001/api/oauth/microsoft/callback -> Register.",
    "Copy the Application (client) ID and Directory (tenant) ID.",
    "Go to Certificates & Secrets -> New client secret -> Add. Copy the secret VALUE immediately.",
    "Go to API permissions -> Add a permission -> Microsoft Graph -> Delegated -> add Mail.ReadWrite and Mail.Send.",
    "In CtrlChecks -> left menu -> Connections -> Add Connection -> Outlook -> enter Client ID, Secret, and Tenant ID -> Connect with Microsoft -> authorize.",
    "Safety note: Treat secrets, tokens, passwords, and client secrets like passwords. Only paste them into CtrlChecks Connections, not into regular workflow text fields.",
    "After saving, click Test Connection if it is available, then return to the Microsoft node and select the saved connection."
  ],
  "credentialDocsUrl": "https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview",
  "resources": [
    {
      "name": "Configuration",
      "description": "Microsoft Teams is configured directly with input fields.",
      "operations": [
        {
          "name": "Execute",
          "value": "default",
          "description": "Send a message to a Microsoft Teams channel or chat.",
          "fields": [
            {
              "name": "Webhook Url",
              "internalKey": "webhookUrl",
              "type": "url",
              "required": true,
              "description": "Teams webhook URL",
              "helpText": "What this field is: Teams webhook URL for Microsoft Teams / Execute.\nHow to fill it: Paste the full web address Microsoft Teams should use, starting with https:// whenever possible.\nExample: https://api.example.com/customers\nTip: To use data from an earlier node, type {{$json.webhookUrl}} or pick the value from the data picker.",
              "placeholder": "https://outlook.office.com/webhook/...",
              "example": "https://outlook.office.com/webhook/..."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "helpText": "What this field is: Message text for Microsoft Teams / Execute.\nHow to fill it: Type the message, prompt, or content you want Microsoft Teams to send or process.\nExample: Hello {{$json.name}}, your report is ready.\nTip: Anything inside {{ }} can come from an earlier workflow step.",
              "placeholder": "{{$json.message}}",
              "example": "{{$json.message}}"
            }
          ],
          "outputExample": {
            "id": "1705123456789",
            "etag": "1705123456789",
            "type": "message",
            "createdDateTime": "2025-01-15T10:00:00Z",
            "body": {
              "content": "Sprint completed ✅"
            }
          },
          "outputDescription": "id: Teams message ID. createdDateTime: When the message was created. body.content: The message text.",
          "usageExample": {
            "scenario": "Post a sprint completion summary to a Teams channel",
            "inputValues": {
              "teamId": "{{$env.TEAMS_TEAM_ID}}",
              "channelId": "{{$env.TEAMS_CHANNEL_ID}}",
              "message": "🏁 Sprint {{$json.sprintName}} completed!\n\n**Delivered:** {{$json.storiesCompleted}} stories\n**Velocity:** {{$json.velocity}} points"
            },
            "expectedOutput": "The message is posted in Teams. Use `{{$json.id}}` to reply or reference the message."
          },
          "externalDocsUrl": "https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Authentication failed",
      "cause": "The saved credential, token, API key, or OAuth grant is missing, expired, or lacks the required scope.",
      "fix": "Reconnect the service in CtrlChecks → Connections, then re-run the Microsoft Teams node."
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
