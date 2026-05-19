import type { NodeDoc } from '../types';

const outputExample = {
  success: true,
  operation: 'upload_video',
  videoId: 'VIDEO_ID',
  title: 'Demo upload',
  url: 'https://www.youtube.com/watch?v=VIDEO_ID',
};

export const youtubeDoc: NodeDoc = {
  slug: 'youtube',
  displayName: 'YouTube',
  category: 'Communication',
  logoUrl: '/icons/nodes/youtube.svg',
  description: 'Read, upload, update, and delete YouTube videos with the connected user-owned YouTube OAuth account.',
  credentialType: 'YouTube OAuth2 Connection',
  credentialSetupSteps: [
    'Open Connections in CtrlChecks.',
    'Connect YouTube using OAuth.',
    'Approve the YouTube read/manage/upload scopes.',
    'Return to the workflow and select the YouTube OAuth2 connection on the node.',
    'Run a read operation first, then use Upload Video with a private or unlisted privacy status for testing.',
  ],
  credentialDocsUrl: 'https://developers.google.com/youtube/v3/guides/authentication',
  resources: [
    {
      name: 'Operations',
      description: 'YouTube exposes operation choices directly.',
      operations: [
        {
          name: 'List my channels',
          value: 'list_my_channels',
          description: 'List channels available to the authenticated YouTube user.',
          fields: [
            { name: 'Max Results', internalKey: 'maxResults', type: 'number', required: false, description: 'Maximum channels to return.', defaultValue: '10' },
          ],
          outputExample: { success: true, channelId: 'UC...', title: 'My Channel', items: [] },
          outputDescription: 'Returns channel items, channelId, title, and pageInfo.',
          usageExample: {
            scenario: 'Confirm the connected account can access YouTube.',
            inputValues: { 'Max Results': '10' },
            expectedOutput: 'The node returns the authenticated user channel list.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/channels/list',
        },
        {
          name: 'Get channel',
          value: 'get_channel',
          description: 'Get a specific channel by ID, or the authenticated channel if no ID is provided.',
          fields: [
            { name: 'Channel ID', internalKey: 'channelId', type: 'string', required: false, description: 'Optional YouTube channel ID.', placeholder: 'UCxxxxxxxxxxxx' },
          ],
          outputExample: { success: true, channelId: 'UC...', title: 'My Channel', channel: {} },
          outputDescription: 'Returns one channel object plus flattened channelId and title.',
          usageExample: {
            scenario: 'Load a channel before working with its videos.',
            inputValues: { 'Channel ID': 'UCxxxxxxxxxxxx' },
            expectedOutput: 'The node returns the channel details.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/channels/list',
        },
        {
          name: 'Search videos',
          value: 'search_videos',
          description: 'Search YouTube videos by query.',
          fields: [
            { name: 'Search Query', internalKey: 'query', type: 'string', required: true, description: 'Search query.', placeholder: 'workflow automation tutorial' },
            { name: 'Channel ID', internalKey: 'channelId', type: 'string', required: false, description: 'Optional channel filter.', placeholder: 'UCxxxxxxxxxxxx' },
            { name: 'Max Results', internalKey: 'maxResults', type: 'number', required: false, description: 'Maximum videos to return.', defaultValue: '10' },
          ],
          outputExample: { success: true, items: [], pageInfo: {} },
          outputDescription: 'Returns YouTube search result items and pageInfo.',
          usageExample: {
            scenario: 'Find videos to pass into a stats or logging node.',
            inputValues: { 'Search Query': 'workflow automation', 'Max Results': '5' },
            expectedOutput: 'The node returns matching video search results.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/search/list',
        },
        {
          name: 'Get video statistics',
          value: 'get_video_stats',
          description: 'Read video snippet, content details, and statistics.',
          fields: [
            { name: 'Video ID', internalKey: 'videoId', type: 'string', required: true, description: 'YouTube video ID.', placeholder: 'dQw4w9WgXcQ' },
          ],
          outputExample: { success: true, videoId: 'dQw4w9WgXcQ', title: 'Video title', statistics: {} },
          outputDescription: 'Returns video, videoId, title, and statistics.',
          usageExample: {
            scenario: 'Read views and likes for a known video.',
            inputValues: { 'Video ID': 'dQw4w9WgXcQ' },
            expectedOutput: 'The node returns video statistics.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/videos/list',
        },
        {
          name: 'Upload video',
          value: 'upload_video',
          description: 'Upload a video using YouTube resumable upload.',
          fields: [
            { name: 'Video Title', internalKey: 'title', type: 'string', required: true, description: 'Title for the uploaded video.', placeholder: 'Demo upload' },
            { name: 'Video URL', internalKey: 'videoUrl', type: 'url', required: false, description: 'Direct HTTP/HTTPS URL to video file. Required unless base64 video data is provided.', placeholder: 'https://example.com/video.mp4' },
            { name: 'Video Data Base64', internalKey: 'videoDataBase64', type: 'textarea', required: false, description: 'Base64 video bytes from an upstream node.' },
            { name: 'MIME Type', internalKey: 'mimeType', type: 'string', required: false, description: 'Video MIME type.', defaultValue: 'video/mp4' },
            { name: 'Description', internalKey: 'description', type: 'textarea', required: false, description: 'Video description.' },
            { name: 'Tags', internalKey: 'tags', type: 'string', required: false, description: 'Comma-separated video tags.' },
            { name: 'Privacy Status', internalKey: 'privacyStatus', type: 'select', required: false, description: 'Upload privacy.', defaultValue: 'private', options: ['private', 'unlisted', 'public'] },
            { name: 'Made For Kids', internalKey: 'madeForKids', type: 'boolean', required: false, description: 'Whether the video is made for kids.', defaultValue: 'false' },
            { name: 'Category ID', internalKey: 'categoryId', type: 'string', required: false, description: 'YouTube category ID.', defaultValue: '22' },
          ],
          outputExample,
          outputDescription: 'Returns videoId, title, privacyStatus, url, and the YouTube video response.',
          usageExample: {
            scenario: 'Upload a test video privately.',
            inputValues: { 'Video Title': 'Demo upload', 'Video URL': 'https://example.com/video.mp4', 'Privacy Status': 'private' },
            expectedOutput: 'The node uploads the video and returns the created YouTube video ID and URL.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/videos/insert',
        },
        {
          name: 'Update video metadata',
          value: 'update_video_metadata',
          description: 'Update the title, description, or tags for an existing video.',
          fields: [
            { name: 'Video ID', internalKey: 'videoId', type: 'string', required: true, description: 'YouTube video ID.', placeholder: 'dQw4w9WgXcQ' },
            { name: 'Video Title', internalKey: 'title', type: 'string', required: false, description: 'Updated video title.' },
            { name: 'Description', internalKey: 'description', type: 'textarea', required: false, description: 'Updated video description.' },
            { name: 'Tags', internalKey: 'tags', type: 'string', required: false, description: 'Updated comma-separated tags.' },
          ],
          outputExample: { success: true, videoId: 'VIDEO_ID', title: 'Updated title', video: {} },
          outputDescription: 'Returns the updated video object plus flattened videoId and title.',
          usageExample: {
            scenario: 'Rename an uploaded video.',
            inputValues: { 'Video ID': 'VIDEO_ID', 'Video Title': 'Updated title' },
            expectedOutput: 'The node returns the updated video metadata.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/videos/update',
        },
        {
          name: 'Delete video',
          value: 'delete_video',
          description: 'Delete a video owned by the authenticated user.',
          fields: [
            { name: 'Video ID', internalKey: 'videoId', type: 'string', required: true, description: 'YouTube video ID.', placeholder: 'VIDEO_ID' },
          ],
          outputExample: { success: true, deleted: true, videoId: 'VIDEO_ID' },
          outputDescription: 'Returns deleted=true and the deleted videoId.',
          usageExample: {
            scenario: 'Delete a known private test video.',
            inputValues: { 'Video ID': 'VIDEO_ID' },
            expectedOutput: 'The node deletes the video and returns deleted=true.',
          },
          externalDocsUrl: 'https://developers.google.com/youtube/v3/docs/videos/delete',
        },
      ],
    },
  ],
  commonErrors: [
    {
      error: 'Missing YouTube upload scope',
      cause: 'The existing OAuth connection was created before upload support was added.',
      fix: 'Reconnect YouTube and approve the youtube.upload scope.',
    },
    {
      error: 'videoUrl or videoDataBase64 is required',
      cause: 'Upload Video needs actual video bytes from a direct URL or upstream base64 field.',
      fix: 'Provide a direct videoUrl or map base64 video data from an upstream node.',
    },
  ],
  relatedNodes: ['google_drive', 'http_request', 'log_output'],
};
