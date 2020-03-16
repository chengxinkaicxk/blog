--- 
title: vue开发笔记
date: 2019-10-19
categories: 
 - 前端
tags: 
 - vue
 - axios
 - element-ui
 - 笔记
---

# Vue

## 组件

### 组件样式

scoped会把样式限制在组件内，不能影响其他组件或子组件，要想影响子组件可以使用深度选择器`>>>`，例如：`.m-con >>> .u-center`

## 解决前后端分离开发阶段测试跨域问题

```
proxyTable: {
    // 用于开发，解决前后端分离开发的跨域问题
    '/api': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true
    },
}
```

> 这几条语句加在config目录下的index.js中

跨域解决后还有个问题就是后端重定向，需要将重定向的地址也代理到相应的地址上，配置如下:

```
onProxyRes: function(proxyRes, req, res) { // 监听代理的返回结果
    const location = proxyRes.headers['location']
    const locationRE = /http(?:s)?:\/\/[0-9.:]+?(\/.*?[a-zA-Z]+)$/
    if(location) {  // 解决前后端分离，后端重定向问题
        const matched = location.match(locationRE)
        const matchGroup = matched && matched[1]
        proxyRes.headers['location'] =  matchGroup ? `http://xx.xx.xx.xx:8081${matchGroup}` : location
        }
    }
```

> 这个配置放到webpack的`devServer.proxy`对象中



## 动画组件

### 几个注意的点，容易被坑

+ 各个过渡阶段的类名会添加到跟节点上，即`transition`组件中的根节点
+ 类名中如果嵌套使用选择器在过渡类名下需要加入过渡时间，动画也是如此，否则过渡或动画会一闪而过

```
.match-slider-enter-active{
      transition: all 5s;
      .g-top{
        .m-top {
          animation: leftSlider 5s;
        }
        .m-bottom{
          animation: rightSlider 5s;
        }
      }
    }
```

## 采坑

+ vue组件中动态改变img标签的图片地址

```
import successImg from './img/success.png'
import warningImg from './img/warning.png'
import infoImg from './img/info.png'
import errorImg from './img/error.png'
```

> 先将左右要用到的图片静态静态导入，然后在代码中使用就行了

+ 配置网站facvicon.ico，图片要放在项目的根目录下，然后在build目录下的`webpack.dev.conf.js`和`webpack.prod.conf.js`的new HtmlWebpackPlugin中配置

  ```
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    favicon: path.resolve('favicon.png')
  })
  ```

+ 解决IE上placeholder的兼容性问题，使用到vue的mixins

```
// 定义mixin
import {isIE, supportPlaceholder} from 'common/js/env.js'

export const fixPlaceholder = {
  methods: {
    _fixPlaceholder() {
      if(isIE && !supportPlaceholder) {
        const inputs = document.querySelectorAll('input')
        for(let i = 0; i < inputs.length; i++) {
          const input = inputs[i]
          const placeholder = input.getAttribute('placeholder')
          if (input.type === 'password') {
            input.setAttribute('data-passwd', true)
            input.type = 'text'
            input.value = placeholder
          } else {
            input.value = placeholder
          }

          input.onfocus = function (e) {
            if(e.target.value === placeholder) {
              e.target.value = ''
            }
          }

          input.onblur = function (e) {
            if(e.target.value.trim() === '') {
              e.target.value = placeholder
            }
          }
        }
      }
    }
  }
}
```

> 在需要用到的组件中`mounted`钩子函数中使用混入的`_fixPlaceholder方法`



## Axios采坑

+ post请求默认把请求对象转成json，不管是否设置了`Content-Type': 'application/x-www-form-urlencoded`，如果要传入表单类型的数据就需要使用`qs`

```
import qs from 'qs'

export function login(userName, passWord, validateCode) {
  return netWork.post(apis.common.login, qs.stringify({
    userName: userName,
    passWord: hex_md5(passWord),
    validateCode: validateCode.toUpperCase()
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
```

## Element-ui采坑

+ table组件表头和内容错误，使用如下样式代码解决

```
.el-table {
  >>> th.gutter {
    display: table-cell !important;
  }
}
```

+ table组件列宽度设置百分比使用`min-width`属性
+ 设置表头颜色，在el-table上设置`:header-cell-style="{background: '#f2f2f2', color: '#666'}"`

## vuecli3配置

+ 去掉代码混淆`config.optimization.minimize(false)`
