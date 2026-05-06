// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://conceptsandascents.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    smartypants: true,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
