// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import laravel from 'laravel-vite-plugin';
// eslint-disable-next-line import/no-unresolved
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/main.ts',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@images': '/resources/images',
      '@scss': '/resources/scss',
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@scss/app';
        `,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 53241,
    hmr: {
      host: 'vite.laravel-vue.lndo.site',
      clientPort: 80,
    },
  },
});
