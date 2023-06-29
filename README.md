# SoftwareTesting-Frontend
同济大学软件测试练习题前端

原readme.md:
## 概述&环境

用**react+typescript**搭了一个简单的前端，导航栏写好了

组件库使用了**material-ui**

每个题对应一个Components下面的目录，共用的组件可以放在common目录下

接下来我们把练习题分给每个人，在题目对应的页面写就可以了

### update 6.17
将前端要展示的图片统一存放在了public/testPic文件夹中
引入了react-syntax-highlighter 的代码块依赖，可以看看这个好不好用

**环境配置：**

安装node.js 和npm

我的版本是 node v18.15.0, npm v9.5.0

```sh
npm install
npm start
```

组件库：[React Button（按钮）组件 - Material-UI (mui.com)](https://v4.mui.com/zh/components/buttons/)

npm执行完就装好了

如果组件装失败了就用--force

``` sh
npm install @material-ui/core --force
npm install @material-ui/icons --force
```

## 关于react

如果不熟悉react的写法，下面的博客或许有一些用处：

[【React】函数式组件传值（props）_react 如何往函数式组件中传递参数props_一颗不甘坠落的流星的博客-CSDN博客](https://blog.csdn.net/qq_45677671/article/details/124152691)

### 对博客的解释

以博客中的 代码为例：

```react
 const [fartherCount, setFartherCountt] = useState<number>(0);
```

fartherCount是变量

setFartherCountt是用来修改变量值的，也是子组件修改父组件变量的方法

useState后面跟的那个0是初始值

子组件读取父组件传过来的参数，都是通过props对象，例如props.getCount

### Tips

【建议不要写类组件（学起来累，而且我也不怎么会）】

【最好只写函数式组件或者常量组件，也就是function 或者const开头的】
