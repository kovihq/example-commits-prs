module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],

  plugins: [
    '@typescript-eslint',
    'vue'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json'
  },

  env: {
    browser: true
  },

  globals: {
    ga: true,
    cordova: true,
    __statics: true,
    process: true
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single'],
    '@typescript-eslint/indent': ['warn', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
