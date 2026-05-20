import type { NodeDoc } from '../types';

export const microsoftTeamsDoc: NodeDoc = {
  "slug": "microsoft_teams",
  "displayName": "Microsoft Teams",
  "category": "Communication",
  "logoUrl": "/icons/nodes/microsoft_teams.svg",
  "description": "Send messages to Microsoft Teams",
  "credentialType": "Microsoft Credential",
  "credentialSetupSteps": [
    "Go to Azure Portal → App registrations → New registration.",
    "Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.",
    "Under API Permissions, add Microsoft Graph: Mail.ReadWrite, Mail.Send.",
    "Create a client secret and copy it.",
    "In CtrlChecks, open Connections → Add Connection → Outlook → enter Client ID, Secret, and Tenant ID → click \"Connect with Microsoft\" → authorize."
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
              "example": "https://outlook.office.com/webhook/...",
              "placeholder": "https://outlook.office.com/webhook/..."
            },
            {
              "name": "Message",
              "internalKey": "message",
              "type": "textarea",
              "required": true,
              "description": "Message text",
              "example": "{{$json.message}}",
              "placeholder": "{{$json.message}}"
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
