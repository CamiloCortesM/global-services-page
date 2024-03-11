import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        ic:["*"], //TODO: optimize
      },
    }),
  ],
});
