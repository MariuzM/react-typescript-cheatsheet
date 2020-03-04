module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'typescript', 'standard', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    // ecmaFeatures: { jsx: true },
  },
}
