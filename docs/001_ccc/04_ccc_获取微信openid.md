---
title: cocos creator 获取微信openid
author: trb
date: '2022-12-14'
---

1. 在客户端调用wx.longin，获取code发给服务端：

```typescript
async login(e: AccountEntity) {
    // 微信
    if (WECHAT){
        let loginPro = new Promise<string>((resolve, reject) => {
            wx.login({
                success(res){
                    if(res.code.length > 0){
                        resolve(res.code);
                    }
                    else{
                        reject(null);
                    }
                }
            })
        }).catch(err => { })

        let loginCode = await loginPro || "";
        console.log('loginCode', loginCode);
        if(loginCode.length == 0){
            console.error('wx.login error');
            return;
        }

        let resWechat = await smc.networkConnector.hcGate.callApi("Wechat", {code: loginCode});
        console.log('resWechat', resWechat);
        
        if (resWechat.isSucc){
            let accountData = e.get(AccountDataComp);
            accountData.id = resWechat.res.openid;
            accountData.key = resWechat.res.session_key;

            console.log('accountData:', accountData);
        }
        else{
            console.error('wx.login server error, msg:', resWechat.err?.message);
            return;
        }
    }
    else{
        console.error('platform is unsupported.');
    }
}
```

2. 在服务端收到code后向指定api请求验证获取openid和session_key：

```typescript
export default async function (call: ApiCall<ReqWechat, ResWechat>) {
    const appId = Config.appid;
    const secret = Config.secret;

    const resp = await axios({
        url: "https://api.weixin.qq.com/sns/jscode2session",
        timeout: 10000,
        params: {
            appid: appId,
            secret: secret,
            js_code: call.req.code,
            grant_type: "authorization_code",
        },
    })

    call.succ(resp.data);
}
```