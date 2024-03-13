import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [
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
