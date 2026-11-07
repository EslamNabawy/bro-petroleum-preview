import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://eslamnabawy.github.io',
  base: '/bro-petroleum-preview',
  compressHTML: true,
  devToolbar: { enabled: false },
});
