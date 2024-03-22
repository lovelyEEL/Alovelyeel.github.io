### RH博客

    本站前端基于**Vue2**和**JavaScript**开发，所用插件主要如下：

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

粗略讲解下个人页面自适配解决方案：

- **CSS：**
  
1. 利用css的media媒体监听属性，监听screen的变化并作出相对应调整
     
     ```css
     @media screen and (min-width:1025px) {
       /* // 屏幕大于1025px的时候 */
       .all {
         width: 1024px;
         box-shadow: 0 0 1em rgba(0, 0, 0, .1);
       }
     }
     ```
  
2. 利用%、vw、vh等自适应单位。后面会讲到px转rem
  
3. 擅长利用**display**、**float**和**position**属性，使元素想在哪就在哪。

- **JS：**
  
1. 可利用window.οnresize监听屏幕大小变化，可利用document.body.clientWidth/Height监听获取当前body宽高
  
2. 配合vue双向数据绑定特性，修改dom元素内嵌的style属性值以更改元素样式
  
3. 不建议用js去做页面适配

- **postcss-pxtorem：**
  
1. postcss-pxtorem是一个PostCSS插件，用于将CSS中的像素值转换为rem单位，以实现响应式布局和适配不同屏幕尺寸的需求。
     
    它的适配原理是**将CSS中的像素值除以一个基准值，通常是设计稿的宽度，然后将结果转换为<mark>rem</mark>单位。**这样，不同屏幕尺寸下，rem单位的大小是相同的，从而实现了响应式布局和适配的效果。
     
    例如，如果设计稿的宽度为750px，那么在CSS中设置一个元素的宽度为150px，postcss-pxtorem会将其转换为2rem（150/750=.2，.2*10=2）。
     
    通过使用postcss-pxtorem，我们可以方便地实现移动端适配，减少手动计算和调整像素值的工作量，提高开发效率。
  
2. 安装教程
     
    1. ```
        npm install postcss-pxtorem --save
        ```
     
    2. 配置postcss.config.js文件，如没有，在根目录下新建
        
        ```javascript
        module.exports = {
            plugins: {
                'postcss-pxtorem': {
                    rootValue: 192,
                    propList: ['*'],
                },
            },
        }
        ```
     
     3. 在utils文件夹下创建rem.js
        
        ```javascript
        // 设置 rem 函数
        function setRem() {
            // 1920 默认大小16px; 1920px = 120rem ;每个元素px基础上/16
            const screenWidth = 1920
            const scale = screenWidth / 16
            const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
            // 得到html的Dom元素
            const htmlDom = document.getElementsByTagName('html')[0]
            // 设置根元素字体大小
            htmlDom.style.fontSize = htmlWidth / scale + 'px'
          }
          // 初始化
          setRem()
          // 改变窗口大小时重新设置 rem
          window.onresize = function() {
            setRem()
          }
        ```
     
     4. main.js文件里面引用rem.js
        
        ```javascript
        import '@/utils/rem.js'
        ```
     
     5. 查看px是否转换为rem单位

以上只是前端冰山一角，本站站主会记录前端的面试八股及一些基础，欢迎常来看我的文章。




