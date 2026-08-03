// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://cyber-chakravyuh-website.vercel.app',
  integrations: [react(), markdoc(), keystatic()],
  output: 'server',
  adapter: vercel(),
});
