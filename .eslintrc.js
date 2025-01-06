module.exports = {
  root: true,
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则集
    'plugin:react/recommended', // 使用 React 推荐的规则集
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则集
    'plugin:prettier/recommended' // Prettier 推荐的规则
  ],
  parser: '@typescript-eslint/parser', // 使用 TypeScript 的解析器
  parserOptions: {
    ecmaFeatures: {
      jsx: true // 支持 JSX 语法
    },
    ecmaVersion: 12, // 支持 ECMAScript 2021 语法
    sourceType: 'module' // 支持 ES 模块
  },
  plugins: [
    'react', // 使用 React 插件
    '@typescript-eslint', // 使用 TypeScript 插件
    'import', // 使用 import 插件
    'unused-imports', // 使用 unused-imports 插件
    'prettier' // 添加 prettier 插件
  ],
  settings: {
    'import/resolver': {
      typescript: true // 使用 TypeScript 解析模块
    }
  },
  rules: {
    'prettier/prettier': ['error'], // 使用 prettier 规则
    'no-unused-vars': ['warn'], // 关闭 no-unused-vars 规则
    '@typescript-eslint/naming-convention': 'off', // 关闭命名约定规则
    '@typescript-eslint/no-explicit-any': ['error'], // 禁止使用 any 类型
    'import/default': 0, // 关闭 import/default 规则
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'unknown'], // 定义 import 的分组顺序
        'newlines-between': 'always-and-inside-groups', // 在 import 组之间始终添加新行
        pathGroupsExcludedImportTypes: ['builtin'], // 排除内置模块
        alphabetize: {
          order: 'asc', // 按字母顺序排序
          caseInsensitive: false, // 区分大小写
          orderImportKind: 'ignore' // 忽略 import 类型的排序
        }
      }
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }], // 禁止使用 console，允许使用 console.warn 和 console.error
    'unused-imports/no-unused-imports': 'error', // 禁止未使用的 import
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', // 检查所有变量
        varsIgnorePattern: '^_', // 忽略以 _ 开头的变量
        args: 'after-used', // 检查使用后的参数
        argsIgnorePattern: '^_' // 忽略以 _ 开头的参数
      }
    ]
  }
};
