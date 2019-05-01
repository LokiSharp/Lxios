# lxios

由 LokiSharp 用 TypeScript 实现的 axios

## Features

- 在浏览器端使用 XMLHttpRequest 对象通讯
- 支持 Promise API
- 支持请求和响应的拦截器
- 支持请求数据和响应数据的转换
- 支持请求的取消
- JSON 数据的自动转换
- 客户端防止 XSS

## Usage

```javascript
const lxios = require('lxios');

lxios({
  method: 'POST',
  url: '/user/LokiSharp',
  data: {
    firstName: 'Loki',
    lastName: 'Sharp'
  }
})
```
