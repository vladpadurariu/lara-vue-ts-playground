module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  overrides: [
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // support BEM methodology
    'max-nesting-depth': [
      2,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['media', 'include', 'each'],
      },
    ],
    // enforce single colon notation for compatibility with the max-nesting-depth rule
    'selector-pseudo-element-colon-notation': 'single',
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: [
    '/public',
    '/node_modules',
    '!postcss.config.js',
    '!.stylelintrc.js',
  ],
  rules: {
    // discourage the use of console
    'no-console': 'warn',
    // discourage the use of debugger when in production
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow devDependencies for following files
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.ts', 'vite.config.js'],
      },
    ],
    // enforce Airbnb's section 19.7
    // https://github.com/airbnb/javascript#whitespace--after-blocks
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      // require new lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // require new lines before and after every sequence of variable declarations and export
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      // require new lines before and after block and block-like statements
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like', 'class', 'cjs-export'],
      },
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'class', 'cjs-export'],
        next: '*',
      },
      // require new lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    // allow specified identifiers to have dangling underscores
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    // fix enums throwing enum is already declared in the upper scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // disable to support script setup in Vue components
    '@typescript-eslint/no-unused-vars': 'off',
    // disable to support namespaces
    '@typescript-eslint/no-namespace': 'off',
    // disable multi word component names
    'vue/multi-word-component-names': 'off',
    // disable reports of v-html uses
    'vue/no-v-html': 'off',
    // enforce new lines between <template>, <script> and <style> blocks
    'vue/padding-line-between-blocks': ['error', 'always'],
    // enforce PascalCase casing for the component naming style in template
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // enforce camelCase casing for custom event name
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    // disallow the <template>, <script> and <style> blocks to be empty
    'vue/no-empty-component-block': ['error'],
    // enforce consistent indentation in <script>
    'vue/script-indent': ['error', 2, { switchCase: 1 }],
    // disallow the use of languages other than those available in the application
    'vue/block-lang': [
      'error',
      { script: { lang: 'ts' }, style: { lang: 'scss' } },
    ],
    // enforce the API style to use to define Vue components
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    // enforce the order of component top-level elements
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
};
