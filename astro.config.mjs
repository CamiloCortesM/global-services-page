import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react({
      include: ['**/react/*'],
      experimentalReactChildren: true,
    }),
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
});
