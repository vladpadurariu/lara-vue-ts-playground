/* eslint-disable no-undef */
const mix = require("laravel-mix");
const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig({
    plugins: [
      new StylelintPlugin({ files: "resources/**/*.{scss,vue}" }),
      new ESLintPlugin({ files: "resources/js/**/*.{ts,vue}" }),
    ],
  })
  .alias({
    "@": path.join(__dirname, "resources/js"),
    "@images": path.join(__dirname, "resources/images"),
  })
  .ts("resources/js/main.ts", "public/js/app.js")
  .vue({
    //   globalStyles: "resources/scss/config/_all.scss",
  })
  .extract()
  .sass("resources/scss/app.scss", "public/css")
  .sourceMaps(false, "source-map")
  .copyDirectory("resources/images", "public/images")
  .browserSync({
    open: false,
    proxy: process.env.APP_URL,
    ...(process.env.APP_SOCKET_URL && {
      socket: {
        domain: process.env.APP_SOCKET_URL,
        port: process.env.APP_SOCKET_PORT || 80,
      },
    }),
  });

if (mix.inProduction()) {
  mix.version();
}
