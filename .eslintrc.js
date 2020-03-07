module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
  },
  // rules: {
  //   '@typescript-eslint/no-unused-vars': 'off',
  // },
}
