module.exports = {
  //表示是根目录中主要的Eslint配置文件
  root: true,

  // 需要忽略的目录或文件
  ignorePatterns: ['node_modules', 'dist'],

  // 项目运行的环境
  env: {
    browser: true, // 表示支持浏览器环境
    es6: true, // 表示支持ES6语法
    node: true // 表示支持node环境
  },

  // 解析器
  parser: '@typescript-eslint/parser', // 使用 TypeScript 的解析器
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },

  // 导入插件
  plugins: ['react', '@typescript-eslint'],

  // 继承插件配置
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // 如果使用 React
    'plugin:@typescript-eslint/recommended' // 如果使用 TypeScript
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  // 自定义规则
  rules: {
    'no-var': 'error', // 禁止使用 var
    'no-unused-vars': 'warn', // 未使用变量警告
    'no-undef': 'error', // 禁止使用未定义的变量
    'no-extra-parens': 'error', // 禁止使用多余的括号
    'no-multiple-empty-lines': ['error', { max: 1 }], // 允许最多1行空白行
    'no-trailing-spaces': 'error', // 禁止行尾空格
    'no-unreachable': 'error', // 禁止无法到达的代码
    'no-useless-return': 'error', // 禁止无用的返回语句
    'no-console': ['warn', { allow: ['warn', 'error'] }], // 只允许使用 console.warn 和 console.error
    semi: ['error', 'always'], // 语句末尾使用分号
    indent: ['error', 2], // 使用两个空格进行缩进
    quotes: ['error', 'single'], // 使用单引号
    'linebreak-style': ['error', 'unix'] // 使用 Unix 风格的换行符
    // 其他自定义规则
  },

  // 特定文件的规则
  //   overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],
  //     rules: {
  //       "no-undef": "off",
  //       "react/prop-types": "off",
  //       "semi": "off"
  //     },
  //   },
  // ],

  settings: {
    react: {
      version: 'detect' // 自动检测 React 版本
    }
  }
};

// 针对react项目
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    // 自定义规则
  }
};
