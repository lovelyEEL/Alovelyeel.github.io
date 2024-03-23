  本博客主要记录**前端八股文**知识，涵盖范围为vue、react、JavaScript和网络等

  本站前端基于**Vue2**框架开发，所用插件主要如下：

```javascript
    "axios": "^1.6.5",
    "element-ui": "^2.15.14",
    "github-markdown-css": "^5.5.1",
    "highlight.js": "^11.9.0",
    "node-sass": "^4.14.1",
    "postcss-pxtorem": "^5.1.1",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
```
  本博客的文章展现方式为markdown，调用vue-markdown-loader插件，调用.md文件并展示。

  `npm install vue-markdown-loader -D`

```javascript
  chainWebpack: config => {
      config.module
          .rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
              raw: true
          })
  }
```
<center><font size="2" color="#CDCDCD">vue.config.js配置</font></center>
  本博客部署在gitee pages上。
