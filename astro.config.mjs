import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'pt', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react({
      include: ['**/react/*'],
      experimentalReactChildren: true,
    }),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        ic: ['*'],
        //TODO: optimize
        mdi: [
          'tools',
          'magnify',
          'leaf',
          'window-open-variant',
          'brush',
          'grass',
          'tree-outline',
          'toolbox',
          'worker',
          'hammer-wrench',
        ],
      },
    }),
  ],

  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/inter'],
    },
  },
});
