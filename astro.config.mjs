import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://bro-eg.com',
  compressHTML: true,
  devToolbar: { enabled: false },
  security: {
    checkOrigin: true,
  },
});
