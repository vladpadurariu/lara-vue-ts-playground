// eslint-disable-next-line import/no-extraneous-dependencies
import laravel from 'laravel-vite-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

const path = import('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const StylelintPlugin = import('stylelint-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = import('eslint-webpack-plugin');

export default defineConfig({
  plugins: [
    laravel([
      'resources/scss/app.scss',
      'resources/js/app.js',
    ]),
    new StylelintPlugin({ files: 'resources/**/*.{scss,vue}' }),
    new ESLintPlugin({ files: 'resources/js/**/*.{ts,vue}' }),
    {
      name: 'blade',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.blade.php')) {
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        }
      },
    },
  ],
  resolve: {
    vue: {
      globalStyles: 'resources/scss/app.scss',
    },
    alias: {
      '@': path.join(__dirname, 'resources/js'),
      '@images': path.join(__dirname, 'resources/images'),
    },
    ts: ('resources/js/main.ts', 'public/js/app.js'),
    // extract: (),
    sass: ('resources/scss/app.scss', 'public/css'),
    sourceMaps: (false, 'source-map'),
    copyDirectory: ('resources/images', 'public/images'),
  },
});
