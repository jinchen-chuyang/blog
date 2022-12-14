---
title: cocos creator 引入微信api
author: trb
date: '2022-12-13'
---

在ts中常规引入微信api后会报错，如以下代码：

```js
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    start() {
        wx.login({
            success (res) {
              if (res.code) {
                //发起网络请求
                wx.request({
                  url: 'https://example.com/onLogin',
                  data: {
                    code: res.code
                  }
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
    }

    update(deltaTime: number) {
        
    }
}
```

1. 安装依赖库

```js
npm install --save-dev miniprogram-api-typings
```

2. 导入依赖库

```js
import 'miniprogram-api-typings';
```