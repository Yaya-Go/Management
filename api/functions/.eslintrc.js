module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'google'
  ],
  rules: {
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'quote-props': ['error', 'as-needed'],
    'new-cap': ['error', { newIsCap: false, capIsNew: false }]
  },
  parserOptions: {
    ecmaVersion: 6,
    requireConfigFile: false
  }
};
