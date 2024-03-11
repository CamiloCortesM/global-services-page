import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        ic: ['*'], //TODO: optimize
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
