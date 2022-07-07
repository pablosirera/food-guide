module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'block-no-empty': null,
    'block-opening-brace-space-before': 'always',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-colon-space-after': 'always',
    'max-empty-lines': 2,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'unit-allowed-list': ['px', 'em', 'rem', '%', 's', 'vh', 'vw', 'fr', 'seg'],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
  },
}
