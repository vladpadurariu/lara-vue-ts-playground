// eslint-disable-next-line import/no-extraneous-dependencies
import laravel from 'laravel-vite-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
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
});
