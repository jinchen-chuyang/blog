---
title: centos7.6搭建nginx文件服务器
author: trb
date: '2022-12-08'
---

centos7.6中部署带https服务器的nginx，[参考](https://cloud.tencent.com/document/product/400/35244)；

```shell
[root@VM-12-6-centos nginx]# diff nginx_wx.conf  nginx.conf.default 
117,156d116
< 
<     #wechat_game file server
<     server {
<         #SSL 默认访问端口号为 443
<         listen 443 ssl;
<         #请填写绑定证书的域名
<         server_name baidu.com;#这里需要对应修改
<         #请填写证书文件的相对路径或绝对路径
<         ssl_certificate /path/to/file_name.crt;#这里需要对应修改
<         #请填写私钥文件的相对路径或绝对路径
<         ssl_certificate_key /path/to/file_name.key;#这里需要对应修改
<         ssl_session_timeout 5m;
<         #请按照以下协议配置
<         ssl_protocols TLSv1.2 TLSv1.3;
<         #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
<         ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
<         ssl_prefer_server_ciphers on;
< 
<         location /game_res {#这个路径按喜好修改
<             # 真实路径 
<             alias /path/to/files;#这里需要对应修改
<             # 显示目录
<             autoindex off;#这里需要酌情修改
<             # 显示大小
<             autoindex_exact_size on;
<             # 显示时间
<             autoindex_localtime on;
<             # 防止中文乱码
<             charset utf-8,gbk;
<         }
< 
<         error_page 404 /404.html;
<         location = /40x.html {
<         }
<         
<         error_page 500 502 503 504 /50x.html;
<         location = /50x.html {
<         }
<     }
< 
```