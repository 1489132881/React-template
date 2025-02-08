import path from 'path';

import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: './src/index.tsx', // 使用.tsx文件作为入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js'] // 添加.ts和.tsx扩展名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/, // 匹配 .js 文件
        use: 'babel-loader', // 使用 babel-loader（如果需要转译）
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              template: ({ template }: { template: ISafeAny }, opts: ISafeAny, { imports, componentName, props, jsx }: ISafeAny) => template.ast`
                ${imports}
                const ${componentName} = (${props}) => {
                  return ${jsx};
                };
                export default ${componentName};
              `,
              memo: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html.ejs', // 使用 ejs 模板
      filename: 'index.html', // 输出文件名
      inject: 'body', // 将生成的 HTML 插入到 body 标签中
      templateParameters: {
        title: 'App123' // 传递给 ejs 模板的数据
      }
    })
  ],
  mode: 'development', // 或 'production'，根据需要选择
  devtool: 'source-map' // 生成 source map 以便于调试
  // exclude: ['src/typing']
};

export default config;
