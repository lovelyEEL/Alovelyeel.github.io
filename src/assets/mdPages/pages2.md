# 入门前端小建议

### 一、基础：前端三大件

1. HTML、CSS
   
   html是Web开发里最基础、重点要掌握的知识。1994年，万维网联盟（W3C，World Wide Web Consortium）成立，超文本标记语言（HTML，Hyper Text Markup Language）正式确立为网页标准语言。经过近10年变迁，于2014年，HTML已发展成HTML5标准并沿用至今。
   
   下面是最基础的HTML页面编写方式
   
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>title</title>
     </head>
     <body>
     </body>
   </html>
   ```
   
   其中`<!DOCTYPE html> `声明为 HTML5 文档。
    `<html>` 元素是 HTML 页面的根元素。
    `<head>` 元素包含了文档的元（meta）数据，如`<meta charset="utf-8">`定义网页编码格式为 utf-8。
    `<title>` 元素描述了文档的标题。
    `<body>` 元素包含了可见的页面内容。
   
    虽然前端变迁大、更新换代速度快，但笔者仍建议初学者**打好html基础**。日后无论遇到什么框架，对DOM的操作、页面结构布局等内容会更加容易上手。
   
   这些是HTML的学习网站及书籍：
   `https://www.runoob.com/html/html-intro.html`菜鸟教程
   
   `html5从入门到精通`第三版

   html上手简单，入门快，笔者建议初学者**直接编写代码**，结合CSS开发基础简单的网页以学习
   
   CSS