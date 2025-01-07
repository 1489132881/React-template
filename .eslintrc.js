module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 确保在最后一个
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier', // 添加 prettier 插件
  ],
  rules: {
    'prettier/prettier': 'error', // 将 prettier 规则作为 ESLint 错误
    'no-console': 'warn',
    'react/prop-types': 'off',
  },
};
