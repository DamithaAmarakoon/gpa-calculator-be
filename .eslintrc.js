module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended'
  ],
  env: {
    node: true,
    es2021: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        // jsxSingleQuote: true,
        endOfLine: 'auto',
        arrowParens: 'avoid'
      }
    ],
    camelcase: 'off',
    'no-async-promise-executor': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off'
  }
};
