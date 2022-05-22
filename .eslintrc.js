module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-duplicate-imports': 'error',
    'no-use-before-define': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-cycle': [2, { maxDepth: 2, ignoreExternal: true }],
    'import/prefer-default-export': 'warn',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore', propElementValues: 'always' },
    ],
    'react/prop-types': ['off'],
    'react/jsx-no-useless-fragment': ['off'],
  },
};
