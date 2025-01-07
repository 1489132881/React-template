import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: "./src/index.tsx", // 使用.tsx文件作为入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 添加.ts和.tsx扩展名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html.ejs", // 使用 ejs 模板
      filename: "index.html", // 输出文件名
      inject: "body", // 将生成的 HTML 插入到 body 标签中
      templateParameters: {
        title: "App123", // 传递给 ejs 模板的数据
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true, // 启用热模块替换
  },
  mode: "development", // 或 'production'，根据需要选择
  devtool: "source-map", // 生成 source map 以便于调试
};
