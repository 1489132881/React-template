import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended

  // 自定义规则
  // {
  //   rules: {
  //     semi: ['error', 'always'], // 语句末尾使用分号
  //     indent: ['error', 2], // 使用两个空格进行缩进
  //     quotes: ['error', 'single'], // 使用单引号
  //     'no-var': 'error', // 禁止使用 var
  //     'no-unused-vars': 'warn', // 未使用变量警告
  //     'no-undef': 'error', // 禁止使用未定义的变量
  //     'no-extra-parens': 'error', // 禁止使用多余的括号
  //     'no-multiple-empty-lines': ['error', { max: 1 }], // 允许最多1行空白行
  //     'no-trailing-spaces': 'error', // 禁止行尾空格
  //     'no-unreachable': 'error', // 禁止无法到达的代码
  //     'no-useless-return': 'error', // 禁止无用的返回语句
  //     'no-console': ['warn', { allow: ['warn', 'error'] }], // 只允许使用 console.warn 和 console.error
  //     'unused-imports/no-unused-imports': 'error', // 禁止未使用的 import
  //     'unused-imports/no-unused-vars': [
  //       'warn',
  //       {
  //         vars: 'all', // 检查所有变量
  //         varsIgnorePattern: '^_', // 忽略以 _ 开头的变量
  //         args: 'after-used', // 检查使用后的参数
  //         argsIgnorePattern: '^_' // 忽略以 _ 开头的参数
  //       }
  //     ],
  //     'import/order': [
  //       'error',
  //       {
  //         groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'unknown'], // 定义 import 的分组顺序
  //         'newlines-between': 'always-and-inside-groups', // 在 import 组之间始终添加新行
  //         pathGroupsExcludedImportTypes: ['builtin'], // 排除内置模块
  //         alphabetize: {
  //           order: 'asc', // 按字母顺序排序
  //           caseInsensitive: false, // 区分大小写
  //           orderImportKind: 'ignore' // 忽略 import 类型的排序
  //         }
  //       }
  //     ],
  //     '@typescript-eslint/naming-convention': 'off', // 关闭命名约定规则
  //     '@typescript-eslint/no-explicit-any': ['error'], // 禁止使用 any 类型
  //     'linebreak-style': ['error', 'unix'] // 使用 Unix 风格的换行符
  //     // 其他自定义规则
  //   }
  // }
];
