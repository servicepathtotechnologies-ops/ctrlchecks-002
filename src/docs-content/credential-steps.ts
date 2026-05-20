/**
 * Service-specific credential setup steps for every credential type.
 * The docs generator merges these into each node's credentialSetupSteps array.
 */
export interface CredentialGuide {
  steps: string[];
  docsUrl: string;
}

export const credentialSteps: Record<string, CredentialGuide> = {
  // ─── Google / Gmail ────────────────────────────────────────────
  'Google Credential': {
    steps: [
      'Go to https://console.cloud.google.com → APIs & Services → Credentials.',
      'Click "Create Credentials" → "OAuth 2.0 Client ID" → Application type: Web Application.',
      'Under Authorized redirect URIs, add: http://localhost:3001/api/oauth/google/callback',
      'Copy the Client ID and Client Secret — paste them into your CtrlChecks .env (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).',
      'In CtrlChecks, open Connections → Add Connection → select the Google service → click "Connect with Google".',
      'Sign in and grant the required scopes. The connection saves automatically.',
    ],
    docsUrl: 'https://developers.google.com/identity/protocols/oauth2',
  },

  // ─── Slack ─────────────────────────────────────────────────────
  'Slack Credential': {
    steps: [
      'Go to https://api.slack.com/apps → click "Create New App" → "From scratch".',
      'Under "OAuth & Permissions", add the Bot Token Scopes you need (e.g. chat:write, channels:read).',
      'Click "Install to Workspace" and allow the permissions.',
      'Copy the Bot User OAuth Token (starts with xoxb-).',
      'In CtrlChecks, open Connections → Add Connection → Slack → paste the Bot Token → Save.',
    ],
    docsUrl: 'https://api.slack.com/authentication/basics',
  },

  // ─── Slack Webhook ─────────────────────────────────────────────
  'Slack Webhook URL': {
    steps: [
      'Go to https://api.slack.com/apps → select your app (or create one).',
      'Under "Incoming Webhooks", toggle "Activate Incoming Webhooks" to On.',
      'Click "Add New Webhook to Workspace", select a channel, and click "Allow".',
      'Copy the Webhook URL (starts with https://hooks.slack.com/services/).',
      'In CtrlChecks, paste the Webhook URL in the Slack Webhook node configuration.',
    ],
    docsUrl: 'https://api.slack.com/messaging/webhooks',
  },

  // ─── OpenAI ────────────────────────────────────────────────────
  'OpenAI API Key': {
    steps: [
      'Go to https://platform.openai.com/api-keys.',
      'Click "Create new secret key", give it a name, and click "Create secret key".',
      'Copy the key immediately — it will only be shown once.',
      'In CtrlChecks, open Connections → Add Connection → OpenAI → paste the API key → Save.',
    ],
    docsUrl: 'https://platform.openai.com/docs/api-reference/authentication',
  },

  // ─── Anthropic ─────────────────────────────────────────────────
  'Anthropic API Key': {
    steps: [
      'Go to https://console.anthropic.com/settings/keys.',
      'Click "Create Key", give it a name, and copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Anthropic Claude → paste the API key → Save.',
    ],
    docsUrl: 'https://docs.anthropic.com/en/api/getting-started',
  },

  // ─── Google Gemini ─────────────────────────────────────────────
  'Google Gemini API Key': {
    steps: [
      'Go to https://aistudio.google.com/app/apikey.',
      'Click "Create API Key" → select or create a Google Cloud project.',
      'Copy the generated API key.',
      'In CtrlChecks, open Connections → Add Connection → Google Gemini → paste the API key → Save.',
    ],
    docsUrl: 'https://ai.google.dev/tutorials/setup',
  },

  // ─── Ollama (local) ────────────────────────────────────────────
  'Ollama (Local)': {
    steps: [
      'Install Ollama from https://ollama.com and run `ollama serve` to start the local server.',
      'Pull the model you want: `ollama pull llama3` (or any other model).',
      'The Ollama node uses http://localhost:11434 by default — no API key required.',
      'If running on a remote host, set the base URL field to http://<your-server>:11434.',
    ],
    docsUrl: 'https://ollama.com/docs',
  },

  // ─── PostgreSQL ────────────────────────────────────────────────
  'PostgreSQL Connection': {
    steps: [
      'Ensure your PostgreSQL server is running and reachable from the worker host.',
      'In CtrlChecks, open Connections → Add Connection → PostgreSQL.',
      'Enter: Host, Port (default 5432), Database name, Username, Password.',
      'Click "Test Connection" to verify, then Save.',
      'For AWS RDS: ensure the security group allows inbound traffic on port 5432 from the worker IP.',
    ],
    docsUrl: 'https://www.postgresql.org/docs/current/tutorial-accessdb.html',
  },

  // ─── Supabase ──────────────────────────────────────────────────
  'Supabase Credential': {
    steps: [
      'Go to your Supabase project → Settings → API.',
      'Copy the Project URL and the anon/service_role API key.',
      'In CtrlChecks, open Connections → Add Connection → Supabase.',
      'Paste the Project URL and API key → Save.',
    ],
    docsUrl: 'https://supabase.com/docs/guides/getting-started/quickstarts',
  },

  // ─── Telegram ──────────────────────────────────────────────────
  'Telegram Bot Token': {
    steps: [
      'Open Telegram and search for @BotFather.',
      'Send /newbot, give your bot a name, then a username ending in "bot".',
      'BotFather will reply with your Bot Token (e.g. 123456:ABC-DEF…).',
      'In CtrlChecks, open Connections → Add Connection → Telegram → paste the Bot Token → Save.',
    ],
    docsUrl: 'https://core.telegram.org/bots/tutorial',
  },

  // ─── Discord ───────────────────────────────────────────────────
  'Discord Bot Token': {
    steps: [
      'Go to https://discord.com/developers/applications → click "New Application".',
      'Under "Bot", click "Add Bot" → "Yes, do it!".',
      'Click "Reset Token" and copy the bot token.',
      'Under "OAuth2 → URL Generator", select "bot" scope + "Send Messages" permission, copy the URL, and add the bot to your server.',
      'In CtrlChecks, open Connections → Add Connection → Discord → paste the Bot Token → Save.',
    ],
    docsUrl: 'https://discord.com/developers/docs/getting-started',
  },

  // ─── Discord Webhook ───────────────────────────────────────────
  'Discord Webhook URL': {
    steps: [
      'In your Discord server, go to the channel settings → Integrations → Webhooks.',
      'Click "New Webhook", give it a name, and copy the Webhook URL.',
      'In CtrlChecks, paste the Webhook URL in the Discord Webhook node configuration.',
    ],
    docsUrl: 'https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks',
  },

  // ─── Twitter / X ───────────────────────────────────────────────
  'Twitter API Key': {
    steps: [
      'Go to https://developer.twitter.com/en/portal/dashboard → create a project and an app.',
      'Under "Keys and Tokens", generate API Key, API Secret, Access Token, and Access Token Secret.',
      'In CtrlChecks, open Connections → Add Connection → Twitter/X → enter all four keys → Save.',
    ],
    docsUrl: 'https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api',
  },

  // ─── LinkedIn ──────────────────────────────────────────────────
  'LinkedIn Credential': {
    steps: [
      'Go to https://www.linkedin.com/developers/apps → click "Create app".',
      'Fill in app name, company, and logo, then click "Create app".',
      'Under "Auth", add http://localhost:3001/api/oauth/linkedin/callback as a redirect URL.',
      'Copy the Client ID and Client Secret.',
      'In CtrlChecks, open Connections → Add Connection → LinkedIn → click "Connect with LinkedIn" → authorize.',
    ],
    docsUrl: 'https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow',
  },

  // ─── Instagram ─────────────────────────────────────────────────
  'Instagram Credential': {
    steps: [
      'Create a Facebook Developer app at https://developers.facebook.com/apps.',
      'Add the "Instagram Graph API" product to your app.',
      'Connect your Instagram Business/Creator account to a Facebook Page.',
      'Generate a long-lived access token via the Graph API Explorer.',
      'In CtrlChecks, open Connections → Add Connection → Instagram → paste the access token → Save.',
    ],
    docsUrl: 'https://developers.facebook.com/docs/instagram-api/getting-started',
  },

  // ─── Facebook ──────────────────────────────────────────────────
  'Facebook Credential': {
    steps: [
      'Go to https://developers.facebook.com/apps → Create App → Business type.',
      'Add the "Facebook Login" product.',
      'Under Facebook Login → Settings, add http://localhost:3001/api/oauth/facebook/callback as a Valid OAuth Redirect URI.',
      'Copy the App ID and App Secret.',
      'In CtrlChecks, open Connections → Add Connection → Facebook → click "Connect with Facebook" → authorize.',
    ],
    docsUrl: 'https://developers.facebook.com/docs/facebook-login/web',
  },

  // ─── HubSpot ───────────────────────────────────────────────────
  'HubSpot API Key': {
    steps: [
      'Log in to HubSpot → Settings (gear icon) → Integrations → Private Apps.',
      'Click "Create private app", give it a name, and under "Scopes" select the required ones (e.g. crm.objects.contacts.read/write).',
      'Click "Create app" and copy the Access Token.',
      'In CtrlChecks, open Connections → Add Connection → HubSpot → paste the Access Token → Save.',
    ],
    docsUrl: 'https://developers.hubspot.com/docs/api/private-apps',
  },

  // ─── Salesforce ────────────────────────────────────────────────
  'Salesforce Credential': {
    steps: [
      'In Salesforce, go to Setup → Apps → App Manager → "New Connected App".',
      'Enable OAuth Settings, set the callback URL to http://localhost:3001/api/oauth/salesforce/callback, and select required scopes.',
      'Save and copy the Consumer Key (Client ID) and Consumer Secret.',
      'In CtrlChecks, open Connections → Add Connection → Salesforce → click "Connect with Salesforce" → authorize.',
    ],
    docsUrl: 'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm',
  },

  // ─── Notion ────────────────────────────────────────────────────
  'Notion API Key': {
    steps: [
      'Go to https://www.notion.so/my-integrations → click "+ New integration".',
      'Give it a name and select the workspace. Under capabilities, enable what you need (read/write content, read user info).',
      'Click "Submit" and copy the Internal Integration Token (starts with secret_).',
      'In each Notion database you want to access: click the ⋯ menu → Connections → add your integration.',
      'In CtrlChecks, open Connections → Add Connection → Notion → paste the Integration Token → Save.',
    ],
    docsUrl: 'https://developers.notion.com/docs/getting-started',
  },

  // ─── Airtable ──────────────────────────────────────────────────
  'Airtable API Key': {
    steps: [
      'Go to https://airtable.com/account → scroll to "API" section → click "Create token" (or "Generate API key" for legacy).',
      'Add scopes: data.records:read, data.records:write, schema.bases:read.',
      'Under "Access", add the bases you want to grant access to.',
      'Copy the Personal Access Token.',
      'In CtrlChecks, open Connections → Add Connection → Airtable → paste the token → Save.',
    ],
    docsUrl: 'https://airtable.com/developers/web/api/introduction',
  },

  // ─── Stripe ────────────────────────────────────────────────────
  'Stripe API Key': {
    steps: [
      'Log in to https://dashboard.stripe.com → Developers → API keys.',
      'Use the "Secret key" (starts with sk_live_ or sk_test_ for test mode).',
      'In CtrlChecks, open Connections → Add Connection → Stripe → paste the Secret Key → Save.',
      'Tip: use sk_test_ during development and sk_live_ in production.',
    ],
    docsUrl: 'https://stripe.com/docs/keys',
  },

  // ─── PayPal ────────────────────────────────────────────────────
  'PayPal Credential': {
    steps: [
      'Go to https://developer.paypal.com/dashboard/ → My Apps & Credentials.',
      'Create a new app to get a Client ID and Secret.',
      'Use the Sandbox credentials for testing, Live credentials for production.',
      'In CtrlChecks, open Connections → Add Connection → PayPal → paste Client ID and Secret → Save.',
    ],
    docsUrl: 'https://developer.paypal.com/api/rest/',
  },

  // ─── Shopify ───────────────────────────────────────────────────
  'Shopify API Key': {
    steps: [
      'In your Shopify admin, go to Settings → Apps and sales channels → Develop apps.',
      'Click "Create an app", give it a name, and click "Create app".',
      'Under "Configuration", set the Admin API access scopes you need.',
      'Under "API credentials", click "Install app", then copy the Admin API access token.',
      'In CtrlChecks, open Connections → Add Connection → Shopify → enter your store domain and access token → Save.',
    ],
    docsUrl: 'https://shopify.dev/docs/apps/auth/admin-app-access-tokens',
  },

  // ─── WooCommerce ───────────────────────────────────────────────
  'WooCommerce API Key': {
    steps: [
      'In your WordPress admin, go to WooCommerce → Settings → Advanced → REST API.',
      'Click "Add Key", set permissions to "Read/Write", and click "Generate API Key".',
      'Copy the Consumer Key and Consumer Secret.',
      'In CtrlChecks, open Connections → Add Connection → WooCommerce → enter your store URL, Consumer Key, and Consumer Secret → Save.',
    ],
    docsUrl: 'https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication',
  },

  // ─── GitHub ────────────────────────────────────────────────────
  'GitHub Access Token': {
    steps: [
      'Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic).',
      'Click "Generate new token (classic)", select the scopes you need (e.g. repo, workflow).',
      'Copy the token immediately — it will only be shown once.',
      'In CtrlChecks, open Connections → Add Connection → GitHub → paste the token → Save.',
    ],
    docsUrl: 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token',
  },

  // ─── GitLab ────────────────────────────────────────────────────
  'GitLab Access Token': {
    steps: [
      'Go to GitLab → User Settings → Access Tokens.',
      'Give the token a name, set an expiry, and select scopes (e.g. api, read_user).',
      'Click "Create personal access token" and copy it.',
      'In CtrlChecks, open Connections → Add Connection → GitLab → paste the token → Save.',
    ],
    docsUrl: 'https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html',
  },

  // ─── Jira ──────────────────────────────────────────────────────
  'Jira API Token': {
    steps: [
      'Go to https://id.atlassian.com/manage-profile/security/api-tokens → click "Create API token".',
      'Give it a label and copy the token.',
      'In CtrlChecks, open Connections → Add Connection → Jira.',
      'Enter your Atlassian email, the API token, and your Jira base URL (e.g. https://yourcompany.atlassian.net) → Save.',
    ],
    docsUrl: 'https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/',
  },

  // ─── Jenkins ───────────────────────────────────────────────────
  'Jenkins API Token': {
    steps: [
      'Log in to Jenkins → click your username (top right) → Configure.',
      'Under "API Token", click "Add new Token", give it a name, and copy the token.',
      'In CtrlChecks, open Connections → Add Connection → Jenkins.',
      'Enter your Jenkins URL, username, and API token → Save.',
    ],
    docsUrl: 'https://www.jenkins.io/doc/book/using/remote-access-api/',
  },

  // ─── Twilio ────────────────────────────────────────────────────
  'Twilio Credential': {
    steps: [
      'Log in to https://console.twilio.com → go to Account Info.',
      'Copy the Account SID and Auth Token.',
      'In CtrlChecks, open Connections → Add Connection → Twilio → paste Account SID and Auth Token → Save.',
    ],
    docsUrl: 'https://www.twilio.com/docs/usage/api',
  },

  // ─── Mailgun ───────────────────────────────────────────────────
  'Mailgun API Key': {
    steps: [
      'Log in to https://app.mailgun.com → Settings → API Keys.',
      'Copy the Private API Key.',
      'In CtrlChecks, open Connections → Add Connection → Mailgun → paste the API Key and enter your domain → Save.',
    ],
    docsUrl: 'https://documentation.mailgun.com/en/latest/api_reference.html',
  },

  // ─── SendGrid ──────────────────────────────────────────────────
  'SendGrid API Key': {
    steps: [
      'Log in to https://app.sendgrid.com → Settings → API Keys → Create API Key.',
      'Select "Restricted Access" and enable Mail Send permission.',
      'Copy the API key.',
      'In CtrlChecks, open Connections → Add Connection → SendGrid → paste the API key → Save.',
    ],
    docsUrl: 'https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication',
  },

  // ─── Amazon SES ────────────────────────────────────────────────
  'AWS SES Credential': {
    steps: [
      'In the AWS Console, go to IAM → Users → Create user with programmatic access.',
      'Attach the "AmazonSESFullAccess" policy.',
      'Download or copy the Access Key ID and Secret Access Key.',
      'In CtrlChecks, open Connections → Add Connection → Amazon SES → paste Access Key ID, Secret Access Key, and Region → Save.',
    ],
    docsUrl: 'https://docs.aws.amazon.com/ses/latest/dg/setting-up.html',
  },

  // ─── AWS S3 ────────────────────────────────────────────────────
  'AWS S3 Credential': {
    steps: [
      'In the AWS Console, go to IAM → Users → Create user with programmatic access.',
      'Attach the "AmazonS3FullAccess" policy (or a custom policy for least privilege).',
      'Copy the Access Key ID and Secret Access Key.',
      'In CtrlChecks, open Connections → Add Connection → AWS S3 → paste Access Key ID, Secret, Region, and Bucket name → Save.',
    ],
    docsUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html',
  },

  // ─── Zoom ──────────────────────────────────────────────────────
  'Zoom Credential': {
    steps: [
      'Go to https://marketplace.zoom.us → Develop → Build App → choose "Server-to-Server OAuth" for API access.',
      'Note the Account ID, Client ID, and Client Secret.',
      'Add required scopes (e.g. meeting:write).',
      'In CtrlChecks, open Connections → Add Connection → Zoom → paste Account ID, Client ID, and Secret → Save.',
    ],
    docsUrl: 'https://developers.zoom.us/docs/internal-apps/s2s-oauth/',
  },

  // ─── Microsoft Teams ───────────────────────────────────────────
  'Microsoft Teams Credential': {
    steps: [
      'Go to https://portal.azure.com → Azure Active Directory → App registrations → New registration.',
      'Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.',
      'Under "Certificates & Secrets", create a new client secret and copy it.',
      'Copy the Application (client) ID and the tenant ID.',
      'In CtrlChecks, open Connections → Add Connection → Microsoft Teams → enter Client ID, Secret, and Tenant → authorize.',
    ],
    docsUrl: 'https://docs.microsoft.com/en-us/microsoftteams/platform/bots/how-to/authentication/auth-flow-bot',
  },

  // ─── WhatsApp Cloud ────────────────────────────────────────────
  'WhatsApp Cloud API': {
    steps: [
      'Go to https://developers.facebook.com/apps → create an app with WhatsApp product.',
      'Under WhatsApp → Getting Started, note the Phone Number ID and generate a temporary access token.',
      'For production, create a permanent System User access token in your Business Manager.',
      'In CtrlChecks, open Connections → Add Connection → WhatsApp Cloud → paste Phone Number ID and Access Token → Save.',
    ],
    docsUrl: 'https://developers.facebook.com/docs/whatsapp/cloud-api/get-started',
  },

  // ─── Pipedrive ─────────────────────────────────────────────────
  'Pipedrive API Key': {
    steps: [
      'Log in to Pipedrive → click your avatar (top right) → Personal Preferences → API.',
      'Copy the API token.',
      'In CtrlChecks, open Connections → Add Connection → Pipedrive → paste the API token → Save.',
    ],
    docsUrl: 'https://developers.pipedrive.com/docs/api/v1',
  },

  // ─── Zoho CRM ──────────────────────────────────────────────────
  'Zoho CRM Credential': {
    steps: [
      'Go to https://api-console.zoho.com → click "+ Add Client" → "Server-based Applications".',
      'Set Redirect URI to http://localhost:3001/api/oauth/zoho/callback.',
      'Note the Client ID and Client Secret.',
      'In CtrlChecks, open Connections → Add Connection → Zoho CRM → click "Connect with Zoho" → authorize.',
    ],
    docsUrl: 'https://www.zoho.com/crm/developer/docs/api/v3/oauth-overview.html',
  },

  // ─── Salesforce / Microsoft Dynamics / SAP ─────────────────────
  'Microsoft Dynamics Credential': {
    steps: [
      'In Azure Portal → App registrations → New registration.',
      'Set redirect URI to http://localhost:3001/api/oauth/dynamics/callback.',
      'Under API permissions, add Dynamics CRM → user_impersonation.',
      'Create a client secret and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Microsoft Dynamics → enter Client ID, Secret, Tenant, and Organization URL → authorize.',
    ],
    docsUrl: 'https://docs.microsoft.com/en-us/power-apps/developer/data-platform/authenticate-oauth',
  },

  'SAP Credential': {
    steps: [
      'In your SAP system, create a Communication User with the required roles.',
      'In SAP Communication Arrangements, set up the API (OData or REST) with Basic Auth.',
      'Note the base URL, username, and password (or client certificate).',
      'In CtrlChecks, open Connections → Add Connection → SAP → enter Base URL, Username, and Password → Save.',
    ],
    docsUrl: 'https://help.sap.com/docs/',
  },

  // ─── Xero ──────────────────────────────────────────────────────
  'Xero Credential': {
    steps: [
      'Go to https://developer.xero.com/app/manage → click "New app".',
      'Set redirect URI to http://localhost:3001/api/oauth/xero/callback.',
      'Copy Client ID and Client Secret.',
      'In CtrlChecks, open Connections → Add Connection → Xero → click "Connect with Xero" → authorize.',
    ],
    docsUrl: 'https://developer.xero.com/documentation/getting-started-guide',
  },

  // ─── Zendesk ───────────────────────────────────────────────────
  'Zendesk Credential': {
    steps: [
      'Log in to Zendesk → Admin Center → Apps and Integrations → APIs → Zendesk API.',
      'Enable "Token Access" and click "+ Add API token".',
      'Copy the API token.',
      'In CtrlChecks, open Connections → Add Connection → Zendesk → enter your subdomain, email, and API token → Save.',
    ],
    docsUrl: 'https://developer.zendesk.com/documentation/ticketing/getting-started/hands-on-with-the-zendesk-api/',
  },

  // ─── Mailchimp ─────────────────────────────────────────────────
  'Mailchimp API Key': {
    steps: [
      'Log in to Mailchimp → Account → Extras → API keys.',
      'Click "Create A Key" and copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Mailchimp → paste the API key → Save.',
    ],
    docsUrl: 'https://mailchimp.com/developer/marketing/guides/quick-start/',
  },

  // ─── ActiveCampaign ────────────────────────────────────────────
  'ActiveCampaign API Key': {
    steps: [
      'Log in to ActiveCampaign → Settings → Developer.',
      'Copy the API URL and API Key.',
      'In CtrlChecks, open Connections → Add Connection → ActiveCampaign → paste the API URL and Key → Save.',
    ],
    docsUrl: 'https://developers.activecampaign.com/reference/url',
  },

  // ─── Freshdesk ─────────────────────────────────────────────────
  'Freshdesk API Key': {
    steps: [
      'Log in to Freshdesk → click your profile photo → Profile Settings.',
      'Your API key is shown under "API KEY" on the right side — copy it.',
      'In CtrlChecks, open Connections → Add Connection → Freshdesk → enter your subdomain and API key → Save.',
    ],
    docsUrl: 'https://developers.freshdesk.com/api/',
  },

  // ─── Intercom ──────────────────────────────────────────────────
  'Intercom API Key': {
    steps: [
      'Log in to Intercom → Settings → Integrations → Developer Hub → Your App → Access Tokens.',
      'Copy the Access Token.',
      'In CtrlChecks, open Connections → Add Connection → Intercom → paste the token → Save.',
    ],
    docsUrl: 'https://developers.intercom.com/building-apps/docs/authorization',
  },

  // ─── ClickUp ───────────────────────────────────────────────────
  'ClickUp API Key': {
    steps: [
      'Log in to ClickUp → click your avatar → Settings → Apps.',
      'Under "API Token", click "Generate" and copy the token.',
      'In CtrlChecks, open Connections → Add Connection → ClickUp → paste the API token → Save.',
    ],
    docsUrl: 'https://clickup.com/api',
  },

  // ─── Vercel ────────────────────────────────────────────────────
  'Vercel API Token': {
    steps: [
      'Go to https://vercel.com/account/tokens → click "Create".',
      'Give it a name, set scope and expiry, and click "Create Token".',
      'Copy the token immediately.',
      'In CtrlChecks, open Connections → Add Connection → Vercel → paste the token → Save.',
    ],
    docsUrl: 'https://vercel.com/docs/rest-api',
  },

  // ─── Netlify ───────────────────────────────────────────────────
  'Netlify API Token': {
    steps: [
      'Log in to https://app.netlify.com → User settings → Applications → Personal access tokens.',
      'Click "New access token", give it a name, and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Netlify → paste the token → Save.',
    ],
    docsUrl: 'https://docs.netlify.com/api/get-started/',
  },

  // ─── WordPress ─────────────────────────────────────────────────
  'WordPress Credential': {
    steps: [
      'In your WordPress admin, go to Users → Profile → Application Passwords.',
      'Enter a name for the application and click "Add New Application Password".',
      'Copy the generated password (spaces are part of the password — include them or remove them consistently).',
      'In CtrlChecks, open Connections → Add Connection → WordPress → enter your site URL, username, and application password → Save.',
    ],
    docsUrl: 'https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/',
  },

  // ─── Contentful ────────────────────────────────────────────────
  'Contentful API Key': {
    steps: [
      'In Contentful, go to Settings → API keys → Add API key.',
      'Give it a name and note the Space ID and Content Delivery API (or Content Management API) access token.',
      'In CtrlChecks, open Connections → Add Connection → Contentful → paste the Space ID and token → Save.',
    ],
    docsUrl: 'https://www.contentful.com/developers/docs/references/authentication/',
  },

  // ─── Pinecone ──────────────────────────────────────────────────
  'Pinecone API Key': {
    steps: [
      'Log in to https://app.pinecone.io → API Keys → "Create API Key".',
      'Give it a name and copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Pinecone → paste the key and enter your environment (e.g. us-east-1-aws) → Save.',
    ],
    docsUrl: 'https://docs.pinecone.io/guides/getting-started/quickstart',
  },

  // ─── Typeform ──────────────────────────────────────────────────
  'Typeform API Key': {
    steps: [
      'Log in to Typeform → click your profile → Settings → Personal tokens.',
      'Click "Generate a new token", give it a name, and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Typeform → paste the token → Save.',
    ],
    docsUrl: 'https://developer.typeform.com/get-started/personal-access-token/',
  },

  // ─── Calendly ──────────────────────────────────────────────────
  'Calendly API Key': {
    steps: [
      'Log in to Calendly → Integrations → API & Webhooks → Personal Access Tokens.',
      'Click "Generate new token", give it a name, and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Calendly → paste the token → Save.',
    ],
    docsUrl: 'https://developer.calendly.com/api-docs/ZG9jOjExMjM0NzU2-calendly-developer-portal',
  },

  // ─── Intuit / QuickBooks ───────────────────────────────────────
  'Intuit Credential': {
    steps: [
      'Go to https://developer.intuit.com → Dashboard → Create an app → "QuickBooks Online and Payments".',
      'Under "Keys & OAuth", note the Client ID and Client Secret.',
      'Add http://localhost:3001/api/oauth/intuit/callback as a Redirect URI.',
      'In CtrlChecks, open Connections → Add Connection → Intuit/QuickBooks → click "Connect with Intuit" → authorize.',
    ],
    docsUrl: 'https://developer.intuit.com/app/developer/qbo/docs/get-started',
  },

  // ─── MongoDB ───────────────────────────────────────────────────
  'MongoDB Connection': {
    steps: [
      'In MongoDB Atlas, go to your cluster → Connect → "Connect your application".',
      'Copy the connection string (looks like mongodb+srv://user:pass@cluster.mongodb.net/dbname).',
      'In CtrlChecks, open Connections → Add Connection → MongoDB → paste the connection string → Save.',
      'For local MongoDB: use mongodb://localhost:27017/yourdb.',
    ],
    docsUrl: 'https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/',
  },

  // ─── MySQL ─────────────────────────────────────────────────────
  'MySQL Connection': {
    steps: [
      'Ensure your MySQL server is running and accessible from the worker.',
      'In CtrlChecks, open Connections → Add Connection → MySQL.',
      'Enter Host, Port (default 3306), Database, Username, and Password → click "Test Connection" → Save.',
    ],
    docsUrl: 'https://dev.mysql.com/doc/refman/8.0/en/',
  },

  // ─── Redis ─────────────────────────────────────────────────────
  'Redis Connection': {
    steps: [
      'Ensure your Redis server is running (default port 6379).',
      'In CtrlChecks, open Connections → Add Connection → Redis.',
      'Enter the Redis URL (e.g. redis://localhost:6379) and password if set → Save.',
    ],
    docsUrl: 'https://redis.io/docs/connect/clients/nodejs/',
  },

  // ─── Firebase ──────────────────────────────────────────────────
  'Firebase Credential': {
    steps: [
      'In the Firebase Console, go to Project Settings → Service Accounts.',
      'Click "Generate new private key" and download the JSON file.',
      'Copy the content of the JSON file.',
      'In CtrlChecks, open Connections → Add Connection → Firebase → paste the service account JSON → Save.',
    ],
    docsUrl: 'https://firebase.google.com/docs/admin/setup',
  },

  // ─── Dropbox ───────────────────────────────────────────────────
  'Dropbox Credential': {
    steps: [
      'Go to https://www.dropbox.com/developers/apps → Create app.',
      'Choose "Scoped access" → "Full Dropbox" (or "App folder"), give it a name.',
      'Under Permissions, enable the scopes you need (files.metadata.read, files.content.read/write, etc.).',
      'Under Settings, add http://localhost:3001/api/oauth/dropbox/callback as a redirect URI.',
      'In CtrlChecks, open Connections → Add Connection → Dropbox → click "Connect with Dropbox" → authorize.',
    ],
    docsUrl: 'https://developers.dropbox.com/oauth-guide',
  },

  // ─── OneDrive ──────────────────────────────────────────────────
  'OneDrive Credential': {
    steps: [
      'Go to Azure Portal → App registrations → New registration.',
      'Add http://localhost:3001/api/oauth/onedrive/callback as redirect URI.',
      'Under API Permissions, add Microsoft Graph → Files.ReadWrite.',
      'Create a client secret.',
      'In CtrlChecks, open Connections → Add Connection → OneDrive → enter Client ID, Secret, and Tenant ID → authorize.',
    ],
    docsUrl: 'https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/msa-oauth',
  },

  // ─── Workday ───────────────────────────────────────────────────
  'Workday Credential': {
    steps: [
      'In Workday, go to Setup → System → API Clients → Register API Client.',
      'Set Redirect URI to http://localhost:3001/api/oauth/workday/callback.',
      'Select the required scopes (e.g. Staffing, Human Resources).',
      'Copy the Client ID and Client Secret.',
      'In CtrlChecks, open Connections → Add Connection → Workday → enter Client ID, Secret, Tenant, and Instance URL → authorize.',
    ],
    docsUrl: 'https://community.workday.com/articles/1084547',
  },

  // ─── Chargebee ─────────────────────────────────────────────────
  'Chargebee API Key': {
    steps: [
      'Log in to Chargebee → Settings → Configure Chargebee → API Keys → "Create a Key".',
      'Select the appropriate permissions and copy the API key.',
      'In CtrlChecks, open Connections → Add Connection → Chargebee → paste the API key and enter your site name → Save.',
    ],
    docsUrl: 'https://apidocs.chargebee.com/docs/api',
  },

  // ─── Tally ─────────────────────────────────────────────────────
  'Tally API Key': {
    steps: [
      'Log in to Tally → Settings → API → create a new access token.',
      'Copy the token.',
      'In CtrlChecks, open Connections → Add Connection → Tally → paste the token → Save.',
    ],
    docsUrl: 'https://tallyforms.notion.site/Tally-API-Documentation',
  },

  // ─── Google Cloud Storage ──────────────────────────────────────
  'Google Cloud Storage Credential': {
    steps: [
      'In Google Cloud Console → IAM & Admin → Service Accounts → Create Service Account.',
      'Grant the "Storage Admin" or "Storage Object Creator" role.',
      'Under Keys → Add Key → Create new key (JSON) → download the file.',
      'In CtrlChecks, open Connections → Add Connection → Google Cloud Storage → paste the JSON key content → Save.',
    ],
    docsUrl: 'https://cloud.google.com/storage/docs/authentication',
  },

  // ─── Cohere ────────────────────────────────────────────────────
  'Cohere API Key': {
    steps: [
      'Go to https://dashboard.cohere.com/api-keys → click "New Trial key" or "New Production key".',
      'Copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Cohere → paste the API key → Save.',
    ],
    docsUrl: 'https://docs.cohere.com/docs/rate-limits',
  },

  // ─── HuggingFace ───────────────────────────────────────────────
  'HuggingFace API Key': {
    steps: [
      'Go to https://huggingface.co/settings/tokens → click "New token".',
      'Choose "Read" or "Write" depending on what you need, then copy the token.',
      'In CtrlChecks, open Connections → Add Connection → HuggingFace → paste the token → Save.',
    ],
    docsUrl: 'https://huggingface.co/docs/hub/security-tokens',
  },

  // ─── Mistral ───────────────────────────────────────────────────
  'Mistral API Key': {
    steps: [
      'Go to https://console.mistral.ai/api-keys/ → click "Create new key".',
      'Copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Mistral → paste the API key → Save.',
    ],
    docsUrl: 'https://docs.mistral.ai/getting-started/quickstart/',
  },

  // ─── Linear ────────────────────────────────────────────────────
  'Linear API Key': {
    steps: [
      'Go to https://linear.app/settings/api → click "Create key".',
      'Give it a label and copy the key.',
      'In CtrlChecks, open Connections → Add Connection → Linear → paste the API key → Save.',
    ],
    docsUrl: 'https://developers.linear.app/docs/graphql/working-with-the-graphql-api',
  },

  // ─── Trello ────────────────────────────────────────────────────
  'Trello API Key': {
    steps: [
      'Go to https://trello.com/app-key and note your API Key.',
      'Click "Token" to generate a user token and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Trello → paste the API Key and Token → Save.',
    ],
    docsUrl: 'https://developer.atlassian.com/cloud/trello/rest/',
  },

  // ─── Odoo ──────────────────────────────────────────────────────
  'Odoo Credential': {
    steps: [
      'Log in to your Odoo instance → Settings → Users → select your user.',
      'Under "Preferences", generate an API Key (requires Technical access).',
      'Copy the API Key and note your Odoo URL and database name.',
      'In CtrlChecks, open Connections → Add Connection → Odoo → enter URL, Database, Username, and API Key → Save.',
    ],
    docsUrl: 'https://www.odoo.com/documentation/16.0/developer/reference/external_api.html',
  },

  // ─── No auth (internal / trigger / logic nodes) ───────────────
  'None': {
    steps: [
      'This node does not require any credentials.',
      'Simply drag it onto the canvas and configure the fields shown.',
    ],
    docsUrl: '',
  },

  // ─── SMTP (email node) ─────────────────────────────────────────
  'SMTP Credential': {
    steps: [
      'Obtain SMTP server details from your email provider: Host, Port (e.g. 587), Username, and Password.',
      'For Gmail SMTP: Host = smtp.gmail.com, Port = 587. Use an App Password (not your main password) — generate one at myaccount.google.com/apppasswords.',
      'In CtrlChecks, open Connections → Add Connection → Email (SMTP) → enter Host, Port, Username, and Password → Save.',
    ],
    docsUrl: 'https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol',
  },

  // ─── Outlook / Microsoft ──────────────────────────────────────
  'Microsoft Credential': {
    steps: [
      'Go to Azure Portal → App registrations → New registration.',
      'Set redirect URI to http://localhost:3001/api/oauth/microsoft/callback.',
      'Under API Permissions, add Microsoft Graph: Mail.ReadWrite, Mail.Send.',
      'Create a client secret and copy it.',
      'In CtrlChecks, open Connections → Add Connection → Outlook → enter Client ID, Secret, and Tenant ID → click "Connect with Microsoft" → authorize.',
    ],
    docsUrl: 'https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview',
  },

  // ─── Oracle Database ──────────────────────────────────────────
  'Oracle Credential': {
    steps: [
      'Obtain the Oracle connection details: Host, Port (default 1521), Service Name, Username, Password.',
      'Ensure the Oracle Instant Client is installed on the worker host if required.',
      'In CtrlChecks, open Connections → Add Connection → Oracle Database → enter connection details → Save.',
    ],
    docsUrl: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/netag/index.html',
  },

  // ─── SQL Server ───────────────────────────────────────────────
  'SQL Server Credential': {
    steps: [
      'Obtain the SQL Server connection details: Host, Port (default 1433), Database, Username (or Windows auth), and Password.',
      'Ensure the SQL Server allows remote connections and the firewall allows port 1433.',
      'In CtrlChecks, open Connections → Add Connection → SQL Server → enter connection details → Save.',
    ],
    docsUrl: 'https://learn.microsoft.com/en-us/sql/connect/node-js/node-js-driver-for-sql-server',
  },

  // ─── Bitbucket ────────────────────────────────────────────────
  'Bitbucket Credential': {
    steps: [
      'Log in to Bitbucket → Personal settings → App passwords → Create app password.',
      'Select the required permissions (Repositories: Read/Write, Pipelines: Read/Write) and copy the password.',
      'In CtrlChecks, open Connections → Add Connection → Bitbucket → enter your username and the app password → Save.',
    ],
    docsUrl: 'https://support.atlassian.com/bitbucket-cloud/docs/create-an-app-password/',
  },
};

/**
 * Get credential setup steps for a node type.
 * Falls back to a generic guide if the credential type is not found.
 */
export function getCredentialSteps(credentialType: string): CredentialGuide {
  return credentialSteps[credentialType] ?? {
    steps: [
      `Open the ${credentialType} developer console or account settings.`,
      'Create or locate the required API key, token, or OAuth client credentials.',
      'In CtrlChecks, open Connections → Add Connection → select this service.',
      'Paste the credentials and click Save.',
      'Test the connection before running the workflow.',
    ],
    docsUrl: '',
  };
}
