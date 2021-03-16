module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-tabs': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'no-delete-var': 2,
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
    'template-curly-spacing': 'off',
    indent: 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
