module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    semi: [2, 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
