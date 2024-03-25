# Vue双向数据绑定

### Vue2

Vue2中双向数据绑定使用的是js原生的`Object.defineProperty`属性。Object.defineProperty为对象中的每一个属性，设置 get 和 set 方法

```javascript
    let obj1 = { a: 1, b: 2 }
    let obj2={c:3}
    Object.defineProperty(obj2, "a", {
        get() {
            return obj1.a
        },
        set(value) {
            obj1.a = value
        }
    })
    console.log(obj2);
```

每个声明的属性，都会有一个 专属的依赖收集器 subs，当页面使用到 某个属性时，触发 ObjectdefineProperty - get函数，页面的 watcher 就会被 放到 属性的依赖收集器 subs 中，在 数据变化时，通知更新。

当数据改变的时候，会触发Object.defineProperty - set函数，数据会遍历自己的 依赖收集器 subs，逐个通知 watcher，视图开始更新。

**该绑定模式在vue2中是有缺点的**，他对于数组和对象的修改有时候会出现问题，最典型的就是根据索引修改数组信息或者对象信息。直接修改对于vue来说是不会及时响应的，我们需要的是使用vue.$set(源，索引，修改值)或者$nextTick强制更新才行。

### Vue3

Vue3的响应式系统通过使用ES6的**Proxy**对象来实现。**Proxy**对象允许我们拦截并定义JavaScript对象的默认行为，这样就可以对对象进行劫持和观测，从而实现数据的响应式。

Vue3中，每个响应式的数据都会被封装成一个Proxy对象。当我们对该数据进行读取操作时，Proxy对象会捕获到这个读取行为，并将这个数据与当前的依赖关系进行绑定。当这个数据发生改变时，Proxy对象会自动触发依赖关系的更新操作，从而实现数据的响应式更新。

```javascript
var p = new Proxy(target, handler);
```

Vue3 双向数据绑定的更多内容：[ES6 之 Proxy 介绍](https://blog.csdn.net/sinat_17775997/article/details/84233822)

转载自 barnett_y 的 《ES6 之 Proxy 介绍》