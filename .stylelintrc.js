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
    'max-nesting-depth': [2, {
      ignore: ['pseudo-classes'],
      ignoreAtRules: ['media', 'include', 'each'],
    }],
    // enforce single colon notation for compatibility with the max-nesting-depth rule
    'selector-pseudo-element-colon-notation': 'single',
  },
};
