/*
  eslint-disable
  global-require,
  import/no-dynamic-require,
  @typescript-eslint/no-var-requires,
  vue/component-api-style
*/
import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
// import FloatingVue, { VTooltip } from 'floating-vue';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginVue from '@bugsnag/plugin-vue';
import DefaultLayout from '@/layouts/Default.vue';

// import type { Plugin } from 'vue';

// FloatingVue.options.distance = 10;

// Bugsnag.start({
//   apiKey: process.env.MIX_BUGSNAG_API_KEY,
//   releaseStage: process.env.MIX_APP_ENV,
//   enabledReleaseStages: (
//     process.env.MIX_BUGSNAG_NOTIFY_RELEASE_STAGES || 'none'
//   ).split(','),
//   plugins: [new BugsnagPluginVue()],
//   autoTrackSessions: false,
// });

createInertiaApp({
  title: (title) => `${title} - BS-X-Mas Cards`,
  resolve: async (name) => {
    const page = (await import(`./pages/${name}`)).default;

    page.layout ??= DefaultLayout;

    return page;
  },
  setup(
    {
      el, app, props, plugin,
    },
  ) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      // .use(Bugsnag.getPlugin('vue') as Plugin)
      .component('Link', Link)
      // .directive('tooltip', VTooltip)
      .mount(el);
  },
});

InertiaProgress.init({ delay: 100, color: '#e10' });
