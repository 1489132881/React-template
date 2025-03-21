
# 1 安装依赖

```
npm install
```

```
yarn install
```



# 2 启动项目

```
npm start
```

```
yarn start
```



# 手动将svg转为.tsx

```
npm run svgr  
```



# 修复eslint

```
npx eslint . --fix
```

# 目录结构

![image](https://github.com/user-attachments/assets/ef8d8878-a6dc-4db1-a9c7-59477a7d5325)

# 规范使用 HTTP 状态码
#### 

| 状态码 | 场景                                                         |
| :----: | :----------------------------------------------------------- |
|  200   | 创建成功，通常用在同步操作时                                 |
|  202   | 创建成功，通常用在异步操作时，表示请求已接受，但是还没有处理完成 |
|  400   | 参数错误，通常用在表单参数错误                               |
|  401   | 授权错误，通常用在 Token 缺失或失效，注意 401 会触发前端跳转到登录页 |
|  403   | 操作被拒绝，通常发生在权限不足时，注意此时务必带上详细错误信息 |
|  404   | 没有找到对象，通常发生在使用错误的 id 查询详情               |
|  500   | 服务器错误                                                   |
|  502   | Nginx                                                        |
|        |                                                              |

其它更多响应状态码请查阅 [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)


