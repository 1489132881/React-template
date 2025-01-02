# 目录结构
├── .gitlab                 # 模板文件
├── .vscode                 # 项目配置
├── build                   # 构建资源  
│    ├── Dockerfile            
│    └── nginx.conf         
├── docs                    # 项目文档
├── public                  # 公开资源
├── scripts                 # 项目脚本
├── src                     
│    ├── assets             # 全局资源
│    ├── components         # 全局组件
│    ├── constants          # 全局常量
│    ├── cores              # 全局核心方法
│    ├── hooks              # 全局 Hooks
│    ├── layouts            # 布局组件
│    ├── models             # 全局模型
│    ├── monitors           # 全局监控
│    ├── pages              # 页面目录（内部可以嵌套）
│    │    ├── dashboard         
│    │    │    ├── components # 可复用组件
│    │    │    ├── constants  # 可复用常量
│    │    │    ├── models     # 可复用模型
│    │    │    ├── services   # 可复用服务
│    │    │    ├── pages      # 页面级组件（如果有必要可以继续往下嵌套）
│    │    │    ├── styles     # 可复用样式
│    │    │    ├── utils      # 可复用样式
│    │    │    └── index.tsx  # 入口组件
│    │    └── settings              
│    ├── services           # 全局服务
│    ├── stores             # 全局状态
│    ├── styles             # 全局样式
│    │     └── global.less  
│    ├── types              # 全局类型（需要引用）
│    ├── utils              # 全局工具函数
│    │    ├── day.ts          # 时间处理
│    │    ├── http.ts         # 请求处理
│    │    └── storage.ts      # 存储处理
│    ├── global.d.ts        # 全局类型（无需引用）
│    ├── index.html.ejs     # 入口模版
│    └── index.tsx          # 入口文件
├── .env                    # 全局环境变量
├── .eslintignore           
├── .eslintrc.js            
├── .gitlab-ci.yml         
├── .prettierrc            
├── .stylelintrc.js         
├── .yarnrc               
├── package.json
├── tsconfig.json
├── bixi.config.ts          # 应用配置信息
└── yarn.lock               # 必须使用 git 提交 .lock 文件

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
