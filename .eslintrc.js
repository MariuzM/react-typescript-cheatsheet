module.exports = {
  parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
