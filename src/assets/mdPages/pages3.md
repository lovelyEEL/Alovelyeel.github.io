# ES6新特性

### 一、let、const

在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量：

- 顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象

|       | 变量提升 | 块级作用域 | 修改变量声明 | 必须赋值 |
|:-----:| ---- | ----- | ------ |:----:|
| let   | 不存在  | 存在    | 可以     | 否    |
| const | 不存在  | 存在    | 不可以    | 是    |
| var   | 存在   | 不存在   | 可以     | 否    |

### 二、模板字符串

用`${}`来界定；  
反引号`(``)`直接搞定；

```javascript
<script>
       var content="efg"
       // es6之前
       let word="abcd"+ content + "hijk";  //abcdefghijk
	//es6
       let newWord=`abcd${content}hijk`;  //abcdefghijk
</script>
```

### 三、九大数据类型