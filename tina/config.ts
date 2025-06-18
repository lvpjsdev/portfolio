import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'sections',
        label: 'Sections',
        path: 'content/sections',
        fields: [
          {
            label: 'Title',
            name: 'title',
            type: 'reference',
            collections: ['sectionTitle'],
          },
        ],
      },
      {
        name: 'navItem',
        label: 'Navigation menu item',
        path: 'content/nav-menu',
        fields: [
          { label: 'Title', name: 'title', type: 'string' },
          { label: 'Subtitle', name: 'subtitle', type: 'string' },
          { label: 'Href', name: 'href', type: 'string' },
        ],
      },
      {
        name: 'runningLine',
        label: 'Running line content',
        path: 'content/running-line',
        fields: [
          {
            label: 'Item',
            name: 'item',
            type: 'string',
            list: true,
          },
        ],
      },
      {
        name: 'sectionTitle',
        label: 'Section title',
        path: 'content/title',
        fields: [
          { label: 'Title', name: 'title', type: 'string' },
          { label: 'Subtitle', name: 'subtitle', type: 'string' },
        ],
      },
      {
        name: 'projects',
        label: 'Projects',
        path: 'content/projects',
        fields: [
          { label: 'Title', name: 'title', type: 'string' },
          { label: 'Description', name: 'description', type: 'rich-text' },
          { label: 'Images', name: 'imgs', type: 'image', list: true },
          { label: 'Git Url', name: 'gitUrl', type: 'string' },
          { label: 'Demo Url', name: 'demoUrl', type: 'string' },
        ],
      },
    ],
  },
});
