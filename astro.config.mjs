// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isGitHubActions ? '/senyum-bahagia-dental-clinic' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
