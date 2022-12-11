---
title: nginx隐藏服务端口
author: trb
date: '2022-12-11'
---

### 隐藏http服务端口
通过配置nginx代理转发给响应端口，这端口就可以不对外开放，从而达到隐藏端口的目的。

```nginx
        location /gate {
            #允许跨域请求的域，* 代表所有
            add_header 'Access-Control-Allow-Origin' *;
            #允许带上cookie请求
            add_header 'Access-Control-Allow-Credentials' 'true';
            #允许请求的方法，比如 GET/POST/PUT/DELETE
            add_header 'Access-Control-Allow-Methods' *;
            #允许请求的header
            add_header 'Access-Control-Allow-Headers' *;

			#内网转发，不需要对外开放端口
            proxy_pass https://127.0.0.1:20000/;
        }
```

### 隐藏websocket服务端口
TODO:。。。
